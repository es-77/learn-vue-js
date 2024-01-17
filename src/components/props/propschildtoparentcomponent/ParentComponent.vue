<template>
  <p>parent components</p>
  <p>{{ title }}</p>
  <ChildComponent v-on:handleInput="handleUpdateTitle($event)" />
</template>
<script>
import ChildComponent from './ChildComponent.vue';
export default {
  name: 'ParentComponent',
  data() {
    return {
      title: 'current text in parent'
    };
  },
  methods: {
    handleUpdateTitle(text) {
      //   console.log('event', text);
      this.title = text;
    }
  },
  components: { ChildComponent }
};
</script>