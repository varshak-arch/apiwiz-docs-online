---
title: "Quickstart"
sidebar:
  order: 6
---

This quickstart walks you through configuring, scanning, and monitoring API Security, from initial setup to threat visibility.

1. [Select or create security rules](/design/api-security/rules/): Use the default security rules for immediate protection, or create custom rules based on your organization's requirements. Enable and apply the rules to the required APIs, gateways, or services.
1. [Define sensitive data types](/design/api-security/data-types/): Configure the data types you want the platform to detect and monitor, such as email addresses, phone numbers, account numbers, and custom confidential fields. Apply data detection policies to the relevant traffic sources.
1. [Integrate observability components](/observe/apiwiz-traffic-hooks/overview/): Install the APIwiz Observability component \(SDK, Agent, Plugin, or eBPF\) on the API gateway or microservice where your API is deployed to enable traffic capture for security analysis.
1. [Run security scans with API Security Lab](/design/api-security/lab/): Create an application from your OpenAPI specifications, then use the CLI scan tool to run dynamic security scans against its endpoints. Review the AI-generated summary, violations, and remediation guidance for each endpoint.
1. [View threats and sensitive data events](/design/api-security/monitoring-and-analyzing-logs/): Go to **Logs** to review detected threats, view sensitive data events, and investigate affected APIs, requests, and services.

API Security is configured and actively monitoring your API traffic. You have full visibility into security threats, policy violations, and sensitive data exposure across your API ecosystem.