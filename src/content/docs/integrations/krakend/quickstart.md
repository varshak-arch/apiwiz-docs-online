---
title: "Quickstart"
sidebar:
  order: 6
---

This summary walks you through setting up and deploying an endpoint through the KrakenD gateway in APIwiz:

1. **Configure prerequisites**: Under the **Manage** tab, add the **Hosts** your backends will call, review or add **Service Configuration** for the runtime, and set up any **Global Plugins** needed at the service level.
1. **Define plugin categories**: In the **Plugin** tab, create the **Plugin Categories** you'll need \(scoped to Endpoint, Backend, or Async agent\) and add the relevant plugins to each; for example, an authentication category for endpoints or a modifiers category for backends.
1. **Create an endpoint**: In the **Build** tab, select **\+** to either import endpoints from a Swagger specification or create an endpoint from scratch.
1. **Configure the Destination**: Select the runtime the endpoint will be deployed to.
1. **Configure the Endpoint**: Set the Endpoint Name, Build Name, Endpoint Path, Method, Cache TTL, Concurrent calls, Output Encoding, Timeout, and any Parameter Forwarding \(headers, query strings\).
1. **Add and configure Backend\(s\)**: For each backend, define its URL Pattern, Method, Backend Encoding, Service Discovery/Host settings, and any Response Manipulation \(Group, Target, Allow/Deny fields, Collection handling, field renaming\).
1. **Attach plugins**: Apply Backend Plugins to individual backends and Endpoint Plugins to the endpoint as a whole, drawing from the categories configured in step 2.
1. **Save and deploy**: Save the endpoint configuration. Once deployed, the endpoint's status updates to Deployed and becomes accessible via the gateway.
1. **Track changes**: Use **Commit History** to review who made changes, when, and inspect the resulting KrakenD configuration for any commit; useful for auditing and troubleshooting deployments.
1. **Iterate**: Use **Clone** on an existing endpoint to create a new build for testing changes without disrupting the deployed version, or **Undeploy** to remove a live endpoint.