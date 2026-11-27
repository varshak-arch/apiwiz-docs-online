---
title: "Policy Tab"
---

The Policy tab is where you create and manage reusable policies that define what the gateway should do while processing a request or response; the "rules" or "behaviors" attached to a proxy. Separating policy logic from proxy design lets you update policies without redeploying proxies.

Policies in Apigee are created under a **Policy Template**. You must create a template before you can add policies to it.

## Creating a Policy Template

1. Go to the **Policy** tab.
1. Select the **\+** icon next to the Policy Template panel.
1. In the **Add Policy Template** panel, enter:**Template Name**, **Type**, **Description**.
1. Select **Save**.

![](https://admin.apiwiz.io/api/guides/images/6a8d5d69f0c8e28fcc1c2c10)

## Adding a Policy Under a Template

Once a template exists, you can add individual policies to it.

1. Go to the **Policy** tab.
1. Select a template from the **Template** dropdown. The main panel lists the policies under that template, with columns: Name, Description, Type, Apply to flow, and Enforced.
1. Select **Add Policy \(\+\)** in the top-right corner.
1. In the **Add Policy Details** panel, enter: **Name**, **Display Name**, **Description**, 
  - **Apply To Flow** \(checkbox\): Applies the policy to the current API flow.
  - **Enforce Policy** \(checkbox\): Automatically enforces the policy during proxy creation.
1. Select **Save**.

![](https://admin.apiwiz.io/api/guides/images/6a8d5d93f0c8e28fcc1c2c32)

## Editing or Deleting a Policy

Select the three dots at the end of the policy row and choose **Edit** or **Delete**.