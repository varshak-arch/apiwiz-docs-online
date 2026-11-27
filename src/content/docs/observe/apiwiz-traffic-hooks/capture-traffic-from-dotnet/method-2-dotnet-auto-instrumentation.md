---
title: "Method 2 - .NET auto-instrumentation"
---

APIwiz .NET auto-instrumentation captures traces and compliance data from .NET applications hosted on IIS. You configure and run an APIwiz PowerShell module \(`Apiwiz.Dotnet.Auto.psm1`\), which installs the APIwiz telemetry package and registers it with IIS.

### Key benefits

Auto-instrumentation provides the following benefits:

- **Zero-code instrumentation:** Enables distributed tracing for .NET applications without changes to the application source code.
- **Compliance and logging:** Captures API compliance metadata, request and response timestamps, and structured logs.
- **Centralized configuration:** Manages all instrumentation settings, including traces, logger indexes, and compliance fields, from one PowerShell module.
- **IIS integration:** Provides PowerShell commands to install, register, unregister, and remove instrumentation for IIS-hosted applications, and to reinstall it when troubleshooting.

## Prerequisites

Before you install auto-instrumentation, verify the following:

- Your .NET applications are hosted on IIS on a Windows server.
- You can run PowerShell on the server.
- You have your APIwiz host, workspace name, API key, compliance server IP, logger secret, and logger index name.

## Installing auto-instrumentation

Download the APIwiz module and package, configure the module with your APIwiz values, and then install the telemetry package and register it with IIS.

**Prerequisites:** The requirements in [Prerequisites](#prerequisites) are met.

Do the following:

1. Download [Apiwiz.Dotnet.Auto.psm1](https://drive.google.com/file/d/1tATsCh55waOX5ltlny2HIYmM4pMVT3gy/view?usp=sharing) and [Apiwiz .NET AutoInstrumentation.zip](https://drive.google.com/file/d/1n3KsCUpJnO0kXaMIe4oi4iiOrPR6zEqc/view?usp=sharing).
1. In `Apiwiz.Dotnet.Auto.psm1`, update the following values. Replace every angle-bracket placeholder with your values:
  ```powershell
  OTEL_DOTNET_AUTO_PLUGINS="Apiwiz.Tracing.ApiwizOtelSdkPlugin, apiwiz-opentelemetry-dotnet-plugin, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
  OTEL_EXPORTER_OTLP_TRACES_ENDPOINT="<host>/v1/apiwiz-runtime-agent/api-visualiser/otel/traces"
  OTEL_EXPORTER_OTLP_TRACES_HEADERS="x-tenant=<workspace>,x-apikey=<api-key>"
  OTEL_LOGS_EXPORTER=none
  OTEL_METRICS_EXPORTER=none
  APIWIZ_COMPLIANCE_TRACE_ID="traceid"
  APIWIZ_COMPLIANCE_SPAN_ID="spanid"
  APIWIZ_COMPLIANCE_PARENT_SPAN_ID="parentspanid"
  APIWIZ_COMPLIANCE_REQUEST_TIMESTAMP="request-timestamp"
  APIWIZ_COMPLIANCE_RESPONSE_TIMESTAMP="response-timestamp"
  APIWIZ_COMPLIANCE_GATEWAY_TYPE="gateway-type"
  APIWIZ_COMPLIANCE_URL="<host>/v1/apiwiz-runtime-agent/compliance/log"
  APIWIZ_COMPLIANCE_WORKSPACE_ID="<workspace>"
  APIWIZ_COMPLIANCE_API_KEY="<api-key>"
  APIWIZ_COMPLIANCE_SERVER_IP="<server-ip>"
  APIWIZ_LOGGER_X_CLIENT_SECRET="<logger-secret>"
  APIWIZ_LOGGER_INDEX_NAME="<logger-index-name>"
  APIWIZ_INSTRUMENTAION_DEBUG="false"
  ```

  The values are described in the following table:
1. In PowerShell, import the module. Replace `<path>` with the folder that contains the module:
  ```powershell
  Import-Module <path>\Apiwiz.Dotnet.Auto.psm1
  ```
1. Install the telemetry package. Replace `<path>` with the folder that contains the ZIP file:
  ```powershell
  Install-ApiwizTelemetryCore -LocalPath "<path>\Apiwiz .NET AutoInstrumentation.zip"
  ```
1. Register the telemetry with IIS:
  ```powershell
  Register-ApiwizTelemetryForIIS
  ```

APIwiz auto-instrumentation is installed and registered with IIS.

## Mapping a logger index per application

By default, the agent uses the logger index set in `Apiwiz.Dotnet.Auto.psm1` for every application. To send an application's logs to a different index, add the `APIWIZ_LOGGER_INDEX_NAME` environment variable to that application's `web.config` file.

In the application's `web.config` file, under `aspNetCore/environmentVariables`, add the following entry. Replace `prod_account_app` with your index name:

```xml
<environmentVariable name="APIWIZ_LOGGER_INDEX_NAME" value="prod_account_app"/>
```

The following example shows a complete `web.config` file with the index override and debug output enabled:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <location path="." inheritInChildApplications="false">
    <system.webServer>
      <handlers>
        <add name="aspNetCore" path="*" verb="*" modules="AspNetCoreModuleV2" resourceType="Unspecified" />
      </handlers>
      <aspNetCore processPath="dotnet" arguments=".\SampleApi.dll" stdoutLogEnabled="true" stdoutLogFile="logs\stdout" hostingModel="inprocess">
        <environmentVariables>
          <environmentVariable name="APIWIZ_INSTRUMENTATION_DEBUG" value="true"/>
          <environmentVariable name="APIWIZ_LOGGER_INDEX_NAME" value="prod_account_app"/>
        </environmentVariables>
      </aspNetCore>
    </system.webServer>
  </location>
</configuration>
```

The application sends its logs to the index set in its `web.config` file.

## Removing or reinstalling auto-instrumentation

Use the module's functions to remove APIwiz telemetry from IIS, uninstall the package, or reimport the module before you reinstall.

**Prerequisites:** The `Apiwiz.Dotnet.Auto.psm1` module is imported in the current PowerShell session.

Do the following:

1. Remove APIwiz telemetry from IIS:
  ```powershell
  UnRegister-ApiwizTelemetryForIIS
  ```
1. Uninstall the APIwiz telemetry package:
  ```powershell
  Uninstall-ApiwizTelemetryCore
  ```
1. To reinstall, unload the module, or open a new PowerShell session:
  ```powershell
  Remove-Module Apiwiz.DotNet.Auto
  ```

  Then repeat the steps in [Installing auto-instrumentation](#bookmark-a13afe10-8ff0-466f-aacf-998123e08fb6), starting from step 3.

APIwiz auto-instrumentation is removed from IIS and the server.