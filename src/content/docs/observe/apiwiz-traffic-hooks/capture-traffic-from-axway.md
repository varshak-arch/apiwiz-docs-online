---
title: "Capture traffic from Axway "
---

The Axway Compliance Plugin enables compliance checks, distributed tracing, and event logging on API traffic that passes through the Axway API Gateway. The plugin works through three policies that you create in Axway Policy Studio: a Global Request policy, a Routing policy, and a Global Response policy. Together, these policies capture request and response data, apply security checks, and send observability events to your compliance and logging systems.

If a policy already exists for the Global Request, Routing, or Global Response stage, add the plugin logic to the existing flow before the end policy instead of creating a new one.

**Prerequisites**

- Access to Axway Policy Studio with permissions to create and edit policies.
- Access to Axway API Manager with permissions to configure server settings and deploy policies.

## Creating the Global Request policy

The Global Request policy stores incoming request data so that later policies in the flow can use it. Create this policy first, because the Routing and Global Response policies depend on the data it stores.

To create the Global Request policy:

1. In Policy Studio, select an existing container, or create a container and name it.
1. In the container, add a **Scripting Language** filter.
1. In the **Scripting Language** filter, enter the following Groovy script:
  ```groovy
  import com.vordel.trace.Trace;
  import java.net.URL;

  def invoke(msg){
      msg.put("gateway.content.body", msg.get("content.body"))
      msg.put("gateway.request.headers", msg.get("http.headers"))
      msg.put("gateway.request.query", msg.get("http.raw.querystring"))
      def urlObj = msg.get("http.request.url")
      if (urlObj instanceof URL) {
          def scheme = urlObj.getProtocol()
          def host = urlObj.getHost()
          def port = (urlObj.getPort() > 0) ? urlObj.getPort() : urlObj.getDefaultPort()
          msg.put("gateway.request.scheme", scheme)
          msg.put("gateway.request.host", host)
          msg.put("gateway.request.port", port.toString())
          msg.put("gateway.request.timestamp", System.currentTimeMillis())
      } else {
          Trace.error("Not a URL object: " + urlObj)
      }
      return true
  }
  ```

The Global Request policy stores the request body, headers, query string, and URL components for use by the Routing and Global Response policies.

## Creating the Routing policy

The Routing policy runs a security check on the stored request, forwards the request to its destination, and returns a Forbidden response if the security check fails.

**Prerequisites**

- Values for `{{securityURL}}` and `{{workspaceId}}`, provided by your security or compliance system.

To create the Routing policy:

