---
title: "Security Audit Logs"
---

Security Audit Logs provides a transaction-level view of security violations detected for a specific API endpoint. It shows exactly which parts of the API request or response contain security issues; such as undocumented headers, unexpected response status codes, or missing parameters; helping you identify and fix the root cause of security non-compliance.

Use this to understand why an endpoint is flagged as insecure and what needs to be corrected in the OAS specification or the API implementation to resolve the security violations.

To access **Security Audit Logs** , go to the **Inventory** and locate the endpoint you want to analyze. Each endpoint row has three icons; hover over them to identify the **Security Audit Logs** icon, then select it.

![](https://admin.apiwiz.io/api/guides/images/6a71751d89941a8a03a226ab)

## Transaction List

The top section displays all transactions for the selected endpoint within the chosen time range. Use the date filter in the top-right corner to narrow down transactions to a specific time window.

Each transaction row shows:

## Transaction Detail

Selecting a transaction opens a detailed panel below showing the full request and response breakdown with security violation messages.

**Request tab**

Shows the actual request data received for that transaction, organized into:

- **Headers**: All request headers with their values.
- **Query**: Query parameters sent with the request.
- **Path**: Path parameters used in the request.
- **Form**: Form data submitted with the request.
- **Payload**: The request body payload.

**Messages panel**

Shows the security violations detected for this transaction, grouped by area:

- **Request Header**: Headers present in the live request that are not captured in the OAS specification.
- **Response Status Code**: Response status codes that do not conform to what the OAS specification expects.
- **Response Header**: Response headers present in the live response that are not captured in the OAS specification.

Each violation shows the parameter name and the reason: for example, *"*The requestHeader Param is present in Live Request but not captured in spec" or "The responseStatusCode param doesn't conform to the spec. Expected: \{200\}, Actual: \{400\}."

Violations are marked with a red warning icon.

![](https://admin.apiwiz.io/api/guides/images/6a71754889941a8a03a226cd)

To resolve the violations, update the API specification in **Design Studio** to match the live traffic; for example, adding missing request headers, updating response status codes, or documenting undocumented parameters. See [Design Studio](https://apiwiz.slack.com/archives/D0BAG0MFGDT/p1785820614935659) for details.