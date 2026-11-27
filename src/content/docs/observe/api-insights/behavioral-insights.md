---
title: "Behavioral Insights"
---

Behavioral Insights provides a deep-dive analysis of an individual API endpoint's transaction history, compliance posture, security threats, latency patterns, and geographic traffic distribution.

To access Behavioral Insights, go to the **Inventory** and locate the endpoint you want to analyze. Each endpoint row has three icons; hover over them to identify the **Behavioral Insights** icon, then select it.

![](https://admin.apiwiz.io/api/guides/images/6a6b29c369d1ae970572a820)

Use this when you need to investigate a specific endpoint in detail; for example, to troubleshoot failures, confirm whether an endpoint is compliant and secure, or understand where its traffic is coming from.

The analysis is scoped to the last N transactions for the selected endpoint. Use the transaction selector in the top-right corner to choose the analysis window:

- Last 1,000 Transactions
- Last 5,000 Transactions
- Last 10,000 Transactions

![](https://admin.apiwiz.io/api/guides/images/6a6b28d169d1ae970572a763)

## Summary Metrics

The top of the Behavioral Insights view displays six summary metrics for the selected endpoint. Use these to get an immediate read on the endpoint's health before drilling into the detailed sections below.

## Status Code Breakdown

Groups API responses by HTTP status class, showing the count and percentage for each. Use this to quickly tell whether failures are driven by client-side issues \(4XX\) or server-side issues \(5XX\), so you know which team needs to investigate.

## Non-Compliant Traffic Breakdown

Shows which parts of the API request or response are causing non-compliance violations — for example, missing or malformed request headers, incorrect response status codes, or undocumented request body fields. Use this to pinpoint exactly what needs to be fixed to bring the endpoint into compliance, rather than just knowing that it's non-compliant.

## Sensitive Data Types

Lists the categories of sensitive data detected in the endpoint's traffic; for example, credit card numbers, national IDs, or personal contact information. Use this to identify where sensitive data may be exposed without adequate protection, so it can be flagged for remediation.

## Threats Severity

Breaks down detected security threats by severity level. Use this to prioritize which threats need immediate attention versus which can be scheduled for later review.

## Deviations

Shows behavioral deviations detected for this endpoint; patterns that deviate from the expected or baseline behavior. Use this to catch anomalies early, before they escalate into failures, security incidents, or compliance violations. Deviations are displayed with their **Reason** and **Occurrence** count.

## Origins and Destinations

Analyzes the traffic sources and target domains for this endpoint. Use this to understand who is calling this endpoint and from where, which is useful for spotting unexpected or unauthorized traffic sources.

Toggle between **Domain** and **IP Address** views to analyze by domain name or source IP.

By default, all IP addresses are treated as external. To classify an IP as internal, add it to the **Environment Map** under **Connectors**:

1. Go to **Connectors** in the left navigation panel.
1. Select the **APIwiz Integration** tab.
1. Select **View Details** on the **Environment Map** card.
1. Under **Internal IPs**, enter the IP address and select **\+** to add it.

Once added, traffic from that IP is classified as internal across all endpoints in API Insights.

## Latency

A time-series chart showing response time trends across the selected transaction window. Use this to spot latency spikes or degradation trends over time, rather than relying on a single point-in-time number.

## Geo-Location

A world map showing country-wise traffic distribution for this endpoint, with compliance and security risk overlays. Use this to identify which countries are generating risky traffic, so security or compliance action can be geographically targeted.

Toggle between **By Security** and **By Compliance** to view geographic risk by security posture or compliance status.

The table below the map lists countries with their traffic volume and risk indicators; for example, insecure traffic by country.

![](https://admin.apiwiz.io/api/guides/images/6a6b2a3969d1ae970572a848)