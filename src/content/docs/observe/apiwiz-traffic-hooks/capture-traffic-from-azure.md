---
title: "Capture traffic from Azure "
---

Policy fragments let you define reusable policy XML once in Azure API Management \(APIM\) and reference it from any number of APIs through `include-fragment`. This guide covers the two reusable policy fragments used for apiwiz observability, and how to wire them into an API's policy.

- **trace-context-init**: Captures the request start time and body, generates or propagates a W3C `traceparent` header \(`traceId`, `spanId`, `parentSpanId`, `traceFlags`\), and sets service and environment metadata. Sets `apiwiz-inbound-completed` to `true` when it finishes.
- **send-to-apiwiz**: Builds the combined request and response log payload and forwards it as a one-way, fire-and-forget event to the logging endpoint.

Each fragment is created once in APIM and referenced from any API through `include-fragment`, so you maintain the logic in a single place.

**Prerequisites**

- Access to the Azure Portal with permissions to manage the APIM instance's policy fragments and API policies.

## Creating a policy fragment

Create each fragment once in the Azure Portal. Repeat this procedure for both **trace-context-init** and **send-to-apiwiz**.

To create a policy fragment:

1. In the Azure Portal, open your API Management instance.
1. In the left navigation bar, under **APIs**, select **Policy fragments**.
1. Select **\+ Create**.
1. Enter the following details:

1. In the editor, paste the fragment XML from [Fragment definitions](/observe/apiwiz-traffic-hooks/capture-traffic-from-azure/).

1. Select **Create**.

Repeat these steps for the remaining fragment. Once both fragments exist, reference them from an API policy as described in [Wiring the fragments into an API policy](/observe/apiwiz-traffic-hooks/capture-traffic-from-azure/).

## Fragment definitions

### trace-context-init

This fragment sets up request timing, captures the request body for JSON, XML, and text content types, parses or generates a W3C `traceparent` header, and sets the environment and service metadata variables that the **send-to-apiwiz** fragment uses later.

```xml
<fragment>
    <set-variable name="proxyRequestStartTimestamp" value="@(DateTimeOffset.Now.ToUnixTimeMilliseconds())" />
    <set-variable name="proxyRequestBody" value="@{
        var contentType = context.Request.Headers.GetValueOrDefault("Content-Type",
            context.Request.Headers.GetValueOrDefault("content-type", "")).ToLowerInvariant();
        if (contentType.Contains("json") ||
            contentType.Contains("xml") ||
            contentType.StartsWith("text/"))
        {
            return context.Request.Body == null ? null : context.Request.Body.As<string>(preserveContent: true);
        }
        return null;
    }" />
    <set-variable name="traceparent" value="@(context.Request.Headers.GetValueOrDefault("traceparent", ""))" />
    <set-variable name="traceId" value="@{
        var traceparent = context.Variables.GetValueOrDefault<string>("traceparent");
        if (!string.IsNullOrEmpty(traceparent))
        {
            var parts = traceparent.Split('-');
            if (parts.Length == 4 &&
                parts[0].Length == 2 &&
                parts[1].Length == 32 &&
                parts[2].Length == 16 &&
                parts[3].Length == 2)
            {
                return parts[1];
            }
        }
        return Guid.NewGuid().ToString("N");
    }" />
    <set-variable name="spanId" value="@{
        return Guid.NewGuid().ToString("N").Substring(0,16);
    }" />
    <set-variable name="parentSpanId" value="@{
        var traceparent = context.Variables.GetValueOrDefault<string>("traceparent");
        if (!string.IsNullOrEmpty(traceparent))
        {
            var parts = traceparent.Split('-');
            if (parts.Length == 4 &&
                parts[0].Length == 2 &&
                parts[1].Length == 32 &&
                parts[2].Length == 16 &&
                parts[3].Length == 2)
            {
                return parts[2];
            }
        }
        return "";
    }" />
    <set-variable name="traceFlags" value="@{
        var traceparent = context.Variables.GetValueOrDefault<string>("traceparent");
        if(string.IsNullOrEmpty(traceparent)){
            return "01";
        }
        var parts = traceparent.Split('-');
        if(parts.Length == 4){
            return parts[3];
        }
        return "01";
    }" />
    <set-header name="traceparent" exists-action="override">
        <value>@{
            var traceId = context.Variables.GetValueOrDefault<string>("traceId");
            var spanId = context.Variables.GetValueOrDefault<string>("spanId");
            var traceFlags = context.Variables.GetValueOrDefault<string>("traceFlags");
            return $"00-{traceId}-{spanId}-{traceFlags}";
        }</value>
    </set-header>
    <set-variable name="serviceName" value="azure-nonprod" />
    <set-variable name="serviceType" value="AZURE" />
    <set-variable name="serviceCategory" value="GATEWAY" />
    <set-variable name="environment" value="apim_nonproduction" />
    <set-variable name="clientIp" value="@{
        var xff = context.Request.Headers.GetValueOrDefault("X-Forwarded-For", "");
        var first = xff.Split(',')[0].Trim();
        var ip = first.Contains(":") ? first.Split(':')[0] : first;
        return string.IsNullOrWhiteSpace(ip) ? null : ip;
    }" />
    <set-variable name="apiwiz-inbound-completed" value="true" />
</fragment>
```

