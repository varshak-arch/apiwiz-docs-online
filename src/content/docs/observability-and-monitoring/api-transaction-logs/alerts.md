---
title: "Alerts"
---

Use Alerts to create and manage notifications that trigger when specific log conditions are met. Alerts help you detect and respond to abnormal patterns or critical events in real time, ensuring your team is notified promptly when log activity indicates issues that require immediate attention.

## Create an alert for a saved query

After you build a query, you can create an alert based on the filtered results to continuously monitor specific log conditions. This lets you track defined criteria in real time and receive notifications whenever the configured conditions are met.

**Prerequisites**

- A saved query
- The SMTP connector configured to receive email notifications
- The Slack connector configured to send notifications to a Slack channel

To create an alert for a saved query:

1. In the **Saved Queries** panel, locate the saved query.
1. Select the **Create Alert** icon next to the saved query.
  ![](https://admin.apiwiz.io/api/guides/images/6a69f5e169d1ae970572949e)
1. In the **Create New Alert** form, enter the following details:

1. Select **Save**.

The alert is created for the selected saved query.

### Editing and deleting alerts

In the upper-left corner of the page, select **Alerts**. The Alerts tab opens and displays all configured alerts, where you can edit or delete an existing alert.

![](https://admin.apiwiz.io/api/guides/images/6a6a372e69d1ae97057298ff)

To edit an alert:

1. In the **Alerts** list, select the alert you want to edit.
1. Update the required alert settings.
1. Select **Save**.

The alert updates with the new configuration.

To delete an alert:

1. In the **Alerts** list, locate the alert you want to delete.
1. Select the **Delete** icon next to the alert.

The alert is permanently removed.