<template>
  <PermissionAssignVue v-bind:rolePermission="rolePermission" />
</template>

<script>
import PermissionAssignVue from './PermissionAssign.vue';
import GetRoleAndPermissionsApiMixins from './permissionAssingMixins/GetRoleAndPermissionsApiMixins.js';
export default {
  name: 'PermissionUpdate',
  data() {
    return {
      rolePermission: [],
      selectedPermission: []
    };
  },
  components: {
    PermissionAssignVue
  },
  mixins: [GetRoleAndPermissionsApiMixins]
};
</script>
