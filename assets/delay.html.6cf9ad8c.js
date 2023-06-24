import{_ as s,r as e,o as t,c as p,a as o,b as a,e as l,d as r}from"./app.774234d3.js";var c="/flow-connect/images/standard-nodes/audio/delay.png";const i={},d=a("h2",{id:"standardnode-delay",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#standardnode-delay","aria-hidden":"true"},"#"),l(" StandardNode: Delay")],-1),u=a("img",{class:"zoomable",alt:"Delay standard node",src:c},null,-1),k=r(`<br><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> delayEffect <span class="token operator">=</span> flow<span class="token punctuation">.</span><span class="token function">createNode</span><span class="token punctuation">(</span><span class="token string">&quot;audio/delay&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h3 id="default-state" tabindex="-1"><a class="header-anchor" href="#default-state" aria-hidden="true">#</a> Default State</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">feedback</span><span class="token operator">:</span> <span class="token number">0.45</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cutoff</span><span class="token operator">:</span> <span class="token number">20000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">wet</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dry</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">delayTime</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bypass</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function m(v,b){const n=e("Hierarchy");return t(),p("div",null,[d,u,o(n,{extend:{name:"Node",link:"../../api/classes/node.html"}},null,8,["extend"]),k])}var h=s(i,[["render",m],["__file","delay.html.vue"]]);export{h as default};