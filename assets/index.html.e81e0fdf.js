import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as l,a as n,b as a,d as t,e as s,r as p}from"./app.04d31cbf.js";const c={},r=t(`<h2 id="\u4F53\u9A8C-vuepress" tabindex="-1"><a class="header-anchor" href="#\u4F53\u9A8C-vuepress" aria-hidden="true">#</a> \u4F53\u9A8C VuePress</h2><ol><li>\u521B\u5EFA\u5E76\u8FDB\u5165\u65B0\u76EE\u5F55</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> bruceblog
<span class="token builtin class-name">cd</span> bruceblog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u521D\u59CB\u5316 npm</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>\u5B89\u88C5 VuePress</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -D vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>\u5728\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA docs \u6587\u4EF6\u5939</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),d={start:"5"},u=s("\u5728 docs \u76EE\u5F55\u4E0B\u65B0\u5EFA "),v={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},k=s("README.md"),m=s(" \u6587\u6863\uFF0C\u5E76\u5199\u5165\u4E00\u4E9B\u5185\u5BB9"),b=n("li",null,[n("p",null,[s("\u5728 "),n("code",null,"package.json"),s(" \u6587\u4EF6\u6DFB\u52A0 "),n("code",null,"scripts")])],-1),h=t(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>\u542F\u52A8\u672C\u5730\u670D\u52A1\u5668</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="8"><li>\u6D4F\u89C8\u5668\u6253\u5F00\u670D\u52A1\u5668\u6240\u7ED9\u5730\u5740</li></ol><h2 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u76EE\u5F55\u7ED3\u6784</h2>`,5),g=s("\u4EE5\u4E0B\u4E3A BruceBlog \u90E8\u5206\u76EE\u5F55\u7ED3\u6784\uFF0C\u6BD4\u8F83\u91CD\u8981\u7684\u662F "),_=n("code",null,".vuepress",-1),y=s(" \u76EE\u5F55\u7684\u7ED3\u6784\u3002\u5B98\u65B9\u76EE\u5F55\u7ED3\u6784\u8BF7\u79FB\u6B65 "),f={href:"https://vuepress.vuejs.org/zh/guide/directory-structure.html",target:"_blank",rel:"noopener noreferrer"},x=s("\u2192"),j=n("pre",null,[n("code",null,`.
\u251C\u2500\u2500 docs
\u2502   \u251C\u2500\u2500 .vuepress
\u2502   \u2502   \u251C\u2500\u2500 public
|   |   |   \u2514\u2500\u2500 img
\u2502   \u2502   \u251C\u2500\u2500 styles
\u2502   \u2502   \u2502   \u2514\u2500\u2500 index.styl
\u2502   \u2502   \u251C\u2500\u2500 nav.js
\u2502   \u2502   \u251C\u2500\u2500 sidebar.js
\u2502   \u2502   \u2514\u2500\u2500 config.js
|   |
\u2502   \u251C\u2500\u2500 notes
\u2502   \u2502   \u251C\u2500\u2500 vue
|   \u2502   \u2502   \u251C\u2500\u2500 images
|   \u2502   \u2502   \u251C\u2500\u2500 sidebar.js
|   \u2502   \u2502   \u251C\u2500\u2500 vuex.md
|   \u2502   \u2502   \u251C\u2500\u2500 vue3.md
|   \u2502   \u2502   \u2514\u2500\u2500 ...
|   |   |
|   |   \u251C\u2500\u2500 react
|   \u2502   \u2502   \u251C\u2500\u2500 images
|   \u2502   \u2502   \u251C\u2500\u2500 sidebar.js
|   \u2502   \u2502   \u251C\u2500\u2500 react-cli.md
|   \u2502   \u2502   \u2514\u2500\u2500 ...
|   \u2502   \u2502
|   \u2502   \u251C\u2500\u2500 ...
|   |   |
\u2502   \u2502   \u2514\u2500\u2500 README.md
|   |
\u2502   \u2514\u2500\u2500 README.md
\u2502
\u251C\u2500\u2500 .gitignore
|
\u2514\u2500\u2500 package.json
`)],-1),E=n("h2",{id:"config-js-\u6587\u4EF6\u914D\u7F6E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#config-js-\u6587\u4EF6\u914D\u7F6E","aria-hidden":"true"},"#"),s(),n("code",null,"config.js"),s(" \u6587\u4EF6\u914D\u7F6E")],-1),q=n("p",null,"\u6BCF\u4E2A\u914D\u7F6E\u7684\u4F5C\u7528\u90FD\u5199\u5728\u6CE8\u91CA\u5F53\u4E2D\u3002",-1),V=s("\u5B98\u65B9\u6587\u6863\uFF1A"),B={href:"https://vuepress.vuejs.org/zh/config/",target:"_blank",rel:"noopener noreferrer"},A=s("\u914D\u7F6E"),R=s("\u3001"),D={href:"https://vuepress.vuejs.org/zh/plugin/",target:"_blank",rel:"noopener noreferrer"},M=s("\u63D2\u4EF6"),z=s("\u3001"),P={href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html",target:"_blank",rel:"noopener noreferrer"},w=s("\u9ED8\u8BA4\u4E3B\u9898\u914D\u7F6E"),L=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u63D2\u4EF6\uFF1A\u7F6E\u9876\u6309\u94AE\u3001\u56FE\u7247\u7F29\u653E</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@vuepress/back-to-top&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;@vuepress/medium-zoom&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u81EA\u5B9A\u4E49\u7F51\u7AD9 favicon</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;/img/logo.png&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6839\u8DEF\u5F84\uFF0C\u548C\u4ED3\u5E93\u540D\u4E00\u81F4</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/bruceblog/&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5DE6\u4E0A\u89D2\u6807\u9898</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;BruceBlog&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// markdown \u76F8\u5173\u914D\u7F6E</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4EE3\u7801\u5757\u884C\u53F7</span>
    <span class="token literal-property property">lineNumbers</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u9ED8\u8BA4\u4E3B\u9898\u76F8\u5173\u914D\u7F6E</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u914D\u7F6E\u5DE6\u4E0A\u89D2\u7684 logo</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;/img/logo.png&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5BFC\u822A\u680F</span>
    <span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./nav.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4FA7\u8FB9\u680F</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./sidebar.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// sidebar: &#39;auto&#39;,</span>
    <span class="token comment">// \u6807\u9898\u6DF1\u5EA6\uFF0C2 \u8868\u793A\u63D0\u53D6 h2 \u548C h3 \u6807\u9898</span>
    <span class="token literal-property property">sidebarDepth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u542F\u7528\u9875\u9762\u6EDA\u52A8\u6548\u679C</span>
    <span class="token literal-property property">smoothScroll</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span>
    <span class="token literal-property property">lastUpdated</span><span class="token operator">:</span> <span class="token string">&#39;Last Updated&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u9ED8\u8BA4\u503C\u662F true \u3002\u8BBE\u7F6E\u4E3A false \u6765\u7981\u7528\u6240\u6709\u9875\u9762\u7684 \u4E0B\u4E00\u7BC7 \u94FE\u63A5</span>
    <span class="token literal-property property">nextLinks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u9ED8\u8BA4\u503C\u662F true \u3002\u8BBE\u7F6E\u4E3A false \u6765\u7981\u7528\u6240\u6709\u9875\u9762\u7684 \u4E0A\u4E00\u7BC7 \u94FE\u63A5</span>
    <span class="token literal-property property">prevLinks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5BFC\u822A\u680F\u663E\u793A gitee \u4ED3\u5E93</span>
    <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">&#39;https://gitee.com/brucecai55520/bruceblog&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">repoLabel</span><span class="token operator">:</span> <span class="token string">&#39;Gitee&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9996\u9875" tabindex="-1"><a class="header-anchor" href="#\u9996\u9875" aria-hidden="true">#</a> \u9996\u9875</h2><p><code>docs/README.md</code>\u6587\u6863\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /img/logo.png
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> BruceBlog
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> \u4E00\u540D\u524D\u7AEFer\u7684\u5B66\u4E60\u7B14\u8BB0
<span class="token key atrule">actionText</span><span class="token punctuation">:</span> Get Started \u2192
<span class="token key atrule">actionLink</span><span class="token punctuation">:</span> /notes/
<span class="token key atrule">features</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> \u524D\u7AEF\u77E5\u8BC6
    <span class="token key atrule">details</span><span class="token punctuation">:</span> HTML\u3001CSS\u3001JavaScript\u3001Vue\u3001React<span class="token punctuation">...</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> \u8BA1\u7B97\u673A\u57FA\u7840
    <span class="token key atrule">details</span><span class="token punctuation">:</span> \u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u6570\u636E\u7ED3\u6784\u3001\u64CD\u4F5C\u7CFB\u7EDF<span class="token punctuation">...</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> \u6742\u4E03\u6742\u516B
    <span class="token key atrule">details</span><span class="token punctuation">:</span> \u524D\u7AEF\u9762\u8BD5\u5E38\u89C1\u7684\u9762\u8BD5\u9898\u3001\u8D44\u6E90\u63A8\u8350<span class="token punctuation">...</span>
<span class="token key atrule">footer</span><span class="token punctuation">:</span> Oh this is BruceBlog
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),S={href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html",target:"_blank",rel:"noopener noreferrer"},N=s("\u5B98\u65B9\u6587\u6863"),G=n("h2",{id:"\u5BFC\u822A\u680F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5BFC\u822A\u680F","aria-hidden":"true"},"#"),s(" \u5BFC\u822A\u680F")],-1),C=n("p",null,[s("\u8FD9\u91CC\u6CA1\u6709\u76F4\u63A5\u628A\u914D\u7F6E\u5199\u5728 "),n("code",null,"config.js"),s(" \u6587\u4EF6\u4E2D\uFF0C\u800C\u662F\u63D0\u53D6\u6210\u4E00\u4E2A\u6A21\u5757\uFF0C\u4FBF\u4E8E\u540E\u7EED\u7EF4\u62A4\uFF0C\u4E5F\u907F\u514D "),n("code",null,"config.js"),s(" \u6587\u4EF6\u8FC7\u4E8E\u81C3\u80BF\u3002")],-1),O=n("p",null,"\u6CE8\u610F\u4E8B\u9879\uFF1A",-1),T=n("li",null,[s("\u6240\u6709\u8DEF\u5F84\u4EE5 "),n("code",null,"/"),s(" \u5F00\u5934\uFF0C"),n("code",null,"/"),s(" \u4EE3\u8868 docs \u76EE\u5F55")],-1),U=s("\u82E5\u6CA1\u6709\u6307\u660E\u5177\u4F53\u6587\u4EF6\uFF0C\u53EA\u6709\u6587\u4EF6\u5939\uFF0C\u5219\u9ED8\u8BA4\u4F1A\u5BFB\u627E\u8BE5\u6587\u4EF6\u5939\u4E0B\u7684 "),F={href:"http://READMED.md",target:"_blank",rel:"noopener noreferrer"},I=s("READMED.md"),H=s(" \u6587\u6863\uFF0C\u5982 "),J=n("code",null,"'/notes/'",-1),K=s(" \u2192 "),Q=n("code",null,"'/notes/README.md'",-1),W=t(`<div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>// .vuepress/nav.js
module.exports = [
  {
    text: &#39;Resources&#39;,
    link: &#39;/notes/xxx/xxxx&#39;,
  },
  {
    text: &#39;\u524D\u7AEF\u5B66\u4E60&#39;,
    items: [
      { text: &#39;Vue&#39;, link: &#39;/notes/vue/vue\u57FA\u7840&#39; },
      { text: &#39;React&#39;, link: &#39;/notes/react/react\u57FA\u7840&#39; },
    ],
  },
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),X={href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F",target:"_blank",rel:"noopener noreferrer"},Y=s("\u5B98\u65B9\u6587\u6863"),Z=t(`<h2 id="\u4FA7\u8FB9\u680F" tabindex="-1"><a class="header-anchor" href="#\u4FA7\u8FB9\u680F" aria-hidden="true">#</a> \u4FA7\u8FB9\u680F</h2><p>BruceBlog \u4E3A\u4E0D\u540C\u9875\u9762\u663E\u793A\u4E0D\u540C\u7684\u4FA7\u8FB9\u680F\uFF0C\u5E76\u4E14\u6BCF\u4E2A\u9875\u9762\u7684\u4FA7\u8FB9\u680F\u5C01\u88C5\u4E3A\u4E00\u4E2A\u6A21\u5757\u4FBF\u4E8E\u540E\u7EED\u7EF4\u62A4\u3002</p><p>\u4EE5 Vue \u9875\u9762\u7684\u4FA7\u8FB9\u680F\u4E3A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// .vuepress/sidebar.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;/notes/vue&#39;</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../notes/vue/sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;/notes/react&#39;</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../notes/react/sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// notes/vue/sidebar.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Vue\u6838\u5FC3\u57FA\u7840&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/notes/vue/vue\u6838\u5FC3\u57FA\u7840&#39;</span><span class="token punctuation">,</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),$={href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F",target:"_blank",rel:"noopener noreferrer"},nn=s("\u5B98\u65B9\u6587\u6863"),sn=t(`<h2 id="\u4FEE\u6539\u9ED8\u8BA4\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u9ED8\u8BA4\u6837\u5F0F" aria-hidden="true">#</a> \u4FEE\u6539\u9ED8\u8BA4\u6837\u5F0F</h2><p>\u5728 <code>.vuepress/styles/index.styl</code> \u6587\u4EF6\u53EF\u4EE5\u65B9\u4FBF\u5730\u6DFB\u52A0\u81EA\u5B9A\u4E49\u6837\u5F0F</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">blockquote</span> <span class="token punctuation">{</span>
  <span class="token property">border-left</span><span class="token punctuation">:</span> 0.2rem solid #3eaf7c<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 700<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),en={href:"https://vuepress.vuejs.org/zh/config/#styling",target:"_blank",rel:"noopener noreferrer"},an=s("\u5B98\u65B9\u6587\u6863"),tn=t(`<h2 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> Emoji</h2><p>\u8F93\u5165</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>:tada: :smile:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8F93\u51FA</p><p>\u{1F389} \u{1F604}</p>`,5),on={href:"https://www.webfx.com/tools/emoji-cheat-sheet/",target:"_blank",rel:"noopener noreferrer"},ln=s("Emoji \u5927\u5168"),pn=t(`<h2 id="\u642D\u5EFA\u8FC7\u7A0B\u8E29\u7684\u5751" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFA\u8FC7\u7A0B\u8E29\u7684\u5751" aria-hidden="true">#</a> \u642D\u5EFA\u8FC7\u7A0B\u8E29\u7684\u5751</h2><ul><li>h1 \u6807\u9898\u4E0D\u4F1A\u751F\u6210\u76EE\u5F55\uFF0C\u56E0\u6B64\u82E5\u60F3\u6807\u9898\u51FA\u73B0\u5728\u76EE\u5F55\uFF0C\u8BF7\u7528 h2 \u548C h3 \u6807\u9898</li><li>\u56FE\u7247\u8981\u586B\u5199\u6807\u51C6\u7684\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u5982 <code>./images/xxx.png</code>\uFF0C\u4E0D\u8981\u7701\u7565\u524D\u9762\u7684 <code>./</code>\uFF0C\u5426\u5219\u56FE\u7247\u65E0\u6CD5\u6B63\u5E38\u663E\u793A</li><li>\u5728\u975E\u4EE3\u7801\u5757\u4E2D\uFF08\u5305\u62EC\u884C\u5185\u4EE3\u7801\uFF09\u4E0D\u8981\u4F7F\u7528\u7D27\u8D34\u7684\u5927\u62EC\u53F7\uFF0C\u4E24\u4E2A\u540C\u5411\u7684\u5927\u62EC\u53F7\u4E4B\u95F4\u52A0\u4E2A\u7A7A\u683C</li></ul><div class="language-Vue ext-Vue line-numbers-mode"><pre class="language-Vue"><code>
// \u62A5\u9519\u5199\u6CD5
style={{ key: value }}
// \u4E0D\u62A5\u9519\u5199\u6CD5
style={ { key: value } }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4FA7\u8FB9\u680F\u5BF9\u5E94\u7684\u6587\u4EF6\u8DEF\u5F84\u8981\u4E66\u5199\u6B63\u786E\uFF0C\u5426\u5219\u4FA7\u8FB9\u680F\u65E0\u6CD5\u5C55\u793A</li><li>\u82E5\u4E00\u4E2A\u76EE\u5F55\u6709 <code>README.md</code> \u548C <code>sidebar.js</code> \uFF0C\u5219\u5176\u5B50\u76EE\u5F55\u6587\u4EF6\u5939\u4E0D\u80FD\u518D\u6709</li><li>\u603B\u4E4B\uFF0C\u5982\u679C\u9875\u9762\u5C55\u793A\u51FA\u73B0\u95EE\u9898\uFF0C\u591A\u770B\u770B\u63A7\u5236\u53F0\u7684\u62A5\u9519\uFF0C\u4E00\u822C\u90FD\u4F1A\u6709\u63D0\u793A</li></ul><h2 id="\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a> \u90E8\u7F72</h2>`,5),cn=s("\u672C\u4EBA\u9009\u62E9\u90E8\u7F72\u5230 Gitee Pages\uFF0C\u5B98\u65B9\u53EA\u6709\u90E8\u7F72\u5230 GitHub Pages \u7684"),rn={href:"https://vuepress.vuejs.org/zh/guide/deploy.html",target:"_blank",rel:"noopener noreferrer"},dn=s("\u6559\u7A0B"),un=s("\uFF0C\u4E0D\u8FC7\u4E5F\u662F\u5927\u540C\u5C0F\u5F02\u3002"),vn=t(`<ol><li>\u5728 <code>docs/.vuepress/config.js</code> \u4E2D\u8BBE\u7F6E\u6B63\u786E\u7684 <code>base</code>\u3002</li></ol><p>\u82E5\u53D1\u5E03\u5230 <code>https://&lt;USERNAME&gt;.gitee.io/</code> \uFF0C\u53EF\u7701\u7565\u6B64\u6B65\uFF0C\u56E0\u4E3A <code>base</code> \u9ED8\u8BA4\u4E3A <code>&quot;/&quot;</code> \u3002</p><p>\u82E5\u53D1\u5E03\u5230 <code>https://&lt;USERNAME&gt;.gitee.io/&lt;REPO&gt;/</code> \uFF0C<code>&lt;REPO&gt;</code> \u4E3A\u4ED3\u5E93\u540D\uFF0C\u5219\u5C06 <code>base</code> \u8BBE\u7F6E\u4E3A <code>&quot;/&lt;REPO&gt;/&quot;</code> \u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4ED3\u5E93\u540D\u4E3A bruceblog</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/bruceblog/&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5728 <code>bruceblog</code> \u76EE\u5F55\u4E0B\u8FD0\u884C\u6253\u5305\u547D\u4EE4</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>\u6253\u5305\u5B8C\u6210\u540E\uFF0C\u4F1A\u751F\u6210 <code>dist</code> \u6587\u4EF6\u5939\uFF0C\u8FDB\u5165\u8BE5\u6587\u4EF6\u5939</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> docs/.vuepress/dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>\u521D\u59CB\u5316 git\uFF0C\u5E76\u6DFB\u52A0\u6682\u5B58\u533A\uFF0C\u63D0\u4EA4\u672C\u5730\u5E93</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> -A
<span class="token function">git</span> commit -m <span class="token string">&#39;init bruceblog&#39;</span> -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>\u4E3A\u8FDC\u7A0B\u4ED3\u5E93\u8D77\u522B\u540D</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin \u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>\u62C9\u53D6\u8FDC\u7A0B\u4ED3\u5E93\u5206\u652F\uFF0C\u4E0E\u672C\u5730\u5206\u652F\u5408\u5E76</li></ol><p>\u672C\u4EBA\u989D\u5916\u521B\u5EFA\u4E86\u4E00\u4E2A\u5206\u652F\uFF0C<code>master</code> \u5206\u652F\u4FDD\u5B58\u539F\u59CB\u7684 markdown \u6587\u6863\uFF0C<code>pages</code>\u5206\u652F\u5219\u7528\u4E8E\u4E0A\u4F20\u6253\u5305\u540E\u7684\u6587\u4EF6\uFF0C\u5E76\u4F7F\u7528 <code>pages</code> \u5206\u652F\u90E8\u7F72 Gitee Pages\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> pull origin pages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="7"><li>\u63A8\u9001\u672C\u5730\u5206\u652F\u5230\u8FDC\u7A0B\u5206\u652F</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push origin master:pages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="8"><li>\u9009\u62E9\u90E8\u7F72\u5206\u652F\uFF0C\u5E76\u5F00\u542F Gitee Pages \u670D\u52A1</li></ol><p>\u81F3\u6B64\uFF0CBruceBlog \u7684\u642D\u5EFA\u5927\u529F\u544A\u6210\uFF01\u{1F389}\u{1F604}</p><h2 id="\u66F4\u65B0\u7F51\u7AD9\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u7F51\u7AD9\u5185\u5BB9" aria-hidden="true">#</a> \u66F4\u65B0\u7F51\u7AD9\u5185\u5BB9</h2><blockquote><p>VuePress \u6BCF\u6B21\u6253\u5305\u751F\u6210\u7684 dist \u90FD\u4E0D\u76F8\u540C\uFF0C\u56E0\u6B64\u5C3D\u91CF\u6709\u6BD4\u8F83\u5927\u6539\u52A8\u65F6\u624D\u66F4\u65B0\u7F51\u7AD9\uFF0C\u8FD9\u4E0D\u50CF docsify \u90A3\u4E48\u65B9\u4FBF\u81EA\u7531</p></blockquote><ul><li>\u672C\u5730\u62F7\u8D1D\u4E00\u4EFD <code>.git</code> \u6587\u4EF6\u5939\u5907\u7528\uFF0C\u5220\u9664\u65E7\u7684 <code>dist</code> \u6587\u4EF6\u5939</li><li>\u91CD\u65B0\u6253\u5305\u751F\u6210\u65B0\u7684 <code>dist</code> \u6587\u4EF6\u5939</li><li>\u628A\u5907\u7528 <code>.git</code> \u6587\u4EF6\u5939\u62F7\u8D1D\u5230\u65B0\u7684 <code>dist</code> \u6587\u4EF6\u5939\u4E2D</li><li>\u5C06\u4FEE\u6539\u6DFB\u52A0\u6682\u5B58\u533A\uFF0C\u63D0\u4EA4\u672C\u5730\u5E93\uFF0C\u5E76\u63A8\u9001\u5230\u8FDC\u7A0B\u5206\u652F</li><li>\u5982\u6B64\uFF0C\u65E2\u80FD\u66F4\u65B0\u8FDC\u7A0B <code>pages</code> \u5206\u652F\u5185\u5BB9\uFF0C\u4E5F\u80FD\u540C\u6B65 git \u7684\u5386\u53F2\u64CD\u4F5C\u8BB0\u5F55</li></ul>`,22);function kn(mn,bn){const e=p("ExternalLinkIcon");return i(),l("div",null,[r,n("ol",d,[n("li",null,[n("p",null,[u,n("a",v,[k,a(e)]),m])]),b]),h,n("p",null,[g,_,y,n("a",f,[x,a(e)])]),j,E,q,n("p",null,[V,n("a",B,[A,a(e)]),R,n("a",D,[M,a(e)]),z,n("a",P,[w,a(e)])]),L,n("p",null,[n("a",S,[N,a(e)])]),G,C,O,n("ul",null,[T,n("li",null,[U,n("a",F,[I,a(e)]),H,J,K,Q])]),W,n("p",null,[n("a",X,[Y,a(e)])]),Z,n("p",null,[n("a",$,[nn,a(e)])]),sn,n("p",null,[n("a",en,[an,a(e)])]),tn,n("p",null,[n("a",on,[ln,a(e)])]),pn,n("p",null,[cn,n("a",rn,[dn,a(e)]),un]),vn])}var _n=o(c,[["render",kn],["__file","index.html.vue"]]);export{_n as default};
