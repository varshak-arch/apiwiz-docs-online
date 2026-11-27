---
title: "Server metrics"
---

Server metrics provide visibility into the performance, health, and resource utilization of the hosts that run your applications and services. Use the dashboard to monitor CPU usage, memory consumption, disk activity, and network traffic.

The Observability module collects server metrics from monitored hosts and displays them in a centralized dashboard. These metrics help you understand how infrastructure resources are utilized and how system performance affects application and service operations.

Use server metrics to:

- Monitor CPU workload, memory pressure, and resource utilization.
- Track filesystem capacity and storage consumption.
- Detect infrastructure bottlenecks and performance anomalies.
- Analyze host-level performance trends across multiple hosts.
- Troubleshoot operating system and hardware-related issues.
- Support infrastructure capacity planning.

### Prerequisites

Before you monitor server metrics, ensure that the OTel Collector is deployed on the target host and has the required permissions to access operating system resources. For more information, see Server metrics configuration.

### Server metric categories

After you configure server metrics collection, the Server Metrics dashboard displays system health, resource utilization, and performance data across your infrastructure.

Metrics are available in the following categories:

- **CPU load metrics**: Monitor system load averages over 1-minute, 5-minute, and 15-minute intervals to evaluate processor workload and identify sustained or sudden increases in demand.
- **CPU time metrics**: Track cumulative CPU usage over time to understand processing activity and overall system utilization.
- **Filesystem usage metrics**: Monitor storage consumption across mounted filesystems to help prevent disk space shortages and support capacity planning.
- **Memory usage metrics**: Track memory allocation and utilization to identify memory pressure, excessive memory consumption, and potential performance degradation.

## Analyze server metrics

To analyze server metrics, follow these steps:

1. On the **Server Metrics** dashboard, select **Analyze**.
  ![](https://admin.apiwiz.io/api/guides/images/6a3a15d6cf1933e4d4c1b761)

The detailed metrics view displays the following server metrics: