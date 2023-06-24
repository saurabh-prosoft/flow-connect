import{_ as n,r as e,o as t,c as o,a as p,b as a,e as r,d as c}from"./app.774234d3.js";var l="/flow-connect/images/standard-nodes/audio/chorus.png";const i={},d=a("h2",{id:"standardnode-chorus",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#standardnode-chorus","aria-hidden":"true"},"#"),r(" StandardNode: Chorus")],-1),u=a("img",{class:"zoomable",alt:"Chorus standard node",src:l},null,-1),k=c(`<br><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> chorusEffect <span class="token operator">=</span> flow<span class="token punctuation">.</span><span class="token function">createNode</span><span class="token punctuation">(</span><span class="token string">&quot;audio/chorus&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h3 id="default-state" tabindex="-1"><a class="header-anchor" href="#default-state" aria-hidden="true">#</a> Default State</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">feedback</span><span class="token operator">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span>
  <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">0.0045</span><span class="token punctuation">,</span>
  <span class="token literal-property property">depth</span><span class="token operator">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rate</span><span class="token operator">:</span> <span class="token number">0.01</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bypass</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function v(h,m){const s=e("Hierarchy");return t(),o("div",null,[d,u,p(s,{extend:{name:"Node",link:"../../api/classes/node.html"}},null,8,["extend"]),k])}var _=n(i,[["render",v],["__file","chorus.html.vue"]]);export{_ as default};
