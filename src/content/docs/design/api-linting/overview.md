---
title: "Overview"
sidebar:
  order: 1
---

Inconsistent API designs across teams can reduce developer productivity and lead to integration issues over time. To prevent this, organizations establish API style guides that define standards and best practices for API design. API linting automates the enforcement of these standards across all API specifications.

API linting is the process of analyzing API definitions to verify that they comply with predefined standards, best practices, and specifications. It automatically checks API designs against a set of rules to ensure consistency, detect errors, and enforce organizational guidelines.

API linting is especially useful for APIs defined using specifications such as OpenAPI or AsyncAPI. Similar to code linting, it identifies issues such as syntax errors, naming inconsistencies, and deviations from best practices. Detecting these issues early in the development lifecycle improves reliability, security, and maintainability.

### Key features

API linting provides the following key capabilities:

### Benefits

API linting provides the following benefits:

### Rulesets

Rulesets, also called style guides, let organizations enforce consistency, validation standards, and best practices across API specifications. By applying rulesets, teams can ensure that APIs adhere to defined governance policies, maintain a uniform structure, and meet quality requirements throughout the API lifecycle.

Rulesets are essential for maintaining API quality and adhering to organizational standards. They provide a structured way to define and enforce rules for your API specifications. You create and manage rulesets in the API Linting module.

API Linting supports two ruleset types: **Global Rulesets** and **Custom Rulesets**. The ruleset type determines how validation rules apply to your API specifications.

Standard rulesets may be available when the platform is provisioned. You can also create custom rulesets to meet your organization's governance and design requirements.

**Custom rulesets**

A custom ruleset applies only to the API specifications you explicitly associate with it, such as **OAS**, **Data Dictionary**, or **AsyncAPI**. It applies only to linked API specifications, requires manual association with APIs or artifacts, and runs automatically when a linked specification is modified.

Use custom rulesets to do the following:

- Enforce internal design standards.
- Implement governance and compliance policies.
- Support project-specific validation requirements.

**Global rulesets**

A global ruleset applies automatically to all API specifications of the selected type within the workspace. It runs when a specification is created or modified, enforcing consistent validation without manual execution.

#### Choosing a ruleset type