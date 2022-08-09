import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as i,a as n,b as t,e as s,t as c,d as e,r as u}from"./app.04d31cbf.js";const r={},d=n("h2",{id:"_1-1\u5B98\u7F51",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-1\u5B98\u7F51","aria-hidden":"true"},"#"),s(" 1.1\u5B98\u7F51")],-1),k=s("\u82F1\u6587\u5B98\u7F51: "),h={href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"},v=s("https://vuejs.org/"),m=n("br",null,null,-1),_=s(" \u4E2D\u6587\u5B98\u7F51: "),g={href:"https://cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},b=s("https://cn.vuejs.org/"),x=e('<h2 id="_1-2\u4ECB\u7ECD\u4E0E\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#_1-2\u4ECB\u7ECD\u4E0E\u63CF\u8FF0" aria-hidden="true">#</a> 1.2\u4ECB\u7ECD\u4E0E\u63CF\u8FF0</h2><p>Vue \u662F\u4E00\u5957\u7528\u6765\u52A8\u6001\u6784\u5EFA\u7528\u6237\u754C\u9762\u7684\u6E10\u8FDB\u5F0FJavaScript\u6846\u67B6 \u25CB\u6784\u5EFA\u7528\u6237\u754C\u9762\uFF1A\u628A\u6570\u636E\u901A\u8FC7\u67D0\u79CD\u529E\u6CD5\u53D8\u6210\u7528\u6237\u754C\u9762 \u25CB\u6E10\u8FDB\u5F0F\uFF1AVue\u53EF\u4EE5\u81EA\u5E95\u5411\u4E0A\u9010\u5C42\u7684\u5E94\u7528\uFF0C\u7B80\u5355\u5E94\u7528\u53EA\u9700\u8981\u4E00\u4E2A\u8F7B\u91CF\u5C0F\u5DE7\u7684\u6838\u5FC3\u5E93\uFF0C\u590D\u6742\u5E94\u7528\u53EF\u4EE5\u5F15\u5165\u5404\u5F0F\u5404\u6837\u7684Vue\u63D2\u4EF6</p><p><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2022/08/9_23_2_16_202208092302515.png" alt="" loading="lazy"></p><h2 id="_1-3-vue-\u7684\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#_1-3-vue-\u7684\u7279\u70B9" aria-hidden="true">#</a> 1.3. Vue \u7684\u7279\u70B9</h2><ol><li><p>\u9075\u5FAAMVVM\u6A21\u5F0F</p></li><li><p>\u7F16\u7801\u7B80\u6D01\uFF0C\u4F53\u79EF\u5C0F\uFF0C\u8FD0\u884C\u6548\u7387\u9AD8\uFF0C\u9002\u5408\u79FB\u52A8/PC\u7AEF\u5F00\u53D1</p></li><li><p>\u5B83\u672C\u8EAB\u53EA\u5173\u6CE8 UI\uFF0C\u53EF\u4EE5\u5F15\u5165\u5176\u5B83\u7B2C\u4E09\u65B9\u5E93\u5F00\u53D1\u9879\u76EE</p></li><li><p>\u91C7\u7528\u7EC4\u4EF6\u5316\u6A21\u5F0F\uFF0C\u63D0\u9AD8\u4EE3\u7801\u590D\u7528\u7387\u3001\u4E14\u8BA9\u4EE3\u7801\u66F4\u597D\u7EF4\u62A4</p></li><li><p>\u58F0\u660E\u5F0F\u7F16\u7801\uFF0C\u8BA9\u7F16\u7801\u4EBA\u5458\u65E0\u9700\u76F4\u63A5\u64CD\u4F5CDOM\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387</p></li><li><p>\u4F7F\u7528\u865A\u62DFDOM \u548C Diff\u7B97\u6CD5\uFF0C\u5C3D\u91CF\u590D\u7528DOM\u8282\u70B9</p></li></ol><h2 id="_1-4\u4E0E\u5176\u4ED6-js-\u6846\u67B6\u7684\u5173\u8054" tabindex="-1"><a class="header-anchor" href="#_1-4\u4E0E\u5176\u4ED6-js-\u6846\u67B6\u7684\u5173\u8054" aria-hidden="true">#</a> 1.4\u4E0E\u5176\u4ED6 JS \u6846\u67B6\u7684\u5173\u8054</h2><p>\u501F\u9274 angular \u7684 \u6A21\u677F \u548C \u6570\u636E\u7ED1\u5B9A \u6280\u672F \u501F\u9274 react \u7684 \u7EC4\u4EF6\u5316 \u548C \u865A\u62DFDOM \u6280\u672F</p><h2 id="_1-5vue-\u5468\u8FB9\u5E93" tabindex="-1"><a class="header-anchor" href="#_1-5vue-\u5468\u8FB9\u5E93" aria-hidden="true">#</a> 1.5Vue \u5468\u8FB9\u5E93</h2><ul><li>vue-cli\uFF1Avue \u811A\u624B\u67B6</li><li>vue-router\uFF1A\u8DEF\u7531</li><li>vuex\uFF1A\u72B6\u6001\u7BA1\u7406\uFF08\u5B83\u662F vue \u7684\u63D2\u4EF6\u4F46\u662F\u6CA1\u6709\u7528 vue-xxx \u7684\u547D\u540D\u89C4\u5219\uFF09</li><li>vue-lazyload\uFF1A\u56FE\u7247\u61D2\u52A0\u8F7D</li><li>vue-scroller\uFF1A\u9875\u9762\u6ED1\u52A8\u76F8\u5173</li><li>mint-ui\uFF1A\u57FA\u4E8E vue \u7684 UI \u7EC4\u4EF6\u5E93\uFF08\u79FB\u52A8\u7AEF\uFF09</li><li>element-ui\uFF1A\u57FA\u4E8E vue \u7684 UI \u7EC4\u4EF6\u5E93\uFF08PC \u7AEF\uFF09</li></ul><h2 id="_1-6-vue\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-6-vue\u914D\u7F6E" aria-hidden="true">#</a> 1.6 Vue\u914D\u7F6E</h2><h3 id="\u524D\u7F6E\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F6E\u5DE5\u4F5C" aria-hidden="true">#</a> \u524D\u7F6E\u5DE5\u4F5C</h3><ol><li>\u7ED9\u6D4F\u89C8\u5668\u5B89\u88C5 Vue Devtools \u63D2\u4EF6</li><li>\u6807\u7B7E\u5F15\u5165Vue\u5305</li><li>\u963B\u6B62vue\u5728\u542F\u52A8\u65F6\u751F\u6210\u751F\u4EA7\u63D0\u793AVue.config.productionTip = false\uFF08\u53EF\u9009\uFF09</li><li>favicon \u9700\u8981\u5C06\u9875\u7B7E\u56FE\u6807\u653E\u5728\u9879\u76EE\u6839\u8DEF\u5F84\uFF0C\u91CD\u65B0\u6253\u5F00\u5C31\u6709\u4E86\uFF08shfit+F5 \u5F3A\u5236\u5237\u65B0\uFF09</li></ol><h3 id="\u914D\u7F6E\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9009\u9879" aria-hidden="true">#</a> \u914D\u7F6E\u9009\u9879</h3>',13),f=n("li",null,[n("p",null,"\u60F3\u8BA9Vue\u5DE5\u4F5C\uFF0C\u5C31\u5FC5\u987B\u521B\u5EFA\u4E00\u4E2AVue\u5B9E\u4F8B\uFF0C\u4E14\u8981\u4F20\u5165\u4E00\u4E2A\u914D\u7F6E\u5BF9\u8C61")],-1),V=n("li",null,[n("p",null,"root \u5BB9\u5668\u91CC\u7684\u4EE3\u7801\u4F9D\u7136\u7B26\u5408html\u89C4\u8303\uFF0C\u53EA\u4E0D\u8FC7\u6DF7\u5165\u4E86\u4E00\u4E9B\u7279\u6B8A\u7684Vue\u8BED\u6CD5")],-1),j=n("li",null,[n("p",null,"root \u5BB9\u5668\u91CC\u7684\u4EE3\u7801\u88AB\u79F0\u4E3AVue\u6A21\u677F")],-1),y=n("li",null,[n("p",null,"Vue \u5B9E\u4F8B\u4E0E\u5BB9\u5668\u662F\u4E00\u4E00\u5BF9\u5E94\u7684")],-1),q=n("li",null,[n("p",null,"\u771F\u5B9E\u5F00\u53D1\u4E2D\u53EA\u6709\u4E00\u4E2AVue\u5B9E\u4F8B\uFF0C\u5E76\u4E14\u4F1A\u914D\u5408\u7740\u7EC4\u4EF6\u4E00\u8D77\u4F7F\u7528")],-1),D=n("strong",null,"\u6CE8\u610F\u533A\u5206\uFF1Ajs \u8868\u8FBE\u5F0F \u548C js\u4EE3\u7801\uFF08\u8BED\u53E5\uFF09",-1),M=n("ul",null,[n("li",null,[s("\u8868\u8FBE\u5F0F\uFF1A\u4E00\u4E2A\u8868\u8FBE\u5F0F\u4F1A\u4EA7\u751F\u4E00\u4E2A\u503C\uFF0C\u53EF\u4EE5\u653E\u5728\u4EFB\u4F55\u4E00\u4E2A\u9700\u8981\u503C\u7684\u5730\u65B9 "),n("code",null,"a a+b demo(1) x === y ? \u2018a\u2019 : \u2018b\u2019")]),n("li",null,[s("js\u4EE3\u7801\uFF08\u8BED\u53E5\uFF09 "),n("code",null,"if(){} for(){}")])],-1),I=e(`<li><p>\u4E00\u65E6data\u4E2D\u7684\u6570\u636E\u53D1\u751F\u53D8\u5316\uFF0C\u90A3\u4E48\u6A21\u677F\u4E2D\u7528\u5230\u8BE5\u6570\u636E\u7684\u5730\u65B9\u4E5F\u4F1A\u81EA\u52A8\u66F4\u65B0(Vue\u5B9E\u73B0\u7684\u54CD\u5E94\u5F0F)</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- \u5F15\u5165Vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../js/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- \u51C6\u5907\u597D\u4E00\u4E2A\u5BB9\u5668 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Hello\uFF0C{{name.toUpperCase()}}\uFF0C{{address}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">//\u963B\u6B62 vue \u5728\u542F\u52A8\u65F6\u751F\u6210\u751F\u4EA7\u63D0\u793A\u3002</span>

	<span class="token comment">//\u521B\u5EFAVue\u5B9E\u4F8B</span>
	<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#demo&#39;</span><span class="token punctuation">,</span> <span class="token comment">//el\u7528\u4E8E\u6307\u5B9A\u5F53\u524DVue\u5B9E\u4F8B\u4E3A\u54EA\u4E2A\u5BB9\u5668\u670D\u52A1\uFF0C\u503C\u901A\u5E38\u4E3Acss\u9009\u62E9\u5668\u5B57\u7B26\u4E32\u3002</span>
		<span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//data\u4E2D\u7528\u4E8E\u5B58\u50A8\u6570\u636E\uFF0C\u6570\u636E\u4F9Bel\u6240\u6307\u5B9A\u7684\u5BB9\u5668\u53BB\u4F7F\u7528\uFF0C\u503C\u6211\u4EEC\u6682\u65F6\u5148\u5199\u6210\u4E00\u4E2A\u5BF9\u8C61\u3002</span>
			<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;hello,world&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">address</span><span class="token operator">:</span><span class="token string">&#39;\u5317\u4EAC&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1);function w(l,C){const a=u("ExternalLinkIcon");return o(),i("div",null,[d,n("p",null,[k,n("a",h,[v,t(a)]),m,_,n("a",g,[b,t(a)])]),x,n("ol",null,[f,V,j,y,q,n("li",null,[n("p",null,[s(c(l.xxx)+"\u4E2D\u7684 xxx \u8981\u5199 js \u8868\u8FBE\u5F0F\uFF0C\u4E14 xxx \u53EF\u4EE5\u81EA\u52A8\u8BFB\u53D6\u5230data\u4E2D\u7684\u6240\u6709\u5C5E\u6027 ",1),D]),M]),I])])}var S=p(r,[["render",w],["__file","index.html.vue"]]);export{S as default};
