---
title: "Uninstall Apiwiz Operator"
---

Uninstalling the Apiwiz Operator requires two steps: removing the `JavaInstrument` resource, then removing the operator itself.

1. In your target namespace, delete the `JavaInstrument` resource:
   ```text
   kubectl -n <namespace> delete <NameOfJavaInstrument>
   ```
1. In the `apiwiz-operator-system` namespace, delete the operator and its associated resources:
   ```text
   kubectl -n apiwiz-operator-system delete -f apiwiz-operator-deploy.yaml
   ```

The operator and its instrumentation components are removed from the cluster.