---
title: "Build Tab"
---

The Build tab is where you design, configure, and manage endpoints exposed through the KrakenD gateway. This is where you define what each endpoint looks like to consumers, which backend\(s\) it fans out to, and which plugins are applied along the way.

## Endpoint List

The left panel displays an **Endpoint** selector \(dropdown\) with search, filter, and a **\+** icon to create new endpoints. Below it, all endpoints in the workspace are listed as cards showing:

- **Name**
- **Status badge**: Deployed or Draft
- **Build**: The name of the current build associated with the endpoint
- **Runtime**: The runtime the endpoint is associated with

Each endpoint card has a three-dot menu with:

- **Undeploy**: Removes the endpoint's current deployment.
- **Clone**: Duplicates the endpoint under a new build name. Selecting Clone opens a dialog prompting for a new build name before the clone is created.

![](https://admin.apiwiz.io/api/guides/images/6a9003fd67f2ddaf4b762b06)

## Creating an Endpoint

Select **\+** next to the Endpoint list to choose one of two creation paths:

- **Import Endpoints**: Bring in API specs and configure endpoints from an existing OpenAPI/Swagger definition.
- **Create Endpoint from Scratch**: Define and configure a new endpoint manually.

![](https://admin.apiwiz.io/api/guides/images/6a90026467f2ddaf4b762abe)

### Import Endpoints \(from Swagger\)

Once a Swagger and revision are selected, all available endpoints from that specification are listed for selection.

![](https://admin.apiwiz.io/api/guides/images/6a901b2667f2ddaf4b762c05)

## **Create Endpoint from Scratch**

### Endpoint Canvas

Every endpoint; whether created from scratch or via import; is represented as a visual canvas with the following flow:

**Destination → Endpoint → Backend\(s\) \[each with its own Plugins\] → Endpoint Plugins**

- **Destination**: A mandatory node representing the runtime the endpoint is deployed to.
- **Endpoint**: The mandatory central node defining the endpoint's public-facing configuration.
- **Backend\(s\)**: One or more backend nodes the endpoint routes to \(e.g., `backend1`, `backend2`\), each shown with its HTTP method and path, and an attached \(optional\) Plugins panel.
- **Endpoint Plugins**: An optional node listing plugins applied at the endpoint level \(across all its backends\).

Selecting any node on the canvas opens its configuration panel on the right.

### Destination Panel

![](https://admin.apiwiz.io/api/guides/images/6a901b9867f2ddaf4b762c29)

### Endpoint Panel- General Details

**Parameter Forwarding** \(part of the Endpoint panel\):

When an endpoint has been deployed, its **Endpoint Overview** panel additionally displays read-only metadata: Runtime Name, Created By, Created At, Modified By, Modified At; alongside the same General Details and Parameter Forwarding fields, plus an **Endpoint Plugins** count. A **Build History** dropdown at the top of the canvas lets you switch between builds recorded for that endpoint.

![](https://admin.apiwiz.io/api/guides/images/6a901bf667f2ddaf4b762c3e)

### Backend- General / Request

![](https://admin.apiwiz.io/api/guides/images/6a901d9767f2ddaf4b762c70)

### Backend- Response Manipulation

![](https://admin.apiwiz.io/api/guides/images/6a901e1767f2ddaf4b762c96)

### Backend Plugins

Selecting the Plugins node attached to a backend opens the **Backend Plugins** panel; a checkbox list of plugins scoped to backends, grouped by category \(for example, a category named "Request Body Generator Plugin Testing"\). Each plugin shows a short description, and Enterprise-only plugins are labeled accordingly.

Example plugins seen at the Backend scope include:

- Request Body Generator
- Response Schema Validation
- gRPC backend connection
- Response manipulation with templates
- Pubsub publisher
- Pubsub subscriber
- OAuth2 Client Credentials
- AWS Lambda functions
- Martian modifiers
- Common Expression Language \(CEL\) validations

![](https://admin.apiwiz.io/api/guides/images/6a9021c567f2ddaf4b762cdf)

### Endpoint Plugins

Selecting the Plugins node attached to the Endpoint opens the **Endpoint Plugins** panel — structured the same way but scoped to the endpoint level, grouped under categories \(for example, "Websocket Plugin Testing"\). A plugin can show an **Enforced** badge when it is actively applied \(for example, Websockets shown as checked and Enforced\).

Example plugins seen at the Endpoint scope include:

- Websockets
- Response manipulation with templates
- Bot Detection
- Response Schema Validation
- Basic Authentication
- Request Body Generator
- Common Expression Language \(CEL\) validations

![](https://admin.apiwiz.io/api/guides/images/6a90221467f2ddaf4b762d03)

## Saving and Deploying

Endpoint, Destination, Backend, and Plugin panels each include **Cancel** and **Save** actions. A top-level **Save** button on the Endpoint canvas view saves the endpoint configuration as a whole. Deployment status \(Deployed/Draft\) is reflected on the endpoint card and canvas header once a build is pushed live.