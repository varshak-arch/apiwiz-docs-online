---
title: "Manage"
---

The Manage tab is where you configure shared resources that support APIs across the Azure gateway. These resources are reusable; changes here can impact multiple APIs at once. The left panel, under **Config Management** \("Manage Certificates, Products, Consumers, Upstream and Targets"\), contains seven sections; **Product**, **Certificate**, **Backend**, **Cache**, **Name Value**, **Global Policy**, **Function Apps**; plus a separate **Backup and Restore** area below it.

Each list view \(Product, Certificate, Backend, Cache, Name Value\) shares a common table structure with **Name**, **Service**, **Connector**, **Resource Group**, **Status** \(e.g., Approved, Review\), **Updated by**, and **Updated at** columns, alongside search, filter, and **\+** \(create\) controls. Selecting **\+** opens a create panel on the right.

## Product

Products bundle APIs together for publishing, with shared access rules and subscription requirements.

### Create Product Configuration

![](https://admin.apiwiz.io/api/guides/images/6aa93567879cd85c39aece0d)

## Certificate

Certificates secure communication between clients, the gateway, and backend services.

### Create Certificate

![](https://admin.apiwiz.io/api/guides/images/6aa93587879cd85c39aece31)

## Backend

Backends represent the backend services that API operations route to.

### Create Backend Configuration

![](https://admin.apiwiz.io/api/guides/images/6aa935d9879cd85c39aece4f)

## Cache

Cache resources let policies \(e.g., response caching\) reference an external cache store.

### Create Cache Configuration

![](https://admin.apiwiz.io/api/guides/images/6aa93606879cd85c39aece73)

## Name Value

Name Values are reusable named values that can be referenced across policies and configurations.

### Create Name-Value

![](https://admin.apiwiz.io/api/guides/images/6aa93630879cd85c39aece97)

## Global Policy

Global Policy applies policies at the service level, across all APIs on a selected connector/gateway \(e.g., "testing-gateway", chosen via a dropdown top-right\).

The **Global Policies List** shows Name and Summary for policies currently applied globally \(e.g., "Forward request; Forwards the request to the backend service."\). Selecting **\+** opens an **Add Policy to Global** section at the bottom, structured the same way as the Plugin tab's Add Plugins flow: policy type categories with counts on the left \(e.g., new \(26\), newui \(1\), compliance \(9\)\), and individual policy checkboxes with descriptions and scope badges on the right \(e.g., Validate content, Convert JSON to XML, Mock response\).

## Function Apps

Lists Azure Function Apps associated with a selected connector \(shown top-right, e.g., "sgws-poc - test-serverless"\). If no functions exist for that connector, an empty state is shown: "No Function Applications Found; No application found for the connector: \[connector name\]."

## Backup and Restore

A separate area below Config Management for scheduling backups of Azure service configuration.

The **Backups** list shows Name, Service Name, Resource Group, Updated by, and Updated at. Selecting a backup expands a **Backup Overview** section below with:

**Backup Summary** shows counts of what was captured: APIs, Cache, Certificates, KVM \(Key-Value/Name Values\), and Tags.

A search icon, a timer/schedule icon, and a **\+** \(create backup\) control sit in the top-right of the Backups panel.

![](https://admin.apiwiz.io/api/guides/images/6aa93659879cd85c39aecebb)