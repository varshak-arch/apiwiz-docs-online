---
title: "App Registry"
---

Every workspace has an App Registry by default. You do not need to create it; it is automatically populated whenever a gateway action occurs, such as when an app or consumer is created in a connected gateway. A backend scheduled job handles this automatically.

When you open the App Registry, you see a list of all apps across your connected gateways, with the following information for each:

#### App Registry fields

You use the App Registry to get a consolidated view of all apps across all your gateways in one place; without having to log into each gateway separately.

### Finding a specific app

If you are looking for a specific app or want to narrow down the list, select the **Filter** icon in the top-right corner. The Filters panel opens on the right side, where you can search by:

- App Name, Gateway, Runtime, Email ID
- Client ID, Client Secret, API Key
- Products, Rotation Policy, Last Rotated, Status
- Basic Auth Username, Basic Auth Password, Consumer Limit

Enter the values you want to filter by and select **Filter**. Select **Clear Filters** to reset.

![](https://admin.apiwiz.io/api/guides/images/6a55d0d63c41693bb70f3a63)

### Rotating API Keys

If you need to rotate API keys for security purposes, use the **Rotate API Keys** option in the top-right corner. You can rotate keys for all apps at once or select a specific app from the dropdown.

![](https://admin.apiwiz.io/api/guides/images/6a55f2653c41693bb70f42ae)

### Refreshing data

Select the **Refresh** icon to sync the latest data from your connected gateways and ensure you are viewing the most current records.