---
title: "Quickstart"
sidebar:
  order: 6
---

This Quickstart walks you through setting up and deploying an API through the Azure gateway in APIwiz:

1. **Configure prerequisites**: Under the **Manage** tab, set up **Certificates**, **Backends**, **Cache**, **Name Values**, and any **Products** the API will belong to.
1. **Define plugin categories**: In the **Plugin** tab, create the **Plugin Categories** you'll need, add relevant policy templates to each via **Add Plugins**, and configure each plugin's **Policy Metadata** \(its `set-*` element chain\) so it's ready to use.
1. **Create an API**: In the **Service** tab, select **Create API** \(\+\) to start a new API, or select an existing API/revision from the API List.
1. **Upload a spec \(optional\)**: Use **Spec Upload** to import an existing Swagger/OpenAPI definition, or skip this to build manually.
1. **Select a Destination**: Attach the API to an existing Azure API Management instance.
1. **Configure API Data**: Set the API's Name, Display Name, Service URL, Protocols, Path, Gateways, Tags, Products, and Subscription requirement.
1. **Configure Operations**: For each operation \(GET, POST, PUT, DELETE, etc.\), set its Name, Method, Path, Tags, and API Definition.
1. **Attach policies**: For each operation, open its **Policy Overview** and enable the relevant policies for the appropriate sections \(INBOUND, OUTBOUND, BACKEND, ON\_ERROR\).
1. **Set up Version Control**: Configure the Source \(Github, Gitlab, Bitbucket, or Azure\), Access token, Host URL, Repo name, Branch name, Folder name, and Commit message.
1. **Promote**: Select a target connector from **Select connector**, then select **Promote** and confirm to push the API to the Azure gateway.
1. **Manage ongoing operations**: Use **Global Policy** to apply policies service-wide, **Function Apps** to track serverless integrations, and **Backup and Restore** to snapshot and recover service configuration.