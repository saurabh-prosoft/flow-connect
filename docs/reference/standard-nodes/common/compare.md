## StandardNode: Compare

<img class="zoomable" alt="Compare standard node" src="/images/standard-nodes/common/compare.png" />

<Hierarchy :extend="{name: 'Node', link: '../../api/classes/node.html'}" />
<br/>

```js
let compare = new StandardNodes.Common.Compare(
  flow,
  { state: { value: '<' } }
);
```

<br/>

### Default State

```js
{ value: '==' }
```

## Constructor

<Method type="method">
  <template v-slot:signature>
    new Compare(<strong>flow: </strong><em><Ref to="../../api/classes/flow">Flow</Ref></em>,
    <strong>options?: </strong><em><Ref to="../api/interfaces/node-creator-options">NodeCreatorOptions</Ref></em>):
    <em><Ref to="#standardnode-compare">Compare</Ref></em>
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

<script setup>
import Method from "../../../../../components/api/Method.vue";
import Param from "../../../../../components/api/Param.vue";
import Ref from "../../../../../components/api/Ref.vue";
import Hierarchy from "../../../../../components/api/Hierarchy.vue";
</script>