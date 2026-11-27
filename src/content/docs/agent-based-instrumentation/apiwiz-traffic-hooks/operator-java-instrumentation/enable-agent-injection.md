---
title: "Enable agent injection"
---

To enable agent injection, add the instrumentation annotation to your Java application deployment. By default, the operator adds the Apiwiz Java Agent configuration to the JAVA\_TOOL\_OPTIONS environment variable.

**Prerequisites**

The Apiwiz Operator and `JavaInstrument` resource are deployed.

To enable agent injection:

1. In the application deployment manifest, add the following annotation:
  ```text
  apiwiz-java-instrumentation: apiwiz
  ```

   For example:

  ```text
  apiVersion: apps/v1
  kind: Deployment
  metadata:
    annotations:
      apiwiz-java-instrumentation: apiwiz
      apiwiz.io/java-instrument-with-jdk: "true"
    name: javaapp
  spec:
    replicas: 1
  ```
1. Apply the updated manifest to your cluster.

The application deployment is annotated for automatic Java Agent injection.

# Inject through JDK\_JAVA\_OPTIONS

The application deployment is annotated for automatic Java Agent injection.

By default, the Apiwiz Operator adds the Apiwiz Java Agent configuration to the JAVA\_TOOL\_OPTIONS environment variable. Other Java agents, such as the AppDynamics agent, also read their configuration from JAVA\_TOOL\_OPTIONS. When several tools share one variable, a change that one tool makes can affect the configuration of another.

To keep the Apiwiz configuration separate, you can configure the operator to inject the agent through the JDK\_JAVA\_OPTIONS environment variable instead. You enable this behavior for each application by adding an annotation, so you can choose which applications use it.

## How the operator uses JDK\_JAVA\_OPTIONS

The operator injects through JDK\_JAVA\_OPTIONS only when the deployment has both of the following annotations:

If a deployment has only the instrumentation annotation, the operator continues to inject through JAVA\_TOOL\_OPTIONS.

When both annotations are present, the operator checks the application container for an existing JDK\_JAVA\_OPTIONS variable and responds as follows:

The following features work the same way when you inject through JDK\_JAVA\_OPTIONS:

- **Custom index names**: The operator writes the custom event and log index names to JDK\_JAVA\_OPTIONS. For more information, see [Configure custom index name](/agent-based-instrumentation/apiwiz-traffic-hooks/operator-java-instrumentation/configure-custom-index-name/).
- **Automatic sync**: When you update the JavaInstrument resource, the operator applies the change to JDK\_JAVA\_OPTIONS, not to JAVA\_TOOL\_OPTIONS. The sync doesn't override the logger index or custom index names. For more information, see [Verify agent injection](/agent-based-instrumentation/apiwiz-traffic-hooks/operator-java-instrumentation/verify-agent-injection/).
- **Automatic cleanup**: When you disable instrumentation, the operator removes only the values it added. For more information, see [Disable Apiwiz agent](/agent-based-instrumentation/apiwiz-traffic-hooks/operator-java-instrumentation/disable-apiwiz-agent/).

Because the Apiwiz configuration doesn't share JAVA\_TOOL\_OPTIONS with other agents, you don't need an appdConfig entry in the JavaInstrument resource for applications that use this method.

## Enable injection through JDK\_JAVA\_OPTIONS

This procedure enables Apiwiz Java Agent injection through JDK\_JAVA\_OPTIONS for an application that isn't currently instrumented.

**Prerequisites**

- The Apiwiz Operator and JavaInstrument resource are deployed.
- The application runs on Java 8 or later.
- The application isn't currently instrumented through JAVA\_TOOL\_OPTIONS.

To enable injection through JDK\_JAVA\_OPTIONS:

1. In the application deployment manifest, add the following annotations:
  ```text
  annotations:
    apiwiz-java-instrumentation: apiwiz
    apiwiz.io/java-instrument-with-jdk: "true"
  ```

  For example:

  ```text
  apiVersion: apps/v1
  kind: Deployment
  metadata:
    annotations:
      apiwiz-java-instrumentation: apiwiz
      apiwiz.io/java-instrument-with-jdk: "true"
    name: javaapp
  spec:
    replicas: 1
  ```
1. Apply the updated manifest to your cluster.

On the next check cycle, the operator adds the Apiwiz Java Agent configuration to JDK\_JAVA\_OPTIONS in the application container. To confirm the result, see [Verify agent injection](/agent-based-instrumentation/apiwiz-traffic-hooks/operator-java-instrumentation/verify-agent-injection/).

### Switch an instrumented application to JDK\_JAVA\_OPTIONS

This procedure moves an application that the operator already instrumented through JAVA\_TOOL\_OPTIONS to JDK\_JAVA\_OPTIONS. You disable the existing instrumentation, let the operator clean it up, and then enable instrumentation again with both annotations.

**Prerequisites**

-  The application is instrumented through JAVA\_TOOL\_OPTIONS.
- The application runs on Java 8 or later.

To switch an instrumented application to JDK\_JAVA\_OPTIONS:

1. In the application deployment manifest, remove the apiwiz-java-instrumentation: apiwiz annotation, and then apply the updated manifest.
1. Wait for the operator's next check cycle, about five minutes, so the operator removes the existing instrumentation.
1. In the application container, verify that JAVA\_TOOL\_OPTIONS no longer contains the Apiwiz Java Agent configuration.
1. In the application deployment manifest, add the following annotations, and then apply the updated manifest:
  ```text
  apiwiz-java-instrumentation: apiwiz
  apiwiz.io/java-instrument-with-jdk: "true"
  ```

On the next check cycle, the operator instruments the application through JDK\_JAVA\_OPTIONS.