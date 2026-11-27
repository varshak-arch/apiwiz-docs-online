---
title: "Manage Tab"
---

The Manage tab is where you configure shared resources that support APIs and policies across the gateway. These resources are reusable; changes here can impact multiple APIs at once. The left panel contains five sections: **Certificates**, **Quotas**, **Remote Host**, **Products**, and **Organization**.

### Certificates

Certificates secure communication between clients, the gateway, and backend services. They enable TLS/SSL encryption, mutual authentication, and secure connections. Managing certificates centrally ensures consistent security across all APIs.

The certificates list displays: **Name**, **Connector**, **Status**, **Updated By**, and **Updated At**.

Select the filter icon to filter certificates by status: **Show All**, **Approved**, **Rejected**, **Change Required**, or **Review**.

**To create a certificate:**

1. Select **\+** in the top-right corner.
1. Enter the following:
  - **Name**: A unique name for the certificate.
  - **Connector**: Select from the dropdown.
  - **Source**: Select the certificate source.
  - **URL**: The URL from which the certificate can be retrieved.
  - **Username** and **Password**: Authentication credentials for the certificate source.
  - **Use for Outbound** / **Use for Inbound**: Select the applicable checkboxes.
1. Select **Save**.

**To manage an existing certificate**, select the three dots next to it:

- **Edit**: Modify certificate details and select **Save**.
- **Change Status**: Opens the **Change Log** panel with the following:
  - **Status**: Select the new status: **Change Required**, **Approved**, **Rejected**, or **Review**.
  - **Commit Message**: Enter a message describing the reason for the status change.
  - **Current Status**: Displays the current status of the certificate.
  - **History**: Shows a log of all past status changes with timestamp and user.
- **Delete**: Permanently removes the certificate. Use with caution if the certificate is in use.

