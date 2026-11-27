---
title: "Monitor and verify log ingestion"
---

After you create an index, it appears in the **Index** dropdown menu at the top of the left navigation panel. Use this dropdown to select an index and view its ingested logs.

### Select an index

Select an index to load its indexed fields and API transaction logs for analysis.

To select an index:

1. Select the **Index** dropdown.
1. Select the index you want to analyze from the list.
  ![](https://admin.apiwiz.io/api/guides/images/6a69816f69d1ae97057286a3)

The selected index loads its indexed fields, transaction logs, and event data for analysis.

![](https://admin.apiwiz.io/api/guides/images/6a69938c69d1ae97057289b7)

### View indexed fields

The left panel lists the available log fields for the selected index. Each field represents a key extracted from the API event payload, shown as a flattened JSON map with its record count. The record count shows how often that field appears in the selected index.

**Flattened JSON fields**

Flattened JSON fields provide a normalized representation of nested JSON objects. This structure converts hierarchical key-value pairs into a single-level structure using dot \(.\) notation. Dot notation enables indexing, searching, filtering, and aggregation of log data across complex or deeply nested API payloads.

For example, a nested JSON structure appears as a single flattened field:

```text
request.headers.content-type
```

This field name results from flattening the original hierarchical JSON structure, which simplifies analysis and querying within the log system.

### Sort log fields

Sort log fields in the left panel to locate and organize them by preference.

To sort log fields:

1. Next to **Log Fields**, select the sort icon.
1. Select an option:

The log fields list updates based on the selected option.

### View the logs table

In the center panel, the logs table displays details for individual API events. Each row represents a single API request.

#### View tracing

Tracing lets you view the end-to-end flow of an API request across distributed services. If a trace ID is available for a log entry, you can open the corresponding trace to investigate request execution and identify issues across services.

**Prerequisites**

- Tracing enabled in the APIwiz Observability Agent

To view a trace:

1. In the logs table, locate the API event you want to inspect.
1. Select the **Trace** icon for the event.

The API Tracing page opens and displays the end-to-end request flow for the selected API request. Use this view to analyze the services involved, execution time, response status, metadata, and request and response lineage.

![](https://admin.apiwiz.io/api/guides/images/6a69970b69d1ae9705728bec)

### View an event

The **Event** panel, on the right side of the interface, shows the complete, raw structure of a selected log entry for deeper inspection. While the **Statistics** section shows summarized log information, the **Event** panel gives you full visibility into an individual log record.

Use the **Event** panel for:

- **Detailed troubleshooting:** Analyze individual log events and uncover issues that summarized views don't show, including request details, response payloads, and error information.
- **Request and response visibility:** Review the full API request and response, including parameters, headers, status, and latency, to support debugging and root cause analysis.
- **Field discovery:** Identify unindexed fields for future querying, indexing, or configuration.

To view an event:

1. In the logs table, select the log entry you want to inspect. The **Event** panel populates with the entry's log data.
1. Scroll through the panel to examine the nested objects and details.
1. Select **Decrypt** to view the readable content. A **Decrypting** message appears at the top of the **Event** panel while decryption is in progress.

The raw log data displays in structured JSON format once decryption completes. This view shows the unprocessed log content, including request and response details, headers, parameters, HTTP method, URI, payload, status code, timestamps, and latency information. The data appears as key-value pairs in a hierarchical structure, with keys that may contain nested objects.

The log structure varies based on the ingestion mechanism. For logs collected from **gateways**, the following structure applies.

For logs collected from **microservices**, the following structure applies.

For logs collected from **eBPF**, the following structure applies.