---
title: "Verify agent injection"
---

After the new pod starts, confirm that the injection succeeded by checking the following:

- The environment variable that the operator uses contains the injected configuration:

- The deployment includes the added volumes, volume mounts, and init container. 
- The application logs contain entries such as the following:
  ```text
  --------------Apiwiz ApiLoggingInstrumentationModule-----------------
    traceIdKey - traceid
    spanIdKey - spanid
    parentSpanIdKey - parentspanid
    gatewayTypeKey - gateway-type
    --------------Apiwiz ApiLoggingInstrumentationModuleJavax-----------------
    --------------Apiwiz ApacheHttpAsyncClientInstrumentationModule-----------------
    --------------Apiwiz ApacheHttpAsyncClient5InstrumentationModule-----------------
    --------------Apiwiz ApacheHttpClientInstrumentationModule-----------------
    --------------Apiwiz ApacheHttpClient5InstrumentationModule-----------------
    --------------Apiwiz ApiwizHttpUrlConnectionInstrumentationModule-----------------
    --------------Apiwiz JavaNetHttpHeadersInstrumentationModule-----------------
  ```
- The deployment file includes an additional annotation confirming success:
  ```text
  APIwiz_JAVA_INSTRUMENTATION_STATE: Successful
  ```

These log entries and the added annotation confirm that the Apiwiz Java Agent loaded successfully.

If you injected through JDK\_JAVA\_OPTIONS and the variable existed before instrumentation, verify that its original values are still present. The operator appends the Apiwiz configuration to the existing value and doesn't override it.

### Keep instrumentation in sync with the JavaInstrument resource

You can update the JavaInstrument resource to change the agent image, stop sending a particular log type, or update another configuration value. For example, you can change -Dapiwiz.compliance.enabled from true to false. The operator automatically applies these changes to every deployment it already instrumented. You don't need to remove and reapply the instrumentation annotation.

On each check cycle, the operator compares the configuration in the JavaInstrument resource against the configuration already applied to each instrumented deployment. If the two don't match, the operator updates the deployment to match the current JavaInstrument configuration.

For deployments that have the apiwiz.io/java-instrument-with-jdk: "true" annotation, the operator applies the update to JDK\_JAVA\_OPTIONS, not to JAVA\_TOOL\_OPTIONS. The sync doesn't override the logger index or any custom index names set through annotations.