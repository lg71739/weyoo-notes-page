import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as s,d as a}from"./app.c8f07e03.js";const i={},t=a(`<h1 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> Object</h1><h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><p>Object.defineProperty() \u65B9\u6CD5\u4F1A\u76F4\u63A5\u5728\u4E00\u4E2A\u5BF9\u8C61\u4E0A\u5B9A\u4E49\u4E00\u4E2A\u65B0\u5C5E\u6027\uFF0C\u6216\u8005\u4FEE\u6539\u4E00\u4E2A\u5BF9\u8C61\u7684\u73B0\u6709\u5C5E\u6027\uFF0C\u5E76\u8FD4\u56DE\u6B64\u5BF9\u8C61\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><p><code>Object.definePrototype(obj,prop,descriptor)</code></p><ul><li>obj\uFF1A\u8981\u5B9A\u4E49\u5C5E\u6027\u7684\u5BF9\u8C61\u3002</li><li>prop\uFF1A\u8981\u5B9A\u4E49\u6216\u4FEE\u6539\u7684\u5C5E\u6027\u7684\u540D\u79F0\u3002</li><li>descriptor\uFF1A\u8981\u5B9A\u4E49\u6216\u4FEE\u6539\u7684\u5C5E\u6027\u63CF\u8FF0\u7B26\u3002 \u8FD4\u56DE\u503C\uFF1A\u88AB\u4F20\u9012\u7ED9\u51FD\u6570\u7684\u5BF9\u8C61\u3002</li></ul><h2 id="\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u63CF\u8FF0" aria-hidden="true">#</a> \u63CF\u8FF0</h2><p>\u200B \u6B64\u65B9\u6CD5\u5141\u8BB8\u7CBE\u786E\u5730\u6DFB\u52A0\u6216\u4FEE\u6539\u5BF9\u8C61\u7684\u5C5E\u6027\u3002\u901A\u8FC7\u8D4B\u503C\u64CD\u4F5C\u6DFB\u52A0\u7684\u666E\u901A\u5C5E\u6027\u662F\u53EF\u679A\u4E3E\u7684\uFF0C\u53EF\u4EE5\u6539\u53D8\u8FD9\u4E9B\u5C5E\u6027\u503C\uFF0C\u4E5F\u53EF\u4EE5\u5220\u9664\u8FD9\u4E9B\u5C5E\u6027\u503C\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F7F\u7528\u6B64\u65B9\u6CD5\u6DFB\u52A0\u7684\u5C5E\u6027\u503C\u662F\u4E0D\u53EF\u4FEE\u6539\u7684\u3002 \u5BF9\u8C61\u91CC\u76EE\u524D\u5B58\u5728\u7684\u5C5E\u6027\u63CF\u8FF0\u7B26\u6709\u4E24\u79CD\u4E3B\u8981\u5F62\u5F0F\uFF1A</p><h3 id="\u6570\u636E\u63CF\u8FF0\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u63CF\u8FF0\u7B26" aria-hidden="true">#</a> \u6570\u636E\u63CF\u8FF0\u7B26</h3><p><strong>\u662F\u4E00\u4E2A\u5177\u6709\u503C\u7684\u5C5E\u6027\uFF0C\u8BE5\u503C\u53EF\u4EE5\u662F\u53EF\u5199\u7684\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E0D\u53EF\u5199\u7684\u3002</strong></p><ul><li><p><strong>configurable\uFF1A</strong></p><p>\u662F\u5426\u53EF\u4EE5\u91CD\u65B0\u5B9A\u4E49\uFF0C\u5F53\u4E14\u4EC5\u5F53\u8BE5\u5C5E\u6027\u952E\u503C\u4E3Atrue\u65F6\uFF0C\u8BE5\u5C5E\u6027\u7684\u63CF\u8FF0\u7B26\u624D\u80FD\u591F\u88AB\u6539\u53D8\uFF0C\u540C\u65F6\u8BE5\u5C5E\u6027\u4E5F\u80FD\u4ECE\u5BF9\u5E94\u7684\u5BF9\u8C61\u4E0A\u88AB\u5220\u9664\u3002\u9ED8\u8BA4\u4E3Afalse\u3002</p></li><li><p><strong>enumerable\uFF1A</strong></p><p>\u662F\u5426\u53EF\u4EE5\u679A\u4E3E\uFF0C\u5F53\u4E14\u4EC5\u5F53\u8BE5\u5C5E\u6027\u952E\u503C\u4E3Atrue\u65F6\uFF0C\u8BE5\u5C5E\u6027\u624D\u4F1A\u51FA\u73B0\u5728\u5BF9\u8C61\u7684\u679A\u4E3E\u5C5E\u6027\u4E2D\u3002\u9ED8\u8BA4\u4E3Afalse\u3002</p></li><li><p><strong>value\uFF1A</strong></p><p>\u8BE5\u5C5E\u6027\u5BF9\u5E94\u7684\u503C\u3002\u9ED8\u8BA4\u4E3Aundefined\u3002</p></li><li><p><strong>writable\uFF1A</strong></p><p>\u662F\u5426\u53EF\u4EE5\u4FEE\u6539\u5C5E\u6027\u503C\uFF0C\u5F53\u4E14\u4EC5\u5F53\u8BE5\u5C5E\u6027\u7684\u952E\u503C\u4E3Atrue\u65F6\uFF0C\u4E0A\u9762\u7684value\u624D\u80FD\u88AB\u8D4B\u503C\u8FD0\u7B97\u7B26\u6539\u53D8\uFF0C\u9ED8\u8BA4\u4E3Afalse\u3002</p></li></ul><h3 id="\u5B58\u53D6\u63CF\u8FF0\u7B26" tabindex="-1"><a class="header-anchor" href="#\u5B58\u53D6\u63CF\u8FF0\u7B26" aria-hidden="true">#</a> \u5B58\u53D6\u63CF\u8FF0\u7B26</h3><p><strong>\u7531getter\u51FD\u6570\u548Csetter\u51FD\u6570\u6240\u63CF\u8FF0\u7684\u5C5E\u6027\u8FD8\u53EF\u4EE5\u5177\u6709\u4EE5\u4E0B\u53EF\u9009\u952E\u3002</strong></p><ul><li><p><strong>get \uFF1A</strong></p><p>\u5C5E\u6027\u7684getter\u51FD\u6570\uFF0C\u5982\u679C\u6CA1\u6709getter\uFF0C\u5219\u4E3Aundefined\u3002\u52A8\u6001\u8BA1\u7B97\u5F97\u5230\u5F53\u524D\u5C5E\u6027\u503C \uFF08\u56DE\u8C03\u51FD\u6570\uFF09\u3002\u9ED8\u8BA4\u4E3Aundefined\uFF0C\u5F53\u8BBF\u95EE\u8BE5\u5C5E\u6027\u65F6\uFF0C\u4F1A\u8C03\u7528\u6B64\u51FD\u6570\u3002</p></li><li><p><strong>set \uFF1A</strong></p><p>\u76D1\u89C6\u5F53\u524D\u5C5E\u6027\u503C\u7684\u53D8\u5316\uFF0C\u66F4\u65B0\u5176\u4ED6\u76F8\u5173\u7684\u5C5E\u6027(\u56DE\u8C03\u51FD\u6570)\u3002\u5F53\u5C5E\u6027\u503C\u88AB\u4FEE\u6539\u65F6\uFF0C\u4F1A\u8C03\u7528\u6B64\u51FD\u6570\u3002\u9ED8\u8BA4\u4E3Aundefined\u3002</p></li></ul><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u4E00\u4E2A\u63CF\u8FF0\u7B26\u53EA\u80FD\u662F\u8FD9\u4E24\u8005\u5176\u4E2D\u4E4B\u4E00\uFF0C\u4E0D\u80FD\u540C\u65F6\u662F\u4E24\u8005\u3002</p><p>\u8FD9\u4E24\u79CD\u63CF\u8FF0\u7B26\u90FD\u662F\u5BF9\u8C61\uFF0C\u63CF\u8FF0\u7B26\u53EF\u62E5\u6709\u7684\u952E\u503C\uFF1A</p><p>\u5982\u679C\u4E00\u4E2A\u63CF\u8FF0\u7B26\u4E0D\u5177\u6709value\u3001writable \u3001get\u3001set\u4E2D\u4EFB\u610F\u4E00\u4E2A\u952E\uFF0C\u90A3\u4E48\u5B83\u5C06\u88AB\u8BA4\u4E3A\u662F\u4E00\u4E2A\u6570\u636E\u63CF\u8FF0\u7B26\u3002\u5982\u679C\u4E00\u4E2A\u63CF\u8FF0\u7B26\u540C\u65F6\u62E5\u6709value\u6216writable\u548Cget\u6216set\u952E\u5219\u4F1A\u51FA\u73B0\u5F02\u5E38\u3002</p></div><table><thead><tr><th></th><th>configurable</th><th>enumerable</th><th>value</th><th>writable</th><th>get</th><th>set</th></tr></thead><tbody><tr><td>\u6570\u636E\u63CF\u8FF0\u7B26</td><td>\u53EF\u4EE5</td><td>\u53EF\u4EE5</td><td>\u53EF\u4EE5</td><td>\u53EF\u4EE5</td><td>\u4E0D\u53EF\u4EE5</td><td>\u4E0D\u53EF\u4EE5</td></tr><tr><td>\u5B58\u53D6\u63CF\u8FF0\u7B26</td><td>\u53EF\u4EE5</td><td>\u53EF\u4EE5</td><td>\u4E0D\u53EF\u4EE5</td><td>\u4E0D\u53EF\u4EE5</td><td>\u53EF\u4EE5</td><td>\u53EF\u4EE5</td></tr></tbody></table><h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a> \u4EE3\u7801\u6F14\u793A</h2><h3 id="\u521B\u5EFA\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5C5E\u6027" aria-hidden="true">#</a> <strong>\u521B\u5EFA\u5C5E\u6027</strong></h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>//    \u521B\u5EFA\u5C5E\u6027
    var o = {};
    Object.defineProperty(o,&quot;a&quot;,{
        value:37,
        writable:true,
        enumerable:true,
        configurable:true
    });
    //\u5BF9\u8C61o\u62E5\u6709\u4E86\u5C5E\u6027a\uFF0C\u503C\u4E3A37

    //\u5728\u5BF9\u8C61\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u8BBE\u7F6E\u4E86\u5B58\u53D6\u63CF\u8FF0\u7B26\u5C5E\u6027\u7684\u793A\u4F8B
    var Bvalue = 38;
    Object.defineProperty(o,&quot;b&quot;,{
        get(){
            return Bvalue;
        },
        set(newValue){
            Bvalue = newValue;
        },
        enumerable:true,
        configurable:true
    });

    console.log(o.a);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4FEE\u6539\u5C5E\u6027writable" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u5C5E\u6027writable" aria-hidden="true">#</a> <strong>\u4FEE\u6539\u5C5E\u6027writable</strong></h3><p>\u5F53writable\u5C5E\u6027\u8BBE\u7F6E\u4E3Afalse\u65F6\uFF0C\u8BE5\u5C5E\u6027\u88AB\u79F0\u4E3A\u201C\u4E0D\u53EF\u5199\u7684\u201D\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>var o = {};//\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61
Object.defineProperty(o,&#39;a&#39;,{
	value:37,
	writable:false,
})
console.log(o.a);
o.a = 25;
console.log(o.a);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="enumerable-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#enumerable-\u5C5E\u6027" aria-hidden="true">#</a> <strong>Enumerable \u5C5E\u6027</strong></h3><p>\u5B9A\u4E49\u4E86\u5BF9\u8C61\u7684\u5C5E\u6027\u662F\u5426\u53EF\u4EE5\u5728 for\u2026in \u5FAA\u73AF\u548C Object.keys() \u4E2D\u88AB\u679A\u4E3E\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>    var o = {};
    Object.defineProperty(o,&quot;a&quot;,{value:1,enumerable:true});
    Object.defineProperty(o,&quot;b&quot;,{value:2,enumerable:false});
    Object.defineProperty(o,&quot;c&quot;,{value:3});
    o.d = 4;
    Object.defineProperty(o,Symbol.for(&#39;e&#39;),{
        value:5,
        enumerable:true
    });
    for(var i in o){
        console.log(i);
    }
    console.log(Object.keys(o));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C\uFF1A</p><p><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2022/08/27_17_2_37_202208271702343.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0" loading="lazy"></p><h3 id="configurable-\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#configurable-\u7279\u6027" aria-hidden="true">#</a> <strong>configurable \u7279\u6027</strong></h3><p>\u8868\u793A\u5BF9\u8C61\u7684\u5C5E\u6027\u662F\u5426\u53EF\u4EE5\u88AB\u5220\u9664\uFF0C\u4EE5\u53CA\u9664 value \u548C writable \u7279\u6027\u5916\u7684\u5176\u4ED6\u7279\u6027\u662F\u5426\u53EF\u4EE5\u88AB\u4FEE\u6539\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>    var o = {};
    Object.defineProperty(o,&quot;a&quot;,{
        get(){return 1},
        configurable:false,
    });
    Object.defineProperty(o,&quot;a&quot;,{
        configurable:true,
    });
    Object.defineProperty(o,&quot;a&quot;,{
        enumerable:true,
    });
    Object.defineProperty(o,&quot;a&quot;,{
        set(){}
    });
    Object.defineProperty(o,&quot;a&quot;,{
        get(){return 1},
        configurable:false,
    });
    Object.defineProperty(o,&quot;a&quot;,{
        value:12
    });
    console.log(o.a);
    delete o.a;
    console.log(o.a);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C\uFF1A\u4F1A\u5728\u7B2C14\u884C\u62A5\u9519\u3002</p><p><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2022/08/27_17_1_11_202208271701552.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0" loading="lazy"></p><h3 id="\u8BBE\u7F6Egetter-\u548Csetter" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6Egetter-\u548Csetter" aria-hidden="true">#</a> \u8BBE\u7F6Egetter()\u548Csetter()</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>    function Archiver() {
        var temperature = null;
        var archive = [];
        Object.defineProperty(this,&#39;temperature&#39;,{
            get:function(){
                console.log(&#39;get!&#39;);
                return temperature;
            },
            set:function(value){
                temperature = value;
                archive.push({val:temperature});
            }
        });
        this.getArchive = function(){return archive};
    }
    var arc = new Archiver();
    arc.temperature; 
    arc.temperature = 11;
    arc.temperature = 13;
    console.log(arc.getArchive()); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C\uFF1A</p><p><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2022/08/27_17_0_57_202208271700007.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0" loading="lazy"></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
   <span class="token keyword">let</span> number <span class="token operator">=</span> <span class="token number">18</span>
   <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span>

   Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token comment">// value:18,</span>
    <span class="token comment">// enumerable:true, //\u63A7\u5236\u5C5E\u6027\u662F\u5426\u53EF\u4EE5\u679A\u4E3E\uFF0C\u9ED8\u8BA4\u503C\u662Ffalse</span>
    <span class="token comment">// writable:true, //\u63A7\u5236\u5C5E\u6027\u662F\u5426\u53EF\u4EE5\u88AB\u4FEE\u6539\uFF0C\u9ED8\u8BA4\u503C\u662Ffalse</span>
    <span class="token comment">// configurable:true //\u63A7\u5236\u5C5E\u6027\u662F\u5426\u53EF\u4EE5\u88AB\u5220\u9664\uFF0C\u9ED8\u8BA4\u503C\u662Ffalse</span>

    <span class="token comment">//\u5F53\u6709\u4EBA\u8BFB\u53D6person\u7684age\u5C5E\u6027\u65F6\uFF0Cget\u51FD\u6570(getter)\u5C31\u4F1A\u88AB\u8C03\u7528\uFF0C\u4E14\u8FD4\u56DE\u503C\u5C31\u662Fage\u7684\u503C</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6709\u4EBA\u8BFB\u53D6age\u5C5E\u6027\u4E86&#39;</span><span class="token punctuation">)</span>
     <span class="token keyword">return</span> number
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//\u5F53\u6709\u4EBA\u4FEE\u6539person\u7684age\u5C5E\u6027\u65F6\uFF0Cset\u51FD\u6570(setter)\u5C31\u4F1A\u88AB\u8C03\u7528\uFF0C\u4E14\u4F1A\u6536\u5230\u4FEE\u6539\u7684\u5177\u4F53\u503C</span>
    <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6709\u4EBA\u4FEE\u6539\u4E86age\u5C5E\u6027\uFF0C\u4E14\u503C\u662F&#39;</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span>
     number <span class="token operator">=</span> value
    <span class="token punctuation">}</span>

   <span class="token punctuation">}</span><span class="token punctuation">)</span>

   <span class="token comment">// console.log(Object.keys(person))</span>

   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),l=[t];function r(d,c){return e(),s("div",null,l)}var p=n(i,[["render",r],["__file","index.html.vue"]]);export{p as default};
