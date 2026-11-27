---
title: "Overview"
sidebar:
  order: 1
---

An API gateway is a layer that sits in front of your backend services and acts as the single entry point for all API traffic. Instead of exposing backend services directly, all requests pass through the gateway first.

The gateway handles centralized policy management, payload transformation, authentication, authorization, routing, and traffic control; eliminating the need to implement these individually in each backend service.

**AWS API Gateway** is a fully managed service by AWS that lets you create, deploy, and manage secure APIs at scale. It acts as a bridge that connects your API management system with AWS resources such as API Gateway, Lambda, S3, EC2, and CloudWatch, so you can configure, deploy, and manage APIs hosted on AWS without switching between multiple consoles.

By establishing a connection using AWS credentials, the connector provides an authenticated channel for data exchange, configuration synchronization, and service orchestration. It helps enterprises unify cloud and on-premises API management while maintaining centralized governance, visibility, and scalability.

## Key Features

- **Seamless Connectivity**: Establishes a secure connection between the API Gateways platform and AWS services using access credentials and region settings.
- **Centralized Management**: Enables users to configure and monitor AWS-hosted APIs from within the same interface used for other connectors.
- **Automated Deployment**: Simplifies API publishing and deployment to AWS API Gateway with minimal manual configuration.
- **Monitoring and Logging**: Integrates with AWS CloudWatch to collect metrics, performance data, and logs for better observability.
- **Multi-Region Support**: Allows configuration of services in different AWS regions, enabling global scalability.

## Uses of AWS Gateway

- To deploy APIs directly to AWS API Gateway or invoke Lambda functions for serverless architectures.
- To import or synchronize APIs that already exist in AWS for centralized lifecycle management.
- To monitor API performance and usage metrics across environments using AWS CloudWatch integration.
- To standardize hybrid API operations when managing both on-premises and cloud-based services.

## Deployment Patterns

1. **Direct Deployment Pattern**: APIs created in the platform are deployed directly to AWS API Gateway using the connector, enabling automated provisioning and updates.
1. **Hybrid Deployment Pattern**: Combines APIs hosted on AWS with APIs managed in on-premises or other cloud environments, providing unified visibility and control.
1. **Serverless Pattern**: Integrates with AWS Lambda for event-driven API execution without managing backend servers.
1. **Federated Management Pattern**: Allows importing existing AWS APIs into the platform for centralized management, versioning, and policy enforcement.

## Role in the API Management Lifecycle

The AWS Gateway plays a key role in multiple phases of the API Management Lifecycle:

- **Design & Development**: Facilitates integration with AWS services while defining API endpoints and resources.
- **Deployment**: Automates deployment to AWS API Gateway or Lambda, reducing manual steps and ensuring configuration consistency.
- **Security**: Ensures secure connectivity through AWS IAM credentials and encryption standards.
- **Monitoring**: Collects performance metrics and usage logs from AWS CloudWatch for continuous performance tracking, and surfaces call counts and integration latency directly in APIwiz's API Reports view.
- **Governance & Analytics**: Supports policy enforcement, access control, and analytics at scale for AWS-hosted APIs.

## How AWS Gateway fits into APIwiz

Managing gateways like AWS, Apigee, or Axway individually through their own separate interfaces is inefficient. APIwiz acts as a unified platform where you can design APIs, configure gateway settings, and deploy proxies; all from one place without logging into each gateway separately.

The overall flow looks like this:

**Design → Build → Configure → Deploy → Publish as Products**