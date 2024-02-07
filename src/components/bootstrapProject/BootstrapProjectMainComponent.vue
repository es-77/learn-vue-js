<template>
  <AuthMainBodyVue v-if="isAuthPage" />
  <PageNotFoundVue v-else-if="isRouteNotFound" />
  <BoostrapMainVue v-else />
</template>
<script>
import AuthMainBodyVue from './layouts/authLayout/AuthMainBody.vue';
import BoostrapMainVue from './layouts/BoostrapMain.vue';
import PageNotFoundVue from './layouts/commonPage/PageNotFound.vue';
import '@mdi/font/css/materialdesignicons.min.css';
export default {
  name: 'BootstrapProjectMainComponent',
  components: {
    BoostrapMainVue,
    AuthMainBodyVue,
    PageNotFoundVue
  },
  computed: {
    isAuthPage() {
      return ['login', 'register', 'forget_password'].includes(this.$route.name);
    },
    isRouteNotFound() {
      return this.$route.name == 'RouterPageNotFound';
    }
  }
};
</script>
