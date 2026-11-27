---
title: "Policy Tab"
---

The Policy tab is where you create and manage policies that control how APIs behave at runtime in APIwiz. Policies define rules for security, traffic management, transformation, routing, and error handling. By separating policy logic from API design, you can update policies without redeploying APIs.

The left panel has two sections: **All Policies** and **Security Profiles**.

![](https://admin.apiwiz.io/api/guides/images/6a7c396beb3c9603a6c47962)

### All Policies

All Policies displays the list of existing policy categories. Categories group related policies together for easier management.

**To create a policy category:**

1. Select **\+** next to the search field. An **Add** panel opens below the category list.
1. Enter a **Name** \(required\) for the category.
1. Select **Save** or **Cancel** to discard.

The policy table displays existing policies with the following fields:

- **Name**: The policy name.
- **Description**: A brief explanation of the policy's purpose.
- **Connector**: The connector associated with the policy.
- **Category**: The category the policy belongs to.

![](https://admin.apiwiz.io/api/guides/images/6a7c39f9eb3c9603a6c47992)

**To create a new policy:**

1. Select **\+** in the top-right corner.
1. The **Add Policy** panel opens with two tabs: **Synced Policies** and **Policy Presets**.
  - **Synced Policies**: Displays policies already synchronized. Use **Sync from Axway** to pull newly available policies from the connector.

  Synced policies are organized into the following subcategories: **Request**, **Response**, **Routing**, **Cors**, and **Security**. Each subcategory shows the number of available policies.

  ![](https://admin.apiwiz.io/api/guides/images/6a7c3a87eb3c9603a6c479b4)

- **Policy Presets**: Predefined templates for quickly creating policies with standard configurations.

Policy Presets are organized into the following subcategories: **Cors**, **Authentication**, and **Security**. Select **\+ Create Policy** to create a new policy from a preset.

![](https://admin.apiwiz.io/api/guides/images/6a7c3ac4eb3c9603a6c479d6)

1. Select **\+ Create Policy** and enter:
  - **Category Name**: Select a category from the dropdown.
  - **Connector Name**: Select a connector from the dropdown.
  - **Select Type**: Choose the policy type.
  - **Name**: The policy name.
  - **Description**: A short description of the policy's purpose.
1. Select **Create**.

**To edit or delete a policy**, select the three dots at the end of the policy row and choose **Edit** or **Delete**.

![](https://admin.apiwiz.io/api/guides/images/6a7c3ae9eb3c9603a6c479ea)

When you select **Edit**, a panel opens with two tabs:

**Governance**

- **Enforce Globally**: Applies the policy at either the API level or Route level within APIwiz. This is different from Axway's global enforcement; policies are scoped to the API or route, not enforced globally across the gateway.
- **Connector Name**, **Policy Name**, **Description**: Update as needed.

**Metadata**: Displays key-value pairs associated with the policy. Edit values as needed and select **Save**.

### Security Profiles

Security profiles group security-related policies; such as authentication and authorization rules; into reusable configurations.

**To add a security profile category:**

1. Select **\+** on the Security Profiles title bar.
1. Enter the profile name and select the connector from the dropdown.
1. Select **Save**.

![](https://admin.apiwiz.io/api/guides/images/6a7c3b6deb3c9603a6c47ac8)

**To add a security policy to a category:**

1. Select the security profile category from the left panel.
1. Select **\+** to open the Add Security Policy panel.
1. Select the connector, then check the required resource keys.
1. Select **Save**.

**To edit or delete a security policy**, select the three dots at the end of the row and choose **Edit** or **Delete**. The edit panel has the same **Governance** and **Metadata** tabs as described above.