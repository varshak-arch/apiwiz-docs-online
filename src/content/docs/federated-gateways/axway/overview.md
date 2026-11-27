---
title: "Overview"
sidebar:
  order: 1
---

An API gateway is a layer that sits in front of your backend services and acts as the single entry point for all API traffic. Instead of exposing backend services directly, all requests pass through the gateway first.

The gateway handles centralized policy management, payload transformation, authentication, authorization, routing, and traffic control; eliminating the need to implement these individually in each backend service.

**Axway API Gateway** is an enterprise-grade gateway that supports REST, SOAP, OAuth 2.0, OpenID Connect, and mutual TLS. It handles authentication, authorization, threat protection, message validation, encryption, routing, and transformation; making it suitable for large-scale enterprise and B2B integration scenarios.

### How Axway Gateway fits into APIwiz

Managing gateways like Kong, Apigee, or Axway individually through their own separate interfaces is inefficient. APIwiz acts as a unified platform where you can design APIs, configure gateway settings, and deploy proxies; all from one place without logging into each gateway separately.

**The overall flow looks like this:**

**Design → Build → Configure → Deploy → Publish as Products**