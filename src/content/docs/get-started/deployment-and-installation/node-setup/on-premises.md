---
title: "On-premises"
---

APIwiz supports on-premises deployment for proof-of-concept \(POC\) environments using installation scripts and a configuration file. This installation provisions the APIwiz platform, MongoDB, TimescaleDB, and RabbitMQ on a single node.

Complete the tasks in this document in order: verify system requirements, prepare the node, upload the license key file and package, create the configuration file, and install the APIwiz platform components.

## System requirements

The node that hosts APIwiz must meet the following minimum specifications.

## Node components and port details

APIwiz consists of the following components, each exposed on a dedicated port. Ensure that all listed ports are free before you start the services.

## Prerequisites

Before you install APIwiz, install the required packages, disable SELinux, and stop the firewalld service.

### Installing required packages

Install the following packages on RHEL or CentOS: `curl`, `wget`, `unzip`, and `tar`.

The installation script supports an offline POC installation as long as you install these prerequisites first.

### Disabling SELinux

Disable SELinux on the node so that it doesn't block APIwiz services.

1. Open the SELinux configuration file:
  ```text
  /etc/selinux/config
  ```
1. Comment out the existing `SELINUX` line, or set it to the following value:
  ```text
  SELINUX=permissive
  ```
1. Restart the server to apply the change.

SELinux runs in permissive mode and no longer blocks APIwiz services.

### Stopping the firewalld service

Stop and disable the firewalld service:

```text
systemctl stop firewalld
systemctl disable firewalld
```

The firewalld service is stopped and disabled.

## Installing APIwiz

### Uploading the license key file

Create a file at `/tmp/license.txt` and add the license key content. Contact the APIwiz team to generate or renew a license.

### Running the bootstrap script

1. Upload the bootstrap script to `/tmp/bootstrap-v3.sh`.
1. Give the script execute permission:
  ```text
  chmod +x /tmp/bootstrap-v3.sh
  ```

### Creating the configuration file

Create the APIwiz installation configuration file from the template below, and update the fields described in the following tables.

**License and domain settings**

**RabbitMQ settings**

**MongoDB settings**

**TimescaleDB settings**

**SMTP settings \(optional\)**

**Workspace settings**

A plan is either `team` or `enterprise`. The default workspace password is `123456789`; you can change it after your first login.

After you create the configuration file, upload it to the node as `/opt/Configfile`.

### Downloading the APIwiz package

Run the bootstrap script with your access key and secret key to download the APIwiz package:

```text
/tmp/bootstrap-v3.sh apiwiz-onprem-package <AccessKey> <SecretKey>
```

This command downloads all packages required to install APIwiz and creates the necessary folder structure.

### Installing the APIwiz platform

**Prerequisites**: The configuration file is uploaded to `/opt/Configfile`, and the APIwiz package is downloaded.

Run the following commands in order.

1. Install MongoDB:
  ```text
  /opt/apiwiz/scripts/bin/install.sh -p mongodb -f /opt/Configfile
  ```
1. Install TimescaleDB. This command installs a PostgreSQL database with the TimescaleDB and `btree_gin` extensions:
  ```text
  /opt/apiwiz/scripts/bin/install.sh -p timescale-standalone -f /opt/Configfile
  ```
1. Install RabbitMQ. This command installs RabbitMQ with the management plugin enabled, and configures a user with the details from the configuration file. The management UI runs on port 15672:
  ```text
  /opt/apiwiz/scripts/bin/install.sh -p rabbitmq -f /opt/Configfile
  ```
1. Install the APIwiz core components:
  ```text
  /opt/apiwiz/scripts/bin/install.sh -p apiwiz-poc-setup -f /opt/Configfile
  ```
1. Import the POC data:
  ```text
  /opt/apiwiz/scripts/bin/install.sh -p poc-data-setup -f /opt/Configfile
  ```

MongoDB, TimescaleDB, RabbitMQ, and the APIwiz core components are installed, and the POC data is loaded.

## Firewall rules

Configure the following firewall rules to allow client access to the APIwiz node.