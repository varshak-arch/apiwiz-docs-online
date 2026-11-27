---
title: "Method 4 - .NET Kubernetes operator"
---

The APIwiz Operator automates .NET auto-instrumentation for Kubernetes Deployments. It reads a DotNetInstrument resource, selects matching Deployments, and adds the .NET profiler environment, an init container, and a shared volume with the profiler files to their pod templates.

Use the operator to configure APIwiz observability for .NET services from one Kubernetes resource instead of adding profiler settings to every application Deployment. The operator reconciles the selected Deployments and rechecks them periodically.

### Advantages

The operator provides the following advantages:

- **Automated instrumentation:** Adds the profiler setup to selected Deployments without rebuilding application images.
- **Central configuration:** Stores exporter endpoints, resource attributes, and other instrumentation settings in one DotNetInstrument resource.
- **Flexible selection:** Selects Deployments by namespace, label pairs, or both.
- **Repeatable configuration:** Reconciles selected Deployments with the configuration in the DotNetInstrument resource.
- **Safe cleanup:** Tracks the environment variables it adds, so it can remove them when you disable instrumentation.

### How instrumentation works

For each selected Deployment, the operator does the following:

1. Merges the built-in .NET profiler environment variables with the values in the DotNetInstrument resource.
1. Adds the resulting variables to every regular container in the pod template. Existing application environment variables are preserved.
1. Adds an init container that uses the configured instrumentation image. The init container copies the files from `/autoinstrumentation/` into a shared `emptyDir` volume.
1. Mounts the shared volume at `/otel-auto-instrumentation-dotnet` in the init container and in each regular application container.
1. Adds the annotation `apiwiz.io/dotnet-instrument: Successful` to the Deployment.

The cluster pulls the init container image, so your nodes must be able to access its registry.

## Prerequisites

Before you install the operator, verify the following:

