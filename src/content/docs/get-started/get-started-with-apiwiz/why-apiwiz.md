---
title: "Why APIwiz"
sidebar:
  order: 3
---

APIwiz covers the full API lifecycle in one platform. Whether you're defining your first API or managing thousands in production, you have the tools to design, build, secure, monitor, and monetize all from a single place. Here's a high-level view of what each stage lets you accomplish:

## APIwiz modules

APIwiz is organized into purpose-built modules, each covering a specific stage of the API lifecycle:

### Planning, design, and documentation

#### API Portfolio

An API Portfolio is APIwiz's top-level organizational structure, grouping related services. Each service is a collection of API endpoints and resources, along with their metadata, request/response headers, query parameters, and schema information. Resources can have dependencies, where one API call must complete before another triggers within a service or across services and portfolios, giving full visibility into how APIs relate and interact.

[**API Design**](/design/api-design/introduction/)

API Design is a low-code, design-first environment where both technical and non-technical users can create APIs. Define endpoints, data models, request and response structures, and authentication requirements before writing any code, ensuring APIs are well-structured and consistent from the start.

[**API Linting**](/design/api-linting/overview/)

API Linting automatically checks your API definitions against predefined rules and style guidelines. It catches inconsistencies, missing fields, naming violations, and structural issues early before they progress further in the lifecycle.

[**API Catalog**](/design/api-catalog/overview/)

API Catalog is a centralized, searchable directory of all published APIs in your organization. Developers and consumers can browse APIs, explore documentation, and discover what's available for reuse, improving adoption across teams.

### Building and testing

#### API Builder

API Builder is a low-code workflow platform that enables users to visually build, execute, and manage API- or queue-triggered workflows with minimal coding. It simplifies the creation of integration and automation workflows through an intuitive visual interface, reducing development effort and accelerating delivery.

#### API Sandbox

API Sandbox is a low-code platform for creating and testing mock APIs. Users can simulate API behavior without deploying actual services, making it ideal for development and testing.

#### API Testing

API Testing is a workflow testing platform where users can design, save, execute, and validate workflows, and view detailed execution events and logs.

#### API Gateways

API Gateways provides centralized management of one or more gateways from a single interface. Configure routing, apply security policies, manage traffic controls, and enforce rate limits across any major gateway provider, without changing your existing infrastructure.

### Observability and Monitoring

[**API Transaction Logs**](https://admin.docs.io/guides?guideId=6a367668cf1933e4d4c177b2&groupId=API+Transaction+Logs&pageId=6a36782ccf1933e4d4c1780d)

Transaction logs capture API-level interaction data, traffic flows, endpoints, and request/response details in real time via a client-side JAR agent. Use them to monitor API performance, debug errors, and trace individual transaction flows end-to-end.

[**Application Logs**](https://docs.apiwiz.io/guides?guideId=6a367668cf1933e4d4c177b2&groupId=Application+Logs&pageId=6a38d9f2cf1933e4d4c19da7)

Application logs are generated directly from application code, capturing runtime details such as received requests, execution flow, and debug messages, across an entire API execution flow. Use application logs to identify root causes of failures, understand execution flow and system behavior, and analyze issues that tracing alone may not reveal.

[**API Tracing**](https://docs.apiwiz.io/guides?guideId=6a367668cf1933e4d4c177b2&groupId=API+Tracing&pageId=6a390891cf1933e4d4c1a4f9)

API Tracing gives end-to-end visibility into how a request flows through your system every service, database, and message queue it touches. Distributed failures rarely trace back to a single service; they're usually a chain of interactions across systems, which is hard to reconstruct from fragmented logs. API Tracing captures each request as a structured, end-to-end trace, giving teams the context to investigate failures, analyze bottlenecks, and validate API behavior in production.

#### API Monitoring

API Monitoring is a workflow monitoring platform that combines workflow execution with scheduling. Users can attach multiple schedules to a single workflow to enable automated, recurring runs.

[**Metrics**](https://docs.apiwiz.io/guides?guideId=6a367668cf1933e4d4c177b2&groupId=Metrics&pageId=6a390ceccf1933e4d4c1a624)

The Metrics module collects over 250 individual metrics across infrastructure, applications, databases, and messaging systems. Use it to monitor CPU and memory utilization, database activity, network performance, and messaging queue throughput.

#### [API Insights](/observe/api-insights/overview/)

API Insights gives real-time, unified observability across your API estate traffic, compliance, and security with no manual discovery required. APIs are auto-discovered by an in-infrastructure agent and listed in the Inventory. The Dashboard summarizes estate-level health; per-endpoint tools show individual API behavior, compliance, and security detail.

### Security and compliance

[**API Security**](https://docs.apiwiz.io/guides?guideId=6a3b5896196683f9c8784e55&groupId=API+Security&pageId=6a3b5b97196683f9c8784f05)

API Security uses the platform's existing traffic data to detect and prevent security threats. Because the platform collects request and response data during design, build, and runtime stages, you can apply security policies without requiring additional traffic sources.

[**API Compliance**](https://docs.apiwiz.io/guides?guideId=6a3b5896196683f9c8784e55&groupId=API+Compliance&pageId=6a3cd44fd0dd14afc2778d47)

API Compliance checks whether your live API traffic matches the API specification defined during the design phase. When a request or response doesn't match the defined schema, the system flags it as non-compliant, helping your team identify and resolve inconsistencies before they affect consumers.

### Marketplace and Monetization 

[**API Monetization**](https://docs.apiwiz.io/guides?guideId=6a3e4194d0dd14afc277b1de&groupId=Monetization&pageId=6a449b67777f9d62fa7511ca)

API Monetization lets you turn your APIs into revenue-generating products by charging external consumers and partners for API usage. The platform tracks traffic, applies your configured pricing rules, and generates invoices automatically, so you can focus on building APIs while the billing takes care of itself.

[**API Marketplace**](/monetize/api-marketplace/overview/)

The API Marketplace is a public-facing portal where external developers and third-party partners can discover, explore, and consume your organization's published APIs. It acts as a clean separation between your internal API platform where APIs are built, tested, and managed and the outside world, where partners and developers integrate with them.

### Platform utilities

#### [Service Registry](/design/service-registry/overview/)

Registry is APIwiz's metadata storage module a place to store, track, and manage information that doesn't belong to any other module in the platform. It works like a lightweight spreadsheet: define custom tables with your own columns and data types, then log and update rows as needed. Anyone with access can view or update the data at any time.

#### [Connectors](/integrations/connectors/overview/)

Connectors are the integration bridge between APIwiz and the external tools your organization uses, from source control and CI/CD pipelines to databases and identity providers. By configuring connectors, you bring all your tools into a single, unified workspace where they can communicate effectively. This eliminates the need to switch between multiple interfaces and keeps your data, configurations, and workflows synchronized across your entire API ecosystem.

#### [Consent Management](/design/consent-management/overview/)

Consent Management lets your organization collect and manage user consent for accessing specific data similar to a sign-in permission screen that lists requested data items for the user to allow or deny. In APIwiz, clients define what data to collect, configure the consent structure, and audit collected data, all from one centralized module.