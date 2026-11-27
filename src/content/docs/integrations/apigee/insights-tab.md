---
title: "Insights Tab"
---

The Insights tab is a monitoring and analysis tool that gives a holistic view of your API ecosystem's performance, policy behavior, and test coverage. It has three top-level sections: **Proxy**, **Policy**, and **Code Coverage**.

## Proxy Performance

Selecting a proxy from the All Proxies list on the left shows three collapsible sections on the right:

- **Performance**: Real-time and historical metrics; request volume, response times, latency, throughput, and error rates.
- **Code Coverage**: Shows how much of the proxy's configured logic has been exercised.
- **Deployments**: Deployment history for the selected proxy.

If no traffic has been recorded, each section shows "No Insights are available."

## Policy Performance

Running Policy Performance analyzes real-time policy execution; execution count, processing time, latency contribution, and success/failure rates for each policy attached to a proxy.

**To run it:**

1. Go to the **Insights** tab and select the **Policy** sub-tab.
1. Select **Run Performance** in the top-right corner.
1. In the **Run Policy Performance** panel, fill in the following fields:

4.Select **Save**.

![](https://admin.apiwiz.io/api/guides/images/6a8d5fd7f0c8e28fcc1c2c9b)

## Code Coverage

The Code Coverage sub-tab shows how thoroughly a proxy's logic has been tested and exercised. The percentage reflects how much of the configured proxy logic has actually run.

To run it:

1. Go to the **Insights** tab and select the **Code Coverage** sub-tab.
1. Select **Run Coverage** in the top-right corner.
1. In the **Run Code Coverage** panel, fill in the following fields:

4.Select **Save**.

![](https://admin.apiwiz.io/api/guides/images/6a8d5f9ef0c8e28fcc1c2c87)

If no traffic is available for the proxy, the panel shows "No Insights are available."