### send-to-apiwiz

This fragment builds the combined request and response log payload — path, headers, query parameters, body, status code, and trace IDs — and forwards it as a one-way, non-blocking event to the logging endpoint. The payload-building logic is wrapped in a try/catch block, so a malformed payload can't fault the pipeline.

```xml
<fragment>
    <set-variable name="proxyResponseBody" value="@{
        var contentType = context.Response.Headers.GetValueOrDefault("Content-Type",
            context.Response.Headers.GetValueOrDefault("content-type", "")).ToLowerInvariant();
        if (contentType.Contains("json") ||
            contentType.Contains("xml") ||
            contentType.StartsWith("text/"))
        {
            return context.Response.Body == null ? null : context.Response.Body.As<string>(preserveContent: true);
        }
        return null;
    }" />
    <send-one-way-request mode="new" timeout="60">
        <set-url>https://mgt-workspace.eastwestbanker.com/v1/events</set-url>
        <set-method>POST</set-method>
        <set-header name="x-client-secret" exists-action="override">
            <value>dda7211f-181f-480f-afc1-b7bdfeca0d48</value>
        </set-header>
        <set-header name="x-client-id" exists-action="override">
            <value>workspace</value>
        </set-header>
        <set-header name="index-name" exists-action="override">
            <value>apim_nonprod</value>
        </set-header>
        <set-header name="Content-Type" exists-action="override">
            <value>application/json</value>
        </set-header>
        <set-body>@{
            try {
                string requestBody = context.Variables.GetValueOrDefault<string>("proxyRequestBody", null);
                string responseBody = context.Variables.GetValueOrDefault<string>("proxyResponseBody", null);
                long requestTimestamp = context.Variables.GetValueOrDefault<long>("proxyRequestStartTimestamp", DateTimeOffset.Now.ToUnixTimeMilliseconds());
                long responseTimestamp = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                string statusCode = context.Response.StatusCode.ToString();
                string clientIp = context.Variables.GetValueOrDefault<string>("clientIp", null);
                string environment = context.Variables.GetValueOrDefault<string>("environment", null);
                string workFlowId = context.Variables.GetValueOrDefault<string>("messageCorrId", null);
                string traceId = context.Variables.GetValueOrDefault<string>("traceId", null);
                string spanId = context.Variables.GetValueOrDefault<string>("spanId", null);
                string parentSpanId = context.Variables.GetValueOrDefault<string>("parentSpanId", null);
                string serverHost = context.Request.Headers.GetValueOrDefault("Host", (string)null);
                string clientHost = context.Request.Headers.GetValueOrDefault("Referer", (string)null);
                string serverIp = context.Request.IpAddress;
                string applicationName = context.Api.Name;
                string scheme = context.Request.OriginalUrl.Scheme;
                int port = context.Request.Url.Port;
                string serviceName = context.Variables.GetValueOrDefault<string>("serviceName", null);
                string serviceType = context.Variables.GetValueOrDefault<string>("serviceType", null);
                string serviceCategory = context.Variables.GetValueOrDefault<string>("serviceCategory", null);

                var excludedRequestHeaders = new HashSet<string>(StringComparer.OrdinalIgnoreCase) {
                    "gateway-type", "request-timestamp", "response-timestamp", "Authorization"
                };
                var cleanRequestHeaders = new JObject(
                    from m in context.Request.Headers
                    where !excludedRequestHeaders.Contains(m.Key)
                    select new JProperty(m.Key, m.Value[0])
                );

                var excludedResponseHeaders = new HashSet<string>(StringComparer.OrdinalIgnoreCase) {
                    "Authorization"
                };
                var cleanResponseHeaders = new JObject(
                    from m in context.Response.Headers
                    where !excludedResponseHeaders.Contains(m.Key)
                    select new JProperty(m.Key, m.Value[0])
                );

                JObject jObj = new JObject(
                    new JProperty("metadata", new JObject(
                        new JProperty("hook", "PLUGIN"),
                        new JProperty("applicationName", applicationName),
                        new JProperty("applicationType", "GATEWAY"),
                        new JProperty("gateway", "AZURE"),
                        new JProperty("traceId", traceId ?? string.Empty),
                        new JProperty("spanId", spanId ?? string.Empty),
                        new JProperty("parentSpanId", parentSpanId ?? string.Empty),
                        new JProperty("requestTimestamp", requestTimestamp),
                        new JProperty("responseTimestamp", responseTimestamp),
                        new JProperty("clientIp", clientIp),
                        new JProperty("serverIp", serverIp ?? string.Empty),
                        new JProperty("serverHost", serverHost ?? string.Empty),
                        new JProperty("clientHost", clientHost ?? string.Empty),
                        new JProperty("environment", environment ?? string.Empty),
                        new JProperty("monetization", new JObject(
                            new JProperty("enabled", false),
                            new JProperty("appId", string.Empty),
                            new JProperty("packageId", string.Empty)
                        )),
                        new JProperty("security", false),
                        new JProperty("compliance", true),
                        new JProperty("capturePayload", true),
                        new JProperty("workFlowId", workFlowId ?? string.Empty),
                        new JProperty("additionalMetadata", new JObject(
                            new JProperty("service.name", serviceName),
                            new JProperty("service.type", serviceType),
                            new JProperty("service.category", serviceCategory),
                            new JProperty("environment", environment)
                        ))
                    )),
                    new JProperty("data", new JObject(
                        new JProperty("request", new JObject(
                            new JProperty("headerParams", cleanRequestHeaders),
                            new JProperty("queryParams",
                                new JObject(
                                    from m in context.Request.Url.Query
                                    select new JProperty(m.Key, m.Value)
                                )
                            ),
                            new JProperty("formParams", new JObject()),
                            new JProperty("pathParams",
                                new JObject(
                                    from m in context.Request.MatchedParameters
                                    select new JProperty(m.Key, m.Value)
                                )
                            ),
                            new JProperty("verb", context.Request.Method),
                            new JProperty("path", context.Request.OriginalUrl.Path),
                            new JProperty("hostname", context.Request.OriginalUrl.Host),
                            new JProperty("scheme", scheme),
                            new JProperty("port", port),
                            new JProperty("requestBody", requestBody)
                        )),
                        new JProperty("response", new JObject(
                            new JProperty("headerParams", cleanResponseHeaders),
                            new JProperty("responseBody", responseBody),
                            new JProperty("statusCode", statusCode)
                        ))
                    ))
                );
                return new JArray(jObj).ToString();
            } catch (Exception ex) {
                return new JArray().ToString();
            }
        }</set-body>
    </send-one-way-request>
</fragment>
```

