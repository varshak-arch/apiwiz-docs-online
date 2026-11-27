---
title: "Collect log ingestion details "
---

After you create an index, collect the configuration details required to start sending logs to the API logger. These details authenticate requests and route events to the correct index. Where you find these details depends on your setup stage.

### Scenario 1: First-time setup

After you create an index, the system advances to **Step 2 of 2 – Send Events**. This step provides the credentials required to send events to the API logger.

![](https://admin.apiwiz.io/api/guides/images/6a6afbec69d1ae9705729e06)

Copy the following details:

### Scenario 2: Access log ingestion details later

If you created an index and need to retrieve its ingestion details again, use the **Client Credentials** connector card.

To access the log ingestion details for an index:

1. In the **Connector** module, select **APIwiz Integration** \> **Client Credentials**.
  ![](https://admin.apiwiz.io/api/guides/images/6a68ad9969d1ae9705728547)
1. On the **Client Credentials** card, select **View details**.
1. Copy the required information: **x-client-id** and **x-client-secret**

You have the credentials needed to configure log ingestion for the selected index.