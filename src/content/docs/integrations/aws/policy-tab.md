---
title: "Policy Tab"
---

The Policy tab is where you create and manage policies that control how your AWS-hosted APIs behave, perform, and stay secure. Policies act as reusable rule sets that can be applied to API requests or responses to control traffic, enforce authentication, transform data, or log activity. They ensure consistency and governance across APIs while simplifying management by allowing centralized configuration instead of per-endpoint customization.

## Policy Categories

At the top of the left panel is a dropdown to switch between **REST** and **HTTP** API types, similar to the Service tab. Below it, **Policy Categories** groups related policies together for easier management.

### Adding a new Policy Category

1. Select the "\+" icon next to **Policy Categories**. An **Add** panel opens.
1. Enter a **Name** for the category \(for example, Imported Authorizers\).
1. Select **Save** to create the category, or **Cancel** to discard.

![](https://admin.apiwiz.io/api/guides/images/6a8ec4dcf0c8e28fcc1c471f)

## Policy List

Selecting a category displays its policies in a table on the main panel:

### Action Icons \(Top Right Corner\)

- **Search**: Quickly find a specific policy by name or keyword.
- **Filter**: Refine the policy list by criteria such as API, Method, or All.
- **Add \("\+"\)**: Opens the **Add Policy** panel to create a new policy.

## Add Policy Configuration

Selecting "\+" opens the **Add Policy** panel:

- **Enforce policy** \(checkbox\): Seamlessly enforce API governance across your APIs by adopting governance drivers for consistency, security, and reliability.

**General Details**

Depending on the policy type selected, additional configuration fields specific to that type appear below General Details. Select **Save** to add the new policy to the list and apply it to the selected scope.

![](https://admin.apiwiz.io/api/guides/images/6a8ec52ff0c8e28fcc1c4733)