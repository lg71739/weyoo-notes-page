import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as p,a as n,t as e,e as o,d as c}from"./app.b683a5bb.js";const l={},u=n("p",null,"Vue\u6A21\u677F\u8BED\u6CD5\u67092\u5927\u7C7B:",-1),i=n("h2",{id:"\u63D2\u503C\u8BED\u6CD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u63D2\u503C\u8BED\u6CD5","aria-hidden":"true"},"#"),o(" \u63D2\u503C\u8BED\u6CD5")],-1),r=n("p",null,"\u529F\u80FD\uFF1A\u7528\u4E8E\u89E3\u6790\u6807\u7B7E\u4F53\u5185\u5BB9",-1),k=c(`<h2 id="\u6307\u4EE4\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4\u8BED\u6CD5" aria-hidden="true">#</a> \u6307\u4EE4\u8BED\u6CD5</h2><p>\u529F\u80FD\uFF1A\u7528\u4E8E\u89E3\u6790\u6807\u7B7E\uFF08\u5305\u62EC\uFF1A\u6807\u7B7E\u5C5E\u6027\u3001\u6807\u7B7E\u4F53\u5185\u5BB9\u3001\u7ED1\u5B9A\u4E8B\u4EF6\u2026\uFF09</p><p>\u4E3E\u4F8B\uFF1Av-bind:href=&quot;xxx&quot; \u6216 \u7B80\u5199\u4E3A :href=&quot;xxx&quot;\uFF0Cxxx\u540C\u6837\u8981\u5199js\u8868\u8FBE\u5F0F\uFF0C\u4E14\u53EF\u4EE5\u76F4\u63A5\u8BFB\u53D6\u5230data\u4E2D\u7684\u6240\u6709\u5C5E\u6027</p><p>\u5907\u6CE8\uFF1AVue\u4E2D\u6709\u5F88\u591A\u7684\u6307\u4EE4\uFF0C\u4E14\u5F62\u5F0F\u90FD\u662F v-xxx\uFF0C\u6B64\u5904\u53EA\u662F\u62FFv-bind\u4E3E\u4F8B</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>\u63D2\u503C\u8BED\u6CD5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">&gt;</span></span>\u4F60\u597D\uFF0C{{ name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>\u6307\u4EE4\u8BED\u6CD5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tencent.url.toUpperCase()<span class="token punctuation">&quot;</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u70B9\u6211\u53BB\u770B{{ tencent.name }}1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tencent.url<span class="token punctuation">&quot;</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u70B9\u6211\u53BB\u770B{{ tencent.name }}2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
      	<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;jack&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">tencent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5F00\u7AEF&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://v.qq.com/x/cover/mzc00200mp8vo9b/n0041aa087e.html&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function d(a,v){return t(),p("div",null,[u,i,r,n("p",null,"\u5199\u6CD5\uFF1A"+e(a.xxx)+"\uFF0Cxxx\u662Fjs\u8868\u8FBE\u5F0F\uFF0C\u4E14\u53EF\u4EE5\u76F4\u63A5\u8BFB\u53D6\u5230data\u4E2D\u7684\u6240\u6709\u5C5E\u6027",1),k])}var h=s(l,[["render",d],["__file","index.html.vue"]]);export{h as default};
