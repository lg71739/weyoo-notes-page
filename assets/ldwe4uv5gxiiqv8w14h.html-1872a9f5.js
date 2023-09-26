import{_ as n,o as s,c as a,f as t}from"./app-8745ddab.js";const e={},p=t(`<h2 id="query参数" tabindex="-1"><a class="header-anchor" href="#query参数" aria-hidden="true">#</a> Query参数</h2><h3 id="传递参数" tabindex="-1"><a class="header-anchor" href="#传递参数" aria-hidden="true">#</a> 传递参数</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- 跳转并携带query参数，to的字符串写法 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home/message/detail?id=666&amp;title=你好<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
				
<span class="token comment">&lt;!-- 跳转并携带query参数，to的对象写法 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
	path:&#39;/home/message/detail&#39;,
	query:{
		id:666,
        title:&#39;你好&#39;
	}
}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接收参数" tabindex="-1"><a class="header-anchor" href="#接收参数" aria-hidden="true">#</a> 接收参数</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>$route.query.id
$route.query.title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命名路由" tabindex="-1"><a class="header-anchor" href="#命名路由" aria-hidden="true">#</a> 命名路由</h2><h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3><p>可以简化路由的跳转</p><h3 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h3><p>1.给路由命名</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/demo&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">component</span><span class="token operator">:</span>Demo<span class="token punctuation">,</span>
	<span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">component</span><span class="token operator">:</span>Test<span class="token punctuation">,</span>
			<span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;hello&#39;</span> <span class="token comment">//给路由命名</span>
					<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;welcome&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">component</span><span class="token operator">:</span>Hello<span class="token punctuation">,</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.简化跳转</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!--简化前，需要写完整的路径 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/demo/test/welcome<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!--简化后，直接通过名字跳转 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{name:&#39;hello&#39;}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!--简化写法配合传递参数 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> 
	<span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
		name:&#39;hello&#39;,
		query:{
		    id:666,
            title:&#39;你好&#39;
		}
	}<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="params参数-动态路由" tabindex="-1"><a class="header-anchor" href="#params参数-动态路由" aria-hidden="true">#</a> params参数(动态路由)</h2><h3 id="配置路由-声明参数" tabindex="-1"><a class="header-anchor" href="#配置路由-声明参数" aria-hidden="true">#</a> 配置路由，声明参数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">component</span><span class="token operator">:</span>Home<span class="token punctuation">,</span>
	<span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;news&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">component</span><span class="token operator">:</span>News
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">component</span><span class="token operator">:</span>Message<span class="token punctuation">,</span>
			<span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;xiangqing&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;detail/:id/:title&#39;</span><span class="token punctuation">,</span> <span class="token comment">//使用占位符声明接收params参数</span>
					<span class="token literal-property property">component</span><span class="token operator">:</span>Detail
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数传递" tabindex="-1"><a class="header-anchor" href="#参数传递" aria-hidden="true">#</a> 参数传递</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- 跳转并携带params参数，to的字符串写法 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home/message/detail/666/你好<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
				
<span class="token comment">&lt;!-- 跳转并携带params参数，to的对象写法 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> 
	<span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
		name:&#39;xiangqing&#39;,
		params:{
		   id:666,
            title:&#39;你好&#39;
		}
	}<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数接收" tabindex="-1"><a class="header-anchor" href="#参数接收" aria-hidden="true">#</a> 参数接收</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>$route.params.id
$route.params.title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意:</p><p>路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！</p></div><h2 id="props配置" tabindex="-1"><a class="header-anchor" href="#props配置" aria-hidden="true">#</a> props配置</h2><h3 id="作用-1" tabindex="-1"><a class="header-anchor" href="#作用-1" aria-hidden="true">#</a> 作用</h3><p>简化路由组件接收参数。</p><h3 id="路由规则配置props传参" tabindex="-1"><a class="header-anchor" href="#路由规则配置props传参" aria-hidden="true">#</a> 路由规则配置props传参</h3><p>在路由规则中开启 <code>props</code> 传参，组件可以使用 <code>props</code> 接收路由参数：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/movie/:id/:title&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> Movie<span class="token punctuation">,</span>

  <span class="token comment">// 方式一：该对象中的所有 key-value 都会以 props 的形式传给组件</span>
  <span class="token comment">// 该方式是写死的，少用</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">666</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">}</span>

  <span class="token comment">// 方式二：把 params 参数以 props 的形式传给组件</span>
  <span class="token comment">// 只能接收 params 参数</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token boolean">true</span>

  <span class="token comment">// 方式三：函数写法，啥都能传</span>
  <span class="token function">props</span><span class="token punctuation">(</span><span class="token parameter">$route</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> $route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> $route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">21</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件接收参数" tabindex="-1"><a class="header-anchor" href="#组件接收参数" aria-hidden="true">#</a> 组件接收参数</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Movie组件，参数值：{{ id }}，题目：{{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
....
export default {
  // 使用 props 接收路由规则的参数项
  props: [&#39;id&#39;, &#39;title&#39;],
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),l=[p];function i(o,c){return s(),a("div",null,l)}const u=n(e,[["render",i],["__file","ldwe4uv5gxiiqv8w14h.html.vue"]]);export{u as default};
