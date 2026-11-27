---
title: "Overview"
sidebar:
  order: 1
---

API Security extends the existing observability capabilities by using captured API traffic data to detect and prevent security threats. Because the platform already collects request and response data, you can apply security policies without requiring additional traffic sources.

### How observability supports security

Observability enables the system to capture and analyze API traffic during design, build, and runtime stages. The collected data includes:

- URLs
- Request bodies
- Response bodies
- Request headers
- Response headers

Because this information is already available, the platform can evaluate traffic against your configured security rules.

### Purpose of API Security in APIwiz

API Security in APIwiz helps you protect your APIs by continuously monitoring traffic, detecting threats, and enforcing security policies across your API ecosystem. It enables you to:

- Detect and respond to security threats in real time.
- Enforce security policies at the API gateway level.
- Monitor API traffic for suspicious patterns and anomalies.
- Audit API activity for compliance and governance.
- Validate security rules without disrupting production traffic.
- Reduce the risk of unauthorized access, data exposure, and API abuse.

### Key capabilities

### Deployment modes

The API Security platform supports two deployment modes.

#### Active mode

In Active mode, the platform evaluates incoming requests in real time. If a request violates a security rule, the system blocks it immediately at the API gateway before it reaches backend services.

Use Active mode when you need immediate threat prevention and policy enforcement.

#### Passive mode

In Passive mode, the request continues to the backend microservices. Security rules run in the background to inspect traffic for monitoring, auditing, and analysis.

Use Passive mode when you want to assess traffic patterns or validate rules without interrupting production traffic.