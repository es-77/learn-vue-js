<template>
  <Login />
  <RegisterVue />
  <ForGetPasswordVue />
</template>

<script>
import ForGetPasswordVue from '../../components/auths/forgetPassword/ForGetPassword.vue';
import Login from '../../components/auths/login/Login.vue';
import RegisterVue from '../../components/auths/register/Register.vue';

export default {
  name: 'AuthMainBody',
  components: {
    Login,
    RegisterVue,
    ForGetPasswordVue
  }
};
</script>