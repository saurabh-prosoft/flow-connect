## StandardNode: Timer

<img class="zoomable" alt="Timer standard node" src="/images/standard-nodes/common/timer.png" />

<Hierarchy :extend="{name: 'Node', link: '../../api/classes/node.html'}" />
<br/>

```js
let timer = new StandardNodes.Common.Timer(
  flow,
  { state: { delay: 500 } }
);
```

<br/>

### Default State

```js
{ delay: 1000, emitValue: null }
```

## Constructor

<Method type="method">
  <template v-slot:signature>
    new Timer(<strong>flow: </strong><em><Ref to="../../api/classes/flow">Flow</Ref></em>,
    <strong>options?: </strong><em><Ref to="../../api/interfaces/node-creator-options">NodeCreatorOptions</Ref></em>):
    <em><Ref to="#standardnode-timer">Timer</Ref></em>
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
