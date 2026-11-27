---
title: "Associating with a gateway product"
---

After you create and publish a package, associate it with a gateway product. A monetization package is a business wrapper: it doesn't physically route or control API traffic. To handle the physical traffic exchange, you bind your package to a gateway product.

**Before you begin,** ensure you have a published monetization package.

To associate a package with a gateway product:

1. Select **API Gateways**, select a gateway, go to the **Manage** tab, select **Product**, create a new product, and assign it to an organization and environment.
1. Bind two core proxies to the product: a **Security Proxy**, which controls OAuth security and authentication, and an **Actual API Proxy**, your physical backend service proxy.
1. In the product settings, map the gateway product to your monetization package.
1. Configure the quota and access policies:
  - **Quota & Interval**: define the call limitations for the product.
  - **Approval Type**: set to automatic, or configure it so you must manually approve requests before credentials are generated.
  - **Access Type**: set to public so the gateway product can be exposed on the external marketplace.
1. Add resource paths as a wildcard \(`/*`\) so all underlying operations and resources of the bound proxies are included under this product.
1. Select **Save** to submit the configuration for review. Once approved, change the gateway product status to **Approved** and select **Save** to make the backend monetization live.