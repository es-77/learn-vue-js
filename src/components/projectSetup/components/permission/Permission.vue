<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <label for="user_id">Select User</label><br />
    <Field name="user_id" as="select">
      <option value="">Select User</option>
      <option v-for="user in users" :key="user.id" :value="user.id">{{ user.email }} {{ user.id }}</option>
    </Field>
    <ErrorMessage name="user_id" /><br />

    <p>
      <label v-for="permission in permissions" :key="permission" :for="permission">
        <Field type="checkbox" name="permissions" :value="permission" />
        {{ permission }}
      </label>
    </p>
    <ErrorMessage name="permissions" /><br />

    <button type="submit">Submit</button>
  </Form>
</template>

<script>
import { PermissionValidation } from './PermissionValidation';
import { Form, Field, ErrorMessage } from 'vee-validate';
import axios from 'axios';
import BackEndApiRoutes from '../../BackEndApiRoutes';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Permission',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      schema: PermissionValidation,
      users: [],
      permissions: ['cycling', 'running', 'visit gym', 'swimming', 'team sports', 'other']
    };
  },
  methods: {
    async onSubmit(value) {
      const response = await axios
        .post(BackEndApiRoutes.users.user_save, value)
        .catch(error => console.error('Search Error:', error));
      response?.data?.results ?? null;
    },
    async getUsers() {
      const response = await axios
        .get(BackEndApiRoutes.users.user_get)
        .catch(error => console.error('Search Error:', error));
      this.users = response?.data ?? [];
    }
  },
  mounted() {
    this.getUsers();
  }
};
</script>
