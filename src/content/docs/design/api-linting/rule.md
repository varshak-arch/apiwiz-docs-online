---
title: "Rule"
---

The **Rules** section displays all rules defined for the selected ruleset. Each rule represents a validation condition that API Linting applies to verify API specifications against organizational or industry standards.

You can create rules for a ruleset using one of the following options:

- **Create a rule**: Configure a new validation rule based on your API governance requirements.
- **Import rules**: Import predefined validation rules from a supported template.

# Create a rule

Create a rule to define a validation condition for the selected ruleset. The **Rule Configuration** workflow guides you through selecting a rule type, selecting the specification or data model to validate, defining the object path, and specifying the rule details.

The configuration fields vary based on the specification type selected for the ruleset:

To create a rule:

1. In the **Ruleset** section, select the required ruleset.
1. In the **Rules** section, select **\+**.
  ![](https://admin.apiwiz.io/api/guides/images/6a7d9d0c8f306a504d2c8d9b)
1. In **Rule Configuration**, select the rule type:
  - **Assert**: Validates a field against a condition.
  - **Regex**: Validates a field against a regular expression.
  - **Function**: Applies predefined validation logic.
1. Select the specification or data model to use for validation:
  - For **OAS 3.0**, select an OAS specification.
  - For **AsyncAPI**, select an AsyncAPI specification.
  - For **Data Dictionary**, select a data dictionary and data model.
1. In **Object Path**, define the path for the element you want to validate.
1. The **Specification Reference** panel displays the selected specification or data model. The **Result** panel displays the value resolved from the specified object path.
1. In the **Review and Create**, enter the following rule details:

1. Select **Create**.

The rule is created and added to the selected ruleset. The rule is available for API linting according to the ruleset configuration.

## Rule types

API Linting supports three rule types: **Assert**, **Regex**, and **Function**.

**Assert**

Assert checks an object path value against a specified condition. The **Operation** field defines the validation logic. Available operations include **Present**, **Equal To**, **Absent**, **Contains**, **Truthy**, **Falsy**, **Enumeration**, **XOR**, and **Schema**. For example, use **Present** to verify that a required field exists in an API specification.

The object path and resolved value depend on the specification type selected for the ruleset. For example, an object path can reference `$.info.title` in OAS, an element within the AsyncAPI document in AsyncAPI, or an element within the selected data model in Data Dictionary. The underlying validation approach remains the same: the rule evaluates the value resolved from the object path against the selected operation.

**Regex**

Regex validates an object path value against a regular expression. Select **matches** to validate that the value matches the specified pattern, or **notMatches** to validate that it doesn't. Enter the regular expression in **Value**. For example, `^v[0-9]+$` validates version values such as `v1`, `v2`, or `v10`.

You can use the Regex rule type with the appropriate object path for OAS, AsyncAPI, or Data Dictionary specifications.

**Function**

The Function validates API schema or server configurations using predefined validation functions. When you select **Function**, select a **Function Type**, then select a **Function**. Each function type groups related validations for a specific API standard.

When you select **Function** as the rule type, select a **Function Type**, then select the appropriate **Function**. Each function type groups related validations for a specific API standard.

## Defining the object path

The object path identifies the element in the selected API specification or data model that the rule validates. The method used to select the source differs by specification type:

**OAS**: Select an OAS specification from the **OAS** list and define the object path directly.

**AsyncAPI**: Select an AsyncAPI specification from the **AsyncAPI** list, then define the object path based on the structure of the selected specification. The **AsyncAPI Reference** panel displays the selected specification, and the **Result** panel displays the value resolved from the object path.

**Data Dictionary**: Select the required data dictionary, then select the data model. The selected data model appears in the **Data Model Reference** area. Enter an object path to identify the element the rule validates. The **Result** panel displays the resolved value.

To define an object path:

1. In **Rule Configuration**, select the required specification or data model based on the ruleset type.
1. In **Object Path**, enter or select the JSON path.
1. In the **Result** panel, review the resolved value.

The object path must correspond to the structure of the selected specification or data model.

**Object path examples**

# Import rules

Import predefined rules from a template to quickly populate a ruleset. This option is available only for **OAS 3.0** rulesets.

APIwiz provides the following templates:

- **Swagger-V3**
- **Adidas-V3**
- **Zalando-V3**
- **Spectral-V3**

Each template contains a predefined set of linting rules that you can customize after import.

To import rules:

1. In the **Rules** section, select **Import**.
  ![](https://admin.apiwiz.io/api/guides/images/6a7d9d418f306a504d2c8dca)
1. From the **Template** list, select a template.
1. Review the available rules.
1. Clear the checkbox for any rule that you do not want to import.
1. Select **Import**.

The selected rules are imported into the ruleset and are available for further modification.

## Viewing rules for a ruleset

After you create a rule, the **Rules** section displays the rules configured for the selected ruleset. Each rule displays its name, severity, and description. Select a rule to review its configuration.

To view the rules for a ruleset:

1. In the **Ruleset** section, select the ruleset you want to view.
1. In the **Rules** section, review the configured rules.
1. In **Search Rules**, enter the rule name to find a specific rule.
1. Select the rule you want to review.
  ![](https://admin.apiwiz.io/api/guides/images/6a7dc92f8f306a504d2c8f37)

The selected rule opens in **Rule Configuration**.

The **Rule Configuration** section displays the configuration of the selected rule, including its rule type, API type, object path, and validation details.