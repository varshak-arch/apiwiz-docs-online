---
title: "Execute linting"
---

After you associate API specifications with a ruleset, execute the ruleset to validate the selected specifications against its configured rules.

To execute linting:

1. In the **Ruleset** section, select the ruleset you want to execute.
1. Select **Execute Ruleset**. 
  ![](https://admin.apiwiz.io/api/guides/images/6a7ddd88f0c8e28fcc1b91a2)
1. In the **Execute Ruleset** panel, use the search field to find the API specification you want to validate. The panel displays specifications based on the type of the selected ruleset:
  - For **OAS 3.0**, the panel displays available OAS specifications and their revisions.
  - For **AsyncAPI**, the panel displays available AsyncAPI specifications and their revisions.
  - For **Data Dictionary**, the panel displays available data dictionaries and their associated data models.
1. Select the API specification you want to validate:
  - When revisions are available, expand the specification and select the required revision.
  - For **Data Dictionary**, select the required data models under the selected data dictionary.
1. Optional: To select all published specifications, select the applicable **Select All Published** option, when available. The option and selection behavior depend on the specification type.
1. Select **Execute**.

The ruleset runs against the selected API specifications, revisions, or data models. The linting results are available in the **Reports** section.

### Specification-specific selection