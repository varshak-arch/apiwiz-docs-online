---
title: "Proxy Tab"
---

The Proxy tab is where you design, configure, and manage the API proxies exposed through Apigee. A **Proxy** is an intermediary configuration that receives client requests and forwards them to a backend \(target\) service; the gateway "stands in front" of the actual service and manages how requests and responses flow between consumers and backend systems.

## All Proxies

The left panel lists every proxy in the gateway. Expanding a proxy shows its deployment history, including the date and time of each deployment.

When you select a proxy, the main area shows three summary cards:

- **General Info**: Proxy Name, Description, Created By, Created At, Build Template
- **Repo Details**: Repo Name, Branch Name, Source, Repo URL
- **Proxy Details**: Proxy name, Basepath, Proxy Artifact, Proxy Artifact type, Version

Below this, the **Proxy Overview** canvas shows the full flow:

**Artifacts → Proxy Endpoint → Map Endpoints → Target Endpoint → Policy Enforcement → Version Control**

Select **Edit** to modify the proxy, or use the zoom controls on the canvas to navigate large flows.

## Creating a Proxy Workflow

To create a new proxy, select the **\+ \(Add Workflow\)** icon next to the Proxies title bar.

![](https://admin.apiwiz.io/api/guides/images/6a8d5669f0c8e28fcc1c2a05)

This opens a blank canvas with six configurable nodes:

**Artifacts → Proxy Endpoint → Map Endpoints → Target Endpoint → Policy Enforcement → Version Control**

Each node shows "Not Added" or "No Routes Available" until configured. Select **Deploy** in the top-right corner once all required nodes are configured to push the proxy live.

![](https://admin.apiwiz.io/api/guides/images/6a8d5679f0c8e28fcc1c2a27)

## Configuring Artifacts

Artifacts prepopulate proxy definitions and schemas from an existing OpenAPI specification. Configuring artifacts is optional; you can also build routes from scratch.

Select the **Artifacts** node to open the **Design Artifacts** panel, which has two sections:

**Build Templates**

- **Select Build Templates**: Choose a pre-uploaded build template to standardize the proxy structure.

**Design Artifacts**

- **Specification Type**: Choose the format of the API spec \(e.g., OAS 3.0\).
- **Swagger**: Select the Swagger/OpenAPI file to import.

Once selected, the Proxy Endpoint and Target Endpoint automatically populate with routes based on the swagger definition, and a checkmark appears above the Artifacts icon indicating it's configured. Select **Save** \(top-right\) to apply.

![](https://admin.apiwiz.io/api/guides/images/6a8d56e6f0c8e28fcc1c2a59)

## Configuring the Proxy Endpoint

The **Proxy Endpoint** is the client-facing side of the API. Select the Proxy Endpoint icon to open the **Proxy Endpoint Overview** panel:

- **Name**: The name of the proxy.
- **Proxy Version**: The version identifier.
- **Proxy Basepath**: The base path exposed to clients.
- **Description**: A short explanation of the proxy's purpose.

By default you'll have one endpoint; select **\+** on the Proxy Endpoint card to add more.

![](https://admin.apiwiz.io/api/guides/images/6a8d5796f0c8e28fcc1c2a97)

### Configuring a Route

Select "Click here to add new route" \(or an existing route\) to open the **Proxy Route Overview** panel:

**General**

- **Flow Name**: Unique identifier for the route \(e.g., CheckCustomerEligibility\).
- **Method**: The HTTP method \(GET, POST, PUT, DELETE, etc.\).
- **Resource Path**: The relative/parameterized path \(e.g., /\{customerId\}\).
- **Target Basepath**: The backend basepath this route forwards to.
- **Description**: A short explanation of the route's purpose.

**Map Policies
**Displays the inbound/outbound policies attached to this route \(configured from the Policy tab\).

Select **Save** to store the route. To remove a route, select the three dots on the route card and choose **Delete**.

## Configuring the Target Endpoint

The **Target Endpoint** represents the actual backend microservice the proxy forwards requests to. Select the Target Endpoint icon to open the **Target Endpoint Overview** panel:

**Design Artifacts**

- **Specification Type**: Format of the target's API spec.
- **Swagger**: The target's Swagger/OpenAPI file.

**Details**

- **Target Endpoint Name** : Name for this target endpoint.
- **Target Basepath**: The base path of the backend service.
- **Description**: A short summary of the target endpoint.

Select **\+** on the Target Endpoint card to add additional target methods/endpoints. Select **Save** to store each one.

![](https://admin.apiwiz.io/api/guides/images/6a8d57dcf0c8e28fcc1c2aab)

## Mapping Endpoints

**Map Endpoints** links client-facing proxy routes to their corresponding backend target routes. It lets you expose clean, consumer-friendly URLs while routing them to the actual backend paths; giving you flexibility to rename, restructure, or secure APIs without changing the underlying services.

Select **Map Endpoints** to open the **Route Mapping** panel. It lists every Proxy route on the left \(Proxy list\) with a dropdown on the right to select its matching Target Endpoint.

For each proxy route, select the corresponding target endpoint from the dropdown, then select **Save**. The mapped connections appear as lines on the canvas between the Proxy Endpoint and Target Endpoint nodes.                   

## Policy Enforcement

Select the **Policy Enforcement** icon to attach policies to this proxy. A list of available policies \(created under the Policy tab\) appears on the right; select or deselect the checkboxes as needed, then select **Save**.

## Version Control

The final step is configuring version control to store the proxy file, either as a local download or pushed to a Git repository. APIwiz provides the folder structure Apigee accepts.

Select the **Version Control** icon and choose the **Source Type** from the dropdown, then select **Save**.

![](https://admin.apiwiz.io/api/guides/images/6a8d5b0bf0c8e28fcc1c2b05)

## Deploying the Workflow

Select **Deploy** in the top-right corner of the screen to push the proxy live on Apigee.