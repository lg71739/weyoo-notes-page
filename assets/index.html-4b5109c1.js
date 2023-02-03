import{_ as l,V as i,W as o,Z as n,$ as s,Y as e,a0 as t,F as p}from"./framework-2eca266d.js";const c={},r=t(`<h2 id="体验-vuepress" tabindex="-1"><a class="header-anchor" href="#体验-vuepress" aria-hidden="true">#</a> 体验 VuePress</h2><ol><li>创建并进入新目录</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> bruceblog
<span class="token builtin class-name">cd</span> bruceblog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>初始化 npm</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>安装 VuePress</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>在根目录下创建 docs 文件夹</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),d={start:"5"},u={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},v=n("li",null,[n("p",null,[s("在 "),n("code",null,"package.json"),s(" 文件添加 "),n("code",null,"scripts")])],-1),k=t(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>启动本地服务器</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="8"><li>浏览器打开服务器所给地址</li></ol><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2>`,5),m=n("code",null,".vuepress",-1),b={href:"https://vuepress.vuejs.org/zh/guide/directory-structure.html",target:"_blank",rel:"noopener noreferrer"},h=n("pre",null,[n("code",null,`.
├── docs
│   ├── .vuepress
│   │   ├── public
|   |   |   └── img
│   │   ├── styles
│   │   │   └── index.styl
│   │   ├── nav.js
│   │   ├── sidebar.js
│   │   └── config.js
|   |
│   ├── notes
│   │   ├── vue
|   │   │   ├── images
|   │   │   ├── sidebar.js
|   │   │   ├── vuex.md
|   │   │   ├── vue3.md
|   │   │   └── ...
|   |   |
|   |   ├── react
|   │   │   ├── images
|   │   │   ├── sidebar.js
|   │   │   ├── react-cli.md
|   │   │   └── ...
|   │   │
|   │   ├── ...
|   |   |
│   │   └── README.md
|   |
│   └── README.md
│
├── .gitignore
|
└── package.json
`)],-1),g=n("h2",{id:"config-js-文件配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#config-js-文件配置","aria-hidden":"true"},"#"),s(),n("code",null,"config.js"),s(" 文件配置")],-1),y=n("p",null,"每个配置的作用都写在注释当中。",-1),_={href:"https://vuepress.vuejs.org/zh/config/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://vuepress.vuejs.org/zh/plugin/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html",target:"_blank",rel:"noopener noreferrer"},j=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 插件：置顶按钮、图片缩放</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@vuepress/back-to-top&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;@vuepress/medium-zoom&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 自定义网站 favicon</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;/img/logo.png&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 根路径，和仓库名一致</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/bruceblog/&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 左上角标题</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;BruceBlog&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// markdown 相关配置</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 代码块行号</span>
    <span class="token literal-property property">lineNumbers</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 默认主题相关配置</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 配置左上角的 logo</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;/img/logo.png&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 导航栏</span>
    <span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./nav.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 侧边栏</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./sidebar.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// sidebar: &#39;auto&#39;,</span>
    <span class="token comment">// 标题深度，2 表示提取 h2 和 h3 标题</span>
    <span class="token literal-property property">sidebarDepth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 启用页面滚动效果</span>
    <span class="token literal-property property">smoothScroll</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 最后更新时间</span>
    <span class="token literal-property property">lastUpdated</span><span class="token operator">:</span> <span class="token string">&#39;Last Updated&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接</span>
    <span class="token literal-property property">nextLinks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接</span>
    <span class="token literal-property property">prevLinks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 导航栏显示 gitee 仓库</span>
    <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">&#39;https://gitee.com/brucecai55520/bruceblog&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">repoLabel</span><span class="token operator">:</span> <span class="token string">&#39;Gitee&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="首页" tabindex="-1"><a class="header-anchor" href="#首页" aria-hidden="true">#</a> 首页</h2><p><code>docs/README.md</code>文档：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /img/logo.png
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> BruceBlog
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> 一名前端er的学习笔记
<span class="token key atrule">actionText</span><span class="token punctuation">:</span> Get Started →
<span class="token key atrule">actionLink</span><span class="token punctuation">:</span> /notes/
<span class="token key atrule">features</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 前端知识
    <span class="token key atrule">details</span><span class="token punctuation">:</span> HTML、CSS、JavaScript、Vue、React<span class="token punctuation">...</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 计算机基础
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 计算机网络、数据结构、操作系统<span class="token punctuation">...</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 杂七杂八
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 前端面试常见的面试题、资源推荐<span class="token punctuation">...</span>
<span class="token key atrule">footer</span><span class="token punctuation">:</span> Oh this is BruceBlog
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),E={href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html",target:"_blank",rel:"noopener noreferrer"},q=n("h2",{id:"导航栏",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#导航栏","aria-hidden":"true"},"#"),s(" 导航栏")],-1),V=n("p",null,[s("这里没有直接把配置写在 "),n("code",null,"config.js"),s(" 文件中，而是提取成一个模块，便于后续维护，也避免 "),n("code",null,"config.js"),s(" 文件过于臃肿。")],-1),B=n("p",null,"注意事项：",-1),A=n("li",null,[s("所有路径以 "),n("code",null,"/"),s(" 开头，"),n("code",null,"/"),s(" 代表 docs 目录")],-1),R={href:"http://READMED.md",target:"_blank",rel:"noopener noreferrer"},D=n("code",null,"'/notes/'",-1),M=n("code",null,"'/notes/README.md'",-1),z=t(`<div class="language-Vue line-numbers-mode" data-ext="Vue"><pre class="language-Vue"><code>// .vuepress/nav.js
module.exports = [
  {
    text: &#39;Resources&#39;,
    link: &#39;/notes/xxx/xxxx&#39;,
  },
  {
    text: &#39;前端学习&#39;,
    items: [
      { text: &#39;Vue&#39;, link: &#39;/notes/vue/vue基础&#39; },
      { text: &#39;React&#39;, link: &#39;/notes/react/react基础&#39; },
    ],
  },
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),P={href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F",target:"_blank",rel:"noopener noreferrer"},w=t(`<h2 id="侧边栏" tabindex="-1"><a class="header-anchor" href="#侧边栏" aria-hidden="true">#</a> 侧边栏</h2><p>BruceBlog 为不同页面显示不同的侧边栏，并且每个页面的侧边栏封装为一个模块便于后续维护。</p><p>以 Vue 页面的侧边栏为例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .vuepress/sidebar.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;/notes/vue&#39;</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../notes/vue/sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;/notes/react&#39;</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../notes/react/sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// notes/vue/sidebar.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Vue核心基础&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/notes/vue/vue核心基础&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Vuex&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/notes/vue/vuex&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Vue Router&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/notes/vue/vue-router&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Vue3&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/notes/vue/vue3&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),L={href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F",target:"_blank",rel:"noopener noreferrer"},S=t(`<h2 id="修改默认样式" tabindex="-1"><a class="header-anchor" href="#修改默认样式" aria-hidden="true">#</a> 修改默认样式</h2><p>在 <code>.vuepress/styles/index.styl</code> 文件可以方便地添加自定义样式</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">blockquote</span> <span class="token punctuation">{</span>
  <span class="token property">border-left</span><span class="token punctuation">:</span> 0.2rem solid #3eaf7c<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 700<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),N={href:"https://vuepress.vuejs.org/zh/config/#styling",target:"_blank",rel:"noopener noreferrer"},G=t(`<h2 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> Emoji</h2><p>输入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>:tada: :smile:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出</p><p>🎉 😄</p>`,5),C={href:"https://www.webfx.com/tools/emoji-cheat-sheet/",target:"_blank",rel:"noopener noreferrer"},F=t(`<h2 id="搭建过程踩的坑" tabindex="-1"><a class="header-anchor" href="#搭建过程踩的坑" aria-hidden="true">#</a> 搭建过程踩的坑</h2><ul><li>h1 标题不会生成目录，因此若想标题出现在目录，请用 h2 和 h3 标题</li><li>图片要填写标准的相对路径，如 <code>./images/xxx.png</code>，不要省略前面的 <code>./</code>，否则图片无法正常显示</li><li>在非代码块中（包括行内代码）不要使用紧贴的大括号，两个同向的大括号之间加个空格</li></ul><div class="language-Vue line-numbers-mode" data-ext="Vue"><pre class="language-Vue"><code>
// 报错写法
style={{ key: value }}
// 不报错写法
style={ { key: value } }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>侧边栏对应的文件路径要书写正确，否则侧边栏无法展示</li><li>若一个目录有 <code>README.md</code> 和 <code>sidebar.js</code> ，则其子目录文件夹不能再有</li><li>总之，如果页面展示出现问题，多看看控制台的报错，一般都会有提示</li></ul><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2>`,5),O={href:"https://vuepress.vuejs.org/zh/guide/deploy.html",target:"_blank",rel:"noopener noreferrer"},T=t(`<ol><li>在 <code>docs/.vuepress/config.js</code> 中设置正确的 <code>base</code>。</li></ol><p>若发布到 <code>https://&lt;USERNAME&gt;.gitee.io/</code> ，可省略此步，因为 <code>base</code> 默认为 <code>&quot;/&quot;</code> 。</p><p>若发布到 <code>https://&lt;USERNAME&gt;.gitee.io/&lt;REPO&gt;/</code> ，<code>&lt;REPO&gt;</code> 为仓库名，则将 <code>base</code> 设置为 <code>&quot;/&lt;REPO&gt;/&quot;</code> 。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 仓库名为 bruceblog</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/bruceblog/&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>在 <code>bruceblog</code> 目录下运行打包命令</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>打包完成后，会生成 <code>dist</code> 文件夹，进入该文件夹</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> docs/.vuepress/dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>初始化 git，并添加暂存区，提交本地库</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;init bruceblog&#39;</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>为远程仓库起别名</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin 远程仓库地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>拉取远程仓库分支，与本地分支合并</li></ol><p>本人额外创建了一个分支，<code>master</code> 分支保存原始的 markdown 文档，<code>pages</code>分支则用于上传打包后的文件，并使用 <code>pages</code> 分支部署 Gitee Pages。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> pull origin pages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="7"><li>推送本地分支到远程分支</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin master:pages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="8"><li>选择部署分支，并开启 Gitee Pages 服务</li></ol><p>至此，BruceBlog 的搭建大功告成！🎉😄</p><h2 id="更新网站内容" tabindex="-1"><a class="header-anchor" href="#更新网站内容" aria-hidden="true">#</a> 更新网站内容</h2><blockquote><p>VuePress 每次打包生成的 dist 都不相同，因此尽量有比较大改动时才更新网站，这不像 docsify 那么方便自由</p></blockquote><ul><li>本地拷贝一份 <code>.git</code> 文件夹备用，删除旧的 <code>dist</code> 文件夹</li><li>重新打包生成新的 <code>dist</code> 文件夹</li><li>把备用 <code>.git</code> 文件夹拷贝到新的 <code>dist</code> 文件夹中</li><li>将修改添加暂存区，提交本地库，并推送到远程分支</li><li>如此，既能更新远程 <code>pages</code> 分支内容，也能同步 git 的历史操作记录</li></ul>`,22);function U(I,H){const a=p("ExternalLinkIcon");return i(),o("div",null,[r,n("ol",d,[n("li",null,[n("p",null,[s("在 docs 目录下新建 "),n("a",u,[s("README.md"),e(a)]),s(" 文档，并写入一些内容")])]),v]),k,n("p",null,[s("以下为 BruceBlog 部分目录结构，比较重要的是 "),m,s(" 目录的结构。官方目录结构请移步 "),n("a",b,[s("→"),e(a)])]),h,g,y,n("p",null,[s("官方文档："),n("a",_,[s("配置"),e(a)]),s("、"),n("a",f,[s("插件"),e(a)]),s("、"),n("a",x,[s("默认主题配置"),e(a)])]),j,n("p",null,[n("a",E,[s("官方文档"),e(a)])]),q,V,B,n("ul",null,[A,n("li",null,[s("若没有指明具体文件，只有文件夹，则默认会寻找该文件夹下的 "),n("a",R,[s("READMED.md"),e(a)]),s(" 文档，如 "),D,s(" → "),M])]),z,n("p",null,[n("a",P,[s("官方文档"),e(a)])]),w,n("p",null,[n("a",L,[s("官方文档"),e(a)])]),S,n("p",null,[n("a",N,[s("官方文档"),e(a)])]),G,n("p",null,[n("a",C,[s("Emoji 大全"),e(a)])]),F,n("p",null,[s("本人选择部署到 Gitee Pages，官方只有部署到 GitHub Pages 的"),n("a",O,[s("教程"),e(a)]),s("，不过也是大同小异。")]),T])}const W=l(c,[["render",U],["__file","index.html.vue"]]);export{W as default};
