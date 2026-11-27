---
title: "Database metrics configuration"
---

Database monitoring uses native OpenTelemetry Collector receivers that connect directly to the database endpoint using a dedicated monitoring account with read-only permissions. No sidecar agents or application-level instrumentation are required for supported database platforms.

### Database instrumentation

The Observability module supports both agentless and agent-based instrumentation methods.

## MySQL

MySQL metrics are collected using the OpenTelemetry Collector mysql receiver. The receiver connects directly to the MySQL instance and retrieves metrics from the performance\_schema.

#### Prerequisites

Create a monitoring user and grant the required permissions.

```sql
-- Create the monitoring user
CREATE USER 'otel'@'%' IDENTIFIED BY 'otelpass';

-- Grant required permissions
GRANT PROCESS, REPLICATION CLIENT ON *.* TO 'otel'@'%';
GRANT SELECT ON performance_schema.* TO 'otel'@'%';
FLUSH PRIVILEGES;
```

### Configure the OpenTelemetry Collector

```yaml
receivers:
  mysql/mysql:
    endpoint: mysql:3306
    username: otel
    password: otelpass
    collection_interval: 10s
    initial_delay: 1s
    tls:
      insecure: true

processors:
  attributes:
    actions:
      - key: db.type
        value: mysql
        action: insert

service:
  pipelines:
    metrics:
      receivers: [mysql/mysql]
      processors: [attributes, memory_limiter, batch]
      exporters: [otlp_http]
```

### Key metrics

```sql
-- Create monitoring user (MariaDB syntax)
CREATE USER 'otel'@'%' IDENTIFIED BY 'otelpass';
GRANT PROCESS, REPLICATION CLIENT ON *.* TO 'otel'@'%';
GRANT SELECT ON performance_schema.* TO 'otel'@'%';
FLUSH PRIVILEGES;
```

### Configure the OpenTelemetry Collector

```yaml
receivers:
  mysql/mariadb:
    endpoint: mariadb:3306
    username: otel
    password: otelpass
    collection_interval: 10s
    initial_delay: 1s
    tls:
      insecure: true

processors:
  attributes/mariadb:
    actions:
      - key: db.type
        value: mariadb
        action: insert

service:
  pipelines:
    metrics:
      receivers: [mysql/mariadb]
      processors: [attributes/mariadb, attributes, memory_limiter, batch]
      exporters: [otlp_http]
```

### Key metrics

## PostgreSQL \(TimescaleDB\) Metrics

TimescaleDB runs on PostgreSQL and uses the OpenTelemetry Collector postgresql receiver for metric collection. The receiver connects directly to the PostgreSQL endpoint and collects database-level statistics.

#### Prerequisites

Create a monitoring user and grant the required permissions.

```sql
-- Create monitoring user
CREATE USER otel WITH PASSWORD 'otel_password';

-- Grant required permissions
GRANT SELECT ON pg_stat_database TO otel;
GRANT pg_monitor TO otel;

-- Optional: enable pg_stat_statements for query sampling
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;
```

### Configure the OpenTelemetry Collector

```yaml
receivers:
  postgresql/postgresql:
    endpoint: 192.168.1.8:5432
    transport: tcp
    username: otel
    password: otel_password
    databases:
      - postgres
    collection_interval: 120s
    tls:
      insecure: true

processors:
  attributes/postgresql:
    actions:
      - key: db.type
        value: postgresql
        action: insert

service:
  pipelines:
    metrics:
      receivers: [postgresql/postgresql]
      processors: [attributes/postgresql, attributes, memory_limiter, batch]
      exporters: [otlp_http]
```

### Key metrics

## MongoDB

MongoDB metrics are collected using the OpenTelemetry Collector mongodb receiver. The monitoring account must have the clusterMonitor role.

#### Prerequisites

Create a monitoring user with the required permissions.

```javascript
// Connect to admin database
use admin

// Create monitoring user
db.createUser({
  user: 'otel',
  pwd: 'otel_password',
  roles: [
    { role: 'clusterMonitor', db: 'admin' },
    { role: 'read', db: 'local' }
  ]
})
```

### Configure the OpenTelemetry Collector

```yaml
receivers:
  mongodb:
    hosts:
      - endpoint: mongodb:27017
    username: otel
    password: ${env:MONGODB_PASSWORD}
    collection_interval: 60s
    initial_delay: 1s
    tls:
      insecure: true
```

### Key metrics

### Redis

Redis metrics are collected using the OpenTelemetry Collector redis receiver. The receiver retrieves metrics through the Redis INFO command. No additional agent is required.

#### Configure Redis authentication

```bash
# Redis 6.0+ ACL-based monitoring user
redis-cli ACL SETUSER otel on >redis_password +info +client +slowlog allkeys

# Or for simple password authentication (redis.conf):
# requirepass redis
```

### Configure the OpenTelemetry Collector

```yaml
receivers:
  redis/redis-01:
    endpoint: 10.14.0.116:6379
    collection_interval: 15s
    password: redis
    tls:
      insecure: true
```

### Key metrics

### Oracle Database

Oracle Database metrics are collected using the OpenTelemetry Collector oracledb receiver. The receiver connects directly to the Oracle listener using a dedicated monitoring account.

#### Prerequisites

Create a monitoring user and grant the required permissions.

```sql
-- Create monitoring user (Oracle 12c+)
CREATE USER otel IDENTIFIED BY otel_password;
GRANT CREATE SESSION TO otel;
GRANT SELECT ON v_$session TO otel;
GRANT SELECT ON v_$database TO otel;
GRANT SELECT ON v_$sysstat TO otel;
GRANT SELECT ON v_$instance TO otel;
GRANT SELECT ANY DICTIONARY TO otel;
```

### Configure the OpenTelemetry Collector

```yaml
receivers:
  oracledb:
    datasource: 'oracle://otel:otel_password@oracle-host:1521/ORCL'
    collection_interval: 60s
```

### Key metrics