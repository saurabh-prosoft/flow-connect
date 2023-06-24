import{_ as u,o as s,c as p}from"./app.774234d3.js";const i={name:"LiveRunReactive",props:["play"],mounted(){this.flowConnect=new FlowConnect(this.$refs["example-basic-canvas"]),window.reactiveExampleFC=this.flowConnect;let t=this.flowConnect.createFlow({name:"Reactive Example",rules:{}}),r=t.createNode("common/string-source",Vector.create(41.1,-3.5),{state:{value:"Sample String"}}),l=t.createNode("common/number-source",Vector.create(46.8,93.2),{state:{value:100}}),n=t.createNode("common/boolean-source",Vector.create(60.3,218),{state:{value:!1}}),o=t.createNode("common/log",Vector.create(665.1,64.3),{});o.addNewTerminal("data"),o.addNewTerminal("data");let e=t.createNode("core/empty",Vector.create(369.1,70.7),{name:"Custom Node",width:170,state:{stringValue:"",numberValue:0,boolValue:!1},style:{spacing:20}});e.ui.append([e.createUI("core/x-layout",{childs:[e.createUI("core/label",{text:"String",style:{grow:.4}}),e.createUI("core/label",{text:e.state.stringValue,propName:"stringValue",input:!0,output:!0,style:{grow:.6}})],style:{spacing:10}}),e.createUI("core/x-layout",{childs:[e.createUI("core/label",{text:"Number",style:{grow:.4}}),e.createUI("core/input",{value:e.state.numberValue,propName:"numberValue",input:!0,output:!0,height:20,style:{type:InputType.Number,grow:.6}})],style:{spacing:10}}),e.createUI("core/x-layout",{childs:[e.createUI("core/label",{text:"Boolean",style:{grow:.4}}),e.createUI("core/toggle",{propName:"boolValue",input:!0,output:!0,height:10,style:{grow:.2}})],style:{spacing:10}})]),e.watch("stringValue",(a,c)=>{console.log("Watcher for prop 'stringValue': Old:",a,"New:",c)}),e.watch("numberValue",(a,c)=>{console.log("Watcher for prop 'numberValue': Old:",a,"New:",c)}),e.watch("boolValue",(a,c)=>{console.log("Watcher for prop 'boolValue': Old:",a,"New:",c)}),r.outputsUI[0].connect(e.inputsUI[0]),l.outputsUI[1].connect(e.inputsUI[1]),n.outputsUI[0].connect(e.inputsUI[2]),e.outputsUI[0].connect(o.inputs[1]),e.outputsUI[1].connect(o.inputs[2]),e.outputsUI[2].connect(o.inputs[3]),this.flowConnect.render(t)},watch:{play(t){t?this.flowConnect.currFlow.start():this.flowConnect.currFlow.stop()}}},m={class:"example-canvas",ref:"example-basic-canvas"};function d(t,r,l,n,o,e){return s(),p("canvas",m,null,512)}var g=u(i,[["render",d],["__scopeId","data-v-8315fd88"],["__file","LiveRunReactive.vue"]]);export{g as default};