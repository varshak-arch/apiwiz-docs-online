---
title: "Quickstart"
sidebar:
  order: 6
---

This summary walks you through setting up and deploying a service through the Kong gateway in APIwiz:

1. **Set up the connector**: Under **Connectors → API Gateway Integration → Kong**, create a new connection with the Admin Host, Kong Admin Token, and Runtime Name, and configure any Workspaces needed to segment environments \(Dev, UAT, Production\).
1. **Configure prerequisites**: Under the **Manage** tab, set up **Certificates** \(and associated **SNI** entries if multiple hostnames need distinct certificates\), and define **Upstreams** and **Targets** if load balancing across multiple backend hosts.
1. **Define plugin categories**: In the **Plugin** tab, create the **Plugin Categories** you'll need, and add plugins to each from presets \(or define custom plugins via the JSON schema editor\) at the appropriate scope; Global, Service, or Route.
1. **Create a service**: In the **Service** tab, select **\+ Create Service**.
1. **Upload a spec \(optional\)**: Use **Spec Upload** to import an existing Swagger/OpenAPI definition, or skip to build manually.
1. **Select a Destination**: Choose the runtime and workspace this service will be deployed to.
1. **Configure Service Data**: Set the Service Name, Protocol, Host, Port, and Base Path.
1. **Add Routes**: For each route, configure the Route Name, Protocol, Methods, Path, and Advanced Settings \(Path Handling Version, Strip Path, Preserve Host, header-based routing\).
1. **Attach plugins**: Apply plugins at the route level via **Plugin Configuration**, and/or at the service level via **Service Plugins**.
1. **Set up Version Control \(optional\)**: Configure the Source \(Github, Gitlab, Bitbucket, Azure, or AWS\), Access token, Repository URL, Branch name, and Commit message.
1. **Deploy**: Select **Deploy** to push the service configuration to the Kong gateway \(and to source control, if configured\).
1. **Group into Products**: Under **Manage → Products**, bundle the deployed service \(or specific routes\) into a Product to manage access control, approval type, and partner association.
1. **Manage ongoing operations**: Use **Global Plugins** to apply policies across all services, and **Backup and Restore** to snapshot and recover a workspace or runtime group's configuration.