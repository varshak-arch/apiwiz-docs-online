---
title: "Quickstart"
sidebar:
  order: 6
---

This quickstart describes two ways to use the API Compliance module to capture API traffic and review compliance validation results in APIwiz. You can start from an OpenAPI specification \(OAS\) and validate captured traffic against it, or start by capturing traffic and generating or mapping an OAS afterward.

# Method 1: Start from the OAS

1. [Create an OpenAPI Specification](/design/api-design/oas/creating-a-new-oas/): Create or generate an OAS for the API in **Design Studio**. If the API already exists without a specification, generate one from live traffic using the **Shadow APIs** tab.
1. [Publish the OAS](/design/api-design/oas/changing-the-oas-status/): Change the OAS status to **Approved** and publish it to make it available for traffic mapping and compliance validation.
1. [Create an environment](/integrations/connectors/apiwiz-integration/): Use the **Environment Map** connector card to capture traffic in the specific environment.
1. [Configure APIwiz Observability traffic hooks](/observe/apiwiz-traffic-hooks/overview/): Integrate the APIwiz Observability SDK, Agent, Plugin, or eBPF into the target microservice or API Gateway to enable traffic capture. Add the environment name to capture traffic for that environment.
1. [Observe and view traffic](/design/api-compliance/viewing-api-transactions/): Once traffic flows through the configured hooks, navigate to **API Compliance** to view captured traffic events and their details.
1. [Review compliance validation reports](/design/api-compliance/viewing-api-transactions/): Select a traffic event to open the **Compliance Validation Report** and review schema validation results and any deviations from the published OAS.

# Method 2: Start from traffic capture

1. [Create an environment](/integrations/connectors/apiwiz-integration/): Use the **Environment Map** connector card to capture traffic in the specific environment.
1. [Configure APIwiz Observability traffic hooks](/observe/apiwiz-traffic-hooks/overview/): Integrate the APIwiz Observability SDK, Agent, Plugin, or eBPF into the target microservice or API Gateway to enable traffic capture. Add the environment name to capture traffic for that environment.
1. [Observe and view traffic](/design/api-compliance/viewing-api-transactions/): Once traffic flows through the configured hooks, navigate to **API Compliance** to view captured traffic events and their details.
1. [Create an OpenAPI Specification](https://docs.apiwiz.io/guides?guideId=6a5f9f0d69d1ae970571d98d&pageId=6a5fa3fb69d1ae970571dfb0#c1f191d3-2cbd-45e4-b881-27a3f2b28858): Create or generate an OAS for the API in **Design Studio**. If the API already exists without a specification, generate one from live traffic using the **Shadow APIs** tab.
1. [Publish the OAS](/design/api-design/oas/changing-the-oas-status/): Change the OAS status to **Approved** and publish it to make it available for traffic mapping and compliance validation.
1. [Review compliance validation reports](/design/api-compliance/viewing-api-transactions/): Select a traffic event to open the **Compliance Validation Report** and review schema validation results and any deviations from the published OAS.