import{_ as n,o as e,c as a,f as s}from"./app-8745ddab.js";const i={},t=s(`<h1 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> Object</h1><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><p><code>Object.definePrototype(obj,prop,descriptor)</code></p><ul><li>obj：要定义属性的对象。</li><li>prop：要定义或修改的属性的名称。</li><li>descriptor：要定义或修改的属性描述符。<br> 返回值：被传递给函数的对象。</li></ul><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p>​ 此方法允许精确地添加或修改对象的属性。通过赋值操作添加的普通属性是可枚举的，可以改变这些属性值，也可以删除这些属性值。默认情况下使用此方法添加的属性值是不可修改的。<br> 对象里目前存在的属性描述符有两种主要形式：</p><h3 id="数据描述符" tabindex="-1"><a class="header-anchor" href="#数据描述符" aria-hidden="true">#</a> 数据描述符</h3><p><strong>是一个具有值的属性，该值可以是可写的，也可以是不可写的。</strong></p><ul><li><p><strong>configurable：</strong></p><p>是否可以重新定义，当且仅当该属性键值为true时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为false。</p></li><li><p><strong>enumerable：</strong></p><p>是否可以枚举，当且仅当该属性键值为true时，该属性才会出现在对象的枚举属性中。默认为false。</p></li><li><p><strong>value：</strong></p><p>该属性对应的值。默认为undefined。</p></li><li><p><strong>writable：</strong></p><p>是否可以修改属性值，当且仅当该属性的键值为true时，上面的value才能被赋值运算符改变，默认为false。</p></li></ul><h3 id="存取描述符" tabindex="-1"><a class="header-anchor" href="#存取描述符" aria-hidden="true">#</a> 存取描述符</h3><p><strong>由getter函数和setter函数所描述的属性还可以具有以下可选键。</strong></p><ul><li><p><strong>get ：</strong></p><p>属性的getter函数，如果没有getter，则为undefined。动态计算得到当前属性值 （回调函数）。默认为undefined，当访问该属性时，会调用此函数。</p></li><li><p><strong>set ：</strong></p><p>监视当前属性值的变化，更新其他相关的属性(回调函数)。当属性值被修改时，会调用此函数。默认为undefined。</p></li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>一个描述符只能是这两者其中之一，不能同时是两者。</p><p>这两种描述符都是对象，描述符可拥有的键值：</p><p>如果一个描述符不具有value、writable 、get、set中任意一个键，那么它将被认为是一个数据描述符。如果一个描述符同时拥有value或writable和get或set键则会出现异常。</p></div><table><thead><tr><th></th><th>configurable</th><th>enumerable</th><th>value</th><th>writable</th><th>get</th><th>set</th></tr></thead><tbody><tr><td>数据描述符</td><td>可以</td><td>可以</td><td>可以</td><td>可以</td><td>不可以</td><td>不可以</td></tr><tr><td>存取描述符</td><td>可以</td><td>可以</td><td>不可以</td><td>不可以</td><td>可以</td><td>可以</td></tr></tbody></table><h2 id="代码演示" tabindex="-1"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h2><h3 id="创建属性" tabindex="-1"><a class="header-anchor" href="#创建属性" aria-hidden="true">#</a> <strong>创建属性</strong></h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>//    创建属性
    var o = {};
    Object.defineProperty(o,&quot;a&quot;,{
        value:37,
        writable:true,
        enumerable:true,
        configurable:true
    });
    //对象o拥有了属性a，值为37

    //在对象中添加一个设置了存取描述符属性的示例
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改属性writable" tabindex="-1"><a class="header-anchor" href="#修改属性writable" aria-hidden="true">#</a> <strong>修改属性writable</strong></h3><p>当writable属性设置为false时，该属性被称为“不可写的”。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>var o = {};//创建一个对象
Object.defineProperty(o,&#39;a&#39;,{
	value:37,
	writable:false,
})
console.log(o.a);
o.a = 25;
console.log(o.a);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="enumerable-属性" tabindex="-1"><a class="header-anchor" href="#enumerable-属性" aria-hidden="true">#</a> <strong>Enumerable 属性</strong></h3><p>定义了对象的属性是否可以在 for…in 循环和 Object.keys() 中被枚举。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>    var o = {};
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><figure><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2022/08/27_17_2_37_202208271702343.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><h3 id="configurable-特性" tabindex="-1"><a class="header-anchor" href="#configurable-特性" aria-hidden="true">#</a> <strong>configurable 特性</strong></h3><p>表示对象的属性是否可以被删除，以及除 value 和 writable 特性外的其他特性是否可以被修改。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>    var o = {};
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：会在第14行报错。</p><figure><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2022/08/27_17_1_11_202208271701552.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><h3 id="设置getter-和setter" tabindex="-1"><a class="header-anchor" href="#设置getter-和setter" aria-hidden="true">#</a> 设置getter()和setter()</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>    function Archiver() {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><figure><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2022/08/27_17_0_57_202208271700007.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
   <span class="token keyword">let</span> number <span class="token operator">=</span> <span class="token number">18</span>
   <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span>

   Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token comment">// value:18,</span>
    <span class="token comment">// enumerable:true, //控制属性是否可以枚举，默认值是false</span>
    <span class="token comment">// writable:true, //控制属性是否可以被修改，默认值是false</span>
    <span class="token comment">// configurable:true //控制属性是否可以被删除，默认值是false</span>

    <span class="token comment">//当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;有人读取age属性了&#39;</span><span class="token punctuation">)</span>
     <span class="token keyword">return</span> number
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值</span>
    <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;有人修改了age属性，且值是&#39;</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span>
     number <span class="token operator">=</span> value
    <span class="token punctuation">}</span>

   <span class="token punctuation">}</span><span class="token punctuation">)</span>

   <span class="token comment">// console.log(Object.keys(person))</span>

   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),l=[t];function r(d,c){return e(),a("div",null,l)}const o=n(i,[["render",r],["__file","60.html.vue"]]);export{o as default};
