<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="schema">
      <div>
        <label for="email">Email:</label>
        <Field type="text" name="email" id="email" v-model="formData.email" />
        <ErrorMessage name="email" />
      </div>
      <div>
        <label for="password">password:</label>
        <Field type="text" name="password" id="password" v-model="formData.password" />
        <ErrorMessage name="password" />
      </div>
      <div>
        <label for="password_confirmation">password confirmation:</label>
        <Field
          type="text"
          name="password_confirmation"
          id="password_confirmation"
          v-model="formData.password_confirmation"
        />
        <ErrorMessage name="password_confirmation" />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </div>
</template>

<script>
import resetPasswordApiCall from './apiCall/resetPasswordApiCall.js';
import { resetPasswordValidation } from './validation/resetPasswordValidation.js';
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
  name: 'ResetPassword',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      schema: resetPasswordValidation,
      formData: {
        email: ''
      }
    };
  },
  methods: {
    async onSubmit() {
      const response = await this.sendData(this.users.subdomain, this.formData);
      if (response?.data) {
        console.log(response.data);
      }
    }
  },
  mixins: [resetPasswordApiCall]
};
</script>