---
title: "Enable agent injection through an annotation"
---

To enable agent injection, add the instrumentation annotation to your Java application deployment.

#### Prerequisites

The Apiwiz Operator and `JavaInstrument` resource are deployed.

1. In the application deployment manifest, add the following annotation:
   ```text
   apiwiz-java-instrumentation: apiwiz
   ```

  For example:

   ```text
   apiVersion: apps/v1
      kind: Deployment
      metadata:
        name: javaapp
        annotations:
          apiwiz-java-instrumentation: apiwiz
      spec:
        replicas: 1
   ```
1. Apply the updated manifest to your cluster.

The application deployment is annotated for automatic Java Agent injection.