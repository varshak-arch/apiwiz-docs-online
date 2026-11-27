---
title: "Linting report"
---

After you execute a ruleset, the **Reports** section displays the detected rule violations for the evaluated API specifications. 

![](https://admin.apiwiz.io/api/guides/images/6a7dfba7f0c8e28fcc1b9321)

#### Reports overview

The **Reports Overview** chart displays the distribution of violations across linting runs over the selected time range.

The chart uses the following axes:

The chart categorizes violations by severity:

- **Errors**: Displays error violations.
- **Warnings**: Displays warning violations.
- **Info**: Displays informational violations.

Use the time-range options at the top of the **Reports** section to view results for a specific period.

#### Linting results

The results table provides details about each linting activity.

#### Filtering results

Use the **Category** and **Ruleset** dropdowns to filter the reports.

To view results across all categories and rulesets:

1. In the **Category** section, select **All Categories**.
1. In the **Ruleset** section, select **All Rulesets**.

The **Reports** section displays results across all categories and rulesets.

You can also select a specific category or ruleset to narrow the results. The **Reports** section updates based on your selection.

# Viewing violations

When you run API linting, APIwiz validates the selected API specification against the configured ruleset. The **Reports** view displays the violations identified during the linting run.

To view violations for a linting run:

1. In the **Reports** section, select a linting run.
1. Review the violations identified for the selected API specification.
1. Use the **All**, **Error**, **Warning**, or **Info** filters to view violations by severity.
1. The violation list displays the following details:

1. From the violation list, select a violation.
1. In the details view, review the API specification alongside the selected violation to see the issue in its context.
1. Use the **API specification view** to identify the affected content and determine what needs to be corrected.

![](https://admin.apiwiz.io/api/guides/images/6a7eb583f0c8e28fcc1b95af)

### Resolve issues and re-run linting

If a linting run reports errors, warnings, or info messages, correct the underlying specification and re-run validation to confirm the fix.

1. Go to **Design Studio** \> **OAS**.
1. Open the OpenAPI specification that contains the issue.
1. Correct the issue for each rule violation reported.
1. Approve and publish the updated specification.
1. Go to **API Linting** \> **Category **\>** Ruleset**.
1. Select **Execute Linting** to re-run validation.
1. Open the **Insights** tab to review the updated results.

The Insights view reflects the results of the new run.

If you resolved all issues, the new run shows no errors, warnings, or info messages. When you select that run, no violation report appears, this confirms that the specification passes all applied rules.