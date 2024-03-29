# Class: FlowConnect

FlowConnect can be considered as a container storing all <Ref to="./flow">Flows</Ref> created by it, a FlowConnect instance can render one Flow at a time on-screen.

A FlowConnect instance is bound to exactly one <code>&lt;canvas&gt;</code>, this instance maintains/tracks the dimensions of that canvas, registers user-interaction events (mouse, keyboard, touch) and creates additional OffScreenCanvas's to track/act-upon these events.

## Hierarchy

<Hierarchy :extend="{name: 'Hooks', link: './hooks.html'}" />

## Overview

<Overview :data="data" />

## Constructor

<Method type="constructor">
  <template v-slot:signature>
    new FlowConnect(<strong>mount?: </strong><em>HTMLCanvasElement</em> | <em>HTMLDivElement</em>):
    <em><Ref to="#class-flowconnect">FlowConnect</Ref></em>
  </template>
  <template v-slot:params>
    <Param name="mount?"><em>HTMLCanvasElement</em> | <em>HTMLDivElement</em></Param>
    HTML element (div or canvas) on which FlowConnect will render <Ref to="./flow">Flows</Ref>, if no mount is provided, a new canvas element will be created and attached to document body
  </template>
</Method>

## Properties

### canvas

<Property type="property" name="canvas">
  <template v-slot:type>
    <em>HTMLCanvasElement</em>
  </template>
  <template v-slot:desc>
    Reference to the canvas element on which the <Ref to="./flow">Flows</Ref> are rendered
  </template>
</Property>

### canvasDimensions

<Property type="property" name="canvasDimensions">
  <template v-slot:type>
    <em><Ref to="../interfaces/dimension">Dimension</Ref></em>
  </template>
  <template v-slot:desc>
    Canvas's absolute position and dimension from viewport origin (top-left)
  </template>
  <template v-slot:default>

```js:no-line-numbers
{ top: 0, left: 0, width: 0, height: 0 }
```

  </template>
</Property>

### disableScale

<Property type="property" name="disableScale">
  <template v-slot:type>
    <em>boolean</em>
  </template>
  <template v-slot:desc>
    Disables zoom in/out (or pinch on touch devices)
  </template>
  <template v-slot:default>false</template>
</Property>

### flows

<Property type="property" name="flows">
  <template v-slot:type>
    <em><Ref to="./flow">Flow</Ref>[]</em>
  </template>
  <template v-slot:desc>
    Reference to all the flows created by a <Ref to="./flow-connect">FlowConnect</Ref> instance
  </template>
  <template v-slot:default>[]</template>
</Property>

### maxScale

<Property type="property" name="maxScale">
  <template v-slot:type>
    <em>number</em>
  </template>
  <template v-slot:default>5</template>
</Property>

### minScale

<Property type="property" name="minScale">
  <template v-slot:type>
    <em>number</em>
  </template>
  <template v-slot:default>0.1</template>
</Property>

### offCanvas

<Property type="property" name="offCanvas">
  <template v-slot:type>
    <em>HTMLCanvasElement</em> | <em>OffscreenCanvas</em>
  </template>
  <template v-slot:desc>
    An offscreen canvas created by FlowConnect for rendering color hit-maps of <Ref to="./node">Nodes</Ref>
    <img alt="Node hit-map" class="zoomable my-1" src="/images/node-hit-map.png" />
  </template>
</Property>

### offGroupCanvas

<Property type="property" name="offGroupCanvas">
  <template v-slot:type>
    <em>HTMLCanvasElement</em> | <em>OffscreenCanvas</em>
  </template>
  <template v-slot:desc>
    An offscreen canvas created by FlowConnect for rendering color hit-maps of <Ref to="./group">Groups</Ref>
    <img alt="Group hit-map" class="zoomable my-1" src="/images/group-hit-map.png" />
  </template>
</Property>

### offUICanvas

<Property type="property" name="offUICanvas">
  <template v-slot:type>
    <em>HTMLCanvasElement</em> | <em>OffscreenCanvas</em>
  </template>
  <template v-slot:desc>
    An offscreen canvas created by FlowConnect for rendering color hit-maps for <Ref to="./ui-node">UINodes</Ref> and <Ref to="./terminal">Terminals</Ref> of <Ref to="./node">Nodes</Ref>
    <img alt="UI hit-map" class="zoomable my-1" src="/images/ui-hit-map.png" />
  </template>
</Property>

### pinchScaleDelta

<Property type="property" name="pinchScaleDelta">
  <template v-slot:type>
    <em>number</em>
  </template>
  <template v-slot:desc>
    Amount of zoom in every pinch event, can be used as sensitivity control.<br/>
    Value must be greater than 1.0
  </template>
  <template v-slot:default>1.02</template>
</Property>

### pointers

<Property type="property" name="pointers">
  <template v-slot:type>
    <em><Ref to="../interfaces/pointer">Pointer</Ref>[]</em>
  </template>
  <template v-slot:desc>
  Currently active pointers in any user-interaction (mouse or touch).

For e.g. while pinching (zooming) on touch devices, this array will contain two pointers each representing an individual touch.

While on mouse based devices, this array will only contain one pointer representing the mouse cursor at any given time.
</template>
<template v-slot:default>[]</template>
</Property>

### startTime

<Property type="property" name="startTime">
  <template v-slot:type>
    <em>number</em>
  </template>
  <template v-slot:desc>
    Time (in ms) when one or more flows created by this FlowConnect instance was started
  </template>
  <template v-slot:default>-1</template>
</Property>

### state

<Property type="property" name="state">
  <template v-slot:type>
    <em><Ref to="../enums/flow-connect-state">FlowConnectState</Ref></em>
  </template>
  <template v-slot:default>
    <Ref to="../enums/flow-connect-state">FlowConnectState</Ref>.<Ref to="../enums/flow-connect-state#stopped">Stopped</Ref>
  </template>
</Property>

### version

<Property type="property" name="version" :extras="['readonly']">
  <template v-slot:type>
    <em>string</em>
  </template>
  <template v-slot:desc>
    FlowConnect version
  </template>
</Property>

### wheelScaleDelta

<Property type="property" name="wheelScaleDelta">
  <template v-slot:type>
    <em>number</em>
  </template>
  <template v-slot:desc>
    Amount of zoom in every mouse wheel/scroll event, can be used as sensitivity control.<br/>
    Value must be greater than 1.0
  </template>
  <template v-slot:default>1.05</template>
</Property>

## Accessors

### context

<Property type="accessor" name="context" :extras="['readonly']">
  <template v-slot:type>
    <em>CanvasRenderingContext2D</em>
  </template>
  <template v-slot:desc>
    Rendering context of <Ref to="#canvas">canvas</Ref>
  </template>
</Property>

### audioContext

<Property type="accessor" name="audioContext" :extras="['readonly']">
  <template v-slot:type>
    <em>AudioContext</em>
  </template>
</Property>

### cursor

<Property type="accessor" name="cursor">
  <template v-slot:type>
    <em>string</em>
  </template>
  <template v-slot:desc>
    CSS property of <Ref to="#canvas">canvas</Ref>
  </template>
</Property>

### offContext

<Property type="accessor" name="offContext" :extras="['readonly']">
  <template v-slot:type>
    <em>CanvasRenderingContext2D</em> | <em>OffscreenCanvasRenderingContext2D</em>
  </template>
  <template v-slot:desc>
    Rendering context of <Ref to="#offcanvas">offCanvas</Ref>
  </template>
</Property>

### offGroupContext

<Property type="accessor" name="offGroupContext" :extras="['readonly']">
  <template v-slot:type>
    <em>CanvasRenderingContext2D</em> | <em>OffscreenCanvasRenderingContext2D</em>
  </template>
  <template v-slot:desc>
    Rendering context of <Ref to="#offgroupcanvas">offGroupCanvas</Ref>
  </template>
</Property>

### offUIContext

<Property type="accessor" name="offUIContext" :extras="['readonly']">
  <template v-slot:type>
    <em>CanvasRenderingContext2D</em> | <em>OffscreenCanvasRenderingContext2D</em>
  </template>
  <template v-slot:desc>
    Rendering context of <Ref to="#offuicanvas">offUICanvas</Ref>
  </template>
</Property>

### scale

<Property type="accessor" name="scale" :extras="['readonly']">
  <template v-slot:type>
    <em>number</em>
  </template>
  <template v-slot:desc>
    Current scale value as specified by <Ref to="#transform">transform</Ref>
  </template>
</Property>

### time

<Property type="accessor" name="time" :extras="['readonly']">
  <template v-slot:type>
    <em>number</em>
  </template>
  <template v-slot:desc>
    No. of milliseconds passed since the start of one or more <Ref to="./flow">Flows</Ref>
  </template>
</Property>

### transform

<Property type="accessor" name="transform" :extras="['readonly']">
  <template v-slot:type>
    <em>DOMMatrix</em>
  </template>
  <template v-slot:desc>
    Current transformation matrix of all the canvases
  </template>
</Property>

## Methods

### call

<Method type="method-inherited">
  <template v-slot:signature>
    call(<strong>eventKey: </strong><em>string</em>, <strong>...args: </strong><em>any</em>):
    <em>void</em>
  </template>
  <template v-slot:inherit>
    <Icon type="inherited" />from <Ref to="./hooks">Hooks</Ref>.<Ref to="./hooks#call">call</Ref>
  </template>
</Method>

### createFlow

<Method type="method">
  <template v-slot:signature>
    createFlow(<strong>options?: </strong><em><Ref to="../interfaces/flow-options">FlowOptions</Ref></em>):
    <em><Ref to="./flow">Flow</Ref></em>
  </template>
  <template v-slot:params>
    <Param name="options?">
    <em><Ref to="../interfaces/flow-options">FlowOptions</Ref></em>
  <template v-slot:default-value>

```js
{
  name: 'New Flow',
  rules: {},
  terminalColors: {}
}
```

  </template>
  </Param>
  </template>
  <template v-slot:return>
    <em><Ref to="./flow">Flow</Ref></em>
  </template>
  <template v-slot:example>

```js:no-line-numbers
let flow = flowConnect.createFlow({
  name: "Example Flow",
  rules: {
    r: ["r", "image"],
    g: ["g", "image"],
    b: ["b", "image"]
    image: ['image']
  },
  terminalColors: {
    r: '#ff0000',
    g: '#00ff00',
    b: '#0000ff',
    image: 'purple'
  }
});
```

  </template>
</Method>

### detach

<Method type="method-async">
  <template v-slot:signature>
    detach(): <em>void</em>
  </template>
  <template v-slot:desc>
    Detaches the attached <code>&lt;canvas&gt;</code> element from the FlowConnect instance, once detached, the <Ref to="./flow-connect">FlowConnect</Ref> instance cannot be used anymore, a new instance must be created and attached to the canvas element again.
  </template>
  <template v-slot:return>
    <em>void</em>
  </template>
</Method>

### fromJson

<Method type="method-async">
  <template v-slot:signature>
    fromJson(
      <strong>json: </strong><em>string</em>,
      <Optional class="mr-0p5"/><strong>receive?: </strong><em><Ref to="../interfaces/data-fetch-provider">DataFetchProvider</Ref></em>
    ):
    <em>Promise&lt;<Ref to="./flow">Flow</Ref>&gt;</em>
  </template>
  <template v-slot:desc>
    Creates a flow from json string
  </template>
  <template v-slot:params>
    <Param name="json"><em>string</em></Param>
    Expected schema is <Ref to="../interfaces/serialized-flow">SerializedFlow</Ref>
    <Param name="receive?"><em><Ref to="/reference/api/interfaces/data-fetch-provider">DataFetchProvider</Ref></em></Param>
    A developer implemented function abstracting the retrieval of externally stored files that are being referenced in a flow.
  </template>
  <template v-slot:return>
    <em><Ref to="./flow">Flow</Ref></em>
  </template>
</Method>

### getCache

<Method type="method">
  <template v-slot:signature>
    getCache(
      <strong>type: </strong><em>keyof <Ref to="../interfaces/flow-connect-cache-keys">FlowConnectCacheKeys</Ref></em>,
      <strong>key: </strong><em>valueof <Ref to="../interfaces/flow-connect-cache-keys">FlowConnectCacheKeys</Ref></em>
    ):
    <em>valueof <Ref to="../interfaces/flow-connect-cache-values">FlowConnectCacheValues</Ref></em>
  </template>
  <template v-slot:desc>
    Retrieves a cached entity.
  </template>
  <template v-slot:params>
    <Param name="type"><em>keyof <Ref to="../interfaces/flow-connect-cache-keys">FlowConnectCacheKeys</Ref></em></Param>
    As of current version caching of only array-buffers and audio-buffers are supported.
    <Param name="key"><em>valueof <Ref to="../interfaces/flow-connect-cache-keys">FlowConnectCacheKeys</Ref></em></Param>
    Key that was used while caching.
  </template>
  <template v-slot:return>
    <em>valueof <Ref to="../interfaces/flow-connect-cache-values">FlowConnectCacheValues</Ref></em>
  </template>
