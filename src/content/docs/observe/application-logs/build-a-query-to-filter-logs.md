---
title: "Build a query to filter logs "
---

Use the query builder to search application logs by entering a LogQL query.

To build a query:

1. In the query editor, enter your search criteria using LogQL. Queries use the three metadata labels attached during ingestion service name/category, application name/type, and type, alongside JSON body parameters. Wrap string values in double quotes.
1. To save the query for later use, enter a name, then select **Pin to Saved Queries**.
1. Select **Execute**.
  ![](https://admin.apiwiz.io/api/guides/images/6a6b5f9d69d1ae970572ade4)

The system executes the query and displays the matching log entries.