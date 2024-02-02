<template>
  <p>dashboard</p>
  <div class="main">
    <h3>user info</h3>
    <p>name : {{ userData.user.name }}</p>
    <p>email : {{ userData.user.email }}</p>
    <p>phone : {{ userData.user.phone }}</p>
  </div>
  <div class="main_2">
    <h3>user Permissions</h3>
    <p v-for="permission in userData.rolePermission.permissions" :key="permission.id">
      {{ permission }}
    </p>
  </div>
</template>

<script>
import { getUser } from '../../common/LocalStoreage';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Dashboard',
  data() {
    const userInfo = this.getUser();
    return { userData: userInfo };
  },

  setup() {
    return {
      getUser
    };
  }
};
</script>