</Method>

### getDefaultStyle

<Method type="method">
  <template v-slot:signature>
    getDefaultStyle&lt;T&gt;(
      <strong>type: </strong><em>string(node | ui | connector | group | terminal)</em>,
      <Optional class="mr-0p5"/><strong>name: </strong><em>string</em>
    ):
    <em>T</em>
  </template>
  <template v-slot:desc>
    Retrieves the default style for a given entity
  </template>
  <template v-slot:params>
    <Param name="type"><em>string (node | ui | connector | group | terminal)</em></Param>
    Type of entity for which the default style needs to be retrieved
    <Param name="name?"><em>string</em></Param>
    Name of the entity, only used if type is either 'node' or 'ui'
  </template>
  <template v-slot:return>
    <em>T</em>
  </template>
</Method>

### getRegistered

<Method type="method-static">
  <template v-slot:signature>
    getRegistered&lt;<em>keyof <Ref to="../interfaces/plugin-type">PluginType</Ref></em>&gt;(
      <strong>type: </strong><em>keyof <Ref to="../interfaces/plugin-type">PluginType</Ref></em>,
      <strong>name: </strong><em>string</em>
    ):
    <em>valueof <Ref to="../interfaces/plugin-type">PluginType</Ref></em>
  </template>
  <template v-slot:desc>
    Retrieves the constructor for registered plugin type
  </template>
  <template v-slot:params>
    <Param name="type"><em>keyof <Ref to="../interfaces/plugin-type">PluginType</Ref></em></Param>
    Type of the plugin
    <Param name="name"><em>string</em></Param>
    Name of the plugin
  </template>
  <template v-slot:return>
    <em>valueof <Ref to="../interfaces/plugin-type">PluginType</Ref></em>
  </template>
</Method>

### getRegisteredRenderer

<Method type="method-static">
  <template v-slot:signature>
    getRegisteredRenderer&lt;<em>keyof <Ref to="../interfaces/flow-connect-renderers">FlowConnectRenderers</Ref></em>&gt;(
      <strong>type: </strong><em>keyof <Ref to="../interfaces/flow-connect-renderers">FlowConnectRenderers</Ref></em>
    ):
    <em>valueof <Ref to="../interfaces/flow-connect-renderers">FlowConnectRenderers</Ref></em>
  </template>
  <template v-slot:desc>
    Retrieves the registered custom renderer
  </template>
  <template v-slot:params>
    <Param name="type"><em>keyof <Ref to="../interfaces/flow-connect-renderers">FlowConnectRenderers</Ref></em></Param>
    Type of custom renderer
  </template>
  <template v-slot:return>
    <em>valueof <Ref to="../interfaces/flow-connect-renderers">FlowConnectRenderers</Ref></em>
  </template>
</Method>

### off

<Method type="method-inherited">
  <template v-slot:inherit>
    <Icon type="inherited" />from <Ref to="./hooks">Hooks</Ref>.<Ref to="./hooks#off">off</Ref>
  </template>
</Method>

### offAll

<Method type="method-inherited">
  <template v-slot:inherit>
    <Icon type="inherited" />from <Ref to="./hooks">Hooks</Ref>.<Ref to="./hooks#offall">offAll</Ref>
  </template>
</Method>

### on

<Method type="method-inherited">
  <template v-slot:inherit>
    <Icon type="inherited" />from <Ref to="./hooks">Hooks</Ref>.<Ref to="./hooks#on">on</Ref>
  </template>
</Method>

### render

