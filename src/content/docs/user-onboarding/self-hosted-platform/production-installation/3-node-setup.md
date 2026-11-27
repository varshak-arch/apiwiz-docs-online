---
title: "3-node setup"
---

This guide provides step-by-step instructions for installing the APIwiz platform across a 3-node cluster. It covers gathering credentials, preparing each node, installing the databases, and deploying the APIwiz platform components.

## Getting the license and credentials

Contact the APIwiz team to get your license key and S3 credentials. You need these credentials to download the APIwiz package.

## System requirements

Each node in the cluster must meet the following minimum specifications.

**Number of VMs:** 3

## Node components and port details

APIwiz distributes its components across the 3 nodes as follows. Ensure that all listed ports are free on their assigned nodes before you start the services.

## Prerequisites

Before you install APIwiz, install the required packages on every node, upload the license key file, run the bootstrap script, disable SELinux and the firewalld service, and create the configuration file.

### Installing required packages

Install the following packages on all 3 nodes: `curl`, `wget`, `tar`, and `unzip`.

### Uploading the license key file

On Node 1 and Node 2, create a file at `/tmp/license.txt` and add the license key content.

### Running the bootstrap script

On all 3 nodes:

1. Upload the bootstrap script to `/tmp/bootstrap-v3.sh`.
1. Give the script execute permission:
   ```text
   chmod +x /tmp/bootstrap-v3.sh
   ```

### Disabling SELinux

Disable SELinux on all 3 nodes so that it doesn't block APIwiz services.

1. Open the SELinux configuration file:
   ```text
   /etc/selinux/config
   ```
1. Comment out the existing `SELINUX` line, or set it to the following value:
   ```text
   SELINUX=permissive
   ```
1. Restart the server to apply the change.

SELinux runs in permissive mode on all 3 nodes and no longer blocks APIwiz services.

### Disabling the firewalld service

On all 3 nodes, stop and disable the firewalld service:

```text
systemctl stop firewalld
systemctl disable firewalld
```

The firewalld service is stopped and disabled on all 3 nodes.

### Creating the configuration file

Create the APIwiz installation configuration file from the template below, and update the fields described in the following tables.

**License and domain settings**

**Node IP settings**

**API key settings**

**RabbitMQ settings**

**MongoDB settings**

**TimescaleDB settings**

**SMTP settings \(optional\)**

**Workspace settings**

A plan is either `team` or `enterprise`. The default workspace password is `ChangeMe#APIwiz`; you can change it during your first login.

After you create the configuration file, upload it to all 3 nodes as `/opt/Configfile`.

## Installing APIwiz

### Downloading the APIwiz package on all nodes

Log in to each of the 3 nodes individually, and run the bootstrap script with your access key and secret key to download the APIwiz package:

```text
/tmp/bootstrap-v3.sh <AccessKey> <SecretKey>
```

This command downloads all packages required to install APIwiz and creates the necessary folder structure. Run this command on all 3 nodes.

### Installing the APIwiz platform

**Prerequisites**: All prerequisite tasks are complete.

After you complete the prerequisites, install the APIwiz platform.

#### Installing the databases and RabbitMQ on Node 3

Log in to Node 3, and install MongoDB, TimescaleDB, and RabbitMQ:

```text
/opt/apiwiz/scripts/bin/install.sh -p 3node-3-setup -f /opt/Configfile
```

MongoDB, TimescaleDB, and RabbitMQ are installed and running on Node 3.

#### Installing the APIwiz core components on Node 1 and Node 2

1. Log in to Node 1 and deploy the APIwiz core applications:
   ```text
   /opt/apiwiz/scripts/bin/install.sh -p 3node-1-setup -f /opt/Configfile
   ```
1. Log in to Node 2 and deploy the APIwiz core applications:
   ```text
   /opt/apiwiz/scripts/bin/install.sh -p 3node-2-setup -f /opt/Configfile
   ```

