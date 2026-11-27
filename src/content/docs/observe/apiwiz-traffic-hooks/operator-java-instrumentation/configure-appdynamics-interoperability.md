---
title: "Configure AppDynamics interoperability"
---

Apiwiz Java instrumentation supports running the Apiwiz Java Agent alongside the AppDynamics \(AppD\) agent, a Cisco product used for application performance monitoring.

Both agents similarly attach to the Java runtime. When you configure both agents together, the loading order becomes critical.

### Why loading order matters

AppDynamics requires that its agent loads first. Because annotations trigger both agents independently, there's no guarantee of loading order by default, which creates a priority conflict.

To resolve this conflict, the Apiwiz Operator can wait until the AppDynamics agent loads successfully before it injects the Apiwiz Agent. The operator validates this by checking configuration settings, **JAVA\_TOOL\_OPTIONS**, and application annotations that indicate AppDynamics loaded successfully. The operator injects the Apiwiz Agent only after this validation succeeds.

### How the operator applies appdConfig

The `appdConfig` key in the `JavaInstrument` resource specifies the target namespace and, optionally, a target application label.

- If you specify only a namespace, the operator validates against the namespace alone and doesn't check labels.
- If you specify both a namespace and a label, the operator validates the namespace first, then validates the label key and value. Instrumentation proceeds only when both conditions match.

The following table describes the operator's injection behavior based on your configuration:

### Configure the operator for AppDynamics

This procedure configures the operator to wait for AppDynamics to load before injecting the Apiwiz Agent.

#### Prerequisites

The Apiwiz Operator is deployed, and you know the namespace and, if required, the application label of the deployment where the AppDynamics agent runs.

To configure the operator for AppDynamics interoperability:

1. In the `JavaInstrument` object, add the `appdConfig` key.
1. Under `appdConfig`, specify the namespace where the AppDynamics agent is configured.
1. If you want the operator to also validate a specific application, add the `labelMatch` key and specify the following:

1. Apply the updated `JavaInstrument` resource to your cluster.

The operator now waits for AppDynamics to load successfully in the matching namespace and application before it injects the Apiwiz Agent.