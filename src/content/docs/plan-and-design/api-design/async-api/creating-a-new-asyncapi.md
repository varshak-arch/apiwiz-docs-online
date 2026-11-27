---
title: "Creating a new AsyncAPI"
---

To create a new AsyncAPI, select **\+**. The system provides the following creation methods. Select the option that best fits your workflow.

### Before you begin

Before creating an AsyncAPI, ensure you have the following:

### Create from scratch

To create a new AsyncAPI from scratch , do the following:

1. Select **New API**.
  ![Creating a new AsyncAPI](../../../../../assets/images/plan-and-design/api-design/async-api/140ecd06741c.webp)
1. Select how you want to start:

1. Enter a name for the AsyncAPI.
1. Select **Proceed**.

The system redirects you to the landing page. In the **General Information** section, select **Edit** to open the AsyncAPI in the editor, where you can define channels, messages, and schemas.

### Import an AsyncAPI

Use this method when you already have an existing AsyncAPI specification file.

To import an AsyncAPI, follow these steps:

1. Select **Import**.
  ![Creating a new AsyncAPI](../../../../../assets/images/plan-and-design/api-design/async-api/acc1ea199c8e.webp)
1. In the dropdown, select the upload type.
1. Upload the AsyncAPI file from your local system.
1. Confirm the selection to import the file.

The system parses the uploaded file and creates an AsyncAPI using the imported definition.

### Sync an AsyncAPI from Git

Use this method to sync an AsyncAPI directly from a source control repository.

To sync an AsyncAPI from Git, follow these steps:

1. Select **Git Sync**.
  ![Creating a new AsyncAPI](../../../../../assets/images/plan-and-design/api-design/async-api/aa4e3f38fad4.webp)
1. Select the source control provider. Supported providers: GitHub, GitLab, Bitbucket, Azure, AWS CodeCommit.
1. Select the authentication type. Supported types: Token, Password.
1. Enter the following details:

1. Select **Proceed** to sync the repository.

The AsyncAPI is created by pulling the specification from the selected repository, enabling version-controlled API management.