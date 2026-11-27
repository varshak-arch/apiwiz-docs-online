---
title: "Manage Tab"
---

The Manage tab is where you configure shared resources that support APIs and plugins across the gateway. These resources are reusable; changes here can impact multiple services at once. The left panel is organized into three sections: **Config Management**, **Backup and Restore**, and **Build Templates**.

## Config Management

Config Management covers **Certificates, Products, Consumers, Upstream, and Targets**, and contains five subsections: **Server**, **Products**, **Upstreams**, **Certificates**, and **Global Policies**.

### Server

Servers represent the runtime instances the gateway serves traffic through. The list displays **Servers Name**, **Runtime**, **Listen\(normal\)**, **Listen\(SSL\)**, **Status**, **Updated by**, and **Updated at**.

To add a server:

1. Select **\+** in the top-right corner. The **Add Server** panel opens with two tabs: **General** and **Plugin Directives**.
1. Under **General**, enter the following:

3.Select **Save**.

![](https://admin.apiwiz.io/api/guides/images/6a8c2cf2f0c8e28fcc1c1011)

### Products

Products group one or more services into a consumable unit. The list displays **Name**, **Runtime**, **Status**, and **Updated by**.

**To create a product:**

1. Select **\+** in the top-right corner. The **Create Product** panel opens with two tabs: **General** and **Plugin Directives**.
1. Under **General**, enter the **Runtime** and **Name**.
1. Select **Save**.

![](https://admin.apiwiz.io/api/guides/images/6a8c2c9ff0c8e28fcc1c0ffd)

### Upstreams

Upstreams define the backend server pool the gateway routes requests to. The list displays **Name**, **Runtime**, **No. of servers**, and **Status**.

To add an upstream:

1. Select **\+** in the top-right corner. The **Add Upstream** panel opens with three tabs: **General**, **Plugin Directives**, and **Server**.
1. Under **General**, enter the **Runtime** and **Name**.
1. Select **Save**.

### Certificates

Certificates secure communication between clients, the gateway, and backend services. The list displays **Name**, **Runtime**, **SSL Session Timeout**, **Keepalive timeout**, and **Status**.

To create a certificate:

1. Select **\+** in the top-right corner. The **Create Certificate** panel opens with two tabs: **General** and **SSL**.
1. Under **General**, enter the **Runtime** and **Certificate Name**.
1. Select **Save**.

### Global Policies

Global Policies apply plugin-based rules across a connector, rather than to a single API or route.

1. Select the **Connector Name** from the dropdown in the top-right corner.
1. Existing policies appear in a list \(for example, **a**\) with the number of policies applied.
1. Select **Edit** to modify the policies for the selected connector.

## Backup and Restore

Backup and Restore lets you schedule and manage backups of your Nginx services. The list displays **Backup Name**, **Branch Name**, **Runtime Name**, **Updated by**, and **Updated at**.

Select the **clock icon** to schedule a backup, or the **\+** icon to create one manually.

## Build Templates

Build Templates let you create custom templates to generate configuration files with a common structure.

Select a runtime \(for example, **cccc**\) to view its template, then select **Download Template** to export it. If no templates exist yet, the panel displays **No Build Templates found**.

![](https://admin.apiwiz.io/api/guides/images/6a8c2d69f0c8e28fcc1c1025)