---
title: "OpenTelemetry Java Observability Agent"
---

The APIwiz OpenTelemetry Java instrumentation agent captures logs, traces, and API compliance data from Java-based applications and forwards them to the APIwiz Observability module. The agent attaches to your application at startup and instruments it without requiring changes to your application source code.

After you configure the agent, it forwards telemetry data to APIwiz using the OpenTelemetry Protocol \(OTLP\). Logs and traces then become visible in the APIwiz workspace for monitoring, troubleshooting, and compliance analysis.

### Purpose

Use the OpenTelemetry Java instrumentation agent to:

- Capture application logs and forward them to the APIwiz Application Logs module.
- Collect distributed traces and send them to the APIwiz API Tracing module.
- Enable API compliance monitoring for Java-based microservices and applications.
- Correlate requests across distributed services using trace and span identifiers.

### Key benefits

### Prerequisites

Before you configure the agent, verify the following:

## Get started

To integrate your Java application with the APIwiz Observability module, complete the following steps in order.

### Step 1: Set up the APIwiz Observability Agent

1. Download the `apiwiz-observability-javaagent.jar` file and copy it to the host running the application you're instrumenting.
1. Modify your application's startup command to include the full path to the JAR file.
  ```text
  java -javaagent:path/to/apiwiz-javaagent.jar 
  -jar myapp.jar
  ```

The agent is attached and ready for configuration.

### Step 2: Create a Transaction Logs index in your workspace

To configure transaction log ingestion, follow these steps:

1. Go to **Transaction Logs **in your APIwiz workspace.
1. Create a new logger index, or use an existing one.
1. Copy the following details from the index:

You now have the index name, client ID, and client secret required to configure the agent's logging parameters.

### Step 3: Create an Application Logs index in your workspace

To configure application log ingestion, follow these steps:

1. Go to **Application Logs** in your APIwiz workspace.
1. Create a new index for your application logs.
1. Copy the following details:

You now have the index name, client ID, and client secret required to configure the agent's application logging parameters.

### Step 4: Configure Parameters

Configure the agent using the following parameters. You can set each parameter as either a JVM system property \(`-D`\) or an environment variable.

### Example configuration

The following examples show the agent configured for an application named banking\_service\_v2. Replace the placeholder values with your own workspace, index, and credential details.

#### Using environment variables

```text
export OTEL_EXPORTER_OTLP_LOGS_ENDPOINT="{{host}}/v1/logs"
export OTEL_EXPORTER_OTLP_LOGS_HEADERS="x-client-id={{client-id}},x-client-secret={{client-secret}},index-name={{application-logs-index}}"
export OTEL_EXPORTER_OTLP_LOGS_TIMEOUT=600000
export OTEL_EXPORTER_OTLP_METRICS_ENDPOINT={{host}}/v1/metrics
export OTEL_EXPORTER_OTLP_METRICS_HEADERS="x-client-id={{client-id}},x-client-secret={{client-secret}},index-name={{application-logs-index}}"
export OTEL_EXPORTER_OTLP_METRICS_TIMEOUT=600000
export OTEL_EXPORTER_OTLP_TRACES_ENDPOINT="{host}}/v1/traces"
export OTEL_EXPORTER_OTLP_TRACES_HEADERS="x-tenant={workspaceName},x-client-secret={client-secret}"
export OTEL_EXPORTER_OTLP_TRACES_TIMEOUT=600000
export APIWIZ_SERVER_IP={your_server_ip}
export APIWIZ_AGENT_DEBUG={true/false}
export APIWIZ_SECURITY_ENABLED={flag-for-security-processing}
export APIWIZ_MONETIZATION_ENABLED={flag-for-monetizing-events}
export APIWIZ_CAPTURE_PAYLOAD={flag-for-capturing-request-and-response-body}
export APIWIZ_CAPTURE_PAYLOAD_ALLOWED_STATUS_CODES={allowed-set-of-status-codes}
export IO_OPENTELEMETRY_JAVAAGENT_SLF4J_SIMPLELOGGER_DEFAULTLOGLEVEL={on/off}

```

#### Using JVM system properties

```text
java -javaagent:{{path}}/apiwiz-observability-javaagent.jar \
     -Dotel.resource.attributes=service.category=MICROSERVICE,service.type=JAVA,service.name={service-name},environment={env},host.name={host},host.ip={host_ip} \
-Dotel.metrics.exporter=none \
-Dotel.exporter.otlp.logs.endpoint="{{host}}/v1/logs" \
-Dotel.exporter.otlp.logs.headers="x-client-id={{client-id}},x-client-secret={{client-secret}},index-name={{application-logs-index}}" \
-Dotel.exporter.otlp.logs.timeout=600000 \
-Dotel.exporter.otlp.metrics.endpoint={{host}}/v1/metrics \
-Dotel.exporter.otlp.metrics.headers="x-client-id={{client-id}},x-client-secret={{client-secret}},index-name={{application-logs-index}}" \
-Dotel.exporter.otlp.metrics.timeout=600000 \
-Dotel.exporter.otlp.traces.endpoint="{host}}/v1/traces" \
-Dotel.exporter.otlp.traces.headers="x-tenant={workspaceName},x-client-secret={client-secret}" \
-Dotel.exporter.otlp.traces.timeout=600000 \
-Dapiwiz.server-ip={your_server_ip} \
-Dapiwiz.agent.debug={true/false} \
-Dapiwiz.security.enabled={flag-for-security-processing} \
-Dapiwiz.monetization.enabled={flag-for-monetizing-events} \
-Dapiwiz.capture-payload={flag-for-capturing-request-and-response-body} \
-Dapiwiz.capture.payload.allowed.status.code={allowed-set-of-status-codes} \
-Dio.opentelemetry.javaagent.slf4j.simpleLogger.defaultLogLevel={on/off} \
-Dotel.instrumentation.mongodb.enabled={true/false} \
-Dotel.instrumentation.mongo.statement-sanitizer.enabled={true/false} \
-Dotel.instrumentation.jdbc.enabled={true/false} \
-Dotel.instrumentation.hikaricp.enabled={true/false} \
-Dotel.instrumentation.micrometer.enabled={true/false} \
-Dotel.instrumentation.runtime-metrics.enabled={true/false} \
-Dotel.instrumentation.executors.enabled={true/false} \
-Dotel.instrumentation.apache-httpclient.enabled={true/false} \
-Dotel.instrumentation.url-connection.enabled={true/false} \
-Dotel.propagators=ApiwizTracePropagator \
-jar my-application.jar
```