---
title: "Overview"
sidebar:
  order: 1
---

Registry is a metadata storage module in APIwiz. Its sole purpose is to give you a place to store, track, and manage any information that does not belong to any other module in the platform.

In the entire APIwiz platform, there is no dedicated space to store miscellaneous metadata; information that is specific to your workspace or workflow but does not fit into API design, testing, monitoring, or any other module. Registry solves this by letting you create your own tables with custom columns and rows, where you can log and track any data you need.

Think of it like building a lightweight spreadsheet inside APIwiz. You define what columns you need, decide what type of data each column holds, and then your team updates the rows as needed. Anyone with access can come in and view or update the data at any time.

**A real example:** A DevOps engineer wants to track whether all services are working every day. Instead of maintaining a separate spreadsheet outside the platform, they create a registry called "Performance Test" with columns for Date, Service Name, and a Boolean \(Yes/No\) status column called "Is Working." Every day, they open the registry and update the rows. A manager or team lead can come in at any time and check the status history; and export it as an Excel file to share in a report.

The Registry module has two types:

- **App Registry**: A system-generated registry that automatically records metadata for all apps and consumers created across your connected gateways. You do not create or manage this — it is maintained by the system.
- **Custom Registry**: A registry you create yourself to store any custom metadata relevant to your team or workflow.

![](https://admin.apiwiz.io/api/guides/images/6a55cd3e3c41693bb70f386b)