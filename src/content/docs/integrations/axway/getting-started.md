---
title: "Getting Started"
sidebar:
  order: 4
---

## Prerequisities

Before you can use the Axway Gateway in APIwiz, you must set up a **Connector** in the Connectors module. The connector holds the credentials \(username, password, or admin token\) that APIwiz uses to communicate with the Axway gateway programmatically. Every gateway has its own authorization logic and management APIs; the connector abstracts this so you can push configurations directly from APIwiz.

You must also configure the following before creating APIs:

- **Certificates**: Required for HTTPS communication between clients, the gateway, and backend services.

- **Remote Hosts**: Define the backend services the gateway communicates with.
- **Organizations**: Required because proxies are deployed under an organization. Define the business entities that own or consume APIs.

These are configured under the **Manage** tab and can be reused across multiple APIs.

## Access Axway Gateway

The API Gateways landing page displays all available gateways as cards.

1. Go to **API Gateways** in the left navigation panel.
1. Select **View Details** on the Axway card.

The gateway opens with three main tabs: **API**, **Policy**, and **Manage**. By default, the **API** tab is selected.