- kubectl is configured for the intended Kubernetes cluster.
- Your account can create custom resource definitions \(CRDs\), cluster roles, service accounts, and Deployments.
- The cluster can pull the APIwiz Operator image and the .NET instrumentation image. Configure registry credentials where required.
- Your .NET application image is compatible with one of the supported Linux runtimes. For more information, see [Runtime options](#bookmark-9ac524b7-7e73-445b-b460-030e2ddc74a5).
- The cluster can reach your APIwiz OpenTelemetry Protocol \(OTLP\) endpoints.
- You have an approved way to store and provide client credentials. Don't commit credentials in plaintext manifests.

Before you apply any resources, confirm the current cluster context:

```shell
kubectl config current-context
```

## Installing the operator

Install the operator from `operator-deploy.yaml`, a consolidated manifest that contains the operator namespace, CRDs, role-based access control \(RBAC\) resources, and the operator Deployment.

**Prerequisites:** The requirements in [Prerequisites ](#bookmark-1454d29b-4e24-4af5-a592-b9e61ec7703f)are met.

Do the following:

1. In `operator-deploy.yaml`, verify that the manager image points to the approved release image.
1. Apply the manifest:
   ```shell
   kubectl apply -f operator-deploy.yaml
   ```
1. Wait for the .NET CRD to be established:
   ```shell
   kubectl wait --for=condition=Established --timeout=60s \
     crd/dotnetinstruments.operations.wizsource.apiwiz.io
   ```
1. Wait for the operator Deployment to roll out, and verify that its pods are running:
   ```shell
   kubectl -n apiwiz-operator-system rollout status \
     deployment/apiwiz-operator-controller-manager --timeout=180s

   kubectl -n apiwiz-operator-system get pods
   ```

The operator is running in the `apiwiz-operator-system` namespace.

## Configuring a DotNetInstrument resource

Create a DotNetInstrument resource to define the instrumentation image, the Deployments to instrument, and the telemetry settings. A DotNetInstrument resource is namespaced.

**Prerequisites:** The operator is installed, and the DotNetInstrument CRD is established.

Do the following:

1. Create a file named `dotnetinstrument.yaml` with values for your environment:
  Replace every angle-bracket placeholder with your release or environment value. The resource uses the following fields:

  The `env` section sets the following variables:
1. Apply the resource, and verify that it exists:
   ```shell
   kubectl apply -f dotnetinstrument.yaml
   kubectl -n <namespace> get dotnetinstrument apiwiz-dotnet-config
   ```

The DotNetInstrument resource is created, and the operator starts reconciling the matching Deployments.

## Instrumentation behavior

The operator applies default environment variables, selects Deployments by namespace and label, and chooses a profiler runtime per Deployment.

### Environment variable defaults

The operator supplies defaults for the profiler, startup hook, plugin, and OTLP timeouts. Values in `spec.env` replace matching operator defaults. If an application container already defines a variable with the same name, the operator keeps the application value.

One default is `ASPNETCORE_URLS=http://+:8080`, applied when the application doesn't define `ASPNETCORE_URLS`. Verify that this matches the ports your application listens on.

### Deployment selection

The operator matches labels against the Deployment's top-level `metadata.labels`. Put the label used by `labelMatch` there; pod template labels alone don't match.

The following table shows which Deployments the operator selects for each combination of filters:

When you configure multiple label pairs, any one pair can match. When you configure both namespace and label filters, both must match.

A label filter must be a YAML list of objects with `key` and `value`, for example:

If you don't need a label filter, omit `labelMatch` or set `labelMatch: []`. Don't leave `labelMatch:` without a value, because YAML parses that form as null.

### Runtime options

The optional top-level Deployment annotation `apiwiz.io/otel-dotnet-auto-runtime` selects the profiler runtime. Select a runtime that matches the operating system and CPU architecture of the application container.

If the annotation is omitted or empty, the operator uses `linux-x64`. If the value is unsupported, the operator skips that Deployment and writes a message to the operator log.

## Instrumenting an application

Deploy or update your application with the label that the DotNetInstrument resource matches, so the operator instruments it on the next reconciliation.

**Prerequisites:** A DotNetInstrument resource is applied.

Do the following:

1. Create a Deployment manifest named `sample-api-deployment.yaml`. Add the matched label to the Deployment's top-level `metadata.labels`, not only to `spec.template.metadata.labels`:

1. Apply the Deployment:
   ```shell
   kubectl apply -f sample-api-deployment.yaml
   ```
1. Follow the operator logs until the Deployment is instrumented:
   ```shell
   kubectl -n apiwiz-operator-system logs deployment/apiwiz-operator-controller-manager --follow
   ```

The operator instruments the Deployment on its next reconciliation. The controller reconciles the DotNetInstrument resource and retries every two minutes. It doesn't watch Deployment changes directly, so a new Deployment can take up to one cycle to be instrumented.

## Including or excluding a Deployment

Use the `apiwiz.io/inject-dotnet` annotation on a Deployment's top-level metadata to include it despite a label mismatch, or to remove its instrumentation.

### Including a Deployment despite a label mismatch

Set `apiwiz.io/inject-dotnet` to `"true"` to bypass `labelMatch` for a Deployment. The annotation doesn't bypass `targetNamespaces`, so the Deployment must still be in a target namespace. If `targetNamespaces` is omitted, the namespace scope is the whole cluster.

Add the annotation to the Deployment:

For example, if `targetNamespaces` contains `default` and `labelMatch` selects `app=checkout`, the operator handles Deployments as follows:

- A Deployment in `default` with `app=checkout` is selected by both filters.
- A Deployment in `default` with a different label is selected if it has `apiwiz.io/inject-dotnet: "true"`.
- A Deployment outside `default` isn't selected by this DotNetInstrument resource, even if it has `apiwiz.io/inject-dotnet: "true"`.

Without this annotation, both the namespace and label filters must match when both are configured.

### Opting out and removing instrumentation

Set `apiwiz.io/inject-dotnet` to `"false"` to remove instrumentation from a Deployment:

For a Deployment that is in scope and passes the label filter, the operator removes the instrumentation environment variables it owns, the init container, its mounts, the shared volume, and the instrumentation status annotation. If the Deployment isn't instrumented, the operator skips it.

The operator checks selection before it reads the `"false"` annotation. Keep the Deployment within the configured namespace and label scope until the operator removes the instrumentation.

To opt the Deployment back in, remove the annotation, and wait for the next reconciliation:

```shell
kubectl -n default annotate deployment sample-api apiwiz.io/inject-dotnet-
```

## Verifying instrumentation

Verify that the operator added the instrumentation to the Deployment and that the instrumented pods are running.

**Prerequisites:** The application Deployment is applied, and a reconciliation has run.

Do the following:

1. Get the Deployment and its pod template:
   ```shell
   kubectl -n default get deployment sample-api -o yaml
   ```
1. In the output, verify that the following items are present:
  - The `apiwiz.io/dotnet-instrument: Successful` annotation on the Deployment
  - The `opentelemetry-auto-instrumentation-dotnet` init container
  - The `apiwiz-dotnet-auto-instrumentation` volume
  - The volume mount at `/otel-auto-instrumentation-dotnet`
  - Profiler environment variables, such as `CORECLR_ENABLE_PROFILING`, `CORECLR_PROFILER`, `CORECLR_PROFILER_PATH`, and `DOTNET_STARTUP_HOOKS`
1. Wait for the Deployment rollout, and inspect its pods and events:
   ```shell
   kubectl -n default rollout status deployment/sample-api
   kubectl -n default get pods
   kubectl -n default describe pod <sample-api-pod>
   kubectl -n default get events --sort-by=.lastTimestamp
   ```

The Deployment is instrumented, and its pods run with the .NET profiler.

## Troubleshooting

Use the following sections to resolve common installation and instrumentation issues.

### The API server reports that DotNetInstrument isn't found

Install the DotNetInstrument CRD, and wait for its `Established` condition before you apply the custom resource. To check the CRD, run the following command:

```shell
kubectl get crd dotnetinstruments.operations.wizsource.apiwiz.io
```

### The API server reports an unknown field under labelMatch

Use the `key` and `value` object form, for example, `- key: app` and `value: sample-api`, not `- app: sample-api`. Verify that the cluster has the CRD from the same operator release:

```shell
kubectl apply -f config/crd/bases/operations.wizsource.apiwiz.io_dotnetinstruments.yaml
```

### A Deployment isn't instrumented

Verify the following:

- Its namespace is listed in `targetNamespaces`, if that field is set.
- The `key` and `value` in `labelMatch` exist in the Deployment's top-level labels, unless `apiwiz.io/inject-dotnet: "true"` is set.
- It doesn't have `apiwiz.io/inject-dotnet: "false"`.
- Its runtime annotation is supported.
- The controller logs show no API access, validation, or Deployment update errors.

To check the controller logs, run the following command:

```shell
kubectl -n apiwiz-operator-system logs deployment/apiwiz-operator-controller-manager --since=15m
```

### The init container can't start, or the pod doesn't become ready

Inspect the pod events and the init container logs. Verify that the `spec.image` configured in the DotNetInstrument resource is pullable and contains the `/autoinstrumentation/` directory and the profiler files for the selected runtime.

```shell
kubectl describe pod <sample-api-pod>
kubectl logs <sample-api-pod> -c opentelemetry-auto-instrumentation-dotnet
```

### Telemetry isn't visible

Verify the following:

- The configured OTLP endpoints are reachable from the application pods.
- The client ID, client secret, and index values are correct.
- The application uses the expected listening port and resource attributes.
- The configured runtime matches the architecture and C library \(libc\) of the application image.

## Upgrading the operator

Upgrade the operator by applying the updated bundle from a new release. Use `operator-deploy.yaml` and the CRD manifests from the same release.

**Prerequisites:** You have `operator-deploy.yaml` and the CRD manifests from the target release.

Do the following:

1. Apply the updated bundle:
   ```shell
   kubectl apply -f operator-deploy.yaml
   ```
1. Wait for the operator rollout:
   ```shell
   kubectl -n apiwiz-operator-system rollout status deployment/apiwiz-operator-controller-manager --timeout=180s
   ```

The operator runs the new release.

## Related topics

- [Kubernetes Downward API](https://kubernetes.io/docs/concepts/workloads/pods/downward-api/)
- [Define dependent environment variables](https://kubernetes.io/docs/tasks/inject-data-application/define-interdependent-environment-variables/)