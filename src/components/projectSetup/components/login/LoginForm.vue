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
</template>

<script>
import { LoginValidation } from './LoginValidation';
import { Form, Field, ErrorMessage } from 'vee-validate';
import axios from 'axios';
import BackEndApiRoutes from '../../BackEndApiRoutes';

export default {
  name: 'LoginForm',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      schema: LoginValidation
    };
  },
  methods: {
    async onSubmit(value) {
      const response = await axios
        .post(BackEndApiRoutes.users.user_get, value)
        .catch(error => console.error('Search Error:', error));
      response?.data?.results ?? null;
    }
  }
};
</script>