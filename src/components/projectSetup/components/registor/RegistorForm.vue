<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <label for="name">Enter Your User</label><br />
    <Field name="name" type="text" /> <br />
    <ErrorMessage name="name" /><br />
    <label for="email">Enter Your Email</label><br />
    <Field name="email" type="email" /> <br />
    <ErrorMessage name="email" /><br />
    <label for="password">Enter Your Password</label><br />
    <Field name="password" type="password" /> <br />
    <label for="phone">Enter Your Phone</label><br />
    <Field name="phone" type="text" /> <br />
    <ErrorMessage name="phone" /><br />
    <button type="submit">submit</button>
  </Form>
  <ToastMessageVue :message="toastMessage" :variant="toastVariant" ref="toast" />
</template>

<script>
import { RegistorValidation } from './RegistorValidation';
import { Form, Field, ErrorMessage } from 'vee-validate';
import axios from 'axios';
import BackEndApiRoutes from '../../BackEndApiRoutes';
import ToastMessageVue from '../../common/ToastMessage.vue';

export default {
  name: 'RegistorForm',
  components: {
    Form,
    Field,
    ErrorMessage,
    ToastMessageVue
  },
  data() {
    return {
      schema: RegistorValidation,
      toastMessage: '',
      toastVariant: 'info'
    };
  },
  methods: {
    async onSubmit(value) {
      const response = await axios.post(BackEndApiRoutes.users.user_save, value).catch(error => {
        (this.toastMessage = 'User not found'), (this.toastVariant = 'error'), console.log(error);
      });
      if (response?.data) {
        this.toastMessage = 'Registor Successfuly';
        this.toastVariant = 'success';
      }
      this.$refs.toast.show();
    }
  }
};
</script>