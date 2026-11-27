---
title: "Service"
---

The Service tab is where you design, configure, and manage APIs exposed through the Azure gateway. This is where you define what an API looks like to consumers, its operations, and the policies applied at each stage of a request.

## API List

The left panel displays an **API List** with **Revisions** and **Deployments** view toggles, a search icon, a filter icon, and a **Create API** \(\+\) button. APIs are listed as an expandable tree; expanding an API reveals its instances, and expanding an instance reveals its **Revisions**.

Selecting a revision loads its details across the top of the main panel and its configuration on the **API Overview** canvas below.

![](https://admin.apiwiz.io/api/guides/images/6a9e4f3767f2ddaf4b768c53)

## API Summary Panels

Once an API/revision is selected, three summary panels appear above the canvas:

### General Info

### API Details

### Connector Info

## API Overview Canvas

Every API is represented as a visual canvas with the following flow:

**Spec Upload \(optional\) → Destination \(mandatory\) → API Details \[API Data \+ Operations, each with a Policies node\] → API Policies \(optional\) → Version \(optional\)**

Top-right controls above the canvas include a **Select connector** dropdown, **Promote** button, **Edit** button, and a refresh icon. Zoom controls \(\+/-/fullscreen\) sit in the top-right of the canvas itself.

### Spec Upload

![](https://admin.apiwiz.io/api/guides/images/6aa93361879cd85c39aecd10)

### Destination

Selecting the Destination node opens a list of existing Azure API Management instances to attach the API to. Each entry shows a Name, a resource-group-style subtitle, a date, and a creator
**\(for example, "testing-gateway / apim-test-service-001 -sgws-poc / Mar 7th 25 / divakar v"\). 
**This is a selection list rather than a creation form.

![](https://admin.apiwiz.io/api/guides/images/6aa93394879cd85c39aecd25)

### API Data \(API-level "API Details" node\)

A **"Go to"** dropdown inside the API Details node on the canvas lets you jump directly to a specific operation \(e.g., create-resource, modify-resource, remove-resource, retrieve-header-only, retrieve-resource, retrieve-resource-cached\).

![](https://admin.apiwiz.io/api/guides/images/6aa933d5879cd85c39aecd57)

### Operation Data \(per operation, e.g. GET/POST/PUT/DELETE/HEAD\)

### Policy Overview \(per operation/section\)

Each operation's **Policies** node opens a **Policy Overview** panel; a searchable, scrollable list where every entry carries a name, a description, and its own **Select section** checklist \(a subset of INBOUND / OUTBOUND / ON\_ERROR / BACKEND, depending on where it's valid\). Policies already in effect are pre-checked and carry an **Enforced** badge.

The available policies span a few functional groups:

- **Validation**: Validate content, Validate headers, Validate status code, Validate parameters
- **Transformation**: Convert JSON to XML, Set header, Mock response
- **Flow control**: Control flow, Forward request
- **Access & auth**: Check HTTP header, Get authorization context, Restrict caller IPs
- **Traffic & monitoring**: Limit call rate by subscription, Emit custom metrics

![](https://admin.apiwiz.io/api/guides/images/6aa93489879cd85c39aecd91)

### Version Control

Selecting the **Version** node opens the **Version Control** panel:

![](https://admin.apiwiz.io/api/guides/images/6aa934af879cd85c39aecdad)

## Promoting an API

The **Promote** button \(top of the API Overview canvas\) opens a **Promoting API** confirmation dialog: "Are you sure that you want promote the \[api-name\] to \[connector\]?" with **Cancel**/**Ok**. A connector must be chosen from the **Select connector** dropdown first; promoting without selecting one shows "undefined" as the target.

![](https://admin.apiwiz.io/api/guides/images/6aa93510879cd85c39aecdc9)