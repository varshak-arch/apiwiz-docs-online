---
title: "Getting Started"
sidebar:
  order: 4
---

Before designing APIs in the Azure gateway within APIwiz, a few shared resources are typically configured first. These live under the **Manage** tab and are reused across APIs.

## Prerequisites

- **Certificates**: Required for secure \(HTTPS\) communication and mutual TLS between clients, the gateway, and backend services.
- **Backends**: Define the backend services \(with optional certificate validation\) that operations route to.
- **Cache**: Configure a cache resource \(e.g., Redis-compatible connection string\) that policies can reference for response caching.
- **Name Value**: Reusable named values \(plain or secret\) that can be referenced across policies and configurations.
- **Global Policy**: Policies applied at the service level, across all APIs on a given connector/gateway instance.
- **Products**: Bundles of APIs published together with shared access and subscription rules.
- **Function Apps**: Azure Function Apps associated with a connector, for serverless backend integrations.

These are configured under **Manage** and can be reused across multiple APIs.

## Accessing the Azure Gateway

Once inside an Azure gateway workspace in APIwiz, three tabs are available in the top navigation:

![](https://admin.apiwiz.io/api/guides/images/6a9e469867f2ddaf4b768a21)

By default, the workspace opens on the **Service** tab, showing the **API List** in the left panel.