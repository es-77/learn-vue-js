<template>
  <p>DynamicMain</p>
  <component v-bind:is="componentName"></component>
  <button v-on:click="handleChangeComponent('DynamicOne')">DynamicOne</button>
  <button v-on:click="handleChangeComponent('DynamicTwo')">DynamicTwo</button>
</template>

<script>
import DynamicOne from './DynamicOne.vue';
import DynamicTwo from './DynamicTwo.vue';
export default {
  name: 'DynamicMain',
  components: {
    DynamicOne,
    DynamicTwo
  },
  data() {
    return {
      componentName: 'DynamicTwo'
    };
  },
  methods: {
    handleChangeComponent(componentName) {
      this.componentName = componentName;
    }
  }
};
</script>
