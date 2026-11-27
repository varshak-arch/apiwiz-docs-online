---
title: "Consent Groups"
---

A Consent Group is a category of consent, a specific set of data you want to collect from users. Each group represents a different consent purpose. For example:

- One group might collect **address** and **phone number**.
- Another might collect **employee ID** and **date of birth**.

Each group contains multiple **Scopes**; the individual data fields within that group.

The **Consent Group List** in the left panel displays all existing groups. Use the search bar to find a group by name.

### Create a Consent Group

To create a consent group, follow these steps:

1. Next to the **Consent Group List**, select **\+**. The **Create Group** panel opens.
  ![](https://admin.apiwiz.io/api/guides/images/6a50dfcfd21aefbd0a9edd1c)
1. Enter the following details:

1. Select **Save**.

The new consent group appears immediately in the **Consent Group List**.

### Consents tab

When you select a consent group, the Consents tab opens by default. This is where you view and manage the Scopes within that group.

![](https://admin.apiwiz.io/api/guides/images/6a50e049d21aefbd0a9edd2a)

The Consents tab displays:

- **Scope**: The internal name of the data field.
- **Scope Name**: The display name or summary for that scope. To add a new scope, enter the Name and Summary in the input row at the bottom of the list and save. Each scope represents one data point you want to collect from the user; for example, ID, name, phone number, or date of birth.

### View Token

Once a consent group is configured, APIwiz generates a token for it. Your client's development team uses this token to authenticate API calls when sending user consent data to the APIwiz backend.

Select **View Token** in the top-right corner to access the token. This token is sent in the API request header to authenticate and route the consent data correctly.

![](https://admin.apiwiz.io/api/guides/images/6a50e0a0d21aefbd0a9edd46)