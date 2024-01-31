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
</template>

<script>
import { RegistorValidation } from './RegistorValidation';
import { Form, Field, ErrorMessage } from 'vee-validate';
import axios from 'axios';
import BackEndApiRoutes from '../../BackEndApiRoutes';

export default {
  name: 'RegistorForm',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      schema: RegistorValidation
    };
  },
  methods: {
    async onSubmit(value) {
      const response = await axios
        .post(BackEndApiRoutes.users.user_save, value)
        .catch(error => console.error('Search Error:', error));
      response?.data?.results ?? null;
    }
  }
};
</script>