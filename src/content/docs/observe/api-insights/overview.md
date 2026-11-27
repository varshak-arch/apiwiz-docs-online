---
title: "Overview"
sidebar:
  order: 1
---

API Insights provides real-time observability across your entire API estate. It gives you a unified view of all APIs running in your environment; covering traffic patterns, compliance status, and security posture — without requiring manual discovery or documentation upfront.

APIs are automatically discovered through an agent deployed in your infrastructure and appear in the Inventory. The Dashboard summarizes the health and behavior of your API estate at the environment level, while per-endpoint analysis tools provide deeper visibility into individual API behavior, compliance violations, and security threats.

API Insights is organized into two main sections:

- **Dashboard**: An environment-level summary of traffic, compliance, security, and resource health across all discovered APIs.

![](https://admin.apiwiz.io/api/guides/images/6a69905269d1ae9705728878)

- **Inventory**: A detailed, per-endpoint view of every API discovered by the agent, with columns covering traffic, compliance, security, latency, and service metadata.

![](https://admin.apiwiz.io/api/guides/images/6a69919669d1ae9705728913)

Each endpoint in the Inventory also provides three deeper analysis views:

- **Behavioral Insights**: Transaction-level analysis covering latency, threat severity, sensitive data, and geo-location.
- **Compliance Audit Logs**: A record of compliance violations per endpoint.
- **Security Audit Logs**: A record of security issues detected per endpoint.

The **Environment** selector in the top-right corner filters the entire module by environment. APIs are tagged to environments during backend configuration. If no environment is specified, the API is assigned to **Unknown** by default.