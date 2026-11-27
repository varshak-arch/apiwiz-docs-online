---
title: "Docker Compose"
---

APIwiz supports deployment through Docker Compose for proof-of-concept \(POC\) environments. This installation uses shell scripts and a configuration file to provision the APIwiz platform, developer portal, and Kong gateway on one or more virtual machines \(VMs\).

Complete the tasks in this document in order: verify system requirements, install prerequisite software, upload the APIwiz package, create the configuration file, run the installation scripts, configure DNS, and, if your deployment uses Kong, install Kong OSS.

## System requirements

The VMs that host APIwiz must meet the following minimum specifications.

## Prerequisites

Before you install APIwiz, install the required packages, Docker and Docker Compose, and the AWS CLI.

### Installing required packages

Install `net-tools`, `zip`, `unzip`, and `curl` \(and `git`, on Fedora\) using the package manager for your operating system.

### Installing Docker and Docker Compose \(Linux\)

Install Docker Engine by following the official Docker documentation for your Linux distribution:

- [Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
- [Debian](https://docs.docker.com/engine/install/debian/)
- [CentOS](https://docs.docker.com/engine/install/centos/)
- [RHEL \(Red Hat Enterprise Linux\)](https://docs.docker.com/engine/install/rhel/)
- [Fedora](https://docs.docker.com/engine/install/fedora/)

To verify the installation:

```text
docker --version
docker compose version
```

To start and enable the Docker service:

```text
sudo systemctl start docker && \
sudo systemctl enable docker

sudo systemctl status docker   ##Verify docker is running
```

Docker and Docker Compose are installed, and the Docker service is running.

### Configuring Docker commands for the user with UID 1000

Grant the user with UID 1000 permission to run Docker commands without `sudo`.

**Prerequisites**: Docker is installed and running.

Do the following:

1. Identify the user with UID 1000:
  ```text
  grep 1000 /etc/passwd
  ```
1. Switch to the user with UID 1000 and add the user to the `docker` group:
  ```text
  sudo usermod -aG docker $USER
  ```
1. Log out of the VM, log back in, and verify that `docker` runs without `sudo`:
  ```text
  docker ps
  ```

The user with UID 1000 can run Docker commands without `sudo`.

### Installing the AWS CLI

This task installs the AWS Command Line Interface \(CLI\) on macOS or Linux.

**Prerequisites**: Python 3.6 or later, for Linux and macOS.

**macOS**

1. Download the AWS CLI package:
  ```text
  curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
  ```
1. Run the installer. This command installs or upgrades the AWS CLI on macOS. If the AWS CLI is already installed, this command upgrades it to the version in the `AWSCLIV2.pkg` file:
  ```text
  sudo installer -pkg AWSCLIV2.pkg -target /
  ```
1. Verify the installation:
  ```text
  aws --version
  ```

**Linux**

1. Download and run the installation file:
  ```text
  curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && unzip awscliv2.zip && sudo ./aws/install
  ```
1. Verify the installation:
  ```text
  aws --version
  ```
1. To run AWS CLI commands as the root user, create a symbolic link:
  ```text
  sudo ln -s /usr/local/bin/aws /usr/local/sbin
  ```
1. Verify the AWS CLI command as the root user:
  ```text
  aws --version
  ```

## Installing APIwiz

### Components and port details

APIwiz consists of the following components, each exposed on a dedicated port. Ensure that all listed ports are free before you start the services.

### Uploading the license key file

APIwiz provides a license token and API keys to run APIwiz applications on your private cloud.

1. Create a file at `/tmp/license.txt`.
1. Add the license token and API keys that APIwiz provided to this file.

### Running the bootstrap script

APIwiz provides a bootstrap script that verifies all prerequisites before the installation starts.

**Prerequisites**: The license key file exists at `/tmp/license.txt`.

1. Upload the bootstrap script to `/tmp/bootstrap-docker-compose-v3.sh`.
1. Give the script execute permission:
  ```text
  chmod +x /tmp/bootstrap-docker-compose-v3.sh
  ```

### Uploading the APIwiz package

You can upload the APIwiz package manually, or let the bootstrap script download it if the VM has internet access.

Do one of the following:

- Upload the `dockercompose-packages.zip` file to the `/tmp` location, then run the bootstrap script:
  ```text
  /tmp/bootstrap-docker-compose-v3.sh
  apiwiz-docker-compose-package-v3
  ```
- If the VM has internet access and no package exists at `/tmp`, run the bootstrap script with your AWS access key and secret key. The script downloads the package automatically:
  ```text
  /tmp/bootstrap-docker-compose-v3.sh
  apiwiz-docker-compose-package-v3 <AWS_ACCESS_KEY> <AWS_SECRET_KEY>
  ```

The bootstrap script extracts the package to the `$HOME/apiwiz/docker-compose-v3` folder structure. This folder contains the configuration file template.

Go to the extracted directory:

```text
cd $HOME/apiwiz/docker-compose
```

The APIwiz package is extracted and ready for configuration.

### Creating the configuration file

Create the APIwiz installation configuration file from the template below, and update the fields described in the following table.

**General settings**

**MongoDB settings**

**TimescaleDB settings**

**RabbitMQ settings**

**Developer portal settings**

**ECR access settings**

**SMTP settings \(optional\)**

**Workspace settings**

A plan is either `team` or `enterprise`. The default workspace password is `ChangeMe#APIwiz`; you can change it during your first login.

### Installing the APIwiz platform

**Prerequisites**: The configuration file is complete.

Run the following commands in order:

1. Start the APIwiz workspace:
  ```text
  ./docker-compose-poc-setup.sh -f Configfile -p poc-node-setup
  ```
1. Insert the POC data:
  ```text
  ./docker-compose-poc-setup.sh -f Configfile -p poc-data-setup
  ```
1. Start the developer portal:
  ```text
  ./docker-compose-poc-setup.sh -f Configfile -p devportal
  ```

The APIwiz workspace, POC data, and developer portal are running.

## Adding a DNS entry

To access the services and workspace that Docker Compose creates, add a local DNS entry to the `/etc/hosts` file.

### Local setup

Open the hosts file:

```text
sudo vi /etc/hosts
```

Add the following entries:

```text
<VM_IP> {WorkspaceName}.{DomainName}
<VM_IP> apibuilder.{DomainName}
```

Example: `acme-local.domain.local`

### Cloud setup

Map the following DNS entries to the VM's public IP address:

- `{WorkspaceName}.{DomainName}`
- `apibuilder.{DomainName}`
- `apisandbox.{DomainName}`

Also map the `AccountsHost` value that you set in the configuration file to the VM's public IP address for `accounts-ui`.

**Firewall rules**

**Workspace URL:** `http://{WorkspaceName}.{DomainName}:80`

**Developer Portal URL:** `http://{WorkspaceName}.{DomainName}:9080`

## Installing Kong OSS 3.5 with APIwiz custom plugins

APIwiz supports Kong OSS 3.5 as its API gateway, with custom plugins for APIwiz integration.

### Resource requirements

Each Kong instance requires the following resources.

### Components and port details

The following ports apply to the default Kong instance.

The following ports apply to an additional Kong instance.

### Deploying Kong OSS 3.5

**Prerequisites**: The configuration file is complete, and the APIwiz platform is installed.

Deploy Kong:

```text
./docker-compose-poc-setup.sh -f Configfile -p kong
```

Kong OSS 3.5 is running with APIwiz custom plugins.

### Kong firewall rules

Follow these firewall rules to allow access to the default Kong instance.

### Kong 2 firewall rules

Follow these firewall rules to allow access to the additional Kong instance.

**Kong Manager UI URI:** `http://{WorkspaceName}.{DomainName}:8002`

## Performing post-installation steps

Create default virtual hosts for the API Builder agent and the API sandbox.

1. Create a default virtual host for the `apibuilder-agent`:
  ```text
  curl --location 'http://<WORKSPACENAME>.<DOMAIN>/itorix/v1/api-builder/virtual-host/default' \
  --header 'x-apikey: <X_APIKEY>' \
  --header 'x-tenant: <WORKSPACENAME>' \
  --header 'Content-Type: application/json' \
  --data '{
      "host": "apibuilder.<DOMAIN>",
      "scheme": "HTTP",
      "port": 7080
  }'
  ```
1. Create a default virtual host for the API sandbox:
  ```text
  curl --location 'http://<WORKSPACENAME>.<DOMAIN>/itorix/v1/api-sandbox/virtual-host/default' \
  --header 'x-apikey: <X_APIKEY>' \
  --header 'x-tenant: <WORKSPACENAME>' \
  --header 'Content-Type: application/json' \
  --data '{
      "host": "apisandbox.<DOMAIN>",
      "scheme": "HTTP",
      "port": 7080
  }'
  ```

## Troubleshooting

### Checking component logs

1. List running Docker containers:
  ```text
  docker ps -a   ##Command to list docker containers
  ```
1. View logs for a specific container:
  ```text
  docker logs <container-id/container-name>
  ```

  Alternatively, for backend applications:

  ```text
  tail -f logs/<service_name>/*   ##Only for backend applications
  ```

### Stopping Docker Compose services

**Single service:**

```text
docker compose down core-api
```

Stop both by name:

```text
docker compose down apiwiz-portal-backend apiwiz-portal-v2
```

**All services:**

```text
docker compose down
```

### Applying a configuration change

If you change the configuration for a service — for example, `core-api` — stop the service, edit its configuration file, and restart the service:

```text
docker compose down core-api
## Config change in core-api/config.properties

docker compose up -d core-api
```

## Folder structure reference

APIwiz organizes installed components into the following folders.

**Backend application folders**

```text
apibuilder-agent
apiwiz-runtime-agent-app
apiwiz-gw-connectors
apiwiz-schedulers
apiwiz-logger-agent-app
core-api
linter-agent
monetization-api
notification-agent
```

**UI folders**

```text
core-ui-v2
```

**Developer portal folders**

```text
apiwiz-portal-v2
apiwiz-portal-backend
apiwiz-api-catalog-ui
```

**MongoDB data folder**

```text
data
```

This folder contains the MongoDB data.

**MongoDB user and workspace scripts**

```text
mongo-scripts
```

**TimescaleDB data folder**

```text
postgres/data
```

This folder contains the TimescaleDB data.