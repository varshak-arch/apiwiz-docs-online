---
title: "Getting Started"
sidebar:
  order: 4
---

Before building endpoints in the KrakenD gateway within APIwiz, a few shared resources need to be in place. These are configured under the **Manage** tab and are reused across endpoints and builds.

## Prerequisites

- **Hosts**: Define the backend server URLs \(and their owning runtime\) that endpoints will route to. Hosts can be marked as the default host list for backends that don't specify one.
- **Service Configuration**: Runtime-level service configurations tied to a Runtime Name, used when building and deploying endpoints.
- **Global Plugins**: Plugins applied at the service/runtime level rather than to an individual endpoint or backend. \(Referenced in Commit History as "Created/Updated/Removed Global Plugin via APIWIZ"; full configuration screen not yet documented.\)

These are configured under **Manage** and can be reused across multiple endpoints and builds.

## Accessing the KrakenD Gateway

Once inside a KrakenD gateway workspace in APIwiz \(for example, a workspace named after your organization's data stage\), four tabs are available in the top navigation:

![](https://admin.apiwiz.io/api/guides/images/6a9001bc67f2ddaf4b762a6d)

By default, the workspace opens on the **Build** tab, showing the **Endpoint** list in the left panel.