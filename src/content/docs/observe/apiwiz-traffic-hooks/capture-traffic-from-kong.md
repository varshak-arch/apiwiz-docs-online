---
title: "Capture traffic from Kong"
---

Instrument an existing Kong Gateway deployment to capture API request and response traffic in APIwiz. The integration uses two APIwiz-supplied Kong custom Lua plugins:

- **kvm:** Stores the configuration metadata.
- **apiwiz:** Reads that configuration and captures and delivers the traffic.

You deploy the plugin packages to Kong, make them available in the gateway configuration, enable them in APIwiz Gateway Studio, and validate the captured events in your APIwiz workspace.

The integration has the following stages:

## How traffic capture works

The integration runs in parallel with the normal client-to-upstream request path. Kong continues to route API requests to the upstream services, while the apiwiz plugin observes the relevant gateway lifecycle stages and prepares capture events.

\[embed: node/220dd141-2e35\]

A client sends a request to Kong, and Kong applies routing and gateway policies. The upstream service returns a response, and the apiwiz plugin collects the enabled signals and sends them to the APIwiz collector.

When batching is enabled, the plugin can send events after the original request completes. API security processing is configured separately; if you enable blocking, it can affect request handling.

The plugin can populate gateway identification, tracing information, request and response timestamps, HTTP attributes, and, if configured, request and response payloads. The exact event fields depend on the plugin build and its settings.

## Prerequisites

Before you install the plugins, verify the following:

- A Kong Gateway runtime is running, and you have permissions to update its image, container configuration, or Kubernetes Deployment.
- You have the APIwiz-provided kvm and apiwiz plugin packages, confirmed compatible with your Kong Gateway version and deployment model.
- You have an APIwiz workspace, its workspace or client ID, the relevant secrets, and the APIwiz management or collector hostname.
- Kong data plane pods or containers have outbound HTTPS connectivity to the APIwiz collector URL, typically `/v1/events`. If you enable API security processing, they also need connectivity to the security processor URL.
- The Kong connector is configured in your APIwiz workspace, and the Kong runtime is connected in APIwiz Gateway Studio with permissions to create and deploy global plugin instances.
- You have a test Kong route and service, and an upstream endpoint for end-to-end verification.

## Plugin packages

Each plugin package contains a handler and a schema file, organized as follows:

```text
kong/plugins/
├── kvm/
│   ├── handler.lua
│   └── schema.lua
└── apiwiz/
    ├── handler.lua
    └── schema.lua
```

Kong loads plugin modules from its Lua module search path, and each plugin directory name must match the configured plugin name. Installing the files makes the modules available; it doesn't create or enable a Kong plugin instance.

## Installing the plugins on Docker-based Kong Gateway

