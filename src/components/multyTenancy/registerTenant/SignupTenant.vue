<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="schema">
      <div>
        <label for="company_name">Company Name:</label>
        <Field name="company_name" type="text" id="company_name" v-model="formData.company_name" />
        <ErrorMessage name="company_name" />
      </div>
      <div>
        <label for="email">Email:</label>
        <Field name="email" type="email" id="email" v-model="formData.email" />
        <ErrorMessage name="email" />
      </div>
      <div>
        <label for="name">Name:</label>
        <Field name="name" type="text" id="name" v-model="formData.name" />
        <ErrorMessage name="name" />
      </div>
      <div>
        <label for="password">Password:</label>
        <Field name="password" type="password" id="password" v-model="formData.password" />
        <ErrorMessage name="password" />
      </div>
      <Field name="step" type="hidden" id="step" value="signup" />
      <button type="submit">Submit</button>
    </Form>
    user data here {{ users }}
  </div>
</template>

<script>
import SignupTenantApiCall from './apiCalls/SignupTenantApiCall.js';
import { signupTenantValidation } from './validations/signupTenantValidation.js';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { storeToRefs } from 'pinia';
import { useSigupStore } from '../store/Sigup';

export default {
  name: 'SignupTenant',
  setup() {
    const store = useSigupStore();
    const { users } = storeToRefs(store);
    const { handleUpdateUser } = store;
    return {
      users,
      handleUpdateUser
    };
  },
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      schema: signupTenantValidation,
      apiData: [],
      formData: {
        company_name: '',
        email: '',
        name: '',
        password: '',
        step: 'signup'
      }
    };
  },
  methods: {
    async onSubmit() {
      const response = await this.sendData(this.formData);
      if (response?.data) {
        console.log(response.data);
        this.apiData = response.data;
        this.handleUpdateUser(response.data);
        this.$router.push('/emmanuel/purpose_tenant');
      }
    }
  },
  mixins: [SignupTenantApiCall]
};
</script>
