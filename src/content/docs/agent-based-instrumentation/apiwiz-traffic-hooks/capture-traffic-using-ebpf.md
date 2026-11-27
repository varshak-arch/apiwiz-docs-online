---
title: "Capture traffic using eBPF "
---

eBPF \(Extended Berkeley Packet Filter\) is a traffic-capture mode in APIwiz that observes live API traffic directly at the operating system kernel level. By using eBPF, APIwiz captures request and response flows without requiring changes to application code, SDKs, or API gateways.

This approach enables deep API observability, including logging, tracing, and monitoring, by passively observing network traffic as it passes through the server kernel.

eBPF is particularly useful in:

- Brownfield environments
- Legacy systems
- Platforms where application instrumentation is not feasible

### How eBPF works in APIwiz

When eBPF is enabled, APIwiz processes API traffic through the following sequence:

1. The user enables the eBPF traffic-capture mode in APIwiz.
1. APIwiz loads eBPF programs that safely attach to kernel networking hooks.
1. The eBPF programs inspect TCP traffic in real time as API requests and responses pass through the server.
1. Relevant metadata and payload fragments are streamed to a lightweight userspace agent.
1. The agent reconstructs complete HTTP request and response pairs.
1. The system enriches the data with context such as trace IDs, latency information, service identity, and timing details.
1. Structured telemetry data is forwarded to the APIwiz platform for analysis, monitoring, and observability.

### Data captured using eBPF

When eBPF is enabled, APIwiz captures the following API interaction data:

- Request method
- API path
- Query parameters
- Request headers
- Request body
- Response body
- Status codes
- Timestamps
- Latency metrics
- Client and server IP addresses
- Network ports
- Protocol details

APIwiz also supports distributed tracing by generating or reusing trace IDs and span IDs. All captured data is normalized into structured JSON, enabling centralized logging, compliance auditing, security monitoring, and performance diagnostics.

### Platform support

### Limitations

The following limitations apply when using eBPF:

- Requires Linux kernel version 5.5 or later
- Not supported on Windows systems
- May require elevated permissions in restricted or hardened environments
- Kernel hooks may be restricted in managed container platforms

### Common issues during installation

The following issues may occur when installing or enabling the traffic hook:

- Insufficient kernel permissions
- Unsupported kernel versions
- Missing system capabilities in hardened environments
- Conflicts with other kernel-level monitoring tools
- Restricted kernel access in containerized platforms
- Misconfigured network interfaces
- Disabled packet visibility

Resolving these configuration issues usually restores traffic capture functionality.

### Performance impact

Compared to proxy-based monitoring or in-process instrumentation, eBPF provides high-fidelity observability with significantly lower performance impact.

### eBPF Tracer Daemonset

The following daemonset must be applied on the namespace which you desire to capture traffic from

```text
kind: DaemonSet
apiVersion: apps/v1
metadata:
  name: apiwiz-tracer-ds
  namespace: cbq2-ocu-apiwiz
spec:
  selector:
    matchLabels:
      name: apiwiz-tracer-ds
  template:
    metadata:
      labels:
        name: apiwiz-tracer-ds
    spec:
      nodeSelector:
        node-role.kubernetes.io/app-worker: ''
      restartPolicy: Always
      hostPID: true
      schedulerName: default-scheduler
      hostNetwork: true
      terminationGracePeriodSeconds: 30
      securityContext: {}
      containers:
        - resources:
            limits:
              cpu: 300m
              memory: 650Mi
            requests:
              cpu: 100m
              memory: 200Mi
          terminationMessagePath: /dev/termination-log
          name: apiwiz-tracer
          env:
            - name: LOGLEVEL
              value: INFO
            - name: LOGMODE
              value: console
            - name: LOGBACKUP
              value: '1'
          securityContext:
            privileged: true
          imagePullPolicy: IfNotPresent
          volumeMounts:
            - name: config-properties
              readOnly: true
              mountPath: /app/config.properties
              subPath: config.properties
            - name: usr-src
              readOnly: true
              mountPath: /usr/src
            - name: lib-modules
              readOnly: true
              mountPath: /lib/modules
          terminationMessagePolicy: File
          image: '<APIwizEbpfTracerImage>'
      serviceAccountName: kong-apiwiz-sa
      volumes:
        - name: config-properties
          configMap:
            name: apiwiz-tracer-configmap
        - name: usr-src
          hostPath:
            path: /usr/src
            type: Directory
        - name: lib-modules
          hostPath:
            path: /lib/modules
            type: Directory
      dnsPolicy: ClusterFirst
```

### eBPF Tracer ConfigMap

