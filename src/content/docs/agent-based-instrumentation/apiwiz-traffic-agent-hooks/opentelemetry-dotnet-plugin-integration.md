---
title: "OpenTelemetry .NET plugin integration"
---

The APIwiz OpenTelemetry .NET plugin integrates the apiwiz-opentelemetry-dotnet-plugin into your .NET application using OpenTelemetry .NET Automatic Instrumentation. The plugin captures distributed traces, compliance metadata, and structured logs and forwards them to the APIwiz Observability module without requiring changes to the application source code.

### Purpose

Use the APIwiz OpenTelemetry .NET plugin to:

- Enable distributed tracing for .NET applications using OpenTelemetry automatic instrumentation
- Capture API compliance metadata, request and response timestamps, and structured logs automatically
- Forward traces, logs, and metrics to the APIwiz Observability module using OTLP endpoints
- Integrate observability into .NET microservices with minimal configuration effort

### Key benefits

### Prerequisites

## Get started

To integrate the APIwiz OpenTelemetry .NET plugin into your application, follow these steps:

### Step 1: Download and install the plugin

To download and install the plugin, do the following:

1. Download the plugin from the provided [link](https://drive.google.com/file/d/18QcTeK9Un1MWCY9OoTFLspYIyjSLAadH/view?usp=sharing).
1. Copy the plugin DLL to the $OTEL\_DOTNET\_AUTO\_HOME/net/ directory:
  ```bash
  cp {{directory}}/apiwiz-opentelemetry-dotnet-plugin.dll $OTEL_DOTNET_AUTO_HOME/net/
  ```

### Step 2: Configure the plugin environment variables

Set the following environment variables to load the plugin and configure the OTLP exporter endpoints, authentication headers, and APIwiz compliance settings.

```text
export OTEL_DOTNET_AUTO_PLUGINS="Apiwiz.Tracing.ApiwizOtelSdkPlugin, apiwiz-opentelemetry-dotnet-plugin, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
export OTEL_RESOURCE_ATTRIBUTES="applicationName={{app_name}},applicationType=MICROSERVICE,service.category=MICROSERVICE,service.type=DOTNET,service.name={{service_name}},environment={{environment}},host.name={{host}},host.ip={{CLIENT_IP}}"
export OTEL_EXPORTER_OTLP_TRACES_ENDPOINT="{{host}}/v1/traces"
export OTEL_EXPORTER_OTLP_TRACES_HEADERS="x-client-id={{tenant}},x-client-secret={{client-secret}},index-name={{index-name}}"
export OTEL_EXPORTER_OTLP_LOGS_ENDPOINT="{{host}}/v1/logs"
export OTEL_EXPORTER_OTLP_LOGS_HEADERS="x-client-id={{tenant}},x-client-secret={{client-secret}},index-name={{index-name}}"
export OTEL_EXPORTER_OTLP_LOGS_TIMEOUT="600000"
export OTEL_EXPORTER_OTLP_METRICS_ENDPOINT="{{host}}/v1/metrics"
export OTEL_EXPORTER_OTLP_METRICS_HEADERS="x-client-id={{tenant}},x-client-secret={{client-secret}}"
export OTEL_EXPORTER_OTLP_METRICS_TIMEOUT="600000"
export APIWIZ_COMPLIANCE_TRACE_ID="traceid"
export APIWIZ_COMPLIANCE_SPAN_ID="spanid"
export APIWIZ_COMPLIANCE_PARENT_SPAN_ID="parentspanid"
export APIWIZ_COMPLIANCE_REQUEST_TIMESTAMP="request-timestamp"
export APIWIZ_COMPLIANCE_RESPONSE_TIMESTAMP="response-timestamp"
export APIWIZ_COMPLIANCE_GATEWAY_TYPE="gateway-type"
export APIWIZ_COMPLIANCE_URL="{{host}}/v1/events"
export APIWIZ_COMPLIANCE_WORKSPACE_ID="{{tenant}}"
export APIWIZ_COMPLIANCE_SERVER_IP="8.8.8.8"
export APIWIZ_LOGGER_X_CLIENT_SECRET="{{x-client-secret}}"
export APIWIZ_LOGGER_INDEX_NAME="{{index-name}}"
export APIWIZ_INSTRUMENTATION_DEBUG="true"
export OTEL_DOTNET_AUTO_RESOURCE_DETECTOR_ENABLED="false"
```

The following table describes each environment variable:

### Step 3: Run the application

Before running the application, verify the following:

- The plugin DLL is placed in the correct directory: $OTEL\_DOTNET\_AUTO\_HOME/net/
- All required environment variables are set.

To run your .NET application with OpenTelemetry auto-instrumentation enabled:

```text
dotnet run
```

### Step 4: Verify the plugin initialization

Check the application logs to confirm that the plugin has initialized successfully. The following message indicates a successful initialization:

```text
Initializing ApiwizOtelSdkPlugin
```