---
title: "Tryout"
---

Use the **Tryout** method to create an OAS by sending a request to a live API endpoint and automatically generating the specification based on the actual request and response.

### Generate an OAS using Tryout

To generate an OAS using Tryout, do the following:

1. Select the **Tryout** card. The **Tryout** panel opens at the bottom of the screen.
1. In the **Request** section, enter the following details:
  - **HTTP Method**: Select the HTTP method from the dropdown, such as GET, POST, PUT, or DELETE.
  - **URL**: Enter the endpoint URL of the API you want to test.
  - **Headers**: Add key-value pairs for request headers.
  - **Query Params**: Define query parameters to append to the request URL.
  - **Form Params**: Specify form parameters if the API request requires them.
  - **Payload**: Enter the request body payload, such as JSON data, if applicable.
1. Select **Send** to execute the request against the specified endpoint. The **Response** tab displays the API response returned from the server, including the status code, headers, and response body.
1. Select **Generate Spec** in the top-right corner of the **Tryout** panel. A dialog box appears prompting you to enter the following details:
  - **Title**: Enter a title for the specification.
  - **Description**: Enter a brief description of the API.
1. Select **Generate**. A confirmation message appears in the bottom-right corner. The system redirects you to the **Design Studio** landing page and the newly created OAS appears in the left pane.
1. Select the OAS from the left pane to view its details in the **Spec Overview** panel.
1. Select **Edit** in the **Spec Overview** panel to begin designing the OAS.