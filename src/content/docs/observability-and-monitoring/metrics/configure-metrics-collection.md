---
title: "Configure metrics collection"
---

To display metrics on the Metrics dashboard, configure a language-specific agent in your application code, or install the OpenTelemetry \(OTel\) Collector for infrastructure metrics such as database and messaging metrics. The configuration process depends on the type of metrics you want to monitor.

### Configure application metrics

Before metrics appear on the dashboard, attach the appropriate language agent to your application code.

To configure application metrics, follow these steps:

1. In your application, attach one of the following language agents:
  - Java
  - Node.js
  - .NET
1. In the agent configuration, enable metrics collection.
1. Configure the following required labels:
  >
1. Configure the following export settings:

The agent automatically exports metrics to your workspace.

For more information about configuring each language agent, see:

- [OpenTelemetry APIwiz Java Observability Agent](#)
- [APIwiz OpenTelemetry .NET Plugin Integration](#)
- [APIwiz NestJS SDK Integration](#)

### Configure infrastructure metrics

Use the OpenTelemetry \(OTel\) Collector to collect and export infrastructure metrics from databases, messaging systems, and other target systems.

#### Prerequisites

- Network connectivity exists between the OTel Collector and the target system, such as a MongoDB server, OracleDB server, or MySQL server.

To configure infrastructure metrics, follow these steps:

1. Install the OTel Collector on the target host.
1. Configure access to the target system with the following details:

1. In the OTel Collector, update the exporter configuration with the following settings:

The OTel Collector exports the collected metrics to your workspace.