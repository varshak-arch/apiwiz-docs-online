---
title: "Live Traffic"
---

Use the **Live Traffic** method to generate an OAS from real-time API usage. This method is particularly useful for identifying shadow APIs. APIs that exist in your environment but do not have an OAS in the APIwiz platform. The system captures live API requests and responses to infer the structure of the API and generate a specification based on actual traffic data.

To generate the specification, you must provide a transaction ID along with the API name and description. You can retrieve the transaction ID from the **Compliance** module.

To locate the transaction ID, go to **API Compliance** → **Traffic** tab → **Shadow API** tab.

### Generate an OAS from live traffic

To generate an OAS using Live Traffic, do the following:

1. Select the **Live Traffic** card. The **Live Traffic** configuration panel opens in the right pane.
1. Enter the following details:
  - **Transaction ID**: Enter the transaction ID obtained from a live API call. For example, 69047bc3bdaac04dbe42bf65.
  - **Swagger Name**: Enter a name for the OAS. For example, Loan Sanctions API.
  - **Swagger Description**: Enter a brief description of the API. For example, A simple API to manage loan sanctions.
1. Select **Sync**. If the sync is successful, a confirmation message appears in the bottom-right corner. The system redirects you to the **Design Studio** landing page and the newly created OAS appears in the left pane.
1. Select the OAS from the left pane to view its details in the **Spec Overview** panel.
1. Select **Edit** in the **Spec Overview** panel to begin designing the OAS.