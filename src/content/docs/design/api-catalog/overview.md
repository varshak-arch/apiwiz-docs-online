---
title: "Overview"
sidebar:
  order: 1
---

An API Catalog is a centralized repository that lists all APIs available in your organization. It gives you a single location to discover, explore, and understand the APIs that your organization has designed and published.

For each API, the catalog includes:

- API endpoints
- API documentation
- Version information
- Usage policies
- Metadata related to ownership, environment, and products

With all APIs in one place, you and your team can access, understand, and reuse APIs across the organization.

The **API Catalog** module is your centralized interface for viewing all published API specifications. Use it to:

- View all documented APIs.
- Explore API endpoints, operations, and schemas.
- Access published specifications.
- Test APIs using the **Tryout** feature for [OAS](/design/api-catalog/oas-documentation/), [GraphQL](/design/api-catalog/graphql-documentation/), and [SOAP](/design/api-catalog/soap-documentation/) specifications. Send a request and review the response to verify that it matches the defined schema.

### Why use an API Catalog

The API Catalog serves as your documentation and discovery platform for all available APIs. It supports the following specification types:

- [OpenAPI Specification \(OAS\)](/design/api-catalog/oas-catalog/)
- [GraphQL](/design/api-catalog/graphql-catalog/)
- [SOAP](/design/api-catalog/soap-catalog/)

When you publish a specification, the catalog lists it automatically. From there, you can browse each API to view its operations, parameters, request and response schemas, and version.

You can filter APIs by the following categories:

- Teams
- Products
- Partners
- Environment

These filters help you locate the API you need quickly. See [Filter the catalog](/design/api-catalog/oas-catalog/).

### Benefits

The API Catalog supports your API management and development workflows in the following ways:

- **Improved discoverability:** Search and find available APIs quickly, which reduces the time needed to locate the right service.
- **Reduced duplication:** See existing APIs so your team can reuse them instead of building duplicate functionality.
- **Faster development:** Integrate more easily and accelerate development cycles with quick access to APIs.
- **Better collaboration:** Work with shared APIs across teams, which improves collaboration and consistency.
- **Governance and standardization:** Enforce API standards and policies through centralized visibility and control.
- **Simplified onboarding:** Help new developers understand available APIs quickly through centralized documentation.

Together, these benefits help you build a scalable, organized, and well-governed API ecosystem.

### Expose APIs to external consumers

Use the **API Catalog** module to expose published APIs to external consumers. External users can do the following:

- Access the API documentation.
- Send API requests.
- Receive responses based on the defined API schema.

This lets external developers and partners integrate with your organization's APIs.

### Consequences of not using an API Catalog

Without a centralized API catalog, your organization may run into the following challenges:

- **Difficulty discovering APIs:** Developers may struggle to locate existing APIs for their projects.
- **Increased learning time:** Teams may spend extra time understanding how APIs work without centralized documentation.
- **Integration errors:** Without a single source of truth, integrations can become inconsistent and error-prone.
- **Inconsistent API implementation:** Different teams may implement APIs differently without a shared reference or standard.