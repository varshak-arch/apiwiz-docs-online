---
title: "Compliance Audit Logs"
---

Compliance Audit Logs provides a transaction-level view of compliance violations for a specific API endpoint. It shows exactly which parts of the API request or response are deviating from the linked OAS specification; helping you identify and fix the root cause of non-compliance.

Use this to understand why an endpoint is flagged as non-compliant and what needs to be corrected in the OAS specification or the API implementation to move it to compliant.

To access **Compliance Audit Logs** , go to the **Inventory** and locate the endpoint you want to analyze. Each endpoint row has three icons; hover over them to identify the **Compliance Audit Logs** icon, then select it.

![](https://admin.apiwiz.io/api/guides/images/6a6c43df69d1ae970572b205)

## Transaction List

The top section displays all transactions for the selected endpoint within the chosen time range. Use the time filter to narrow down transactions; **Last 24 Hours**, **Last Week**, **Last 2 Weeks**, **Previous Month**, **Previous 3 Months**, or **Custom**.

Each transaction row shows:

## Transaction Detail

Selecting a transaction opens a detailed panel below showing the full request and response breakdown.

**Request tab**

Shows the actual request data received for that transaction, organized into:

- **Headers**: All request headers with their values.
- **Query**: Query parameters sent with the request.
- **Path**: Path parameters used in the request.
- **Form**: Form data submitted with the request.
- **Payload**: The request body payload.

**Messages panel**

Shows the compliance violations detected for this transaction, grouped by area:

- **Request Body**: Fields present in the live request that are not captured or allowed in the OAS specification.
- **Request Header**: Headers present in the live request that are not defined in the OAS specification, or headers that are compliant.

Each violation shows the field name and the reason; for example, *"*Object instance has properties which are not allowed by the schema" or "The requestHeader Param is present in Live Request but not captured in spec."

Violations are marked with a red warning icon. Compliant fields are marked with a green icon.

![](https://admin.apiwiz.io/api/guides/images/6a6c441a69d1ae970572b229)