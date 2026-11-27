---
title: "Rulesets"
---

Rulesets, also called style guides, enforce consistency, governance policies, and best practices across API specifications. By applying rulesets, organizations can standardize API design and automatically validate specifications during development.

API Linting supports rulesets for the following specification types:

Each ruleset is created for a specific specification type. The rules and object paths configured in the ruleset are evaluated against the structure of that specification type.

# Creating your first ruleset

After you create your first category, create a ruleset to define the validation rules for your API specifications. The onboarding page lets you create your first ruleset directly.

![](https://admin.apiwiz.io/api/guides/images/6a7c45f7eb3c9603a6c47e6a)

To create your first ruleset:

1. In the **Name** field, enter a value.
1. In the **Description** field, enter a value.
1. From the **Type** list, select the API specification type for the ruleset: **OAS 3.0**, **AsyncAPI**, or **Data Dictionary**.
1. Optional: Select **Make Global Ruleset** to apply the ruleset to all applicable specifications of the selected type.
1. Verify that the **Category** field is prepopulated with the category you created.
1. Select **Create**.

The ruleset is created and added to the selected category.

# Creating an additional ruleset

Create additional rulesets to organize validation rules for different API specifications, governance standards, or business requirements.

To create an additional ruleset:

1. In the **Ruleset** section, select **\+**.
1. In the **Create Ruleset** dialog, select one of the following:
  - **Create new ruleset**
  - **Import ruleset**
1. Complete the required fields for the selected option.
1. Select **Create** or **Import**.

## Create new ruleset

Create a ruleset from scratch when you want to define validation rules without importing an existing ruleset.

To create a new ruleset:

1. In the **Create Ruleset** dialog, select **Create new ruleset**.
  ![](https://admin.apiwiz.io/api/guides/images/6a7c4ae5eb3c9603a6c47f56)
1. Enter the following details:

1. Select **Create**.

The ruleset is created and appears under the selected category.

## Import ruleset

Import an existing Spectral ruleset instead of creating one manually.

To import a ruleset:

1. In the **Create Ruleset** dialog, select **Import ruleset**.
  ![](https://admin.apiwiz.io/api/guides/images/6a7c4dabeb3c9603a6c48171)
1. Enter the following details:
  The following templates are available:
1. In the **Upload Ruleset File from Spectral**, select **Browse** and upload a ruleset file from your local system. Supported file formats: .json, .zip. A Spectral ruleset file defines linting rules used to validate API specifications. These files are typically written in JSON or YAML format and contain rules that check for the following:
  - Naming conventions
  - Required fields and schema validation
  - Response and status code standards
  - Documentation completeness
  - Organizational API design guidelines
1. Select **Import**.

The imported ruleset is added to the selected category and is available for configuring validation rules.