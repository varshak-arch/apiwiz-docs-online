---
title: "Explore GraphQL documentation"
---

When you select a GraphQL schema, the Catalog opens the documentation page for that schema.

![](https://admin.apiwiz.io/api/guides/images/6a36297bcf1933e4d4c1711d)

The page is blank until you select a component from the left panel, which contains two sections: **Queries** and **GraphQL Types**.

To navigate the schema documentation, follow these steps:

1. In the navigation pane, select **Queries** or **GraphQL Types**.
1. Expand the category, if needed, to view the available schema components.
1. Select a schema component.
  ![](https://admin.apiwiz.io/api/guides/images/6a362a8fcf1933e4d4c171a6)

  ![](https://admin.apiwiz.io/api/guides/images/6a362ac0cf1933e4d4c171c6)

The documentation page is organized into the following sections:

The details pane displays information about the selected component. Depending on the component type, you can view:

- Available fields and attributes
- Input and output definitions
- Supported enum values
- Associated queries and mutations
- Relationships with other schema objects

## View query details

Queries represent the operations available for retrieving data from the GraphQL API.

To view details for a query, follow these steps:

1. In the navigation pane, under **Queries**, select a query.
1. Review the query details in the documentation pane.

Depending on the query you select, the documentation pane displays:

- The query name and type
- Available arguments and their data types
- Required parameters
- Return types
- Sample query syntax
- Related schema objects

You can expand the returned object to view the fields available in the query response.

## View schema types

Schema types define the data structures, inputs, outputs, and relationships used by the GraphQL API.

- You're viewing the GraphQL schema documentation page.

To view a schema type, follow these steps:

1. In the navigation pane, expand a category under **GraphQL Types**.
1. Select a schema component, such as an enum, object, interface, payload, scalar, union, connection, or input object. For example, select **Enum**.
  The documentation pane displays:
- Fields and attributes
- Data types
- Input and output definitions
- Valid values
- Relationships with other schema components
- Queries that reference the selected component

If you select an enum, the documentation pane also displays all valid values for that enum, along with the queries and fields that reference it, shown in the **Relationship Map**. Use this information to understand where the enum is used and which operations support its values.

### Use the Relationship Map

The **Relationship Map** provides a visual representation of how schema components connect to each other.

Use it to:

- Identify queries that reference the selected schema component.
- View fields associated with the selected component.
- Understand dependencies between schema objects.
- Navigate complex schema structures.

To trace how a schema component connects to other elements, select any component in the map.

The map highlights how the selected query, object, or enum connects to other elements in the schema. Use this view to understand API behavior and data relationships before you build GraphQL requests.