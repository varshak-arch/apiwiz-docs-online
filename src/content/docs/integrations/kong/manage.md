---
title: "Manage"
---

The **Manage** tab is where you configure shared resources that support services across the Kong gateway. These resources are reusable, so changes made here can affect multiple services.

### Config Management

The left panel contains the **Config Management** section with the description *“*Manage Certificates, Products, Consumers, Upstream and Targets.*”* It includes the following sections:

- **Certificates**
- **SNI**
- **Upstreams**
- **Targets**
- **Products**
- **Global Plugins**

A separate **Backup and Restore** area is available below **Config Management**.

### Common List View

The resource list views follow a common table structure. Depending on the resource type, the table includes the following columns:

Each list view also provides common actions:

- **Search**: Search for a specific resource.
- **Filter**: Filter resources based on available criteria.
- **\+**: Create a new resource.

## Certificates

Certificates secure communication for services requiring SSL/TLS. They go through an approval workflow before use.

### Create Certificate

![](https://admin.apiwiz.io/api/guides/images/6aa908a7879cd85c39aebfd0)

## SNI

SNI \(Server Name Indication\) entries bind a hostname to a specific SSL Certificate, used during TLS negotiation to serve the correct certificate for a given hostname.

### Create SNI

![](https://admin.apiwiz.io/api/guides/images/6aa908bc879cd85c39aebfec)

## Upstreams

Upstreams represent a named group of backend targets, used for load balancing rather than pointing a service directly at a single backend.

### Add Upstream

![](https://admin.apiwiz.io/api/guides/images/6aa908cf879cd85c39aec008)

## Targets

Targets are individual backend hosts mapped to an Upstream. For high-volume backend scenarios, define targets here and map them to an Upstream rather than configuring them individually within each service.

### Add Target

![](https://admin.apiwiz.io/api/guides/images/6aa908e7879cd85c39aec032)

## Products

Products group services or specific routes together to manage access control.

### Add Product

A note is shown at the top: "Select either a service or individual routes. Note that if you choose to select a service, only routes not included in that service will be shown."

![](https://admin.apiwiz.io/api/guides/images/6aa90908879cd85c39aec055)

## Global Plugins

Global Plugins apply at the service/runtime level, across all services and routes configured on a connector.

The Global Plugins list displays:

**Example entries:**

#### Adding Global Plugins

Selecting **\+ Add plugins** opens the same preset-picker pattern used elsewhere in the interface. Plugins are organized into categories, each showing the number of available plugins:

Selecting a category lists its plugins on the right, each with a checkbox, name, and brief description. After selecting the required plugins, select **Review** to confirm the selections.

![](https://admin.apiwiz.io/api/guides/images/6aa90d1c879cd85c39aec1a9)

### Backup and Restore

Backups let you schedule and store snapshots of a Kong workspace or runtime group's configuration.

#### Backups List

The Backups list displays the backup's Name, the associated Runtime and Destination, and who last updated it and when.

#### Backup Overview

Selecting a backup expands **Backup Overview** below the list. The configuration is shown in a read-only YAML viewer, with options to download or edit it.

The YAML contains the complete Kong declarative configuration; a version identifier, the Konnect control plane name, and a full `services` array. Each service entry captures its connection settings \(timeouts, retries, host, port, protocol, path\) along with its nested routes and their own settings, such as HTTPS redirect behavior and supported methods.

#### Backup Actions

The top-right corner of the Backups panel provides search, a schedule/timer control for managing backup schedules, and a **\+** to create a new backup.

![](https://admin.apiwiz.io/api/guides/images/6aa90dc7879cd85c39aec25d)