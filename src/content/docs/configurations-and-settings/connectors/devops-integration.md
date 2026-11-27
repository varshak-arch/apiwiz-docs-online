---
title: "DevOps Integration"
---

DevOps Integration acts as the critical bridge between your API management platform \(APIwiz\) and the external ecosystem of tools used for IT operations and software development. While Source Control Integration focuses on the code and configurations, DevOps Integration is specifically designed to streamline the "Build" and "Deploy" phases of your API lifecycle.

In a modern API ecosystem, moving an API from development to production requires numerous automated steps, including compiling code, running tests, storing dependencies, and notifying teams of success or failure. This integration category connects your workspace directly to continuous integration and continuous delivery \(CI/CD\) orchestrators, artifact repositories, and communication platforms. By configuring these connectors, you enable automated pipelines that trigger deployments whenever changes are detected, handle the secure storage of build artifacts, and ensure that both development and operations teams are perfectly synchronized without having to manually switch between multiple tool interfaces.

**Key Features and Benefits**

Implementing DevOps Integration provides strategic, operational advantages that fundamentally shift teams toward an API-centric, self-service model.

- **Automated CI/CD Pipelines:** These integrations automate the heavy lifting of API deployment and testing. By linking with DevOps orchestrators, the platform enables pipelines to securely trigger builds and deploy APIs seamlessly, reducing manual intervention and accelerating delivery cycles.
- **Reliable Artifact Management:** Managing dependencies and compiled code is crucial for reliable deployments. These connectors facilitate the secure upload, download, versioning, and retrieval of build artifacts and binaries directly from cloud storage or specialized artifact repositories.
- **Centralized Tracking and Visibility:** The integration enables tracking, updating, and managing of work items and builds directly within the platform. This bridges the gap between development and operations teams by keeping code, work items, and release pipelines perfectly synced.
- **Real-time Observability and Communication:** By integrating with popular enterprise messaging tools, DevOps connectors ensure that teams receive automated, real-time alerts regarding build statuses, deployment events, or system failures. This keeps all stakeholders informed and significantly facilitates faster incident response.

![DevOps Integration](../../../../assets/images/configurations-and-settings/connectors/3d1833a508af.webp)

**Supported Ecosystem**

The platform supports integrations with widely used industry tools to orchestrate pipelines, manage artifacts, and communicate statuses.

**Supported Providers include:**

**CI/CD & Orchestration**

