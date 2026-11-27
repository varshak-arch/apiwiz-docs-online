---
title: "Messaging systems configuration"
---

Messaging system monitoring uses either the JMX Prometheus Java Agent for JVM-based platforms or native Prometheus metric endpoints. The OpenTelemetry Collector scrapes these metrics and forwards them through the telemetry pipeline.

The Observability module supports monitoring for the following messaging platforms:

- Apache Kafka
- RabbitMQ
- ActiveMQ Artemis

## Apache Kafka

Apache Kafka does not provide a native OpenTelemetry receiver in the OpenTelemetry Collector Contrib distribution. To collect Kafka metrics, configure the JMX Prometheus Java Agent using the KAFKA\_OPTS environment variable.

The JMX Prometheus Java Agent exposes Kafka JMX MBeans as Prometheus metrics. The OpenTelemetry Collector then scrapes these metrics using a Prometheus receiver.

#### Configure the JMX Prometheus Java Agent

Add the following configuration to the Kafka service definition:

```yaml
# docker-compose.yml – Kafka service
environment:
  KAFKA_OPTS: >
    -javaagent:/opt/jmx_exporter/jmx_prometheus_javaagent.jar=7071:/opt/jmx_exporter/kafka.yml

volumes:
  - ./lib/jmx_prometheus_javaagent-1.5.0.jar:/opt/jmx_exporter/jmx_prometheus_javaagent.jar
  - ./cfg/kafka-jmx-exporter-config.yaml:/opt/jmx_exporter/kafka.yml
```

### Configure the OpenTelemetry Collector

```yaml
receivers:
  prometheus/kafka:
    config:
      scrape_configs:
        - job_name: kafka
          scrape_interval: 10s
          static_configs:
            - targets: ['kafka:7071']
```

### Metrics exposed by the JMX Exporter

The Kafka JMX Exporter configuration collects metrics from the following categories:

### Key metrics

## RabbitMQ

RabbitMQ provides a native Prometheus metrics endpoint through the RabbitMQ Prometheus plugin. No additional instrumentation agent is required. When the management image \(rabbitmq:3-management\) is used, the OpenTelemetry Collector scrapes metrics directly from the RabbitMQ Prometheus endpoint.

#### Configure RabbitMQ

The RabbitMQ Prometheus plugin is enabled by default in the RabbitMQ management image. Ensure that port 15692 is accessible to the OpenTelemetry Collector before configuring the receiver.

To verify that the Prometheus plugin is enabled, run the following command:

```bash
rabbitmq-plugins enable rabbitmq_prometheus
```

The metrics endpoint is available at:

```text

http://rabbitmq:15692/metrics

```

### Configure the OpenTelemetry Collector

```yaml
receivers:
  prometheus/rabbitmq:
    config:
      scrape_configs:
        - job_name: rabbitmq
          scrape_interval: 10s
          static_configs:
            - targets: ['rabbitmq:15692']
```

### Key metrics

## ActiveMQ Artemis

ActiveMQ Artemis uses the JMX Prometheus Java Agent for metric collection. Configure the Java agent using the JAVA\_TOOL\_OPTIONS environment variable. The agent exposes broker and JVM metrics through a Prometheus endpoint, which the OpenTelemetry Collector scrapes using a Prometheus receiver.

#### Configure the JMX Prometheus Java Agent

Add the following configuration to the ActiveMQ Artemis service definition:

```yaml
# docker-compose.yml – ActiveMQ service
environment:
  JAVA_TOOL_OPTIONS: >
    -javaagent:/opt/jmx-exporter/jmx_prometheus_javaagent.jar=9404:/opt/jmx-exporter/config.yaml

volumes:
  - ./lib/jmx_prometheus_javaagent-1.5.0.jar:/opt/jmx-exporter/jmx_prometheus_javaagent.jar
  - ./cfg/activemq-jmx-exporter-config.yaml:/opt/jmx-exporter/config.yaml
```

### Configure the OpenTelemetry Collector

```yaml
receivers:
  prometheus/amq:
    config:
      scrape_configs:
        - job_name: activemq
          scrape_interval: 10s
          static_configs:
            - targets: ['activemq:9404']
```

### Metrics exposed by the JMX Exporter

The ActiveMQ Artemis JMX Exporter collects metrics from the following categories:

### Key metrics