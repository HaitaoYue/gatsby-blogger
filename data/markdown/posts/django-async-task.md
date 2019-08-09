---
title: "如何全方位监控Linux系统状况"
date: "2019-08-09"
image: "/img/linux-monitor/linux.jpg"
thumb: "/img/linux-monitor/thumb.jpg"
---

作为 linux 系统运维人员，需要实时掌握 linux 系统的运行负载，网络状态，磁盘，内存使用情况。
所以作为开源监控警报系统 prometheus, 官方自然给大家提供了这样一套工具，可以监控多个服务器的实时运行状况，以及实时警告。

Prometheus 提供了 node_exporter 给广大运维人员使用，这是一个相当强大，且统计全面的工具。
https://github.com/prometheus/node_exporter， 这个是 node_exporter 的 github 地址。

启动 node_exporter 非常简单，官方提供了 docker 镜像给我们使用，我们只需要简单的命令就可以把 node_exporter 启动起来。

```bash
$ docker run -d --net="host" --pid="host" -v "/:/host:ro,rslave" quay.io/prometheus/node-exporter --path.rootfs /host
```

net 指定 host，表示我们启动的 container 共享主机的网络信息，可以直接访问主机上的网络信息。

pid 指定 host，container 里面可以获取主机上的所有进程运行信息。

同时，为了了解文件系统的信息，需要把物理机的根目录/挂载到 docker 的/host 目录，并告诉 node_exporter 容器，在 container 里面哪个是物理机的根目录，在这里就是/host。

启动之后，node_exporter 默认监听的端口是 9100，这个时候我们就可以直接测试 metrics 是否可以拿到。

```bash
$ curl http://127.0.0.1:9100/metrics
```

这时候我们就会拿到 node_exporter 所有的 metrics。

接下来，需要配置 prometheus 去哪里采集 node_exporter 的 metrics 信息，添加 target 到 prometheus 里面。

<img src="/img/linux-monitor/1.jpg" />

这里我们添加了一个新的 targets 用于采集 node_exporter 的 metrics。

然后，我们需要添加官方提供 node_exporter 的 grafana dashboard。

https://grafana.com/dashboards/1860

<img src="/img/linux-monitor/2.jpg" />

点击右边的 Copy ID to clipboard.或者是 download json 文件。

<img src="/img/linux-monitor/3.jpg" />

<img src="/img/linux-monitor/4.jpg" />

grafana 自动从官网的仓库中，下载 json 文件，选择数据源。

<img src="/img/linux-monitor/5.jpg" />

服务运行状况图表

<img src="/img/linux-monitor/6.jpg" />

监控的层面

<img src="/img/linux-monitor/7.jpg" />

然后我们可以看到在 grafana 新建的 dashboard 中，会出现从各个层面拿到的实时的运行状态的数据。后面我们就可以通过 grafana 的 alert 或是 prometheus 的 alertmanager 组件来根据设定好的阈值来发警告给运维人员。
