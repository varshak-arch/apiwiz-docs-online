---
title: "Quickstart"
sidebar:
  order: 6
---

This quickstart walks you through the end-to-end process of creating an index and viewing logs in the API Transaction Logs module.

To create an index and view logs, follow these steps:

1. [**Create an index**](/observe/api-transaction-logs/indexes/): Provide an index name and, optionally, assign one or more teams. The index becomes available to receive API transaction logs.
1. [**Collect log ingestion details**](/observe/api-transaction-logs/collect-log-ingestion-details/):** **Copy the `x-client-id`, `x-client-secret`, and index name required to authenticate requests and send logs to the configured index.
1. [**Configure APIwiz Traffic Hooks**](/observe/api-transaction-logs/use-apiwiz-traffic-hooks/):** **Configure the collected log ingestion details in the APIwiz Observability Agent, SDK, or plugin, including how incoming transaction logs are ingested and mapped based on your application's JSON log structure.
1. [**Verify log ingestion**](/observe/api-transaction-logs/monitor-and-verify-logs/):** **Trigger API requests, select the configured index, and verify that transaction logs are ingested successfully.