```text
kind: ConfigMap
apiVersion: v1
metadata:
  name: apiwiz-tracer-configmap
  namespace: <NAMESPACE>
immutable: false
data:
  config.properties: |-
    [DEFAULT]
    
    ############################
    # Required APIwiz settings
    ############################
    api_endpoint=https://<APIWIZ_MANAGEMENT_HOSTNAME>/v1/events
    x_client_id=<WORKSPACE_ID>
    x_client_secret=<CLIENT_SECRET>
    index_name=<DEFAULT_INDEX_NAME>
    
    ############################
    # Required trace/header aliases
    ############################
    alias_trace_id=traceid
    alias_span_id=spanid
    alias_parent_span_id=parentspanid
    alias_request_timestamp=requestTimestamp
    alias_response_timestamp=responseTimestamp
    alias_gateway_type=gatewayType
    
    ############################
    # Required host/network settings
    ############################
    server_cluster_ip=<SERVER_CLUSTER_IP>
    
    ############################
    # Optional tracer/runtime settings
    ############################
    # Default: 10
    idle_threshold=10
    
    # Default: empty / None
    # For HTTPS/nginx tracing. Can use a static path or PID template like:
    # /proc/[PID]/root/usr/lib64/libssl.so.3
    #ssl_lib_path=/proc/[PID]/root/usr/local/kong/lib/libssl.so.3
    ssl_lib_path=/usr/local/kong/lib/libssl.so.3
    
    # Default: false
    enable_outbound=false
    
    # Default: empty list
    outbound_paths=
    
    # Default: 4096
    max_data_size=4096
    
    ############################
    # Interface/path filters
    ############################
    # Default: empty list
    exclude_interfaces=lo
    
    # Default: empty list
    exclude_paths=/health,/metrics,/internal,/ready,/readyz,/v1/apiwiz-runtime-agent,/raft/probing,/v1/cluster,/ContainerLiveness,/ContainerReadiness,/version,/api_version,/v3/events/biz_txn_v1,/api/ping,/dsf-iris/api,/itorix,/livesz,/indexer/api/v1/index_state,/liveness,/readiness,/v1/data/apiwiz,/static/js,/livez,/v1/osd-volumes,/T5CloudService,/secscan,/api/v1/query,/admin/user,/apiv2/socket,/api/upgrades_info,/status,/irf-rp-services,/containerid,/v1/stats/collect,/apiwiz/execute,/ip-api/json,/v1/logger-agent,/leases,/applications,/Browser,/Browser/
    
    # Default: empty list
    include_paths=/issuer
    
    # Default: empty list
    microservice_exclude_paths=
    
    # Default: empty list
    #nic_override=eth0
    
    ############################
    # De-dup cache settings
    ############################
    # Default: false
    use_sharded_cache=true
    
    # Default: 300000
    cache_max_size=300000
    
    # Default: 30
    cache_ttl_secs=30
    
    # Default: 1024
    cache_num_shards=1024
    
    # Default: 512
    cache_cleanup_every=512
    
    ############################
    # APIwiz metadata
    ############################
    # Default: x_client_id
    environment=<ENVIRONMENT>
    
    # Default: index_name
    application_name=<APPLICATION_NAME>
    
    # Default: index_name
    service_name=<SERVICE_NAME>
    
    service_type=<SERVICE_TYPE>
    
    # Default: MICROSERVICE
    service_category=GATEWAY
    
    # Default: socket.gethostname()
    host_name=<HOST_NAME>
    
    # Default: detected server IP or server_cluster_ip
    host_ip=<HOST_IP>
    
    ############################
    # Feature flags
    ############################
    # Default: true
    capture_payload=true
    
    # Default: false
    security=true
    
    # Default: true
    compliance=true
    
    # Default: false
    monetization=false
    
    ############################
    # Batching settings
    ############################
    # Default: true
    batching_enabled=true
    
    # Default: 100
    batch_max_size=100
    
    # Default: 2000
    batch_flush_interval_ms=2000
    
    # Default: 10000
    batch_queue_capacity=1000
    
    # Default: 2
    batch_worker_count=2
    
    # Default: true
    batch_drop_oldest=true
    
    ############################
    # Sampling settings
    ############################
    # Default: false
    sampling_enabled=false
    
    # Default: 1.0
    # 1.0 = send all matching events
    # 0.1 = send ~10%
    sampling_rate=1.0
    
    # Default: empty list
    # Examples: 2xx,3xx,4xx,5xx,200,500
    sampling_status_codes=
    
    # Default: empty list
    # Examples: application/json,text/xml,text/plain
    sampling_content_types=
    
    # Default: 0
    sampling_min_content_length=0
    
    # Default: -1
    # -1 means no upper limit
    sampling_max_content_length=-1
```