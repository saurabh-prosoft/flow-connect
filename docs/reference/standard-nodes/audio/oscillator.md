## StandardNode: Oscillator

<img class="zoomable" alt="Oscillator standard node" src="/images/standard-nodes/audio/oscillator.png" />

<Hierarchy :extend="{name: 'Node', link: '../../api/classes/node.html'}" />
<br/>

```js
let oscillator = new StandardNodes.Audio.Oscillator(flow);
```

<br/>

### Default State

```js
{
  frequency: 440,
  detune: 0,
  type: 'sine'
}
```

## Constructor

<Method type="method">
  <template v-slot:signature>
    new Oscillator(<strong>flow: </strong><em><Ref to="../../api/classes/flow">Flow</Ref></em>,
    <strong>options?: </strong><em><Ref to="../../api/interfaces/node-creator-options">NodeCreatorOptions</Ref></em>):
    <em><Ref to="#standardnode-oscillator">Oscillator</Ref></em>
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
