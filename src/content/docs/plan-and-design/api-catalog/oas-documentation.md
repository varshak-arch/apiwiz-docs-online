---
title: "OAS documentation"
---

Each operation in an OAS specification has its own documentation page. The page describes the request and response, generates request code, and lets you test the operation with **Tryout**.

To open an operation, in the **References** panel, expand an API and select an operation. You can also select an operation card on the API **Overview** page.

![](https://admin.apiwiz.io/api/guides/images/6af6b379c8455c2fd8697fed)

## Operation page layout

The top of the page shows a breadcrumb \(API name \> operation name\), the operation name, its HTTP method, and its path. In the upper-right corner, the following controls are available:

The center of the page documents the request and response. The **Endpoint** and **Response** panels on the right show the generated request code and the response.

## Request and response sections

Common headers include:

These headers ensure that the request and response data are processed in the correct format.

### Schema and Example tabs

The **Request Body**, **Response**, and **Schemas** sections each offer two views:

The request body follows the schema defined in the API specification, which sets the expected structure, data types, and required fields. Use the **Schema** view to see how fields relate to each other and confirm that your request body follows the correct structure.

### Endpoint and Response panels

## Test an operation using Tryout

Use **Tryout** to test API endpoints directly from the documentation page. You can configure parameters, send requests, and review responses without leaving the catalog.

**Prerequisites:**

- The specification defines at least one server for the **Host** selector. See [Servers](/plan-and-design/api-design/oas/local-components/).

To test an operation, follow these steps:

1. In the **References** panel, select the operation you want to test.
1. In the upper-right corner of the operation page, select **Tryout**.
  ![](https://admin.apiwiz.io/api/guides/images/6af6cbf58de819ecd3bc112a)
1. In the **Host** section, select the server that receives the request.
1. Enter the request details:
  - **Query Parameters:** Enter values for any query parameters.
  - **Path Parameters:** Enter values for any path parameters the endpoint requires.
  - **Header Parameters:** Enter header values. Select `Content-Type` and `Accept` values from their selectors. Required headers are marked with a red asterisk \(\*\).
  - **Request Body:** For each property, enter a value in the **Enter value** field.
1. In the **Endpoint** panel, select the language for the generated request code.
1. In the upper-right corner of the **Endpoint** panel, select the run icon.

The **Response** panel shows the results, including the HTTP status code and the response body. To compare them with the responses defined in the specification, select an example from the **Examples** selector. Use this information to verify whether the request ran successfully and whether the returned data matches the expected schema.

## Copy or download the OAS

Use the **Actions** menu on an operation page to copy or download the API's OpenAPI specification.

To copy or download the OAS, follow these steps:

1. In the **References** panel, select an operation.
1. In the upper-right corner of the operation page, select **Actions**.
  ![](https://admin.apiwiz.io/api/guides/images/6af6cbd38de819ecd3bc1101)
1. Select **Copy OAS** or **Download OAS**.

The specification is copied to your clipboard or downloaded as a file.

## Manage an OAS specification

The **More options** \(⋮\) menu in the page header provides actions for the whole specification:

- **View Changelog**
- **Post Review**
- **Code Generator**

![](https://admin.apiwiz.io/api/guides/images/6af6b56ac8455c2fd8698034)

### View the changelog

Use **View Changelog** to review the publication history of the selected API specification. When you publish a new revision of a specification, the changelog automatically records an entry based on the differences from the previous revision. See [Change Log](https://docs.apiwiz.io/guides?guideId=6a5778593c41693bb70f647b&pageId=6af2a639ece53ecb65e4f278&version=1&groupId=OAS).

To view the changelog, follow these steps:

1. In the upper-right corner of the page header, select **More options** \(⋮\) \> **View Changelog**.
  ![](https://admin.apiwiz.io/api/guides/images/6af6c49fc8455c2fd86980a3)
1. In the **Change Log** panel, under **Duration**, select **Week** or **Month**.
1. Optional: To review updates within a specific date range, select the calendar icon and select the dates you want.

The **Change Log** panel shows a timeline of entries. Each entry has a **Published On** date and the specification name.

To return to the timeline from the diff or the summary, select **List View**.

### Post a review comment

Use **Post Review** to add feedback on the selected API specification or to read existing comments.

To add a comment, follow these steps:

1. In the upper-right corner of the page header, select **More options** \(⋮\) \> **Post Review**.
  ![](https://admin.apiwiz.io/api/guides/images/6af6b62bc8455c2fd8698079)
1. Select **\+ Add Comment**.
1. In the text field, enter your feedback.
1. Select **Save**.

The comment is saved with your name and a timestamp. To discard a comment before you save it, select **Cancel**.

To delete a comment, next to its timestamp, select **More options** \(⋮\) \> **Delete**.

### Generate code

Use **Code Generator** to create client or server code automatically from the selected API specification. This reduces manual coding effort and helps keep API integrations consistent.

To generate code, follow these steps:

1. In the upper-right corner of the page header, select **More options** \(⋮\) \> **Code Generator**.
  ![](https://admin.apiwiz.io/api/guides/images/6af6b5b38de819ecd3bc0db5)
1. Under **Select Target**, select **servers** or **clients**.
1. Under **Select Language / Framework**, select the language or framework you want. The options depend on the target:
  - **servers:** jaxrs-cxf, nodejs-server, and spring
  - **clients:** html, html2, dynamic-html, java, and scala
1. Select **Generate**.

The generated code downloads as a .zip file, which you can use for further development or integration.