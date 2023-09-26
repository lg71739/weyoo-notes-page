import{_ as l,r as d,o as c,c as r,d as e,e as n,b as a,f as i}from"./app-8feddf91.js";const t={},v=e("h1",{id:"elasticsearch的安装与配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#elasticsearch的安装与配置","aria-hidden":"true"},"#"),n(" ElasticSearch的安装与配置")],-1),o=e("hr",null,null,-1),u=e("h2",{id:"elasticsearch下载",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#elasticsearch下载","aria-hidden":"true"},"#"),n(" ElasticSearch下载")],-1),m=e("br",null,null,-1),p={href:"https://www.elastic.co/downloads/elasticsearch",target:"_blank",rel:"noopener noreferrer"},b=e("br",null,null,-1),h={href:"https://elasticsearch.cn/download/",target:"_blank",rel:"noopener noreferrer"},g=i(`<p>选择linux版,版本7.6.2，下载文件格式为tar.gz。文件名称：elasticsearch-7.6.2-linux-x86_64.tar.gz</p><h2 id="解压与安装" tabindex="-1"><a class="header-anchor" href="#解压与安装" aria-hidden="true">#</a> 解压与安装</h2><h3 id="解压缩" tabindex="-1"><a class="header-anchor" href="#解压缩" aria-hidden="true">#</a> 解压缩</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /data/ELK
<span class="token builtin class-name">cd</span> /data/ELK
<span class="token function">tar</span> <span class="token parameter variable">-zxf</span> /home/elasticsearch-7.6.2-linux-x86_64.tar.gz
<span class="token function">mv</span> elasticsearch-7.6.2/ elasticsearch/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/08/25_15_26_17_fe6c9c27f3794304985ece9ac077b988.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="创建es用户" tabindex="-1"><a class="header-anchor" href="#创建es用户" aria-hidden="true">#</a> 创建ES用户</h3><p>由于Elastic部分版本无法用root用户运行的问题，所以新建一个es用户,密码es</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">useradd</span>  es
<span class="token function">passwd</span> es
<span class="token function">chown</span> <span class="token parameter variable">-R</span> es:es /data/ELK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/08/25_15_19_13_454c1874df464e91abfa936c864b8d4c.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h3><h4 id="进入配置文件目录" tabindex="-1"><a class="header-anchor" href="#进入配置文件目录" aria-hidden="true">#</a> 进入配置文件目录</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> elasticsearch/config/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="修改jvm运行内存" tabindex="-1"><a class="header-anchor" href="#修改jvm运行内存" aria-hidden="true">#</a> 修改JVM运行内存</h4><p>JVM配置文件文件为jvm.options，可根据系统具体需求修改-Xms、-Xmx参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> jvm.options
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>jvm.options文件说明：</p><ul><li>以#开头的行是注释，例如， #this is a comment</li><li>以-开头的行是不依赖JVM版本的选项，例如，-Xmx2g</li><li>以数值:-开头的行是依赖于JVM版本的选项，例如，8:-Xmx2g</li><li>以数值-:加-开头的行是大于等于JVM版本的选项，例如，8-:-Xmx2g</li><li>以数值-数值:-开头的行是在这个JVM版本之间的选项，例如，8-9:-Xmx2g</li></ul></blockquote><h4 id="修改基础配置" tabindex="-1"><a class="header-anchor" href="#修改基础配置" aria-hidden="true">#</a> 修改基础配置</h4><p>ES基础配置保存于文件elasticsearch.yml中，可按需要修改即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> elasticsearch.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>本测试环境修改如下</p>`,20),f=e("p",null,"network.host: 0.0.0.0 #可远程访问",-1),k={href:"http://node.name",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"master_not_discovered_exception",-1),x=e("p",null,'cluster.initial_master_nodes: ["node-base"] #发现当前节点名称',-1),y=e("p",null,"path.conf: /data/ELK/elasticsearch/conf",-1),w=e("p",null,"path.data: /data/ELK/elasticsearch/data",-1),q=e("p",null,"http.port: 9200 #端口号",-1),E=e("p",null,'http.cors.allow-origin: "*" #以下皆是跨域配置',-1),z=e("p",null,"http.cors.enabled: true",-1),M=e("p",null,"http.cors.allow-headers : X-Requested-With,X-Auth-Token,Content-Type,Content-Length,Authorization",-1),S=e("p",null,"http.cors.allow-credentials: true",-1),L=i(`<details class="hint-container details"><summary>elasticsearch.yml常用配置及说明如下:</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>##################### Elasticsearch Configuration Example ##################### 
#
# 只是挑些重要的配置选项进行注释,其实自带的已经有非常细致的英文注释了!
# https://www.elastic.co/guide/en/elasticsearch/reference/current/modules.html
#
################################### Cluster ################################### 
# 代表一个集群,集群中有多个节点,其中有一个为主节点,这个主节点是可以通过选举产生的,主从节点是对于集群内部来说的. 
# es的一个概念就是去中心化,字面上理解就是无中心节点,这是对于集群外部来说的,因为从外部来看es集群,在逻辑上是个整体,你与任何一个节点的通信和与整个es集群通信是等价的。 
# cluster.name可以确定你的集群名称,当你的elasticsearch集群在同一个网段中elasticsearch会自动的找到具有相同cluster.name的elasticsearch服务. 
# 所以当同一个网段具有多个elasticsearch集群时cluster.name就成为同一个集群的标识. 

# cluster.name: elasticsearch 

#################################### Node ##################################### 
# https://www.elastic.co/guide/en/elasticsearch/reference/5.1/modules-node.html#master-node
# 节点名称同理,可自动生成也可手动配置. 
# node.name: node-1

# 允许一个节点是否可以成为一个master节点,es是默认集群中的第一台机器为master,如果这台机器停止就会重新选举master. 
# node.master: true 

# 允许该节点存储数据(默认开启) 
# node.data: true 

# 配置文件中给出了三种配置高性能集群拓扑结构的模式,如下： 
# 1. 如果你想让节点从不选举为主节点,只用来存储数据,可作为负载器 
# node.master: false 
# node.data: true 
# node.ingest: true  #默认true

# 2. 如果想让节点成为主节点,且不存储任何数据,并保有空闲资源,可作为协调器 
# node.master: true 
# node.data: false
# node.ingest: true

# 3. 如果想让节点既不称为主节点,又不成为数据节点,那么可将他作为搜索器,从节点中获取数据,生成搜索结果等 
# node.master: false 
# node.data: false 
# node.ingest: true
#

# 4. 仅作为协调器 
# node.master: false 
# node.data: false
# node.ingest: false

# 监控集群状态有一下插件和API可以使用: 
# Use the Cluster Health API [http://localhost:9200/_cluster/health], the 
# Node Info API [http://localhost:9200/_nodes] or GUI tools # such as &lt;http://www.elasticsearch.org/overview/marvel/&gt;, 


# A node can have generic attributes associated with it, which can later be used 
# for customized shard allocation filtering, or allocation awareness. An attribute 
# is a simple key value pair, similar to node.key: value, here is an example: 
# 每个节点都可以定义一些与之关联的通用属性，用于后期集群进行碎片分配时的过滤
# node.rack: rack314 

# 默认情况下，多个节点可以在同一个安装路径启动，如果你想让你的es只启动一个节点，可以进行如下设置
# node.max_local_storage_nodes: 1 

#################################### Index #################################### 
# 设置索引的分片数,默认为5 
#index.number_of_shards: 5 

# 设置索引的副本数,默认为1: 
#index.number_of_replicas: 1 

# 配置文件中提到的最佳实践是,如果服务器够多,可以将分片提高,尽量将数据平均分布到大集群中去
# 同时,如果增加副本数量可以有效的提高搜索性能 
# 需要注意的是,&quot;number_of_shards&quot; 是索引创建后一次生成的,后续不可更改设置 
# &quot;number_of_replicas&quot; 是可以通过API去实时修改设置的 

#################################### Paths #################################### 
# 配置文件存储位置 
# path.conf: /path/to/conf 

# 数据存储位置(单个目录设置) 
# path.data: /path/to/data 
# 多个数据存储位置,有利于性能提升 
# path.data: /path/to/data1,/path/to/data2 

# 临时文件的路径 
# path.work: /path/to/work 

# 日志文件的路径 
# path.logs: /path/to/logs 

# 插件安装路径 
# path.plugins: /path/to/plugins 

#################################### Plugin ################################### 
# 设置插件作为启动条件,如果一下插件没有安装,则该节点服务不会启动 
# plugin.mandatory: mapper-attachments,lang-groovy 

################################### Memory #################################### 
# 当JVM开始写入交换空间时（swapping）ElasticSearch性能会低下,你应该保证它不会写入交换空间 
# 设置这个属性为true来锁定内存,同时也要允许elasticsearch的进程可以锁住内存,linux下可以通过 \`ulimit -l unlimited\` 命令 
# bootstrap.mlockall: true 

# 确保 ES_MIN_MEM 和 ES_MAX_MEM 环境变量设置为相同的值,以及机器有足够的内存分配给Elasticsearch 
# 注意:内存也不是越大越好,一般64位机器,最大分配内存别才超过32G 

############################## Network And HTTP ############################### 
# 设置绑定的ip地址,可以是ipv4或ipv6的,默认为0.0.0.0 
# network.bind_host: 192.168.0.1   #只有本机可以访问http接口

# 设置其它节点和该节点交互的ip地址,如果不设置它会自动设置,值必须是个真实的ip地址 
# network.publish_host: 192.168.0.1 

# 同时设置bind_host和publish_host上面两个参数 
# network.host: 192.168.0.1    #绑定监听IP

# 设置节点间交互的tcp端口,默认是9300 
# transport.tcp.port: 9300 

# 设置是否压缩tcp传输时的数据，默认为false,不压缩
# transport.tcp.compress: true 

# 设置对外服务的http端口,默认为9200 
# http.port: 9200 

# 设置请求内容的最大容量,默认100mb 
# http.max_content_length: 100mb 

# 使用http协议对外提供服务,默认为true,开启 
# http.enabled: false 

###################### 使用head等插件监控集群信息，需要打开以下配置项 ###########
# http.cors.enabled: true
# http.cors.allow-origin: &quot;*&quot;
# http.cors.allow-credentials: true

################################### Gateway ################################### 
# gateway的类型,默认为local即为本地文件系统,可以设置为本地文件系统 
# gateway.type: local 

# 下面的配置控制怎样以及何时启动一整个集群重启的初始化恢复过程 
# (当使用shard gateway时,是为了尽可能的重用local data(本地数据)) 

# 一个集群中的N个节点启动后,才允许进行恢复处理 
# gateway.recover_after_nodes: 1 

# 设置初始化恢复过程的超时时间,超时时间从上一个配置中配置的N个节点启动后算起 
# gateway.recover_after_time: 5m 

# 设置这个集群中期望有多少个节点.一旦这N个节点启动(并且recover_after_nodes也符合), 
# 立即开始恢复过程(不等待recover_after_time超时) 
# gateway.expected_nodes: 2

 ############################# Recovery Throttling ############################# 
# 下面这些配置允许在初始化恢复,副本分配,再平衡,或者添加和删除节点时控制节点间的分片分配 
# 设置一个节点的并行恢复数 
# 1.初始化数据恢复时,并发恢复线程的个数,默认为4 
# cluster.routing.allocation.node_initial_primaries_recoveries: 4 

# 2.添加删除节点或负载均衡时并发恢复线程的个数,默认为2 
# cluster.routing.allocation.node_concurrent_recoveries: 2 

# 设置恢复时的吞吐量(例如:100mb,默认为0无限制.如果机器还有其他业务在跑的话还是限制一下的好) 
# indices.recovery.max_bytes_per_sec: 20mb 

# 设置来限制从其它分片恢复数据时最大同时打开并发流的个数,默认为5 
# indices.recovery.concurrent_streams: 5 
# 注意: 合理的设置以上参数能有效的提高集群节点的数据恢复以及初始化速度 

################################## Discovery ################################## 
# 设置这个参数来保证集群中的节点可以知道其它N个有master资格的节点.默认为1,对于大的集群来说,可以设置大一点的值(2-4) 
# discovery.zen.minimum_master_nodes: 1 
# 探查的超时时间,默认3秒,提高一点以应对网络不好的时候,防止脑裂 
# discovery.zen.ping.timeout: 3s 

# For more information, see 
# &lt;http://elasticsearch.org/guide/en/elasticsearch/reference/current/modules-discovery-zen.html&gt; 

# 设置是否打开多播发现节点.默认是true. 
# 当多播不可用或者集群跨网段的时候集群通信还是用单播吧 
# discovery.zen.ping.multicast.enabled: false 

# 这是一个集群中的主节点的初始列表,当节点(主节点或者数据节点)启动时使用这个列表进行探测 
# discovery.zen.ping.unicast.hosts: [&quot;host1&quot;, &quot;host2:port&quot;] 

# Slow Log部分与GC log部分略,不过可以通过相关日志优化搜索查询速度 

################  X-Pack ###########################################
# 官方插件 相关设置请查看此处
# https://www.elastic.co/guide/en/x-pack/current/xpack-settings.html
# 
############## Memory(重点需要调优的部分) ################ 
# Cache部分: 
# es有很多种方式来缓存其内部与索引有关的数据.其中包括filter cache 

# filter cache部分: 
# filter cache是用来缓存filters的结果的.默认的cache type是node type.node type的机制是所有的索引内部的分片共享filter cache.node type采用的方式是LRU方式.即:当缓存达到了某个临界值之后，es会将最近没有使用的数据清除出filter cache.使让新的数据进入es. 

# 这个临界值的设置方法如下：indices.cache.filter.size 值类型：eg.:512mb 20%。默认的值是10%。 

# out of memory错误避免过于频繁的查询时集群假死 
# 1.设置es的缓存类型为Soft Reference,它的主要特点是据有较强的引用功能.只有当内存不够的时候,才进行回收这类内存,因此在内存足够的时候,它们通常不被回收.另外,这些引用对象还能保证在Java抛出OutOfMemory异常之前,被设置为null.它可以用于实现一些常用图片的缓存,实现Cache的功能,保证最大限度的使用内存而不引起OutOfMemory.在es的配置文件加上index.cache.field.type: soft即可. 

# 2.设置es最大缓存数据条数和缓存失效时间,通过设置index.cache.field.max_size: 50000来把缓存field的最大值设置为50000,设置index.cache.field.expire: 10m把过期时间设置成10分钟. 
# index.cache.field.max_size: 50000 
# index.cache.field.expire: 10m 
# index.cache.field.type: soft 

# field data部分&amp;&amp;circuit breaker部分： 
# 用于fielddata缓存的内存数量,主要用于当使用排序,faceting操作时,elasticsearch会将一些热点数据加载到内存中来提供给客户端访问,但是这种缓存是比较珍贵的,所以对它进行合理的设置. 

# 可以使用值：eg:50mb 或者 30％(节点 node heap内存量),默认是：unbounded #indices.fielddata.cache.size： unbounded 
# field的超时时间.默认是-1,可以设置的值类型: 5m #indices.fielddata.cache.expire: -1 

# circuit breaker部分: 
# 断路器是elasticsearch为了防止内存溢出的一种操作,每一种circuit breaker都可以指定一个内存界限触发此操作,这种circuit breaker的设定有一个最高级别的设定:indices.breaker.total.limit 默认值是JVM heap的70%.当内存达到这个数量的时候会触发内存回收

# 另外还有两组子设置： 
#indices.breaker.fielddata.limit:当系统发现fielddata的数量达到一定数量时会触发内存回收.默认值是JVM heap的70% 
#indices.breaker.fielddata.overhead:在系统要加载fielddata时会进行预先估计,当系统发现要加载进内存的值超过limit * overhead时会进行进行内存回收.默认是1.03 
#indices.breaker.request.limit:这种断路器是elasticsearch为了防止OOM(内存溢出),在每次请求数据时设定了一个固定的内存数量.默认值是40% 
#indices.breaker.request.overhead:同上,也是elasticsearch在发送请求时设定的一个预估系数,用来防止内存溢出.默认值是1 

# Translog部分: 
# 每一个分片(shard)都有一个transaction log或者是与它有关的预写日志,(write log),在es进行索引(index)或者删除(delete)操作时会将没有提交的数据记录在translog之中,当进行flush 操作的时候会将tranlog中的数据发送给Lucene进行相关的操作.一次flush操作的发生基于如下的几个配置 
#index.translog.flush_threshold_ops:当发生多少次操作时进行一次flush.默认是 unlimited #index.translog.flush_threshold_size:当translog的大小达到此值时会进行一次flush操作.默认是512mb 
#index.translog.flush_threshold_period:在指定的时间间隔内如果没有进行flush操作,会进行一次强制flush操作.默认是30m #index.translog.interval:多少时间间隔内会检查一次translog,来进行一次flush操作.es会随机的在这个值到这个值的2倍大小之间进行一次操作,默认是5s 
#index.gateway.local.sync:多少时间进行一次的写磁盘操作,默认是5s 

# 以上的translog配置都可以通过API进行动态的设置 - See more at: http://bigbo.github.io/pages/2015/04/10/elasticsearch_config/#sthash.AvOSUcQ4.dpuf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="插件安装" tabindex="-1"><a class="header-anchor" href="#插件安装" aria-hidden="true">#</a> 插件安装</h2><h3 id="安装分词插件" tabindex="-1"><a class="header-anchor" href="#安装分词插件" aria-hidden="true">#</a> 安装分词插件</h3>`,3),I={href:"https://github.com/medcl/elasticsearch-analysis-ik/releases",target:"_blank",rel:"noopener noreferrer"},O=e("p",null,"注意下载对应的版本。放置在home目录下备用",-1),V=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /data/ELK/elasticsearch/plugins
<span class="token comment">#解压缩</span>
<span class="token function">unzip</span> <span class="token parameter variable">-d</span> /data/ELK/elasticsearch/plugins/ik /home/elasticsearch-analysis-ik-7.6.2.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/08/25_15_21_58_89446411100947fa866b9c4ca931f09a.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><blockquote><p>如果提示<code>unzip: 未找到命令</code>，可以通过<code>yum install unzip</code>安装相关插件</p></blockquote><h2 id="es的启动与配置" tabindex="-1"><a class="header-anchor" href="#es的启动与配置" aria-hidden="true">#</a> ES的启动与配置</h2><h3 id="启动elasticsearch" tabindex="-1"><a class="header-anchor" href="#启动elasticsearch" aria-hidden="true">#</a> 启动ElasticSearch</h3><p><strong>由于ES不支持root用户启动，请切换到刚刚创建的es用户进行操作</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /data/ELK/elasticsearch/bin
./elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><em>注意：启动时会提示:<br><code>future versions of Elasticsearch will require Java 11; your Java version from [/***/jre] does not meet this requirement</code><br> 忽略即可.</em></p><details class="hint-container details"><summary>常见错误及解决办法</summary><ul><li>max file descriptors [4096] for elasticsearch process is too low, increase to at least [65535]<br> 每个进程最大同时打开文件数太小，可通过下面2个命令查看当前数量</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-Hn</span>
<span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-Sn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>解决办法:<br> 修改/etc/security/limits.conf文件，增加如下配置，用户退出后重新登录生效</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* soft nproc 65536
* hard nproc 65536
* soft nofile 65536
* hard nofile 65536
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><ul><li>max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]<br> elasticsearch用户拥有的内存权限太小，至少需要262144；</li></ul><blockquote><p>解决办法:&#39;</p><p>在 /etc/sysctl.conf文件最后添加一行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vm.max_map_count=262144
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sysctl -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><ul><li>the default discovery settings are unsuitable for production use; at least one of [discovery.seed_hosts, discovery.seed_providers, cluster.initial_master_nodes] must be configured</li></ul><blockquote><p>解决办法:</p><p>在elasticsearch的config目录下，修改elasticsearch.yml配置文件，修改cluster.initial_master_nodes参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cluster.initial_master_nodes: [&quot;node-1&quot;] #这里的node-1为node-name配置的值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote></details><h3 id="配置开机自启" tabindex="-1"><a class="header-anchor" href="#配置开机自启" aria-hidden="true">#</a> 配置开机自启</h3><h4 id="创建es-的系统启动服务文件" tabindex="-1"><a class="header-anchor" href="#创建es-的系统启动服务文件" aria-hidden="true">#</a> 创建es 的系统启动服务文件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/init.d    　　<span class="token comment">#进入到目录</span>
<span class="token function">vi</span> elasticsearch      <span class="token comment">#创建服务文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>文件内容如下(请注意修改对应的ES目录和用户名称es)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#chkconfig: 345 63 37</span>
<span class="token comment">#description: elasticsearch</span>
<span class="token comment">#processname: elasticsearch-7.6.2</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable">ES_HOME</span><span class="token operator">=</span>/data/ELK/elasticsearch

<span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
        start<span class="token punctuation">)</span>
                <span class="token function">su</span> es<span class="token operator">&lt;&lt;</span><span class="token operator">!</span> 
                <span class="token builtin class-name">cd</span> <span class="token variable">$ES_HOME</span>
                ./bin/elasticsearch <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> pid
                <span class="token builtin class-name">exit</span>
