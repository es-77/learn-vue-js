<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="schema">
      <div>
        <label for="email">Email:</label>
        <Field type="text" name="email" id="email" v-model="formData.email" />
        <ErrorMessage name="email" />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </div>
</template>

<script>
import forgetPasswordApiCall from './apiCall/forgetPasswordApiCall.js';
import { forgetPasswordValidation } from './validation/forgetPasswordValidation.js';
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
  name: 'ForgetPassword',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      schema: forgetPasswordValidation,
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
  mixins: [forgetPasswordApiCall]
};
</script>