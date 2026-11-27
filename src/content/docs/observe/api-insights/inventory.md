---
title: "Inventory"
---

The Inventory is a comprehensive table of every API endpoint discovered by the agent across your environment. Each row represents one endpoint, identified by its HTTP method and resource URI. The Inventory is the primary workspace for understanding the state of your API estate; what has been discovered, what has been documented, and what still needs attention.

![](https://admin.apiwiz.io/api/guides/images/6a6aeb4a69d1ae9705729ab0)

## Resource Status

Every endpoint in the Inventory has a Resource Status that reflects its current governance state. The status changes as the API progresses through the discovery and documentation lifecycle.

## Inventory Columns

The Inventory table provides a wide range of metadata columns for each endpoint. Use **Custom Views** to show or hide columns based on your analysis needs.

### Discovery and identification

### Design and documentation

### Traffic and activity

### Infrastructure and service

### Compliance and security

## Endpoint actions

Hovering over an endpoint row reveals three action icons that provide deeper analysis for that specific endpoint: 

![](https://admin.apiwiz.io/api/guides/images/6a6aefd469d1ae9705729b2f)

## Custom Views

**Custom Views** allows you to save and reuse filter configurations for the Inventory. Select **Custom Views** in the top-right corner to open the panel.

- Each saved view stores a specific combination of filters; for example, filtering by Resource URI, HTTP Method, or Resource Type.
- Use the search bar to find a specific saved view quickly.
- Select a view from the list to apply it. The Inventory filters automatically to match that view's configuration.
- The currently active view is marked as **Current View**.

## Filter

Select the filter icon to open the Filters panel. Use it to narrow down the Inventory by any column value; for example, filter by **Resource Status** to view only Shadow APIs, or by **Resource Type** to focus on REST endpoints.

- Enter or select the values you want to filter by.
- Select **Filter** to apply.
- Select **Cancel** to discard.

## Generate OAS

For Shadow API endpoints, the **Design Documents** column displays a **Create OAS** button. Selecting it redirects you to the **API Compliance** view for that endpoint, where you can generate an OAS specification from the observed traffic.

The API Compliance view displays all transactions for the selected endpoint with the following columns:

Use the time filter options; **Last 24 Hours**, **Last Week**, **Last 2 Weeks**, **Previous Month**, **Previous 3 Months**, or **Custom**; to narrow down the transactions used for OAS generation.

#### Generate OAS from transactions

![](https://admin.apiwiz.io/api/guides/images/6a6af4af69d1ae9705729c6e)

#### Configure the OAS

When the **Generate OAS** panel opens, select where the generated OAS should be added:

- **Create new OAS**: Generates a new OAS specification. Enter an **OAS Name** and **Description**.
- **Combine with existing OAS**: Merges the generated specification into an existing OAS. Select the OAS from the dropdown. All OAS specifications created in Design Studio are available here.

![](https://admin.apiwiz.io/api/guides/images/6a6af4f669d1ae9705729c88)

Select **Preview** to see a preview of the generated specification, or **Code** to view the raw code. Select **Load Preview** to refresh the preview after making changes.

Select **Generate** to create the OAS. The generated specification is added to Design Studio and linked to the endpoint, moving it from **Shadow** to **Active**. 

Once the OAS is generated, it is available in **Design Studio** where you can review, edit, and publish it. See [Design Studio](/design/api-design/oas/changing-the-oas-status/) for details.