---
title: "Use the Apiwiz agent or Fluent Bit"
---

Configure the Apiwiz agent or Fluent Bit using the log ingestion details you collected to integrate with your services and capture application traffic logs. This enables log ingestion from sources such as microservices, Kong gateways, and WSO2.

# Prerequisites

Ensure you've collected your log ingestion details \(x-client-id, x-client-secret, and index-name\).

# Steps

1. Configure the copied log ingestion details in the Java observability agent or Fluent Bit.

1. Once you enable the traffic agent, application traffic received by the source is automatically ingested into the configured index, where you can view the corresponding logs.