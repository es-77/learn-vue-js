<template>
  <p>VeeValidate</p>
  <!-- <VeeValidateBasicComponent /> -->
  <!-- <YupAndVeeValidate /> -->
  <LoginFormYupAndVeeValidate />
</template>

<script>
import LoginFormYupAndVeeValidate from './yup_vee_validate/LoginFormYupAndVeeValidate.vue';
// import VeeValidateBasicComponent from './VeeValidateBasicComponent.vue';
// import YupAndVeeValidate from './YupAndVeeValidate.vue';
export default {
  name: 'VeeValidate',
  components: {
    // VeeValidateBasicComponent,
    // YupAndVeeValidate
    LoginFormYupAndVeeValidate
  }
};
</script>
