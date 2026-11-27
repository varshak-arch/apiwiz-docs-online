---
title: "Plugin Tab"
---

The Plugin tab is where you create and manage the plugin categories and plugins that can later be attached to endpoints and backends in the Build tab. Plugins define reusable behavior; security, traffic management, validation, and response transformation; that can be applied without redefining logic per endpoint.

## Plugin Categories

The left panel lists all existing **Plugin Categories**. Each category shows its name and a scope badge indicating what it can be attached to; for example **Endpoint**, **Backend**, or **Async agent**.

### To create a plugin category

Select the **\+** icon next to the Plugin Categories header to open the **Create Category** form:

Select **Save** to create the category, or **Cancel** to discard.

![](https://admin.apiwiz.io/api/guides/images/6a90226c67f2ddaf4b762d37)

## Plugins List

Selecting a category in the left panel filters the **Plugins** table on the right to that category's scope, showing the plugin count and scope badge \(e.g., "Plugins \(7\) Endpoint"\).

The Plugins table displays:

Each plugin row has a three-dot menu with **Edit** and **Delete** options.

## Adding a Plugin to a Category

Select the **\+** icon in the top-right of the Plugins panel to open the **Add Plugin to Category** section \(docked at the bottom of the screen\):

1. Choose a **Plugin Type** from the left sub-list \(e.g., Security, NONRESTConnectivity, Validation, Authentication, TrafficManagement, Modifiers\); each shows a count of available plugins.
1. Select a plugin via its radio button on the right; a description is shown for context \(e.g., Bot Detection under Security\).
1. Select **Review** \(top-right\) to confirm and add the plugin to the category.

![](https://admin.apiwiz.io/api/guides/images/6a9022d567f2ddaf4b762d4e)