![](https://admin.apiwiz.io/api/guides/images/6a7c3d00eb3c9603a6c47c2b)

### Quotas

Quotas control how much traffic an API can handle within a defined period. They protect backend services from overload, enforce fair usage among consumers, and support service-level agreements. For example, you can restrict a user to 1,000 API calls per day; the gateway enforces this automatically without requiring custom logic in your backend.

The quotas list displays: **Name**, **Connector**, **Type**, **Status**, **Updated By**, and **Updated At**.

**To filter quotas**, select the filter icon and filter by Status.

**To add a quota:**

1. Select **\+** in the top-right corner.
1. Enter the following:
  - **Name**: A unique name for the quota.
  - **Connector**: Select from the dropdown.
  - **Description**: A short description of the quota's purpose.
  - **Type**: Select Application or System level.
1. Select **Save**.

**To manage an existing quota**, select the three dots next to it:

- **Edit**: Modify quota details and select **Save**.
- **Change Status**: Update the lifecycle status, enter a commit message, and select **Save**.
- **Delete**: Permanently removes the quota.
- **Edit Quota Plan**: Select **Add API** and choose an API from the dropdown to associate it with the quota. Select **Save**.

![](https://admin.apiwiz.io/api/guides/images/6a7c3d16eb3c9603a6c47c4d)

### Remote Host

Remote hosts represent the backend servers that the gateway forwards API requests to. They abstract backend infrastructure details from API definitions and support load balancing, timeout handling, and connection management. Remote hosts are reusable across multiple APIs.

The remote hosts list displays: **Name**, **Status**, **Alias**, **Port**, and **Created By**.

**To filter remote hosts**, select the filter icon and filter by Status.

**To add a remote host:**

1. Select **\+** in the top-right corner. The **Add Remote Host** panel opens with three tabs: **Details**, **Addressing**, and **Watchdog**.

**Details tab**

**General**

- **Connector Name**: Select the connector.
- **Name**: A unique name for the remote host.
- **Host Name**: The hostname or IP address of the backend server.
- **Port**: The port the backend service is listening on.
- **Max Connections**: Maximum concurrent connections allowed.
- **Organization**: Select the owning organization.
- **Load Balancer**: Choose the load-balancing strategy \(for example, Round Robin or Response Time\).
- **Response Time Delay**: Delay used when evaluating backend response times.

Checkbox options:

- **Allow HTTP 1:1**: Allows one-to-one HTTP connections.
- **Include Content-Length in Request/Response**: Adds the Content-Length header.
- **Send SNI TLS Extension to Server**: Sends the SNI extension during TLS negotiation.

**Advanced Details**

Controls timeouts, buffer sizes, and payload limits:

- Connection Timeout, Active Timeout, Transaction Timeout, Idle Timeout
- Max Received Bytes, Max Sent Bytes
- Input Buffer Size, Output Buffer Size
- Addresses Timeout \(ms\), Cache Size \(SSL Session Cache Size\)

Input/Output Encodings: Configure compression settings \(Deflate, Gzip\) for incoming and outgoing payloads.

**Addressing tab**

Defines how backend IP addresses are prioritized for routing. There are four priority levels: Highest, High, Medium, and Lowest. Select **\+** under each level to add IP addresses. The gateway routes requests to the highest-priority available address first.

**Watchdog tab**

An HTTP Watchdog periodically polls the remote host to check its availability and prevent traffic from being routed to unhealthy backends.

- **Watch Dog**: Select the checkbox to enable watchdog monitoring.
- **HTTP Method** \(required\): The HTTP method used for the health check request.
- **HTTP Request URL**: The URL the watchdog polls to check availability.
- **Timeout \(m/s\)**: The timeout duration for each polling request.
- **Poll if up**: Select this checkbox to continue polling even when the host is healthy.
- **Response Code Ranges**: Define the start and end response code range that indicates a healthy response.

Select **Save** to apply the watchdog configuration.

**To view remote host details or history**, select the three dots next to it and choose **View Details** or **View History**.

![](https://admin.apiwiz.io/api/guides/images/6a7c3d48eb3c9603a6c47c61)

### Products

Products bundle one or more APIs into a consumable unit for partners or applications. They define how APIs are packaged and shared with consumers. Once a product is published, consumers can create apps based on it; generating the client IDs and secrets needed to access the APIs. If no app is created or if authentication policies are attached, the gateway blocks the request.

The products list displays: **Name**, **Status**, **No. of APIs**, and **Connector**.

**To filter products**, select the filter icon and filter by Status.

**To add a product:**

1. Select **\+** in the top-right corner. The **Add Product** panel opens.
1. Under **General**, enter the product Name and Description.
1. Under **Select API**, choose the Connector Name, Organization, and Partners.
1. Select **Save**.

**To manage an existing product**, select the three dots next to it:

- **Edit**: Modify product details and select **Save**.
- **Change Status**: Update the lifecycle status, enter a commit message, and select **Save**.
- **Delete**: Permanently removes the product.

![](https://admin.apiwiz.io/api/guides/images/6a7c3d62eb3c9603a6c47c91)

### Organization

Organizations represent the business entities that own, manage, or consume APIs. They enable structured governance, multi-tenant setups, and access control. APIs, products, and certificates are associated with organizations to track ownership and accountability.

The organizations list displays: **Name**, **Status**, and **Connector**.

**To filter organizations**, select the filter icon and filter by Status.

**To add an organization:**

1. Select **\+** in the top-right corner. The **Add Organization** panel opens.
1. Enter the following:
  - **Connector Name**: Select from the dropdown.
  - **Image**: Upload a JPG or JPEG image to represent the organization.
  - **Organization Name**: The official name.
  - **Email**: The primary contact email.
  - **Description**: A brief description.
  - **Phone**: Contact phone number.
  - **Restricted**: Limit access to the organization.
  - **API Development**: Enable or restrict API development capabilities.
1. Select **Save**.

**To view organization details or history**, select the three dots next to it and choose **View Details** or **View History**.

![](https://admin.apiwiz.io/api/guides/images/6a7c3d72eb3c9603a6c47cb3)