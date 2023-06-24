import{_ as n,r as s,o as t,c as o,a as r,b as a,e as p,d as c}from"./app.774234d3.js";var l="/flow-connect/images/standard-nodes/audio/stereo-panner.png";const d={},i=a("h2",{id:"standardnode-stereopanner",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#standardnode-stereopanner","aria-hidden":"true"},"#"),p(" StandardNode: StereoPanner")],-1),u=a("img",{class:"zoomable",alt:"StereoPanner standard node",src:l},null,-1),v=c(`<br><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> stereoPanner <span class="token operator">=</span> flow<span class="token punctuation">.</span><span class="token function">createNode</span><span class="token punctuation">(</span><span class="token string">&quot;audio/stereo-panner&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h3 id="default-state" tabindex="-1"><a class="header-anchor" href="#default-state" aria-hidden="true">#</a> Default State</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">pan</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bypass</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function m(k,h){const e=s("Hierarchy");return t(),o("div",null,[i,u,r(e,{extend:{name:"Node",link:"../../api/classes/node.html"}},null,8,["extend"]),v])}var b=n(d,[["render",m],["__file","stereo-panner.html.vue"]]);export{b as default};
