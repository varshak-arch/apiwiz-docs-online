---
title: "Creating from a trace"
---

From within any Trace View, you can generate OAS specifications, test cases, and sandbox environments directly from the captured trace data. Select the **three dots \(⋯\)** in the top-right corner to access the following options:  

- **Manage Workflows**
- **Create Test Case**
- **Create Sandbox**

![](https://admin.apiwiz.io/api/guides/images/6ad0bb22a997220630a0e4e9)

### Manage Workflows

Manage Workflows lets you create a workflow from a captured trace. The APIs in the trace are validated against an OAS, mapped to an existing API portfolio, and saved as a workflow.

Select the three dots \(⋯\) in the top-right corner of the Trace View, then select **Manage Workflows**. The **Create Workflow** page opens.

Creating a workflow has two steps, shown at the top of the page:

1. **Validate OAS**: Make sure every API in the trace has an OAS attached.
1. **Map Portfolio**: Map the APIs to an API portfolio and define a service for each API.

### APIs in Trace

The **APIs in Trace** panel on the left lists every API endpoint captured in the trace, along with its **Attached OAS**. Select an endpoint to view its full request and response data, including headers, query parameters, form parameters, and payload.

If an API shows **Unknown** under **Attached OAS**, it has no OAS yet. Generate one in the Validate OAS step.

### Step 1: Validate OAS

For each API that has no attached OAS, choose one of the following actions under **API Design**:

**Create New**

1. Select **Create New**.
1. Enter an **OAS Name** and **OAS Description**.
1. Select **Generate Swagger**.

The new OAS is created in Design Studio.

**Combine with existing**

1. Select **Combine**.
1. Select an existing OAS from the dropdown.
1. Select a **Revision** from the dropdown.
1. Select **Combine & Generate Swagger**.

The trace data is merged into the selected OAS revision in Design Studio.

When every API in the trace has an attached OAS, the **Validate OAS** step is marked complete and the page shows **Looks Good\! You can now map your API portfolio**.

![](https://admin.apiwiz.io/api/guides/images/6adf11fea997220630a10787)

### Step 2: Map Portfolio

Map the APIs in the trace to an existing API portfolio, and add a service definition for any API that doesn't have one.

1. Select **Map Portfolio**.

![](https://admin.apiwiz.io/api/guides/images/6ad0bbf665ab16aa012bc68c)

1. In the **Portfolio** dropdown, select the API portfolio to map this workflow to.
1. In the **APIs in Trace** panel, select an API that has no service definition. These APIs show **-** in the list.
1. In the **Define Service** section, enter the following details:**Name**: The name of the service.**Summary**: A short description of the service.The **OAS Details** section shows the **Swagger Name** and **Swagger Revision** attached to the API. These fields are read-only.
1. Select **Create**.
1. Repeat steps 3–5 for each API that has no service definition.

When every API is mapped, the **Map Portfolio** step is marked complete and the page shows **All services are mapped**.

### Create the workflow

1. In **Workflow Name**, enter a name for the workflow.
1. Select **Create Workflow**.

The workflow is created for the selected portfolio.

![](https://admin.apiwiz.io/api/guides/images/6ad0bc50a997220630a0e528)

### Create Test Case

Create Test Case allows you to generate a test case directly from the captured trace, using the real request and response data as the test input.

1. Select **Create Test Case** from the three dots menu.
1. Under **Test Scenario**, choose to save to a **New Collection** or an **Existing Collection**.
1. Enter a **Name** and optional **Description** for the scenario.
1. Under **Test Case**, enter a **Test Case Name** and **Description**.
1. Select **Create**.

The test case is saved to the API Testing module, where it can be run and managed. See [API Testing](/get-started/get-started-with-apiwiz/introduction/) for details.

![](https://admin.apiwiz.io/api/guides/images/6adf127565ab16aa012beb89)

### Create Sandbox

Create Sandbox allows you to generate a sandbox proxy directly from the captured trace, using the real traffic data as the basis for the sandbox environment.

1. Select **Create Sandbox** from the three dots menu.
1. Under **Collection**, choose to save to a **New Collection** or an **Existing Collection**.
1. Enter a **Collection Name** and **Description**.
1. Under **Proxy Name**, enter a **Proxy Name** and **Description**.
1. Select **Create**.

The sandbox is saved to the API Sandbox module. See [API Sandbox](https://docs.apiwiz.io/guides?guideId=6a606b4369d1ae970571f1e1&pageId=6a72d77167839bf43da9e752) for details.

![](https://admin.apiwiz.io/api/guides/images/6adf12ed65ab16aa012beba9)