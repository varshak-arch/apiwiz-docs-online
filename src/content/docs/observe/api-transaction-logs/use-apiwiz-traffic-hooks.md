---
title: "Use APIwiz traffic hooks"
---

Configure the log ingestion details you collected in APIwiz Traffic Hooks, the Observability Agent, plugin, or SDK to integrate with your services and capture API traffic. This enables log ingestion from microservices and gateways.

# Prerequisites

Ensure you have collected your log ingestion details \(x-client-id, x-client-secret, and index-name\).

# Steps

1. Configure the copied log ingestion details in the APIwiz Traffic Hooks component you're using: the Observability Agent, plugin, or SDK. For configuration details, see [APIwiz traffic hooks](/observe/apiwiz-traffic-hooks/overview/).
1. Once you enable traffic hooks, the agent automatically sends request and response data to APIwiz. API traffic received by the source is ingested into the configured index, where you can view the corresponding logs.