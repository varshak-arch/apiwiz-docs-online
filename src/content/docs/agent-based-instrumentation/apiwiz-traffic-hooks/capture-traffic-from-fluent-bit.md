---
title: "Capture traffic from Fluent Bit"
---

Fluent Bit is a lightweight, high-performance log processor and forwarder that collects, parses, transforms, and forwards log data from your application to external destinations. The APIwiz Fluent Bit integration enables you to forward structured application logs directly to the APIwiz Observability module over HTTPS using the APIwiz runtime agent endpoint.

Once configured, Fluent Bit tails your application log files, parses and transforms the log records, and sends them securely to the APIwiz Application Logs module for centralized monitoring and analysis.

### Purpose

Use the Fluent Bit integration to:

- Collect and forward application logs to the APIwiz Application Logs module
- Parse and structure raw log output for consistent log analysis
- Transform log records into a structured JSON format before forwarding
- Monitor application behavior and troubleshoot issues using centralized log visibility

### Key benefits

### Prerequisites

## Get started

To integrate your application logs with APIwiz using Fluent Bit, follow these steps:

### Step 1: Create an application logs index

To create an index and collect the required ingestion details, follow these steps:

1. Sign in to the APIwiz workspace.
1. Go to **Application Logs**.
1. Create a new index for your application logs.
1. Copy the following details:

You have the required values to configure the Fluent Bit output in the next step.

### Step 2: Configure Fluent Bit

Create or update the Fluent Bit configuration file with the following settings:

```text
[SERVICE]
Flush 1
Log_Level info
Parsers_File parsers.conf

[INPUT]
Name tail
Path /app/logs/*.log
Tag java
Parser banking_app_parser

[FILTER]
Name lua
Match java
script /fluent-bit/scripts/transform.lua
call transform_log

[OUTPUT]
Name http
Match *
Host api.apiwiz.io
Port 443
URI /v1/apiwiz-runtime-agent/compliance/application-log
Format json
tls On

Header x-client-id <YOUR_CLIENT_ID>
Header x-client-secret <YOUR_CLIENT_SECRET>
Header index-name <YOUR_INDEX_NAME>

```

Replace the following placeholders with the values you copied in Step 1:

### Step 3: Configure the parser

Create a file named parsers.conf and add the following configuration:

```text
[PARSER]
   Name        banking_app_parser
   Format      regex
   Regex       ^(?<time>\d{2}:\d{2}:\d{2}\.\d{3}) \[[^\]]+\] \[[^\]]+\] \[[^\]]+\] (?<logLevel>\w+) (?<content>.*)
   Time_Key    time
   Time_Format %H:%M:%S.%L
```

The parser extracts the following fields from each raw log entry:

- Timestamp
- Log level
- Log content

### Step 4: Configure the Lua transformer script

Create the following file: /fluent-bit/scripts/transform.lua

Add the following Lua script:

```text
function transform_log(tag, timestamp, record)\
local new_record = {}\
local epoch_ms = math.floor(os.time() * 1000)\
new_record["timestamp"] = epoch_ms\
new_record["logLevel"] = record["logLevel"] or "INFO"\
new_record["content"] = record["content"]\
new_record["applicationName"] = "Banking Application"\
new_record["applicationType"] = "Microservice"\
return 1, timestamp, new_record\
end
```

The script performs the following transformations:

- Converts the timestamp to epoch milliseconds.
- Preserves the log level and log content.
- Adds applicationName and applicationType fields.
- Outputs structured JSON to APIwiz.

### Step 5: Log ingestion flow

Once configured, the log ingestion process follows this sequence:

1. Fluent Bit reads logs from /app/logs/\*.log.
1. The parser extracts structured fields from raw log entries.
1. The Lua script transforms the log record into structured JSON.
1. Logs are sent securely to APIwiz via HTTPS.
1. Logs are stored under the configured index.

### Step 6: Validation checklist

Before you start sending logs, confirm that the following steps are complete:

- Index created in APIwiz.
- **Client ID** configured in the Fluent Bit output.
- **Client Secret** configured in the Fluent Bit output.
- **Index Name** configured in the Fluent Bit output.
- parsers.conf File created in the correct location.
- Lua script placed at /fluent-bit/scripts/transform.lua.
- Fluent Bit service restarted.