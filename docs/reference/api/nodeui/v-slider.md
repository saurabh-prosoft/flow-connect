# Class: VSlider

<img class="zoomable" alt="Node-ui Vertical Slider example" src="/images/node-ui-v-slider-example.png" />

A Vertical slider.

## Hierarchy

<Hierarchy
  :extend="{name: 'UINode', link: '../classes/ui-node'}"
  :implement="[
    {name: 'Serializable', link: '../interfaces/serializable.html'}
  ]"
/>

## Overview

All Properties, Accessors, Methods and Events <Icon type="inherited" class="ml-0p5" /> from <Ref to="../classes/ui-node">UINode</Ref>.

<Overview :data="data" />

## Constructor

::: warning Usage not recommended
For common usages, this constructor is not recommended, use <Ref to="../classes/node#createvslider">Node.createVSlider</Ref> instead.
:::

<Method type="constructor">
  <template v-slot:signature>
    new VSlider(<strong>node: </strong><em><Ref to="../classes/node">Node</Ref></em>,
    <strong>min: </strong><em>number</em>,
    <strong>max: </strong><em>number</em>,
    <strong>options: </strong><em><Ref to="../interfaces/v-slider-options">VSliderOptions</Ref></em>):
    <em><Ref to="#class-vslider">VSlider</Ref></em>
  </template>
  <template v-slot:params>
    <Param name="node"><em><Ref to="../classes/node">Node</Ref></em></Param>
    <Param name="min"><em>number</em></Param>
    <Param name="max"><em>number</em></Param>
    <Param name="options">
      <em><Ref to="../interfaces/v-slider-options">VSliderOptions</Ref></em>
  <template v-slot:default-value>

  ```js
    {
      height: node.style.rowHeight * 5,
      width: node.style.rowHeight
    }
  ```

  </template>
    </Param>
  </template>
</Method>

## Properties

### min

<Property type="property" name="min">
  <template v-slot:type>
    <em>number</em>
  </template>
</Property>

### max

<Property type="property" name="max">
  <template v-slot:type>
    <em>number</em>
  </template>
</Property>

## Accessors

### value

<Property type="accessor" name="value">
  <template v-slot:type>
    <em>number</em>
  </template>
</Property>

## Events

### change <Icon type="event" /> {#event-change}

<Event type="event">
  <template v-slot:desc>
    When the <Ref to="#value">value</Ref> of this VSlider changes.
  </template>
</Event>

### over <Icon type="event" /> {#event-over}

<Event type="event">
  <template v-slot:desc>
    When mouse over happens on this ui-node.
  </template>
</Event>

### down <Icon type="event" /> {#event-down}

<Event type="event">
  <template v-slot:desc>
    When touch down or mouse-left down occurs on this ui-node.
  </template>
</Event>


### up <Icon type="event" /> {#event-up}

<Event type="event">
  <template v-slot:desc>
    When touch up or mouse-left up happens on this ui-node.
  </template>
</Event>

### click <Icon type="event" /> {#event-click}

<Event type="event">
  <template v-slot:desc>
    When tap or mouse click happens on this ui-node.
  </template>
</Event>

### drag <Icon type="event" /> {#event-drag}

<Event type="event">
  <template v-slot:desc>
    When touch or mouse drag happens on this ui-node.
  </template>
</Event>

### enter <Icon type="event" /> {#event-enter}

<Event type="event">
  <template v-slot:desc>
    When mouse enter happens on this ui-node.
  </template>
</Event>

### exit <Icon type="event" /> {#event-exit}

<Event type="event">
  <template v-slot:desc>
    When mouse exit happens on this ui-node
  </template>
</Event>

### wheel <Icon type="event" /> {#event-wheel}

<Event type="event">
  <template v-slot:desc>
    When mouse scroll happens on this ui-node.
  </template>
</Event>

<script setup>
import data from '../../../../../reflections/api/classes/v-slider.json';
</script>