<Method type="method">
  <template v-slot:signature>
    render(<strong>flow: </strong><em><Ref to="./flow">Flow</Ref></em>):
    <em>void</em>
  </template>
  <template v-slot:desc>
    Starts rendering the flow on <Ref to="#canvas">canvas</Ref> irrespective of whether the given flow is a root flow or a <Ref to="./subflow-node">subflow</Ref>
  </template>
  <template v-slot:params>
    <Param name="flow"><em><Ref to="./flow">Flow</Ref></em></Param>
  </template>
  <template v-slot:return>
    <em>void</em>
  </template>
</Method>

### register

<Method type="method-static">
  <template v-slot:signature>
    register&lt;keyof <em><Ref to="../interfaces/plugin-type">PluginType</Ref></em>&gt;(
      <strong>metadata: </strong><em><Ref to="../interfaces/plugin-metadata">PluginMetadata</Ref></em>,
      <strong>executor: </strong><em>valueof <Ref to="../interfaces/plugin-type">PluginType</Ref></em>
    ):
    <em>boolean</em>
  </template>
  <template v-slot:desc>
    Registers a plugin globally of given type and name specified in the metadata along with its constructor.
  </template>
  <template v-slot:params>
    <Param name="metadata"><em><Ref to="../interfaces/plugin-metadata">PluginMetadata</Ref></em></Param>
    The plugin metadata specifying the type of the plugin and its name to be registered
    <Param name="executor"><em>valueof <Ref to="../interfaces/plugin-type">PluginType</Ref></em></Param>
    The plugin constructor
  </template>
  <template v-slot:return>
    <em>boolean</em>
  </template>
</Method>

### registerRenderer

<Method type="method-static">
  <template v-slot:signature>
    registerRenderer&lt;keyof <em><Ref to="../interfaces/flow-connect-renderers">FlowConnectRenderers</Ref></em>&gt;(
      <strong>type: </strong>keyof <em><Ref to="../interfaces/flow-connect-renderers">FlowConnectRenderers</Ref></em>,
      <strong>renderer: </strong>valueof <em><Ref to="../interfaces/flow-connect-renderers">FlowConnectRenderers</Ref></em>
    ):
    <em>boolean</em>
  </template>
  <template v-slot:desc>
    Registers a plugin globally of given type and name specified in the metadata along with its constructor.
  </template>
  <template v-slot:params>
    <Param name="type">keyof <em><Ref to="../interfaces/flow-connect-renderers">FlowConnectRenderers</Ref></em></Param>
    The type of the custom renderer to register
    <Param name="renderer">valueof <em><Ref to="../interfaces/flow-connect-renderers">FlowConnectRenderers</Ref></em></Param>
    The custom renderer to register
  </template>
  <template v-slot:return>
    <em>boolean</em>
  </template>
</Method>

### scaleBy

::: warning BETA
Definition of how this method should work is not clear at the moment, implementation may change in future
:::

<Method type="method">
  <template v-slot:signature>
    scaleBy(<strong>scale: </strong><em>number</em>, <strong>scaleOrigin: </strong><em><Ref to="./vector">Vector</Ref></em>):
    <em>void</em>
  </template>
  <template v-slot:desc>
    Scales the <Ref to="#canvas">canvas</Ref> programmatically
  </template>
  <template v-slot:params>
    <Param name="scale"><em>number</em></Param>
    <Param name="scaleOrigin"><em><Ref to="./vector">Vector</Ref></em></Param>
  </template>
  <template v-slot:return>
    <em>void</em>
  </template>
</Method>

### screenToReal

<Method type="method">
  <template v-slot:signature>
    screenToReal(<strong>pos: </strong><em><Ref to="./vector">Vector</Ref></em>):
    <em><Ref to="./vector">Vector</Ref></em>
  </template>
  <template v-slot:desc>
    Transforms the given screen space position to real space within canvas
  </template>
  <template v-slot:params>
    <Param name="pos"><em><Ref to="./vector">Vector</Ref></em></Param>
  </template>
  <template v-slot:return>
    <em><Ref to="./vector">Vector</Ref></em>
  </template>
</Method>

### setCache

