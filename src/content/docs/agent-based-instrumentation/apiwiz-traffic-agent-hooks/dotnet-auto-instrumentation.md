---
title: ".NET auto-instrumentation"
---

APIwiz .NET auto-instrumentation uses the OpenTelemetry .NET auto-instrumentation framework to automatically capture distributed traces, compliance logs, and runtime observability data from .NET applications. The instrumentation attaches to your application at startup and instruments it without requiring changes to the application source code.

Once configured, the instrumentation forwards telemetry data to the APIwiz Observability module using the OpenTelemetry Protocol \(OTLP\), making traces and compliance logs visible in the APIwiz workspace for monitoring, troubleshooting, and governance.

### Purpose

Use APIwiz .NET auto-instrumentation to:

- Enable distributed tracing for .NET applications without modifying application code
- Capture API compliance metadata, request and response timestamps, and structured logs automatically
- Integrate observability into IIS-hosted .NET applications using built-in PowerShell commands
- Manage all instrumentation settings from a centralized configuration module

### Key benefits

### Prerequisites

## Get started

To integrate your .NET application with the APIwiz Observability module, follow these steps:

### Step 1: Download the required files

Download the following files before proceeding:

### Step 2: Update the configuration values

Open the Apiwiz.Dotnet.Auto.psm1 file and update the following configuration values:

**Example configuration:**

```shell
OTEL_DOTNET_AUTO_PLUGINS="Apiwiz.Tracing.ApiwizOtelSdkPlugin, apiwiz-opentelemetry-dotnet-plugin, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
OTEL_EXPORTER_OTLP_TRACES_ENDPOINT="{{host}}/v1/apiwiz-runtime-agent/api-visualiser/otel/traces"
OTEL_EXPORTER_OTLP_TRACES_HEADERS="x-tenant={{workspace},x-apikey={{x-apieky}}"
OTEL_LOGS_EXPORTER=none
OTEL_METRICS_EXPORTER=none
APIWIZ_COMPLIANCE_TRACE_ID="traceid"
APIWIZ_COMPLIANCE_SPAN_ID="spanid"
APIWIZ_COMPLIANCE_PARENT_SPAN_ID="parentspanid"
APIWIZ_COMPLIANCE_REQUEST_TIMESTAMP="request-timestamp"
APIWIZ_COMPLIANCE_RESPONSE_TIMESTAMP="response-timestamp"
APIWIZ_COMPLIANCE_GATEWAY_TYPE="gateway-type"
APIWIZ_COMPLIANCE_URL="{{host}}/v1/apiwiz-runtime-agent/compliance/log"
APIWIZ_COMPLIANCE_WORKSPACE_ID="{{workspace}}"
APIWIZ_COMPLIANCE_API_KEY="{{apikey}}"
APIWIZ_COMPLIANCE_SERVER_IP="{{serverIP}}"
APIWIZ_LOGGER_X_CLIENT_SECRET="{{logger-secret}}"
APIWIZ_LOGGER_INDEX_NAME="{{logger-indexname}}"
APIWIZ_INSTRUMENTAION_DEBUG="false"

```

### Step 3: Import the module and register IIS instrumentation

To import the module and register APIwiz telemetry for IIS, do the following:

1. Open a PowerShell terminal.
1. Import the module:
   ```shell
   Import-Module {path}\Apiwiz.Dotnet.Auto.psm1
   ```

### Step 4: Install the telemetry core

To install the APIwiz telemetry core using the downloaded zip file, run the following command:

```text
Install-ApiwizTelemetryCore  -LocalPath "{{path}}\Apiwiz .NET AutoInstrumentation.zip"
```

### Step 5: Register IIS instrumentation

To register APIwiz telemetry for IIS, in the PowerShell terminal, run the following command:

```text
Register-ApiwizTelemetryForIIS
```

### Step 6: Configure a per-application logger index \(optional\)

To map a different logger index for a specific application, add the APIWIZ\_LOGGER\_INDEX\_NAME environment variable to the web.config file for that application.

```text
<?xml version="1.0" encoding="utf-8"?>\
<configuration>\
<location path="." inheritInChildApplications="false">\
<system.webServer>\
<handlers>\
<add name="aspNetCore" path="*" verb="*" modules="AspNetCoreModuleV2" resourceType="Unspecified" />\
</handlers>\
<aspNetCore processPath="dotnet" arguments=".\SampleApi.dll" stdoutLogEnabled="true" stdoutLogFile="logs\stdout" hostingModel="inprocess" >\
<environmentVariables>\
<environmentVariable name="APIWIZ_INSTRUMENTATION_DEBUG" value="true"/>\
<environmentVariable name="APIWIZ_LOGGER_INDEX_NAME" value="prod_account_app"/>\
</environmentVariables>\
</aspNetCore>\
</system.webServer>\
</location>\
</configuration>
```

### Reinstalling and troubleshooting

Use the following commands to remove, uninstall, or reset the instrumentation if required.