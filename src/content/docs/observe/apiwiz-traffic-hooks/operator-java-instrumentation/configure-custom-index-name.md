---
title: "Configure custom index name"
---

By default, all applications that a single `JavaInstrument` resource targets send their logs and metrics to the same index, making it difficult to segregate and debug data by application. To resolve this, you can configure each application to use a unique index name.

The Apiwiz Operator distinguishes between two index types:

To configure a custom index name, add the following annotations to the application deployment manifest:

```text
APIwiz_JAVA_CUSTOM_INDEX: "true"
APIwiz_JAVA_CUSTOM_EVENT_INDEX_NAME: <index_name>
APIwiz_JAVA_CUSTOM_LOG_INDEX_NAME: <index_name>
```

If you enable APIwiz\_JAVA\_CUSTOM\_INDEX but don't provide a custom event or log index name, the operator generates an index name from the deployment name. For example, for a deployment named app1, the operator uses app1 as the index name for both the event log and the application log.

If you provide a value for APIwiz\_JAVA\_CUSTOM\_EVENT\_INDEX\_NAME or APIwiz\_JAVA\_CUSTOM\_LOG\_INDEX\_NAME, the operator uses that value instead of the deployment-name-based default.