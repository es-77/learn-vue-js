<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <label for="user_id">Select User</label><br />
    <Field name="user_id" as="select">
      <option value="">Select User</option>
      <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
    </Field>
    <ErrorMessage name="user_id" /><br />
    <label for="role_id">Select Role</label><br />
    <Field name="role_id" as="select">
      <option value="">Select Role</option>
      <option v-for="role in roles" :key="role.id" :value="role.id">{{ role.name }}</option>
    </Field>
    <ErrorMessage name="role_id" /><br />

    <button type="submit">Submit</button>
  </Form>
  <ToastMessageVue :message="toastMessage" :variant="toastVariant" ref="toast" />
</template>

<script>
import axios from 'axios';
import { UserAsignRoleValidation } from './UserAsignRoleValidation';
import { Form, Field, ErrorMessage } from 'vee-validate';
import BackEndApiRoutes from '../../BackEndApiRoutes';
import ToastMessageVue from '../../common/ToastMessage.vue';

export default {
  name: 'UserAsignRole',
  components: {
    Form,
    Field,
    ErrorMessage,
    ToastMessageVue
  },
  data() {
    return {
      schema: UserAsignRoleValidation,
      users: [],
      roles: [],
      toastMessage: '',
      toastVariant: 'info'
    };
  },
  methods: {
    async onSubmit(value) {
      const response = await axios.post(BackEndApiRoutes.userRole.user_role_save, value).catch(error => {
        (this.toastMessage = 'Role Not Assign'), (this.toastVariant = 'error'), console.log(error);
      });
      if (response?.data) {
        this.toastMessage = 'Role Assign Successfuly';
        this.toastVariant = 'success';
      }
      this.$refs.toast.show();
    },
    async getUsers() {
      const response = await axios
        .get(BackEndApiRoutes.users.user_get)
        .catch(error => console.error('Search Error:', error));
      this.users = response?.data ?? [];
    },
    async getRoles() {
      const response = await axios
        .get(BackEndApiRoutes.roles.role_get)
        .catch(error => console.error('Search Error:', error));
      this.roles = response?.data ?? [];
    }
  },
  mounted() {
    this.getUsers();
    this.getRoles();
  }
};
</script>
