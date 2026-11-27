---
title: "Overview"
sidebar:
  order: 1
---

GraphQL is a query language for APIs that enables clients to request only the data they need. Unlike REST, where the server defines fixed endpoints with predefined response structures, GraphQL uses a client-driven model where the client specifies exactly which fields to return.

This approach eliminates two common REST limitations:

- **Over-fetching**: Receiving more data than the client needs.
- **Under-fetching**: Making multiple requests to gather related data.

By requesting only the required fields, GraphQL improves network efficiency, reduces response time, and enhances application performance, particularly in bandwidth-constrained environments.

## How GraphQL works

In GraphQL, the server exposes a single schema that defines all available data types, fields, and relationships. The client constructs a query against this schema to retrieve exactly the data it needs in a single request.

This model:

- Reduces unnecessary payload size.
- Simplifies frontend development.
- Enables flexible API evolution without breaking existing clients.

**GraphQL as a contract**

The GraphQL schema acts as a formal contract between the client and the server. Because all operations must conform to the schema, data exchange remains structured and predictable.

The strongly typed schema provides:

- Early error detection during development.
- Clear definition of available operations.
- Improved tooling and auto-completion support.
- Self-documenting API behavior.

**Core operation types**

GraphQL defines three primary operation types:

Unlike REST, GraphQL allows multiple queries and mutations to execute in a single API call, returning one consolidated response. This reduces network overhead and simplifies client-side data handling.

**GraphQL as middleware**

GraphQL is frequently implemented as a middleware layer to modernize legacy systems without modifying existing backend services. Organizations use GraphQL to:

- Aggregate data from multiple backend services.
- Interface with legacy or unmaintained endpoints.
- Provide a unified API gateway.
- Standardize access to heterogeneous systems.

**GraphQL in APIwiz Design Studio**

In APIwiz, you can design and manage GraphQL APIs using Design Studio. Within the studio, you can:

- Define operation types, including query, mutation, and subscription.
- Create object types and model business entities.
- Define relationships between types.
- Validate schema definitions.
- Manage the API lifecycle through structured status transitions.