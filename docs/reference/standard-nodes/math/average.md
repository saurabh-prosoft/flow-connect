## StandardNode: Average

<img class="zoomable" alt="Average standard node" src="/images/standard-nodes/math/average.png" />

<Hierarchy :extend="{name: 'Node', link: '../../api/classes/node.html'}" />
<br/>

```js
let average = new StandardNodes.Math.Average(flow);
```

<br/>

### Default State

```js
{}
```

## Constructor

<Method type="method">
  <template v-slot:signature>
    new Average(<strong>flow: </strong><em><Ref to="../../api/classes/flow">Flow</Ref></em>,
    <strong>options?: </strong><em><Ref to="../../api/interfaces/node-creator-options">NodeCreatorOptions</Ref></em>):
    <em><Ref to="#standardnode-average">Average</Ref></em>
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