- [GOCD](#gocd)**:** Manages and automates continuous integration and delivery pipelines. It enables the secure triggering of pipelines, monitoring of build statuses, and direct retrieval of artifacts from the GOCD server.

**Artifact Management**

- [JFROG](#jfrog)**:** Integrates with JFROG Artifactory to securely manage artifacts and binaries. It ensures consistent and reliable versioning and management of dependencies across your pipelines.
- [AWS S3](#aws-s3)**:** Connects directly to Amazon Simple Storage Service \(S3\) buckets to provide secure and scalable cloud storage for retrieving and managing build artifacts and pipeline files.
- [Google Cloud Storage \(GCS\)](#gcs)**:** Connects to GCS buckets, enabling DevOps workflows to interact with Google's cloud storage for storing, retrieving, and managing build artifacts directly from your pipelines.

**Communication**

- [Slack](#slack)**:** Connects your workflows to Slack channels to send real-time notifications and alerts regarding build, deployment, and pipeline events, ensuring teams can respond to issues immediately.
- [Microsoft Teams](#microsoft-teams)**:** Configures team channels to receive direct notifications and alerts for pipeline and deployment events, keeping development and operations teams aligned and informed.

## **JFROG**

JFrog Artifactory is a universal artifact repository manager that serves as a single source of truth for all your software packages, binaries, and dependencies. It is used by DevOps teams to securely store, manage, and version the build artifacts generated during the software development lifecycle. By integrating JFrog with your API management workflows, you ensure consistent, traceable, and reliable management of these dependencies across your automated CI/CD pipelines

### **Prerequisites**

**1. How to Have a JFrog Account**

To integrate with JFrog, you must either create a new account or be invited to an existing organizational instance.

**Note**: JFrog website can change with time. Refer to [this](https://jfrog.com/help/r/myjfrog-portal/register/log-in-to-myjfrog) documentation for updated steps.

- **Step 1:** Open your web browser and navigate to the [official JFrog website](https://jfrog.com/)
- **Step 2:** Click on the **Start for Free** or **Free Trial** button to create a new cloud instance.
- **Step 3:** Fill out the registration form with your corporate email, name, and company details.
- **Step 4:** Choose your preferred cloud provider \(AWS, Google Cloud, or Azure\) to host your JFrog environment and select a server name \(this will be part of your Host URL\).
- **Step 5:** Submit the form and check your email for a verification link. Click the link to set your password and activate your account.

**2. How to Locate Your Host URL**

The Host URL is the web address where your specific JFrog Artifactory instance lives. Apart from the steps below, you can also refer to [this](https://jfrog.com/help/r/jfrog-rest-apis/projects?tocId=EdXas7XMSjSwMAunjWXA7w) documentation for updated content.

- **Step 1:** Log in to your newly created or existing JFrog account.
- **Step 2:** Look at the address bar in your web browser once you are on the main JFrog dashboard.
- **Step 3:** Copy the base URL. If you are using JFrog's cloud service, it typically looks like https://\[your-server-name\].jfrog.io.
- **Step 4:** To connect specifically to the Artifactory repository manager \(which handles the build artifacts\), you usually append /artifactory to the end of the base URL.
- **Step 5:** Save this complete URL \(e.g., https://\[your-server-name\].jfrog.io/artifactory\), as this is the **Host URL** you will paste into the APIwiz workspace.

**3. How to Generate Authentication Credentials \(API Key\)**

While you can sometimes use your standard login password, it is a strict security best practice to generate an API Key or Identity Token specifically for external integrations like APIwiz. Apart from the steps below, you can also refer to [this](https://jfrog.com/help/r/jfrog-platform-administration-documentation/api-key) documentation for updated content.

- **Step 1:** From your JFrog dashboard, locate your user profile icon in the top-right corner of the screen.
- **Step 2:** Click on the profile icon and select **Edit Profile** from the dropdown menu.
- **Step 3:** You may be prompted to enter your login password again to access secure settings.
- **Step 4:** Locate the **Authentication Settings** or **API Key** section within your profile page.
- **Step 5:** Click the **Generate API Key** \(or Generate Identity Token\) button.
- **Step 6:** A long, secure alphanumeric string will appear. **Copy this key immediately** and store it securely, as you might not be able to view it again. You will use your JFrog Username and this API Key as the **Password** when configuring the connector in APIwiz.

### **Connecting to JFROG in the APIwiz Workspace**

Follow the steps below to establish the connection between your APIwiz workspace and JFrog:

**Step 1: Locate the Connector** - Navigate to the **Connectors** module and select the **DevOps Integration** category. Locate the **JFROG** Connector card.

![DevOps Integration](../../../../assets/images/configurations-and-settings/connectors/cfe4f02eb24e.webp)

**Step 2: Initiate Connection** - Press the **Connect** button on the JFROG connector card. A configuration panel will slide open on the right-hand side of your screen.

**Step 3: Enter Configuration Details** - In the right-side panel, fill in the fields using the prerequisite information you gathered:

- **Username:** Enter the JFROG account username used to authenticate the connection \(Example: *jfrog-user*\).
- **Password:** Enter the password or the API key associated with the JFROG account \(Example: *JfrogPass@123\!*\).
- **Host URL:** Enter the complete URL of the JFROG server or repository you are connecting to \(Example: [https://jfrog.company.com/artifactory](https://jfrog.company.com/artifactory)\).

![DevOps Integration](../../../../assets/images/configurations-and-settings/connectors/ac5a4dd66868.webp)

**Step 4: Save Configuration** - Once all fields are accurately filled out, click the **Save** button at the bottom of the panel. You will receive a success message at the bottom of the screen confirming that the connection has been established.

**Step 5: Verify and Manage the Connector** - Upon a successful connection, the button on the JFROG Connector card will change from "Connect" to "**View Details**". Whenever you need to manage this integration, simply click **View Details** to open a window displaying the current configuration. From here, you can **Edit** the connector details \(for example, if your API key expires\) or **Delete** the connection entirely if it is no longer needed.

## **AWS S3**

Amazon Simple Storage Service \(AWS S3\) is a highly secure and scalable cloud storage solution provided by Amazon Web Services. Within the APIwiz platform, the AWS S3 connector enables your DevOps workflows to interact directly with your S3 buckets. It is primarily used for securely storing, retrieving, and managing build artifacts and other essential pipeline files. Integrating S3 ensures that your automated pipelines have reliable access to cloud storage directly from your centralized workspace without requiring manual intervention.

### **Prerequisites**

**Step 1: Have an Active AWS Account**

Note: AWS website can change with time. Refer to [this](https://repost.aws/knowledge-center/create-and-activate-aws-account) documentation for updated steps.

1. Open your web browser and navigate to the [AWS Console](https://aws.amazon.com/console/).
1. Click on the **Create an AWS Account** button.
1. Enter your root user email address and edit your AWS account name.
1. Verify your email address using the verification code sent to your inbox.
1. Create a strong root user password.
1. Provide your contact information and billing details \(a credit card is required for identity verification, though you will not be charged if you stay within the free tier\).
1. Complete the identity verification process via a phone call or SMS text message.
1. Select a support plan \(the Basic Support plan is free\) and click **Complete sign up**.

**Step 2: Create an S3 Bucket**

Apart from the steps below, you can also refer to [this](https://docs.aws.amazon.com/AmazonS3/latest/userguide/GetStartedWithS3.html) documentation for updated content.

1. Log in to your newly created account via the AWS Management Console.
1. Search for **S3** in the top navigation search bar and click on the S3 service.
1. Click the **Create bucket** button on the right side of the dashboard.
1. Enter a **Bucket Name**. This name must be globally unique across all of AWS \(Example: *devops-artifacts*\).
1. Select the **AWS Region** where you want your bucket to be hosted \(Example: *us-east-1*\).
1. Leave the default settings for "Block Public Access" turned on to ensure your artifacts remain secure.
1. Scroll to the bottom and click **Create bucket**.

**Step 3: Configure IAM Permissions**

Apart from the steps below, you can also refer to [this](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started.html) documentation for updated content.

1. In the AWS Console search bar, search for and select **IAM** \(Identity and Access Management\).
1. On the left menu, click **Users**.
1. Click **Add users** to create a new service user specifically for APIwiz \(e.g., *apiwiz-service-user*\) and proceed to the permissions page.
1. Select **Attach policies directly**.
1. Search for and check the box next to an S3 access policy \(such as AmazonS3FullAccess, or a custom policy restricting access only to your specific bucket\).
1. Click **Next** and then **Create user** to finalize the permission setup.

**Step 4: Generate AWS Security Credentials**

Apart from the steps below, you can also refer to [this](https://docs.aws.amazon.com/IAM/latest/UserGuide/security-creds.html) documentation for updated content.

1. While still in the IAM console, click on **Users** on the left menu and select the IAM user you just created.
1. Click on the **Security credentials** tab.
1. Scroll down to the **Access keys** section. \(These keys are suitable for direct user authentication from external integrations\).
1. Click the **Create access key** button.
1. Select "Third-party service" or "Application running outside AWS" as your use case and click **Next**.
1. Click **Create access key**.
1. A pop-up will display your **Access Key ID** \(Example: *AKIAYOURACCESSKEYID*\) and **Secret Access Key** \(Example: *wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY*\). **Important:** Click **Download credentials** to save them as a CSV file. You will not be able to view this secret password again once you close the window. You will use these exact credentials to configure the AWS S3 connector in the APIwiz workspace.

### **Connecting to AWS S3 in the APIwiz Workspace**

Once you have your AWS details ready, follow these detailed steps to establish the connection:

**Step 1: Locate the Connector**

- Log in to your APIwiz workspace.
- Navigate to the **Connectors** module on your dashboard.
- Select the **DevOps Integration** category from the top navigation tabs.
- Locate the **AWS S3** Connector card.

![DevOps Integration](../../../../assets/images/configurations-and-settings/connectors/c0d960207abf.webp)

**Step 2: Initiate the Connection**

- Click the **Connect** button directly on the AWS S3 connector card.
- A configuration panel will slide open on the right-hand side of your screen.

![DevOps Integration](../../../../assets/images/configurations-and-settings/connectors/2027e4d62c62.webp)

**Step 3: Enter Configuration Details** - In the right-side panel, fill out the required fields using the prerequisite information you gathered from AWS:

- **Bucket Name:** Enter the exact name of your S3 bucket \(Example: *devops-artifacts*\).
- **Key:** Paste the AWS Access Key ID you generated in the IAM console \(Example: *AKIAYOURACCESSKEYID*\).
- **Secret:** Paste the AWS Secret Access Key corresponding to your access key \(Example: *wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY*\).
- **Region:** Enter the exact AWS region code where your bucket is hosted \(Example: *us-east-1*\).

![DevOps Integration](../../../../assets/images/configurations-and-settings/connectors/9e588ab4e6ec.webp)

**Step 4: Save Configuration**

- Once all fields are accurately filled out, click the **Save** button at the bottom of the configuration panel.
- Look for a success message at the bottom of the screen confirming that the connection has been established.
- Observe the AWS S3 Connector card; the button will have automatically changed from "Connect" to "**View Details**".

**Step 5: Verify and Manage the Connector**

- Whenever you need to manage this integration in the future, simply click the **View Details** button on the connector card.
- A window will open displaying your current configuration.
- From here, you can click **Edit** to update your credentials \(e.g., if your AWS Secret Key rotates\) or click **Delete** to remove the connection entirely if it is no longer needed.

## **GCS**

Google Cloud Storage \(GCS\) is a highly secure and scalable cloud storage solution provided by Google. Within the APIwiz platform, the GCS connector acts as a bridge, enabling your DevOps workflows to interact directly with your GCS buckets. This integration is essential for securely storing, retrieving, and managing build artifacts and other pipeline files directly from your automated processes. By establishing this connection, you ensure your pipelines have reliable cloud storage access without requiring manual intervention.

### **Prerequisites**

**Step 1: Have an Active Google Cloud Account**

Note: GCS website can change with time. Refer to [this](https://docs.cloud.google.com/docs/get-started) documentation for updated steps.

- Open your web browser and navigate to the [Google Cloud homepage](https://cloud.google.com/?hl=en).
- Click the **Get started for free** button.
- Log in using your existing Google/Gmail account credentials. If you do not have one, follow the prompts to create a new Google account.
- Fill out the registration form, select your country, and agree to the Terms of Service.
- Provide your contact information and billing details. \(Similar to AWS, a credit card is required for identity verification, but you will not be charged unless you manually upgrade from the free tier\).
- Complete the setup process to access your Google Cloud Console.

**Step 2: Locate or Create a Project ID**

Apart from the steps below, you can also refer to [this](https://support.google.com/googleapi/answer/7014113?hl=en) documentation for updated content.

- Log in to the Google Cloud Console.
- Click on the **Project drop-down menu** located in the top-left navigation bar.
- In the modal window that appears, click **New Project** in the top right corner.
- Enter a **Project Name** \(e.g., *APIwiz-Integration-Project*\) and select your organization or location if applicable.
- Click **Create**.
- Once the project is created, select it from the project drop-down. Locate the specific **Project ID** displayed on the project dashboard and copy it down. You will need to enter this exact ID into the APIwiz workspace.

**Step 3: Create a GCS Bucket**

Apart from the steps below, you can also refer to [this](https://docs.cloud.google.com/storage/docs/creating-buckets) documentation for updated content.

- While in the Google Cloud Console, use the top search bar to find **Cloud Storage**, or select it from the left-hand navigation menu, and click on **Buckets**.
- Click the **Create** button.
- Enter a **Bucket Name**. \(Note: This name must be globally unique across all of Google Cloud, e.g., *apiwiz-devops-artifacts-123*\).
- Select your desired **Location type** \(e.g., Region\) and choose the geographic location where your data will be stored.
- Leave the default storage class and "Enforce public access prevention" settings as they are to ensure your artifacts remain secure.
- Scroll to the bottom and click **Create**.

**Step 4: Generate a JSON Key \(Service Account Credentials\)**

Apart from the steps below, you can also refer to [this](https://docs.cloud.google.com/iam/docs/keys-create-delete) documentation for updated content.

- In the Google Cloud Console search bar, type **IAM & Admin**, select it, and then click on **Service Accounts** from the left-hand menu.
- Click **Create Service Account** at the top of the page.
- Provide a Service account name \(e.g., *apiwiz-gcs-connector*\) and an optional description, then click **Create and Continue**.
- Under "Grant this service account access to project", open the Select a role drop-down. Search for and select a role that grants adequate permissions to your bucket, such as **Storage Object Admin**, then click **Done**.
- You will be redirected back to the Service Accounts list. Click on the email address of the service account you just created.
- Navigate to the **Keys** tab.
- Click **Add Key**, and then select **Create new key**.
- Choose **JSON** as the key type and click **Create**.
- The JSON file containing your secure credentials will automatically download to your computer. Keep this file safe and accessible, as you will need to upload it directly into the APIwiz GCS configuration panel.

### **Connecting to GCS in the APIwiz Workspace**

Once you have your Project ID, Bucket Name, and JSON file ready, follow these detailed steps to establish the connection within APIwiz:

- **Step 1: Locate the Connector**
  - Log in to your APIwiz workspace.
  - Navigate to the **Connectors** module on your dashboard.
  - Select the **DevOps Integration** category from the top navigation tabs.
  - Locate the **GCS** Connector card.

![DevOps Integration](../../../../assets/images/configurations-and-settings/connectors/7fcd614246d6.webp)

- **Step 2: Initiate the Connection**
  - Click the **Connect** button directly on the GCS connector card.
  - A configuration panel will slide open on the right-hand side of your screen.
- **Step 3: Enter Configuration Details**
  - In the right-side panel, fill out the required fields using the prerequisite information you gathered from Google Cloud:
  - **Project Id:** Enter the exact Google Cloud project ID that owns your bucket \(Example: *my-gcp-project*\).
  - **Bucket Name:** Enter the name of the GCS bucket you created \(Example: *devops-artifacts*\).
  - **Key:** Click the **Upload JSON File** button and upload the Service Account JSON key file you downloaded from Google Cloud in the prerequisites phase.

![DevOps Integration](../../../../assets/images/configurations-and-settings/connectors/d92868e73499.webp)

- **Step 4: Save Configuration**
  - Once all fields are accurately filled out and the file is uploaded, click the **Save** button at the bottom of the configuration panel.
  - Look for a **success message** at the bottom of the screen confirming that the connection has been established.
- **Step 5: Verify and Manage the Connector**
  - Observe the GCS Connector card; the button will have automatically changed from "Connect" to "**View Details**".
  - Whenever you need to manage this integration in the future, simply click the **View Details** button on the connector card.
  - A window will open displaying your current configuration. From here, you can click **Edit** to update your connection details \(e.g., if you need to upload a newly rotated JSON key\) or click **Delete** to remove the connection entirely if it is no longer needed.

## **GOCD**

GOCD is a powerful continuous integration and continuous delivery \(CI/CD\) server designed to manage and automate your software delivery pipelines. By integrating GOCD with your APIwiz workspace, you can securely trigger automated pipelines, monitor real-time build statuses, and directly retrieve compiled artifacts from the server. This seamless connection bridges the gap between development and operations, ensuring that your delivery cycles are consistent and require less manual intervention. Ultimately, it empowers your teams to orchestrate and deploy APIs directly from a centralized platform.

### **Prerequisites**

**1. Locate your GOCD Host URL**

The Host URL is the web address where your specific GOCD server is hosted and accessed. Apart from the steps below, you can also refer to [this](https://docs.gocd.org/current/installation/configuring_server_details.html) documentation for updated content.

- **Step 1:** Ensure your organization has an active GOCD server running and that you have network access to it.
- **Step 2:** Open your web browser and navigate to your main GOCD dashboard.
- **Step 3:** Look at the address bar at the top of your web browser once the dashboard has fully loaded.
- **Step 4:** Copy the complete base URL from the address bar \(Example: [https://gocd.company.com/go](https://gocd.company.com/go)\).
- **Step 5:** Save this copied address in a secure note. You will paste this exactly as the **Host URL** in the APIwiz workspace configuration panel.

**2. Prepare Authentication Credentials \(Username and Password\)**

To securely connect, APIwiz needs an account to authenticate against your GOCD server. Apart from the steps below, you can also refer to [this](https://docs.gocd.org/current/configuration/dev_authentication.html) documentation for updated content.

- **Step 1:** Log in to your [GOCD dashboard](https://www.gocd.org/) with an administrator account, or contact your GOCD administrator to request a new user profile.
- **Step 2:** Create a dedicated service account specifically for the APIwiz integration \(e.g., *gocd-apiwiz-user*\) rather than using your personal employee login. This is a standard security best practice.
- **Step 3:** Assign the necessary roles and permissions to this new user account so that it has the authority to trigger pipelines, monitor real-time build statuses, and fetch artifacts.
- **Step 4:** Set a strong password for this account \(Example: *GocdPass@123\!*\).
- **Step 5:** Securely document the **Username** and **Password**, as these are the exact credentials you will enter into the APIwiz workspace.

**3. Locate your Gradle Home URL**

The APIwiz connector requires the path to the Gradle installation that your GOCD pipelines use to compile and build code. Apart from the steps below, you can also refer to [this](https://docs.gradle.org/current/userguide/build_environment.html) documentation for updated content.

- **Step 1:** Access the underlying server, container, or environment where your GOCD agents \(the workers that run your builds\) are hosted.
- **Step 2:** Navigate through your server's directory to find where the Gradle build tool is installed.
- **Step 3:** Identify the exact absolute folder path to this installation directory.
- **Step 4:** Copy this exact path \(Example: */opt/gradle/gradle-7.6*\).
- **Step 5:** Save this directory path. You will enter this as the **Gradle Home URL** during the APIwiz connector setup phase.

### **Connecting to GOCD in the APIwiz Workspace**

Once you have your GOCD details ready, follow these step-by-step instructions to establish the connection within APIwiz. These steps are designed so you can execute them sequentially without any hindrance:

**Step 1: Locate the Connector**

- Log in to your APIwiz workspace.
- Navigate to the **Connectors** module on your main dashboard.
- Select the **DevOps Integration** category from the top navigation tabs.
- Locate the **GOCD** Connector card.

![DevOps Integration](../../../../assets/images/configurations-and-settings/connectors/cdf3c86dd40f.webp)

**Step 2: Initiate the Connection**

- Click the **Connect** button directly on the GOCD connector card.
- A configuration panel will slide open on the right-hand side of your screen.

**Step 3: Enter Configuration Details** - In the right-side panel, fill out the required fields using the prerequisite information you gathered:

- **Username:** Enter the GOCD account username you prepared to authenticate the connection \(Example: *gocd-user*\).
- **Password:** Enter the password associated with that GOCD account for secure access \(Example: *GocdPass@123\!*\).
- **Host URL:** Paste the complete URL of your GOCD server \(Example: [https://gocd.company.com/go](https://gocd.company.com/go)\).
- **Gradle Home URL:** Enter the exact path or URL to the Gradle installation used for your builds \(Example: */opt/gradle/gradle-7.6*\).

![DevOps Integration](../../../../assets/images/configurations-and-settings/connectors/2965bda3e700.webp)

**Step 4: Save Configuration**

- Once all fields are accurately filled out, click the **Save** button at the bottom of the configuration panel.
- Look for a **success message** at the bottom of the screen confirming that the connection has been successfully established.
- Observe the GOCD Connector card; the button will have automatically changed from "Connect" to "**View Details**".

**Step 5: Verify and Manage the Connector**

- Whenever you need to manage this integration in the future, simply click the **View Details** button on the GOCD connector card.
- A window will open displaying your current configuration.
- From here, you can click **Edit** to update your credentials \(for example, if your password changes\) or click **Delete** to remove the connection entirely if it is no longer needed.

## **Slack**

Slack is a widely used enterprise messaging and communication platform. Within the APIwiz workspace, the Slack connector allows your DevOps workflows to send real-time notifications and alerts directly to your designated Slack channels. This integration ensures that critical events, such as build successes, deployment statuses, and pipeline failures, are communicated instantly. By connecting Slack, development and operations teams remain perfectly synchronized, enabling faster incident response without needing to manually switch between tool interfaces.

### **Prerequisites**

Before configuring the Slack connector in the APIwiz workspace, you must ensure you have the proper access and credentials set up in your [Slack environment](https://slack.com/signin#/signin).

**Step 1: Access Your Slack Workspace**

Apart from the steps below, you can also refer to [this](https://slack.com/help/articles/212675257-Join-a-Slack-workspace) documentation for updated content.

- Open your web browser and navigate to the [official Slack website](https://slack.com/signin#/signin).
- Log in to your existing corporate Slack account. If your organization does not have a workspace, you will need to create one.
- Ensure that you have the necessary administrative or developer permissions within this workspace to install apps or generate tokens.

**Step 2: Generate an Authentication Token**

Apart from the steps below, you can also refer to [this](https://docs.slack.dev/authentication/tokens/) documentation for updated content.

- To allow APIwiz to securely send messages to Slack, you must generate a secure token. Navigate to the Slack API platform \(or app directory\) to create a new custom App or Bot for your workspace.
- Assign the necessary permission scopes to this bot \(e.g., permissions to write messages in channels\).
- Install the newly created App into your target Slack workspace.
- Upon installation, Slack will provide you with an authentication token \(typically starting with xoxb- for bot tokens\). **Copy this token immediately** and store it securely, as you will need it to complete the APIwiz setup.

### **Connecting to Slack in the APIwiz Workspace**

Once you have your Slack bot name and authentication token ready, follow these detailed steps to establish the connection within APIwiz:

**Step 1: Locate the Connector**

- Log in to your APIwiz workspace dashboard.
- Navigate to the **Connectors** module.
- Select the **DevOps Integration** category from the top navigation tabs.
- Scroll through the options and locate the **Slack** Connector card.

![DevOps Integration](../../../../assets/images/configurations-and-settings/connectors/51532f11374e.webp)

**Step 2: Initiate the Connection**

- Click the **Connect** button directly on the Slack connector card.
- A configuration panel will slide open on the right-hand side of your screen.

**Step 3: Enter Configuration Details**

- In the right-side panel, fill out the required fields using the prerequisite information you gathered:
  - **Name:** Enter the exact Slack username or bot name you created to send the messages \(Example: *devops-bot*\).
  - **Token:** Paste the secure Slack authentication token you generated in Step 2 of the prerequisites \(Example: *xoxb-your-slack-token*\).

You can also map channels with modules to assign modules to Slack channels to receive notifications. Click on the \+ symbol. Select the channel from the dropdown and the modules.

**Step 4: Save the Configuration -** Once both fields are accurately filled out, click the **Save** button at the bottom of the configuration panel. Look for a success message at the bottom of the screen confirming that the connection has been successfully established.

**Step 5: Verify and Manage the Connector**

- Observe the Slack Connector card; the button will have automatically changed from "Connect" to "**View Details**".
- Whenever you need to manage this integration in the future, simply click the **View Details** button. A window will open displaying your current configuration, from which you can **Edit** your token if it expires, or **Delete** the connection entirely if it is no longer needed.

## **Microsoft Teams**

Microsoft Teams is a widely used enterprise communication platform. Within the APIwiz workspace, the Microsoft Teams connector allows your DevOps workflows to send real-time notifications and alerts directly to your designated Teams channels. This integration ensures that critical events—such as build successes, deployment statuses, and pipeline failures—are communicated instantly. By connecting Microsoft Teams, development and operations teams remain perfectly synchronized, enabling faster incident responses without needing to manually switch between tool interfaces.

### **Prerequisites**

Before configuring the Microsoft Teams connector in the APIwiz workspace, you must ensure you have the proper access and a valid [Webhook URL from your Microsoft Teams environment](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=newteams%2Cdotnet).

**Step 1: Access Your Microsoft Teams Workspace**

Apart from the steps below, you can also refer to [this](https://support.microsoft.com/en-us/office/sign-in-and-get-started-with-teams-6723dc43-dbc0-46e6-af49-8a2d1c5cb937) documentation for updated content.

- Open your desktop application or web browser and log in to your corporate Microsoft Teams account.
- Ensure that you have the necessary administrative or owner permissions within the specific Team or channel to add new integrations.

**Step 2: Generate a Webhook URL**

Apart from the steps below, you can also refer to [this](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=newteams%2Cdotnet) documentation for updated content.

- Navigate to the specific channel where you want to receive alerts \(e.g., devops-notifications\).
- Go to the channel's settings and add an **Incoming Webhook** connector.
- Assign a name to the webhook and finalize the setup.
- Upon creation, Microsoft Teams will provide you with a unique **Webhook URL** \(typically starting with [https://outlook.office.com/webhook/](https://outlook.office.com/webhook/)...\).
- **Copy this complete URL immediately** and store it securely, as you will need it to complete the APIwiz setup.

### **Connecting to Microsoft Teams in the APIwiz Workspace**

Once you have your Channel Name and Webhook URL ready, follow these detailed steps to establish the connection within APIwiz:

**Step 1: Locate the Connector**

- Log in to your APIwiz workspace dashboard.
- Navigate to the **Connectors** module.
- Select the **DevOps Integration** category from the top navigation tabs.
- Scroll through the options and locate the **Microsoft Teams** Connector card.

![DevOps Integration](../../../../assets/images/configurations-and-settings/connectors/9e5e526dc60b.webp)

**Step 2: Initiate the Connection**

- Click the **Connect** button directly on the Microsoft Teams connector card.
- A configuration panel will slide open on the right-hand side of your screen.

**Step 3: Enter Configuration Details** In the right-side panel, fill out the required fields using the prerequisite information you gathered:

- **Channel Name:** Enter the exact name of the Microsoft Teams channel where you want to send messages \(Example: *devops-notifications*\).
- **Webhook URL:** Paste the secure webhook URL associated with the channel for secure message delivery that you generated in Step 2 of the prerequisites \(Example: [https://outlook.office.com/webhook/](https://outlook.office.com/webhook/)*...*\).

![DevOps Integration](../../../../assets/images/configurations-and-settings/connectors/ca6567738378.webp)

**Step 4: Save the Configuration**

- Once both fields are accurately filled out, click the **Save** button at the bottom of the configuration panel.
- Look for a success message at the bottom of the screen confirming that the connection has been successfully established.

**Step 5: Verify and Manage the Connector**

- Observe the Microsoft Teams Connector card; the button will have automatically changed from "Connect" to "**View Details**".
- Whenever you need to manage this integration in the future, simply click the **View Details** button.
- A window will open displaying your current configuration, from which you can **Edit** your channel details and Webhook URL, or **Delete** the connection entirely if it is no longer needed.