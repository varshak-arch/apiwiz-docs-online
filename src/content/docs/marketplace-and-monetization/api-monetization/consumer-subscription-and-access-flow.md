---
title: "Consumer subscription and access flow"
---

This describes how a consumer subscribes to a package, registers a developer application, and retrieves credentials to call the API.

### Step 1: Create a subscription

A subscription is a high-level access scope. Instead of subscribing to APIs one by one, the consumer creates a subscription that lets them bundle one or more packages together. Each package inside the subscription is automatically mapped to a physical gateway product, but this technical configuration is hidden from the consumer, who only interacts with the business packages on the portal.

### Step 2: Register a developer application

The consumer registers a developer application on the portal, then chooses an access route:

- **Subscription Route \(Monetized\)**: the consumer links their app to their active subscription. This enforces all associated metering rules and rate cards.
- **Product Route \(Non-Monetized\)**: the consumer bypasses the monetization wrapper and subscribes directly to an individual gateway product. This suits scenarios where monetization isn't required.

### Step 3: Retrieve Client ID and Client Secret

Once the application is created and tied to the subscription, the platform registers the app at the gateway layer. The consumer can then go to **My Apps**, select their registered app, and retrieve their **Client ID** and **Client Secret**.

### Step 4: Generate an OAuth token and call the API

The gateway's security proxy blocks and rejects any request made with an invalid or missing token. To call the API, the consumer exchanges their **Client ID** and **Client Secret** for a valid OAuth token, then passes the token in the request header to complete their transaction.