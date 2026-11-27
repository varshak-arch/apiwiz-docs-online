---
title: "Settings"
---

Settings provides configuration options for the Dev Portal account, enabling customization and management of various aspects of the platform. 

# Account Configuration

#### Settings

The **Settings** page lets Producers configure portal-wide behavior, including endpoint configuration, user defaults, authentication rules, and security controls. Settings are organized into multiple sections, accessible from the left panel: **Account Configuration**, **Contact Us Notifications**, **SMTP Configuration**, **Activity Log**, **Connectors**, and **SignUp Configuration**.

This section covers **Account Configuration**.

#### Portal Settings

#### User Settings

#### Other Settings

#### **Security toggles**

**Auth Page Image**

Displays the image shown on authentication pages. Select **Change Image** to upload a new image, or remove it to use the default image.

#### Saving changes

To save your changes, select **Save**. To discard changes, select **Cancel**.

# Contact Us Notifications

Contact Us Notifications allows you to configure the email addresses that receive notifications when a consumer submits a query through the Contact Us form.

#### Add a notification recipient

1. Enter the recipient email address in the input field
1. Select **Add**; the email address appears in the list below.
1. Select **Save** to apply the changes.

To remove a recipient, select **Remove** next to the email address.

![](https://admin.apiwiz.io/api/guides/images/6a4e1c6017bd7511541fc027)

# SMTP Configuration

SMTP \(Simple Mail Transfer Protocol\) configuration defines the settings required to connect to an SMTP server for sending emails from the Dev Portal. Emails do not send until you configure this.

Select **Edit** in the top-right corner to update the following:

- **Host Name**: The SMTP server address used to send outgoing emails \(for example, [smtp.gmail.com](http://smtp.gmail.com)\).
- **Port**: The network port the SMTP server uses for secure email transmission \(commonly 587 for TLS\).
- **Username**: The email account login used to authenticate with the SMTP server.
- **From Mail**: The sender email address that recipients see in outgoing system emails.
  ![](https://admin.apiwiz.io/api/guides/images/6a4df69817bd7511541fbdf5)

# Activity Log

The Activity Log provides a detailed audit trail of all actions performed within the Dev Portal account. Use it to monitor account usage, troubleshoot issues, and identify potential security concerns.

Filter log entries by:

- **Date Range**: Specify a start and end date to view activities within a specific time period.
- **User**: Filter activities based on the user who initiated the action.

The Activity Log provides a time-ordered audit trail of portal usage, showing each API request with its endpoint, method, response status, timestamp, and initiating user.

![](https://admin.apiwiz.io/api/guides/images/6a4df6bf17bd7511541fbe03)

# Connectors

Connectors are pre-built components that simplify the integration of external applications, systems, and data sources with the Dev Portal. They provide a standardized interface for interacting with the APIs of different services, removing the need for custom integration code.

Connectors enable the following:

- **Simplified Integration**: Reduces the effort required to connect disparate systems.
- **Consistent API Access**: Provides a uniform way to interact with different APIs.
- **Data Exchange**: Facilitates seamless data transfer between applications.
- **Workflow Automation**: Enables automated processes across multiple systems.

Connectors may also include error handling, data transformation, authentication, and security protocols to ensure reliable and secure data exchange.

The Dev Portal supports the following connectors: **Open AI**, **AWS S3**, **GCS \(Google Cloud Storage\)**, and **JFrog**. Use connectors to store uploaded images in any of these services.

![](https://admin.apiwiz.io/api/guides/images/6a4df7ad17bd7511541fbe22)

#### View gateway details

1. Enter the **Workspace ID** and user credentials under **Settings** \> **Account Configuration**.
1. Confirm the gateway details under the **Connectors** module.
1. Go to **Gateway Details** under **Manage Gateways**.
1. Select the runtime from the top-right corner from which you want to create the application.
1. Select all the runtimes you are actively using.

#### Associate users with gateways

1. Go to **Associate Users for Gateways** under **Manage Gateways**.
1. Select the connector of interest \(for example, Kong\).
1. Select the edit icon at the end of a user's name.
1. Select the runtimes you want to associate with the user. A user only has access to their assigned runtimes.

#### Create a product in the workspace

1. Go to the **Gateways** module in the workspace.
1. Select the gateway \(for example, Kong\).
1. Go to the **Manage** tab and select **Products** from the left panel.
1. Create a product, adding partners and all other required details.

#### Create an app from a product

1. Go to **My Profile** from the company icon dropdown.
1. Select **My Apps**.
1. Select **\+ Create App**.
1. Select a product card and select **Proceed**.
1. Enter the app name and description.
1. Select **Create App**.

#### Manage products

1. Go to **Manage Products** under **Manage Gateways** in the left panel.
1. Select the gateway type \(for example, Kong\).
1. Review the list of products you have created.

# SignUp Configuration

When a new user signs up on the Consumer Side, you can collect additional information beyond the standard fields by adding custom fields to the sign-up page.

**To configure sign-up fields:**

1. Select **Edit**.
1. Toggle **Signup Additional Information** on to enable custom fields on the sign-up page.
1. Enter the following details for each new field:
  - **Label**: The name of the field \(for example, "Full Name"\).
  - **Type**: The field type \(for example, text\).
  - **Placeholder**: The hint text displayed inside the field \(for example, "Enter your full name"\).
  - **Regex \(Validation Pattern\)**: A validation pattern to enforce a specific format \(for example, ^\[0-9\]\{12\}$ for a 12-digit number\).
  - **Error Message**: The message displayed when the validation fails \(for example, "This field is required"\).
  - **Required field**: Toggle on to make the field mandatory during sign-up.
1. Select **Add** to save the field.
1. Select **Save** to apply all changes.

To update an existing field, select **Edit** next to the field, make the required changes, and select **Save**.

Select **Cancel** at any time to discard your changes.

![](https://admin.apiwiz.io/api/guides/images/6a4e1e0017bd7511541fc0c7)