---
title: "Manage columns"
---

You can customize the log table by rearranging column order, controlling column visibility, resizing columns, and adding or removing custom columns. These options let you tailor the log table to your monitoring and analysis requirements.

## Add a custom column

Add a custom column to the logs table to display additional information from an indexed field.

To add a custom column:

1. In the **Indexed Fields** panel, locate the field you want to add.
1. Select the **Add to Column** icon next to the field. 
  ![](https://admin.apiwiz.io/api/guides/images/6a6b147969d1ae970572a07e)
1. The **Add to table** panel opens.
  ![](https://admin.apiwiz.io/api/guides/images/6a6b178569d1ae970572a22f)
1. Verify the following details:

1. Select **Save**.

The selected field is added as a new column in the logs table using the specified column name.

## Hide a custom column

Hide a custom column to remove it from the logs table without affecting the indexed field.

To hide a custom column:

1. Perform one of the following actions:
  - In the **Indexed Fields** panel, select the **Hide Column** icon next to the field.
  - In the logs table, open the column menu, then select **Hide Column**.

  ![](https://admin.apiwiz.io/api/guides/images/6a6b1ca869d1ae970572a2be)
1. Repeat these steps for any additional columns you want to hide.

The selected column is removed from the logs table.

## Adding a field to a query

Add an indexed field to the query builder to quickly create a log query.

To add a field to a query:

1. In the **Indexed Fields** panel, locate the field you want to use.
1. Select the **Add to Query** icon next to the field.
  ![](https://admin.apiwiz.io/api/guides/images/6a6c3e0469d1ae970572b03e)

The selected field is added to the query builder. Enter the required value, then select **Validate** and **Execute** to run the query.

#### Example

Selecting the indexed field `data.request.headerParams.host` adds the following expression to the query builder:

```text
data.request.headerParams.host = Add String
```

Enter a value for **Add String**, validate the query, and execute it to view the matching log entries.

## Rearrange column

Rearrange columns to customize the order in which they appear in the logs table.

To rearrange columns:

1. In the logs table, select the More option \(:\) for any column.
1. Select **Rearrange Columns**. 
  ![](https://admin.apiwiz.io/api/guides/images/6a6b1f9869d1ae970572a40e)
1. The **Rearrange Columns** panel opens.
  ![](https://admin.apiwiz.io/api/guides/images/6a6b1f8d69d1ae970572a40c)
1. Drag the columns to the required position.
1. Select **Save**.

The logs table displays the columns in the updated order.

## Resize a column

To resize a column, follow these steps:

1. Point to the right edge of the column header you want to resize, for example, **Event Time**. The resize cursor appears.
1. Select and hold the column boundary.
1. Drag horizontally to adjust the width:
  - Drag right to increase the column width.
  - Drag left to decrease the column width.
1. Release to apply the new width.