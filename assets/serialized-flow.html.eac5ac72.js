import{_ as i,r as d,o as r,c as a,b as s,a as o,w as n,e}from"./app.7bbcf4b0.js";const _={},l=s("h1",{id:"interface-serializedflow",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#interface-serializedflow","aria-hidden":"true"},"#"),e(" Interface: SerializedFlow")],-1),c=e(`{
  id: string,
  name: string,
  rules: `),h=e("Rules"),u=e(`,
  terminalColors: Record<string, string>,
  nodes: `),f=e("SerializedNode"),z=e(`[],
  groups: `),p=e("SerializedGroup"),m=e(`[],
  connectors: `),g=e("SerializedConnector"),w=e(`[],
  inputs: `),x=e("SerializedTunnelNode"),S=e(`[],
  outputs: `),N=e("SerializedTunnelNode"),v=e(`[],
  executionGraph: `),C=e("SerializedGraph"),R=e(`
}
`);function B(G,T){const t=d("Ref");return r(),a("div",null,[l,s("pre",null,[c,o(t,{to:"./rules"},{default:n(()=>[h]),_:1}),u,o(t,{to:"./serialized-node"},{default:n(()=>[f]),_:1}),z,o(t,{to:"./serialized-group"},{default:n(()=>[p]),_:1}),m,o(t,{to:"./serialized-connector"},{default:n(()=>[g]),_:1}),w,o(t,{to:"./serialized-tunnel-node"},{default:n(()=>[x]),_:1}),S,o(t,{to:"./serialized-tunnel-node"},{default:n(()=>[N]),_:1}),v,o(t,{to:"./serialized-graph"},{default:n(()=>[C]),_:1}),R])])}var b=i(_,[["render",B],["__file","serialized-flow.html.vue"]]);export{b as default};
