---
title: "Service"
---

The Service tab is where you design, configure, and manage services exposed through the Kong gateway. This is where you define a service's backend connection, its routes, and the plugins applied to each.

## Services List

The left panel lists all services with a toggle icon, refresh icon, search icon, and **\+ Create Service** button. Each service card shows its Name, Runtime, and Destination \(workspace\).

## Service Overview

Selecting a service loads:

- A **History** dropdown \(top-right\) showing a timestamped version selector.
- **Service Details**: Runtime, Destination, Protocol, Basepath, Host.
- **Service Metadata**: Swagger, Created By, Modified At, Modified By, Product \("No products found" if none\).
- **Timeouts**: Read Timeout, Write Timeout, Connect Timeout, Retries.
- A **Promote** dropdown \(expands to **Promote** / **Demote**\) and an **Edit** button.
- A canvas showing the full service flow: **Spec Upload \(optional\) → Destination \(mandatory\) → Service Data \[Route\(s\), each with Route Plugins\] → Service Plugins \(optional\) → Version \(optional\)**.

## Creating a Service

Select **\+ Create Service** to open the service builder. A **Deploy** button persists in the top-right across every step.

![](https://admin.apiwiz.io/api/guides/images/6aa9075e879cd85c39aebe2d)

### Spec Upload \(optional\)

![](https://admin.apiwiz.io/api/guides/images/6aa90787879cd85c39aebe58)

### Destination

![](https://admin.apiwiz.io/api/guides/images/6aa907ad879cd85c39aebe83)

### Service Data

Two tabs: **General** and **Timeout Settings** \(Timeout Settings fields not yet captured\).

General tab:

![](https://admin.apiwiz.io/api/guides/images/6aa907cc879cd85c39aebea6)

### Route Details

Select **\+** on the Service Data node to add a route.

General:

**Advanced Settings:**

![](https://admin.apiwiz.io/api/guides/images/6aa907e2879cd85c39aebec2)

### Route Plugins

Selecting **Plugins** under a route opens **Plugin Configuration** — a searchable checklist of available plugins, each with a description.

**Examples:** `basic-auth`, `basic-auth-myteam`, `basic-auth-v2`, `hmac-auth`, `ip-restriction`, `jwt`, `jwt-myteam`.

### Service Plugins \(optional\)

A service-level Plugins node on the canvas, separate from route-level plugins. Its detailed contents were not captured in the available screenshots; only its empty "Not Added" state was seen.

![](https://admin.apiwiz.io/api/guides/images/6aa90822879cd85c39aebef4)

### Version Control 

![](https://admin.apiwiz.io/api/guides/images/6aa9083b879cd85c39aebf2d)

### Deploying

Selecting **Deploy** \(top-right, persistent across all steps\) pushes the service configuration to the Kong gateway; and, if Version Control is configured, to the connected source control repository at the same time.