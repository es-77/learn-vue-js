<template>
  <router-link :hasPermission="'user_add'" to="/">Home</router-link><br />
  <router-link to="/user">User</router-link><br />
  <router-link to="/role">Role</router-link><br />
  <router-link v-hasPermission="'user.list'" to="/permission">Permission</router-link><br />
  <!-- <router-link to="/create_permission">Create Permission</router-link><br /> -->
  <router-link to="/login">Login</router-link><br />
  <router-link to="/registor">Registor</router-link><br />
  {{ userPermissions.length > 0 ? userPermissions[0].permissions : [] }}
</template>

<script>
import { storeToRefs } from 'pinia';
import { usePermissionStore } from '../projectStore/PermissionStore';
export default {
  name: 'SideBar',
  data() {
    return {
      permissions: []
    };
  },
  setup() {
    const store = usePermissionStore();
    const { userPermissions } = storeToRefs(store);
    return {
      store,
      userPermissions
    };
  }
};
</script>
