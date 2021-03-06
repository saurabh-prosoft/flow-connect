## StandardNode: API

<img class="zoomable" alt="API standard node" src="/images/standard-nodes/net/api.png" />

<Hierarchy :extend="{name: 'Node', link: '../../api/classes/node.html'}" />
<br/>

```js
let api = new StandardNodes.Net.API(
  flow,
  {
    state: {
      src: 'https://public.example.com/data'
    }
  }
);
```

<br/>

### Default State

```js
{ src: '' }
```

## Constructor

<Method type="method">
  <template v-slot:signature>
    new API(<strong>flow: </strong><em><Ref to="../../api/classes/flow">Flow</Ref></em>,
    <strong>options?: </strong><em><Ref to="../../api/interfaces/node-creator-options">NodeCreatorOptions</Ref></em>):
    <em><Ref to="#standardnode-api">API</Ref></em>
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
