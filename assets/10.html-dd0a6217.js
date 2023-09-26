import{_ as s,r as a,o as t,c as d,d as n,e,b as l,f as r}from"./app-8feddf91.js";const o={},c=n("h2",{id:"什么是vuex",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#什么是vuex","aria-hidden":"true"},"#"),e(" 什么是VueX")],-1),u=n("p",null,[e("Vuex 是一个专为 Vue.js 应用程序开发的"),n("strong",null,"状态管理模式"),e("。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。它对 vue 应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信")],-1),v={href:"https://github.com/vuejs/vue-devtools",target:"_blank",rel:"noopener noreferrer"},m=r(`<h2 id="什么时候使用" tabindex="-1"><a class="header-anchor" href="#什么时候使用" aria-hidden="true">#</a> 什么时候使用</h2><ul><li>多个组件依赖于同一状态</li><li>来自不同组件的行为需要变更同一状态</li></ul><h2 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理" aria-hidden="true">#</a> 工作原理</h2><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/02/8_14_26_40_vuex.png" alt="Vuex工作原理" tabindex="0" loading="lazy"><figcaption>Vuex工作原理</figcaption></figure><blockquote><p>官方Vuex 项目结构示例：</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── cart.js       # 购物车模块
        └── products.js   # 产品模块
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function h(_,b){const i=a("ExternalLinkIcon");return t(),d("div",null,[c,u,n("p",null,[e("Vuex 也集成到 Vue 的官方调试工具 "),n("a",v,[e("devtools extension (opens new window)"),l(i)]),e("，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。")]),m])}const x=s(o,[["render",h],["__file","10.html.vue"]]);export{x as default};
