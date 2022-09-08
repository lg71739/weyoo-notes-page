import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,d as t}from"./app.48d1487d.js";const p={},e=t(`<h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><p>\u5BF9\u8981\u663E\u793A\u7684\u6570\u636E\u8FDB\u884C\u7279\u5B9A\u683C\u5F0F\u5316\u540E\u518D\u663E\u793A\uFF08\u9002\u7528\u4E8E\u4E00\u4E9B\u7B80\u5355\u903B\u8F91\u7684\u5904\u7406\uFF09</p><h2 id="\u8FC7\u6EE4\u5668\u7684\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u6EE4\u5668\u7684\u6CE8\u518C" aria-hidden="true">#</a> \u8FC7\u6EE4\u5668\u7684\u6CE8\u518C</h2><p>\u8FC7\u6EE4\u5668\u7684\u6CE8\u518C\u5305\u542B\u4E24\u79CD\u65B9\u5F0F</p><ul><li>\u5C40\u90E8\u8FC7\u6EE4\u5668 <code>new Vue {filters: {}} </code></li><li>\u5168\u5C40\u8FC7\u6EE4\u5668 <code>Vue.filter(name, callback)</code></li></ul><h2 id="\u8FC7\u6EE4\u5668\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u6EE4\u5668\u7684\u4F7F\u7528" aria-hidden="true">#</a> \u8FC7\u6EE4\u5668\u7684\u4F7F\u7528</h2><p>\u683C\u5F0F:</p><p><code> {{ xxx | \u8FC7\u6EE4\u5668\u540D}}</code> \u6216 <code>v-bind:\u5C5E\u6027 = &quot;xxx | \u8FC7\u6EE4\u5668\u540D&quot; </code></p><blockquote><p><strong>\u5907\u6CE8:</strong></p><p>a. \u8FC7\u6EE4\u5668\u53EF\u4EE5\u63A5\u6536\u989D\u5916\u53C2\u6570\uFF0C\u591A\u4E2A\u8FC7\u6EE4\u5668\u4E5F\u53EF\u4EE5\u4E32\u8054</p><p>b. \u5E76\u6CA1\u6709\u6539\u53D8\u539F\u672C\u7684\u6570\u636E\uFF0C\u800C\u662F\u4EA7\u751F\u65B0\u7684\u5BF9\u5E94\u7684\u6570\u636E</p></blockquote><h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a> \u4EE3\u7801\u6F14\u793A</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>\u663E\u793A\u683C\u5F0F\u5316\u540E\u7684\u65F6\u95F4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
       
        <span class="token comment">&lt;!-- \u539F\u59CB\u65F6\u95F4\u6233 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>\u73B0\u5728\u662F\uFF1A{{time}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- \u8BA1\u7B97\u5C5E\u6027\u5B9E\u73B0 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>\u73B0\u5728\u662F\uFF1A{{fmttime}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- methods\u65B9\u6CD5\u5B9E\u73B0 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>\u73B0\u5728\u662F\uFF1A{{getFmttime()}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- \u8FC7\u6EE4\u5668\u5B9E\u73B0 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>\u73B0\u5728\u662F\uFF1A{{time | timeFormater}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- \u8FC7\u6EE4\u5668\u5B9E\u73B0\uFF08\u4F20\u53C2\uFF09 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>\u73B0\u5728\u662F\uFF1A{{time | timeFormater(&#39;YYYY_MM_DD&#39;)}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- \u8FC7\u6EE4\u5668\u5B9E\u73B0 \u4E32\u8054 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>\u73B0\u5728\u662F\uFF1A{{time | timeFormater(&#39;YYYY_MM_DD&#39;) | mySlice}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">:x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg | mySlice<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6211\u662F\u5929\u7A7A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{msg | mySlice}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>  <span class="token comment">// \u8BBE\u7F6E\u4E3A false \u4EE5\u963B\u6B62 vue \u5728\u542F\u52A8\u65F6\u751F\u6210\u751F\u4EA7\u63D0\u793A\u3002</span>
        <span class="token comment">// \u5168\u5C40\u8FC7\u6EE4\u5668</span>
        Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">&#39;mySlice&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> value<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token number">1651919226664</span><span class="token punctuation">,</span>
                <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;\u5927\u5BB6\u597D\u6211\u662F\u5929\u7A7A&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">fmttime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token function">dayjs</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>time<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;YYYY\u5E74MM\u6708DD\u65E5 HH:mm:ss&#39;</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">getFmttime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token function">dayjs</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>time<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;YYYY\u5E74MM\u6708DD\u65E5 HH:mm:ss&#39;</span><span class="token punctuation">)</span>                   
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">timeFormater</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> str<span class="token operator">=</span><span class="token string">&#39;YYYY\u5E74MM\u6708DD\u65E5 HH:mm:ss&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// return dayjs(value).format(&#39;YYYY\u5E74MM\u6708DD\u65E5 HH:mm:ss&#39;)                   </span>
                    <span class="token keyword">return</span> <span class="token function">dayjs</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
               <span class="token comment">/*  mySlice(value) {
                    return value.slice(0,4)
                } */</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#root2&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;\u5927\u5BB6\u597D\u6211\u662F\u5929\u7A7A&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};