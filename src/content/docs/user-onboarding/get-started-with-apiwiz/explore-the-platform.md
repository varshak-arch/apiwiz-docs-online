---
title: "Explore the platform"
---

APIwiz covers the full API lifecycle in one platform. Whether you're defining your first API or managing thousands in production, you can design, build, test, govern, secure, observe, and monetize your APIs from a single place. Here's a high-level view of what each stage lets you accomplish:

## APIwiz modules

APIwiz is organized into purpose-built modules, each covering a specific stage of the API lifecycle.

### Plan and Design

[**API Design**](/plan-and-design/api-design/introduction/)

API Design \(Design Studio\) is a collaborative, low-code workspace for designing and documenting APIs. It follows a model-driven approach: you define reusable data models first, then design the operations, parameters, and responses that use them. It supports OAS, AsyncAPI, GraphQL, and SOAP, and the specifications you create here become the contract that live traffic is validated against.

[**API Linting**](/plan-and-design/api-linting/overview/)

API Linting automatically checks API specifications against your organization's style guides and industry best practices. It catches naming inconsistencies, missing descriptions, improper status codes, and weak security definitions early in the design phase. Rules are grouped into rulesets: global rulesets apply to every specification of a given type, and custom rulesets apply only to the specifications you link them to.

[**API Catalog**](/plan-and-design/api-catalog/overview/)

API Catalog is a centralized repository of every API your organization has designed and published. Published OAS and GraphQL specifications are listed automatically, with endpoints, documentation, versions, and ownership metadata, and can be filtered by environment, team, product, or partner. Use the Tryout feature to send requests and verify responses against the defined schema, and expose published APIs to external developers and partners.

### Build and Test