<Method type="method">
  <template v-slot:signature>
    setCache&lt;keyof <em><Ref to="../interfaces/flow-connect-cache-keys">FlowConnectCacheKeys</Ref></em>&gt;(
      <strong>type: </strong>keyof <em><Ref to="../interfaces/flow-connect-cache-keys">FlowConnectCacheKeys</Ref></em>,
      <strong>key: </strong>valueof <em><Ref to="../interfaces/flow-connect-cache-keys">FlowConnectCacheKeys</Ref></em>,
      <strong>cache: </strong>valueof <em><Ref to="../interfaces/flow-connect-cache-values">FlowConnectCacheValues</Ref></em>
    ):
    <em>void</em>
  </template>
  <template v-slot:desc>
    Sets a value in cache corresponding to given type and key.
  </template>
  <template v-slot:params>
    <Param name="type">keyof <em><Ref to="../interfaces/flow-connect-cache-keys">FlowConnectCacheKeys</Ref></em></Param>
    The type of the value to be cached
    <Param name="key">valueof <em><Ref to="../interfaces/flow-connect-cache-keys">FlowConnectCacheKeys</Ref></em></Param>
    The key against which the given value needs to be cached.
    <Param name="cache">valueof <em><Ref to="../interfaces/flow-connect-cache-values">FlowConnectCacheValues</Ref></em></Param>
    The value to cache
  </template>
  <template v-slot:return>
    <em>void</em>
  </template>
</Method>

### setDefaultStyle

<Method type="method">
  <template v-slot:signature>
    setDefaultStyle&lt;T&gt;(
      <strong>type: </strong><em>string(node | ui | connector | group | terminal)</em>,
      <strong>style: </strong><em>T</em>
    ):
    <em>void</em>
    <br/>
    <br/>
    setDefaultStyle&lt;T&gt;(
      <strong>type: </strong><em>string(node | ui | connector | group | terminal)</em>,
      <strong>style: </strong><em>T</em>,
      <strong>name: </strong><em>string</em>
    ):
    <em>void</em>
  </template>
  <template v-slot:desc>
    Sets the default style for the given type either globally or in case of 'node' and 'ui' specific to the provided type name.
  </template>
  <template v-slot:params>
    <Param name="type"><em>string(node | ui | connector | group | terminal)</em></Param>
    The type of the entity for which the default style needs to be set
    <Param name="style"><em>T</em></Param>
    The style to set as default
    <Param name="name"><em>string</em></Param>
    The type name in case the type is 'node' or 'ui'
  </template>
  <template v-slot:return>
    <em>void</em>
  </template>
</Method>

### setupAudioContext

<Method type="method-async">
  <template v-slot:signature>
    setupAudioContext():
    <em>Promise&lt;void&gt;</em>
  </template>
  <template v-slot:desc>
    Creates an AudioContext if not already created, generates and loads utility AudioWorklets mainly used by <Ref to="../../standard-nodes/audio">StandardNodes.Audio</Ref> module

::: warning Note
If FlowConnect is created using its static <Ref to="#create">create</Ref> method, this method gets called automatically
:::

If a FlowConnect instance is created using the <Ref to="#constructor">constructor</Ref>, this method will not be called and AudioContext with all its utility AudioWorklets may not be present, which is good for a scenario where you don't need WebAudio support right away at the time of FlowConnect instantiation but require it at a later stage or on user-demand, in which case this method can come in handy.
</template>
<template v-slot:return><em>Promise&lt;void&gt;</em></template>
</Method>

### toJson

<Method type="method">
  <template v-slot:signature>
    toJson(
      <strong>flow: </strong><em><Ref to="./flow">Flow</Ref></em>,
      <Optional class="mr-0p5"/><strong>persist?: </strong><em><Ref to="../interfaces/data-persistence-provider">DataPersistenceProvider</Ref></em>
    ):
    <em>string</em>
  </template>
  <template v-slot:desc>
    Serializes a flow to a json string
  </template>
  <template v-slot:params>
    <Param name="flow"><em><Ref to="./flow">Flow</Ref></em></Param>
    <Param name="persist?"><em><Ref to="/reference/api/interfaces/data-persistence-provider">DataPersistenceProvider</Ref></em></Param>
    A developer implemented function abstracting where and how the externally referenced files are stored.
  </template>
  <template v-slot:return>
    <em>string</em> (<Ref to="../interfaces/serialized-flow">SerializedFlow</Ref> schema)
  </template>
</Method>

### top

<Method type="method">
  <template v-slot:signature>
    top(): <em>void</em>
  </template>
  <template v-slot:desc>
  Renders the root flow of the flow-tree.

