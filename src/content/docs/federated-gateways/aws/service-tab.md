---
title: "Service Tab"
---

The Service tab is the primary configuration area within the AWS Gateway where you view, create, and manage API services associated with your AWS environment. It provides a centralized interface to define how APIs are connected, structured, and deployed through AWS, establishing connections between the platform and AWS resources such as API Gateway, enabling the creation of REST or HTTP-based APIs directly from the connector.

## All APIs

The left panel displays a dropdown to switch between **REST** and **HTTP** API types, followed by the list of APIs of that type. Each API can be expanded to reveal a **Deployments** entry showing its full deployment history, including the date and time of each deployment, so you can track when it was created, updated, or redeployed.

- **REST APIs** follow the Representational State Transfer architectural style and use standard HTTP methods such as GET, POST, PUT, and DELETE. They are best suited for structured, resource-based API operations and offer extensive features for versioning, security, and monitoring.
- **HTTP APIs** are designed for lightweight, low-latency API calls. They are simpler to configure and more cost-effective, making them ideal for use cases where minimal overhead and faster response times are preferred.

Select the "\+" icon next to the API type dropdown to create a new API.

## API Overview and API Reports

When you select an API \(or one of its deployment entries\) from the left panel, the main area opens with a toggle between two views:

- **API Overview**: Shows the API's configuration summary and visual canvas \(described below\).
- **API Reports**: Shows usage analytics for the API, filterable by **Stage** and **Date Range**. Reports include charts such as **Count** \(number of API calls per day\) and **Integration Latency** \(backend response time per day\), with additional metrics available further down the page.

![](https://admin.apiwiz.io/api/guides/images/6a8ebca4f0c8e28fcc1c45c6)

### API Overview summary cards

At the top of the API Overview screen, three summary cards give you a quick snapshot of the API:

- **General Info**: Name, Description, Endpoint Configuration, Connector, and Tags.
- **Metadata**: Created By, Created At, Modified By, and Modified At.
- **API Details**: API Key Source, Endpoint Configuration, Minimum Compression Size, Content Encoding, and Binary Media Types.

### API Overview canvas

Below the summary cards, a visual canvas shows the full service flow for the API:

**Spec Upload → API Data → Resources \(Methods\) → API Policies → Gateway Response → Deployment → Version**

Each node on the canvas is labeled **Optional** or **Mandatory** and shows whether it has been configured \("Added" / "Not Added"\). Select any node to view or edit its configuration in a panel on the right.

From this screen you can also:

- **Edit**: Opens the full builder view for the API \(the same view used when creating a new API; see below\).
- **Promote**: Select a target connector from the dropdown next to Promote, then select **Promote**. A confirmation dialog appears \("Are you sure to promote api to selected target?"\); select **Ok** to confirm or **Cancel** to back out. This pushes the API's configuration to the selected connector/environment.
- **Refresh**: Reloads the API's data.

To delete an API, select the three dots next to it in the left panel and select **Delete**.

## Creating an API

To create a new API, select the "\+" icon next to the API type dropdown in the left panel. This opens the builder canvas, where you configure the API through the following nodes: **Spec Upload / API Data → API Policies → Gateway Response → Deployment → Version**. Select **Build** in the top-right corner once configuration is complete to finalize and add the API.

### Spec Upload

Spec Upload lets you optionally import an existing API specification instead of manually configuring all endpoints, which ensures consistency and speeds up setup. This step is optional; you can also create resources from scratch without it.

Select the **Spec Upload** icon to open the configuration panel:

Select **Save** to import the specification and generate the service definition automatically.

![](https://admin.apiwiz.io/api/guides/images/6a8ebd15f0c8e28fcc1c45e8)

### API Data

API Data defines the API-level configuration; how the API connects through AWS, its visibility, authentication type, and other metadata. Select the **API Data** icon to open the panel.

Select **Save** to store the API details.

![](https://admin.apiwiz.io/api/guides/images/6a8ebd66f0c8e28fcc1c45fc)

### Creating a Resource

Within the API Data block, hover next to the API Data icon and select the "\+" sign to create a new resource \(route\) for your API. This opens the **Create Resource** panel:

Select **Save** to create the resource. The new resource appears alongside any existing ones under API Data.

To delete a resource, select the three dots on the top-right corner of the resource and select **Delete**.

![](https://admin.apiwiz.io/api/guides/images/6a8ec38df0c8e28fcc1c4656)

### Configuring Resource Details

Select a resource to open its configuration panel on the right, which walks through four steps: **Method Request → Integration Request → Method Response → Integration Response**.

**1. Method Request**

Defines how the API receives inputs from clients for the selected resource and HTTP method.

**2. Integration Request**

Defines how the API connects to the backend service and handles incoming client requests.

Select **Save** to apply the integration request configuration.

**3. Method Response**

Defines how the API returns responses to clients for the resource and method; the HTTP status codes the API can return, shown as an **HTTP Statuses** list \(each status shows its mapping state, e.g. "Unconfigured" until configured\). Select **Save** to store the method response settings.

**4. Integration Response**

Defines how the backend's responses are mapped and returned to clients. The **Integration Responses** table has the following columns:

Select **Save** to store the settings.

### API Policies

The API Policies section lets you attach policies \(created in the Policy tab\) to control behavior, enforce security, or manage traffic for the API. Select the **API Policies** node to open the **Policies** panel, which lists available policies as checkboxes. Select the policies you want to attach and select **Apply Policies**.

![](https://admin.apiwiz.io/api/guides/images/6a8ec3b3f0c8e28fcc1c4678)

### Gateway Response

Gateway Response lets you configure custom responses the API Gateway returns to clients under specific error or exceptional scenarios \(for example, integration failures or unauthorized access\), which helps standardize error messages and maintain consistency across APIs.

Select the **Gateway Response** icon to open the configuration panel and select the response type from the **Select Gateway Response** dropdown. Select **Save** to apply the configuration.

![](https://admin.apiwiz.io/api/guides/images/6a8ec3e8f0c8e28fcc1c469a)

### Deployment

Deployment is where the configured API is made available to clients through a specific stage, packaging all resources, methods, integrations, and policies into a deployable version.

Select the **Deployment** icon to open the **Resource Details** panel and select a stage from the **Select Stage** dropdown.

![](https://admin.apiwiz.io/api/guides/images/6a8ec41ef0c8e28fcc1c46bc)

### Version

Version lets you integrate your API configuration and definitions with an external source control repository, so changes are tracked, managed, and auditable over time.

Select the **Version** icon to open the **Version Control** panel:

Select **Save**, then select **Build** to finalize and add the API. The completed API appears in the API list on the left panel.

![](https://admin.apiwiz.io/api/guides/images/6a8ec455f0c8e28fcc1c46de)