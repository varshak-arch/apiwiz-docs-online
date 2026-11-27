---
title: "5-node setup"
---

This guide provides step-by-step instructions for installing the APIwiz platform across a 5-node cluster. It covers gathering credentials, preparing each node, installing the databases, and deploying the APIwiz platform components.

## Getting the license and credentials

Contact the APIwiz team to get your license key and S3 credentials. You need these credentials to download the APIwiz package.

## System requirements

Each node in the cluster must meet the following minimum specifications.

## Node components and port details

APIwiz distributes its components across the 5 nodes as follows. Ensure that all listed ports are free on their assigned nodes before you start the services.

## Prerequisites

Before you install APIwiz, install the required packages on every node, and disable SELinux and the firewalld service.

### Installing required packages

Install the following packages on all 5 nodes: `curl`, `wget`, `tar`, and `unzip`.

### Disabling SELinux

Disable SELinux on all 5 nodes so that it doesn't block APIwiz services.

1. Open the SELinux configuration file:
   ```text
   /etc/selinux/config
   ```
1. Comment out the existing `SELINUX` line, or set it to the following value:
   ```text
   SELINUX=permissive
   ```
1. Restart the server to apply the change.

SELinux runs in permissive mode on all 5 nodes and no longer blocks APIwiz services.

### Disabling the firewalld service

On all 5 nodes, stop and disable the firewalld service:

```text
systemctl stop firewalld
systemctl disable firewalld
```

The firewalld service is stopped and disabled on all 5 nodes.

## Installing APIwiz

### Uploading the license key file

On Node 1 and Node 2, create a file at `/tmp/license.txt` and add the license key content.

### Creating the configuration file

Create the APIwiz installation configuration file from the template below, and update the fields described in the following tables.

**License and domain settings**

**Node IP settings**

**RabbitMQ settings**

**MongoDB settings**

**TimescaleDB settings**

**SMTP settings \(optional\)**

**Workspace settings**

A plan is either `team` or `enterprise`. The default workspace password is `123456789`; you can change it during your first login.

After you create the configuration file, upload it to all 5 nodes as `/opt/Configfile`.

### Running the bootstrap script

On all 5 nodes:

1. Upload the bootstrap script to `/tmp/bootstrap-v3.sh`.
1. Give the script execute permission:
   ```text
   chmod +x /tmp/bootstrap-v3.sh
   ```

### Downloading the APIwiz package on all nodes

Log in to each of the 5 nodes individually, and run the bootstrap script with your access key and secret key to download the APIwiz package:

```text
/tmp/bootstrap-v3.sh <AccessKey> <SecretKey>
```

This command downloads all packages required to install APIwiz and creates the necessary folder structure.

## Installing the APIwiz platform

### Installing the MongoDB cluster on Node 3, 4, and 5

Configure MongoDB as a three-node cluster.

**Prerequisites**: The APIwiz package is downloaded on Node 3, Node 4, and Node 5.

1. On Node 3, Node 4, and Node 5, add the MongoDB server host entries:
   ```text
   /opt/apiwiz/scripts/bin/install.sh -p mongo-cluster-config -f /opt/Configfile
   ```
1. On Node 3, configure the MongoDB primary:
   ```text
   /opt/apiwiz/scripts/bin/install.sh -p mongo-primary-config -f /opt/Configfile
   ```
1. On Node 4 and Node 5, configure the MongoDB secondaries:
   ```text
   /opt/apiwiz/scripts/bin/install.sh -p mongo-secondary-config -f /opt/Configfile
   ```
1. On Node 3, initiate the primary database:
   ```text
   /opt/apiwiz/scripts/bin/install.sh -p mongo-primary-initiate -f /opt/Configfile
   ```

The MongoDB cluster is running across Node 3, Node 4, and Node 5.

### Installing TimescaleDB on Node 3 and Node 4

Install TimescaleDB with a master-replica configuration.

**Prerequisites**: The APIwiz package is downloaded on Node 3 and Node 4.

1. On Node 3, install TimescaleDB:
   ```text
   /opt/apiwiz/scripts/bin/install.sh -p timescale-master-setup -f /opt/Configfile
   ```
1. On Node 4, install TimescaleDB:
   ```text
   /opt/apiwiz/scripts/bin/install.sh -p timescale-replica-setup -f /opt/Configfile
   ```
1. On Node 3, configure the master node:
   ```text
   /opt/apiwiz/scripts/bin/install.sh -p timescale-master-config -f /opt/Configfile
   ```
1. On Node 4, configure the replica node:
   ```text
   /opt/apiwiz/scripts/bin/install.sh -p timescale-replica-config -f /opt/Configfile
   ```

TimescaleDB is running with a master node on Node 3 and a replica node on Node 4.

### Installing RabbitMQ

Install RabbitMQ and configure the user details from the configuration file.

**Prerequisites**: The APIwiz package is downloaded on Node 3.

On Node 3, run:

```text
/opt/apiwiz/scripts/bin/install.sh -p rabbitmq -f /opt/Configfile
```

RabbitMQ is installed and configured with the user details from `/opt/Configfile`.

### Installing the APIwiz core components on Node 1 and Node 2

Deploy the APIwiz core applications to Node 1 and Node 2.

**Prerequisites**: The APIwiz package is downloaded on Node 1 and Node 2.

1. On Node 1, deploy the core applications:
   ```text
   /opt/apiwiz/scripts/bin/install.sh -p 5node-1-setup -f /opt/Configfile
   ```
1. On Node 2, deploy the core applications:
   ```text
   /opt/apiwiz/scripts/bin/install.sh -p 5node-2-setup -f /opt/Configfile
   ```

The APIwiz core components are running on Node 1 and Node 2.

### Importing POC data

On Node 3, run:

```text
/opt/apiwiz/scripts/bin/install.sh -p poc-data-setup -f /opt/Configfile
```

The POC data is imported.

## Firewall rules

Configure the following firewall rules before you install the APIwiz platform.

## Downloading the APIwiz packages from an external drive

Use this section only if you uploaded the APIwiz binaries to your own storage or drive, instead of using the bootstrap script. Perform these tasks on all 5 servers.

### Creating the folder structure

Log in to each server individually, and create the required folder structure:

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

**Result:** The APIwiz folder structure exists on the server.

### Downloading the binaries to all 5 servers

Download the APIwiz binaries into the `/opt/apiwiz/packages` folder on each server.

### Extracting the binaries and moving them to their folders

**Prerequisites**: The APIwiz binaries are downloaded to `/opt/apiwiz/packages` on the server.

1. Extract the binaries:
   ```text
   unzip -o /opt/apiwiz/packages/packages.zip -d /opt/apiwiz/packages/
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
1. After you complete these steps on all 5 servers, delete the package archive:
   ```text
   rm -f /opt/apiwiz/packages/packages.zip
   ```

The APIwiz binaries are extracted and in place on all 5 servers. You can now proceed with installing the platform, as described in [Installing the APIwiz platform](#bookmark-8ed97bf3-f99c-4ef7-985b-78880341417e).