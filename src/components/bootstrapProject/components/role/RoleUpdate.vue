<template>
  <RoleAddVue v-bind:role="role" />
  {{ console.log('role', role) }}
</template>

<script>
import RoleAddVue from './RoleAdd.vue';
import RoleGetMixinsApiCall from './roleMixins/RoleGetMixinsApiCall.js';
export default {
  name: 'RoleUpdate',
  components: {
    RoleAddVue
  },
  data() {
    return {
      role: {}
    };
  },
  mixins: [RoleGetMixinsApiCall]
};
</script>