The APIwiz core components are running on Node 1 and Node 2.

## Firewall rules

Configure the following firewall rules before you install the APIwiz platform.

## Downloading the APIwiz packages from an external drive

Use this section only if you uploaded the APIwiz binaries to your own storage or drive, instead of using the bootstrap script. Perform these tasks on all 3 servers.

### Creating the folder structure

Log in to each server individually and create the required folder structure:

```text
mkdir -p /opt/apiwiz && \
mkdir -p /opt/apiwiz/core && \
mkdir -p /opt/apiwiz/scripts && \
mkdir -p /opt/apiwiz/packages && \
mkdir -p /opt/apiwiz/portal && \
mkdir -p /opt/apiwiz/scripts/bin && \
mkdir -p /opt/apiwiz/scripts/lib && \
mkdir -p /opt/apiwiz/core/Config && \
mkdir -p /opt/apiwiz/core/logs && \
mkdir -p /opt/apiwiz/backups && \
mkdir -p /opt/apiwiz/monitor && \
mkdir -p /opt/apiwiz/restore && \
mkdir -p /opt/apiwiz/swagger && \
mkdir -p /opt/apiwiz/temp && \
mkdir -p /opt/apiwiz/backup && \
mkdir -p /opt/apiwiz/ClientConfig && \
mkdir -p /opt/apiwiz/Secret && \
mkdir -p /opt/apiwiz/Datasource
```

The APIwiz folder structure exists on the server.

### Downloading the binaries to all three servers

Download the APIwiz binaries into the `/opt/apiwiz/packages` folder on each server.

### Extracting the binaries and moving them to their folders

**Prerequisites**: The APIwiz binaries are downloaded to `/opt/apiwiz/packages` on the server.

1. Extract the binaries:
   ```text
   unzip -o /opt/apiwiz/packages/packages.zip -d /opt/apiwiz/packages/Apps
   ```
1. Move the install script to the scripts folder, and give it execute permission:
   ```text
   mv /opt/apiwiz/packages/Apps/install.sh /opt/apiwiz/scripts/bin/install.sh
   chmod +x /opt/apiwiz/scripts/bin/install.sh
   ```
1. Copy the resources folder, and move the remaining scripts to the scripts folder:
   ```text
   cp -rvf /opt/apiwiz/packages/Apps/resources /opt/apiwiz/scripts/bin/
   mv /opt/apiwiz/packages/Apps/*.sh /opt/apiwiz/scripts/bin/
   chmod +x /opt/apiwiz/scripts/bin/*.sh
   ```
1. After you complete these steps on all 3 servers, delete the package archive:
   ```text
   rm -rf /opt/apiwiz/packages/packages.zip
   ```

The APIwiz binaries are extracted and in place on all 3 servers. You can now proceed with installing the platform, as described in [Installing the APIwiz platform](#installing-the-apiwiz-platform).

## Performing post-installation steps

### Adding a security rule group collection

*\(Flag: the source documentation includes this heading but no accompanying content. Contact the APIwiz team for the procedure, and add it here once available.\)*

### Checking APIwiz application status

Check the status of each installed component.

**3node-1-setup:**

```text
/opt/apiwiz/scripts/bin/service.sh status 3node-1-setup
```

**3node-2-setup:**

```text
/opt/apiwiz/scripts/bin/service.sh status 3node-2-setup
```

**3node-3-setup:**

### Restarting APIwiz applications

**3node-1-setup:**

```text
/opt/apiwiz/scripts/bin/service.sh restart 3node-1-setup
```

**3node-2-setup:**

```text
/opt/apiwiz/scripts/bin/service.sh restart 3node-2-setup
```

## Installing the APIwiz Developer Portal

*\(Flag: the source documentation ends with this heading and includes no accompanying content. Contact the APIwiz team for the Developer Portal installation procedure for the 3-node setup, and add it here once available.\)*