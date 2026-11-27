---
title: "Role-Based Access Control (RBAC)"
---

APIwiz uses Role-Based Access Control \(RBAC\) to manage who can access the platform and what actions they can perform. This page explains how to manage users and roles within your workspace, and how RBAC and attribute-based access control \(ABAC\) govern user access at the endpoint level.

## Understanding roles and permissions

This section explains how authentication and authorization establish and govern user access, and how predefined and custom roles determine what a user can do within the workspace.

### Authentication and authorization

### What is RBAC

Role-Based Access Control \(RBAC\) is a security model that restricts system access based on the roles assigned to individual users. Instead of assigning permissions directly to each user, permissions are grouped into roles, and roles are assigned to users. RBAC comes into effect immediately after a user creates an account, and it governs that user's access from that point forward.

In APIwiz, RBAC ensures that:

- Users can only access the modules and features relevant to their responsibilities.
- Sensitive operations are restricted to authorized users.
- Access control is consistent and manageable across the workspace.
- Administrators can enforce the principle of least privilege across teams.

### RBAC enforcement at the endpoint level

APIwiz applies RBAC at the individual endpoint level rather than across entire modules. This granularity allows administrators to control access to specific actions within a single screen, instead of granting or blocking an entire module at once.

The workspace interface is organized into several modules. Every table, form, and visual component on the interface is powered by one or more backend endpoints. Because each endpoint represents a distinct resource, administrators can enable or disable access to individual actions within a module without affecting the rest of the module.

## Manage users

Go to **Settings \> Users** to manage all users who have access to your APIwiz workspace. From this tab, you can:

- View all active users, including their name, email address, team assignments, and assigned roles. For detailed information.
- Invite new members by sending an invitation email. Invited users appear in the **Invite Sent** tab until they accept. 
- Manage user roles by adding or removing roles for a user using the **Manage Roles** option. Role changes take effect the next time the user logs in.

For more information, see [Users](/configurations-and-settings/settings/users/).

## Manage roles

Go to **Settings \> Roles** to view, create, and configure roles and permissions within your workspace.

### Predefined roles and custom roles

APIwiz provides two types of roles.

#### Predefined roles

These are built-in system roles available by default. These roles cover common administrative and operational use cases and cannot be edited or deleted.

#### Custom roles

These are created by administrators to extend or modify permissions based on predefined roles. Custom roles allow you to tailor access control to your organization's specific requirements by inheriting permissions from predefined roles and adjusting them as needed. At minimum, a workspace includes one custom role, such as a **Read Only** role, configured to meet a specific access requirement.

From this tab, you can:

- View predefined roles and the permissions associated with each one in the **Permissions** panel. Predefined roles cannot be edited or deleted.
- Create a custom role, either by inheriting permissions from an existing role or by configuring permissions from scratch, and map it to specific backend endpoints.
- Configure permissions for a custom role by enabling or disabling module-level permissions using the toggle control in the **Permissions** panel.
- Map endpoints to custom roles using the **Map Now** feature, to assign permissions to endpoints that aren't yet mapped to any custom role.

For more information, see [Roles](/configurations-and-settings/settings/roles/)

### Configure advanced permissions \(ABAC\)

Attribute-based access control \(ABAC\) is a granular sub-part of RBAC. Use the **Advanced Permissions** option to apply ABAC for fine-grained, conditional access to specific attributes within an API endpoint. While standard RBAC controls whether a role can access an endpoint at all, ABAC controls what data a role can send to, or retrieve from, an endpoint it already has access to.

**Common use cases:**

- Preventing a role, such as **Developer**, from viewing the public Swagger, even when that role has broad platform access.
- Restricting a role's visibility to a specific environment stage within the **Compliance** module, where endpoints pass sensitive inputs such as environment ID and type.

**Prerequisites:** The role must already have access to the target endpoint.

To configure ABAC for a role, do the following:

1. In the **Roles** tab, select the role you want to configure.
1. Next to the endpoint you want to restrict, such as **Get API Build Schedule**, select **Advanced**.
1. In the **Attribute Access** panel, enter the identifier for the attribute you want to restrict, such as an environment stage ID.
1. Set the toggle for the attribute:

1. If the toggle is set to **On**, enter your conditional access rules in the **Request Header JSON** field to define the exact scope of access.
1. Select **Save**.

If the toggle is set to **Off**, the backend denies requests for that attribute, and the corresponding page renders without data for users assigned to that role. If the toggle is set to **On**, only requests matching the configured conditional rules succeed.

For more information, see [Advanced permissions](/configurations-and-settings/settings/roles/).