---
title: "Overview"
sidebar:
  order: 1
---

An API gateway is a layer that sits in front of your backend services and acts as the single entry point for all API traffic. Instead of exposing backend services directly, all requests pass through the gateway first.

**KrakenD** is a high-performance, stateless API gateway built for aggregating, transforming, and securing backend services behind a single endpoint. It supports building endpoints that fan out to one or more backends, applying plugins for authentication, traffic management, validation, and response manipulation along the way.

## How KrakenD fits into APIwiz

Managing gateways like Kong, Apigee, Axway, or KrakenD individually through their own separate interfaces is inefficient. APIwiz acts as a unified platform where you can design endpoints, configure backends, attach plugins, and deploy builds; all from one place without working directly in KrakenD's native configuration files.

Within APIwiz, the KrakenD gateway workspace is organized into four top-level tabs:

- **Build**: Design and configure endpoints, their backends, and per-endpoint/per-backend plugins.
- **Plugin**: Create and manage reusable plugin categories and the individual plugins available for use in Build.
- **Manage**: Configure shared resources; Hosts, Service Configuration, and Global Plugins; that support endpoints across the gateway.
- **Commit History**: View a chronological log of changes made to a runtime's configuration, including the resulting KrakenD configuration snapshot for each commit.

## The overall flow looks like this

Configure Hosts & Global Plugins \(Manage\) → Define Plugin Categories & Plugins \(Plugin\) → Build Endpoints & Backends \(Build\) → Deploy → Track changes \(Commit History\)