---
title: "Filtering logs using the Query Builder"
---

Transaction logs support two query modes: **Build Query**, for constructing basic queries, and **Advanced Query**, for writing more complex SQL-style search criteria.

The **Query Builder** works like a database query system and lets you filter logs by field name. Use it to retrieve targeted log data instead of displaying all available logs. For example, you can filter logs to view only entries where a specific status code appears for a particular request path.

To filter logs using the Query Builder:

1. Expand the **Log Flattener** \(Flatten JSON\) panel to inspect the available fields. The flattener parses nested API request and response JSON payloads and displays a data-type indicator next to each field:

1. In the query bar, enter a field name. A list of matching fields appears under **FIELDS** as you type.
1. Select the field from the list.
  ![](https://admin.apiwiz.io/api/guides/images/6a69c44669d1ae9705728ed9)
1. Select an operator:
  ![](https://admin.apiwiz.io/api/guides/images/6a69bdc669d1ae9705728d0e)
1. Enter the value to filter by.
1. Press the spacebar to insert a logical operator between filters, then select the operator label to toggle between **AND** and **OR**:
  - **AND:** Returns logs that satisfy all specified conditions.
  - **OR:** Returns logs that satisfy any of the specified conditions.
1. To add another condition, enter and select a new field.
  #### Example query

  ```text
  data.request.path = "/api/v1/checkout"
  ```

  To combine multiple conditions across different data types:

  ```text
  data.request.path = "/api/v1/checkout" AND metadata.request.timestamp = 1721800000
  ```
1. Select **Validate**. A valid query passes validation; an invalid query doesn't.
1. Select **Execute**.

The log results update to display only the entries that match your query conditions. 

![](https://admin.apiwiz.io/api/guides/images/6a69d47a69d1ae97057290dc)

To save and pin a query for reuse without rebuilding the filter conditions, select **Pin to Saved Queries**, enter a name in the Query name field, and press Enter.

The query is stored under **Saved Queries** and can be selected and applied at any time.

## Use the Advanced Query Builder

Use the **Advanced Query Builder** to create complex filter expressions by grouping conditions and controlling the order in which they're evaluated.

To build an advanced query:

1. In the query bar, select the **Advanced Query Builder** \(branch icon\). The **Advanced Query Builder** panel opens.
1. Select **Add log field**, choose the required field, and press Enter. The selected field is added with a default condition.
  ![](https://admin.apiwiz.io/api/guides/images/6a69c57569d1ae9705728f7a)
1. Specify the operator and value.
1. Select the **\+** icon below the condition to add another condition:
  - Select **Add a condition sequentially** to add it within the same group.
  - Select **Add a condition in parallel** to create a new grouped branch.
1. Select the logical operator label \(**AND** or **OR**\) between conditions to toggle how they're evaluated.
1. To remove a condition, point to it and select the **Delete** \(trash bin\) icon that appears next to it.
1. Select **Validate**. A valid query passes validation; an invalid query doesn't.
1. Select **Execute**.
  ![](https://admin.apiwiz.io/api/guides/images/6a6c3a5669d1ae970572b00b)

The executed query displays with condition labels that show how the conditions are structured, ensuring conditions are evaluated in the correct order for precise filtering. The log results update to display only the entries that match your query conditions.

Select **Pin to Saved queries** to pin the query for reuse later.

### Viewing saved queries

Use the **Saved Queries** panel to view and access previously saved queries.

To view saved queries:

1. Select the **Saved Queries** icon. 
  ![](https://admin.apiwiz.io/api/guides/images/6a69f2c869d1ae970572941f)
1. The **Saved Queries** panel displays all saved queries.
  ![](https://admin.apiwiz.io/api/guides/images/6a69f31c69d1ae9705729439)
1. Select a query to load it into the query editor for execution or further modification.

### Delete a saved query

To delete a saved query, point to the query in the saved queries list and select the **Unpin** icon that appears.

The query is deleted from the list.