import{_ as e,o as i,c as d,f as n}from"./app-765121fc.js";const s={},l=n(`<ul><li>当 <code>state</code> 中的数据需要经过加工后再使用时，可以使用 <code>getters</code> 加工</li><li>它不是必须的，当加工逻辑复杂且需要复用时，可以考虑使用</li><li><code>state</code> 与 <code>getters</code> 的关系有点像 <code>data</code> 和 <code>computed</code> 的关系</li><li>组件读取：<code>$store.getters.bigSum</code></li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>...
const getters = {
  bigSum(state) {
    return state.sum * 10
  }
}

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[l];function c(a,r){return i(),d("div",null,t)}const v=e(s,[["render",c],["__file","ldvalx37kj2ply7xdb.html.vue"]]);export{v as default};