1. In Policy Studio, select an existing container, or create a container and name it.
1. In the container, add a **Store Message** filter.
1. On the success path from the **Store Message** filter, add a **Scripting Language** filter.
1. In the **Scripting Language** filter, enter the following Groovy script. Replace `{{securityURL}}` and `{{workspaceId}}` with your actual values:
  ```groovy
  import com.vordel.mime.HeaderSet;
  import java.util.Random;
  import groovy.json.JsonSlurper;
  import java.lang.Long;
  import com.vordel.trace.Trace;
  import java.io.ByteArrayOutputStream;
  import java.net.URL;
  import com.fasterxml.jackson.databind.ObjectMapper;
  import com.vordel.mime.HeaderSet;
  import com.vordel.mime.QueryStringHeaderSet;
  import java.net.URLDecoder;
  import com.vordel.dwe.ByteArrayContentSource;
  import java.lang.String;
  import java.lang.Object;
  import java.util.HashMap;
  import java.util.Iterator;
  import java.util.LinkedList;
  import com.vordel.mime.Multipart;
  import com.vordel.dwe.InputStreamContentSource;
  import com.vordel.mime.ContentType;
  import com.vordel.mime.RawBody;
  import com.vordel.mime.Body;
  import org.apache.commons.io.IOUtils;
  import org.glassfish.jersey.media.multipart.FormDataContentDisposition;

  def invoke(msg) {
      def enableSecurity = false;
      def capturePayload = true;
      msg.put("gateway.security.enabled", enableSecurity)
      msg.put("gateway.capture.payload", capturePayload)
      HeaderSet requestHeaderSet = new HeaderSet(msg.get('http.headers'));
      def spanId = requestHeaderSet.get("spanid");
      def traceId = requestHeaderSet.get("traceid");
      def value = Long.toUnsignedString(new Random().nextLong(),16);
      if(spanId != null){
          requestHeaderSet.addHeader("parentspanid",spanId);
      }
      if(traceId == null){
          requestHeaderSet.addHeader("traceid",value);
      }
      requestHeaderSet.setHeader("spanid",value);
      msg.put("request.headers",requestHeaderSet);
      msg.put("http.headers",requestHeaderSet);
      if(enableSecurity){
          HeaderSet requestHeaderSet1 = new HeaderSet(msg.get('request.headers'))
          def requestHeadersMap = new HashMap<String,Object>();
          Iterator<String>requestIterator = requestHeaderSet1.getHeaderNames();
          while(requestIterator.hasNext()){
              String name = requestIterator.next();
              requestHeadersMap.put(name, requestHeaderSet1.get(name))
          }
          def formParamsMap = new HashMap<String,Object>();
          def query_pairs = new HashMap<String,String>();
          def queryString = msg.get('http.raw.querystring');
          if(queryString !=null){
              String[] pairs = msg.get('http.raw.querystring').split("&");
              for (String pair : pairs) {
                  int idx = pair.indexOf("=");
                  String key = idx > 0 ? URLDecoder.decode(pair.substring(0, idx), "UTF-8") : pair;
                  String qvalue = idx > 0 && pair.length() > idx + 1 ?
                      URLDecoder.decode(pair.substring(idx + 1),"UTF-8") : null;
                  query_pairs.put(key,qvalue);
              }
          }
          def requestBody = msg.get("store.content.body");
          def requestBodyAsString;
          if(requestBody != null){
              if (requestBody instanceof Multipart) {
                  def iterator = requestBody.getParts().iterator();
                  while (iterator.hasNext()) {
                      def item = iterator.next();
                      def headers = item.getHeaders();
                      def contDispValue = headers.getHeader("Content-Disposition");
                      def contentType = headers.getHeader("Content-Type");
                      def contDisp = new FormDataContentDisposition(contDispValue);
                      def name = contDisp.getName();
                      def fileName = contDisp.getFileName();
                      def inputStream = item.getSource().getInputStream();
                      if (item instanceof RawBody) {
                          def writer = new StringWriter();
                          if(fileName != null) {
                              readFile(inputStream, name, contentType, formParamsMap);
                          } else {
                              IOUtils.copy(inputStream, writer,"UTF-8");
                              def content = writer.toString();
                              formParamsMap.put(name,content);
                          }
                      } else {
                          readFile(inputStream, name, contentType, formParamsMap);
                      }
                  }
              } else {
                  def requestBAOS = new ByteArrayOutputStream();
                  requestBody.write(requestBAOS, 0);
                  def requestCT = requestBody.getContentType();
                  def requestEncoding = requestCT?.get("charset");
                  requestBodyAsString = requestEncoding ?
                      new String(requestBAOS.toByteArray(), requestEncoding) :
                      new String(requestBAOS.toByteArray());
                  requestBAOS.close();
              }
          }
          def complianceDataMap = [
              complianceCheckDTO:[
                  request: [
                      headerParams: requestHeadersMap,
                      requestBody: requestBodyAsString,
                      verb: msg.get("http.request.verb"),
                      path: msg.get("http.request.path"),
                      hostname: msg.get("http.destination.host"),
                      queryParams: query_pairs,
                      formParams: formParamsMap
                  ],
                  response: [:]
              ]
          ]
          def mapper = new ObjectMapper()
          def jsonOutput = mapper.writeValueAsString(complianceDataMap)
          def post = new URL("{{securityURL}}").openConnection();
          post.setRequestMethod("POST")
          post.setDoOutput(true)
          post.setRequestProperty("tenant", "{{workspaceId}}")
          post.setRequestProperty("Content-Type", "application/json")
          post.getOutputStream().write(jsonOutput.getBytes("UTF-8"));
          def postRC = post.getResponseCode();
          String responseBody = ""
          if (postRC >= 200 && postRC < 300) {
              responseBody = post.inputStream?.getText("UTF-8")
          } else {
              responseBody = post.errorStream?.getText("UTF-8")
          }
          try {
              def json = new JsonSlurper().parseText(responseBody ?: '{}')
              if (json.block == true) {
                  msg.put("http.response.status", 403)
                  msg.put("http.response.reason", "Forbidden")
                  def errorJson = '{"message":"Malicious payload detected. Your transaction has been logged and sent for cyber-forensic analysis."}'
                  def bodyBytes = errorJson.getBytes("UTF-8")
                  def contentType = new ContentType(ContentType.Authority.MIME, "application/json; charset=UTF-8")
                  def contentSource = new ByteArrayContentSource(bodyBytes)
                  def bodyObject = Body.create(null, contentType, contentSource)
                  msg.put("content.body", bodyObject)
                  msg.put("Content-Type", "application/json")
                  return false
              }
              return true
          } catch (Exception e) {
              Trace.error("Script Error: " + e.message)
              msg.put("http.response.status", 500)
              def errorJson = '{"error":"Internal Gateway Script Error"}'
              def bodyBytes = errorJson.getBytes("UTF-8")
              def contentType = new ContentType(ContentType.Authority.MIME, "application/json; charset=UTF-8")
              def contentSource = new ByteArrayContentSource(bodyBytes)
              def bodyObject = Body.create(null, contentType, contentSource)
              msg.put("content.body", bodyObject)
              msg.put("Content-Type", "application/json")
              return false
          }
      }
      return true;
  }

  def readFile(inputStream, name, contentType, formParamsMap){
      def contentTypeObj = new ContentType(ContentType.Authority.MIME, contentType);
      def rawBody = Body.create(null, contentTypeObj, new InputStreamContentSource(inputStream));
      def formBAOS = new ByteArrayOutputStream();
      def formBodyAsString;
      rawBody.write(formBAOS, 0);
      def formCT = rawBody.getContentType();
      def formEncoding = formCT?.get("charset");
      formBodyAsString = formEncoding ?
          new String(formBAOS.toByteArray(), formEncoding) :
          new String(formBAOS.toByteArray());
      formBAOS.close();
      formParamsMap.put(name,formBodyAsString);
  }
  ```
