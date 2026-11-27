---
title: "eBPF "
---

eBPF \(Extended Berkeley Packet Filter\) is a traffic-capture mode in APIwiz that observes live API traffic directly at the operating system kernel level. By using eBPF, APIwiz captures request and response flows without requiring changes to application code, SDKs, or API gateways.

This approach enables deep API observability, including logging, tracing, and monitoring, by passively observing network traffic as it passes through the server kernel.

eBPF is particularly useful in:

- Brownfield environments
- Legacy systems
- Platforms where application instrumentation is not feasible

### How eBPF works in APIwiz

When eBPF is enabled, APIwiz processes API traffic through the following sequence:

1. The user enables the eBPF traffic-capture mode in APIwiz.
1. APIwiz loads eBPF programs that safely attach to kernel networking hooks.
1. The eBPF programs inspect TCP traffic in real time as API requests and responses pass through the server.
1. Relevant metadata and payload fragments are streamed to a lightweight userspace agent.
1. The agent reconstructs complete HTTP request and response pairs.
1. The system enriches the data with context such as trace IDs, latency information, service identity, and timing details.
1. Structured telemetry data is forwarded to the APIwiz platform for analysis, monitoring, and observability.

### Data captured using eBPF

When eBPF is enabled, APIwiz captures the following API interaction data:

- Request method
- API path
- Query parameters
- Request headers
- Request body
- Response body
- Status codes
- Timestamps
- Latency metrics
- Client and server IP addresses
- Network ports
- Protocol details

APIwiz also supports distributed tracing by generating or reusing trace IDs and span IDs. All captured data is normalized into structured JSON, enabling centralized logging, compliance auditing, security monitoring, and performance diagnostics.

### Platform support

### Limitations

The following limitations apply when using eBPF:

- Requires Linux kernel version 5.5 or later
- Not supported on Windows systems
- May require elevated permissions in restricted or hardened environments
- Kernel hooks may be restricted in managed container platforms

### Common issues during installation

The following issues may occur when installing or enabling the traffic hook:

- Insufficient kernel permissions
- Unsupported kernel versions
- Missing system capabilities in hardened environments
- Conflicts with other kernel-level monitoring tools
- Restricted kernel access in containerized platforms
- Misconfigured network interfaces
- Disabled packet visibility

Resolving these configuration issues usually restores traffic capture functionality.

### Performance impact

Compared to proxy-based monitoring or in-process instrumentation, eBPF provides high-fidelity observability with significantly lower performance impact.

## Set up the APIwiz traffic hook on Windows servers

The Windows HTTP tracer enables APIwiz to capture API request and response traffic directly from Windows servers. The tracer uses WinDivert to intercept network packets and forward structured telemetry data to the APIwiz platform for observability and compliance analysis.

### Tracer package contents

### Windows Server compatibility

The tracer package supports the following Windows Server versions:

- Windows Server 2016
- Windows Server 2019
- Windows Server 2022
- Later versions

### Prerequisites

### Start the tracer

To start the Windows tracer, do the following:

1. Navigate to the tracer installation directory. For example:
  ```text
  C:\tools\apiwiz-http-tracer
  ```

### Stop the tracer

To stop the tracer service, run the following script:

```text
stop-tracer.ps1
```

### Check tracer status

To verify whether the tracer is running, run the following script:

```text
check-tracer.ps1
```

The script returns the current tracer status.

### Configuration parameters

The tracer behavior is controlled using the `config.properties` file. The following table describes the available configuration parameters.

## Set up the APIwiz traffic hook on Linux servers

To enable eBPF-based traffic capture on Linux servers, install the required dependencies and build BCC from source.

### Prerequisites

### Python dependencies

### Kernel compatibility

### Install system dependencies

The following example applies to an Amazon Linux 2 EC2 instance.

```text
sudo yum-config-manager --enable epel
sudo yum install -y bison cmake3 ethtool flex git iperf libstdc++-static python-netaddr python-cachetools gcc gcc-c++ make zlib-devel elfutils-libelf-devel
sudo yum install -y luajit luajit-devel
sudo yum install -y ncurses-devel
yum install -y clang llvm llvm-devel llvm-static clang-devel clang-libs
```

### Install additional Python dependencies

```text
sudo pip install pyroute2
```

### Build BCC from source

Clone and build BCC on the target system:

```text
git clone https://github.com/iovisor/bcc.git
pushd .
mkdir bcc/build
cd bcc/build
cmake3 ..
time make
sudo make install
popd
```