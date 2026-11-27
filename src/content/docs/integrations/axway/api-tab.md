---
title: "API Tab\\n"
---

The API tab is where you design, configure, and manage APIs exposed through the Axway gateway. This is where you define what your API looks like to consumers and how it connects to your backend services.

### All APIs

The left panel displays all APIs currently available in the gateway. Expanding an API shows its full deployment history; including the date and time of each deployment; so you can track when it was created, updated, or redeployed.

- **Search**: Enter a keyword to find a specific API quickly, especially useful when working with a large number of APIs.
- **Refresh: **Reloads the API list to reflect any newly added, updated, or removed APIs.
- **Sync**: Pulls APIs from a connected gateway into APIwiz.

![](https://admin.apiwiz.io/api/guides/images/6a7c035deb3c9603a6c46da8)

When you select an API from the left panel, the main area displays a summary of its **Backend Details**, **Frontend Details**, and **Models** at the top. Select any of these to view or edit the configuration.

The API overview also displays a visual canvas showing the full service flow;

**Artifacts → Backend → Frontend → Version Control**; so you can see the complete configuration at a glance.

To delete an API, select the three dots next to it in the left panel and select **Delete**.

**To sync APIs:**

1. Select the **Sync** icon in the All APIs title bar. The **Sync APIs** panel opens on the left.
1. Under **Connector**, select the connector you want to sync APIs from. A list of available APIs appears below.
1. Search for specific APIs using the search bar.
1. Select the APIs you want to sync.
1. Select **Sync**.

![](https://admin.apiwiz.io/api/guides/images/6a7c06f9eb3c9603a6c46deb)

### Creating an API

To create a new API, select the **\+** icon next to the **All APIs** title bar. This opens a configuration window where you define the API and its connection parameters.

**Creating an API involves five steps: 

Artifacts → Backend Configuration → Frontend API Details → Frontend Route Details → Version Control**.

#### Step 1: Artifacts

Artifacts prepopulate definitions and schemas from an existing OpenAPI specification. Configuring artifacts is optional; you can also create routes from scratch without this step.

When you select Artifacts, a configuration panel opens with the following:

- **Select Type**: Choose **REST** or **HTTP**. This determines the protocol and structural behavior of the API.
- **Import Type**: Choose how to import the API specification:
  - **Add**: Select an existing Swagger definition from the dropdown, then choose the revision \(version\) of that Swagger file.
  - **Upload**: Upload a JSON file containing your OpenAPI or Swagger specification from your local system.

Select **Save** to import the specification. APIwiz automatically generates the backend and frontend routes based on the Swagger definition.

When no artifact is configured, the Artifacts node displays **Not Configured** on the canvas. Selecting the Artifacts node opens the **Spec Upload** panel on the right.

![](https://admin.apiwiz.io/api/guides/images/6a7c075beb3c9603a6c46e0d)

#### Step 2: Backend Configuration

Once artifacts are configured, you can see all the backend routes generated from the Swagger definition. The Backend section has two parts: **Backend Details** and **Routes**.

**Backend Details**

Backend Details defines the API-level backend configuration. Select the **Backend Details** icon to open the panel.

**General**

- **API Name**: The name of the backend API.
- **Description**: A brief description of the backend API's purpose.
- **Select Connector**: The backend connector type \(for example, Axway\).
- **Base URL**: The root URL of the backend service.
- **Select Organization**: Associates the backend API with an organization.
- **Resource Path**: The base resource path used by backend routes.

**Models**: Displays the data models associated with the backend API. Each model can be expanded to view its structure. 

Select **\+** next to Models to open the **Add Model** panel, which has two steps:

**Step 1: Data Dictionary**: Search and select from existing data dictionaries in your workspace. Expand a dictionary to view its models and select the ones you need.

**Step 2: Data Models**: The models from the selected dictionary appear here for review before saving.

To view an existing model, hover over the model name, select the three dots, and select **View** to see the model definition in JSON format.

![](https://admin.apiwiz.io/api/guides/images/6a7c0c7deb3c9603a6c46eb3)

**Routes**

Routes specify where and how the gateway forwards requests to the target backend service. Select **Routes** to see the list of all backend routes. Select a route to open its configuration panel on the right, which includes:

**General**

- **API Name**: The name of the backend API.
- **Description**: A brief description of the backend API's purpose.
- **Select Connector**: The backend connector type \(for example, Axway\).
- **Base URL**: The root URL of the backend service.
- **Select Organization**: Associates the backend API with an organization.
- **Resource Path**: The base resource path used by backend routes.

**Consumes**: Specifies the content types accepted by the route \(for example, application/json\). Select **\+** to add a new type. Select the three dots to edit or delete an existing one.

**Parameters**: Defines the parameters the route expects. Each parameter has:

- **Name**: Parameter identifier.
- **Param Type**: Location of the parameter \(for example, path, query, header\).
- **Type**: Data type \(for example, string, integer\).
- **Format**: Data format \(for example, uuid\).
- **Multiples**: Allow multiple values.
- **Required**: Mark as mandatory.

Select **\+** to add a parameter. Select the three dots to edit or delete.

**Response Codes**: Defines the HTTP response codes returned by the route \(for example, 200, 404, 500\). Select **\+** to add. Select the three dots to edit or delete.

**Response Types**: Defines the structure of responses returned by the route. Each entry includes Response Type, Model Name, and Allow Multiple. Select **\+** to add. Select the three dots to edit or delete.

![](https://admin.apiwiz.io/api/guides/images/6a7c0db4eb3c9603a6c46fce)

**To add a new backend route:**

1. Select **\+ Click here to add new route** on the canvas. The **Add Route Details** panel opens.
1. Enter the following:
- **Name** \(required\): A name for the route.
- **Method**: Select the HTTP method: GET, POST, PUT, DELETE, PATCH, or OPTIONS.
- **Path** \(required\): The resource path for the route.

3.Select **Save**.

![](https://admin.apiwiz.io/api/guides/images/6a7c0dc7eb3c9603a6c46fe2)

#### Step 3: Frontend API Details

The Frontend API Details icon opens the API-level frontend configuration; settings that apply across all frontend routes of this API. It has two tabs: **General** and **Policies**.

**General**

- **API Name**: The name of the frontend API exposed to consumers.
- **Description**: A short description of the API's purpose.
- **Path**: The base path exposed publicly \(for example, /v10\).
- **Choose Certificate**: Select a certificate to secure the API endpoint.
- **Monitor API Usage**: Enable monitoring and analytics for API usage.
- **Tags**: Key-value pairs to categorize the API. Select **\+** next to Tags to open the **Add Tag** panel. Enter a **Name** \(required\) and **Value**, then select **Save**.

**Policies**: Same structure as route-level policies \(Inbounds and Outbounds\), but applied at the API level across all routes.

#### Step 4: Frontend Route Details

Frontend routes define how external consumers access your APIs. They are the public-facing interface of the API; the paths, parameters, and metadata that consumers interact with. Frontend routes act as an abstraction layer over backend services, meaning you can change backend implementations without impacting consumers. This is also where policies are applied to manage traffic and behavior.

Select a frontend route to open its configuration panel, which has two tabs: **General** and **Policies**.

**General**

- **Route Name**: A name for the frontend route \(for example, GetOrdersFrontend\).
- **Path**: The public path exposed to consumers \(for example, /v1/orders\).
- **Description**: A short explanation of the route's purpose.
- **Tags**: Key-value pairs to categorize and organize routes. Select **\+** to add a tag.
- **Parameters**: Input parameters accepted by the route. Select **\+** to add a parameter with Name, Param Type, Type, Format, Multiples, and Required fields.

Select **Save** to save the frontend route configuration.

![](https://admin.apiwiz.io/api/guides/images/6a7c0de5eb3c9603a6c47004)

**Policies**

Policies define how requests and responses are handled as they pass through the gateway. There are two policy sets: **Inbounds** and **Outbounds**.

Inbound policies are applied when the request flows from client to gateway. They protect backend services from unauthorized or malformed requests.

- **Security Policy**: Enforces authentication and authorization \(for example, API key verification\).
- **CORS Policy**: Defines cross-origin access rules.

Outbound policies* *are applied when the request flows from gateway to backend.

- **Authentication Policy**: Handles authentication when communicating with backend services.
- **Request Policy**: Modifies or enriches outgoing requests sent to the backend.
- **Response Policy**: Transforms or filters backend responses before returning them to the client.
- **Routing Policy**: Controls how requests are routed to backend services.

To add a policy, hover over the relevant policy section and select **Add \+**, then enter the policy name and connector name. 

#### Step 5: Version Control

The final step is configuring version control to store and manage your API definitions in a source control system.

Select the **Version Control** icon to open the configuration panel. Enter the following:

- **Source**: The version control provider \(for example, GitHub\).
- **Auth Type**: The authentication method \(for example, Token-based\).
- **Host URL**: The base URL of the source control host \(for example, [https://github.com](https://github.com)\).
- **Repo Name**: The repository where API artifacts will be stored.
- **Username**: The username associated with the repository.
- **Commit Message**: A message describing the changes being committed.
- **Branch**: The branch to commit changes to \(for example, main\).
- **Folder Name**: The folder path within the repository to store API files.
- **Token**: The access token to authenticate with the source control system.

Select **Save**, then select **Deploy** to deploy the API to the Axway gateway. Once deployed, the API becomes accessible via the gateway's management URL.

![](https://admin.apiwiz.io/api/guides/images/6a7c0e05eb3c9603a6c47026)