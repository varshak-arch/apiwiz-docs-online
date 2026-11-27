---
title: "Viewing API transactions "
---

Select the API for which you want to view compliance details from the **API Compliance Inventory**. The inventory includes four types of APIs: **Active**, **Zombie**, **Shadow**, and **Inactive**.

The Transactions page shows all captured transactions for the selected API within the chosen time range. Each transaction is a request and its response.

Use this page to view all transactions for the API, identify compliant and non-compliant transactions, review validation results for each request and response component, and navigate to the corresponding trace for further investigation.

# All APIs

The **All** tab displays every API operation in the API Compliance Inventory, regardless of its resource compliance state: active, zombie, shadow, or inactive. Use this view to get a complete picture of every API operation the platform has detected, along with its compliance status and traffic volume.

To view transactions for an API in the **All** tab:

1. Navigate to **API Compliance Inventory** \> **All** tab.
  ![](https://admin.apiwiz.io/api/guides/images/6a7996ce45267d9515ca1051)
1. Select the API operation to view its transactions.
  ![](https://admin.apiwiz.io/api/guides/images/6a7564ddf5e02aabad95a5bb)

Each transaction includes the following details:

Use the time-range selector to display transactions for a specific period.

## Investigate a compliance error

Each compliance column displays a validation status for a specific part of the transaction.

- **Green shield** indicates that the request or response component complies with the API specification.
- **Red shield** indicates that the component violates the API specification.

Select a transaction to open the **Transaction Details** pane at the bottom of the page.

![](https://admin.apiwiz.io/api/guides/images/6a75b19a45267d9515c9f00f)

### View request and response details

In the lower-left corner, select the **Request** or **Response** tab to inspect the transaction data.

The **Request** tab contains the following sections:

The **Response** tab contains the following sections:

### View compliance report

In the lower-right corner, the **Messages** panel displays the compliance validation report for the selected request or response. It provides detailed validation messages for each request and response component, helping you identify the exact cause of compliance issues.

Each validation message includes the following details:

For example, a validation message may indicate that a request header is present in the runtime request but isn't defined in the API specification, causing APIwiz to mark the transaction as non-compliant.

## Navigate to tracing

To analyze the complete execution flow of a transaction, select **Navigate to Tracing** in the **Action** column.

![](https://admin.apiwiz.io/api/guides/images/6a75b0c345267d9515c9ef6f)

The **Tracing** view displays the complete request path through the system, including:

- Client request information.
- Request and response timestamps.
- Source IP and client details.
- Backend service information.
- Response status code.
- Trace ID.
- Request and response compliance summary.

Use the tracing view to analyze service interactions, identify bottlenecks, and troubleshoot transaction issues across the request lifecycle.

## How API compliance validation works

API Compliance validates runtime API traffic against the API specification associated with the selected API.

Traffic Hooks capture request and response data from the API gateway or backend services and send it to APIwiz. The platform then compares the captured runtime traffic with the corresponding API specification \(REST, SOAP, or GraphQL\) created in Design Studio.

During validation, the system:

1. Captures the runtime request and response.
1. Identifies the matching API specification based on the API path.
1. Retrieves the schema, headers, query parameters, path parameters, and request and response definitions from the specification.
1. Compares the runtime traffic with the defined specification.
1. Displays the validation result for each transaction.

Each transaction shows the compliance status for the following components:

- **Request**
- **Response**
- **Headers**
- **Path parameters**
- **Query parameters**
- **Form data**

A green indicator shows that the component complies with the API specification, while a red indicator identifies a validation mismatch.

## Search for a transaction

Use the Transaction ID filter to locate a specific API transaction. A Transaction ID is generated when an API request is processed.

To search for a transaction: 

1. Open the transactions page
1. Select the filter icon in the **Transaction ID** column, enter the transaction ID, and press Enter.
  ![](https://admin.apiwiz.io/api/guides/images/6a761bb445267d9515c9fdab)

The table displays the matching transaction, so you can review its compliance details, request and response data, and navigate to the tracing view.

# Active APIs

An active API is an operation mapped to an **Approved** or **Published** OpenAPI \(Swagger\) specification. APIwiz validates the runtime request and response traffic against the specification, including request and response bodies, HTTP methods, headers, parameters, and data types. If the traffic doesn't match the specification, APIwiz marks the transaction as non-compliant.

Use this view to monitor traffic for APIs with a valid specification, view the transaction count for each API operation, identify APIs with non-compliant traffic, and analyze compliance results for each operation.

To view transactions for an **Active** API:

1. Navigate to **API Compliance Inventory** \> **Active** tab.
  ![](https://admin.apiwiz.io/api/guides/images/6a79945745267d9515ca0dcd)
1. Select the API operation to view its transactions.
  ![](https://admin.apiwiz.io/api/guides/images/6a75b0fe45267d9515c9efa7)

The transaction page displays all requests and responses for the selected API operation, along with their compliance validation results.

## Fixing a compliance issue

Use this procedure to identify and resolve API compliance issues detected during traffic validation for active \(resource\) APIs.

### 1. Identify the issue

Review the compliance report to determine which component does not match the API specification. Issues can occur in the following areas:

- Request body
- Response body
- Headers
- Query parameters
- Form data

### 2. Verify the source of the issue

Determine whether the issue originates from the API design or the runtime implementation.

### 3. Fix schema mismatches

Use this process when you need to create or update a data dictionary for request and response structures so that it can be reused across multiple OAS specifications.

To fix a schema mismatch, do the following:

1. Select **Sync to Data Dictionary** to synchronize the runtime data with the schema. This creates a new data dictionary or updates an existing one based on the captured request and response data.
1. Navigate to **Design Studio**.
1. Create a new revision or open an existing revision of the API specification.
1. Import the data dictionary into the OAS.
1. Update the schema definitions in the specification to match the imported data dictionary.

This process ensures that schema definitions remain consistent and reusable across multiple API specifications.

### 4. Fix parameter issues

If the issue occurs in request, response, header, form data, or query parameters, review the definitions in Design Studio and update the specification to match the expected structure.

### 5. Update the implementation

If the API specification is correct but the non-compliant issue persists, the problem is likely in the runtime implementation. Update the application code so that the API request and response data conform to the defined specification.

# Zombie APIs

A zombie API is an operation marked as deprecated in its specification, but that still receives live traffic from client applications. Although these APIs are scheduled for removal, the platform continues to detect active requests being sent to them.

Use this view to identify deprecated APIs that are still in use, investigate ongoing traffic, and take the necessary steps to decommission or migrate them.

To view transactions for a **Zombie** API:

1. Navigate to **API Compliance Inventory** \> **Zombie** tab.
  ![](https://admin.apiwiz.io/api/guides/images/6a79943745267d9515ca0da2)
1. Select the API operation to view its transactions.
  ![](https://admin.apiwiz.io/api/guides/images/6a75dd0545267d9515c9f44e)

The transaction page displays all requests and responses for the selected API operation, along with their compliance validation results.

# Shadow APIs

A shadow API is an operation for which the platform detects traffic but has no corresponding Swagger or OpenAPI Specification \(OAS\). An API is also categorized as shadow if a Swagger exists, but its status is **Draft** or **Review**, and it hasn't been approved or published.

Use this view to identify ungoverned APIs receiving live traffic and take the necessary steps to document, approve, and publish the corresponding specification.

To view transactions for a **Shadow** API:

1. Navigate to **API Compliance Inventory** \> **Shadow** tab.
  ![](https://admin.apiwiz.io/api/guides/images/6a79a0a245267d9515ca16ec)
1. Select the API operation to view its transactions.
  ![](https://admin.apiwiz.io/api/guides/images/6a75e00945267d9515c9f4be)

The transaction page displays all transactions for the selected API operation, including the following details:

- **Transaction ID**
- **Time**
- **Response Code**

The **Action** column provides the following options:

- **Generate OAS**: Creates an OpenAPI Specification \(OAS\) for the selected Shadow API.
- **Navigate to Tracing**: Opens the transaction in the **Tracing** view for end-to-end request analysis.

Select a transaction to view its request or response details in the lower panel.

![](https://admin.apiwiz.io/api/guides/images/6a75e31045267d9515c9f4fe)

The lower panel displays:

- **Request** and **Response** tabs to switch between request and response data.
- Request or response details, including **Headers**, **Query**, **Path**, **Form**, and **Payload**, depending on the selected tab.
- A **Messages** panel. Since no approved API specification exists for a Shadow API, compliance validation messages aren't available, and the panel displays **No messages**.

Use this view to inspect the captured runtime traffic, generate an OpenAPI specification for ungoverned APIs, and navigate to the tracing view for further analysis.

## Fixing a compliance issue

Shadow APIs receive live traffic but do not have an approved OAS in the platform. This occurs either because no Swagger is defined for the API, or because the existing Swagger is still in **Draft** or **Review** status.

To resolve shadow API compliance issues, follow the appropriate steps based on the current status of the API specification.

### Swagger exists but is not approved

If a Swagger or OAS already exists in the platform but the API traffic is still categorized as a shadow API, the specification may not be in an approved state.

To approve the specification, do the following:

1. Navigate to **Design Studio**.
1. Locate the corresponding Swagger or OAS definition.
1. Verify the current status of the specification.
1. If the status is **Draft** or **Review**, update it to **Approved** or **Published**.

Once the Swagger is approved or published, the API is considered governed, and the traffic no longer appears under **Shadow APIs**.

### Swagger does not exist

If no Swagger definition exists for the API, generate an OAS directly from the live traffic captured in the **Shadow APIs** tab.

#### Generate an OAS from live traffic

For an existing API without a defined Swagger specification, you can generate an OpenAPI Specification \(OAS\) automatically from live traffic captured by APIwiz Traffic Hooks.

When traffic hooks are enabled for a service without an associated Swagger, the platform detects the API traffic and classifies those endpoints as **Shadow APIs**. Instead of manually designing the specification, you can generate the Swagger directly from the captured runtime request and response data.

**Prerequisites**

To generate a Swagger from live traffic:

1. Navigate to the **Shadow APIs** tab.
1. Select the API operation that's receiving traffic.
1. Select the checkbox next to one or more transactions.
1. Select **Generate Swagger**, then follow the rest of the steps in [Generate OAS from Insights](/observe/api-insights/inventory/) for detailed instructions.

The OAS is generated and created in **Draft** status.

### Review and publish the OAS

After generating the Swagger, review and publish it to bring the API under governance.

To publish the OAS, do the following:

1. Open the generated OAS in **Design Studio**.
1. Review the API paths, parameters, request bodies, and response schemas.
1. Make any necessary corrections or updates.
1. Change the status to **Approved** or **Published**.

Once the OAS is approved and published, the API becomes part of the governed API catalog and the traffic is no longer classified as shadow API traffic.

# Inactive APIs

An inactive API is an operation that hasn't received any traffic for an extended period of time. If an API doesn't receive traffic for a span of one month, the platform categorizes it as inactive. An inactive API can be an active, shadow, or zombie API, depending on its underlying OAS mapping and status.

Use the **Inactive** tab to identify APIs that are no longer in active use, assess whether they're still required, and take the necessary steps to deprecate or decommission them.

To view transactions for an **Inactive** API:

1. Navigate to **API Compliance Inventory** \> **Inactive** tab.
  ![](https://admin.apiwiz.io/api/guides/images/6a75e95c45267d9515c9f670)
1. Select the API operation to view its transactions.

The transaction page displays the transaction ID, timestamp, and response code for each captured request.