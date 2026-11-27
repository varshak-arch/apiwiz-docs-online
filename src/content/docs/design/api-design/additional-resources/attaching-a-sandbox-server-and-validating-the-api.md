---
title: "Attaching a sandbox server and validating the API"
---

## Sandbox overview

A sandbox is a simulated environment that enables you to model and execute API behavior without requiring a backend implementation. Use the sandbox to define responses, conditions, and logic that mirror real API behavior during the design phase.

The sandbox provides the following benefits:

- **Simulate API behavior early**: Validate API contracts and response logic before the backend is developed.
- **Unblock dependent teams**: Downstream teams can integrate with the sandbox immediately, enabling parallel development and reducing delivery timelines.
- **Enable early validation**: Reviewers can verify API behavior across different scenarios and conditions before approving the API design.
- **Reduce rework and defects**: Identify design gaps, edge cases, and inconsistencies before implementation begins.

#### Prerequisites

Before you begin, ensure the following requirements are met:

### Step 1: Create a sandbox server domain

To create a sandbox server domain, follow these steps:

1. Go to **Connectors** and select **APIwiz Integration**.
1. Select **Environment Map**.
1. Select **\+** to create a new sandbox environment.
1. Enter the sandbox server domain.

>

#### Step 2: Attach the sandbox server to the OAS

This is a one-time configuration for each OAS.

To attach the sandbox server to the OAS, follow these steps:

1. Go to **Design Studio** and open the required OAS.
1. In the left panel, go to **Local Components** and select **Servers**.
1. Select **\+** to create a new server entry.
1. Enter the server name and description.
1. Select the scheme and choose the sandbox environment from the dropdown.
1. Select the sandbox server URL based on the chosen environment.
1. Enter the base path for your sandbox API structure. For example, /api/system/v1.
1. Select **Save**.

>

#### Step 3: Create a sandbox workflow

To create a sandbox workflow, follow these steps:

1. Go to **API Sandbox**.
1. In the left panel, select **\+ Add Collection** to create a new collection.
1. Select the newly created collection and select **\+ Add Workflow**.
1. In the form that appears, select **Import from Design Studio**.
1. Select the required OAS.

>

#### Step 4: Simulate API behavior

When an API is designed with multiple response status codes, such as 200, 400, and 500, importing the API into the sandbox automatically creates separate response nodes with conditional branching for each status code.

Configure the conditions within each conditional block to define how the sandbox responds based on different request scenarios and expected API behavior.

#### Step 5: Move the OAS to Review state

To submit the OAS for review, follow these steps:

1. Go to **Design Studio** and open the OAS.
1. Change the OAS status to **Review**.

>

#### Step 6: Validate API behavior

To validate the API behavior as a reviewer, follow these steps:

1. Log in to the platform and filter the OAS list by **Review** status.
1. Select the required OAS.
1. Go to the **Preview** section.
1. In the left panel, select the API operation you want to review.
1. Select **Try Out**.
1. Select the sandbox host.
1. Verify the following:
  - Query parameters
  - Header parameters
  - Request model
  - Examples
  - All responses

#### Step 7: Execute API calls using cURL

To test different scenarios using cURL, follow these steps:

1. In the **Try Out** section, select **cURL**.
1. Select **Run**. The response is routed to the sandbox mock response.
1. To test a different scenario, update the values in the **Parameters** section.
1. Select **Run** again. The sandbox mock response updates based on the configured conditions.
1. Repeat steps 3 and 4 with different values to validate multiple scenarios.

>

#### Step 8: Approve the OAS

After completing the review and validation, approve the OAS if all behavior meets the expected requirements.

>