## Wiring the fragments into an API policy

After both fragments exist in your APIM instance, reference them from an API's policy, or from the **All APIs** global policy, using `include-fragment`.

```xml
<policies>
    <inbound>
        <include-fragment fragment-id="generate-apiwiz-trace-parent" />
        <ip-filter action="allow">
            <address-range from="20.212.231.1" to="20.212.231.255" />
            <address-range from="203.177.229.1" to="203.177.229.255" />
            <address-range from="210.1.80.1" to="210.1.80.255" />
            <address-range from="103.152.87.1" to="103.152.87.255" />
            <address>20.212.214.112</address>
            <address>125.99.232.13</address>
            <address>20.205.113.95</address>
            <address>13.91.254.72</address>
            <address>34.217.218.221</address>
            <address>58.71.116.119</address>
            <address>175.176.33.23</address>
            <address>104.215.150.200</address>
            <address>104.43.76.199</address>
            <address>136.158.30.65</address>
        </ip-filter>
        <cors>
            <allowed-origins>
                <origin>*</origin>
            </allowed-origins>
            <allowed-methods preflight-result-max-age="300">
                <method>*</method>
            </allowed-methods>
            <allowed-headers>
                <header>*</header>
            </allowed-headers>
            <expose-headers>
                <header>*</header>
            </expose-headers>
        </cors>
    </inbound>
    <backend>
        <forward-request />
    </backend>
    <outbound>
        <include-fragment fragment-id="send-to-apiwiz" />
    </outbound>
    <on-error>
        <choose>
            <when condition="@(context.Variables.GetValueOrDefault<string>(&quot;apiwiz-inbound-completed&quot;, &quot;false&quot;) != &quot;true&quot;)">
                <include-fragment fragment-id="generate-apiwiz-trace-parent" />
            </when>
        </choose>
        <include-fragment fragment-id="send-to-apiwiz" />
    </on-error>
</policies>
```

The policy applies the fragments in the following order:

- **Inbound**: The trace-context fragment runs first, capturing the trace context and request body.
- **Outbound**: After the backend responds, **send-to-apiwiz** builds and sends the combined request and response log event.
- **On-error**: If the pipeline fails before the trace-context fragment completes \(`apiwiz-inbound-completed` isn't `"true"`\), the trace-context fragment runs so trace IDs still exist for the log event. **send-to-apiwiz** then runs so the failure is captured.

## Editing a fragment

Because every API references a fragment through `include-fragment` rather than a copy of its content, an edit to the fragment source applies to every API that references it.

To edit a fragment:

1. In the APIM instance, under **Policy fragments**, select the fragment you want to edit.
1. Before you make changes, check the fragment's **Used in** list to see which APIs the change affects.
1. Edit the fragment content.
1. Select **Save**.

Changes apply immediately to every API that references the fragment through `include-fragment`. You don't need to redeploy individual API policies.