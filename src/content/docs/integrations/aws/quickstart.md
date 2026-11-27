---
title: "Quickstart"
sidebar:
  order: 6
---

This summary walks you through setting up and deploying an API through the AWS Gateway in APIwiz:

1. **Set up a Connector**: Configure the AWS connector with the required credentials in the Connectors module.
1. **Access the gateway**: Go to API Gateways, select **View Details** on the AWS card, and land on the **Service** tab.
1. **Design the API**: Select "\+" to create a new API. Optionally import an existing spec via **Spec Upload**, then configure **API Data** and add **Resources** \(methods and paths\).
1. **Configure resource behavior**: For each resource, define **Method Request**, **Integration Request**, **Method Response**, and **Integration Response** to control how requests and responses flow between clients and the backend.
1. **Attach policies**: Apply **API Policies** to enforce security, transformation, or traffic rules. Create reusable policies in the **Policy** tab beforehand if needed.
1. **Configure error handling**: Set up **Gateway Response** to standardize how the API responds to errors.
1. **Deploy**: Select a stage under **Deployment** \(create one in **Manage → Stage Templates** first if none exist\).
1. **Version control**: Connect the API to a source repository under **Version**, then select **Build** to finalize the API.
1. **Promote**: Use **Promote** on the API Overview screen to push the API to a target connector/environment.
1. **Manage**: Use **Certificates** for secure communication, **Usage Plans** to enforce quota and throttling limits, **Lambda Functions** to reference serverless backends, and **Stage Templates** to standardize deployment configuration across APIs; all without redeploying existing APIs.