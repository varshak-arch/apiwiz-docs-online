---
title: "Dashboard"
---

The Dashboard provides an environment-level summary of your API estate's health, traffic patterns, compliance status, and security posture. All metrics are scoped to the environment selected in the top-right corner.

Use this to get a quick, at-a-glance view of your API estate's overall health, without navigating into each individual module.

![](https://admin.apiwiz.io/api/guides/images/6a6b0d6569d1ae9705729ef5)

## API Estate

Shows the total number of APIs and resources discovered by the agent in the selected environment; giving you an immediate view of your API surface area and how much of it is under active governance.

## Traffic Analysis

Shows the total volume of API calls captured across all monitored APIs, broken down into three categories. Use this to understand the governance state of your API traffic and prioritize which endpoints need documentation and oversight.

## Resources Analysis

Shows the total number of API endpoints discovered through monitored traffic, broken down by resource type. Use this to identify undocumented or shadow APIs and understand the mix of protocols running across your environment: 

## Success vs Failure

Displays the split between successful and failed API responses across all monitored endpoints, with a status code breakdown. Use this to assess your API estate's reliability and identify whether failures are client-side or server-side.

## Compliant vs Non-Compliant

Shows the volume of API traffic violating compliance rules, with a breakdown by area. An API is non-compliant when it has no OAS specification, or when its traffic deviates from the spec \(request, response, or header fields\). Shadow APIs are non-compliant by default.

An API becomes compliant only when all fields; **request, response, and header**, align with the OAS spec. If even one field doesn't align, it stays non-compliant.

Toggle between **REST/SOAP** and **GraphQL** to view the compliance breakdown by resource type.

## Secure vs Insecure

Shows the volume of API traffic identified as insecure, with a severity breakdown. Security analysis inspects API traffic for sensitive data exposure; such as credit card numbers, national IDs, or authentication tokens; passing through requests and responses without adequate protection.

- Prioritize remediation based on severity.
- Catch sensitive data leaks early, before they turn into compliance or breach incidents.

## Traffic Trend Chart

Shows the volume of API traffic identified as insecure, with a severity breakdown. Security analysis inspects API traffic for sensitive data exposure, such as credit card numbers, national IDs, or authentication tokens, passing through requests and responses without adequate protection.

- Helps you prioritize remediation based on severity.
- Helps you catch sensitive data leaks early, before they turn into compliance or breach incidents.