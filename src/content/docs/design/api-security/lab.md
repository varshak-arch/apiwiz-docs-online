---
title: "Lab"
---

API Security Lab is a dynamic application security testing \(DAST\) feature in API Security. It lets security teams create applications from their own OpenAPI specifications \(OAS\) and run automated security scans against the endpoints in each OAS. The **APIwiz Security CLI tool** sends payloads to each endpoint and checks the responses against the rule groups configured in the **Rules** tab. The scan surfaces vulnerabilities and misconfigurations so that security teams can remediate them.

Security teams use API Security Lab to verify whether their organization’s internal and external APIs comply with current security standards. An application groups attached OASs for scanning visibility. Think of an application as a folder that holds a list of OASs, and each OAS as a list of endpoints.

### Dynamic vs. passive security testing

API Security supports two testing approaches.

## Key concepts

### Prerequisites

- Configure one or more rule groups in the [Rules](/design/api-security/rules/). The CLI scan tool uses these rule groups to test for violations.
- Download and configure the [CLI scan tool](https://apiwiz-security-cli.s3.us-west-2.amazonaws.com/apiwiz-security-cli.zip). 

## Creating an application

Create an application and attach the OAS\(s\) containing the endpoints that you want to scan.

1. If your workspace is new, API Security Lab automatically opens the application creation form. If applications already exist, in the left panel, select **\+**.
  ![](https://admin.apiwiz.io/api/guides/images/6a8695eff0c8e28fcc1bdd90)
1. Enter the following details:

1. Attach one or more OASs to the application.
1. Select **Save**.

The application appears in API Security Lab, listing its attached OASs and endpoints.

## Downloading and configuring the CLI scan tool

Download the CLI scan tool to run a security scan against an application's endpoints. The tool is available from the **How to Scan Application **section.

![](https://admin.apiwiz.io/api/guides/images/6a869661f0c8e28fcc1bdda4)

1. In the **How to scan application** tab, select the download link for your operating system.
1. Extract the downloaded ZIP file. The archive contains two folders, **Apple** and **Windows**, each with a README file and the executable file for that operating system.
1. Open the folder for your operating system and configure the CLI tool according to the instructions in the README file.
1. Run the following command to initialize the configuration:

```text
./apiwiz-security-scanner config init
```

The CLI scan tool is ready to run a scan.

## Running a security scan

Run a security scan to test an application's endpoints against your configured rule groups.

1. In API Security Lab, select the application to scan.
1. In the **How to scan application** section, copy the scan command. The command includes the application ID.
1. In the CLI tool, run the copied command.

The CLI tool sends payloads to each endpoint in the application, testing every endpoint against every configured rule group. Progress is displayed as endpoints complete, for example, "1 of 2" endpoints scanned. After the scan finishes, the CLI tool generates an AI summary and a report, then delivers both to API Security Lab through a webhook. Select refresh on the application page to view the new scan.

## Application report

The application status view summarizes the results of the most recent scan across four panels: Application status, Severity distribution, Threat severity trend, and Application overview.

![](https://admin.apiwiz.io/api/guides/images/6a86b472f0c8e28fcc1be058)

**Application status**

**Severity distribution**

**Threat severity trend**

A graph showing the severity distribution across previous scan runs. Select **Critical**, **High**, **Medium**, or **Low** to filter the trend by severity.

**Application overview**

### Reviewing endpoint scan results

Review an endpoint's scan results to see its violations and remediation guidance.

1. On the application page, under **Recent Scans**, select an OAS to expand its list of endpoints.
  ![](https://admin.apiwiz.io/api/guides/images/6a86b563f0c8e28fcc1be0b2)
1. Next to the **Last Scanned** field, select the report icon. The endpoint report opens, showing the following:

1. Select a violation to view its details.
  ![](https://admin.apiwiz.io/api/guides/images/6a86bb04f0c8e28fcc1be236)

The violation panel shows why the violation is dangerous, how to remediate it, and the supporting evidence. See Violation fields.

### Violation fields

## Downloading scan reports

Download a scan report to review violations outside API Security Lab. API Security Lab downloads the report as a Markdown file.

There are two ways to download:

- Selecting the download icon next to a scan at the endpoint level downloads a single Markdown file for that endpoint.
- Selecting the download icon next to **Recent Scans** at the application level downloads a ZIP file containing the latest scan report for each endpoint across every OAS in the application.