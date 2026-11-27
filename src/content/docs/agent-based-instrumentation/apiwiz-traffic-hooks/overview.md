---
title: "Overview"
sidebar:
  order: 1
---

APIwiz traffic hooks capture API and application traffic and forward it to APIwiz for observability, compliance, and monitoring. A traffic hook is any mechanism, agent, plugin, or kernel-level capture method, that attaches to your application, service, or server to collect request, response, and log data without requiring changes to your application's core business logic.

# Purpose

Use APIwiz traffic hooks to:

- Capture distributed traces, application logs, and compliance metadata across different languages, frameworks, and deployment environments.
- Forward captured telemetry to the APIwiz Observability module using the OpenTelemetry Protocol \(OTLP\) or the APIwiz runtime agent endpoint.
- Enable observability for applications running on VMs, containers, Kubernetes clusters, and legacy or brownfield systems.
- Support both language-specific instrumentation and infrastructure-level capture, so you can choose the method that fits your environment.

# Key features and benefits

# Types of traffic hooks

APIwiz supports the following traffic hook types: