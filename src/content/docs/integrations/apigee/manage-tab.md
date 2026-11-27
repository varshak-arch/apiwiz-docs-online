---
title: "Manage Tab"
---

The Manage tab is where you configure shared resources that support proxies and policies across the gateway. These resources are reusable; changes here can affect multiple proxies at once.

The left panel is organized into four cards: **Config Management**, **Org View**, **Build Templates**, and **Monetization**. 

## Cache

Cache configuration temporarily stores API responses or frequently accessed data within the gateway. It improves API performance, reduces backend load, and decreases response latency for repeated requests.

**The Cache list displays**: Name, Organization, Destination, Environment, and Status.

**To add a Cache:**

1. Under Manage → Config Management, select **Cache**.
1. Select **\+** in the top-right corner.
1. In the **Add Cache** panel, fill in the following fields:

4.Select **Save**.

A new Cache starts in Draft status. To change its status, select the three dots on the row → **Change Status**, choose a new status from the dropdown, enter a Commit Message, and select **Save**.

![](https://admin.apiwiz.io/api/guides/images/6a8d6090f0c8e28fcc1c2cc0)

## KVM \(Key Value Map\)

KVM is a centralized, secure configuration store for key-value pairs; environment variables, tokens, credentials, URLs, and other reusable data; that proxies and policies can access dynamically at runtime.

The KVM list displays: **Name, Organization, Destination, Environment, and Status.**

**To add a KVM:  **

1. Under Manage → Config Management, select **KVM**.
1. Select **\+** in the top-right corner.
1. In the **Add KVM** panel, fill in the following fields:  

4.Select **Save**.

![](https://admin.apiwiz.io/api/guides/images/6a8d60b4f0c8e28fcc1c2ce2)

## Target Server

Target Server configurations define the backend service endpoints an API proxy connects to — centralizing hostname, port, protocol, and SSL settings for simplified, environment-based backend management.

The Target Server list displays: Name, Organization, Destination, Environment, and Status.

**To add a Target Server:**

1. Under Manage → Config Management, select **Target Server**.
1. Select **\+** in the top-right corner.
1. In the **Add Target Server** panel, fill in the following fields:

4.Select **Save**.

![](https://admin.apiwiz.io/api/guides/images/6a8d6120f0c8e28fcc1c2d04)

## Products

Products bundle one or more proxies into a consumable unit for partners or applications. Once published, consumers create apps based on the product, generating the client IDs and secrets needed to access the underlying APIs.

The Products list displays: Name, Organization, Destination, Status, and Created By.

**To add a Product:**

1. Under Manage → Config Management, select **Products**.
1. Select **\+** in the top-right corner.
1. In the **Add Products** panel, fill in the following fields:

4.Select **Save**.

![](https://admin.apiwiz.io/api/guides/images/6a8d619bf0c8e28fcc1c2d2a)

## Organization \(Org View\)

Org View gives a visual, hierarchical overview of an organization's structure; its environments, proxies, shared flows, and revisions; helping you understand how configurations are organized and connected within Apigee.

**To view it:**

1. Under Manage, select **Org View**.
1. Choose the organization/environment from the dropdown in the top-right corner \(e.g., "apiwiz-nonprod - onprem"\) and select the refresh icon to load the latest data.
1. Toggle **Compact view** on or off to control how much detail the diagram shows.

The canvas displays a node graph: the organization node branches into environments \(e.g., apiwiz-test-env, apiwiz-test, nonprod\), each of which expands into its proxies and sharedFlows, which in turn list individual revisions on the right.

## Build Templates

Build Templates let you create and manage reusable proxy template structures by uploading a source template file. These templates standardize proxy generation, policy configuration, resource organization, and deployment structure across proxies.

**To create a new Template:**

1. Under Manage, select **Build Templates**.
1. Select **\+** in the top-right corner.
1. In the window that appears, enter the **Template Name** and either **Browse** for a file or drag and drop the source file into the upload area.
1. Select **Save**.      

The new template appears in the templates list on the left and becomes available for selection when configuring Artifacts or Policy Templates.