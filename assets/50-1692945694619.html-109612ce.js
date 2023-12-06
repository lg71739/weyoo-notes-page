import{_ as l,r as c,o as r,c as t,d as s,e as a,b as e,f as i}from"./app-765121fc.js";const d={},o=i('<h1 id="kibana的安装与配置" tabindex="-1"><a class="header-anchor" href="#kibana的安装与配置" aria-hidden="true">#</a> Kibana的安装与配置</h1><h2 id="下载与配置" tabindex="-1"><a class="header-anchor" href="#下载与配置" aria-hidden="true">#</a> 下载与配置</h2><h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h3><p>注意选择对应版本下载，本项目使用的版本为7.6.2</p>',4),v=s("p",null,"下载路径:",-1),u={href:"http://elastic.co/cn/downloads/kibana",target:"_blank",rel:"noopener noreferrer"},p={href:"https://elasticsearch.cn/download/",target:"_blank",rel:"noopener noreferrer"},b=i(`<h3 id="解压缩" tabindex="-1"><a class="header-anchor" href="#解压缩" aria-hidden="true">#</a> 解压缩</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /home/elk/kibana
<span class="token builtin class-name">cd</span> /home/elk
<span class="token function">tar</span> <span class="token parameter variable">-zxf</span>  /home/kibana-7.6.2-linux-x86_64.tar.gz
<span class="token function">mv</span> kibana-7.6.2/ kibana/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h3><p>对应的配置文件为config目录下的kibana.yml。根据需求修改相应配置即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /home/elk/kibana/config/kibana.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/08/25_15_35_50_b8b7307ed17548ad89e102045318e167.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><details class="hint-container details"><summary>kibana.yml配置文件常用配置说明</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server.port:
    默认值: 5601 Kibana 由后端服务器提供服务，该配置指定使用的端口号。 
server.host:
    默认值: &quot;localhost&quot; 指定后端服务器的主机地址。 
server.basePath:
    如果启用了代理，指定 Kibana 的路径，该配置项只影响 Kibana 生成的 URLs，转发请求到 Kibana 时代理会移除基础路径值，该配置项不能以斜杠 (/)结尾。 
server.maxPayloadBytes:
    默认值: 1048576 服务器请求的最大负载，单位字节。 
server.name:
    默认值: &quot;您的主机名&quot; Kibana 实例对外展示的名称。 
server.defaultRoute:
    默认值: &quot;/app/kibana&quot; Kibana 的默认路径，该配置项可改变 Kibana 的登录页面。 
elasticsearch.url:
    默认值: &quot;http://localhost:9200&quot; 用来处理所有查询的 Elasticsearch 实例的 URL 。 
elasticsearch.preserveHost:
    默认值: true 该设置项的值为 true 时，Kibana 使用 server.host 设定的主机名，该设置项的值为 false 时，Kibana 使用主机的主机名来连接 Kibana 实例。 
kibana.index:
    默认值: &quot;.kibana&quot; Kibana 使用 Elasticsearch 中的索引来存储保存的检索，可视化控件以及仪表板。如果没有索引，Kibana 会创建一个新的索引。 
kibana.defaultAppId:
    默认值: &quot;discover&quot; 默认加载的应用。 
tilemap.url:
    Kibana 用来在 tile 地图可视化组件中展示地图服务的 URL。默认时，Kibana 从外部的元数据服务读取 url，用户也可以覆盖该参数，使用自己的 tile 地图服务。例如：&quot;https://tiles.elastic.co/v2/default/{z}/{x}/{y}.png?elastic_tile_service_tos=agree&amp;my_app_name=kibana&quot; 
tilemap.options.minZoom:
    默认值: 1 最小缩放级别。 
tilemap.options.maxZoom:
    默认值: 10 最大缩放级别。 
tilemap.options.attribution:
    默认值: &quot;© [Elastic Tile Service](https://www.elastic.co/elastic-tile-service)&quot; 地图属性字符串。 
tilemap.options.subdomains:
    服务使用的二级域名列表，用 {s} 指定二级域名的 URL 地址。 
elasticsearch.username: 和 elasticsearch.password:
    Elasticsearch 设置了基本的权限认证，该配置项提供了用户名和密码，用于 Kibana 启动时维护索引。Kibana 用户仍需要 Elasticsearch 由 Kibana 服务端代理的认证。 
server.ssl.enabled
    默认值: &quot;false&quot; 对到浏览器端的请求启用 SSL，设为 true 时， server.ssl.certificate 和 server.ssl.key 也要设置。 
server.ssl.certificate: 和 server.ssl.key:
    PEM 格式 SSL 证书和 SSL 密钥文件的路径。 
server.ssl.keyPassphrase
    解密私钥的口令，该设置项可选，因为密钥可能没有加密。 
server.ssl.certificateAuthorities
    可信任 PEM 编码的证书文件路径列表。 
server.ssl.supportedProtocols
    默认值: TLSv1、TLSv1.1、TLSv1.2 版本支持的协议，有效的协议类型: TLSv1 、 TLSv1.1 、 TLSv1.2 。 
server.ssl.cipherSuites
    默认值: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-ECDSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-ECDSA-AES256-GCM-SHA384, DHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES128-SHA256, DHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, DHE-RSA-AES256-SHA384, ECDHE-RSA-AES256-SHA256, DHE-RSA-AES256-SHA256, HIGH,!aNULL, !eNULL, !EXPORT, !DES, !RC4, !MD5, !PSK, !SRP, !CAMELLIA. 具体格式和有效参数可通过[OpenSSL cipher list format documentation](https://www.openssl.org/docs/man1.0.2/apps/ciphers.html#CIPHER-LIST-FORMAT) 获得。 
elasticsearch.ssl.certificate: 和 elasticsearch.ssl.key:
    可选配置项，提供 PEM格式 SSL 证书和密钥文件的路径。这些文件确保 Elasticsearch 后端使用同样的密钥文件。 
elasticsearch.ssl.keyPassphrase
    解密私钥的口令，该设置项可选，因为密钥可能没有加密。 
elasticsearch.ssl.certificateAuthorities:
    指定用于 Elasticsearch 实例的 PEM 证书文件路径。 
elasticsearch.ssl.verificationMode:
    默认值: full 控制证书的认证，可用的值有 none 、 certificate 、 full 。 full 执行主机名验证，certificate 不执行主机名验证。 
elasticsearch.pingTimeout:
    默认值: elasticsearch.requestTimeout setting 的值，等待 Elasticsearch 的响应时间。 
elasticsearch.requestTimeout:
    默认值: 30000 等待后端或 Elasticsearch 的响应时间，单位微秒，该值必须为正整数。 
elasticsearch.requestHeadersWhitelist:
    默认值: [ &#39;authorization&#39; ] Kibana 客户端发送到 Elasticsearch 头体，发送 no 头体，设置该值为[]。 
elasticsearch.customHeaders:
    默认值: {} 发往 Elasticsearch的头体和值， 不管 elasticsearch.requestHeadersWhitelist 如何配置，任何自定义的头体不会被客户端头体覆盖。 
elasticsearch.shardTimeout:
    默认值: 0 Elasticsearch 等待分片响应时间，单位微秒，0即禁用。 
elasticsearch.startupTimeout:
    默认值: 5000 Kibana 启动时等待 Elasticsearch 的时间，单位微秒。 
pid.file:
    指定 Kibana 的进程 ID 文件的路径。 
logging.dest:
    默认值: stdout 指定 Kibana 日志输出的文件。 
logging.silent:
    默认值: false 该值设为 true 时，禁止所有日志输出。 
logging.quiet:
    默认值: false 该值设为 true 时，禁止除错误信息除外的所有日志输出。 
logging.verbose
    默认值: false 该值设为 true 时，记下所有事件包括系统使用信息和所有请求的日志。 
ops.interval
    默认值: 5000 设置系统和进程取样间隔，单位微妙，最小值100。 
status.allowAnonymous
    默认值: false 如果启用了权限，该项设置为 true 即允许所有非授权用户访问 Kibana 服务端 API 和状态页面。 
cpu.cgroup.path.override
    如果挂载点跟 /proc/self/cgroup 不一致，覆盖 cgroup cpu 路径。 
cpuacct.cgroup.path.override
    如果挂载点跟 /proc/self/cgroup 不一致，覆盖 cgroup cpuacct 路径。 
console.enabled
    默认值: true 设为 false 来禁用控制台，切换该值后服务端下次启动时会重新生成资源文件，因此会导致页面服务有点延迟。 
elasticsearch.tribe.url:
    Elasticsearch tribe 实例的 URL，用于所有查询。 
elasticsearch.tribe.username: 和 elasticsearch.tribe.password:
    Elasticsearch 设置了基本的权限认证，该配置项提供了用户名和密码，用于 Kibana 启动时维护索引。Kibana 用户仍需要 Elasticsearch 由 Kibana 服务端代理的认证。 
elasticsearch.tribe.ssl.certificate: 和 elasticsearch.tribe.ssl.key:
    可选配置项，提供 PEM 格式 SSL 证书和密钥文件的路径。这些文件确保 Elasticsearch 后端使用同样的密钥文件。 
elasticsearch.tribe.ssl.keyPassphrase
    解密私钥的口令，该设置项可选，因为密钥可能没有加密。 
elasticsearch.tribe.ssl.certificateAuthorities:
    指定用于 Elasticsearch tribe 实例的 PEM 证书文件路径。 
elasticsearch.tribe.ssl.verificationMode:
    默认值: full 控制证书的认证，可用的值有 none 、 certificate 、 full 。 full 执行主机名验证， certificate 不执行主机名验证。 
elasticsearch.tribe.pingTimeout:
    默认值: elasticsearch.tribe.requestTimeout setting 的值，等待 Elasticsearch 的响应时间。 
elasticsearch.tribe.requestTimeout:
    Default: 30000 等待后端或 Elasticsearch 的响应时间，单位微秒，该值必须为正整数。 
elasticsearch.tribe.requestHeadersWhitelist:
    默认值: [ &#39;authorization&#39; ] Kibana 发往 Elasticsearch 的客户端头体，发送 no 头体，设置该值为[]。 
elasticsearch.tribe.customHeaders:
    默认值: {} 发往 Elasticsearch的头体和值，不管 elasticsearch.tribe.requestHeadersWhitelist 如何配置，任何自定义的头体不会被客户端头体覆盖。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="创建启动用户" tabindex="-1"><a class="header-anchor" href="#创建启动用户" aria-hidden="true">#</a> 创建启动用户</h3><p>Kibana与 ElasticSearch一样，不推荐使用root用户启动，所以我们可以创建一个专门的启动账户</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">useradd</span> kibana
<span class="token function">passwd</span> kibana
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>授权</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chown</span> <span class="token parameter variable">-R</span> kibana:kibana /home/elk/kibana
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于我们前面已经创建了一个ES的专用账户，后续我们统一使用这个帐户启动ES和Kibana</p><blockquote><ol><li>Kibana可以使用root来运行，只是必须明确指明--allow-root来运行，这是kibana的安全保护机制，所以我们尽可能的不要使用root来启动kibana</li><li>使用RPM方式安装kibana的时候，就默认给我们创建了名为kibana的用户</li></ol></blockquote><h2 id="安装kibana服务" tabindex="-1"><a class="header-anchor" href="#安装kibana服务" aria-hidden="true">#</a> 安装Kibana服务</h2><h3 id="创建文件" tabindex="-1"><a class="header-anchor" href="#创建文件" aria-hidden="true">#</a> 创建文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/init.d
<span class="token function">vim</span> kibana
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>文件内容如下:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#chkconfig: 345 63 37</span>
<span class="token comment">#description: kibana</span>
<span class="token comment">#processname:kibana-7.6.2</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable">KIBANA_HOME</span><span class="token operator">=</span>/home/elk/kibana

<span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
        start<span class="token punctuation">)</span>
                <span class="token function">su</span> kibana<span class="token operator">&lt;&lt;</span><span class="token operator">!</span>  
                <span class="token builtin class-name">cd</span> <span class="token variable">$KIBANA_HOME</span>
                ./bin/kibana <span class="token parameter variable">-p</span> pid <span class="token operator">&amp;</span>
                <span class="token builtin class-name">exit</span>
<span class="token operator">!</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&quot;kibana is started&quot;</span>
                <span class="token punctuation">;</span><span class="token punctuation">;</span>
        stop<span class="token punctuation">)</span>
                <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> $KIBANA_HOME/pid<span class="token variable">\`</span></span>
                <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$pid</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&quot;kibana is stopped&quot;</span>
                <span class="token punctuation">;</span><span class="token punctuation">;</span>
        restart<span class="token punctuation">)</span>
                <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> $KIBANA_HOME/pid<span class="token variable">\`</span></span>
                <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$pid</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&quot;kibana is stopped&quot;</span>
                <span class="token function">sleep</span> <span class="token number">5</span>
                <span class="token function">su</span> kibana<span class="token operator">&lt;&lt;</span><span class="token operator">!</span>
                <span class="token builtin class-name">cd</span> <span class="token variable">$KIBANA_HOME</span>
                ./bin/kibana <span class="token parameter variable">-p</span> pid <span class="token operator">&amp;</span>
                <span class="token builtin class-name">exit</span>
<span class="token operator">!</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&quot;kibana is started&quot;</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;start|stop|restart&quot;</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改文件权限" tabindex="-1"><a class="header-anchor" href="#修改文件权限" aria-hidden="true">#</a> 修改文件权限</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">777</span> kibana 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="添加和删除服务并设置启动方式" tabindex="-1"><a class="header-anchor" href="#添加和删除服务并设置启动方式" aria-hidden="true">#</a> 添加和删除服务并设置启动方式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chkconfig</span> <span class="token parameter variable">--add</span> kibana 　　　　<span class="token comment">#【添加系统服务】</span>
<span class="token function">chkconfig</span> <span class="token parameter variable">--del</span> kibana 　　　　<span class="token comment">#【删除系统服务】</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关闭和启动服务" tabindex="-1"><a class="header-anchor" href="#关闭和启动服务" aria-hidden="true">#</a> 关闭和启动服务；</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> kibana  start　　　　	<span class="token comment">#【启动】</span>
<span class="token function">service</span> kibana  stop　　　　 	<span class="token comment"># 【停止】</span>
<span class="token function">service</span> kibana  restart　　  	  <span class="token comment">#【重启】</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置服务是否开机启动" tabindex="-1"><a class="header-anchor" href="#设置服务是否开机启动" aria-hidden="true">#</a> 设置服务是否开机启动；</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chkconfig</span> kibana  on　　　　<span class="token comment">#【开启】</span>
<span class="token function">chkconfig</span> kibana  off　　   　<span class="token comment"># 【关闭】</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="centos关闭防火墙" tabindex="-1"><a class="header-anchor" href="#centos关闭防火墙" aria-hidden="true">#</a> CentOS关闭防火墙</h3><p>如果出现访问不到的状况,请检查防火墙是否关闭</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--state</span>  <span class="token comment">#检查防火墙状态</span>
systemctl stop firewalld.service   <span class="token comment">#关闭防火墙</span>
systemctl disable firewalld.service    <span class="token comment">#永久禁用防火墙</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function m(h,k){const n=c("ExternalLinkIcon");return r(),t("div",null,[o,s("blockquote",null,[v,s("p",null,[a("官网:"),s("a",u,[a("http://elastic.co/cn/downloads/kibana"),e(n)])]),s("p",null,[a("非官方:"),s("a",p,[a("https://elasticsearch.cn/download/"),e(n)])])]),b])}const f=l(d,[["render",m],["__file","50-1692945694619.html.vue"]]);export{f as default};
