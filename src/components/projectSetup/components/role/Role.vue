<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <label for="name">Enter Role Name</label><br />
    <Field name="name" type="text" /> <br />
    <ErrorMessage name="name" /><br />
    <button type="submit">submit</button>
  </Form>
</template>

<script>
import { RoleValidation } from './RoleValidation';
import { Form, Field, ErrorMessage } from 'vee-validate';
import axios from 'axios';
import BackEndApiRoutes from '../../BackEndApiRoutes';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Role',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      schema: RoleValidation
    };
  },
  methods: {
    async onSubmit(value) {
      const response = await axios
        .post(BackEndApiRoutes.roles.role_save, value)
        .catch(error => console.error('Search Error:', error));
      response?.data?.results ?? null;
    }
  }
};
</script>