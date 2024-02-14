import{_ as l,r as t,o as r,c as o,d as n,e,b as a,f as i}from"./app-a55ff2b5.js";const c={},p={class:"hint-container warning"},d=n("p",{class:"hint-container-title"},"Vue CLI 现已处于维护模式!",-1),u=n("p",null,"现在官方推荐使用 create-vue 来创建基于 Vite 的新项目。",-1),v={href:"https://cn.vuejs.org/guide/scaling-up/tooling.html",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),e(" 简介")],-1),h=n("p",null,"Vue CLI(Vue 脚手架) 是 Vue.js 开发的标准工具, 是 Vue 官方提供的标准化开发平台",-1),b={href:"https://cli.vuejs.org/zh",target:"_blank",rel:"noopener noreferrer"},k=i(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="安装vue-cli" tabindex="-1"><a class="header-anchor" href="#安装vue-cli" aria-hidden="true">#</a> 安装Vue Cli</h3><p>全局安装@vue/cli</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>npm install -g @vue/cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h3><p>切换到你要创建项目的目录，然后使用命令创建项目：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>vue create xxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启动项目" tabindex="-1"><a class="header-anchor" href="#启动项目" aria-hidden="true">#</a> 启动项目</h3><p>运行如下命令启动项目</p><div class="language-vu line-numbers-mode" data-ext="vu"><pre class="language-vu"><code>npm run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),g={href:"http://registry.npm.taobao.org",target:"_blank",rel:"noopener noreferrer"},_=i(`<blockquote><p>Vue 脚手架隐藏了所有 webpack 相关的配置，若想查看具体的 webpakc 配置，请执行：</p><p><code>vue inspect &gt; output.js</code></p></blockquote><h2 id="脚手架目录结构" tabindex="-1"><a class="header-anchor" href="#脚手架目录结构" aria-hidden="true">#</a> 脚手架目录结构</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.文件目录
├── node_modules 
├── public
│   ├── favicon.ico: 页签图标
│   └── index.html: 主页面
├── src
│   ├── assets: 存放静态资源
│   │   └── logo.png
│   │── component: 存放组件
│   │   └── HelloWorld.vue
│   │── App.vue: 汇总所有组件
│   └── main.js: 入口文件
├── .gitignore: git版本管制忽略的配置
├── babel.config.js: babel的配置文件
├── package.json: 应用包配置文件 
├── README.md: 应用描述文件
└── package-lock.json: 包版本控制文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改默认配置" tabindex="-1"><a class="header-anchor" href="#修改默认配置" aria-hidden="true">#</a> 修改默认配置</h2>`,4),f=n("li",null,[n("code",null,"vue.config.js"),e(" 是一个可选的配置文件，如果项目的（和 "),n("code",null,"package.json"),e(" 同级的）根目录中存在这个文件，那么它会被 "),n("code",null,"@vue/cli-service"),e(" 自动加载")],-1),x=n("code",null,"vue.config.js",-1),j={href:"https://cli.vuejs.org/zh/config/#vue-config-js",target:"_blank",rel:"noopener noreferrer"},y=i(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">pages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 入口</span>
            <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;src/index/main.js&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 关闭语法检查</span>
  <span class="token literal-property property">lineOnSave</span><span class="token operator">:</span><span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="render函数" tabindex="-1"><a class="header-anchor" href="#render函数" aria-hidden="true">#</a> render函数</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 简写形式</span>
	<span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 完整形式</span>
	<span class="token comment">// render(createElement){</span>
	<span class="token comment">//     return createElement(App)</span>
	<span class="token comment">// }</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">总结:关于不同版本的函数：</p><ol><li><p>关于不同版本的函数：</p><ol><li>vue.js 是完整版的 Vue，包含：核心功能+模板解析器</li><li>vue.runtime.xxx.js 是运行版的 Vue，只包含核心功能，没有模板解析器</li></ol></li><li><p>因为 vue.runtime.xxx.js 没有模板解析器，所以不能使用 template 配置项，需要使用 render函数接收到的createElement 函数去指定具体内容</p></li></ol></div>`,4);function V(w,E){const s=t("ExternalLinkIcon");return r(),o("div",null,[n("div",p,[d,u,n("p",null,[e("另外请参考 "),n("a",v,[e("Vue 3 工具链指南"),a(s)]),e(" 以了解最新的工具推荐。")])]),m,h,n("blockquote",null,[n("p",null,[e("官网地址: "),n("a",b,[e("https://cli.vuejs.org/zh"),a(s)])])]),k,n("blockquote",null,[n("p",null,[e("如果下载缓慢请配置 npm 淘宝镜像：npm config set registry "),n("a",g,[e("http://registry.npm.taobao.org"),a(s)])])]),_,n("ul",null,[f,n("li",null,[e("使用 "),x,e(" 可以对脚手架进行个性化定制，详见"),n("a",j,[e("配置参考 | Vue CLI"),a(s)])])]),y])}const C=l(c,[["render",V],["__file","10.html.vue"]]);export{C as default};
