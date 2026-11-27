---
title: "Plugin "
---

The Plugin tab is where you create and manage plugin categories built from Kong's plugin library, and define custom plugins for behaviors not covered by presets. Plugins can enforce security, traffic control, transformation, logging, and more; scoped to Global, Service, or Route.

## Plugin Categories

The left panel lists **Plugin Categories** \(e.g., Authentication, Security, Traffic Control, Serverless Functions, Analytics and Monitoring, Transformations\). Select **\+ Add Category** to create a new one via an inline name field with save/cancel icons.

![](https://admin.apiwiz.io/api/guides/images/6aa8dd85879cd85c39aeb6aa)

## Plugins List

Selecting a category filters the **Plugins** panel on the right, showing a count and a table of:

**Example: Analytics and Monitoring**

The Analytics and Monitoring category includes the following plugins:

- **datadog:** Forward metrics to Datadog agent — available at the Global, Service, and Route levels.
- **prometheus:** Expose metrics related to Kong and proxied Upstream services — available at the Global and Service levels.

## Adding Plugins

Select **\+** in the top-right corner of the Plugins panel to access the following options:

### Add Custom Plugin

Select **Add Custom Plugin** to open the **Add Plugin** JSON editor. The editor provides the following fields for configuring a custom plugin:

Enter the required plugin details in the JSON editor and select **Save** to create the custom plugin.

### Add from Presets

Select **Add from Presets** to open the **Add Plugin** panel, which is docked at the bottom of the screen. The panel lists Kong's built-in plugin types on the left, along with the number of plugins in each category.

Select a plugin type to view its individual plugins on the right. Each plugin includes a description and scope badges indicating its supported scopes.

For example, the **Authentication** category includes the following plugins:

- `basic-auth`
- `hmac-auth`
- `jwt`
- `key-auth`

Select the checkboxes to choose the plugins you want to add. After making your selections, select **Review** in the top-right corner to confirm them.