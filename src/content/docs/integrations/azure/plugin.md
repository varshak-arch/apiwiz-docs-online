---
title: "Plugin"
---

The Plugin tab is where you create and manage plugin categories built from Azure policy templates, and configure the policy metadata that defines each plugin's actual behavior. Plugins package reusable Azure policy configurations that can be applied consistently across APIs and operations.

## Plugin Categories

The left panel lists all existing **Plugin Categories** \(e.g., "compliance", "compliance-masked", "New Category", "Deepak Testing"\).

- Select **Add Category \(\+\)** to create a new one.
- This opens an inline name field with save/cancel icons.

Selecting a category filters the **Plugins** panel on the right, showing a count \(e.g., "Plugins \(25\)"\) and a table of:

Plugins that are actively applied show an **Enforced** badge next to their name \(e.g., "Limit call rate by s..." and "Restrict caller IPs"\).

![](https://admin.apiwiz.io/api/guides/images/6aa92b41879cd85c39aec91f)

## Adding Plugins to a Category

Select **\+** in the top-right of the Plugins panel to open **Add Plugins** \(docked at the bottom\):

1. The left side lists plugin type templates, grouped by category with counts; e.g., Access restriction policies \(10\), Advanced policies \(17\)
1. Selecting a type shows its individual templates on the right as checkboxes, each with a description and scope badges.Example, under Access restriction policies: Check HTTP header, Get authorization context, Limit call rate by subscription, Limit call rate by key, Restrict caller IPs.
1. Check the templates you want, then select **Submit** to add them to the category.
1. Added plugins now appear in that category's Plugins list.

![](https://admin.apiwiz.io/api/guides/images/6aa92ba0879cd85c39aec960)

## Configuring Policy Metadata

Adding a plugin to a category doesn't make it functional; its behavior still needs to be configured.

- Hover a plugin row and select the branch/network icon to open **Policy Metadata**.
- Policy Metadata is a visual chain of **Policy Elements**, connected left to right, starting from the plugin itself \(e.g., "Logger Callout"\).
- Common elements include `set-url`, `set-method`, `set-header` \(linked to a `value` element\), and `set-body`.

Each element:

- Can be edited or removed.
- May show a count of attributes it holds \(e.g., "2 attributes" on a `set-header` element\).
- Can have new elements appended via **\+**, extending the chain.

Select **Save** \(top-right\) to commit the configuration.

![](https://admin.apiwiz.io/api/guides/images/6aa92bea879cd85c39aec975)