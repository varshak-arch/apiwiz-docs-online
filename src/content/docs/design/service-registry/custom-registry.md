---
title: "Custom Registry"
---

When you need to store metadata that is specific to your team or workflow; and it does not belong anywhere else in the platform; you create a Custom Registry.

### Create a registry

Before you can store any data, you need to create a registry; think of this as creating a new table or spreadsheet.

1. Select **\+** next to the Registry title in the left panel. The tooltip shows **Create Registry**.
1. The **New Registry** panel opens on the left. Enter the following:
  - **Registry Name** *\(required\)*: Give your registry a meaningful name that reflects what it tracks. For example, "Performance Test" or "Tax Summary."
  - **Summary** *\(required\)*: A brief description of what the registry is for.
1. Select **Save**.

The created registry will be displayed in the Registry panel. You can edit or delete it if needed.

The registry appears in the left panel. Select it to open it. At this point, the registry is empty; no columns and no data yet.

![](https://admin.apiwiz.io/api/guides/images/6a55f4b53c41693bb70f435f)

### Define your columns

Columns define the structure of your registry; what information each field holds. Before adding any data, set up the columns that match what you want to track.

Select **\+** in the top-right corner of the registry to open the **Manage Columns** panel.

For each column, enter the following:

- **Column Name**: The name of the field \(for example, "Date," "Service Name," or "Is Working"\).
- **Column Type**: Choose the type of data this column will hold:
  - **Single Value**: A plain text field. Use this for names, IDs, or any short text value.
  - **Multiple**: Accepts multiple text values in one field.
  - **Boolean**: A yes/no field. Use this for status tracking; for example, "Is Working: Yes/No."
  - **Secret**: A masked field for sensitive values such as passwords or tokens. The value is hidden and displayed as asterisks.
- **Mandatory**: Toggle this on if this column must always have a value when saving a row. If a mandatory column is left empty, the row cannot be saved.

Select **Save** to add the column. Repeat this process for each column you need.

Once all columns are added, you can rearrange them by dragging and dropping into your preferred order.

![](https://admin.apiwiz.io/api/guides/images/6a55f94d3c41693bb70f448b)

### Add and update data

With your columns defined, you can now start adding rows of data to the registry. Each row represents one record.

Select the row input area and enter values for each column. If a column is marked as Mandatory, you must provide a value before saving.

Your team can update the registry as frequently as needed; daily, weekly, or whenever a relevant event occurs. For example, a DevOps engineer might open the Performance Test registry every morning, add a new row with the current date and the boolean status for each service, and save it.

### Search and filter data

As your registry grows, use the **Filter** icon to find specific records quickly. Enter the values you want to search by and select **Filter**. Select **Clear Filters** to reset.

Use the **Refresh** icon to reload the latest data if multiple team members are updating the registry simultaneously.

### Export data

When you need to share the registry data or generate a report, select **Download** in the top-right corner. The data exports as an Excel file that you can share with your team or attach to a report.