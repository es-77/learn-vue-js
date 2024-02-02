<template>
  <button @click="logOut">logOut</button>
</template>

<script>
import { clearUser } from '../common/LocalStoreage';
export default {
  name: 'TopBar',
  methods: {
    logOut() {
      clearUser();
      this.$router.push('/login');
    }
  }
};
</script>
