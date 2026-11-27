---
title: "Index"
---

An index is a structured data container for API transaction logs. It stores parsed, structured log entries generated from API traffic, enabling:

- Efficient search and filtering
- Log correlation using trace ID
- Time-based analysis
- Status and resource-level monitoring

Before you can ingest and analyze logs, you must configure an index that defines how incoming log data is structured, mapped, and stored in the system.

# Create your first index

When you open the **API Transaction** module for the first time and no index exists, the **Create Index** wizard opens automatically. This wizard guides you through creating your first index.

The wizard starts with **Step 1 of 2 – Create Index**.

To create an index:

1. Open the **API Transaction** module. The **Create Index** wizard opens automatically displaying **Step 1 of 2 – Create Index** with the message *"No Indices configured yet."*
  ![](https://admin.apiwiz.io/api/guides/images/6a7ab3f945267d9515ca30e8)
1. Provide the following details:

1. Select **Next**.

The system proceeds to **Step 2**, where you configure the index details required for log ingestion.

# Create an additional index

If you have already configured an index, you can create additional indexes from the **Manage** menu.

To create an additional index:

1. Select **Manage** \> **Create your index**. 
  ![](https://admin.apiwiz.io/api/guides/images/6a7aba6e45267d9515ca36f6)
1. Provide the following details:

1. Select **Save**.

The new index is added to the **List of indices** and becomes available for log ingestion and analysis.