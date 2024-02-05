<template>
  <AuthMainBodyVue v-if="isAuthPage" />
  <BoostrapMainVue v-else />
</template>

<script>
import AuthMainBodyVue from './layouts/authLayout/AuthMainBody.vue';
import BoostrapMainVue from './layouts/BoostrapMain.vue';

export default {
  name: 'BootstrapProjectMainComponent',
  components: {
    BoostrapMainVue,
    AuthMainBodyVue
  },
  computed: {
    isAuthPage() {
      return ['login', 'registor', 'forgot_password'].includes(this.$route.name);
    }
  }
};
</script>
