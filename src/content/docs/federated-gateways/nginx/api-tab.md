---
title: "API Tab"
---

The API tab is where you design, configure, and manage services exposed through the Nginx gateway. This is where you define what your API looks like to consumers and how it connects to your backend services.

### All APIs

The left panel displays all services currently available in the gateway.

- **Search**: Enter a keyword to find a specific API quickly.
- **\+**: Opens the **Create Service** canvas to build a new service.

If no services exist yet, the main area displays a **Services** placeholder with a **Create** button to get started.

### Creating a Service

To create a new service, select the **\+** icon next to **All APIs**, or select **Create** on the Services placeholder. Both actions open the same **Create Service** canvas.

The canvas displays three nodes:

- **Spec Upload** \(Optional\): Start here to prepopulate API details from an OpenAPI specification.
- **API Details** \(Mandatory\): Contains **API Data**, where you define the service configuration, and the operations/routes area.
- **API Plugins** \(Optional\): Attach plugins to the service.

### Spec Upload

Select the **Spec Upload** node to open the panel on the right. Choose an **Import Type**:

![](https://admin.apiwiz.io/api/guides/images/6a8c1d9cf0c8e28fcc1c0c55)

Configuring a spec is optional; you can also create routes from scratch without this step.

### API Data

Select the **API Data** node to open **Add API Details**, which has the following fields under **General**:

![](https://admin.apiwiz.io/api/guides/images/6a8c1df3f0c8e28fcc1c0c69)

### Adding a Route

Select **Click here to add new route** \(or the **\+** icon on the connector between API Data and the operations area\) to open **Add Location**:

Under **Select Methods**, choose how the route resolves traffic:

Select **Save** to add the route.

![](https://admin.apiwiz.io/api/guides/images/6a8c1e60f0c8e28fcc1c0c8b)

### API Plugins

Select the **API Plugins** node to attach plugins to this service. If no plugins have been created yet, this panel shows **No categories found**; see [Plugin Tab](/federated-gateways/nginx/plugin-tab/) to create one first.

Once configured, select **Deploy** in the top-right corner to push the service to the Nginx gateway.