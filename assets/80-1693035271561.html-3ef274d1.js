import{_ as e,o as i,c as a,f as n}from"./app-8feddf91.js";const s={},d=n(`<h1 id="nginx的安装与配置" tabindex="-1"><a class="header-anchor" href="#nginx的安装与配置" aria-hidden="true">#</a> Nginx的安装与配置</h1><p>本文主要讲解通过yum在线安装Nginx的方法</p><h2 id="添加yum源" tabindex="-1"><a class="header-anchor" href="#添加yum源" aria-hidden="true">#</a> 添加Yum源</h2><h3 id="配置官方源" tabindex="-1"><a class="header-anchor" href="#配置官方源" aria-hidden="true">#</a> 配置官方源</h3><p>执行如下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2023/08/26_15_35_29_202308261535172.png" alt="image-20230826153523094" tabindex="0" loading="lazy"><figcaption>image-20230826153523094</figcaption></figure><h3 id="查看源配置" tabindex="-1"><a class="header-anchor" href="#查看源配置" aria-hidden="true">#</a> 查看源配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum repolist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2023/08/26_15_36_18_202308261536742.png" alt="image-20230826153618708" tabindex="0" loading="lazy"><figcaption>image-20230826153618708</figcaption></figure><h2 id="安装与测试" tabindex="-1"><a class="header-anchor" href="#安装与测试" aria-hidden="true">#</a> 安装与测试</h2><h3 id="执行安装" tabindex="-1"><a class="header-anchor" href="#执行安装" aria-hidden="true">#</a> 执行安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> nginx <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2023/08/26_15_38_26_202308261538322.png" alt="image-20230826153826272" tabindex="0" loading="lazy"><figcaption>image-20230826153826272</figcaption></figure><h3 id="验证安装版本" tabindex="-1"><a class="header-anchor" href="#验证安装版本" aria-hidden="true">#</a> 验证安装版本</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2023/08/26_15_39_32_202308261539701.png" alt="image-20230826153932677" tabindex="0" loading="lazy"><figcaption>image-20230826153932677</figcaption></figure><h3 id="配置开机自启动" tabindex="-1"><a class="header-anchor" href="#配置开机自启动" aria-hidden="true">#</a> 配置开机自启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置开机自启动</span>
systemctl <span class="token builtin class-name">enable</span> nginx
<span class="token comment"># 启动服务</span>
systemctl start nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2023/08/26_15_40_0_202308261540307.png" alt="image-20230826154000286" tabindex="0" loading="lazy"><figcaption>image-20230826154000286</figcaption></figure><h3 id="防火墙配置" tabindex="-1"><a class="header-anchor" href="#防火墙配置" aria-hidden="true">#</a> 防火墙配置</h3><p>配置防火墙开放端口，或将防火墙关闭</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 关闭防火墙</span>
systemctl stop firewalld
<span class="token comment"># 永久禁用防火墙</span>
systemctl disable firewalld
<span class="token comment"># 查看防火墙状态</span>
systemctl status firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2023/08/26_15_41_36_202308261541315.png" alt="image-20230826154136292" tabindex="0" loading="lazy"><figcaption>image-20230826154136292</figcaption></figure><h3 id="验证测试" tabindex="-1"><a class="header-anchor" href="#验证测试" aria-hidden="true">#</a> 验证测试</h3><p>直接访问IP，出现如下界面，表示安装成功。</p><figure><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2023/08/26_15_41_57_202308261541610.png" alt="image-20230826154157582" tabindex="0" loading="lazy"><figcaption>image-20230826154157582</figcaption></figure><h2 id="ngix配置文件" tabindex="-1"><a class="header-anchor" href="#ngix配置文件" aria-hidden="true">#</a> Ngix配置文件</h2><h3 id="存放路径" tabindex="-1"><a class="header-anchor" href="#存放路径" aria-hidden="true">#</a> 存放路径</h3><ul><li><p>Nginx默认主配置文件</p><p><code>/etc/nginx/nginx.conf</code></p></li><li><p>Nginx html默认存放目录</p><p><code>/usr/share/nginx/html </code></p></li><li><p>Nginx默认主页路径</p><p><code>/usr/share/nginx/html/index.html</code></p></li></ul><h3 id="配置文件的修改" tabindex="-1"><a class="header-anchor" href="#配置文件的修改" aria-hidden="true">#</a> 配置文件的修改</h3><h2 id="nginx常用命令" tabindex="-1"><a class="header-anchor" href="#nginx常用命令" aria-hidden="true">#</a> Nginx常用命令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 启动Nginx
systemctl start nginx

# 停止Nginx
systemctl stop nginx

# 重载Nginx
systemctl reload nginx

# 重启Nginx
systemctl restart nginx

# 查询Nginx运行状态
systemctl status nginx

# 查询Nginx进程
ps -ef |grep nginx

# 查询Nginx监听端口
netstat -lntup |grep nginx

# 卸载Nginx
yum -y remove nginx

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),l=[d];function r(t,c){return i(),a("div",null,l)}const m=e(s,[["render",r],["__file","80-1693035271561.html.vue"]]);export{m as default};
