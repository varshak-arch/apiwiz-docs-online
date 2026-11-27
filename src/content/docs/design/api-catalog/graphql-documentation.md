---
title: "GraphQL documentation"
---

Each GraphQL query and mutation has its own documentation page. The page shows the operation's arguments, return type, and generated query, and lets you test the operation with **Tryout**. Schema type pages describe the data structures that operations use.

![](https://admin.apiwiz.io/api/guides/images/6af6b084c8455c2fd8697f43)

## View query details

Queries represent the operations available for retrieving data from the GraphQL API. Mutation pages follow the same layout.

To view an operation, in the **References** panel, expand **Queries** or **Mutations** and select an operation.

The top of the page shows a breadcrumb \(API name \> category \> operation\), the operation name, its method \(`POST`\), and the `/graphql` path. The **Actions**, **View**, and **Tryout** controls work the same way as on OAS operation pages.

Depending on the operation, these sections cover:

- The query name and type
- Available arguments and their data types
- Required parameters
- Return types
- Sample query syntax
- Related schema objects

## View schema types

Schema types define the data structures, inputs, outputs, and relationships that the GraphQL API uses.

To view a schema type, follow these steps:

1. In the **References** panel, expand a type category, such as **Objects**, **Enums**, or **Input Objects**.
1. Select a schema component.

The documentation page describes the selected component. Depending on the component type, it includes:

- Fields and attributes
- Data types
- Input and output definitions
- Valid values \(for enums\)
- Relationships with other schema components
- Queries that reference the selected component

## Test an operation using Tryout

Use **Tryout** to test GraphQL operations directly from the documentation page. Enter variable values, send requests, and review responses without leaving the catalog.

![](https://admin.apiwiz.io/api/guides/images/6af6b1778de819ecd3bc0d04)

To test an operation, follow these steps:

1. In the **References** panel, select the query or mutation you want to test.
1. In the upper-right corner of the operation page, select **Tryout**.
1. Select the server host for the request.
1. In the **Variables** section, enter values for the operation variables.
1. In the upper-right corner of the **Endpoint** panel, select the run icon.

The **Response** panel shows the results, including the HTTP status code and the response body. To compare them with the responses defined in the specification, select an example from the **Examples** selector. Use this information to verify whether the request ran successfully and whether the returned data matches the expected schema.

## Copy or download the schema

Use the **Actions** menu on a GraphQL operation page to copy or download the API's GraphQL schema.

![](https://admin.apiwiz.io/api/guides/images/6af6afa18de819ecd3bc0c6e)

To copy or download the schema, follow these steps:

1. In the **References** panel, select a query or mutation.
1. In the upper-right corner of the operation page, select **Actions**.
1. Select **Copy Schema** or **Download Schema**.

The schema is copied to your clipboard or downloaded as a file.

## Manage a GraphQL specification

After you explore an API, use the actions in the upper-right corner of the page header to share or manage the whole specification:

![](https://admin.apiwiz.io/api/guides/images/6af6b2298de819ecd3bc0d80)

The steps are the same as for OAS. For more information, see [**View the changelog**](/design/api-catalog/oas-documentation/) and [**Post a review comment**](/design/api-catalog/oas-documentation/)**.**