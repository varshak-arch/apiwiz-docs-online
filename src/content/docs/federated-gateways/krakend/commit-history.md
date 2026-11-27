---
title: "Commit History"
---

The Commit History tab is where you review a chronological audit trail of configuration changes made to a runtime through APIwiz, along with the exact KrakenD configuration produced at each commit. This gives visibility into who changed what, when, and lets you inspect the resulting gateway configuration for any point in history.

## Commit Info

The left panel, **Commit Info**, lists runtimes \(e.g., `krakend-test-delete-later`\) as expandable groups. Expanding a runtime reveals its individual commits as a chronological list of commit messages, such as:

- Created New Global Plugin via APIWIZ
- Updated Global Plugin via APIWIZ
- Removed Global Plugin via APIWIZ
- Updated Service From APIWIZ
- Deploying the first build
- Deploying
- Updated Default Host via APIWIZ

Selecting a commit message loads its details in the **Commit Overview** panel on the right.

## Commit Overview

## KrakenD Configuration

Below the commit metadata, the **KrakenD Configuration** panel displays the full resulting KrakenD configuration as formatted JSON as of that commit. A copy icon in the top-right corner of the panel allows copying the configuration JSON.

Settings captured in this configuration include:

![](https://admin.apiwiz.io/api/guides/images/6a90269367f2ddaf4b762f00)