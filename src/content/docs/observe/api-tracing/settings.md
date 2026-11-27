---
title: "Settings"
---

The Settings panel is accessible from the right side of the Trace List via three icons. It contains three configuration sections: **Masking**, **Configure Trace Headers**, and **Column Order**.

![](https://admin.apiwiz.io/api/guides/images/6a7313bb67839bf43da9fb1d)

## Masking

Masking allows you to hide sensitive data; such as credit card numbers, account numbers, or authorization tokens; from the request and response data displayed in traces. Masked values are replaced with asterisks \(\*\*\*\*\*\*\).

Masking is a shared configuration across the Tracing and Compliance modules. Any mask configured here applies across both.

Select **\+ Mask** to add a new masking rule.

**Masking scope**

**Masking Type**

**Field Masking:  **Masks a specific field by key name across all requests and responses. Enter the **Key Name** of the field to mask.

**Advance JSON Masking: **Advanced JSON Masking enables fine-grained masking within complex JSON payloads using path-based rules and conditional logic. It allows masking of nested objects, arrays, or values that appear in multiple locations within the JSON structure; for example, masking a field only when a specific condition is met, such as masking the account number only when the parameter type is "accountNo." This approach is particularly useful for modern APIs that exchange deeply nested or dynamic JSON data.      

**Advance XML Masking: **Advanced XML Masking protects sensitive data within XML payloads by targeting specific elements, attributes, or XPath locations. It allows masking at multiple levels of the XML hierarchy while preserving the document structure. This is especially useful for SOAP services and legacy integrations that rely on XML messaging.     

Existing masking rules are listed in the Masking panel, showing the field name and masking type applied \(for example, "cardNumber: Fully masked" or "toAccount: Partially masked: Last 3 characters"\).

### Viewing Masked Data in Traces

When a masking rule is configured, the masked field appears as asterisks \(\*\*\*\*\*\*\) in the trace payload. Use the Decrypt toggle to view the masked content according to the rule's masking scope.

The Decrypt toggle appears only when encryption is enabled in the API Compliance module. For more information, see [Configure encryption.](/design/api-compliance/manage-compliance/)

1. Open a trace, and select the span node.
1. In the span card, next to the HTTP method and path, select the expand icon.
1. In the span details panel, select the Response tab.
1. In the Payload section, turn on Decrypt.
Fully masked fields continue to display as asterisks. Partially masked fields display only the unmasked characters.

### To view the encrypted content:

1. Open a trace and select the **span** node.
1. On the span card, select the **↗** icon, and then select the **Response** tab.
1. Under **Payload**, the masked content appears in encrypted form.
1. Select **Decrypt** to view the masked content:Fully masked fields continue to display as asterisks \(`******`\).Partially masked fields display only the unmasked characters, while the remaining characters stay masked.

![](https://admin.apiwiz.io/api/guides/images/6adf156ba997220630a1088b)

## Configure Trace Headers

Configure Trace Headers defines the request header keys that APIwiz uses to correlate and visualize ingested traffic as traces.

### Column Order

Column Order allows you to control which columns are visible in the Trace List and in what order they appear.

Each column has a visibility toggle \(eye icon\). Select the eye icon to show or hide a column. Drag and drop columns using the handle icon \(⋮⋮\) to reorder them.

Select **Save Columns** to apply your changes.