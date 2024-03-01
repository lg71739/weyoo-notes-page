import{_ as e,o as i,c as n,f as s}from"./app-19e0b0f0.js";const l={},a=s(`<h2 id="pipeline实现界面选择" tabindex="-1"><a class="header-anchor" href="#pipeline实现界面选择" aria-hidden="true">#</a> pipeline实现界面选择</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Define the options as a global parameter
SLEEP_OPTIONS = [&#39;2.5m&#39;, &#39;2m&#39;, &#39;15s&#39;, &#39;50s&#39;, &#39;4m&#39;, &#39;1m&#39;, &#39;1.5m&#39;, &#39;1.5s&#39;, &#39;random&#39;]

pipeline {
    agent any
    parameters {
        choice(name: &#39;sleep_time&#39;, 
               choices: SLEEP_OPTIONS, // Use the global parameter
               description: &quot;the sleep time to execute after the command&quot;)
    }
    stages {
        stage(&#39;Use Global Parameter&#39;) {
            steps {
            script {
                env.RELEASE_SCOPE = input message: &#39;User input required&#39;, ok: &#39;Release!&#39;,
                        parameters: [choice(name: &#39;RELEASE_SCOPE&#39;, choices: &#39;patch\\nminor\\nmajor&#39;, 
                                     description: &#39;What is the release scope?&#39;)]
            }
            echo &quot;\${env.RELEASE_SCOPE}&quot;
        }
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pipeline输入" tabindex="-1"><a class="header-anchor" href="#pipeline输入" aria-hidden="true">#</a> pipeline输入</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pipeline {
    agent any
    stages {
        stage(&#39;Example&#39;) {
            input {
                message &quot;Should we continue?&quot;
                ok &quot;Yes, we should.&quot;
                submitter &quot;alice,bob&quot;
                parameters {
                    string(name: &#39;PERSON&#39;, defaultValue: &#39;Mr Jenkins&#39;, description: &#39;Who should I say hello to?&#39;)
                }
            }
            steps {
                echo &quot;Hello, \${PERSON}, nice to meet you.&quot;
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=[a];function r(t,v){return i(),n("div",null,d)}const u=e(l,[["render",r],["__file","index.html.vue"]]);export{u as default};
