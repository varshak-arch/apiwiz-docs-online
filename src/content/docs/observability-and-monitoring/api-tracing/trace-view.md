---
title: "Trace view"
---

The Trace View is a visual representation of a single API request's complete journey; showing every service and system it passed through as an interactive graph. Each node in the graph represents a span. Select any row in the Trace List to open the Trace View.

The Trace View has two tabs: **Trace** and **Performance**.

### Trace tab

The Trace tab displays the request flow as an interactive graph. Each node in the graph represents a span; a service, database, or external system that was involved in processing the request.

**Client panel**

The left side of the Trace View shows the Client panel with the following details:

**Span panel**

Selecting a node in the trace graph opens the span card on the right. The card summarizes the span's endpoint, response, timing, and compliance with the API design.

## Span details panel

The span details panel shows the full request and response data captured for a span, along with the span's compliance against its OAS. To open it, in the span card, select the expand icon next to the HTTP method and path. The panel has three tabs: **Request**, **Response**, and **Compliance**.

### Request tab

The **Request** tab has four sub-tabs.

**Request Details fields**

The **Payload** section below the sub-tabs shows the request body. If no body was sent or captured, the section shows **No payload**.

### Response tab

The **Response** tab shows the response **Headers** \(for example, date, cache-control, x-frame-options\) and the response **Payload**.

The **Decrypt** toggle in the **Payload** section appears only when encryption is enabled in the API Compliance module. For more information, see [Configure encryption](/security-and-compliance/api-compliance/manage-compliance/).

### Compliance tab

The **Compliance** tab lists each part of the request and response with its compliance status against the OAS.

![](https://admin.apiwiz.io/api/guides/images/6adf1122a997220630a1073f)

**Navigation controls**

Use the **\+** and **−** buttons on the left to zoom in and zoom out on the trace graph. Use the minimap in the bottom-left corner to navigate large traces with many nodes.

![](https://admin.apiwiz.io/api/guides/images/6a730e7567839bf43da9f8ac)

## Planned workflow view

The planned workflow view shows the workflow a trace belongs to, so you can compare the planned steps with the captured trace. The **Show Planned Workflow** toggle appears in the upper-right corner of the Trace View only when the request carries a workflow ID in the header configured as **Workflow ID**. 

When you turn on **Show Planned Workflow**, the Trace View splits into two parts: the trace graph at the top and the planned workflow at the bottom. Drag the divider between them to resize each part. The planned workflow shows each workflow step as a numbered card, connected in the planned order.

![](https://admin.apiwiz.io/api/guides/images/6adf0cc765ab16aa012be8d3)

### Performance tab

The Performance tab shows the same trace graph but focuses on timing: helping you identify which service or database is causing latency.

**Timeline**

Below the trace graph, the **Timeline** section displays all spans in a tabular and Gantt chart view, with the following columns:

Use the Timeline to identify which span is taking the most time: for example, a slow database query or a lagging microservice.

![](https://admin.apiwiz.io/api/guides/images/6a730ece67839bf43da9f91a)