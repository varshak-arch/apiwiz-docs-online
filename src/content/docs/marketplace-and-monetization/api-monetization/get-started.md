---
title: "Get started"
sidebar:
  order: 5
---

This topic explains how to access the API Monetization module in the APIwiz platform.

### Prerequisites

Before you monetize an API, ensure that the following are in place:

- **A working OpenAPI specification:** acts as a contract that defines the business functions and operations available in the API. You create and publish the specification in **Design Studio**, making it available in the API catalogue.
- **An API sandbox:** allows consumers to try out the API before subscribing. The sandbox URL is referenced in the documentation.
- **Built business logic:** the business logic for the API, built either traditionally, such as a microservice using Java, .NET, or Python, or using an API builder to create a runtime workflow.
- **Unit testing:** test suites run at the microservice level to verify the API works correctly.
- **API gateway deployment:** a proxy deployed onto an API gateway, such as Kong, Apigee, NGINX, or AWS. After deployment, additional test suites run to conduct regression testing through the proxy.
- **Monetization configurations \(dependencies\): **the underlying monetization entities Rate Cards, Currency Sets, Metering Rules, and Package Categories configured before you can build a package.

### Accessing API Monetization

1. Log in to the APIwiz platform.
1. On the left navigation bar, hover over the bar to view the available modules.
1. Select the **API Monetization** icon.
  ![](https://admin.apiwiz.io/api/guides/images/6a44aaf9777f9d62fa75134c)

The API Monetization module opens, displaying four main tabs: **Dashboard**, **Audit**, and **Manage**.