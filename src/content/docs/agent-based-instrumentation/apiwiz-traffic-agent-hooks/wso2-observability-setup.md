---
title: "WSO2 Observability Setup"
---

The APIwiz WSO2 Observability Java Agent integrates API compliance tracing and observability into your WSO2 API Manager 4.3.0 environment. The agent attaches to the WSO2 startup process and captures API request and response data, forwarding it to the APIwiz Observability module for monitoring and compliance analysis.

### Purpose

Use the APIwiz WSO2 Observability agent to:

- Enable API compliance tracing for WSO2 API Manager 4.3.0
- Capture request and response data from WSO2-managed APIs automatically
- Forward observability data to the APIwiz platform for centralized monitoring and governance

### Key benefits

### Prerequisites

## Get started

To integrate the APIwiz Observability agent into your WSO2 API Manager environment, follow these steps:

### Step 1: Copy the agent JAR to your server or container

To copy the agent JAR file to the WSO2 server, do the following:

1. Download the agent JAR file: [apiwiz-wso2-observablity-javaagent-1.1-RELEASE.jar](https://drive.google.com/file/d/1cihqa0dgMIojs_gjrWqwIF2bJ53lPeUN/view?usp=sharing)
1. Copy the JAR file to the WSO2 library directory:
  **For VM/Server setup:**

   ```bash
   cp apiwiz-wso2-observablity-javaagent-1.1-RELEASE.jar /opt/wso2am-4.3.0/lib/
   ```
1. Note the full absolute path where you placed the JAR file. For example:
   ```text
   /home/wso2carbon/wso2am-4.3.0/lib/apiwiz-wso2-observablity-javaagent-1.1-RELEASE.jar
   ```

### Step 2: Edit the WSO2 startup script

Open the WSO2 startup script located at:

```text
/wso2am-4.3.0/bin/api-manager.sh
```

#### Add the APIwiz agent options

Add the following block immediately after the existing export statements near the top of the script.

```text
export APIWIZ_WSO2_AGENT_OPTS="\
-javaagent:{path-to-apiwiz-observability-agent}/apiwiz-wso2-observablity-javaagent-1.1-RELEASE.jar \
-Dapi.compliance.tracing.traceId=traceid \
-Dapi.compliance.tracing.spanId=spanid \
-Dapi.compliance.tracing.parentSpanId=parentspanid \
-Dapi.compliance.tracing.requestTimeStamp=request-timestamp \
-Dapi.compliance.tracing.responseTimeStamp=response-timestamp \
-Dapi.compliance.tracing.gatewayType=gateway-type \
-Dapi.compliance.detect.api=https://dev-api.apiwiz.io/v1/apiwiz-runtime-agent/compliance/log \
-Dworkspace-id=stage-data \
-Dapi.logger.index-name={{logger-index-name}} \
-Dapi.logger.x-client-secret={{logger-index-secret}} \
-Dapi.compliance.tracing.enable-tracing=true \
-Dx-apikey={{api-key}} \
-Dserver-ip={{server-ip}} \
-Dapiwiz.agent.debug=true \
-Dserver.tomcat.max-http-post-size=200"
```

The following table describes each configuration parameter:

#### Inject the agent into the startup command

Locate the main Java startup loop in the script. The loop starts with the following:

```text
while [ "$status" = "$START_EXIT_STATUS" ]
do
    $JAVACMD \
    -Xbootclasspath/a:"$CARBON_XBOOTCLASSPATH" \
    ...
```

Modify the loop to include $APIWIZ\_WSO2\_AGENT\_OPTS immediately after $JAVACMD:

```text
while [ "$status" = "$START_EXIT_STATUS" ]
do
    $JAVACMD \
    $APIWIZ_WSO2_AGENT_OPTS \
    -Xbootclasspath/a:"$CARBON_XBOOTCLASSPATH" \
    $JVM_MEM_OPTS \
    -XX:+HeapDumpOnOutOfMemoryError \
    -XX:HeapDumpPath="$CARBON_HOME/repository/logs/heap-dump.hprof" \
    $JAVA_OPTS \
    -Dcom.sun.management.jmxremote \
    -classpath "$CARBON_CLASSPATH" \
    $JAVA_VER_BASED_OPTS \
    -Djava.io.tmpdir="$CARBON_HOME/tmp" \
    -Dcatalina.base="$CARBON_HOME/lib/tomcat" \
    -Dwso2.server.standalone=true \
    -Dcarbon.registry.root=/ \
    -Djava.command="$JAVACMD" \
    -Dcarbon.home="$CARBON_HOME" \
    -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager \
    -Dcarbon.config.dir.path="$CARBON_HOME/repository/conf" \
    -Djava.util.logging.config.file="$CARBON_HOME/repository/conf/etc/logging-bridge.properties" \
    -Dcomponents.repo="$CARBON_HOME/repository/components/plugins" \
    -Dconf.location="$CARBON_HOME/repository/conf"\
    -Dcom.atomikos.icatch.file="$CARBON_HOME/lib/transactions.properties" \
    -Dcom.atomikos.icatch.hide_init_file_path=true \
    -Dorg.apache.jasper.compiler.Parser.STRICT_QUOTE_ESCAPING=false \
    -Dorg.apache.jasper.runtime.BodyContentImpl.LIMIT_BUFFER=true \
    -Dcom.sun.jndi.ldap.connect.pool.authentication=simple  \
    -Dcom.sun.jndi.ldap.connect.pool.timeout=3000  \
    -Dorg.terracotta.quartz.skipUpdateCheck=true \
    -Djava.security.egd=file:/dev/./urandom \
    -Dfile.encoding=UTF8 \
    -Djava.net.preferIPv4Stack=true \
    -Dcom.ibm.cacheLocalHost=true \
    -Dorg.opensaml.httpclient.https.disableHostnameVerification=true \
    -Dhttpclient.hostnameVerifier=AllowAll \
    -DworkerNode=false \
    -DenableCorrelationLogs=false \
    -Dcarbon.new.config.dir.path="$CARBON_HOME/repository/resources/conf" \
    -Djavax.xml.xpath.XPathFactory:http://java.sun.com/jaxp/xpath/dom=net.sf.saxon.xpath.XPathFactoryImpl \
    -Dlog4j2.contextSelector=org.apache.logging.log4j.core.async.AsyncLoggerContextSelector \
    -Dorg.ops4j.pax.logging.logReaderEnabled=false \
    -Dorg.ops4j.pax.logging.eventAdminEnabled=false \
    -Djdk.util.zip.disableZip64ExtraFieldValidation=true \
    -Djdk.nio.zipfs.allowDotZipEntry=true \
    org.wso2.carbon.bootstrap.Bootstrap $*
    status=$?
done
```

### Step 3: Restart WSO2 API Manager

After saving the changes to the startup script, restart WSO2 API Manager to apply the agent configuration.