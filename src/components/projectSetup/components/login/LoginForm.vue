<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <label for="email">Enter Your Email</label><br />
    <Field name="email" type="email" /> <br />
    <ErrorMessage name="email" /><br />
    <label for="password">Enter Your Password</label><br />
    <Field name="password" type="password" /> <br />
    <ErrorMessage name="password" /><br />
    <button type="submit">submit</button>
  </Form>
  <ToastMessageVue :message="toastMessage" :variant="toastVariant" ref="toast" />
</template>

<script>
import axios from 'axios';
import { LoginValidation } from './LoginValidation';
import { Form, Field, ErrorMessage } from 'vee-validate';
import BackEndApiRoutes from '../../BackEndApiRoutes';
import ToastMessageVue from '../../common/ToastMessage.vue';

export default {
  name: 'LoginForm',
  components: {
    Form,
    Field,
    ErrorMessage,
    ToastMessageVue
  },
  data() {
    return {
      schema: LoginValidation,
      users: [],
      toastMessage: '',
      toastVariant: 'info'
    };
  },
  methods: {
    async onSubmit(value) {
      const user = this.users.find(u => u.email === value.email && u.password === value.password);
      if (user) {
        this.toastMessage = 'Login';
        this.toastVariant = 'success';
      } else {
        this.toastMessage = 'User not found';
        this.toastVariant = 'error';
      }
      this.$refs.toast.show();
    },
    async getAllUsers() {
      const response = await axios
        .get(BackEndApiRoutes.users.user_get)
        .catch(error => console.error('Search Error:', error));
      this.users = response?.data ?? null;
    }
  },
  mounted() {
    this.getAllUsers();
  }
};
</script>