A flow-tree gets created if you have nested flows which can be achieved using <Ref to="./subflow-node">SubFlowNodes</Ref>

A root Flow is one which sits at the top of this tree, or in other words, its a Flow from which all the other flows and subflows were created.
</template>
<template v-slot:return>
<em>void</em>
</template>
<template v-slot:example>

```js:no-line-numbers
let a = flowConnect.createFlow({ name: 'Flow A' });
let b = flowConnect.createFlow({ name: 'Flow B' });
let c = flowConnect.createFlow({ name: 'Flow C' });
a.addSubFlow(b);
a.addSubFlow(c);
let d = flowConnect.createFlow({ name: 'Flow D' });
b.addSubFlow(d);
let e = flowConnect.createFlow({ name: 'Flow E' });
let f = flowConnect.createFlow({ name: 'Flow F' });
c.addSubFlow(e);
c.addSubFlow(f);
```

  <img alt="Flow-tree" src="/images/flow-tree.png" />

If for e.g. Flow D is currently being rendered on <Ref to="#canvas">canvas</Ref> then calling this method would start rendering Flow A instead (which is the root flow)
</template>
</Method>

### translateBy

<Method type="method">
  <template v-slot:signature>
    translateBy(<strong>delta: </strong><em><Ref to="./vector">Vector</Ref></em>):
    <em>void</em>
  </template>
  <template v-slot:desc>
    Translates (pans) the <Ref to="#canvas">canvas</Ref> programmatically
  </template>
  <template v-slot:params>
    <Param name="delta"><em><Ref to="./vector">Vector</Ref></em></Param>
  </template>
  <template v-slot:return>
    <em>void</em>
  </template>
</Method>

### create

<Method type="method-static-async">
  <template v-slot:signature>
    create(<strong>mount?: </strong><em>HTMLCanvasElement</em> | <em>HTMLDivElement</em>):
    <em>Promise&lt;<Ref to="#class-flowconnect">FlowConnect</Ref>&gt;</em>
  </template>
  <template v-slot:desc>
  Creates a FlowConnect instance with WebAudio support (AudioContext and utility AudioWorklets) already setup

See also <Ref to="#setupaudiocontext">setupAudioContext</Ref> to get more info on how this is different than just creating a FlowConnect using its <Ref to="#constructor">constructor</Ref>.
</template>
<template v-slot:params>

<Param name="mount?"><em>HTMLCanvasElement</em> | <em>HTMLDivElement</em></Param>
</template>
<template v-slot:return>
<em>Promise&lt;<Ref to="#class-flowconnect">FlowConnect</Ref>&gt;</em>
</template>
</Method>

## Events

### dimension-change <Icon type="event" /> {#event-dimension-change}

<Event type="event">
  <template v-slot:desc>
    When dimensions (width/height) of <Ref to="#canvas">canvas</Ref> changes.
  </template>
</Event>

### scale <Icon type="event" /> {#event-scale}

<Event type="event">
  <template v-slot:desc>
    When zoom in/out happens.
  </template>
</Event>

### transform <Icon type="event" /> {#event-transform}

<Event type="event">
  <template v-slot:desc>
    When either dimension changes or pan/zoom happens.
  </template>
</Event>

### start <Icon type="event" /> {#event-start}

<Event type="event">
  <template v-slot:desc>
    When any one of the <Ref to="./flow">Flows</Ref> created by this FlowConnect instance starts execution.
  </template>
</Event>

### stop <Icon type="event" /> {#event-stop}

<Event type="event">
  <template v-slot:desc>
    When all the <Ref to="./flow">Flows</Ref> created by this FlowConnect instance stops execution. 
  </template>
</Event>

### tick <Icon type="event" /> {#event-tick}

<Event type="event">
  <template v-slot:desc>
    When a virtual unit time passes.
  </template>
</Event>

### tickreset <Icon type="event" /> {#event-tickreset}

<Event type="event">
  <template v-slot:desc>
    When <Ref to="#event-stop">stop</Ref> happens.
  </template>
</Event>

### render <Icon type="event" /> {#event-render}

<Event type="event">
  <template v-slot:desc>
    When a single render cycle of currently rendered flow, completes.
  </template>
</Event>

<script setup>
import data from '../../../../../reflections/api/classes/flow-connect.json';
</script>
