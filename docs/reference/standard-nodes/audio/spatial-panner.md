## StandardNode: SpatialPanner

<img class="zoomable" alt="SpatialPanner standard node" src="/images/standard-nodes/audio/spatial-panner.png" />

<Hierarchy :extend="{name: 'Node', link: '../../api/classes/node.html'}" />
<br/>

```js
let spatialPanner = new StandardNodes.Audio.SpatialPanner(flow);
```

<br/>

### Default State

```js
{
  value: new Vector(.5, .5),
  z: -1,
  bypass: false
}
```

## Constructor

<Method type="method">
  <template v-slot:signature>
    new SpatialPanner(<strong>flow: </strong><em><Ref to="../../api/classes/flow">Flow</Ref></em>,
    <strong>options?: </strong><em><Ref to="../../api/interfaces/node-creator-options">NodeCreatorOptions</Ref></em>):
    <em><Ref to="#standardnode-spatialpanner">SpatialPanner</Ref></em>
  </template>
  <template v-slot:params>
    <Param name="flow">
      <em><Ref to="../../api/classes/flow">Flow</Ref></em>
    </Param>
    <Param name="options?">
      <em><Ref to="../../api/interfaces/node-creator-options">NodeCreatorOptions</Ref></em>
      <template v-slot:default-value>
        <em>{}</em>
      </template>
    </Param>
  </template>
</Method>
