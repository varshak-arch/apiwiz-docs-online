---
title: "Use Apiwiz traffic hooks"
---

Configure the Apiwiz traffic hooks using the log ingestion details you collected to integrate with your services and capture application traffic logs. This enables log ingestion from sources such as microservices, Kong gateways, and WSO2.

# Prerequisites

Ensure you've collected your log ingestion details \(x-client-id, x-client-secret, and index-name\).

# Steps

1. Configure the copied log ingestion details in the APIwiz traffic hooks. For configuration details, see [APIwiz traffic hooks](/observe/apiwiz-traffic-hooks/overview/).
1. Once you enable the traffic agent, the agent automatically ingests application traffic received from the source into the configured index, where you can view the corresponding logs.