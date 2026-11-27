---
title: "Quickstart"
sidebar:
  order: 6
---

This quickstart walks you through for setting up and deploying an API through the Axway gateway in APIwiz:

1. **Set up a Connector**: Configure the Axway connector with the required credentials in the Connectors module.
1. **Configure prerequisites**: Add Certificates, Remote Hosts, and Organizations under the Manage tab.
1. **Design the API**: Select **\+** in the API tab and configure Artifacts \(import Swagger\), Backend Details, Backend Routes, Frontend API Details, and Frontend Routes.
1. **Attach policies**: Apply inbound and outbound policies to frontend routes to enforce security, transformation, and routing rules.
1. **Deploy**: Select **Deploy** in the Version Control step. The API is pushed to the Axway gateway and becomes accessible via the gateway URL.
1. **Publish as a Product**: Bundle the deployed API into a product under the Manage tab and associate it with the relevant organization and partners.
1. **Manage**: Use Quotas to enforce usage limits, Certificates to maintain security, and the Policy tab to update governance rules without redeploying APIs. EOF