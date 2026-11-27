---
title: "Deploy the JavaInstrument custom resource"
---

The `JavaInstrument` resource contains the configuration values the operator applies during injection, including workspace details, API keys, and logger index settings.

1. In your target namespace, deploy the `JavaInstrument` YAML file:
  ```text
  kubectl -n <namespace> apply -f apiwiz-javainstrument.yaml
  ```
1. Validate that the resource deployed:
  ```text
  kubectl -n <namespace> get JavaInstrument
  ```

The `JavaInstrument` resource is active in the specified namespace.

#### Sample JavaInstrument configuration

```text
apiVersion: operations.wizsource.apiwiz.io/v1alpha1
kind: JavaInstrument
metadata:
  labels:
    app.kubernetes.io/name: apiwiz-operator
    app.kubernetes.io/managed-by: kustomize
  name: <add your resource name>
spec:
  appdConfig:
    - namespaceMatch: namespace1
      labelMatch:
        - key: app
          value: fundtransfer
        - key: app
          value: app2
        - key: env
          value: stage
    - namespaceMatch: namespace2
  instrumentImage: apiwiz-java-agent-image:v3
  env:
      - name: JAVA_TOOL_OPTIONS
        value: >
          -Dotel.resource.attributes=service.category=MICROSERVICE,service.type=JAVA,environment=<your-environment>,host.name=<your-host>,host.ip=<your-host-ip>
          -Dotel.exporter.otlp.metrics.endpoint=https://<your-tenant>.apiwiz.io/v1/metrics
          -Dotel.exporter.otlp.metrics.headers=x-client-id=<your-client-id>,x-client-secret=<your-client-secret>
          -Dotel.exporter.otlp.metrics.timeout=600000
          -Dotel.exporter.otlp.traces.endpoint=https://<your-tenant>.apiwiz.io/v1/traces
          -Dotel.exporter.otlp.traces.headers=x-client-id=<your-client-id>,x-client-secret=<your-client-secret>
          -Dotel.exporter.otlp.traces.timeout=600000
          -Dotel.exporter.otlp.logs.endpoint=https://<your-tenant>.apiwiz.io/v1/logs
          -Dotel.exporter.otlp.logs.headers=x-client-id=<your-client-id>,x-client-secret=<your-client-secret>,index-name=<your-index-name>
          -Dotel.exporter.otlp.logs.timeout=600000
          -Dapiwiz.detect.api=https://<your-tenant>.apiwiz.io/v1/events
          -Dapiwiz.workspace-id=<your-workspace-id>
          -Dapiwiz.server-ip=<your-host-ip>
          -Dapiwiz.x-client-secret=<your-client-secret>
          -Dapiwiz.index-name=<your-index-name>
          -Dapiwiz.agent.debug=true
          -Dotel.instrumentation.mongodb.enabled=true
          -Dotel.instrumentation.mongo.statement-sanitizer.enabled=true
          -Dotel.instrumentation.jdbc.enabled=true
          -Dotel.instrumentation.hikaricp.enabled=true
          -Dotel.instrumentation.micrometer.enabled=true
          -Dotel.instrumentation.runtime-metrics.enabled=true
          -Dotel.instrumentation.executors.enabled=true
          -Dotel.instrumentation.apache-httpclient.enabled=true
          -Dotel.instrumentation.url-connection.enabled=true
          -Dio.opentelemetry.javaagent.slf4j.simpleLogger.defaultLogLevel=info
          -Dapiwiz.compliance.enabled=true
          -Dapiwiz.capture-payload=true
```