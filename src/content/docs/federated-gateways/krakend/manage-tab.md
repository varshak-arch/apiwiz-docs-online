---
title: "Manage Tab"
---

The Manage tab is where you configure shared resources that support endpoints across the KrakenD gateway. These resources are reusable; changes here can impact multiple endpoints and builds at once. The left panel, under **Config Management** \("Manage Hosts, Service Configuration and Global Plugins"\), contains three sections: **Hosts**, **Service Configuration**, and **Global Plugins**.

## Hosts

Hosts represent the backend server URLs that endpoints and backends route to. They are reusable across multiple endpoints and can be marked as the default host list used by backends that don't specify one.

The Hosts list displays:

### To create a host

Select the **\+** icon in the top-right of the Hosts panel to open the **Create Host** form:

Select the save icon \(top-right\) to save the new host.

### Managing an existing host

Select the three-dot menu next to a host row for the following options \(the exact set varies by host\):

- **Status Logs**: View the host's status change history.
- **Edit**: Modify the host's configuration.
- **View**: View the host's details \(read-only\).
- **Delete**: Permanently removes the host.

![](https://admin.apiwiz.io/api/guides/images/6a90248c67f2ddaf4b762dc6)

## Service Configuration

Service Configuration holds runtime-level service configurations used when building and deploying endpoints.

The Service Configuration list displays:

Select the three-dot menu next to a row for **Edit**.

## Global Plugins

Global Plugins are plugins applied at the service/runtime level rather than to an individual endpoint or backend.

![](https://admin.apiwiz.io/api/guides/images/6a90253367f2ddaf4b762e40)