import{_ as l,r as d,o as c,c as u,b as o,a as t,w as s,u as f,e}from"./app.774234d3.js";var m="/flow-connect/images/sub-flow-node-example.png";const p=[],b=[{name:"subFlow",type:"property"}],w=[{name:"serialize",type:"method-async"}];var y={constructors:p,properties:b,methods:w};const v=o("h1",{id:"class-subflownode",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#class-subflownode","aria-hidden":"true"},"#"),e(" Class: SubFlowNode")],-1),g=e("A SubFlowNode is a special type of "),x=e("Node"),k=e(" that holds reference to another "),z=e("Flow"),N=e(" (a nested flow) and proxies input/output data through its "),F=e("terminals"),S=e(" to the inner flow's "),P=e("TunnelNodes"),H=e("."),A=o("img",{class:"zoomable",alt:"/Sub-flow node example",src:m},null,-1),M=o("h2",{id:"hierarchy",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#hierarchy","aria-hidden":"true"},"#"),e(" Hierarchy")],-1),B=o("h2",{id:"overview",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),e(" Overview")],-1),C=e("All Properties, Accessors, Methods and Events "),E=e(" from "),K=e("Node"),O=e("."),R=o("h2",{id:"properties",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),e(" Properties")],-1),V=o("h3",{id:"subflow",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#subflow","aria-hidden":"true"},"#"),e(" subFlow")],-1),I=e("Flow"),T=e(" Reference to the inner sub-flow. "),D=o("h2",{id:"methods",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),e(" Methods")],-1),j=o("h3",{id:"call",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#call","aria-hidden":"true"},"#"),e(" call")],-1),q=e(" call("),G=o("strong",null,"eventKey: ",-1),J=o("em",null,"string",-1),L=e(", "),Q=o("strong",null,"...args: ",-1),U=o("em",null,"any",-1),W=e("): "),X=o("em",null,"void",-1),Y=e("from "),Z=e("Hooks"),$=e("."),ee=e("call"),oe=o("h3",{id:"off",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#off","aria-hidden":"true"},"#"),e(" off")],-1),te=e(" off("),se=o("strong",null,"eventKey: ",-1),ne=o("em",null,"string",-1),ie=e(", "),de=o("strong",null,"id: ",-1),_e=o("em",null,"number",-1),ae=e("): "),he=o("em",null,"void",-1),re=e("from "),le=e("Hooks"),ce=e("."),ue=e("off"),fe=o("h3",{id:"offall",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#offall","aria-hidden":"true"},"#"),e(" offAll")],-1),me=e(" offAll(): "),pe=o("em",null,"void",-1),be=e("from "),we=e("Hooks"),ye=e("."),ve=e("offAll"),ge=o("h3",{id:"on",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#on","aria-hidden":"true"},"#"),e(" on")],-1),xe=e(" on("),ke=o("strong",null,"eventKey: ",-1),ze=o("em",null,"string",-1),Ne=e(", "),Fe=o("strong",null,"callback: ",-1),Se=o("em",null,"(...args: any) => void",-1),Pe=e("): "),He=o("em",null,"number",-1),Ae=e("from "),Me=e("Hooks"),Be=e("."),Ce=e("on"),Ee=o("br",null,null,-1),Ke=e(" See "),Oe=e("Events"),Re=e(". "),Ve=o("h3",{id:"serialize",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#serialize","aria-hidden":"true"},"#"),e(" serialize")],-1),Ie=e(" serialize("),Te=o("strong",null,"persist?: ",-1),De=e("DataPersistenceProvider"),je=e("): "),qe=e("Promise<"),Ge=e("SerializedSubFlowNode"),Je=e(">"),Le=e(" of "),Qe=e("Serializable"),Ue=e("."),We=e("serialize"),Xe=e("Promise<"),Ye=e("SerializedSubFlowNode"),Ze=e(">"),$e={__name:"subflow-node.html",setup(eo){return(oo,to)=>{const n=d("Ref"),a=d("Hierarchy"),i=d("Icon"),h=d("Overview"),r=d("Property"),_=d("Method");return c(),u("div",null,[v,o("p",null,[g,t(n,{to:"./node"},{default:s(()=>[x]),_:1}),k,t(n,{to:"./flow"},{default:s(()=>[z]),_:1}),N,t(n,{to:"./terminal"},{default:s(()=>[F]),_:1}),S,t(n,{to:"./tunnel-node"},{default:s(()=>[P]),_:1}),H]),A,M,o("p",null,[t(a,{extend:{name:"Node",link:"./node"}},null,8,["extend"])]),B,o("p",null,[C,t(i,{type:"inherited",class:"ml-0p5"}),E,t(n,{to:"./node"},{default:s(()=>[K]),_:1}),O]),t(h,{data:f(y)},null,8,["data"]),R,V,t(r,{type:"property",name:"subFlow"},{type:s(()=>[o("em",null,[t(n,{to:"./flow"},{default:s(()=>[I]),_:1})])]),desc:s(()=>[T]),_:1}),D,j,t(_,{type:"method-inherited"},{signature:s(()=>[q,G,J,L,Q,U,W,X]),inherit:s(()=>[t(i,{type:"inherited"}),Y,t(n,{to:"./hooks"},{default:s(()=>[Z]),_:1}),$,t(n,{to:"./hooks#call"},{default:s(()=>[ee]),_:1})]),_:1}),oe,t(_,{type:"method-inherited"},{signature:s(()=>[te,se,ne,ie,de,_e,ae,he]),inherit:s(()=>[t(i,{type:"inherited"}),re,t(n,{to:"./hooks"},{default:s(()=>[le]),_:1}),ce,t(n,{to:"./hooks#off"},{default:s(()=>[ue]),_:1})]),_:1}),fe,t(_,{type:"method-inherited"},{signature:s(()=>[me,pe]),inherit:s(()=>[t(i,{type:"inherited"}),be,t(n,{to:"./hooks"},{default:s(()=>[we]),_:1}),ye,t(n,{to:"./hooks#offall"},{default:s(()=>[ve]),_:1})]),_:1}),ge,t(_,{type:"method-inherited"},{signature:s(()=>[xe,ke,ze,Ne,Fe,Se,Pe,He]),inherit:s(()=>[t(i,{type:"inherited"}),Ae,t(n,{to:"./hooks"},{default:s(()=>[Me]),_:1}),Be,t(n,{to:"./hooks#on"},{default:s(()=>[Ce]),_:1})]),desc:s(()=>[Ee,Ke,t(n,{to:"#events"},{default:s(()=>[Oe]),_:1}),Re]),_:1}),Ve,t(_,{type:"method-async"},{signature:s(()=>[Ie,Te,o("em",null,[t(n,{to:"../interfaces/data-persistence-provider"},{default:s(()=>[De]),_:1})]),je,o("em",null,[qe,t(n,{to:"../interfaces/serialized-subflow-node"},{default:s(()=>[Ge]),_:1}),Je])]),inherit:s(()=>[t(i,{valign:"bottom",type:"implementation"}),Le,t(n,{to:"../interfaces/serializable"},{default:s(()=>[Qe]),_:1}),Ue,t(n,{to:"../interfaces/serializable#serialize"},{default:s(()=>[We]),_:1})]),return:s(()=>[Xe,o("em",null,[t(n,{to:"../interfaces/serialized-subflow-node"},{default:s(()=>[Ye]),_:1})]),Ze]),_:1})])}}};var no=l($e,[["__file","subflow-node.html.vue"]]);export{no as default};
