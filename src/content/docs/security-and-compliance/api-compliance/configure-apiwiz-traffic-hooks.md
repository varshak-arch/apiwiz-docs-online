---
title: "Configure Apiwiz Traffic Hooks"
---

APIwiz Observability Traffic Hooks capture runtime API traffic from a target service or gateway and send it to the API Compliance module for validation against the published OAS.

Before you begin, create an environment using the **Environment Map** connector card to capture traffic for that environment.

To configure APIwiz Observability Traffic Hooks:

1. Integrate the APIwiz Observability SDK, Agent, Plugin, or eBPF into the target microservice or API gateway, and add the environment name.
1. Send test requests to the target service to verify the integration.
1. In the **API Compliance** dashboard, verify that the test requests appear as captured traffic events.

APIwiz captures runtime traffic data from the integrated service or gateway. You can observe API transactions and compliance details in **API Compliance**.