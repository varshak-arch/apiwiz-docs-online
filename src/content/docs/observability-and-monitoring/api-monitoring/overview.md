---
title: "Overview"
sidebar:
  order: 1
---

API Monitoring is the continuous practice of tracking API performance, availability, and functional correctness in real time. Because business operations depend on APIs, any decline in reliability can cause application failures, inconsistent data, and negative business impact.

API Monitoring is a **scheduled workflow** module: it shares the same workflow-building experience as Builder, Sandbox, and Testing, but the workflow type is set to Schedule. Because it isn't proxy-based and isn't meant to be triggered on demand, there's no manual Run action. Once you configure and save a scheduler, the workflow executes automatically at the defined interval, with no deployment or approval required.

The goal is to catch failures before they reach real users. For example, if one API in a production system breaks, that failure can cascade into consumer-facing problems, such as a failed transaction. Monitoring hits the endpoint on a regular basis to catch this quickly and can trigger a notification alerting an administrator that a specific API needs review.

# Why it matters

# How it differs