<span class="token operator">!</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&quot;elasticsearch is started&quot;</span>
                <span class="token punctuation">;</span><span class="token punctuation">;</span>
        stop<span class="token punctuation">)</span>
                <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> $ES_HOME/pid<span class="token variable">\`</span></span>
                <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$pid</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&quot;elasticsearch is stopped&quot;</span>
                <span class="token punctuation">;</span><span class="token punctuation">;</span>
        restart<span class="token punctuation">)</span>
                <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> $ES_HOME/pid<span class="token variable">\`</span></span>
                <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$pid</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&quot;elasticsearch is stopped&quot;</span>
                <span class="token function">sleep</span> <span class="token number">1</span>
                <span class="token function">su</span> es<span class="token operator">&lt;&lt;</span><span class="token operator">!</span> 
                <span class="token builtin class-name">cd</span> <span class="token variable">$ES_HOME</span>
                ./bin/elasticsearch <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> pid
                <span class="token builtin class-name">exit</span>
<span class="token operator">!</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&quot;elasticsearch is started&quot;</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;start|stop|restart&quot;</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>  
<span class="token keyword">esac</span>
<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/08/25_15_26_37_ccd1f4bd4cc443d8a3262b1dfa2089a9.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h4 id="修改权限" tabindex="-1"><a class="header-anchor" href="#修改权限" aria-hidden="true">#</a> 修改权限</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">777</span> elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="添加和删除服务并设置启动方式" tabindex="-1"><a class="header-anchor" href="#添加和删除服务并设置启动方式" aria-hidden="true">#</a> 添加和删除服务并设置启动方式</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chkconfig</span> <span class="token parameter variable">--add</span> elasticsearch　　　　<span class="token comment">#添加系统服务</span>
<span class="token function">chkconfig</span> <span class="token parameter variable">--del</span> elasticsearch　　　　<span class="token comment">#删除系统服务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="关闭和启动服务" tabindex="-1"><a class="header-anchor" href="#关闭和启动服务" aria-hidden="true">#</a> 关闭和启动服务；</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> elasticsearch start　　　　　<span class="token comment">#启动</span>
<span class="token function">service</span> elasticsearch stop　　　　　<span class="token comment">#停止</span>
<span class="token function">service</span> elasticsearch restart　　   <span class="token comment">#重启</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="设置服务是否开机启动" tabindex="-1"><a class="header-anchor" href="#设置服务是否开机启动" aria-hidden="true">#</a> 设置服务是否开机启动；</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chkconfig</span> elasticsearch on　　　　　<span class="token comment">#开启</span>
<span class="token function">chkconfig</span> elasticsearch off　　   　 <span class="token comment">#关闭</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="centos关闭防火墙" tabindex="-1"><a class="header-anchor" href="#centos关闭防火墙" aria-hidden="true">#</a> CentOS关闭防火墙</h3><p>如果出现访问不到的状况,请检查防火墙是否关闭</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--state</span>  <span class="token comment">#检查防火墙状态</span>
systemctl stop firewalld.service   <span class="token comment">#关闭防火墙</span>
systemctl disable firewalld.service    <span class="token comment">#永久禁用防火墙</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function A(J,N){const s=d("ExternalLinkIcon");return c(),r("div",null,[v,o,u,e("blockquote",null,[e("p",null,[n("下载安装包:"),m,n(" 地址1: "),e("a",p,[n("https://www.elastic.co/downloads/elasticsearch"),a(s)]),b,n(" 地址2: "),e("a",h,[n("https://elasticsearch.cn/download/"),a(s)]),n(" (推荐，方便选择不同版本)")])]),g,e("blockquote",null,[f,e("p",null,[e("a",k,[n("node.name"),a(s)]),n(": node-base #节点名称 这个与下面一点一定要配，不然即使启动成功也会操作超时或发生")]),_,x,y,w,q,E,z,M,S]),L,e("blockquote",null,[e("p",null,[n("分词插件IK下载地址:"),e("a",I,[n("https://github.com/medcl/elasticsearch-analysis-ik/releases"),a(s)])]),O]),V])}const C=l(t,[["render",A],["__file","40-1692945686170.html.vue"]]);export{C as default};