1. On the success path from the script filter, add a **Connect to URL** filter with the following details:

1. On the failure path from the script filter, add a **Reflect Message** filter and set the HTTP status response code to `403`.

The Routing policy is complete. The following diagram shows the resulting filter flow:

`Store Message → Scripting Language → (success) Connect to URL` and `Scripting Language → (failure) Reflect Message`.

**Configuration variables**

## Creating the Global Response policy

The Global Response policy builds an observability event from the stored request and the outgoing response, then sends the event asynchronously to your event and logging system.

**Prerequisites**

- Values for `{{eventUrl}}`, `{{workspaceId}}`, `{{clientSecret}}`, and `{{indexName}}`, provided by your observability system.

To create the Global Response policy:

1. In Policy Studio, select an existing container, or create a container and name it.
1. In the container, add a **Scripting Language** filter.
1. In the **Scripting Language** filter, enter the following Groovy script. Replace `{{eventUrl}}`, `{{workspaceId}}`, `{{clientSecret}}`, and `{{indexName}}` with your actual values:
  ```groovy
  import com.vordel.trace.Trace
  import java.io.ByteArrayOutputStream
  import java.net.URL
  import java.net.URLDecoder
  import java.util.concurrent.Executors
  import com.fasterxml.jackson.databind.ObjectMapper
  import com.vordel.mime.*
  import org.apache.commons.io.IOUtils
  import org.glassfish.jersey.media.multipart.FormDataContentDisposition

  def invoke(msg) {
      def capturePayload = msg.get("gateway.capture.payload")?.toString()?.toBoolean()

      def readBodyAsString = { body ->
          if (body == null) return ""
          def baos = new ByteArrayOutputStream()
          body.write(baos, 0)
          def ct = body.getContentType()
          def encoding = ct?.get("charset")
          def text = encoding ? new String(baos.toByteArray(), encoding) : new String(baos.toByteArray())
          baos.close()
          return text
      }

      def parseMultipart = { multipart ->
          def map = [:]
          multipart?.getParts()?.each { part ->
              def headers = part.getHeaders()
              def cdHeader = headers.getHeader("Content-Disposition")
              if (!cdHeader){
                  return map
              }
              def disp = new FormDataContentDisposition(cdHeader)
              def name = disp.getName()
              def filename = disp.getFileName()
              def input = part.getSource().getInputStream()
              try {
                  if (!filename) {
                      def sw = new StringWriter()
                      IOUtils.copy(input, sw, "UTF-8")
                      map[name] = sw.toString()
                  } else {
                      map[name] = readStreamAsString(input, headers.getHeader("Content-Type"))
                  }
              } finally {
                  input.close()
              }
          }
          return map
      }

      def readStreamAsString = { input, contentType ->
          try {
              def ctObj = new ContentType(ContentType.Authority.MIME, contentType)
              def body = Body.create(null, ctObj, new com.vordel.dwe.InputStreamContentSource(input))
              return readBodyAsString(body)
          } catch (Throwable t) {
              def sw = new StringWriter()
              IOUtils.copy(input, sw, "UTF-8")
              return sw.toString()
          }
      }

      def headerSetToMap = { hs ->
          def out = [:]
          if (hs == null) return out
          def it = hs.getHeaderNames()
          while (it.hasNext()) {
              def name = it.next()
              def val = hs.get(name)
              out[name.toLowerCase()] = val ? val.toString() : null
          }
          return out
      }

      def parseQuery = { qs ->
          def map = [:]
          if (!qs) return map
          qs.split("&").each { pair ->
              def idx = pair.indexOf("=")
              def key = idx > 0 ? URLDecoder.decode(pair.substring(0, idx), "UTF-8") : pair
              def val = (idx > 0 && pair.length() > idx+1) ?
                  URLDecoder.decode(pair.substring(idx+1), "UTF-8") : null
              map[key] = val
          }
          return map
      }

      def responseBodyAsString = ""
      if(capturePayload){
          responseBodyAsString = readBodyAsString(msg.get("content.body"))
      }
      def gatewayReq = msg.get("gateway.content.body")
      def gatewayFormParams = gatewayReq instanceof Multipart ? parseMultipart(gatewayReq) : [:]
      def gatewayRequestBodyAsString = ""
      if(capturePayload){
          gatewayRequestBodyAsString = gatewayReq instanceof Multipart ? "" : readBodyAsString(gatewayReq)
      }
      def gatewayRequestHeaders = headerSetToMap(new HeaderSet(msg.get("gateway.request.headers")))
      def responseHeaders = headerSetToMap(new HeaderSet(msg.get("http.headers")))
      def gatewayQueryParams = parseQuery(msg.get("gateway.request.query"))

      def observabilityEvent = [
          metadata:[
              hook: "PLUGIN",
              applicationType: "GATEWAY",
              gateway: "AXWAY",
              traceId: gatewayRequestHeaders["traceid"],
              spanId: gatewayRequestHeaders["spanid"],
              parentSpanId: gatewayRequestHeaders["parentspanid"],
              requestTimestamp: msg.get("gateway.request.timestamp"),
              responseTimestamp: System.currentTimeMillis(),
              serverHost: msg.get("gateway.request.host"),
              capturePayload: capturePayload,
              security: msg.get("gateway.security.enabled"),
          ],
          data:[
              request: [
                  headerParams: gatewayRequestHeaders,
                  requestBody: gatewayRequestBodyAsString,
                  verb: msg.get("http.request.verb"),
                  path: msg.get("http.request.path"),
                  hostname: msg.get("gateway.request.host"),
                  port: msg.get("gateway.request.port"),
                  scheme: msg.get("gateway.request.scheme"),
                  queryParams: gatewayQueryParams,
                  formParams: gatewayFormParams
              ],
              response: [
                  statusCode: msg.get("http.response.status"),
                  headerParams: responseHeaders,
                  responseBody: responseBodyAsString
              ]
          ]
      ]

      try {
          def mapper = new ObjectMapper()
          def eventJson = mapper.writeValueAsString(observabilityEvent)
          new Thread({
              try {
                  def conn = new URL("{{eventUrl}}").openConnection()
                  conn.with {
                      requestMethod = "POST"
                      doOutput = true
                      setRequestProperty("x-client-id", "{{workspaceId}}")
                      setRequestProperty("x-client-secret", "{{clientSecret}}")
                      setRequestProperty("index-name", "{{indexName}}")
                      setRequestProperty("Content-Type", "application/json")
                      outputStream.withCloseable { os -> os.write(eventJson.getBytes("UTF-8")) }
                      def code = responseCode
                      inputStream?.close()
                      Trace.info("Async event OK: " + code)
                  }
              } catch (Exception ex) {
                  Trace.error("Async event failed: ${ex.message}")
              }
          } as Runnable).start()
      } catch (Exception e) {
          Trace.error("Async error: ${e.message}")
      }
      return true
  }
  ```

The Global Response policy sends the observability event on a separate thread, so it doesn't block the response to the caller.

**Configuration variables**

## Activating the policies

After you create the three policies, attach them to their stages and deploy the configuration.

To activate the policies:

1. In API Manager, in the server settings, add the Global Request, Routing, and Global Response policies to their respective stages.
1. Deploy the configuration.
1. In the respective stages in API Manager, attach the deployed policies.

Compliance, tracing, and logging are now active on API traffic that passes through the gateway.