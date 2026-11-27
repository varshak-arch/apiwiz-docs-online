---
title: "Getting Started"
sidebar:
  order: 4
---

## Prerequisites

Before you can use the Nginx Gateway in APIwiz, you should ideally set up a **Connector**, though Nginx supports uploading configuration directly if a connector isn't preconfigured.

You must also configure the following before creating APIs:

- **Certificates**: Required for HTTPS/SSL communication between clients, the gateway, and backend services.
- **Upstreams**: Define the backend servers the gateway routes traffic to.
- **Products**: Group services for organization and governance.

These are configured under the **Manage** tab and can be reused across multiple services.

## Access Nginx Gateway

The API Gateways landing page displays all available gateways as cards.

1. Go to **API Gateways** in the left navigation panel.
1. Select **View Details** on the **Nginx** card.

The gateway opens with four main tabs: **API**, **Plugin**, **Manage**, and **Import**. By default, the **API** tab is selected.

![](https://admin.apiwiz.io/api/guides/images/6a8c093df0c8e28fcc1c0728)