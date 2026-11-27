---
title: "Overview"
sidebar:
  order: 1
---

An API gateway is a layer that sits in front of your backend services and acts as the single entry point for all API traffic. Instead of exposing backend services directly, all requests pass through the gateway first.

The gateway handles centralized policy management, payload transformation, authentication, authorization, routing, and traffic control; eliminating the need to implement these individually in each backend service.

**Nginx API Gateway** is a high-performance, scalable gateway for securing, managing, and optimizing API traffic. It is well-suited for high-throughput environments where speed and lightweight configuration matter.

## How Nginx Gateway fits into APIwiz

Managing gateways like Nginx, Axway, or Kong individually through their own separate interfaces is inefficient. APIwiz acts as a unified platform where you can design APIs, configure gateway settings, and deploy services; all from one place without logging into each gateway separately.

The overall flow looks like this:

**Design → Build → Configure → Deploy → Publish as Products**