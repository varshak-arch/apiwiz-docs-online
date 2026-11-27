---
title: "Insights and inventory"
---

The API Compliance dashboard groups two distinct views under the Overview tab: a set of summary widgets that show platform-wide traffic and compliance metrics, and an inventory table that lists individual API operations with their resource compliance state. Use the summary widgets to monitor compliance trends at a glance, and use the inventory to locate, filter, and drill into specific API operations.

![](https://admin.apiwiz.io/api/guides/images/6a75668df5e02aabad95a614)

## API Compliance insights

The **API Compliance** dashboard's **Overview** provides a consolidated view of API traffic activity, compliance status, and operational metrics. Use this tab to monitor API performance, identify compliance violations, and track traffic trends across the platform.

Use the Overview to:

- Monitor API compliance and operational health
- Detect anomalies and error trends
- Identify areas requiring corrective action
- Maintain API governance and reliability across the platform

### Total traffic

The **Total Traffic** card displays the total number of API transactions processed within the selected time range, along with the distribution of compliant and non-compliant traffic, and the volume of shadow and zombie traffic.

Each category displays as a proportional bar with its percentage share of total traffic.

### Non-compliant breakdown

The **Non-Compliant Breakdown** card analyzes non-compliant transactions by the API request or response component in which the violation occurred. Use the **REST / SOAP** and **GraphQL** toggle to switch between protocol types.

For REST or SOAP APIs, the card lists the following components, each with its percentage share and transaction count:

The card displays the total number of non-compliant transactions at the bottom.

### Status code breakup

The **Status Code Breakup** card summarizes API transactions by HTTP status code class.

### Non-compliant activity heatmap

The **Non-Compliant Activity Heatmap** displays non-compliant transaction activity by day across the selected time range, using a color scale from **Less** to **More** to indicate relative volume.

### Filtering by environment

To filter by environment:

1. In the top-right corner of the Overview tab, select the **Environment** dropdown to view data for a specific deployment environment.
1. Select the required environment from the list.

## API compliance inventory

The **API Compliance Inventory** table lists individual API operations and their compliance status. Use the filter tabs to narrow the list by resource compliance state:

- **All**: Displays all API operations
- **Active**: Displays operations with a published OAS
- **Zombie**: Displays operations with a published OAS, but with a deprecated endpoint
- **Shadow**: Displays operations without a published OAS
- **Inactive**: Displays operations not currently receiving traffic for 1 month or more

Each entry in the table displays the following details:

### Filter and sort the inventory

Use the filter icon in a column header to refine the inventory by that column.

Use the sort icon in the **Transactions** column header to sort APIs by recorded transaction count, in ascending or descending order.

### Filtering by consumer apps

Use the **Select Consumer Apps** filter to analyze API traffic and compliance data for a specific application or product that consumes APIs through the API Gateway. This helps teams focus on the behavior and compliance status of a specific consumer, improving the accuracy and relevance of the displayed insights.

To filter by consumer app:

1. On the **Overview** page, select the filter icon in the upper-right corner. 
  ![](https://admin.apiwiz.io/api/guides/images/6a75ea6d45267d9515c9f6f7)
1. Configure the following fields:

1. Select **Filter**.

The dashboard refreshes and displays API compliance and traffic data for the selected gateway, organization, and consumer applications.