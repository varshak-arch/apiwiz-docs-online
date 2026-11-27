---
title: "Quickstart\\t"
sidebar:
  order: 6
---

Here is the complete flow for setting up and deploying a proxy through Apigee in APIwiz:

1. **Connect to Apigee**: Set up the connection via the Connectors module.
1. **Design the Proxy**: Select **\+ \(Add Workflow\)** in the Proxy tab and configure Artifacts, Proxy Endpoint, Target Endpoint, and Map Endpoints.
1. **Create Policy Templates and Policies**: Under the Policy tab, define templates and the individual policies within them.
1. **Attach Policies**: Use Policy Enforcement on the proxy canvas to apply the relevant policies.
1. **Configure Version Control**: Choose a source type to store the proxy definition.
1. **Deploy**: Select **Deploy** to push the proxy live to Apigee.
1. **Monitor**: Use the Insights tab \(Proxy Performance, Policy Performance, Code Coverage\) to track behavior and reliability.
1. **Publish as a Product**: Bundle the deployed proxy into a Product under the Manage tab and associate it with the relevant organization and environments.
1. **Manage**: Use Cache, KVM, and Target Server to support runtime configuration, and Org View to audit the organization's structure.