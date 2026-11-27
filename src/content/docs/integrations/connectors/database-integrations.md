---
title: "Database Integrations"
---

Database Integrations serve as the critical bridge connecting your API management platform \(APIwiz\) directly to your underlying data stores. In modern software architecture, data is distributed across various relational \(SQL\) databases like MySQL, PostgreSQL, Azure SQL, Oracle DB, and Microsoft SQL, as well as NoSQL databases like MongoDB. Database integrations provide a centralized, secure, and standardized mechanism for APIs and internal tools to interact with these backend storage systems without requiring developers to write custom connection logic for every single service.

By configuring these connectors, organizations establish a secure channel between the API gateway/workspace and the database infrastructure. This allows the platform to seamlessly fetch schemas, execute queries, and manage data across multiple environments \(Development, Staging, Production\) directly from a centralized console.

**The Role of Database Integrations in API Management**

Database connectors play an essential role in streamlining the API lifecycle, transitioning an organization from fragmented data silos to a cohesive, data-driven ecosystem. Their primary roles include:

- **Centralization and Governance of Data Access:** Instead of managing database credentials and connection strings locally within individual API source codes, Database Integrations centralize these configurations. This ensures that data access is managed from a single pane of glass, allowing administrators to govern which APIs or teams can communicate with specific databases, thereby reducing the risk of unauthorized access.
- **Facilitating Schema Fetching and API Design:** During the API design phase, developers often need to map API responses to existing database structures. Database integrations allow the platform to directly connect to the database and fetch schemas. This accelerates the design process, ensures API contracts perfectly align with backend data models, and significantly reduces human error when translating database tables into API payloads.
- **Enabling Data-Driven Automation:** APIs are not just data pipelines; they are often triggers for automated workflows. By integrating directly with databases, the platform facilitates data-driven automation, allowing workflows to automatically read, write, or update records based on API events or conditions.
- **Simplifying API Development:** Developing APIs that rely heavily on database operations usually requires extensive boilerplate code for connection pooling, credential management, and protocol handling. Database integrations abstract this complexity away. Developers can focus purely on business logic, knowing that the platform is handling the reliable and secure connectivity to the database.
- **Enhancing Analytics and Reporting:** A comprehensive API management strategy requires deep insights. By linking the API management workspace directly to databases, organizations can power sophisticated analytics and reporting tools. This allows teams to correlate API traffic metrics with backend database performance, providing a holistic view of system health and user behavior.
- **Robust Security and Compliance:** Hardcoding database credentials is a major security vulnerability. Database connectors utilize secure authentication methods, TLS/SSL encryption, and Proxy/SSH tunneling to protect data in transit. This ensures that all communication between the API platform and the database adheres to strict enterprise security standards and compliance mandates.

**Supported Ecosystem**

To facilitate direct data access, schema fetching, and management, the platform supports integrations with widely used relational and NoSQL databases. Supported providers include:

