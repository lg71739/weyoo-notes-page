import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,d as t}from"./app.99925b21.js";const p={},e=t(`<h1 id="javase-\u6D41\u7A0B\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#javase-\u6D41\u7A0B\u63A7\u5236" aria-hidden="true">#</a> JavaSE-\u6D41\u7A0B\u63A7\u5236</h1><h2 id="\u7528\u6237\u4EA4\u4E92scanner" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u4EA4\u4E92scanner" aria-hidden="true">#</a> \u7528\u6237\u4EA4\u4E92Scanner</h2><h3 id="_1\u3001scanner\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_1\u3001scanner\u5BF9\u8C61" aria-hidden="true">#</a> 1\u3001Scanner\u5BF9\u8C61</h3><p>\u4E4B\u524D\u6211\u4EEC\u5B66\u7684\u57FA\u672C\u8BED\u6CD5\u4E2D\u6211\u4EEC\u5E76\u6CA1\u6709\u5B9E\u73B0\u7A0B\u5E8F\u548C\u4EBA\u7684\u4EA4\u4E92\uFF0C\u4F46\u662FJava\u7ED9\u6211\u4EEC\u63D0\u4F9B\u4E86\u8FD9\u6837\u4E00\u4E2A\u5DE5\u5177\u7C7B\uFF0C\u6211 \u4EEC\u53EF\u4EE5\u83B7\u53D6\u7528\u6237\u7684\u8F93\u5165\u3002java.util.Scanner \u662F Java5 \u7684\u65B0\u7279\u5F81\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 Scanner \u7C7B\u6765\u83B7\u53D6\u7528\u6237\u7684\u8F93\u5165\u3002</p><p>\u4E0B\u9762\u662F\u521B\u5EFA Scanner \u5BF9\u8C61\u7684\u57FA\u672C\u8BED\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Scanner</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u6F14\u793A\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u6570\u636E\u8F93\u5165\uFF0C\u5E76\u901A\u8FC7 Scanner \u7C7B\u7684 next() \u4E0E nextLine() \u65B9\u6CD5\u83B7\u53D6\u8F93\u5165\u7684\u5B57\u7B26\u4E32\uFF0C\u5728\u8BFB\u53D6\u524D\u6211\u4EEC\u4E00\u822C\u9700\u8981 \u4F7F\u7528 hasNext() \u4E0E hasNextLine() \u5224\u65AD\u662F\u5426\u8FD8\u6709\u8F93\u5165\u7684\u6570\u636E\u3002</p><h3 id="_2\u3001next-nextline" tabindex="-1"><a class="header-anchor" href="#_2\u3001next-nextline" aria-hidden="true">#</a> 2\u3001next &amp; nextLine</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u521B\u5EFA\u4E00\u4E2A\u626B\u63CF\u5668\u5BF9\u8C61\uFF0C\u7528\u4E8E\u63A5\u6536\u952E\u76D8\u6570\u636E</span>
    <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//next\u65B9\u5F0F\u63A5\u6536\u5B57\u7B26\u4E32</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Next\u65B9\u5F0F\u63A5\u6536:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//\u5224\u65AD\u7528\u6237\u8FD8\u6709\u6CA1\u6709\u8F93\u5165\u5B57\u7B26</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>scanner<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8F93\u5165\u5185\u5BB9\uFF1A&quot;</span> <span class="token operator">+</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u51E1\u662F\u5C5E\u4E8EIO\u6D41\u7684\u7C7B\u5982\u679C\u4E0D\u5173\u95ED\u4F1A\u4E00\u76F4\u5360\u7528\u8D44\u6E90.\u8981\u517B\u6210\u597D\u4E60\u60EF\u7528\u5B8C\u5C31\u5173\u6389.\u5C31\u597D\u50CF\u4F60\u63A5\u6C34\u5B8C\u4E86\u8981\u5173\u6C34\u9F99\u5934\u4E00\u6837.\u5F88\u591A\u4E0B\u8F7D\u8F6F\u4EF6\u6216\u8005\u89C6\u9891\u8F6F\u4EF6\u5982\u679C\u4F60\u4E0D\u5F7B\u5E95\u5173, \u90FD\u4F1A\u81EA\u5DF1\u4E0A\u4F20\u4E0B\u8F7D\u4ECE\u800C\u5360\u7528\u8D44\u6E90, \u4F60\u5C31\u4F1A\u89C9\u5F97\u5361, \u8FD9\u4E00\u4E2A\u9053\u7406.</span>
    scanner<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u6570\u636E\uFF1AHello World\uFF01</p><p>\u7ED3\u679C\uFF1A\u53EA\u8F93\u51FA\u4E86Hello\u3002</p><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u4F7F\u7528\u53E6\u4E00\u4E2A\u65B9\u6CD5\u6765\u63A5\u6536\u6570\u636E\uFF1AnextLine()</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Scanner</span> scan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u4ECE\u952E\u76D8\u63A5\u6536\u6570\u636E</span>
    <span class="token comment">// nextLine\u65B9\u5F0F\u63A5\u6536\u5B57\u7B26\u4E32</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;nextLine\u65B9\u5F0F\u63A5\u6536\uFF1A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5224\u65AD\u662F\u5426\u8FD8\u6709\u8F93\u5165</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>scan<span class="token punctuation">.</span><span class="token function">hasNextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> str2 <span class="token operator">=</span> scan<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8F93\u5165\u5185\u5BB9\uFF1A&quot;</span> <span class="token operator">+</span> str2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    scan<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u6570\u636E\uFF1AHello World\uFF01</p><p>\u7ED3\u679C\uFF1A\u8F93\u51FA\u4E86Hello World\uFF01</p><p><strong>\u4E24\u8005\u533A\u522B\uFF1A</strong></p><p>next():</p><ul><li>\u4E00\u5B9A\u8981\u8BFB\u53D6\u5230\u6709\u6548\u5B57\u7B26\u540E\u624D\u53EF\u4EE5\u7ED3\u675F\u8F93\u5165\u3002</li><li>\u5BF9\u8F93\u5165\u6709\u6548\u5B57\u7B26\u4E4B\u524D\u9047\u5230\u7684\u7A7A\u767D\uFF0Cnext() \u65B9\u6CD5\u4F1A\u81EA\u52A8\u5C06\u5176\u53BB\u6389\u3002</li><li>\u53EA\u6709\u8F93\u5165\u6709\u6548\u5B57\u7B26\u540E\u624D\u5C06\u5176\u540E\u9762\u8F93\u5165\u7684\u7A7A\u767D\u4F5C\u4E3A\u5206\u9694\u7B26\u6216\u8005\u7ED3\u675F\u7B26\u3002</li><li>next() \u4E0D\u80FD\u5F97\u5230\u5E26\u6709\u7A7A\u683C\u7684\u5B57\u7B26\u4E32\u3002</li></ul><p>nextLine()\uFF1A</p><ul><li>\u4EE5Enter\u4E3A\u7ED3\u675F\u7B26,\u4E5F\u5C31\u662F\u8BF4 nextLine()\u65B9\u6CD5\u8FD4\u56DE\u7684\u662F\u8F93\u5165\u56DE\u8F66\u4E4B\u524D\u7684\u6240\u6709\u5B57\u7B26\u3002</li><li>\u53EF\u4EE5\u83B7\u5F97\u7A7A\u767D\u3002</li></ul><h3 id="_3\u3001\u5176\u4ED6\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u5176\u4ED6\u65B9\u6CD5" aria-hidden="true">#</a> 3\u3001\u5176\u4ED6\u65B9\u6CD5</h3><p>\u5982\u679C\u8981\u8F93\u5165 int \u6216 float \u7C7B\u578B\u7684\u6570\u636E\uFF0C\u5728 Scanner \u7C7B\u4E2D\u4E5F\u6709\u652F\u6301\uFF0C\u4F46\u662F\u5728\u8F93\u5165\u4E4B\u524D\u6700\u597D\u5148\u4F7F\u7528 hasNextXxx() \u65B9\u6CD5\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u518D\u4F7F\u7528 nextXxx() \u6765\u8BFB\u53D6\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Scanner</span> scan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u4ECE\u952E\u76D8\u63A5\u6536\u6570\u636E</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">float</span> f <span class="token operator">=</span> <span class="token number">0.0f</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;\u8F93\u5165\u6574\u6570\uFF1A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>scan<span class="token punctuation">.</span><span class="token function">hasNextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5224\u65AD\u8F93\u5165\u7684\u662F\u5426\u662F\u6574\u6570</span>
        i <span class="token operator">=</span> scan<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u63A5\u6536\u6574\u6570</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6574\u6570\u6570\u636E\uFF1A&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8F93\u5165\u9519\u8BEF\u7684\u4FE1\u606F</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8F93\u5165\u7684\u4E0D\u662F\u6574\u6570\uFF01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;\u8F93\u5165\u5C0F\u6570\uFF1A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>scan<span class="token punctuation">.</span><span class="token function">hasNextFloat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5224\u65AD\u8F93\u5165\u7684\u662F\u5426\u662F\u5C0F\u6570</span>
        f <span class="token operator">=</span> scan<span class="token punctuation">.</span><span class="token function">nextFloat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u63A5\u6536\u5C0F\u6570</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C0F\u6570\u6570\u636E\uFF1A&quot;</span> <span class="token operator">+</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8F93\u5165\u9519\u8BEF\u7684\u4FE1\u606F</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8F93\u5165\u7684\u4E0D\u662F\u5C0F\u6570\uFF01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    scan<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5177\u4F53Scanner\u7C7B\u90FD\u6709\u4EC0\u4E48\u65B9\u6CD5\uFF0C\u53EF\u67E5\u770B\u5176\u4E2D\u7684\u6E90\u7801\uFF0C<code>ctrl</code>+<code>\u9F20\u6807\u5DE6\u952E</code> \u70B9\u4E2Didea\u4E2D\u7684Scanner</p><p>\u4EE5\u4E0B\u5B9E\u4F8B\u6211\u4EEC\u53EF\u4EE5\u8F93\u5165\u591A\u4E2A\u6570\u5B57\uFF0C\u5E76\u6C42\u5176\u603B\u548C\u4E0E\u5E73\u5747\u6570\uFF0C\u6BCF\u8F93\u5165\u4E00\u4E2A\u6570\u5B57\u7528\u56DE\u8F66\u786E\u8BA4\uFF0C\u901A\u8FC7\u8F93\u5165\u975E\u6570\u5B57\u6765\u7ED3\u675F\u8F93\u5165\uFF0C\u5E76\u8F93\u51FA\u6267\u884C\u7ED3\u679C\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u626B\u63CF\u5668\u63A5\u6536\u952E\u76D8\u6570\u636E</span>
    <span class="token class-name">Scanner</span> scan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//\u548C</span>
    <span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//\u8F93\u5165\u4E86\u591A\u5C11\u4E2A\u6570\u5B57</span>
    <span class="token comment">//\u901A\u8FC7\u5FAA\u73AF\u5224\u65AD\u662F\u5426\u8FD8\u6709\u8F93\u5165\uFF0C\u5E76\u5728\u91CC\u9762\u5BF9\u6BCF\u4E00\u6B21\u8FDB\u884C\u6C42\u548C\u548C\u7EDF\u8BA1</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>scan<span class="token punctuation">.</span><span class="token function">hasNextDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">double</span> x <span class="token operator">=</span> scan<span class="token punctuation">.</span><span class="token function">nextDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        m <span class="token operator">=</span> m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        sum <span class="token operator">=</span> sum <span class="token operator">+</span> x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>m <span class="token operator">+</span> <span class="token string">&quot;\u4E2A\u6570\u7684\u548C\u4E3A&quot;</span> <span class="token operator">+</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>m <span class="token operator">+</span> <span class="token string">&quot;\u4E2A\u6570\u7684\u5E73\u5747\u503C\u662F&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>sum <span class="token operator">/</span> m<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    scan<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u80FD\u5F88\u591A\u5C0F\u4F19\u4F34\u5230\u8FD9\u91CC\u5C31\u770B\u4E0D\u61C2\u5199\u7684\u4EC0\u4E48\u4E1C\u897F\u4E86\uFF01\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528\u4E86\u6211\u4EEC\u4E00\u4F1A\u8981\u5B66\u7684\u6D41\u7A0B\u63A7\u5236\u8BED\u53E5\uFF0C\u6211\u4EEC \u63A5\u4E0B\u6765\u5C31\u53BB\u5B66\u4E60\u8FD9\u4E9B\u8BED\u53E5\u7684\u5177\u4F53\u4F5C\u7528\uFF01</p><p>Java\u4E2D\u7684\u6D41\u7A0B\u63A7\u5236\u8BED\u53E5\u53EF\u4EE5\u8FD9\u6837\u5206\u7C7B\uFF1A\u987A\u5E8F\u7ED3\u6784\uFF0C\u9009\u62E9\u7ED3\u6784\uFF0C\u5FAA\u73AF\u7ED3\u6784\uFF01\u8FD9\u4E09\u79CD\u7ED3\u6784\u5C31\u8DB3\u591F\u89E3\u51B3\u6240\u6709\u7684 \u95EE\u9898\u4E86\uFF01</p>`,28),c=[e];function o(l,i){return s(),a("div",null,c)}var r=n(p,[["render",o],["__file","01.\u7528\u6237\u4EA4\u4E92Scanner.html.vue"]]);export{r as default};
