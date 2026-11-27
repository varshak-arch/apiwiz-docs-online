---
title: "Overview"
sidebar:
  order: 1
---

An API gateway is a layer that sits in front of your backend services and acts as the single entry point for all API traffic. Instead of exposing backend services directly, all requests pass through the gateway first.

**Kong** is a cloud-native, high-performance API gateway built for scalability, security, and extensibility. It centralizes policy enforcement; authentication, rate limiting, traffic control, and transformation; between client requests and backend microservices.

## How Kong fits into APIwiz

Managing gateways like Apigee, Azure, AWS, Axway, or Kong individually through their own separate interfaces is inefficient. APIwiz acts as a unified platform where you can design services, configure plugins, and deploy them to Kong; all from one place without working directly in the Kong Manager UI or Admin API.

Within APIwiz, the Kong gateway workspace is organized into three top-level tabs:

- **Service**: Design and configure services, their routes, and route/service-level plugins; deploy via Version Control or direct deployment.
- **Plugin**: Create and manage reusable plugin categories built from Kong's plugin library \(or custom plugins\), scoped to Global, Service, or Route.
- **Manage**: Configure shared resources; Certificates, SNI, Upstreams, Targets, Products, and Global Plugins; plus schedule Backup and Restore for a Kong workspace or runtime group.

## Kong's core concepts

- **Service**: Defines the target backend host, protocol, port, and base path.
- **Route**: Defines the specific request path \(and optionally host\) that maps to a service, supporting path stripping and header-based routing.
- **Upstream \+ Target**: For high-volume backend scenarios, Targets are defined once and mapped to an Upstream, rather than per-service, enabling load balancing.
- **Plugin hierarchy**: Plugins can be applied at the **Global**, **Service**, or **Route** level.
- **Workspaces**: Segment environments \(e.g., Dev, UAT, Production\) within a single Kong connector; defaults to "default" in Kong OSS.

## The overall flow looks like this

Configure Certificates, SNI, Upstreams & Targets \(Manage\) → Build Plugin Categories \(Plugin\) → Design Services & Routes \(Service\) → Attach Plugins → Push to Version Control & Deploy → Group into Products for access control