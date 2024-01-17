<template>
  <p>props data passing</p>
  <ChildComponent v-bind:users="users" />
</template>
<script>
import ChildComponent from './ChildComponent.vue';
export default {
  name: 'PropsDataPassing',
  data() {
    return {
      users: [
        { id: 1, name: '1' },
        { id: 2, name: '2' },
        { id: 3, name: '3' },
        { id: 4, name: '4' },
        { id: 5, name: '5' },
        { id: 6, name: '6' }
      ]
    };
  },
  components: {
    ChildComponent
  }
};
</script>