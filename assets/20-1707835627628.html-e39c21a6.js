import{_ as n,r as c,o as s,c as r,d as i,e as a,b as t,f as g}from"./app-8bf3c3a9.js";const o={},p=i("h1",{id:"github-操作",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#github-操作","aria-hidden":"true"},"#"),a(" GitHub 操作")],-1),d={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},l=g(`<table><thead><tr><th style="text-align:left;">账号</th><th style="text-align:left;">姓名</th><th style="text-align:left;">验证邮箱</th></tr></thead><tbody><tr><td style="text-align:left;">atguiguyuebuqun</td><td style="text-align:left;">岳不群</td><td style="text-align:left;"><a href="mailto:atguiguyuebuqun@aliyun.com">atguiguyuebuqun@aliyun.com</a></td></tr><tr><td style="text-align:left;">atguigulinghuchong</td><td style="text-align:left;">令狐冲</td><td style="text-align:left;"><a href="mailto:atguigulinghuchong@163.com">atguigulinghuchong@163.com</a></td></tr><tr><td style="text-align:left;">atguigudongfang1</td><td style="text-align:left;">东方不败</td><td style="text-align:left;"><a href="mailto:atguigudongfang1@163.com">atguigudongfang1@163.com</a></td></tr></tbody></table><h2 id="创建远程仓库" tabindex="-1"><a class="header-anchor" href="#创建远程仓库" aria-hidden="true">#</a> 创建远程仓库</h2><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_11_17_202402132311127.png" alt="image-20210917223235275" tabindex="0" loading="lazy"><figcaption>image-20210917223235275</figcaption></figure><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_11_21_202402132311086.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="远程仓库操作" tabindex="-1"><a class="header-anchor" href="#远程仓库操作" aria-hidden="true">#</a> 远程仓库操作</h2><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;"><code>git remote add 别名 远程地址</code></td><td style="text-align:left;">起别名</td></tr><tr><td style="text-align:left;"><code>git remote -v</code></td><td style="text-align:left;">查看当前所有远程别名</td></tr><tr><td style="text-align:left;"><code>git clone 远程地址</code></td><td style="text-align:left;">将远程仓库的内容克隆到本地</td></tr><tr><td style="text-align:left;"><code>git pull 远程地址别名 远程分支名</code></td><td style="text-align:left;">将远程仓库对于分支最新内容拉下来后与当前本地分支直接合并</td></tr><tr><td style="text-align:left;"><code>git push 别名 分支</code></td><td style="text-align:left;">推送本地分支上的内容到远程仓库</td></tr></tbody></table><h3 id="创建远程仓库别名" tabindex="-1"><a class="header-anchor" href="#创建远程仓库别名" aria-hidden="true">#</a> 创建远程仓库别名</h3><p>1）基本语法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token parameter variable">-v</span>
<span class="token function">git</span> remote <span class="token function">add</span> 别名 远程地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2）案例实操</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_11_41_202402132311800.png" alt="image-20210917225451875" tabindex="0" loading="lazy"><figcaption>image-20210917225451875</figcaption></figure><h3 id="推送本地分支到远程仓库" tabindex="-1"><a class="header-anchor" href="#推送本地分支到远程仓库" aria-hidden="true">#</a> 推送本地分支到远程仓库</h3><p>1）基本语法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push 别名 分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2）案例实操</p><p>由于 GitHub 外网的特殊原因，会有网络延迟，等待时间可能较长，属于正常现象。可能要多尝试几次，需要点耐心。当然你有工具除外</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push git-demo master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果本地还没有过 SSH 免密登录操作（下面内容会详细介绍），则在执行命令后会弹出一个<code>Connect to GitHub</code>的提示框</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_11_50_202402132311273.png" alt="image-20210918224448045" tabindex="0" loading="lazy"><figcaption>image-20210918224448045</figcaption></figure><p>点击<code>Sign in with your browser</code>后会自动打开系统默认浏览器</p><p>如果你的 GitHub 尚未进行过任何 Git 相关授权，则会给出确认授权提示信息，点击<code>Authorize GitCredentialManager</code>进行授权即可</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_11_59_202402132311812.png" alt="image-20210918231341801" tabindex="0" loading="lazy"><figcaption>image-20210918231341801</figcaption></figure><p>接着会提示授权成功（如果在此之前已经对<code>Git Credential Manager</code>进行过授权，则直接提示此信息）</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_12_9_202402132312515.png" alt="image-20210918224627107" tabindex="0" loading="lazy"><figcaption>image-20210918224627107</figcaption></figure><p>成功推送本地分支至远程库</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_12_18_202402132312801.png" alt="image-20210918224403240" tabindex="0" loading="lazy"><figcaption>image-20210918224403240</figcaption></figure><p><strong>凭据管理器</strong></p><p>在上述操作过程中，点击<code>Authorize GitCredentialManager</code>进行授权后，在 GitHub 设置页面的<code>Application</code>选项—<code>Authorized OAuth Apps</code>中可以查看到 <code>Git Credential Manager</code>的授权信息</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_12_27_202402132312955.png" alt="image-20210918231735259" tabindex="0" loading="lazy"><figcaption>image-20210918231735259</figcaption></figure><p>在上述过程前，本地凭据管理器中还没有任何身份凭证信息（没有 Git 和 GitHub 相关的凭据信息）</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_12_41_202402132312761.png" alt="image-20210918230512316" tabindex="0" loading="lazy"><figcaption>image-20210918230512316</figcaption></figure><p>执行过上述命令等操作后，本地凭据管理器中会出现 Git 相关凭据信息</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_12_55_202402132312314.png" alt="image-20210918233953904" tabindex="0" loading="lazy"><figcaption>image-20210918233953904</figcaption></figure><h3 id="拉取远程仓库到本地" tabindex="-1"><a class="header-anchor" href="#拉取远程仓库到本地" aria-hidden="true">#</a> 拉取远程仓库到本地</h3><p>1）基本语法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> pull 别名 分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2）案例实操</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_13_3_202402132313152.png" alt="image-20210918234422490" tabindex="0" loading="lazy"><figcaption>image-20210918234422490</figcaption></figure><h3 id="克隆远程仓库到本地" tabindex="-1"><a class="header-anchor" href="#克隆远程仓库到本地" aria-hidden="true">#</a> 克隆远程仓库到本地</h3><p>1）基本语法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone 远程库地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2）案例实操</p><p>首先获取需要克隆的远程库地址</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_13_23_202402132313218.png" alt="image-20210918235159899" tabindex="0" loading="lazy"><figcaption>image-20210918235159899</figcaption></figure><p>由于<code>workspace</code>下面已经存在一个同名的仓库地址，所以直接在<code>workspace</code>中键入命令会有错误提示信息</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_9_13_202402132309289.png" alt="image-20210918235519853" tabindex="0" loading="lazy"><figcaption>image-20210918235519853</figcaption></figure><p>这是因为，<code>clone</code>命令默认帮我们创建的一个远程仓库名称同名的文件夹，所以这里我删除了<code>git-demo</code>目录</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_13_54_202402132313603.png" alt="image-20210918235857263" tabindex="0" loading="lazy"><figcaption>image-20210918235857263</figcaption></figure><p>小结：<code>clone</code> 会做如下操作</p><ul><li>1、拉取代码</li><li>2、初始化本地仓库</li><li>3、创建别名（默认<code>origin</code>）</li></ul><h2 id="团队协作" tabindex="-1"><a class="header-anchor" href="#团队协作" aria-hidden="true">#</a> 团队协作</h2><h3 id="团队内协作" tabindex="-1"><a class="header-anchor" href="#团队内协作" aria-hidden="true">#</a> 团队内协作</h3><p>如果项目之外成员想要将自己编写的代码推送至远程库，则会提示<code>unable to access...403</code></p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_14_2_202402132314690.png" alt="image-20210919002334885" tabindex="0" loading="lazy"><figcaption>image-20210919002334885</figcaption></figure><p>要想获取推送的权限，则需要该项目管理员对该成员进行邀请，将其添加至该项目中</p><p>1）邀请合作者，输入用户名，复制地址并发送给合作者</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_14_9_202402132314592.png" alt="image-20210919001646877" tabindex="0" loading="lazy"><figcaption>image-20210919001646877</figcaption></figure><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_14_17_202402132314093.png" alt="image-20210919001732944" tabindex="0" loading="lazy"><figcaption>image-20210919001732944</figcaption></figure><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_14_25_202402132314298.png" alt="image-20210919001847491" tabindex="0" loading="lazy"><figcaption>image-20210919001847491</figcaption></figure><p>2）合作者访问该链接，点击接受邀请，可以在其账号上看到该远程仓库</p>`,60),m={href:"https://github.com/atguiguvueyue/git-demo/invitations",target:"_blank",rel:"noopener noreferrer"},u=g(`<figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_14_35_202402132314930.png" alt="image-20210919002022667" tabindex="0" loading="lazy"><figcaption>image-20210919002022667</figcaption></figure><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_14_43_202402132314936.png" alt="image-20210919002239871" tabindex="0" loading="lazy"><figcaption>image-20210919002239871</figcaption></figure><p>接下来，就可以通过<code>git</code>命令对远程库进行克隆、拉取、提交、推送等操作了</p><h3 id="跨团队协作" tabindex="-1"><a class="header-anchor" href="#跨团队协作" aria-hidden="true">#</a> 跨团队协作</h3><p>1）合作者视角</p><p>点击<code>Fork</code>，将其他项目“叉”到自己账号上</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_14_53_202402132314690.png" alt="image-20210919003412417" tabindex="0" loading="lazy"><figcaption>image-20210919003412417</figcaption></figure><p>自己账号上就有了该项目，可以清楚地看到该项目<code>forked from xxx</code>，即可对代码进行修改</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_15_1_202402132315946.png" alt="image-20210919003500235" tabindex="0" loading="lazy"><figcaption>image-20210919003500235</figcaption></figure><p>修改代码后，点击<code>Pull requests</code>—<code>New pull request</code>，发起拉取请求</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_15_12_202402132315710.png" alt="image-20210919004019396" tabindex="0" loading="lazy"><figcaption>image-20210919004019396</figcaption></figure><p>查看修改内容，点击<code>Create pull request</code>，创建拉取请求</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_15_20_202402132315748.png" alt="image-20210919004334829" tabindex="0" loading="lazy"><figcaption>image-20210919004334829</figcaption></figure><p>填写请求信息及评论内容，点击<code>Create pull request</code></p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_15_32_202402132315100.png" alt="image-20210919004505828" tabindex="0" loading="lazy"><figcaption>image-20210919004505828</figcaption></figure><p>创建完成</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_15_37_202402132315910.png" alt="image-20210919004830149" tabindex="0" loading="lazy"><figcaption>image-20210919004830149</figcaption></figure><p>2）项目管理员视角</p><p>可以在该项目中查看到<code>Pull requests</code>有一条新的记录，可以点击下方提交信息进行查看</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_15_46_202402132315127.png" alt="image-20210919005217558" tabindex="0" loading="lazy"><figcaption>image-20210919005217558</figcaption></figure><p>想要看到合作者修改的具体内容，可以点击提交记录进行查看</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_15_53_202402132315002.png" alt="image-20210919005303909" tabindex="0" loading="lazy"><figcaption>image-20210919005303909</figcaption></figure><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_16_3_202402132316152.png" alt="image-20210919005442954" tabindex="0" loading="lazy"><figcaption>image-20210919005442954</figcaption></figure><p>同时，可以对拉取请求进行审查和评论</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_16_12_202402132316639.png" alt="image-20210919005558618" tabindex="0" loading="lazy"><figcaption>image-20210919005558618</figcaption></figure><p>最后，审查通过就可以对拉取请求进行合并了，点击<code>Merge pull request</code>进行合并</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_9_35_202402132309772.png" alt="image-20210919005831430" tabindex="0" loading="lazy"><figcaption>image-20210919005831430</figcaption></figure><p>点击<code>Confirm merge</code>，确认合并</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_16_29_202402132316063.png" alt="image-20210919005854745" tabindex="0" loading="lazy"><figcaption>image-20210919005854745</figcaption></figure><p>合并成功之后，项目成员就可以看到修改的相关内容了</p><h2 id="ssh-免密登录" tabindex="-1"><a class="header-anchor" href="#ssh-免密登录" aria-hidden="true">#</a> SSH 免密登录</h2><h3 id="本地生成-ssh-密钥" tabindex="-1"><a class="header-anchor" href="#本地生成-ssh-密钥" aria-hidden="true">#</a> <strong>本地生成 SSH 密钥</strong></h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># -t指定加密算法，-C添加注释
ssh-keygen -t rsa -C 描述
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>键入命令，连敲三次回车即可</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_9_43_202402132309372.png" alt="image-20210919011352497" tabindex="0" loading="lazy"><figcaption>image-20210919011352497</figcaption></figure><p>进入<code>~/.ssh</code>目录，复制公钥信息</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_16_42_202402132316473.png" alt="image-20210919011953686" tabindex="0" loading="lazy"><figcaption>image-20210919011953686</figcaption></figure><h3 id="github-上添加公钥" tabindex="-1"><a class="header-anchor" href="#github-上添加公钥" aria-hidden="true">#</a> <strong>GitHub 上添加公钥</strong></h3><p>未添加任何公钥之前，<code>Code</code>—<code>SSH</code>会有警告提示信息，表示目前 SSH 方式是没有权限的</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_16_45_202402132316398.png" alt="image-20210919014241528" tabindex="0" loading="lazy"><figcaption>image-20210919014241528</figcaption></figure><p>在 GitHub 的<code>settings</code>—<code>SSH and GPG keys</code>中，点击<code>New SSH key</code>添加一个公钥</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_16_56_202402132316061.png" alt="image-20210919012856831" tabindex="0" loading="lazy"><figcaption>image-20210919012856831</figcaption></figure><p>将<code>id_rsa.pub</code>即公钥信息粘贴至<code>Key</code>中，<code>Title</code>随意，点击<code>Add SSH key</code>进行添加</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_17_5_202402132317100.png" alt="image-20210919013103108" tabindex="0" loading="lazy"><figcaption>image-20210919013103108</figcaption></figure><p>出现下列信息，说明添加成功</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_17_12_202402132317233.png" alt="image-20210919013731928" tabindex="0" loading="lazy"><figcaption>image-20210919013731928</figcaption></figure><h3 id="验证可用性" tabindex="-1"><a class="header-anchor" href="#验证可用性" aria-hidden="true">#</a> <em>验证可用性</em></h3><p>进入<code>git-demo</code>项目，点开<code>Code</code>—<code>SSH</code>，发现已经没有警告提示信息了，表示可用</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_17_20_202402132317686.png" alt="image-20210919014010529" tabindex="0" loading="lazy"><figcaption>image-20210919014010529</figcaption></figure><p>复制 SSH 协议地址，使用<code>clone</code>命令克隆到本地，键入<code>yes</code>即可</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_17_29_202402132317672.png" alt="image-20210919015207022" tabindex="0" loading="lazy"><figcaption>image-20210919015207022</figcaption></figure><p>接下来就是修改内容、添加暂存区、提交本地库、推送远程库的操作了</p><p>这时候我们发现已经不再弹出登录授权的提示信息，就可以推送过去了</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_17_37_202402132317358.png" alt="image-20210919015907992" tabindex="0" loading="lazy"><figcaption>image-20210919015907992</figcaption></figure><p>查看远程库历史版本信息，确认推送成功</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_17_47_202402132317849.png" alt="image-20210919020511037" tabindex="0" loading="lazy"><figcaption>image-20210919020511037</figcaption></figure><p>至此，SSH 免密登录配置成功！</p><h2 id="idea-集成-github" tabindex="-1"><a class="header-anchor" href="#idea-集成-github" aria-hidden="true">#</a> IDEA 集成 GitHub</h2><h3 id="设置-github-账号" tabindex="-1"><a class="header-anchor" href="#设置-github-账号" aria-hidden="true">#</a> 设置 GitHub 账号</h3><p><strong>通过账号密码设置</strong></p><p>打开<code>Settings</code>，点击<code>Log In via GitHub...</code></p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_42_2_202402132342214.png" alt="image-20210919041647728" tabindex="0" loading="lazy"><figcaption>image-20210919041647728</figcaption></figure><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_42_3_202402132342987.png" alt="image-20210919042210631" tabindex="0" loading="lazy"><figcaption>image-20210919042210631</figcaption></figure><p>会自动打开浏览器，进行授权确认</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_42_12_202402132342377.png" alt="image-20210919041726626" tabindex="0" loading="lazy"><figcaption>image-20210919041726626</figcaption></figure><p>点击<code>Authorize in GitHub</code>后，会提示授权成功</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_42_21_202402132342640.png" alt="image-20210919041739608" tabindex="0" loading="lazy"><figcaption>image-20210919041739608</figcaption></figure><p>看到 IDEA 里新增了一条账号信息即为添加成功</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_42_28_202402132342550.png" alt="image-20210919041945459" tabindex="0" loading="lazy"><figcaption>image-20210919041945459</figcaption></figure><p><strong>通过 Token 设置</strong></p><p>点击<code>Log In with Token...</code></p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_42_35_202402132342423.png" alt="image-20210919041312781" tabindex="0" loading="lazy"><figcaption>image-20210919041312781</figcaption></figure><p>会弹出<code>Add GitHubh Account</code>框，输入我们在 GitHub 上创建的 Token 信息即可</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_42_43_202402132342838.png" alt="image-20210919042304290" tabindex="0" loading="lazy"><figcaption>image-20210919042304290</figcaption></figure><p>如果还没有生成过或者丢失了之前创建的 Token，可以直接点击<code>Generate...</code>进行自动生成，默认已勾好权限</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_42_50_202402132342872.png" alt="image-20210919041530615" tabindex="0" loading="lazy"><figcaption>image-20210919041530615</figcaption></figure><p>修改并确认无误后，点击<code>Generate token</code>即可进行生成</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_43_0_202402132343998.png" alt="image-20210919042634756" tabindex="0" loading="lazy"><figcaption>image-20210919042634756</figcaption></figure><p>Token 生成之后，只会在当前页面显示一次，需要及时复制保存下来</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_43_8_202402132343534.png" alt="image-20210919043209975" tabindex="0" loading="lazy"><figcaption>image-20210919043209975</figcaption></figure><p>将 Token 粘贴至输入框，点击<code>Add Account</code>即可添加</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_43_15_202402132343435.png" alt="image-20210919043504031" tabindex="0" loading="lazy"><figcaption>image-20210919043504031</figcaption></figure><p>最后别忘了，一定要点击<code>Apply</code>和<code>OK</code>对设置进行保存</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_43_21_202402132343906.png" alt="image-20210919043630909" tabindex="0" loading="lazy"><figcaption>image-20210919043630909</figcaption></figure><h3 id="分享工程到-github" tabindex="-1"><a class="header-anchor" href="#分享工程到-github" aria-hidden="true">#</a> 分享工程到 GitHub</h3><p>我们一般会先在远程库创建一个<code>Repository</code>，再将本地库通过<code>remote</code>关联到远程库，最后进行版本推送</p><p>或者是先在远程库创建一个<code>Repository</code>，再通过<code>clone</code>将远程库克隆至本地，最后进行版本推送</p><p>而在 IDEA 中，可以将上述步骤合成一个步骤，即通过<code>Share</code>将本地库分享至 GitHub 上，非常便捷</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_43_31_202402132343659.png" alt="image-20210919044545203" tabindex="0" loading="lazy"><figcaption>image-20210919044545203</figcaption></figure><p>填写完信息后，点击<code>Share</code>按钮，IDEA 会自动帮我们创建和初始化远程库，并将本地库推送至远程库</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_43_38_202402132343975.png" alt="image-20210919044648317" tabindex="0" loading="lazy"><figcaption>image-20210919044648317</figcaption></figure><p>查看 GitHub 是否存在该仓库，以验证是否分享成功</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_43_58_202402132343091.png" alt="image-20210919045324286" tabindex="0" loading="lazy"><figcaption>image-20210919045324286</figcaption></figure><p>在分享过程中，可能会出现如下报错：成功创建远程仓库，但是初始化推送失败。这时就需要进行手动<code>Push</code>的操作了</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_44_4_202402132344155.png" alt="image-20210919045442918" tabindex="0" loading="lazy"><figcaption>image-20210919045442918</figcaption></figure><h3 id="push-推送本地分支到远程库" tabindex="-1"><a class="header-anchor" href="#push-推送本地分支到远程库" aria-hidden="true">#</a> Push 推送本地分支到远程库</h3><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_44_11_202402132344982.png" alt="image-20210919045841143" tabindex="0" loading="lazy"><figcaption>image-20210919045841143</figcaption></figure><p>这里默认使用<code>https</code>协议进行推送，因为网络原因，很有可能推送失败</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_44_17_202402132344612.png" alt="image-20210919045959722" tabindex="0" loading="lazy"><figcaption>image-20210919045959722</figcaption></figure><p>这是可以修改远程连接方式，点击<code>Define remote</code>设置新的远程别名</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_44_24_202402132344031.png" alt="image-20210919050127937" tabindex="0" loading="lazy"><figcaption>image-20210919050127937</figcaption></figure><p>然后会弹出一个重新定义远程方式的界面，这里使用 SSH 协议的远程地址即可（注意：不要与原来的别名重复）</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_44_30_202402132344872.png" alt="image-20210919050421674" tabindex="0" loading="lazy"><figcaption>image-20210919050421674</figcaption></figure><p>点击<code>OK</code>后，可以重新选择远程别名，这里改为我们刚刚定义的 SSH 协议的别名：<code>origin-ssh</code></p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_44_41_202402132344644.png" alt="image-20210919050608057" tabindex="0" loading="lazy"><figcaption>image-20210919050608057</figcaption></figure><p>查看 GitHub 上历史版本修改内容，推送成功</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_44_53_202402132344645.png" alt="image-20210919050856473" tabindex="0" loading="lazy"><figcaption>image-20210919050856473</figcaption></figure><p><strong>注意</strong>：<code>push</code>是将本地库代码推送到远程库，如果本地库代码跟远程库代码版本不一致， <code>push</code>的操作是会被拒绝的。也就是说，要想 <code>push</code>成功，一定要保证本地库的版本要比远程库的版本高！<mark>因此一个成熟的程序员在动手改本地代码之前，一定会先检查下远程库跟本地代码的区别！如果本地的代码版本已经落后，切记要先<code>pull</code>拉取一下远程库的代码，将本地代码更新到最新以后，然后再修改，提交，推送！</mark></p><h3 id="pull-拉取远程库到本地" tabindex="-1"><a class="header-anchor" href="#pull-拉取远程库到本地" aria-hidden="true">#</a> Pull 拉取远程库到本地</h3><p>首先先修改远程库代码，然后进行如下操作</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_45_3_202402132345448.png" alt="image-20210919051622477" tabindex="0" loading="lazy"><figcaption>image-20210919051622477</figcaption></figure><p>选择 SSH 协议的别名，点击<code>Pull</code>进行代码拉取</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_45_10_202402132345076.png" alt="image-20210919051654972" tabindex="0" loading="lazy"><figcaption>image-20210919051654972</figcaption></figure><p>查看本地库代码易发生变化，并且历史版本也有了相关记录，说明代码拉取成功</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_45_17_202402132345214.png" alt="image-20210919051829325" tabindex="0" loading="lazy"><figcaption>image-20210919051829325</figcaption></figure><h3 id="clone-克隆远程库到本地" tabindex="-1"><a class="header-anchor" href="#clone-克隆远程库到本地" aria-hidden="true">#</a> Clone 克隆远程库到本地</h3><p>关闭项目，在 IDEA 选择页面，点击<code>Get From VCS</code></p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_45_26_202402132345470.png" alt="image-20210919134803024" tabindex="0" loading="lazy"><figcaption>image-20210919134803024</figcaption></figure><p>填写需要克隆的远程仓库地址和本地仓库地址，点击<code>Clone</code>进行克隆</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_45_34_202402132345576.png" alt="image-20210919135208275" tabindex="0" loading="lazy"><figcaption>image-20210919135208275</figcaption></figure><p>等待克隆完成</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_45_43_202402132345001.png" alt="image-20210919135421271" tabindex="0" loading="lazy"><figcaption>image-20210919135421271</figcaption></figure><p>初次进入项目，会提示是否信任并打开此 Maven 工程，一般选择<code>Trust Project</code></p><p>如果勾选<code>Trust projects in xxx</code>，则在此工作空间下所有新增项目都将被信任，不会再提示</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_45_51_202402132345579.png" alt="image-20210919135528661" tabindex="0" loading="lazy"><figcaption>image-20210919135528661</figcaption></figure><p>打开项目，确认<code>Test.java</code>内容无误，历史版本记录正常</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_46_5_202402132346278.png" alt="image-20210919140005154" tabindex="0" loading="lazy"><figcaption>image-20210919140005154</figcaption></figure>`,127);function h(f,b){const e=c("ExternalLinkIcon");return s(),r("div",null,[p,i("blockquote",null,[i("p",null,[a("官网："),i("a",d,[a("https://github.com/"),t(e)])])]),l,i("ul",null,[i("li",null,[i("a",m,[a("https://github.com/atguiguvueyue/git-demo/invitations"),t(e)])])]),u])}const y=n(o,[["render",h],["__file","20-1707835627628.html.vue"]]);export{y as default};
