---
title: "Getting started"
sidebar:
  order: 4
---

Before designing services in the Kong gateway within APIwiz, you need to set up a connector and configure a few shared resources. These live under **Connectors** and the **Manage** tab, and are reused across services.

## Setting Up the Kong Connector

1. Go to **Connectors** in the left navigation and select **API Gateway Integration**.
1. Select the **kong** card \("Manage Kong Services"\) and select **View Details**.
1. Under **Runtimes**, select **\+ New Connection**, or select an existing connection to edit it.
1. Configure the connector:

![](https://admin.apiwiz.io/api/guides/images/6aa3cc5a67f2ddaf4b76e75d)

Each connection also shows a **Tier** \(e.g., "free"\) and deployment type \(e.g., "On-Prem"\) in the Runtimes list.

## Prerequisites

Before creating services, configure the following under the **Manage** tab:

- **Certificates**: Required for SSL/TLS. Must be defined and go through an approval workflow \(Review → Approved/Rejected/Change Required\) before being applied to a service.
- **SNI**: Binds a hostname to a specific SSL Certificate, used for Server Name Indication during TLS negotiation.
- **Upstreams**: Named backend groups used for load balancing, with a configurable algorithm \(e.g., round-robin\), hash settings, and optional client certificate.
- **Targets**: Individual backend hosts mapped to an Upstream; used instead of defining targets individually within each service when managing a high volume of backend targets.
- **Global Plugins**: Plugins applied at the service/runtime level, across all services and routes.

## Accessing the Kong Gateway

Once inside a Kong gateway workspace in APIwiz, three tabs are available in the top navigation:

![](https://admin.apiwiz.io/api/guides/images/6aa3cc0967f2ddaf4b76e732)

By default, the workspace opens on the **Service** tab, showing the **Services** list in the left panel.