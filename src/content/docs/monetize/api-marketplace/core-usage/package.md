---
title: "Package"
---

A **package** is a curated bundle of related APIs, grouped together based on a specific use case or business function \(for example, payment collections, loan processing, or credit checks\). Instead of subscribing to individual APIs one at a time, a package lets consumers access a complete, ready-to-use set of related endpoints under a single subscription.

Packages exist to simplify API consumption; they reduce the effort of discovering and integrating multiple standalone APIs, provide a consistent rate card across all APIs included in the bundle, and make it easier for consumers to adopt a full workflow \(like "Collections" or "Credit Check"\) rather than piecing one together from separate APIs.

The **Package** page displays all API packages published in your workspace.

## Viewing packages

Select **Packages** from the top navigation to view all published packages. The page displays:

- **Our Most Popular Package**: A highlighted package based on user reviews.
- **Categories**: Browse packages grouped by API category.
- **Popular Packages**: A list of packages, each showing its name, rating, category tag, and a short description.

### Viewing package details

Select a package from the **Packages** page to view its details:

- **Package overview**: Name, description, rating, Category, Total Endpoints, and Valid Until date.
- **Default Rate Card**: Displays the charging model \(for example, **Tier Rate**\), call slabs, and additional fees.
- **Subscribed users**: The number of users currently subscribed to the package.
- **Resource Information:** A table listing each endpoint, its description, and the API doc matched by the endpoint’s swagger name. Select the API doc name to open its API reference. If no matching API reference exists, the name can’t be selected.
- **Reviews**: User reviews and ratings for the package.

## Reporting a package

To report an issue with a package:

1. On the **Package Details** page, select **Report Issue**.
1. In the **Concern About** field, select the relevant category \(for example, **Rateplan Details**\).
1. In the **Message** field, enter a description of the issue.
1. Select **Submit**.       

  

![](https://admin.apiwiz.io/api/guides/images/6a62e85f69d1ae9705723eb3)

## Subscription

A **subscription** is what links a consumer's app to one or more packages, allowing that app to access the APIs included in those packages. Subscriptions can be created directly, or created/added to while subscribing to a package.

### Creating a subscription

You can create a subscription from the **Package Details** page when subscribing to a package.

To create a subscription:

1. On the **Package Details** page, select **Subscribe**. The **Add to Subscription** panel opens.
1. Choose one of the following options:

1. **If Create New Subscription:**
  - Enter a **Name** and **Description** for the subscription. The selected package is automatically included in the new subscription.
  - Select **Create**.
1. **If Add to Existing Subscription:**
  - Select the subscription you want to add the package to.
  - Select **Next**.

  ![](https://admin.apiwiz.io/api/guides/images/6a62e89669d1ae9705723ecd)

If the selected subscription already contains the package, a message tells you that the package is already in the subscription.