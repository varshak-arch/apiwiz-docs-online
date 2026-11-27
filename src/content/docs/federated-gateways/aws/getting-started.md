---
title: "Getting started"
sidebar:
  order: 4
---

## Prerequisites

Before you can use the AWS Gateway in APIwiz, you must set up a **Connector** in the Connectors module. The connector holds the credentials \(access key, secret key, or IAM role\) that APIwiz uses to communicate with AWS programmatically. Every gateway has its own authorization logic and management APIs; the connector abstracts this so you can push configurations directly from APIwiz.

Once a connector is set up, you can start creating APIs right away. You can optionally configure the following shared resources under the **Manage** tab as your APIs need them:

- **Certificates**: Required for HTTPS communication between clients, the gateway, and backend services.
- **Usage Plans**: Define quota and throttling limits for your APIs.
- **Lambda Functions**: Reference AWS Lambda functions for serverless backend integrations.
- **Stage Templates**: Reusable stage configurations you can apply during deployment.

These are configured under the Manage tab and can be reused across multiple APIs.

## Access AWS Gateway

The API Gateways landing page displays all available gateways as cards.

1. Go to **API Gateways** in the left navigation panel.
1. Select **View Details** on the AWS card.

The gateway opens with three main tabs: **Service**, **Policy**, and **Manage**. By default, the Service tab is selected.

![](https://admin.apiwiz.io/api/guides/images/6a8ebb72f0c8e28fcc1c4593)