---
title: "Deploy Apiwiz operator"
---

Deploying the operator is straightforward. The deployment automatically provisions the required Kubernetes resources so the operator installs and runs successfully.

During deployment, the system creates the following components:

- **Roles** to define the required permissions
- **RoleBindings** to associate roles with service accounts
- **ServiceAccount** used by the operator to interact with the cluster
- A **dedicated namespace** for isolating operator resources

By default, the operator creates and uses the `apiwiz-operator-system` namespace, which contains all resources the operator requires. You can override this default if needed.

#### Prerequisites

Access to a private container registry and `kubectl` access to your Kubernetes cluster.

To deploy the operator, complete the following steps:

1. Download the Apiwiz Operator Docker image and upload it to your private registry.
1. If you don't use the default `apiwiz-operator-system` namespace, create your desired namespace.
1. Using the `apiwiz-operator-deploy.yaml` file provided by the Apiwiz team, deploy the operator:
  ```text
  kubectl apply -f apiwiz-operator-deploy.yaml
  ```
1. In the `apiwiz-operator-system` namespace, verify that the operator is running:
  ```text
  kubectl -n apiwiz-operator-system get po
  ```
1. In the operator logs, confirm that the metrics server started. Log output similar to the following confirms a successful deployment:
  ```text
  INFO controller-runtime.metrics Serving metrics server {"bindAddress": ":8443", "secure": true}
  ```

The Apiwiz Operator is deployed and ready to accept a `JavaInstrument` resource.