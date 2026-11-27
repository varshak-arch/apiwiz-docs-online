---
title: "Disable the Apiwiz agent"
---

You can remove the Apiwiz agent from an application by removing its instrumentation annotation.

1. Open the application's deployment manifest file.
1. Locate the annotation that enables Apiwiz Java instrumentation:
  ```text
  apiwiz-java-instrumentation: apiwiz
  ```
1. Remove the annotation.
1. Apply or redeploy the updated manifest.

The application no longer receives Apiwiz Java instrumentation.

### Automatic cleanup by the operator

After you remove the annotation, the Apiwiz Operator detects the change and removes the following without manual cleanup:

- Environment variables added for instrumentation
- Volume mounts created for the agent
- The Apiwiz traffic hook and related configuration

The application returns to its original, uninstrumented state.