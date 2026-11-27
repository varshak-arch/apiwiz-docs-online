---
title: "Quickstart"
sidebar:
  order: 6
---

The following steps describe the end-to-end process for creating an index and viewing logs in the Application Logs module.

1. [**Create an index**](/observability-and-monitoring/application-logs/indexes/): In the Application Logs module, create a new index and define the index mapping based on your expected application log structure.
1. [**Collect log ingestion details**](/observability-and-monitoring/application-logs/collect-log-ingestion-details/): From the **Client Credentials** connector card, copy the required ingestion details: Index Name, Client ID, and Client Secret.
1. [**Configure log ingestion**](/observability-and-monitoring/application-logs/use-the-apiwiz-agent-or-fluent-bit/): Configure the copied ingestion details in the Apiwiz traffic hooks, and integrate it with your target application or service.
1. [**Verify log ingestion**](/observability-and-monitoring/application-logs/monitor-and-verify-logs/): Generate application activity, then confirm that logs are successfully ingested and displayed in the logs table for the configured index.

Logs from your configured application or service are ingested and displayed in the Application Logs module, ready for you to query and analyze.