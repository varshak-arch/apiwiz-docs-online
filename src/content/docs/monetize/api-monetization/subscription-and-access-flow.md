---
title: "Subscription and access flow"
---

A subscription is a high-level access scope that controls which APIs a consumer's developer app can access and which monetization rules apply. Instead of subscribing to APIs individually, the consumer creates a subscription that bundles one or more packages. Each package maps to a gateway product, but this configuration is hidden from the consumer, who interacts only with business packages on the portal. This topic describes how subscriptions, packages, and gateway products relate, and how a consumer subscribes to a package, registers a developer app, and retrieves credentials to call the API.

### Access structure

A consumer creates a subscription that includes one or more packages. Products control authorization, while subscriptions control monetization. 

For more information, see [Publish packages](/monetize/api-monetization/publishing-a-package/) and [Associate with a gateway product](/monetize/api-monetization/associating-with-a-gateway-product/).

### Step 1: Create a subscription

Create a subscription in the Developer Portal to bundle the packages that your apps need. You can add more packages to the subscription before you register an app.

**Prerequisites:**

- You are signed up to the Developer Portal.
- The provider has published the monetization package.
- The provider has associated the package with an approved gateway product.

To create a subscription:

1. In the Developer Portal marketplace, select **API Packages**, and then open the package under its category.
1. On the package page, select **Create Subscription**.
1. Enter a name for the subscription.
1. Select **Save**.

The subscription includes the package.

To add more packages, browse **API Packages** and add them to the existing subscription. For more information, see [Create subscription](/monetize/api-marketplace/core-usage/package/).

### Step 2: Register a developer app

Register a developer app to generate the credentials your application uses to call the API. When you register the app, you select an access route that determines whether monetization applies.

**Prerequisites:**

- A subscription that includes at least one package, for the Subscription route.

To register a developer app:

1. In the Developer Portal, select **Create App** for the subscription.
1. In the **App Name** field, enter a name for the app.
1. Select **Subscription** as the source of access.
1. In the list of subscriptions, select the subscription for the app.
1. Review the APIs that the subscription grants to the app.
1. Select **Next**.
1. Review the configuration, and then select **Create App**.

The platform registers the app at the gateway layer. The app appears on the **My Apps** page.

To register an app without monetization, select **Product** in step 3, and then select a gateway product. Monetization doesn't apply to this route. For more information, see [Create app](/monetize/api-marketplace/core-usage/apps/).

### Step 3: Retrieve the Client ID and Client Secret

After the app is created and tied to the subscription, the platform registers the app at the gateway layer and generates its credentials. The Developer Portal stores them with the app.

**Prerequisites:**

- A registered developer app.

To retrieve the credentials:

1. In the Developer Portal, select **My Apps**, and then open the registered app.
1. Copy the **Client ID** and **Client Secret**.

For more information, see [Viewing app details](/monetize/api-marketplace/core-usage/apps/).

### Step 4: Generate an OAuth token and call the API

The gateway's security proxy rejects any request that has an invalid or missing token, or that doesn't use valid credentials from a registered app. To call the API, exchange the Client ID and Client Secret for an OAuth token, and then pass the token in the request header.

**Prerequisites:**

- The Client ID and Client Secret of the registered app.

To generate a token and call the API:

1. In your API client, exchange the **Client ID** and **Client Secret** for an OAuth token.
1. In the header of the API request, add the OAuth token.
1. Send the request to the API.

The API accepts the request, and the call is metered according to the metering rules and rate cards of the subscribed package.