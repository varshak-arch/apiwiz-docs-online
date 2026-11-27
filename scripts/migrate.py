"""Migrate the APIwiz CMS markdown export into the Starlight site.
Usage: python3 -I migrate.py <source guides dir> <site root>
"""
import base64, hashlib, json, os, re, sys
from pathlib import Path

SRC = Path(sys.argv[1]); SITE = Path(sys.argv[2])
DOCS = SITE / 'src/content/docs'; IMG = SITE / 'src/assets/images'

TOPICS = {
  'get-started': ('Get started', ['Get started with APIwiz', 'Vendor-managed platform', 'Deployment and Installation', 'Access control', 'Settings']),
  'design': ('Design & govern', ['API Design', 'API Linting', 'API Compliance', 'API Security', 'API Catalog', 'Service Registry', 'Consent Management']),
  'observe': ('Observe', ['API Insights', 'API Transaction Logs', 'Application Logs', 'API Tracing', 'API Monitoring', 'Metrics', 'APIwiz traffic hooks', 'APIwiz traffic agent hooks']),
  'monetize': ('Marketplace & monetization', ['API Marketplace', 'API Monetization']),
  'integrations': ('Gateways & integrations', ['Apigee', 'AWS', 'Azure', 'Axway', 'Kong', 'KrakenD', 'Nginx', 'Connectors']),
}
FIRST = ['overview', 'introduction', 'why apiwiz', 'getting started', 'get started', 'quickstart']

def slug(s):
    s = s.lower().replace('.net', 'dotnet').replace('&', 'and')
    return re.sub(r'[^a-z0-9]+', '-', s).strip('-')

folder_topic = {f: t for t, (_, fs) in TOPICS.items() for f in fs}
missing = [d.name for d in SRC.iterdir() if d.is_dir() and d.name not in folder_topic]
assert not missing, missing

FM = re.compile(r'^---\n(.*?)\n---\n?', re.S)
pages, report = [], {'collisions': [], 'images': 0, 'links_fixed': 0, 'links_unresolved': [], 'empty_headings': 0}
for path in sorted(SRC.rglob('*.md')):
    rel = path.relative_to(SRC)
    raw = path.read_text(encoding='utf-8')
    m = FM.match(raw)
    meta = dict(re.findall(r'^(\w+):\s*"?(.*?)"?\s*$', m.group(1), re.M)) if m else {}
    body = raw[m.end():] if m else raw
    parts = [slug(p) for p in rel.parts[:-1]]
    out = Path(folder_topic[rel.parts[0]], *parts, (slug(path.stem) if slug(path.stem) != 'index' else 'indexes') + '.md')
    pages.append(dict(src=rel, out=out, title=meta.get('title', path.stem), pageId=meta.get('pageId'), body=body, size=len(raw)))

# Case-variant duplicates map to the same slug: keep the largest, report the rest.
by_out = {}
for p in pages:
    by_out.setdefault(p['out'], []).append(p)
kept = []
for out, group in by_out.items():
    group.sort(key=lambda p: -p['size'])
    kept.append(group[0])
    if len(group) > 1:
        report['collisions'].append({'kept': str(group[0]['src']), 'dropped': [str(g['src']) for g in group[1:]]})
pid_to_url = {}
for p in pages:  # dropped duplicates' ids point to the kept page
    keeper = by_out[p['out']][0]
    if p['pageId']:
        pid_to_url[p['pageId']] = '/' + str(keeper['out'].with_suffix('')) + '/'

FENCE = re.compile(r'(```.*?```|`[^`\n]+`)', re.S)
HTML_OK = {'br', 'img', 'a', 'p', 'b', 'i', 'u', 'em', 'strong', 'sup', 'sub', 'kbd', 'details', 'summary', 'code', 'pre', 'span', 'div', 'table', 'tr', 'td', 'th', 'thead', 'tbody', 'ul', 'ol', 'li', 'hr', 'mark'}
DATAIMG = re.compile(r'!\[([^\]]*)\]\(data:image/(png|jpe?g|gif|webp|svg\+xml);base64,([A-Za-z0-9+/=\s]+)\)')
OLDLINK = re.compile(r'https?://docs\.apiwiz\.io/guides\?[^)\s"]*?pageId=([0-9a-f]{24})[^)\s"]*?(#[^)\s"]*)?(?=[)\s"]|$)')

def escape_text(seg):
    def esc(m):
        tag = m.group(1).lower()
        return m.group(0) if tag in HTML_OK else '&lt;' + m.group(0)[1:]
    seg = re.sub(r'</?([A-Za-z][\w.-]*)', lambda m: m.group(0) if m.group(1).lower() in HTML_OK else '&lt;' + m.group(0)[1:], seg)
    seg = re.sub(r'\{', '&#123;', seg) if False else seg
    return seg

for p in kept:
    body = p['body']
    out_md = DOCS / p['out']
    img_dir = IMG / p['out'].parent
    def save(m):
        alt, ext, data = m.group(1), m.group(2), re.sub(r'\s', '', m.group(3))
        blob = base64.b64decode(data)
        ext = {'jpeg': 'jpg', 'svg+xml': 'svg'}.get(ext, ext)
        name = hashlib.sha1(blob).hexdigest()[:12] + '.' + ext
        img_dir.mkdir(parents=True, exist_ok=True)
        (img_dir / name).write_bytes(blob)
        report['images'] += 1
        relpath = os.path.relpath(img_dir / name, out_md.parent)
        return f'![{alt or p["title"]}]({relpath})'
    body = DATAIMG.sub(save, body)
    def fix(m):
        url = pid_to_url.get(m.group(1))
        if not url:
            report['links_unresolved'].append(m.group(0)); return m.group(0)
        report['links_fixed'] += 1
        return url  # old anchors are CMS block ids, not heading slugs, so drop them
    body = OLDLINK.sub(fix, body)
    # Escape placeholder "tags" like <your-host> outside code so they render as text.
    body = ''.join(seg if i % 2 else escape_text(seg) for i, seg in enumerate(FENCE.split(body)))
    body = body.replace('\\-', '-')
    report['empty_headings'] += len(re.findall(r'^#{2,6} .+\n\s*\n(?=#{2,6} )', body, re.M))
    stem = p['out'].stem.replace('-', ' ')
    order = FIRST.index(stem) + 1 if stem in FIRST else None
    fm = ['---', f'title: {json.dumps(p["title"])}']
    if order: fm.append(f'sidebar:\n  order: {order}')
    fm.append('---\n')
    out_md.parent.mkdir(parents=True, exist_ok=True)
    out_md.write_text('\n'.join(fm) + '\n' + body.lstrip('\n'), encoding='utf-8')

report['pages_written'] = len(kept)
report['topics'] = {t: {'label': l, 'folders': [(f, slug(f)) for f in fs]} for t, (l, fs) in TOPICS.items()}
json.dump(report, open(SITE / 'migration-report.json', 'w'), indent=2, default=str)
print(json.dumps({k: (v if not isinstance(v, list) else len(v)) for k, v in report.items() if k != 'topics'}, indent=1))
