---
title: "NestJS SDK Integration"
---

The APIwiz JavaScript agent SDK enables API tracing and observability in NestJS and Node.js applications. The SDK attaches to your application at startup using a lightweight agent that automatically captures request and response data without requiring changes to the application source code.

Once configured, the SDK forwards telemetry data to the APIwiz Observability module using the configured OTLP endpoints, making traces and API activity visible in the APIwiz workspace for monitoring, troubleshooting, and compliance analysis.

### Purpose

Use the APIwiz JavaScript agent SDK to:

- Enable API tracing and observability in NestJS and Node.js applications
- Capture request and response data automatically without modifying application source code
- Forward trace data to the APIwiz Observability module for centralized monitoring
- Correlate API requests across distributed services using configured trace headers

### Key benefits

### Prerequisites

## Get started

To integrate the SDK into your NestJS application, follow these steps:

### Step 1: Install the SDK package

To install the SDK package using npm, run the following command:

```text
npm install {{locationOfTGZFile}}/apiwiz-javascript-agent-1.1.8.tgz
```

### Step 2: Configure the environment variables

To configure the SDK environment variables, do the following:

1. Download the apiwiz-env.sh configuration script file and place it in the root directory of your application.
1. Open the file and update the configuration values as required.

### Step 3: Update the package.json run script

To load the environment variables and register the SDK agent, add the following to the start of your run script:

```text
". locationToTheScriptFile && ts-node -r apiwiz-javascript-agent"
```

Then update the start script in your package.json file to source the configuration script and require the agent at startup.

**NestJS application:**

```text
"scripts": {
  "start": ". ./apiwiz-env.sh && ts-node -r apiwiz-javascript-agent src/main.ts"
}
```

**Node.js application:**

```text
"scripts": {
  "start": ". ./apiwiz-env.sh && node -r apiwiz-javascript-agent server.js"
}
```

### Step 4: Run the application

To start your application with the SDK enabled, run the start script defined in `package.json`:

```text
npm start
```