Install the plugins by the method that matches your Kong deployment: Docker on a VM \(this section\) or [Kubernetes](#bookmark-df2a3c72-2b07-4295-be8b-e8645113774e). For Docker, either build a custom Kong image or mount the plugin files into the container. A custom image suits versioned, repeatable production releases; a bind mount suits evaluation or managed local deployments.

**Important:** If you already use other custom plugins, append `kvm` and `apiwiz` to the existing `KONG_PLUGINS` list. Don't replace or remove existing plugin names. Keep `;;` in the Lua package path to retain Kong's standard search paths.

### Option A: Build a custom Kong image

Build a Kong image that includes the plugins, and redeploy Kong with it.

**Prerequisites:** The plugin directories are under `kong/plugins/` in your build context.

Do the following:

1. Create a Dockerfile. Replace the Kong image tag with your approved version:
  ```dockerfile
  FROM kong:3.9.3
  COPY kong/plugins/ /opt/kong/plugins/
  ENV KONG_LUA_PACKAGE_PATH="/opt/?.lua;/opt/?/init.lua;;"
  ENV KONG_PLUGINS="bundled,kvm,apiwiz"
  ```
1. Build the image:
  ```shell
  docker build -t kong-apiwiz:3.9.3-v1 .
  ```
1. In your Docker Compose file, update the Kong service image to `kong-apiwiz:3.9.3-v1`.
1. Recreate the Kong service:
  ```shell
  docker compose up -d --force-recreate kong
  ```

Kong runs with the kvm and apiwiz plugins loaded.

### Option B: Mount the plugin files into the container

Mount the folder that contains both plugin directories, and add the module search path and plugin list to the Kong container environment.

**Prerequisites:** The plugin directories are under `./kong/plugins` on the Docker host.

Do the following:

1. In your Docker Compose file, add the volume and environment settings to the Kong service. Retain your existing ports, database, networks, and other settings:

1. Recreate the Kong service:
  ```shell
  docker compose up -d --force-recreate kong
  ```
1. Check the Kong logs, and verify that the enabled plugin list includes `kvm` and `apiwiz`. Adjust the container name and Admin API host for your deployment:
  ```shell
  docker compose logs --tail=100 kong
  curl -sS http://<KONG_ADMIN_HOST>:8001/plugins/enabled
  ```

Kong runs with the kvm and apiwiz plugins loaded.

## Installing the plugins on Kubernetes

Supply the plugin code to every Kong Gateway data plane pod, configure Kong to load it, and roll out the change. This procedure assumes a directly managed Deployment and two Lua files per plugin. If you use Helm, Kong Ingress Controller, or Kong Operator, apply the equivalent volume and environment changes through the supported values or custom plugin installation mechanism for your deployment.

**Prerequisites:** You have `kubectl` access to the Kong namespace, and the plugin files are under `./kong/plugins/`.

Do the following:

1. Create a ConfigMap for each plugin:
  ```shell
  kubectl -n <kong-namespace> create configmap kong-plugin-kvm \
    --from-file=handler.lua=./kong/plugins/kvm/handler.lua \
    --from-file=schema.lua=./kong/plugins/kvm/schema.lua

  kubectl -n <kong-namespace> create configmap kong-plugin-apiwiz \
    --from-file=handler.lua=./kong/plugins/apiwiz/handler.lua \
    --from-file=schema.lua=./kong/plugins/apiwiz/schema.lua
  ```

  For larger packages or plugins with additional files, use a custom image instead. This two-file ConfigMap example doesn't cover additional dependencies.
1. Merge the following fragment into the existing Kong container spec and pod spec. Replace `proxy` with your Kong container name, and preserve all existing environment variables, sidecars, volumes, and `KONG_PLUGINS` entries:
  This is a merge fragment, not a complete Deployment manifest. If you manage Kong through Helm or a controller, update the chart or managed resource instead of editing the Deployment manually, because manual edits are overwritten.
1. Restart the Deployment, wait for the rollout, and check the logs:
  ```shell
  kubectl -n <kong-namespace> rollout restart deployment/<kong-deployment>
  kubectl -n <kong-namespace> rollout status deployment/<kong-deployment>
  kubectl -n <kong-namespace> logs deployment/<kong-deployment> --tail=100
  ```
1. Verify that each pod is ready, that the Kong startup logs contain no Lua module or plugin schema errors, and that the Kong enabled plugin list includes `kvm` and `apiwiz`.

Every Kong data plane pod runs with the kvm and apiwiz plugins loaded.

## Configuring traffic capture in APIwiz Gateway Studio

Create global kvm and apiwiz plugin instances on the Kong runtime from your APIwiz workspace, and then validate that captured events reach APIwiz.

**Prerequisites:** Kong has loaded both the kvm and apiwiz modules.

Do the following:

1. In your APIwiz workspace, select **API Gateways**.
1. On the Kong gateway card, select **View Details**, and then select the **Manage** tab for the Kong runtime.
1. Select **Global Plugins** \> **\+** \> **Custom** \> **kvm**, and then select **Review**.
1. Enter the following details:

1. Paste the kvm metadata, and replace all placeholders with your workspace credentials, URLs, and environment identifiers. For more information, see [kvm metadata reference](#bookmark-147e6958-0467-4c27-bfa7-5cf10eb72354).
1. Review the settings, and select **Save**.
The kvm plugin instance is enabled on the Kong runtime.
1. Select **Global Plugins** \> **\+** \> **Custom** \> **apiwiz**, and then select **Review**.
1. Enter the fields that your `apiwiz/schema.lua` requires, and select the same target runtime and workspace as the kvm instance.
1. Select **Save**.
The apiwiz plugin instance is enabled on the Kong runtime.
1. Send test requests through your test Kong route, and verify that the events appear in the APIwiz transaction logs of the target workspace.

Kong captures API traffic for the runtime and sends the events to APIwiz.

## kvm metadata reference

The kvm plugin stores the integration's runtime settings as metadata. The following example is a starting point for traffic capture. All values are strings.

The following tables describe every supported metadata key.

### Connection and destination

### Capture and sampling

### Batching and delivery

When batching is enabled, the plugin can send events after the original request completes.

### Security processing

API security processing is optional. If you enable blocking, it can affect request handling.

### Enrichment, compatibility, and integrations