- [MongoDB](#mongodb) **\(NoSQL\):** Connects the platform with MongoDB, enabling applications to securely connect, query, and manage data, as well as fetch schemas.
- [MySQL](#mysql) **\(Relational SQL\):** Integrates with a MySQL database instance to securely manage, query, store data, and fetch database schemas.
- [PostgreSQL](#postgresql) **\(Relational SQL\):** Securely connects PostgreSQL databases with your workflows to fetch schemas, manage data, and enable API-driven operations.
- [Azure SQL](#azure-sql) **\(Relational SQL\):** Enables secure integration with Microsoft’s Azure SQL Database service, allowing workflows to fetch schemas, access, and interact with cloud-hosted SQL databases.
- [Oracle DB](#oracle-db) **\(Relational SQL\):** Provides seamless integration with Oracle Database instances, making it easier to fetch schemas, query, and manage Oracle data within your workflows.
- [Microsoft SQL](#microsoft-sql) **\(Relational SQL\):** Enables integration with SQL Server databases, allowing workflows to securely fetch schemas, query, manage, and interact with data hosted on Microsoft SQL Server.

## **MongoDB**

MongoDB is a highly scalable, flexible NoSQL database that stores data in JSON-like documents rather than traditional relational tables. In the APIwiz platform, the MongoDB connector enables your applications and services to seamlessly connect, query, and manage this unstructured or semi-structured data directly from your workspace. It ensures reliable database connectivity by supporting robust authentication mechanisms, advanced TLS/SSL encryption, and secure Proxy/SSH tunneling for enterprise-grade security.

### **Prerequisites: Preparing to Connect MongoDB**

Before configuring the MongoDB connector in the APIwiz workspace, you must ensure your database environment is prepared and that you have gathered the necessary credentials.

**Step 1: Ensure an Active MongoDB Instance \(Creating via MongoDB Atlas\)**

1. Navigate to the [MongoDB website](https://www.mongodb.com/) and sign up or log in to your [MongoDB Atlas account](https://www.mongodb.com/cloud/atlas/register).
1. Upon logging in, navigate to your organization and **create a new Project**.
1. Within the new project, click the **"Build a Database"** or **"Create"** button on the dashboard.
1. **Select your cluster type** - You can choose between Shared \(Free tier\), Dedicated, or Serverless depending on your enterprise requirements.
1. **Choose your preferred Cloud Provider** \(AWS, Google Cloud, or Azure\) and select a geographic region.
1. Scroll to the bottom, review your cluster name, and click **"Create Cluster"**. *Note: It will take a few minutes for the database instances to be fully provisioned.*

**Step 2: Locate your Cluster Endpoint \(Host\)**

1. From your MongoDB Atlas main dashboard, navigate to the **"Database"** section located under the Deployment menu on the left.
1. Locate your active cluster and click the **"Connect"** button next to it.
1. In the connection modal that pops up, select **"Connect your application"** \(or "Drivers"\).
1. Examine the provided connection string. **Extract the hostname**, which is the section of the URL immediately following the @ symbol and ending before the / \(e.g., cluster0.abcde.mongodb.net\). Document this hostname.

**Step 3: Determine the Connection Scheme**

1. While still viewing the "Connect your application" screen from the previous step, look at the very beginning of the connection string.
1. If the connection string begins with **mongodb\+srv://**, note down your scheme as **mongodb\+srv** \(this is the standard protocol for all modern Atlas clusters\).
1. If the connection string begins with **mongodb://**, note down your scheme as standard **mongodb**.

**Step 4: Prepare Authentication Credentials**

1. Close the connection modal and look at the left-hand navigation menu. Scroll down to the "Security" section and click on **"Database Access"**.
1. Click the **"Add New Database User"** button located in the top right.
1. For the Authentication Method, select **"Password"** \(or SCRAM / x.509 if required by your specific security compliance\).
1. Enter a secure **Username** and **Password**. *Save these credentials securely, as you will input them into the APIwiz workspace.*
1. Under "Database User Privileges", assign the necessary role to this user \(e.g., **"Read and write to any database"**\).
1. Click **"Add User"** at the bottom to finalize the credential creation.

**Step 5: Network Access Configuration**

1. In the left-hand navigation menu under the "Security" section, click on **"Network Access"**.
1. Click the **"Add IP Address"** button.
1. To allow APIwiz to connect, **enter the specific IP addresses provided by your APIwiz platform administrator**.
1. *\(Optional\)* You can click "Allow Access from Anywhere" \(0.0.0.0/0\) if you are just spinning up a temporary testing environment, though this is strictly discouraged for production databases.
1. Click **"Confirm"**. The status will show as "Pending" for a few seconds before switching to "Active", meaning the firewall is now open for your workspace.

### **Connecting MongoDB in the APIwiz Workspace**

Once you have your prerequisites ready, follow these detailed, step-by-step instructions to establish the connection seamlessly.

**Step 1: Locate the MongoDB Connector**

1. Log in to your APIwiz workspace dashboard.
1. Navigate to the **Connectors** module from the main menu.
1. Select the **Database Integrations** category from the available navigation tabs.
1. Locate the **MongoDB** Connector card within this category.

![Database Integrations](../../../../assets/images/integrations/connectors/ac0d48a29a2f.webp)

**Step 2: Initiate the Connection**

1. Click the **Connect** button directly on the MongoDB Connector card.
1. A configuration panel will immediately slide open on the right-hand side of your screen.

**Step 3: Create a New Connection**

1. Inside the right-hand panel, click on the **\+ New Collection** button to begin defining your MongoDB connection environment.

**Step 4: Enter General Configuration Details** - Navigate to the **General** tab and fill out the required fields using the prerequisite information you gathered:

1. **Generate URL:** \(Optional\) If you have a full connection string, you can input it here to auto-generate the remaining fields.
1. **Connector Name:** Enter a unique, identifiable name for this specific MongoDB connector \(e.g., *mongodb-prod-database*\).
1. **Description:** Enter a brief description detailing the purpose of this database to help your team identify it later \(e.g., *Production MongoDB connection for user profiles*\).
1. **Scheme:** Click the dropdown and select the appropriate scheme for your connection \(e.g., *mongodb* or *mongodb\+srv*\).
1. **Host:** Enter the exact MongoDB server hostname or cluster endpoint you located during the prerequisite phase.
1. **Teams \(Optional\):** Click the dropdown to select specific teams to restrict access to this connector. *Note: If no teams are selected, the connector will be accessible to all users in the workspace. If teams are selected, only users belonging to those tagged teams will be able to view and use the connector in workflow modules*.

![Database Integrations](../../../../assets/images/integrations/connectors/b1a7c262a39d.webp)

**Step 5: Configure Authentication Settings \(Auth\)**

1. Navigate to the **Auth** section/tab within the panel.
1. **Authentication Type:** Click the dropdown and select the specific authentication protocol required by your database \(e.g., *Username/Password*, *SCRAM*, or *x.509*\).
1. Fill in the subsequently required credential fields \(such as your database **Username** and **Password**\) associated with the chosen authentication type.

**Step 6: Configure Security and Transport Settings** - If your database requires secure transport protocols or tunneling, configure the following sections:

1. **TLS/SSL:** Navigate to the TLS/SSL section and check the **Enable TLS/SSL Connection** box if you need to secure your MongoDB communication with encrypted data transit.
1. **Proxy/SSH:** Navigate to the Proxy/SSH section and check the **Enable Proxy/SSH Connection** box if you are connecting to your database securely through a proxy or an SSH tunnel. You will be prompted to provide the specific tunneling credentials if enabled.

**Step 7: Save the Configuration**

1. Once every field across all tabs is accurately filled out, click the **Save** button located at the bottom of the configuration panel.
1. Look for a **success message** at the bottom of the screen confirming that the MongoDB connection has been successfully established.

**Step 8: Verify and Manage the Connector**

1. Observe the MongoDB Connector card on your dashboard; the button will have automatically changed from "Connect" to **"View Details"**.
1. Whenever you need to manage this integration in the future, click the **View Details** button. This will open a window displaying your current configuration.
1. From this window, you can seamlessly use the **Edit** function to update your credentials \(e.g., if your database password rotates\) or use the **Delete** function to remove the connection entirely if it is no longer required.

## **MySQL**

The MySQL connector allows you to integrate with a MySQL database instance to manage, query, and store data securely. As a widely used Relational Database Management System \(RDBMS\), MySQL organizes data into structured tables and utilizes Structured Query Language \(SQL\) for robust data manipulation. Within the APIwiz platform, this connector centralizes your data access, allowing APIs and internal tools to interact directly with backend storage to fetch schemas and facilitate data-driven automation. Its configuration is comprehensively split into sections to seamlessly handle connection details, authentication, and advanced security options.

### **Prerequisites: Preparing to Connect MySQL**

Before configuring the MySQL connector in the APIwiz workspace, you must ensure your database environment is prepared and that you have gathered the necessary credentials.

**Step 1: Ensure an Active MySQL Instance**

1. **Navigate to the official **[**MySQL downloads page**](https://dev.mysql.com/downloads/)** -** You can [download the MySQL Community Server for your specific operating system](https://dev.mysql.com/downloads/mysql/).
1. **Follow the installation wizard** for your OS to install the database server on your local machine or Virtual Machine.
1. **Alternatively, use a cloud provider -** If you prefer a managed database, log into AWS \(Amazon RDS\), Google Cloud \(Cloud SQL\), or Azure \(Database for MySQL\) and spin up a new MySQL instance from their respective consoles.
1. **Start the service -** Ensure the MySQL service is actively running and ready to accept connections.

**Step 2: Locate your Hostname and Port**

1. **Identify your IP or Hostname -** If you are running MySQL on a local server or VM, find the public or private IP address of that machine. If you are using a managed cloud service, log into your cloud console, navigate to your database dashboard, and locate the "Endpoint" or "Host" address.
1. **Identify the connection port -** MySQL runs on port 3306 by default. You can refer to [this](https://dev.mysql.com/doc/refman/8.0/en/connecting.html) documentation for the latest and updated steps. Additionally, you can also refer to [this](https://www.mssqltips.com/sqlservertip/2495/identify-sql-server-tcp-ip-port-being-used/) documentation.

**Step 3: Prepare Authentication Credentials** - For security reasons, you should not use your root database password for third-party integrations. You must create a dedicated user for APIwiz.

1. **Log into your database** as the root user via your terminal or a database client tool \(e.g., mysql -u root -p\).
1. **Create a new user** by executing the following SQL command: CREATE USER 'apiwiz\_user'@'%' IDENTIFIED BY 'your\_secure\_password';
1. **Grant the necessary permissions** to allow the platform to fetch schemas and query data: GRANT SELECT, SHOW VIEW ON your\_database\_name.\* TO 'apiwiz\_user'@'%';
1. **Flush the privileges** to apply the changes: FLUSH PRIVILEGES;
1. **Securely document** this new Username and Password.
  - *External Link:* [https://dev.mysql.com/doc/refman/8.0/en/create-user.html](https://dev.mysql.com/doc/refman/8.0/en/create-user.html)

**Step 4: Network Access Configuration**

1. **Obtain APIwiz IPs -** Contact your APIwiz platform administrator to get the specific IP addresses used by your workspace.
1. **Whitelist the IPs -** If your database is hosted on a cloud provider \(like AWS\), navigate to the Security Groups/Firewall settings associated with your database and add an inbound rule allowing TCP traffic on port 3306 exclusively from the APIwiz IP addresses.
1. **Configure local firewalls -** If hosting on your own server, update your ufw or iptables to allow these incoming connections. You can refer to [this](https://dev.mysql.com/doc/refman/8.0/en/firewall.html) documentation for the latest and updated steps.

**Step 5: Gather SSL or SSH Certificates \(Optional\)**  - If your organization mandates encrypted transit or proxy tunneling, gather the necessary files.

1. **For SSL Connections:** Locate and download your ca-cert.pem \(Certificate Authority\), client-cert.pem \(Client Certificate\), and client-key.pem \(Private Key\) files generated by your database server.
1. **For SSH Connections:** Ensure you have the SSH server's hostname, username, and your private .pem or .key file ready to establish a secure tunnel. You can refer to [this](https://dev.mysql.com/doc/refman/8.0/en/encrypted-connections.html) documentation for the latest and updated steps.

### **Connecting MySQL in the APIwiz Workspace**

Once you have your prerequisites ready, follow these detailed, step-by-step instructions to establish the connection seamlessly.

**Step 1: Locate the MySQL Connector**

1. Log in to your APIwiz workspace dashboard.
1. Navigate to the **Connectors** module from the main menu.
1. Select the **Database Integrations** category from the available navigation tabs.
1. Locate the **MySQL** Connector card within this category.

**Step 2: Initiate the Connection**

1. Click the **Connect** button directly on the MySQL Connector card.
1. A configuration panel will immediately slide open on the right-hand side of your screen.

**Step 3: Create a New Connection**

1. Inside the right-hand panel, click on the **\+ New Collection** button to begin defining your MySQL database connection.

**Step 4: Enter General Configuration Details** - Fill out the required general fields using the prerequisite information you gathered:

1. **Generate URL:** \(Optional\) You can auto-generate a connection string from the provided inputs here.
1. **Connector Name:** Enter a unique identifier for this connector \(e.g., *mysql-prod*\).
1. **Description:** Enter a short descriptive text about the database connection \(e.g., *Production MySQL DB connection*\).
1. **Connection Method:** Click the dropdown and select your required method. Options include **Standard \(TCP/IP\)**, **LDAP User/Password**, or **Native Kerberos**.
1. **Teams \(Optional\):** Click the dropdown to select specific teams to restrict access. *Note: Team tagging is optional. If no teams are selected, the connector is accessible to all users. If one or more teams are selected, only users who belong to the tagged teams can view and access the connector in workflow modules*.

**Step 5: Configure Connection Security Details** - Select how you want to securely connect to the database by choosing between the **Parameters**, **SSL**, or **SSH** tabs:

- **Option 1: Parameters \(Standard Connection\)**
  1. **Hostname:** Enter your MySQL server hostname \(e.g., *mysql.company.com*\).
  1. **Port:** Enter the database port \(Default is usually *3306*\).
  1. **Username:** Enter your dedicated database username \(e.g., *dbadmin*\).
  1. **Password:** Enter the password for the database user.
  1. **Database Name:** Enter the specific target database you wish to query \(e.g., *sales\_db*\).

  ![Database Integrations](../../../../assets/images/integrations/connectors/b659540285e3.webp)
- **Option 2: SSL \(Encrypted Connection\)**
  1. **Use SSL:** Click the dropdown to choose between various SSL enforcement modes.
  1. **SSL Key File:** Provide the file path or upload the private key file.
  1. **SSL CA File:** Provide the file path or upload the Certificate Authority \(CA\) file.
  1. **SSL Cert File:** Provide the file path or upload the client certificate file.
- **Option 3: SSH \(Tunneling/Proxy Connection\)**
  1. **SSH Auth Type:** Click the dropdown to select your authentication type \(e.g., *Password* or *Key*\).
  1. **SSH Hostname:** Enter the hostname of your SSH server \(e.g., *ssh.company.com*\).
  1. **SSH Username:** Enter the username for the SSH tunnel \(e.g., *sshuser*\).
  1. **SSH Passphrase:** Enter the passphrase for the SSH key, if applicable.
  1. **SSH Port:** Enter the port for the SSH connection \(Default is usually *22*\).
  1. **SSH Key File:** Provide the file path or upload the SSH private key file.

**Step 6: Save the Configuration**

1. Once every required field across your chosen tabs is accurately filled out, click the **Save** button located at the bottom of the configuration panel.
1. Look for a success message confirming that the MySQL connection has been successfully established.

**Step 7: Verify and Manage the Connector**

1. Observe the MySQL Connector card on your dashboard; the button will have automatically changed from "Connect" to **"View Details"**.
1. Whenever you need to manage this integration in the future, click the **View Details** button. This will open a window displaying your current configuration.
1. From this window, you can seamlessly use the **Edit** function to update your credentials or connection details, or use the **Delete** function to remove the connection entirely if it is no longer required.

## **PostgreSQL**

The PostgreSQL connector allows you to securely connect PostgreSQL databases directly with your APIwiz workflows. As an advanced, open-source object-relational database system, PostgreSQL is known for its robust feature set, reliability, and data integrity. Within the platform, this connector is used to fetch schemas, manage data, and enable API-driven operations directly on your PostgreSQL instances. It ensures flexible and secure integration by supporting multiple connection methods, including direct parameters, SSL encryption, and secure SSH tunneling.

### **Prerequisites: Preparing to Connect PostgreSQL**

Before configuring the PostgreSQL connector in the APIwiz workspace, you must ensure your database environment is prepared and that you have gathered the necessary credentials.

**Step 1: Ensure an Active PostgreSQL Instance**

1. Navigate to the official [PostgreSQL downloads page](https://www.postgresql.org/download/) - Download the installer for your specific operating system \(Windows, macOS, or Linux\).
1. **Install the database -** Follow the installation wizard or package manager instructions to install the database server locally or on a Virtual Machine.
1. **Alternatively, use a managed cloud provider -** Log into AWS \(Amazon RDS for PostgreSQL\), Google Cloud \(Cloud SQL for PostgreSQL\), or Azure \(Azure Database for PostgreSQL\) and provision a new instance from your cloud console.
1. **Start the service -** Ensure the PostgreSQL service is actively running and prepared to accept incoming connections.

**Step 2: Locate your Hostname and Port**

1. **Identify your IP or Hostname -** If hosting locally or on a VM, find the public or private IP address of the machine. If using a managed cloud service, locate the "Endpoint" or "Connection name" in your database dashboard.
1. **Identify the connection port -** PostgreSQL runs on port 5432 by default. Note this down. 

**Step 3: Prepare Authentication Credentials** - For security reasons, do not use the default postgres superuser account for third-party integrations. Create a dedicated user for APIwiz.

1. **Log into your database** using psql or a graphical client tool like pgAdmin.
1. **Create a new user** by executing: CREATE USER apiwiz\_user WITH PASSWORD 'your\_secure\_password';
1. **Grant the necessary permissions** to the user so the platform can fetch schemas and query data: GRANT SELECT ON ALL TABLES IN SCHEMA public TO apiwiz\_user;
1. **Securely document** this new Username and Password.

**Step 4: Network Access Configuration**

1. **Obtain APIwiz IPs.** Get the specific IP addresses used by your APIwiz workspace from your platform administrator.
1. **Configure pg\_hba.conf and postgresql.conf.** If managing your own server, edit the postgresql.conf file to ensure listen\_addresses = '\*' is set. Then, edit the pg\_hba.conf file to add a host record allowing connection from the APIwiz IPs \(e.g., host all apiwiz\_user &lt;APIwiz\_IP\>/32 md5\).
1. **Whitelist the IPs in your firewall.** If using a cloud provider, update your Security Groups or firewall settings to allow inbound TCP traffic on port 5432 from the APIwiz IPs.

**Step 5: Gather SSL or SSH Certificates \(Optional\)** - If your organization mandates encrypted transit or proxy tunneling, gather the required files.

1. **For SSL Connections:** Locate and download your ca.crt \(Certificate Authority\), client.crt \(Client Certificate\), and client.key \(Private Key\) files.
1. **For SSH Connections:** Ensure you have the SSH server's hostname, username, and your private .pem or .key file ready to establish a secure tunnel. 

### **Connecting PostgreSQL in the APIwiz Workspace**

Once you have your prerequisites ready, follow these detailed steps to establish the connection:

**Step 1: Locate the PostgreSQL Connector**

1. Log in to your APIwiz workspace dashboard.
1. Navigate to the **Connectors** module.
1. Select the **Database Integrations** category from the top navigation tabs.
1. Locate the **PostgreSQL** Connector card.

**Step 2: Initiate the Connection**

1. Click the **Connector button** directly on the PostgreSQL card.
1. A configuration window will immediately slide open on the right-hand panel.
1. Click on the **\+ New Collection** button to start a new configuration.

**Step 3: Enter General Configuration Details** - Fill out the required general fields using the prerequisite information you gathered:

1. **Generate URL:** You can use this field to auto-generate the database connection string based on the provided inputs.
1. **Connector Name:** Enter a unique name to identify this PostgreSQL connector \(e.g., *postgres-prod*\).
1. **Description:** Provide an optional description for easier identification \(e.g., *Production Postgres DB connection*\).
1. **Connection Method:** Click the dropdown to select how you want to connect. The options are **Username & Password**, **Radius**, **LDAP User/Password**, or **GSS API**.
1. **Teams \(Optional\):** Click the dropdown to select required teams to control connector access. *Note: If no teams are selected, the connector is accessible to all users. If one or more teams are selected, only users who belong to the tagged teams can view and access the connector in workflow modules*.

**Step 4: Configure Connection Security Details** - Select how you want to securely connect to the database by choosing between the **Parameters**, **SSL**, or **SSH** tabs:

- **Option 1: Parameters \(Standard Connection\)**
  1. **Hostname:** Enter the PostgreSQL database host address you located in the prerequisites.
  1. **Port:** Enter the PostgreSQL server port \(Default is usually *5432*\).
  1. **Username:** Enter your dedicated database username.
  1. **Password:** Enter the password for the database user.
  1. **Database Name:** Enter the target PostgreSQL database name.

  ![Database Integrations](../../../../assets/images/integrations/connectors/aa431e65ecaf.webp)
- **Option 2: SSL \(Encrypted Connection\)**
  1. **SSL Mode:** Select your required SSL mode from the dropdown \(e.g., *require*, *verify-ca*, *verify-full*\).
  1. **SSL Key File:** Upload the private key file.
  1. **SSL CA File:** Upload the Certificate Authority \(CA\) file.
  1. **SSL Certificate Key Password:** Enter the password to unlock the SSL key, if applicable.
  1. **SSL Cert File:** Upload the SSL certificate file.
- **Option 3: SSH \(Tunneling/Proxy Connection\)**
  1. **SSH Auth Type:** Select your authentication type \(e.g., *password* or *key-based*\).
  1. **SSH Hostname:** Enter the host address of the SSH server.
  1. **SSH Username:** Enter the username for SSH access.
  1. **SSH Passphrase:** Enter the passphrase for the SSH key, if applicable.
  1. **SSH Port:** Enter the SSH connection port \(Default is *22*\).
  1. **SSH Key File:** Upload the SSH private key file.

**Step 5: Save the Configuration and Verify**

1. After accurately filling in the required fields across your chosen tabs, click the **Save** button located at the bottom to establish the PostgreSQL connector.
1. You will now see the button on the Connector Card change to **"View Details"**.
1. Whenever you need to manage this integration, click **View Details** to open a window displaying the connector details. From there, you can **Edit** your credentials or **Delete** the connection entirely.

## **Azure SQL**

Azure SQL is a fully managed, secure, and intelligent relational database service provided by Microsoft's cloud platform. The Azure SQL Connector in APIwiz enables secure integration directly with this service, allowing your workflows to access, manage, and interact with your cloud-hosted SQL databases. To ensure flexibility and enterprise-grade security when fetching schemas or executing queries, the connector supports multiple connection methods, including direct parameters, SSL encryption, and secure SSH tunneling.

### **Prerequisites: Preparing to Connect Azure SQL**

Before configuring the Azure SQL connector in the APIwiz workspace, you must ensure your Microsoft Azure environment is prepared and that you have gathered the necessary credentials.

**Step 1: Ensure an Active Azure SQL Database**

1. Navigate to the [Azure Portal](https://portal.azure.com/) and log in with your Microsoft credentials.
1. **Provision a database.** If you do not have one already, click on "Create a resource," search for "Azure SQL," and follow the wizard to provision a new SQL Database.
1. **Verify status.** Ensure the database deployment is complete and the service is actively running.

**Step 2: Locate your Server Hostname and Port**

1. **Find the Server Name -** In the Azure Portal, navigate to your specific SQL Database resource. On the "Overview" page, look at the essential details section to find your "Server name" \(e.g., myazuresql.database.windows.net\).
1. **Identify the Port -** Azure SQL uses port 1433 by default. Note this down along with your Server Name.

**Step 3: Prepare Authentication Credentials**

1. **Set up a dedicated user -** While you can use your server admin login, it is a security best practice to create a dedicated SQL login specifically for APIwiz with only the necessary read/write/schema-fetch permissions.
1. **Document credentials -** Securely note down the **Username** \(e.g., sqladmin@myazuresql\) and your **Password**.

**Step 4: Network Access \(Firewall\) Configuration**

1. **Obtain APIwiz IPs-** Get the specific IP addresses used by your APIwiz workspace from your platform administrator.
1. **Update Firewall Rules -** By default, Azure blocks all external connections to your SQL server. In the Azure Portal, navigate to your SQL server resource, select "Networking" \(or "Set server firewall" under Security\), and add a new firewall rule that whitelists the APIwiz IP addresses. Click "Save".

**Step 5: Prepare your Connection URI**

1. **Locate the Connection String -** In the Azure Portal, go to your SQL Database resource and click on "Connection strings" under the Settings menu.
1. **Copy the JDBC format -** The platform requires the full URI. Look at the JDBC tab and copy the format, inserting your password where prompted \(e.g., jdbc:sqlserver://[myazuresql.database.windows.net:1433](http://myazuresql.database.windows.net:1433);database=salesdb;user=sqladmin@myazuresql;password=StrongPass\!123;encrypt=true;\).

### **Connecting Azure SQL in the APIwiz Workspace**

Once you have your prerequisites ready, follow these detailed steps to establish the connection:

**Step 1: Locate the Azure SQL Connector**

1. Log in to your APIwiz workspace dashboard.
1. Navigate to the **Connectors** module from the main menu.
1. Select the **Database Integrations** category from the top navigation tabs.
1. Locate the **Azure SQL** Connector card.

**Step 2: Initiate the Connection**

1. Click the **Connector button** directly on the Azure SQL card.
1. A configuration window will immediately slide open on the right-hand panel.
1. Click on the **\+ New Collection** button to start a new configuration.

**Step 3: Enter Configuration Details** - Fill out the required fields in the right-hand panel using the prerequisite information you gathered:

1. **Connector Name:** Enter a unique identifier for the Azure SQL connector \(e.g., *azure-sql-01*\).
1. **Description:** Enter optional notes to describe the purpose or usage \(e.g., *Finance database connector*\).
1. **Host Name:** Enter the Azure SQL server host you located in Step 2 of the prerequisites \(e.g., *myazuresql.database.windows.net*\).
1. **Port:** Enter the database port, which is generally *1433* by default.
1. **Username:** Enter your dedicated Azure SQL login username \(e.g., *sqladmin@myazuresql*\).
1. **Password:** Enter the password for the Azure SQL login.
1. **Database Name:** Enter the target database name you wish to connect to in Azure SQL \(e.g., *salesdb*\).
1. **URI:** Paste the full Azure SQL JDBC connection string you prepared in Step 5 of the prerequisites \(e.g., *jdbc:sqlserver://myazuresql.database.windows.net:1433;database=salesdb;user=sqladmin@myazuresql;password=StrongPass\!123;encrypt=true;*\).
1. **Teams \(Optional\):** Click the dropdown to select specific teams to restrict access to this connector. *Note: Team tagging is optional. If no teams are selected, the connector is accessible to all users. If one or more teams are selected, only users who belong to the tagged teams can view and access the connector in workflow modules*.

![Database Integrations](../../../../assets/images/integrations/connectors/b19d62167349.webp)

**Step 4: Save the Configuration and Verify**

1. After accurately filling in all required fields, click the **Save** button located at the bottom of the panel to establish the Azure SQL Connector.
1. You will now see the button on the Connector Card change to **"View Details"**.
1. Whenever you need to manage this integration in the future, click **View Details** to open a window displaying the connector details. From there, you can **Edit** your credentials \(e.g., if your database password rotates\) or **Delete** the connection entirely.

## **Oracle DB**

The Oracle DB connector enables seamless integration with Oracle Database instances, allowing you to connect securely using host details, authentication, and optional SSL/SSH configurations. As a powerful, enterprise-grade relational database management system, Oracle provides robust and highly scalable data storage. Within the APIwiz platform, this connector centralizes your connection logic, making it much easier to fetch database schemas, query data, and manage Oracle data directly within your automated workflows and applications.

### **Prerequisites: Preparing to Connect Oracle DB**

Before configuring the Oracle DB connector in the APIwiz workspace, you must ensure your database environment is prepared and that you have gathered the necessary connection details.

**Step 1: Ensure an Active Oracle Database Instance**

1. **Navigate to the Oracle website** or your Oracle Cloud Infrastructure \(OCI\) console. Click [here](https://www.oracle.com/database/).
1. **Provision the database -** You can download the Oracle Database software for local/VM installation or provision an Autonomous Database via the OCI managed cloud console.
1. **Start the listener service -** Ensure the Oracle listener is actively running and prepared to accept incoming connections over the network.

**Step 2: Locate your Hostname and Port**

1. **Identify the Host address -** Find the public IP address, private IP, or the specific Endpoint URL where your database is hosted. If using OCI, this can be found in the database connection settings of your cloud dashboard.
1. **Identify the connection port -** Oracle Database connections typically run on port 1521 by default. Note both the host and the port.

**Step 3: Prepare Authentication Credentials and Roles**

1. **Create a dedicated user -** Do not use your primary administrator account. Instead, log into your database and create a dedicated user specifically for APIwiz integrations with the necessary read/write capabilities.
1. **Note the credentials -** Securely document the **Username** and **Password**.
1. **Determine the Role -** Identify the specific administrative role required for this connection. You will need to know if the user connects as SYSDBA, SYSBACKUP, SYSOPER, or SYSDG.

**Step 4: Network Access Configuration**

1. **Obtain APIwiz IPs -** Get the specific IP addresses used by your APIwiz workspace from your platform administrator.
1. **Whitelist the IPs -** Update your server's local firewall or your cloud provider's Security Lists \(if using OCI\) to add an ingress rule. This rule must allow inbound TCP traffic on port 1521 exclusively from the APIwiz IP addresses.

**Step 5: Prepare your Connection URI**

1. **Construct the JDBC string -** The APIwiz platform requires the full Uniform Resource Identifier \(URI\) to establish the connection.
1. **Format the URI -** The standard JDBC format usually looks like this: jdbc:oracle:thin:@//\[hostname\]:\[port\]/\[database\_name\]. \(e.g., jdbc:oracle:thin:@//oracle-db.example.com:1521/HRDB\). Keep this string ready.

### **Connecting Oracle DB in the APIwiz Workspace**

Once you have your prerequisites ready, follow these detailed steps to establish the connection:

**Step 1: Locate the Oracle DB Connector**

1. Log in to your APIwiz workspace dashboard.
1. Navigate to the **Connectors** module from the main menu.
1. Select the **Database Integrations** category from the top navigation tabs.
1. Locate the **Oracle DB** Connector card.

**Step 2: Initiate the Connection**

1. Click the **Connector button** directly on the Oracle DB card.
1. A configuration window will immediately slide open on the right-hand panel.
1. Click on the **\+ New Collection** button to start a new configuration.

**Step 3: Enter Configuration Details** - Fill out the required fields in the right-hand panel using the prerequisite information you gathered:

1. **Connector Name:** Enter a unique name to identify the connector \(e.g., *oracle-db-01*\).
1. **Description:** Enter optional notes to describe the connector’s purpose \(e.g., *Connector for HR Oracle DB*\).
1. **Host Name:** Enter the Oracle Database host address you located in Step 2 of the prerequisites \(e.g., *oracle-db.example.com*\).
1. **Port:** Enter the port for the Oracle Database, which is *1521* by default.
1. **Username:** Enter your dedicated Oracle DB login username \(e.g., *hr\_admin*\).
1. **Password:** Enter the password associated with the Oracle DB user.
1. **Database Name:** Enter the target database or schema name you want to connect to \(e.g., *HRDB*\).
1. **Role:** Click the dropdown and select the specific Oracle role to be used for authentication. You must choose between **SYSDBA**, **SYSBACKUP**, **SYSOPER**, and **SYSDG**.
1. **URI:** Paste the full Oracle DB JDBC connection string you prepared in Step 5 of the prerequisites \(e.g., *jdbc:oracle:thin:@//oracle-db.example.com:1521/HRDB*\).
1. **Teams \(Optional\):** Select the required teams from the dropdown to control connector access. *Note: Team tagging is optional. If no teams are selected, the connector is accessible to all users. If one or more teams are selected, only users who belong to the tagged teams can view and access the connector*.

![Database Integrations](../../../../assets/images/integrations/connectors/6110026ab011.webp)

**Step 4: Save the Configuration and Verify**

1. After filling in all the required fields, click the **Save** button located at the bottom to establish the Oracle DB Connector.
1. You will now see the button on the Connector Card change to **"View Details"**.
1. Whenever you need to manage this integration in the future, click on **View Details** to open a window displaying the connector details. From there, you can **Edit** your credentials or **Delete** the connection entirely if it is no longer required.

## **Microsoft SQL**

The Microsoft SQL connector enables seamless integration with Microsoft SQL Server databases, allowing your workflows to securely query, manage, and interact with your structured data. As a robust enterprise-grade relational database management system, SQL Server supports high-transaction enterprise applications. Within the APIwiz platform, this connector centralizes your data access by allowing you to establish a direct connection to your SQL Server instance using host details, database credentials, and advanced connection security options like SSL and SSH.

### **Prerequisites: Preparing to Connect Microsoft SQL**

Before configuring the Microsoft SQL connector in the APIwiz workspace, you must ensure your database environment is prepared and that you have gathered the necessary credentials.

**Step 1: Ensure an Active Microsoft SQL Server Instance**

1. **Navigate to the Microsoft SQL Server downloads page -** You can [download](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) the SQL Server Developer or Express edition for local hosting, or evaluate the Enterprise edition.
1. **Install the database -** Run the SQL Server Installation Center wizard on your server or Virtual Machine.
1. **Alternatively, use a cloud provider -** Provision a SQL Server Virtual Machine via Azure, AWS EC2, or Google Cloud.
1. **Start the service -** Open SQL Server Configuration Manager and ensure the SQL Server service is actively running.

**Step 2: Enable TCP/IP and Locate your Hostname and Port**

1. **Enable TCP/IP connections -** By default, developer editions might have TCP/IP disabled. Open SQL Server Configuration Manager, navigate to SQL Server Network Configuration -\> Protocols for MSSQLSERVER, right-click TCP/IP, and select "Enable".
1. **Locate your Hostname/IP -** Identify the public or private IP address of the machine hosting your SQL Server.
1. **Identify the connection port -** Microsoft SQL Server listens on port 1433 by default. Restart the SQL Server service to apply changes. You can refer to [this](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/configure-a-server-to-listen-on-a-specific-tcp-port) link.

**Step 3: Prepare Authentication Credentials** - You must enable SQL Server Authentication \(Mixed Mode\) and create a dedicated user for APIwiz.

1. **Enable Mixed Mode -** Log into SQL Server Management Studio \(SSMS\) as an administrator. Right-click your server instance, select Properties -\> Security, and choose "SQL Server and Windows Authentication mode".
1. **Create a dedicated login -** Expand the Security folder, right-click Logins, and select "New Login".
1. **Set the details -** Choose "SQL Server authentication", enter a dedicated **Username** \(e.g., apiwiz\_user\), and set a secure **Password**.
1. **Grant permissions -** Under the "User Mapping" page, map this login to your target database and grant it db\_datareader and db\_datawriter roles. Securely document these credentials. You can refer to [this](https://learn.microsoft.com/en-us/sql/relational-databases/security/authentication-access/create-a-login) link.

**Step 4: Network Access Configuration**

1. **Obtain APIwiz IPs -** Ask your APIwiz platform administrator for the specific IP addresses used by your workspace.
1. **Update your Firewall -** Open "Windows Defender Firewall with Advanced Security" on your server. Create a New Inbound Rule for port 1433 \(TCP\) and restrict the scope so it only accepts connections from the APIwiz IP addresses.
1. **Cloud Security Groups -** If hosting on a cloud VM, update the associated Network Security Group to allow inbound TCP traffic on port 1433 exclusively from the APIwiz IPs. You can refer to [this](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/configure-a-windows-firewall-for-database-engine-access) link.

**Step 5: Gather SSL or SSH Certificates \(Optional\)** - If your organization requires encrypted transit or proxy tunneling:

1. **For SSL Connections:** Ensure you have your Client Private Key \(.key\), Certificate Authority \(.pem or .crt\), and Client Certificate files generated and available.
1. **For SSH Connections:** Gather the SSH server's hostname, username, and your private .pem key file ready for secure tunneling.

### **Connecting Microsoft SQL in the APIwiz Workspace**

Once you have your prerequisites ready, follow these detailed steps to establish the connection:

**Step 1: Locate the Microsoft SQL Connector**

1. Log in to your APIwiz workspace dashboard.
1. Navigate to the **Connectors** module from the main menu.
1. Select the **Database Integrations** category from the top navigation tabs.
1. Locate the **Microsoft SQL** Connector card.

**Step 2: Initiate the Connection**

1. Click the **Connector button** directly on the Microsoft SQL card.
1. A configuration window will immediately slide open on the right-hand panel.
1. Click on the **\+ New Collection** button to start a new configuration.

**Step 3: Enter General Configuration Details** Fill out the required general fields in the right-hand panel:

1. **Generate URL:** You can use this field to auto-generate a connection string for the database.
1. **Connector Name:** Enter a unique name to identify this connector \(e.g., *mssql-prod-db*\).
1. **Description:** Enter a short description of the connector’s purpose or usage.
1. **Connection Method:** Click the dropdown and ensure **SQL Authentication** is selected \(this is the only method available\).
1. **Teams \(Optional\):** Click the dropdown to select specific teams to restrict access to this connector. *Note: Team tagging is optional. If no teams are selected, the connector is accessible to all users. If one or more teams are selected, only users who belong to the tagged teams can view and access the connector in workflow modules*.

**Step 4: Configure Connection Security Details** Select how you want to securely connect to the database by choosing between the **Parameters**, **SSL**, or **SSH** tabs:

- **Option 1: Parameters \(Standard Connection\)**
  1. **Hostname:** Enter the server hosting the Microsoft SQL database you located in Step 2 of the prerequisites.
  1. **Port:** Enter the port number for the database connection \(Default is usually *1433*\).
  1. **Username:** Enter your dedicated Microsoft SQL user account.
  1. **Password:** Enter the password for the account.
  1. **Database Name:** Enter the target database to connect to.

![Database Integrations](../../../../assets/images/integrations/connectors/d01bb75e15f1.webp)

- **Option 2: SSL \(Encrypted Connection\)**
  1. **Use SSL:** Click the dropdown to enable or disable SSL.
  1. **SSL Key File:** Provide the file containing the client’s private key.
  1. **SSL CA File:** Provide the Certificate Authority file for validating the server certificate.
  1. **SSL Cert File:** Provide the client certificate file for establishing secure communication.
- **Option 3: SSH \(Tunneling/Proxy Connection\)**
  1. **SSH Auth Type:** Click the dropdown to select the authentication method \(e.g., *Password*, *Identity File*, or *none*\).
  1. **SSH Hostname:** Enter the SSH server hostname.
  1. **SSH Username:** Enter the username for the SSH connection.
  1. **SSH Passphrase:** Enter the passphrase for the SSH key, if applicable.
  1. **SSH Port:** Enter the port number for the SSH connection.
  1. **SSH Key File:** Provide the file containing the SSH private key.

**Step 5: Save the Configuration and Verify**

1. After accurately filling in the required fields across your chosen tabs, click the **Save** button located at the bottom to complete the configuration.
1. You will now see the button on the Connector Card change to **"View Details"**.
1. Whenever you need to manage this integration in the future, click on **View Details** to open a window displaying the connector details. From there, you can **Edit** your credentials or **Delete** the connection entirely if it is no longer required.