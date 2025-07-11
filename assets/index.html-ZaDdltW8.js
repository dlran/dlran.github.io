import{_ as i,c as a,a as e,o as n}from"./app-CXOWP-6d.js";const l={};function h(t,s){return n(),a("div",null,s[0]||(s[0]=[e(`<h3 id="_1-下载插件" tabindex="-1"><a class="header-anchor" href="#_1-下载插件"><span>1.下载插件</span></a></h3><div class="language-npm line-numbers-mode" data-highlighter="shiki" data-ext="npm" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>npm i vuepress-plugin-side-anchor -D</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2.使用</span></a></h3><p>在 <code>.vuepress/config.js</code>添加以下配置</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">module</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">exports</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress-plugin-right-anchor</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-样式更改" tabindex="-1"><a class="header-anchor" href="#_3-样式更改"><span>3.样式更改</span></a></h3><p>在<code>.vuepress/styles/index.styl</code>更改样式</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">side-anchor</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  border-left</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0.1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">rem</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">858585</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> solid</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">side-anchor-link</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  color</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  var</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">--text-color</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">side-anchor-link</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">active</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  color</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  #3</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">eaf</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">7</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">c</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const k=i(l,[["render",h]]),p=JSON.parse('{"path":"/article/ndLdIL7a/","title":"VuePress 添加右侧导航栏","lang":"zh-CN","frontmatter":{"title":"VuePress 添加右侧导航栏","createTime":"2024/8/13","tags":["JavaScript"],"permalink":"/article/ndLdIL7a/"},"readingTime":{"minutes":0.28,"words":83},"git":{"updatedTime":1749957276000,"changelog":[{"hash":"13186debee90c844663d33582e6bd52fe59a5bfc","time":1749957276000,"email":"rr@jjyy.bb","author":"rr","message":"initial"}]},"filePathRelative":"Code/VuePress_ndLdIL7a.md","headers":[],"categoryList":[{"id":"ca0dba","sort":10000,"name":"Code"}]}');export{k as comp,p as data};
