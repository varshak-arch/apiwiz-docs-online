---
title: "Overview"
sidebar:
  order: 1
---

API Tracing gives you end-to-end visibility into how a request flows through your system; from the moment it is triggered to every service, database, and message queue it touches behind the scenes.

#### Purpose

Debugging distributed systems is inherently complex. When a failure occurs, the root cause is rarely isolated to a single service; it is often the result of a chain of interactions across multiple APIs, databases, and external systems. Without a unified view of this chain, engineering teams spend significant time correlating logs across applications, reconstructing the sequence of events manually, and identifying where the breakdown occurred.

API Tracing addresses this by capturing every request as a structured, end-to-end trace. Each trace represents the complete lifecycle of a request; from initiation to final response; across all services it traverses. This gives teams the context they need to investigate failures, analyze performance bottlenecks, and validate API behavior in production, without relying on fragmented logs or manual correlation.

### Key Benefits and Concepts

#### How It Works

Traffic hooks are installed at each point in your infrastructure; gateways \(Kong plugin, Azure policy, Apigee shared flow\) and microservices \(via agent\). These hooks capture API traffic and forward it to APIwiz. Each request carries a Trace ID that is propagated across all services, allowing APIwiz to correlate and reconstruct the full trace.