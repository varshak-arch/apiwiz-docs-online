---
title: "Apply a custom configuration"
---

By default, features such as application logs and tracing apply the same way to every deployment that the `JavaInstrument` resource targets. If you need different behavior for specific applications, for example, enabling application logs for only two out of ten applications, you can apply a custom configuration to those applications instead.

#### Prerequisites

The Apiwiz Operator and `JavaInstrument` resource are deployed, and you have `kubectl` access to the target namespace.

To apply a custom configuration:

1. Create an `apiwiz.properties` file that contains the configuration values you want to override for the target application, such as enabling or disabling application logs or tracing.
1. In the same namespace as the target application, create a ConfigMap from the `apiwiz.properties` file.
1. In the target application's deployment manifest, add the following annotation, using the name of the ConfigMap you created as the value:
  ```text
  APIwiz_JAVA_CUSTOM_CONFIG: apiwiz-custom-java-config
  ```

  In this example, `apiwiz-custom-java-config` is the name of the config map created from the `apiwiz.properties` file.
1. Apply the updated manifest to your cluster.

The operator checks for this annotation during instrumentation. If the annotation is present and the referenced config map exists, the operator attaches the custom configuration to the application and applies it through the JAVA\_TOOL\_OPTIONS configuration.