---
title: "Method 3 - OpenTelemetry .NET plugin integration"
---

The APIwiz OpenTelemetry .NET plugin \(`apiwiz-opentelemetry-dotnet-plugin`\) extends OpenTelemetry .NET Automatic Instrumentation to send traces, logs, and metrics from your .NET application to APIwiz. You add the plugin DLL to your auto-instrumentation installation, configure it through environment variables, and run your application.

### Key benefits

The plugin provides the following benefits:

- **Zero-code instrumentation:** Enables distributed tracing and observability without changes to the application source code.
- **Full telemetry support:** Captures traces, structured logs, metrics, and request and response timestamps, and forwards them over separate OTLP endpoints to the APIwiz Observability module.
- **Compliance integration:** Captures API compliance metadata and forwards it to the APIwiz compliance engine for real-time validation.
- **Flexible configuration:** Manages all settings through environment variables, so the plugin works in most .NET deployment environments with minimal configuration.

## Prerequisites

Before you integrate the plugin, verify the following:

- The [.NET SDK](https://dotnet.microsoft.com/download) is installed.
- You have access to the `apiwiz-opentelemetry-dotnet-plugin` package.
- OpenTelemetry .NET Automatic Instrumentation is set up in your environment. For more information, see the [OpenTelemetry .NET Automatic Instrumentation documentation](https://github.com/open-telemetry/opentelemetry-dotnet-instrumentation?tab=readme-ov-file#shell-scripts).
- You have your APIwiz client ID, client secret, index names, and APIwiz host.

## Installing the plugin

Download the plugin DLL, and copy it into the OpenTelemetry .NET Automatic Instrumentation home directory.

**Prerequisites:** OpenTelemetry .NET Automatic Instrumentation is set up, and `OTEL_DOTNET_AUTO_HOME` points to its installation directory.

Do the following:

1. Download [apiwiz-opentelemetry-dotnet-plugin.dll](https://drive.google.com/file/d/165wIPy3RCO2-7no-2iNWCl4or7hxOFp7/view?usp=drive_link).
1. Copy the DLL to the `$OTEL_DOTNET_AUTO_HOME/net/` directory. Replace `<download-directory>` with the directory that contains the DLL:
   ```shell
   cp <download-directory>/apiwiz-opentelemetry-dotnet-plugin.dll $OTEL_DOTNET_AUTO_HOME/net/
   ```

The plugin DLL is in the auto-instrumentation directory.

## Configuring the plugin

Set environment variables that load the plugin and send its telemetry to APIwiz.

**Prerequisites:** The plugin DLL is in `$OTEL_DOTNET_AUTO_HOME/net/`.

Do the following:

1. Set `OTEL_DOTNET_AUTO_PLUGINS` to load the plugin:
   ```shell
   export OTEL_DOTNET_AUTO_PLUGINS="Apiwiz.Tracing.ApiwizOtelSdkPlugin, apiwiz-opentelemetry-dotnet-plugin, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
   ```
1. Set the resource attributes, OpenTelemetry Protocol \(OTLP\) exporter endpoints and headers, and APIwiz compliance variables. Replace every angle-bracket placeholder with your values:
   ```shell
   export OTEL_RESOURCE_ATTRIBUTES="service.category=MICROSERVICE,service.type=DOTNET,service.name=<application-name>,environment=<environment-name>,host.name=<host-name>,host.ip=<host-ip>"
   export OTEL_EXPORTER_OTLP_TRACES_ENDPOINT="https://<apiwiz-host>/v1/traces"
   export OTEL_EXPORTER_OTLP_TRACES_HEADERS="x-client-id=<client-id>,x-client-secret=<client-secret>,index-name=<traces-index-name>"
   export OTEL_EXPORTER_OTLP_TRACES_TIMEOUT="600000"
   export OTEL_EXPORTER_OTLP_LOGS_ENDPOINT="https://<apiwiz-host>/v1/logs"
   export OTEL_EXPORTER_OTLP_LOGS_HEADERS="x-client-id=<client-id>,x-client-secret=<client-secret>,index-name=<logs-index-name>"
   export OTEL_EXPORTER_OTLP_LOGS_TIMEOUT="600000"
   export OTEL_EXPORTER_OTLP_METRICS_ENDPOINT="https://<apiwiz-host>/v1/metrics"
   export OTEL_EXPORTER_OTLP_METRICS_HEADERS="x-client-id=<client-id>,x-client-secret=<client-secret>"
   export OTEL_EXPORTER_OTLP_METRICS_TIMEOUT="600000"
   export APIWIZ_COMPLIANCE_SERVER_IP="<compliance-server-ip>"
   export APIWIZ_INSTRUMENTATION_DEBUG="true"
   ```

  The variables are described in the following table:

The plugin is configured to load and export telemetry to APIwiz.

## Running the application

Run your application with OpenTelemetry auto-instrumentation enabled, and verify that the plugin initializes.

**Prerequisites:** The plugin DLL is in `$OTEL_DOTNET_AUTO_HOME/net/` \(for example, `/bin/tracer-home/net/`\), and the environment variables are set in the shell that runs the application.

Do the following:

1. Run your .NET application with OpenTelemetry auto-instrumentation enabled:
   ```shell
   dotnet run
   ```
1. In the application logs, verify that the following message appears:
   ```text
   Initializing ApiwizOtelSdkPlugin
   ```

The plugin is initialized, and the application sends traces, logs, and metrics to APIwiz.