---
title: "Server metrics configuration"
---

## OpenTelemetry Collector Host Metrics receiver

The OpenTelemetry Collector Host Metrics receiver collects infrastructure-level telemetry directly from the host operating system. It provides visibility into CPU utilization, memory consumption, disk activity, network traffic, process states, and system load.

Host metrics complement application and database telemetry by providing operating system context for performance analysis and troubleshooting.

### Collection interval

The Host Metrics receiver collects metrics every 30 seconds by default. This interval balances metric granularity, collector resource consumption, and backend storage requirements.

## Configure the Host Metrics receiver

To configure the Host Metrics receiver, add the following configuration to the receivers section of the OpenTelemetry Collector configuration file:

```yaml
receivers:
  hostmetrics:
    collection_interval: 30s
    scrapers:
      cpu:
      memory:
      disk:
      filesystem:
      network:
      paging:
      processes:
      load:
```

## Host Metrics scrapers

The Host Metrics receiver includes the following scrapers:

## Scraper details

### CPU metrics

The CPU scraper collects processor utilization metrics for individual CPU cores and the host as a whole. Use these metrics to identify CPU saturation, resource contention, and workload distribution across processors.

### Memory metrics

The Memory scraper collects physical memory utilization statistics. Use these metrics to monitor memory pressure, identify capacity constraints, and correlate application memory consumption with host resource utilization.

Memory states include: Used, Free, Cached, Buffered, Slab reclaimable, and Slab unreclaimable.

### Disk metrics

The Disk scraper collects block device performance metrics. Use these metrics to identify storage bottlenecks, monitor disk throughput, and analyze disk latency.

### Filesystem metrics

The Filesystem scraper collects storage capacity and utilization metrics for each mounted filesystem. Use these metrics to monitor disk consumption and prevent storage exhaustion.

### Network metrics

The Network scraper monitors traffic across network interfaces. Use these metrics to analyze bandwidth utilization, packet loss, and network reliability.

### Paging metrics

The Paging scraper monitors virtual memory and swap activity. High paging activity can indicate memory pressure and application performance degradation.

### Process metrics

The Processes scraper collects operating system process statistics. Use these metrics to monitor process activity and identify blocked, orphaned, or stalled processes.

Process states include: Running, Sleeping, Blocked, Zombie, Stopped, and Paging.

### System Load metrics

The Load scraper collects Unix-style load averages. Use these metrics to evaluate overall system demand relative to available CPU resources.

## Configure the metrics pipeline

Add the Host Metrics receiver to a metrics pipeline:

```yaml
service:
  pipelines:
    metrics/host:
      receivers:  [hostmetrics]
      processors: [batch, resourcedetection]
      exporters:  [otlp]
```

The OpenTelemetry Collector collects host metrics, processes them, and exports them to the configured backend.

## Recommended processors

Configure the following processors when collecting host metrics:

## Configure resource detection

Use the Resource Detection processor to automatically enrich host metrics with infrastructure metadata.

Add the following configuration to the processors section:

```yaml
processors:
  resourcedetection:
    detectors: [env, system, docker, ec2, gcp, azure]
    timeout: 5s
    override: false
```

The processor automatically adds the following attributes:

## Operational considerations

### Linux permissions

The OpenTelemetry Collector requires access to the /proc and /sys file systems. Depending on your deployment environment, grant the required permissions by:

- Running the Collector as root.
- Granting the CAP\_SYS\_PTRACE capability.
- Enabling hostPID: true in Kubernetes deployments when required.

### Windows support

The Host Metrics receiver supports Windows hosts through Windows Performance Counters. The receiver maps:

- Load metrics to **Processor Queue Length**.
- Paging metrics to **Page File** counters.

### Cardinality management

The Disk, Filesystem, and Network scrapers generate metrics for each device, mount point, or network interface. To reduce metric cardinality, configure include or exclude filters.

**Example:**

```yaml
filesystem:
  include_fs_types:
    match_type: strict
    fs_types: [ext4, xfs, apfs, NTFS]
  exclude_mount_points:
    match_type: regexp
    mount_points: [/snap/.*]
```