---
title: "Manage compliance"
---

Use the **Manage** menu to configure how APIwiz handles sensitive data during API compliance analysis. The menu includes the following options:

- **Masking**: Configure how sensitive values are masked in API traffic.
- **Encryption**: Enable encryption for sensitive runtime data and configure the encryption key.
- **Ignore Headers**: Exclude specific request headers from compliance validation.

![](https://admin.apiwiz.io/api/guides/images/6a76090645267d9515c9f9e3)

# Configure masking

Use masking to hide sensitive values displayed in API requests and responses.

To configure masking:

1. Select **Manage** \> **Masking**.
  ![](https://admin.apiwiz.io/api/guides/images/6a7609ea45267d9515c9fa69)
1. Select one of the following masking modes:

1. Select the masking target:

1. Enter a key name to identify the field to mask.
1. Review the masking preview.
1. Select **Save**.

APIwiz adds the masking rule to the list and applies it to matching runtime data.

# Configure encryption

Use encryption to protect sensitive runtime request and response data.

To configure encryption:

1. Select **Manage** \> **Encryption**.
  ![](https://admin.apiwiz.io/api/guides/images/6a7609b145267d9515c9fa55)
1. Enable encryption.
1. Configure the encryption key using one of the following:

1. If you use an existing key, enter the encryption key.
1. Enter the following access credentials:

1. Select **Save**.

When you enable encryption, APIwiz stores supported runtime data in encrypted form. Authorized users can decrypt the data when required.

# Ignore headers

Use this option to exclude request headers that shouldn't be considered during compliance validation.

To configure ignored headers:

1. Select **Manage** \> **Ignore Headers**.
  ![](https://admin.apiwiz.io/api/guides/images/6a76094045267d9515c9fa05)
1. Select **\+**.
1. Enter the header name and press Enter to add it.
1. Repeat step 2 to add additional headers, if required.
1. To remove a header, select the delete icon next to it.

APIwiz ignores headers added to this list during API compliance validation.