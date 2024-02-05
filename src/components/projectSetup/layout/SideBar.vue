<template>
  <router-link v-hasPermission="'dashbord_view'" to="/">Home</router-link><br />
  <router-link v-hasPermission="'user_add'" to="/user">User Add</router-link><br />
  <router-link v-hasPermission="'user_update'" to="/user">User Update</router-link><br />
  <router-link v-hasPermission="'user_delete'" to="/user">User Delete</router-link><br />
  <router-link v-hasPermission="'user_view'" to="/user">User View</router-link><br />
  <router-link v-hasPermission="'role_add'" to="/role">Role ADD</router-link><br />
  <router-link v-hasPermission="'role_update'" to="/role">Role UPDATE</router-link><br />
  <router-link v-hasPermission="'role_delete'" to="/role">Role DELETE</router-link><br />
  <router-link v-hasPermission="'role_view'" to="/role">Role VIEW</router-link><br />
  <router-link v-hasPermission="'permissions_assing'" to="/permissions_assing">Permissions Assing</router-link><br />
  <router-link v-hasPermission="'assign_role'" to="/assign_role">User Assign Role</router-link><br />
  <router-link v-hasPermission="'permission_add'" to="/permission">permission add</router-link><br />
  <router-link v-hasPermission="'permission_update'" to="/permission">permission update</router-link><br />
  <router-link v-hasPermission="'permission_view'" to="/permission">permission view</router-link><br />
  <router-link v-hasPermission="'permission_delette'" to="/permission">permission delette</router-link><br />
  <!-- <router-link to="/login">Login</router-link><br />
  <router-link to="/registor">Registor</router-link><br /> -->
  <!-- {{ userPermissions.length > 0 ? userPermissions[0].permissions : [] }} -->
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
