---
title: "Associate specifications"
---

Associate API specifications with a ruleset to define which specifications the ruleset validates during linting. API Linting supports **OAS**, **AsyncAPI**, and **Data Dictionary** specifications.

After you associate a specification with a ruleset, the ruleset applies its configured validation rules to that specification.

To associate an API specification with a ruleset:

1. In the **Ruleset** section, select the ruleset you want to associate with API specifications.
1. Next to the ruleset, select the association action. The action name depends on the specification type, such as **Associate OAS**, **Associate AsyncAPI**, or the corresponding Data Dictionary association action.
  ![](https://admin.apiwiz.io/api/guides/images/6a7dd465f0c8e28fcc1b8feb)
1. In the association panel, use the search field to find the API specification you want to associate. The panel lists specifications available for the selected specification type.
1. Select the required API specification.
1. When revisions are available, expand the specification and select the required revision.
1. Select **Save**.

The selected API specifications are associated with the ruleset and included in linting according to the ruleset configuration. When an associated specification is created or modified, the ruleset runs according to the API Linting workflow and generates a linting report.

### Specification-specific selection

The available specifications and selection options depend on the specification type: