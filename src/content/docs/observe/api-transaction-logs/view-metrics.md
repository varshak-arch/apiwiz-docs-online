---
title: "View metrics"
---

Select the **View Metrics** to display performance data and activity insights for the selected API logs. Use this section to monitor API performance, analyze usage trends, and evaluate overall response health.

![](https://admin.apiwiz.io/api/guides/images/6ae1b169a997220630a13689)

The Metrics page is divided into two sections:

## Key metrics

### Average, maximum, and minimum latency

The latency panel displays the following response time indicators for the selected time range:

### Status code distribution

The status code chart displays the distribution of HTTP response status codes across the following categories: 1xx, 2xx, 3xx, 4xx, and 5xx. The overall success percentage appears at the top of the chart. Use this chart to assess API reliability and error patterns.

### Log distribution graph

The log distribution graph shows the frequency of API calls over time:

- The horizontal axis represents time intervals.
- The vertical axis represents the number of API calls recorded.
- The total number of calls appears above the chart.

Use this graph to identify traffic spikes and activity trends.

### Latency distribution

The latency distribution graph displays response time trends over the selected time range:

- Separate lines represent **Maximum**, **Average**, and **Minimum** latency.
- The vertical axis shows latency in milliseconds \(ms\).
- The horizontal axis shows date and time intervals.

Use the **Max**, **Average**, and **Min** checkboxes to show or hide specific latency metrics. The graph updates dynamically when you select or clear a checkbox.

Use this graph to monitor response consistency, identify latency spikes, and detect potential performance degradation.

## Logs table

The logs table provides detailed log-level information for each API request, including the following columns:

Use the logs table to analyze individual API calls, review response behavior, and correlate performance metrics with specific resources or time intervals.

## Filter metrics

Use the filtering options at the top of the **Metrics** page to refine the displayed data. Filters apply to both the **Key Metrics** section and the **Logs Table**.

### Filter by method

To filter by HTTP method, follow these steps:

1. Select the **Method** dropdown.
1. Select one or more methods: **GET**, **POST**, **PUT**, **PATCH**, **DELETE**, or **OPTIONS**. To include all methods, select **Select All**.
1. Select **Apply**.

The metrics and logs table update to display data for the selected methods.

### Filter by resource

To filter by API endpoint, follow these steps:

1. In the **Resource** field, enter the resource URL, for example, /api/v1/....
1. Press **Enter**.

The metrics and logs table update to display data for the specified resource path.

### Filter by status code

To filter by HTTP response code, follow these steps:

1. Select the **Status Code** dropdown.
1. Select one or more status codes, for example, 200, 201, or 404. To include all available codes, select **Select All**.
1. Select **Apply**.

The metrics and logs table update to display data for the selected status codes.