[**API Builder**](https://docs.apiwiz.io/guides?guideId=6a606b3c69d1ae970571f1d9&pageId=6a703f2a69d1ae970572c87a&version=1)

API Builder is a low-code workflow platform for visually building, executing, and managing API- or queue-triggered workflows. Build workflows by connecting nodes on a drag-and-drop canvas \(Studio mode\) or by editing the workflow definition directly \(Code mode\), and switch between the two at any time. Deployed workflows become production-facing APIs that connect internal services, external APIs, and data sources.

[**API Sandbox**](https://docs.apiwiz.io/guides?guideId=6a606b4369d1ae970571f1e1&pageId=6a72d77167839bf43da9e752&version=1)

API Sandbox is a playground for building and validating workflows with mock data before recreating them in API Builder as live APIs. It shares the same nodes, canvas, and deployment flow as API Builder, and adds static endpoints so you can define a mock request and response directly on a node, without calling a real backend. This lets you test workflow logic without risking production data or repeatedly hitting a live API.

[**API Testing**](https://docs.apiwiz.io/guides?guideId=6a606b4a69d1ae970571f1e9&pageId=6a72d76967839bf43da9e746&version=1)

API Testing validates workflow behavior using scenarios: structured sequences of test cases that verify how one or more APIs perform together. It uses the same nodes and canvas as API Builder, but instead of producing a callable API, it runs the workflow logic directly and reports assertion-based pass and fail results in Insights. There's no deployment or approval step; you save a scenario and run it against the environment you choose, including mock endpoints from API Sandbox.

[**Federated Gateways**](https://docs.apiwiz.io/guides?guideId=6ac75d04a997220630a0850e&pageId=6ac75d04a997220630a08511)

Federated Gateways gives you centralized management of one or more API gateways from a single interface. Configure routing, apply security policies, manage traffic controls, and enforce rate limits across major gateway providers, such as Apigee, Kong, Azure API Management, and AWS, without changing your existing infrastructure.

### Governance automation

[**API Governance**](https://docs.apiwiz.io/guides?guideId=6a9fb24667f2ddaf4b7692f3&pageId=6aec980f013d399772c19d50)

API Governance automatically documents the APIs found in your workspace traffic and keeps that documentation aligned with runtime behavior. On a schedule you choose \(every 3, 7, 15, or 30 days\), it detects shadow APIs and generates an OAS, data dictionary, and sandbox mock workflow for each endpoint, then lints, enriches, and publishes the spec and optionally pushes it to GitHub or GitLab. When live traffic drifts from the documented contract beyond your threshold, it creates new revisions automatically.

### **Security and Compliance**

[**API Compliance**](/security-and-compliance/api-compliance/overview/)

API Compliance checks whether live API traffic matches the specification defined during design. Traffic captured by traffic hooks is compared against the spec, and any request or response with extra fields, missing required fields, or mismatched data types is flagged as non-compliant, down to the specific field or parameter. APIs are also categorized as active, shadow \(traffic with no approved spec\), or zombie \(deprecated but still receiving traffic\).

[**API Security**](https://docs.apiwiz.io/guides?guideId=6a5f9f0569d1ae970571d985&pageId=6ae889bf013d399772c17d59&version=1)

API Security uses the traffic data the platform already captures, including URLs, headers, and request and response bodies, to detect and prevent threats without additional traffic sources. In Active mode, requests that violate a security rule are blocked at the API gateway before reaching backend services. In Passive mode, rules run in the background for monitoring, auditing, and analysis without interrupting production traffic.

### Observability and monitoring

[**API Transaction Logs**](/observability-and-monitoring/api-transaction-logs/overview/)

Transaction logs capture API interactions in real time, including request and response headers, payloads, endpoint paths, methods, status codes, timestamps, and latency. Query logs with filters or SQL-style syntax, set up alerts routed to Slack or email, and open the trace view for any record. Use them to monitor API activity across environments, find failed transactions, and debug issues at the transaction level.

[**Application Logs**](/observability-and-monitoring/application-logs/overview/)

Application logs are generated by your application code and capture runtime details such as received requests, execution flow, debug messages, and errors across an entire API execution path. Logs are ingested through an agent or Fluent Bit, labeled automatically by service and log level, and queried with LogQL. They complement tracing by revealing internal events and error context that a trace alone may not show.

[**API Tracing**](/observability-and-monitoring/api-tracing/overview/)

API Tracing gives you end-to-end visibility into how a request flows through your system, across every service, database, and message queue it touches. Each request is captured as a trace made up of spans and correlated by a shared Trace ID, so you can pinpoint where a failure occurred, identify which span is adding latency, and inspect request and response data at each step. Traces can also be used to generate OAS specifications, test cases, and sandbox environments.

[**Metrics**](/observability-and-monitoring/metrics/overview/)

The Metrics module collects more than 250 metrics across infrastructure, applications, databases, and messaging systems, including CPU and memory utilization, database connections, network errors, and queue throughput. Metrics are collected through Java, Node.js, and .NET agents and the OpenTelemetry Collector. Correlate metrics with traces to find root causes faster, for example checking JVM heap usage at the moment a 500 error occurred.

[**API Monitoring**](/observability-and-monitoring/api-monitoring/overview/)

API Monitoring continuously tracks the availability, performance, and functional correctness of your APIs by running workflows on a schedule. It uses the same workflow-building experience as API Builder, but runs automatically at the interval you set, with no manual run, deployment, or approval. When a check fails, it sends alerts by email, Slack, or Microsoft Teams so you can act before users are affected.

[**API Insights**](https://docs.apiwiz.io/guides?guideId=6a5f788869d1ae970571cb46&pageId=6ab0fbb7dfd45349cb8bd7a4)

API Insights provides real-time observability across your entire API estate, with no manual discovery or documentation required. APIs are discovered automatically by an agent in your infrastructure and listed in the Inventory, while the Dashboard summarizes traffic, compliance, security, and resource health by environment. For each endpoint, you can open a dependency graph, behavioral insights, and compliance and security audit logs.

### Marketplace and monetization

[**API Marketplace**](/marketplace-and-monetization/api-marketplace/overview/)

The API Marketplace \(Developer Portal\) is where your organization publishes APIs, documentation, and packages for external developers and partners. Producers manage what's published through Site Administration; consumers discover APIs, subscribe to packages, create applications, and receive credentials to call endpoints. It provides a clear boundary between your internal platform and the partners who integrate with your APIs.

[**API Monetization**](/marketplace-and-monetization/api-monetization/overview/)

API Monetization turns API specifications into commercial packages that business users can price and bill without gateway expertise. Define metering rules on request and response conditions, such as charging only for successful calls, and choose flat, unit-based, or tiered rate cards in multiple currencies. The module generates consumer or corporate invoices automatically and lets consumers raise disputes that are tracked for reconciliation. It works with or without a gateway.

### Utilities

[**Registry**](/utilities/service-registry/overview/)

Registry is a metadata storage module for information that doesn't belong to any other module. It works like a lightweight spreadsheet inside APIwiz: create tables with custom columns and data types, update rows as needed, and export them to Excel. The system-maintained App Registry automatically records apps and consumers created across your connected gateways, and Custom Registries hold any metadata your team needs to track.

[**Consent Management**](/utilities/consent-management/overview/)

Consent Management lets your organization collect and manage user consent for accessing specific data, similar to the permission screen you see when signing in to an app with Google. Configure what data to request in Consent Groups and review what users have submitted in Audit Logs. Your client's development team handles the backend integration through APIs, while APIwiz provides the configuration and audit interface.

### Configuration and settings

[**Connectors**](https://docs.apiwiz.io/guides?guideId=6a606c8569d1ae970571f25e&pageId=6ab0fc69dfd45349cb8bd84e)

Connectors integrate APIwiz with the external tools your organization uses, including source control, CI/CD and DevOps tools, API gateways, identity providers, databases, message queues, caches, and notification channels. Once configured, connectors keep your data, configurations, and workflows synchronized from one workspace, and you can restrict sensitive connections to specific teams.