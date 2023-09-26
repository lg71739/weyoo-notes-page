import{_ as a,U as e,V as i,a4 as s}from"./framework-0db41e67.js";const n={},d=s(`<h1 id="linux网卡配置开机自动连接" tabindex="-1"><a class="header-anchor" href="#linux网卡配置开机自动连接" aria-hidden="true">#</a> Linux网卡配置开机自动连接</h1><h2 id="跳转网卡配置文件夹" tabindex="-1"><a class="header-anchor" href="#跳转网卡配置文件夹" aria-hidden="true">#</a> 跳转网卡配置文件夹</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/sysconfig/network-scripts/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看文件列表" tabindex="-1"><a class="header-anchor" href="#查看文件列表" aria-hidden="true">#</a> 查看文件列表</h2><p>执行如下命令，查看所有文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/09/26_9_33_44_image-20230926093344163.png" alt="image-20230926093344163" tabindex="0" loading="lazy"><figcaption>image-20230926093344163</figcaption></figure><h2 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h2><p>一般情况下，文件的第一个即为对应的网卡配置文件</p><p>执行编辑命令， 修改网卡配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> ifcfg-ens33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将文件的<code>ONBOOT=no</code>修改为<code>ONBOOT=yes</code>即可将网卡配置为开机自动联网</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/09/26_9_35_58_image-20230926093558908.png" alt="image-20230926093558908" tabindex="0" loading="lazy"><figcaption>image-20230926093558908</figcaption></figure>`,13),c=[d];function r(t,l){return e(),i("div",null,c)}const h=a(n,[["render",r],["__file","10-1695691464931.html.vue"]]);export{h as default};
