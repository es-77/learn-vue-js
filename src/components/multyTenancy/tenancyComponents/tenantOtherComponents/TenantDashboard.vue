<template>
  <p>TenantDashboard</p>
  {{ user }}
</template>

<script>
import { storeToRefs } from 'pinia';
import { useLoginUserDataStore } from '../../store/LoginUserData.js';
export default {
  name: 'TenantDashboard',
  setup() {
    const Userstore = useLoginUserDataStore();
    const { user } = storeToRefs(Userstore);
    const { handleUpdateUserData } = Userstore;
    return {
      user,
      handleUpdateUserData
    };
  }
};
</script>
