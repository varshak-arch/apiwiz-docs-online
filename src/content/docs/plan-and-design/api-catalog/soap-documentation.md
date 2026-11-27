---
title: "SOAP documentation"
---

Each SOAP operation has its own documentation page. The page shows the target host, the request and response message structure, and a generated SOAP request, and lets you test the operation with **Tryout**.

To open an operation, in the **References** panel, expand a service, expand its operation group, and select an operation.

![](https://admin.apiwiz.io/api/guides/images/6af69c5b8de819ecd3bc0bbd)

## Operation page layout

The top of the page shows a breadcrumb \(service \> operation group \> operation\), the operation name, its method \(`POST`\), and its path. The **View** and **Tryout** controls work the same way as on OAS operation pages.

## Endpoint and Response panels

## Test an operation using Tryout

Use **Tryout** to test SOAP operations directly from the documentation page. Enter element values, send requests, and review responses without leaving the catalog.

![](https://admin.apiwiz.io/api/guides/images/6af69b8bc8455c2fd8697e1e)

To test an operation, follow these steps:

1. In the **References** panel, select the operation you want to test.
1. In the upper-right corner of the operation page, select **Tryout**.
1. In the **Host** section, select the port that receives the request.
1. In the **Request Body** section, for each element, enter a value in the **Enter value** field. Required elements are marked with a red asterisk \(\*\).
1. In the upper-right corner of the **Endpoint** panel, select the run icon.

The **Response** panel shows the results, including the HTTP status code and the response message. To compare them with the responses defined in the specification, select an example from the **Examples** selector. Use this information to verify whether the request ran successfully and whether the returned data matches the expected schema.

## Copy or download the WSDL

Use the **Actions** menu on a SOAP operation page to copy or download the service's WSDL definition.

To copy or download the WSDL, follow these steps:

1. In the **References** panel, select an operation.
1. In the upper-right corner of the operation page, select **Actions**.
  ![](https://admin.apiwiz.io/api/guides/images/6af69981c8455c2fd8697dee)
1. Select **Copy WSDL** or **Download WSDL**.

The WSDL definition is copied to your clipboard or downloaded as a file.

## Manage a SOAP specification

After you explore a service, use the actions in the upper-right corner of the page header to share or manage the whole specification:

![](https://admin.apiwiz.io/api/guides/images/6af69dbd8de819ecd3bc0c07)

The steps are the same as for OAS. For more information, see [**View the changelog**](/plan-and-design/api-catalog/oas-documentation/) and [**Post a review comment**](/plan-and-design/api-catalog/oas-documentation/)**.**