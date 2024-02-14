import{_ as e,o as n,c as i,f as a}from"./app-64a261e0.js";const s={},d=a(`<h2 id="mapstate" tabindex="-1"><a class="header-anchor" href="#mapstate" aria-hidden="true">#</a> mapState</h2><h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3><p>将 <code>state</code> 状态映射为计算属性</p><h3 id="写法" tabindex="-1"><a class="header-anchor" href="#写法" aria-hidden="true">#</a> 写法</h3><ul><li>对象写法：键为自取的计算属性名，值为对应的状态（必须为字符串）</li><li>数组写法：当键值同名，可直接写状态名（字符串）</li></ul><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3><ul><li>函数返回一个对象：<code>{sum: f, price: f}</code></li><li>注意对象的 <code>...{}</code> 展开写法</li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>import { mapState } from &#39;vuex&#39;

computed: {
  // 手动写法
  sum() {
    return this.$store.state.sum
  },
  price() {
    return this.$store.state.price
  },

  // 对象写法
  ...mapState({sum: &#39;sum&#39;, price: &#39;price&#39;}),

  // 数组写法
  ...mapState([&#39;sum&#39;, &#39;price&#39;])
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mapgetters" tabindex="-1"><a class="header-anchor" href="#mapgetters" aria-hidden="true">#</a> mapGetters</h2><h3 id="作用-1" tabindex="-1"><a class="header-anchor" href="#作用-1" aria-hidden="true">#</a> 作用</h3><p>将 <code>getters</code> 的数据映射为计算属性</p><h3 id="写法-1" tabindex="-1"><a class="header-anchor" href="#写法-1" aria-hidden="true">#</a> 写法</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>import { mapGetters } from &#39;vuex&#39;

computed: {
  bigSum() {
    return this.$store.getters.bigSum
  },
  double() {
    return this.$store.getters.double
  },

  // 对象写法
  ...mapGetters({bigSum: &#39;bigSum&#39;, double: &#39;double&#39;}),

  // 数组写法
  ...mapGetters([&#39;bigSum&#39;, &#39;double&#39;]),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mapactions" tabindex="-1"><a class="header-anchor" href="#mapactions" aria-hidden="true">#</a> mapActions</h2><h3 id="作用-2" tabindex="-1"><a class="header-anchor" href="#作用-2" aria-hidden="true">#</a> 作用</h3><p>生成与 <code>actions</code> 对话的函数，即包含 <code>$store.dispatch()</code></p><h3 id="写法-2" tabindex="-1"><a class="header-anchor" href="#写法-2" aria-hidden="true">#</a> 写法</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>import { mapActions } from &#39;vuex&#39;

methods: {
  // 手动写法
  incrementOdd() {
    this.$store.dispatch(&#39;addOdd&#39;, this.number)
  },
  incrementAsync() {
    this.$store.dispatch(&#39;addAsync&#39;, this.number)
  },

  // 对象写法
  ...mapActions({incrementOdd: &#39;addOdd&#39;, incrementAsync: &#39;addAsync&#39;}),

  // 数组写法
  ...mapActions([&#39;addOdd&#39;, &#39;addAsync&#39;]),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项-1" tabindex="-1"><a class="header-anchor" href="#注意事项-1" aria-hidden="true">#</a> 注意事项</h3><ul><li><code>mapActions</code> 生成的函数不会传入参数，需要在调用时手动传入数据，不传参默认传入 <code>$event</code></li><li>数组写法要注意函数名和 <code>actions</code> 动作类型同名，调用时勿写错</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>incrementOdd(number)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>奇数+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="mapmutations" tabindex="-1"><a class="header-anchor" href="#mapmutations" aria-hidden="true">#</a> mapMutations</h2><h3 id="作用-3" tabindex="-1"><a class="header-anchor" href="#作用-3" aria-hidden="true">#</a> 作用</h3><p>生成与 <code>mutations</code> 对话的函数，即包含 <code>$store.commit()</code></p><h3 id="写法-3" tabindex="-1"><a class="header-anchor" href="#写法-3" aria-hidden="true">#</a> 写法</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>import { mapMutations } from &#39;vuex&#39;

methods: {
  increment() {
    this.$store.commit(&#39;ADD&#39;, this.number)
  },
  decrement() {
    this.$store.commit(&#39;SUB&#39;, this.number)
  },

  // 对象写法
  ...mapMutations({increment: &#39;ADD&#39;, decrement: &#39;SUB&#39;}),

  // 数组写法
  ...mapMutations([&#39;ADD&#39;, &#39;SUB&#39;]),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项-2" tabindex="-1"><a class="header-anchor" href="#注意事项-2" aria-hidden="true">#</a> 注意事项</h3><p>同样注意传递参数，以及数组形式函数名的问题</p>`,29),r=[d];function l(t,c){return n(),i("div",null,r)}const v=e(s,[["render",l],["__file","ldvalx37b7yn02thg7g.html.vue"]]);export{v as default};
