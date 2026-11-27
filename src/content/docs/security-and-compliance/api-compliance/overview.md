---
title: "Overview"
sidebar:
  order: 1
---

API Compliance validates whether live API traffic adheres to the defined API specification or design schema. It ensures that API requests and responses conform to the structure, parameters, and models defined during the API design phase.

### How it works

APIwiz validates compliance by comparing the API specification with runtime traffic captured through APIwiz traffic hooks. These hooks are deployed at the API Gateway or Microservices layer to capture real-time request and response data. The captured traffic is ingested into the system and evaluated against predefined compliance rules.

When a deviation is detected, the system flags the request or response and identifies the specific field, parameter, or payload that does not meet the defined standard.

### Compliance rules and schema comparison

Compliance rules are defined through API Swagger or OpenAPI specifications created in the design environment. These specifications define the expected:

- Request body structure
- Response body structure
- Headers and query parameters
- Data types and required fields

When API traffic is ingested, APIwiz compares the live request and response data against the rules defined in the corresponding Swagger specification.

### When a request is marked as non-compliant

A request or response is marked as non-compliant when it violates the defined schema rules.

### Key compliance checks

APIwiz performs the following compliance checks against the API specification.

#### Schema adherence

Validates whether request and response payloads follow the schema defined in the API specification.

An API is considered non-compliant when:

- Additional fields appear that are not defined in the schema.
- Required fields are missing from the payload.

#### Parameter verification

Ensures that header parameters and query parameters match the definitions in the API specification.

Non-compliance occurs when:

- Unexpected query or header parameters are included.
- Parameter data types do not match the expected types.

#### Model validation

Ensures that request and response models match the structures defined in the API specification.

For example, if a **User** model defines specific attributes and data types, the runtime payload must follow the same structure.

### API compliance categories

APIwiz categorizes APIs into three sections based on the availability of API specifications and the traffic observed at runtime. These categories help teams identify whether APIs are properly documented, actively used, or deprecated but still receiving traffic.

#### Active APIs

An active API has a Swagger or OpenAPI specification that is available and in an approved or published state.

Active APIs are well-governed, with implementations that align with the documented specification.

#### Shadow APIs

A shadow API occurs when API traffic is detected but no corresponding Swagger specification exists, or when the existing Swagger specification is not in an approved or published state.

#### Zombie APIs

A zombie API is an API that has been deprecated but is still receiving traffic.