import{_ as i,r as e,o as c,c as l,a as s,b as n,w as r,e as a,d as p}from"./app.774234d3.js";var d="/flow-connect/images/standard-nodes/visual/function-plotter.png";const u={},h=n("h2",{id:"standardnode-functionplotter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#standardnode-functionplotter","aria-hidden":"true"},"#"),a(" StandardNode: FunctionPlotter")],-1),v=n("img",{class:"zoomable",alt:"FunctionPlotter standard node",src:d},null,-1),_=p(`<br><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> plotter <span class="token operator">=</span> flow<span class="token punctuation">.</span><span class="token function">createNode</span><span class="token punctuation">(</span><span class="token string">&quot;visual/function-plotter&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">displayHeight</span><span class="token operator">:</span> <span class="token number">250</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> State</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">polar</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>`,6),m=a(`{
  plotStyle: `),k=a("PlotStyle"),f=a(`;
  displayHeight: number;
}
`);function b(g,x){const t=e("Hierarchy"),o=e("Ref");return c(),l("div",null,[h,v,s(t,{extend:{name:"Node",link:"../../api/classes/node.html"}},null,8,["extend"]),_,n("pre",null,[m,s(o,{to:"../../api/interfaces/plot-style"},{default:r(()=>[k]),_:1}),f])])}var N=i(u,[["render",b],["__file","function-plotter.html.vue"]]);export{N as default};
