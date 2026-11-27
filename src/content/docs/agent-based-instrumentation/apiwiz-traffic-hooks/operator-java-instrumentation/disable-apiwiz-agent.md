---
title: "Disable Apiwiz agent"
---

You can remove the Apiwiz agent from an application by removing its instrumentation annotation. This procedure applies whether the application is instrumented through JAVA\_TOOL\_OPTIONS or JDK\_JAVA\_OPTIONS.

To disable the Apiwiz agent:

1. Open the application's deployment manifest file.
1. Locate the annotation that enables Apiwiz Java instrumentation:
   ```text
   apiwiz-java-instrumentation: apiwiz
   ```
1. Remove the annotation.
1. Apply or redeploy the updated manifest.

The application no longer receives Apiwiz Java instrumentation.

### Automatic cleanup by the operator

After you remove the annotation, the Apiwiz Operator detects the change on its next check cycle, about five minutes, and removes the following without manual cleanup:

- Environment variables added for instrumentation
- Volume mounts created for the agent
- The Apiwiz traffic hook and related configuration

For applications instrumented through JDK\_JAVA\_OPTIONS, the operator cleans up the variable based on whether it existed before instrumentation:

The application returns to its original, uninstrumented state.