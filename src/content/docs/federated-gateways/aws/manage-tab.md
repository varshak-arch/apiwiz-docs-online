---
title: "Manage Tab"
---

The Manage tab is where you configure, monitor, and control key operational aspects of your AWS-hosted APIs. It provides centralized access to certificates, usage plans, Lambda functions, and stage templates that determine how your APIs behave at runtime. This tab acts as the control center for maintaining, optimizing, and securing your API lifecycle, letting you modify configurations as requirements change without redeploying the entire service.

The left panel is grouped into two sections: **Config Management** \(Certificates, Usage Plan, Lambda Functions\) and **Stage Templates**.

## Config Management

Config Management lets you manage certificates, usage plans, and Lambda function references used across your APIs.

### Certificates

The Certificates section lets you securely manage SSL/TLS certificates used for encrypting communication between clients and APIs, helping establish trust and protect sensitive data.

The certificates table displays:

Use the **search**, **filter** \(by status\), and **"\+"** \(add\) icons in the top-right corner to find, filter, or create certificates.

**To create a certificate:**

1. Select "\+" in the top-right corner. The **Create Certificate** panel opens.
1. Under **General**, enter the following:

1. Under **Tags**, optionally enter a **Key** to categorize the certificate.
1. Select **Save**.

The certificate is created and enters the review stage.

**Managing an existing certificate:** select the three dots next to a certificate for **Edit**, **Change Status** \(update lifecycle status with a message, viewable in a history log\), or **Delete**.

![](https://admin.apiwiz.io/api/guides/images/6a8ec592f0c8e28fcc1c4766)

### Usage Plan

The Usage Plan section lets you manage and enforce usage limits for your APIs; controlling how many requests a client can make within a defined period, setting throttling limits, and monitoring consumption to ensure fair usage and prevent abuse.

**The usage plans table displays:**

**To create a usage plan:**

1. Select "\+" in the top-right corner. The **Create Usage Plan** panel opens.
1. Under **General**, enter the following:

1. Under **Tags**, optionally enter a **Key** to categorize the plan.
1. Select **Save**.

**Managing an existing usage plan:** select the three dots next to a plan for **Edit**, **Change Status**, **Delete**, or **View Stage** \(associate the plan with an API and deployment stage\).

![](https://admin.apiwiz.io/api/guides/images/6a8ec5b5f0c8e28fcc1c4788)

### Lambda Functions

The Lambda Functions section lets you view AWS Lambda functions available for backend integration with your APIs.

Once both fields are selected, the panel displays the list of available Lambda functions for that configuration.

## Stage Templates

The Stage Templates section lets you create and manage reusable configurations for deploying APIs across environments, ensuring consistency and reducing manual intervention when promoting APIs through development, testing, and production stages.

At the top of the panel, toggle between **REST** and **HTTP** to view templates for the corresponding API type. The templates table displays:

**To create a stage template:**

1. Select "\+" in the top-right corner. The **Create Stage** panel opens.
1. Under **General**, enter the following:

3.Select **Save**. The new template appears in the list.

**Managing an existing template:** select **Edit** to update Type, Name, or Description, or **Delete** to permanently remove the template.

![](https://admin.apiwiz.io/api/guides/images/6a8ec5ebf0c8e28fcc1c47cc)