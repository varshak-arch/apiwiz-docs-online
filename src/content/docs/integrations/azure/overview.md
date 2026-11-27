---
title: "Overview"
sidebar:
  order: 1
---

An API gateway is a layer that sits in front of your backend services and acts as the single entry point for all API traffic. Instead of exposing backend services directly, all requests pass through the gateway first.

**Azure API Management \(APIM\)** is a cloud-based API gateway for securing, monitoring, and scaling APIs, with built-in analytics and a developer portal.

## How Azure fits into APIwiz

Managing gateways like Apigee, AWS, Axway, KrakenD, or Azure individually through their own separate interfaces is inefficient. APIwiz acts as a unified platform where you can design APIs, configure policies, and deploy them to Azure API Management; all from one place without working directly in the Azure portal.

Within APIwiz, the Azure gateway workspace is organized into three top-level tabs:

- **Service**: Design and configure APIs, their operations, inbound/outbound/backend/on-error policy sections, and version control–based deployment.
- **Plugin**: Create and manage reusable plugin categories built from Azure policy templates, and configure the underlying policy metadata for each plugin.
- **Manage**: Configure shared resources; Products, Certificates, Backends, Cache, Name Values, Global Policy, and Function Apps; plus schedule Backup and Restore for the Azure service.

## The overall flow looks like this

**Configure shared resources \(Manage\) → Build plugin categories & policies \(Plugin\) → Design the API and its operations \(Service\) → Attach policies per section → Promote/Deploy via Version Control**