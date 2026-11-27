---
title: "Default rule groups"
---

Default rule groups are predefined security rule sets that detect malformed requests, protocol violations, suspicious payloads, and common attack techniques. These rule groups help protect APIs and web applications without requiring manual configuration.

Each rule group checks specific parts of an HTTP request, such as the request line, headers, URL, query parameters, or body.

### General Security Validator

The **General Security Validator** contains predefined rules that detect malformed requests, invalid payloads, and common security anomalies in HTTP traffic. Use this rule group to identify parsing errors, suspicious request structures, and abnormal input before they reach the application.

### Protocol Enforcement Validator

The **Protocol Enforcement Validator** contains predefined rules that ensure requests follow valid HTTP standards and protocol behavior. Use this rule group to detect missing required headers, invalid methods, malformed request lines, conflicting headers, and other RFC compliance issues.

### Protocol Attack Validator

The **Protocol Attack Validator** contains predefined rules that detect attacks targeting HTTP protocol behavior, request formatting, header parsing, and injection through malformed requests. Use this rule group to prevent request smuggling, header injection, response splitting, and protocol abuse.

### LFI: Local File Inclusion Validator

The **LFI: Local File Inclusion Validator** contains predefined rules that detect attempts to access unauthorized local files or directories on the server. Use this rule group to prevent path traversal attacks used to read sensitive system files, application files, or configuration data.

### Possible Remote File Inclusion \(RFI\) Attack Validator

The **Possible Remote File Inclusion \(RFI\) Attack** validator contains predefined rules that detect attempts to load remote files or malicious scripts through user-controlled URLs. Use this rule group to prevent attackers from including external content that may lead to code execution or server compromise.

### RCE: Remote Command Execution Validator

The **RCE: Remote Command Execution** validator contains predefined rules that detect attempts to inject and execute operating system commands through request parameters, headers, or payloads. Use this rule group to prevent attackers from gaining control of the server through command injection vulnerabilities.

### PHP Attacks Validator

The **PHP Attacks Validator** contains predefined rules that detect malicious PHP code, script upload attempts, dangerous function calls, and PHP-specific exploitation techniques. Use this rule group to protect PHP-based applications from code injection and remote execution attempts.

### XSS: Cross-Site Scripting Validator

The **XSS: Cross-Site Scripting** validator contains predefined rules that detect malicious scripts, unsafe HTML tags, encoded payloads, JavaScript injection, and browser-specific XSS techniques. Use this rule group to prevent attackers from injecting client-side code that can steal cookies, hijack sessions, or deface web pages.

### SQLI: SQL Injection Validator

The **SQLI: SQL Injection** validator contains predefined rules that detect malicious SQL keywords, authentication bypass attempts, database enumeration, blind SQL injection, encoded payloads, comments, and database-specific attack patterns. Use this rule group to protect applications from unauthorized database access or data manipulation.

### MS-ThreatIntel-AppSec Validator

The **MS-ThreatIntel-AppSec** validator contains threat intelligence–driven security rules based on known attack behaviors, suspicious payloads, and emerging application security threats. Use this rule group to detect advanced attack patterns that may not match traditional signatures.

### OWASP Violations Validator

The **OWASP Violations Validator** contains predefined rules based on common risks from the OWASP API Security Top 10 and OWASP Web Application Security Top 10. Use this rule group to detect broken authorization, exposed sensitive data, injection attacks, missing rate limits, and other common API security weaknesses.

The OWASP Violations Validator helps secure APIs quickly by covering the most common real-world attack categories using ready-made protections. It reduces manual rule creation and improves protection against modern application threats.

### IP Rule Validator

The **IP Rule Validator** contains predefined rules that validate incoming requests based on source IP addresses, allow or deny lists, and VPN or proxy detection. Use this rule group to restrict access from unauthorized networks and improve perimeter security.

This rule group checks whether a request originates from:

- Allowed IP addresses or trusted networks
- Blocked or denied IP addresses
- Known VPN providers or proxy services
- Suspicious masked or anonymous sources

Use this rule group for geo-restriction, internal-only APIs, admin portal protection, and bot traffic reduction.

The IP Rule Validator strengthens first-line access control by allowing organizations to trust known networks and block suspicious sources before requests reach backend systems.

### Compliance Rule Validator

The **Compliance Rule Validator** contains predefined rules that verify whether incoming requests, responses, and API behavior meet internal security policies, regulatory standards, and governance requirements.

This rule group helps organizations maintain compliance with the following frameworks:

- PCI-DSS
- GDPR
- HIPAA
- ISO 27001
- SOC 2
- Internal enterprise security policies

This rule group checks traffic and configurations for policy violations such as:

- Sensitive data exposure
- Missing required security headers
- Unauthorized access to regulated data
- Weak encryption usage
- Logging or audit gaps
- Non-compliant request or response patterns
- Improper data handling practices

**Example use cases:**

The Compliance Rule Validator helps organizations continuously monitor API traffic for policy violations, reduce regulatory risk, and maintain audit readiness.