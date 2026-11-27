---
title: "Overview"
sidebar:
  order: 1
---

The Metrics module collects more than 250 individual metrics to provide detailed visibility into the health and performance of your infrastructure, applications, databases, and messaging systems.

SREs and developers use metrics to monitor system behavior, troubleshoot issues, analyze performance trends, and generate performance reports. Unlike general health indicators, metrics provide granular, component-level operational data for specific components within your environment.

Metrics can show the following information:

- CPU and memory utilization on servers.
- Database activity and active connections.
- Application memory usage.
- Network packet loss and transport errors.
- Messaging queue throughput.

### Key capabilities

The Metrics module provides the following capabilities.

### Purpose of metrics in APIwiz

The Metrics module gives SREs and developers granular operational visibility into system behavior across the entire application and infrastructure stack. Use it to:

- Detect and troubleshoot performance issues, and identify performance bottlenecks, before they impact users.
- Identify resource consumption trends to support capacity planning.
- Correlate application errors with infrastructure behavior to reduce mean time to resolution \(MTTR\).
- Monitor system health and resource utilization continuously across environments.
- Analyze metrics and traces to debug application and infrastructure failures faster.

### Correlate traces with metrics

The Metrics module supports trace and metric correlation to help you identify performance issues and root causes more efficiently.

For example, if an application returns a 500 Internal Server Error, you can review the metrics collected at the same timestamp to identify possible causes, such as exhausted JVM heap memory or abnormal CPU usage. This correlation reduces troubleshooting time and improves incident analysis.