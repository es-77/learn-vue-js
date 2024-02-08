<template>
  <UserCreateVue v-bind:user="user" />
</template>

<script>
import UserCreateVue from './UserCreate.vue';
import UserGetApiCallMixins from './userMixins/UserGetApiCallMixins.js';
export default {
  name: 'UserUpdate',
  data() {
    return {
      user: {}
    };
  },
  components: {
    UserCreateVue
  },
  mixins: [UserGetApiCallMixins]
};
</script>
