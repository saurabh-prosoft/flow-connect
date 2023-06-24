import{_ as u,o as r,c as l}from"./app.774234d3.js";const p={name:"LiveRunExecutable",props:["play"],mounted(){this.flowConnect=new FlowConnect(this.$refs["example-basic-canvas"]),window.exeExampleFC=this.flowConnect;let s=this.flowConnect.createFlow({name:"Graph Execution Example",rules:{}});class c extends Node{setupIO(){this.addTerminals([{type:TerminalType.IN,name:"in",dataType:"any"},{type:TerminalType.OUT,name:"out",dataType:"any"}])}created(o){const{name:n,width:i=120}=o;this.name=n,this.width=i,this.state={status:"Stopped",lastProcessed:-1},this.setupUI(),this.setupListeners()}process(){this.state.status="Processing",this.state.lastProcessed=this.flow.flowConnect.time,this.setOutputs(0,"Dummy Data")}setupUI(){this.style.color="white",this.ui.style.backgroundColor="black",this.ui.style.shadowBlur=10,this.ui.style.shadowColor="black",this.button=this.createUI("core/button",{text:"Trigger output",height:20,style:{backgroundColor:"white",color:"black",shadowColor:"grey"}}),this.ui.append([this.createUI("core/x-layout",{childs:[this.createUI("core/label",{text:"Status:",style:{grow:.4,color:"white"}}),this.createUI("core/label",{text:this.state.status,propName:"status",style:{grow:.6,color:"white",align:Align.Right}})]}),this.button])}setupListeners(){this.button.on("click",()=>this.setOutputs(0,"Dummy Data")),this.flow.on("stop",()=>this.state.status="Stopped"),this.flow.on("tick",()=>{this.state.status==="Processing"&&s.flowConnect.time-this.state.lastProcessed>250&&(this.state.status="Idle")})}}FlowConnect.register({type:"node",name:"my-custom/dummy-node"},c),s.renderers.background=()=>(e,o,n)=>{Object.assign(e,{fillStyle:n.style.backgroundColor,shadowBlur:n.style.shadowBlur,shadowColor:n.style.shadowColor}),e.fillRect(o.position.x,o.position.y,o.width,o.height)};let a=[Vector.create(510.9,18),Vector.create(-298,82.7),Vector.create(-96.4,21.1),Vector.create(-95.5,182),Vector.create(105.2,-62),Vector.create(105.9,76.3),Vector.create(104.4,221.1),Vector.create(302,19.5),Vector.create(304.4,153.2),Vector.create(512,-105.5),Vector.create(505.1,153.2),Vector.create(720.3,90)];for(let e=0;e<12;e++)s.createNode("my-custom/dummy-node",a[e],{name:"Node "+(e+1)});let t=[...s.nodes.values()];t[5].addTerminal({type:TerminalType.IN,dataType:"any",name:"in1"}),t[7].addTerminal({type:TerminalType.IN,dataType:"any",name:"in1"}),t[11].addTerminal({type:TerminalType.IN,dataType:"any",name:"in1"}),t[0].outputs[0].connect(t[2].inputs[0]),t[1].outputs[0].connect(t[2].inputs[0]),t[1].outputs[0].connect(t[3].inputs[0]),t[2].outputs[0].connect(t[4].inputs[0]),t[2].outputs[0].connect(t[5].inputs[0]),t[2].outputs[0].connect(t[6].inputs[0]),t[3].outputs[0].connect(t[6].inputs[0]),t[3].outputs[0].connect(t[8].inputs[0]),t[4].outputs[0].connect(t[7].inputs[0]),t[5].outputs[0].connect(t[7].inputs[0]),t[5].outputs[0].connect(t[8].inputs[0]),t[6].outputs[0].connect(t[9].inputs[0]),t[7].outputs[0].connect(t[9].inputs[0]),t[8].outputs[0].connect(t[10].inputs[0]),t[9].outputs[0].connect(t[11].inputs[0]),t[10].outputs[0].connect(t[11].inputs[0]),t[4].outputs[0].connect(t[7].inputs[1]),t[3].outputs[0].connect(t[5].inputs[1]),t[0].outputs[0].connect(t[11].inputs[1]),this.flowConnect.render(s)},watch:{play(s){s?this.flowConnect.currFlow.start():this.flowConnect.currFlow.stop()}}},d={class:"example-canvas",ref:"example-basic-canvas"};function h(s,c,a,t,e,o){return r(),l("canvas",d,null,512)}var m=u(p,[["render",h],["__scopeId","data-v-046efe7b"],["__file","LiveRunExecutable.vue"]]);export{m as default};
