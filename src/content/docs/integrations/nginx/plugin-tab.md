---
title: "Plugin Tab"
---

The Plugin tab is where you create and manage plugins that control how APIs behave at runtime in APIwiz, similar to policies in other gateways. Plugins are organized into categories for easier management.

### Plugin Categories

The left panel displays all plugin categories.

To create a category:

1. Select **\+** next to **Plugin Categories**.
1. Enter a category name in the field that appears.
1. Select the **save icon** to confirm, or the **X** to cancel.

Selecting a category displays its plugins in the table on the right, showing **Name**, **Description**, and **Applicable Scopes**.

### Creating a Plugin

Select **Add Plugin** \(or the **\+** icon\) in the top-right corner. Two options appear:

![](https://admin.apiwiz.io/api/guides/images/6a8c1f6cf0c8e28fcc1c0e6b)

### Create plugin from scratch

Selecting this option opens a form with the following:

Below this, three expandable sections guide you through configuration:

- **Scope of Plugin**: Set plugin details and scope for targeted directive application, ensuring controlled functionality. Can be enforced to make it mandatory within scope.
- **Select Directives**: Select and configure directives for your chosen scopes to ensure precise control and functionality.
- **Configure Directives**: Configure the details for each directive selected in the previous step for tailored functionality.

Select **Save Plugin** once configured.

![](https://admin.apiwiz.io/api/guides/images/6a86975cf0c8e28fcc1bddfc)

### Select predefined plugin

To add a predefined plugin:

1. Select a preset from the list on the left \(for example, **SecurityTest**, **LoggingTest**, **MonitoringTest**, **logging demo**, **apiwiz-compliance**\).
1. Select the checkbox next to the specific plugin variant on the right \(for example, **secTest**\). Its **Applicable Scope** \(for example, **PRODUCTS**\) is shown alongside.
1. Select **Save** to add it.

![](https://admin.apiwiz.io/api/guides/images/6a8c1fd7f0c8e28fcc1c0e7f)