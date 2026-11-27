---
title: "Overview "
sidebar:
  order: 1
---

Application logs are generated directly from application code. Developers include log statements in the code to record important runtime information, such as received requests, execution flow, and debugging details. These logs help you monitor application behavior and troubleshoot issues by providing insights into request processing status and debug-level messages.

Application logs capture the complete, end-to-end log lifecycle generated across an entire API execution flow.

# Purpose 

Application logs support debugging by providing detailed insights into application behavior during runtime. Use application logs to:

- Identify the root cause of failures.
- Understand execution flow and system behavior.
- Analyze issues that may not be visible through tracing alone.

While tracing provides a high-level view of request flow, it may not capture detailed internal events or error contexts. Application logs complement tracing by providing granular information, such as debug messages, request-handling details, and error descriptions.

By integrating application logs into the system, you can access and analyze log data directly within the platform, without having to request logs from other teams. This enables faster troubleshooting and improves operational efficiency.

#### Storage architecture

The storage backend for application logs is Grafana Loki. Loki is optimized for logs and stores data as Timescale DB chunks, delivering faster ingestion and retrieval speeds for high-volume logs.

# Key capabilities and benefits

# Metadata labels and querying

The platform attaches indexes and metadata to incoming logs during ingestion:

**Indexes/labels:**

>

**Metadata:**

Indexes act as the primary search keys, making queries fast and targeted. Search application logs using LogQL \(Loki Query Language\) instead of manual index selection.

# Methods to ingest application logs

Application logs can be ingested into the system using one of the following methods:

You must configure one of these methods within your application environment to enable application log ingestion.

## Agent-based log ingestion

In the agent-based approach, an agent, such as the Java Observability Agent, is integrated directly with the application. The agent captures logs generated within the application code and forwards them to the API.

For example, developers may add log statements such as:

- log info request received
- debug request processed

When the application runs, the agent monitors these log outputs and forwards them to the API for processing.

This method captures logs specific to the attached application only. For example, if a banking application is connected to the API through the agent, the agent collects logs from that application and forwards them to the logging system.

## Fluent Bit–based log ingestion

Fluent Bit is an external log collector that runs independently of the application. Instead of capturing logs directly from the application code, Fluent Bit reads log entries from a specified file location where the application writes its logs, then forwards them to the API.

Use this method when your application already stores logs in files and doesn't require direct code-level integration.

Once you configure the selected ingestion method, it begins collecting and forwarding application logs to the system for monitoring and analysis.