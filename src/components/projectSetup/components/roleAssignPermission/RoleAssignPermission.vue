<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <label for="role_id">Select Role</label><br />
    <Field name="role_id" as="select">
      <option value="">Select Role</option>
      <option v-for="role in users" :key="role.id" :value="role.id">{{ role.name }}</option>
    </Field>
    <ErrorMessage name="role_id" /><br />

    <div v-for="(modulePermission, index) in dataBasePermission" :key="index" :for="modulePermission">
      <label>
        {{ index }}
      </label>
      <p>
        <label v-for="permission in modulePermission" :key="permission.id" :for="index + '_' + permission.name">
          <Field
            type="checkbox"
            name="permissions"
            :value="index + '_' + permission.name"
            :id="index + '_' + permission.name"
          />
          {{ permission.name }}
        </label>
      </p>
    </div>
    <ErrorMessage name="permissions" /><br />

    <button type="submit">Submit</button>
  </Form>
  <ToastMessageVue :message="toastMessage" :variant="toastVariant" ref="toast" />
</template>

<script>
import axios from 'axios';
import { RoleAssignPermissionValidation } from './RoleAssignPermissionValidation';
import { Form, Field, ErrorMessage } from 'vee-validate';
import BackEndApiRoutes from '../../BackEndApiRoutes';
import ToastMessageVue from '../../common/ToastMessage.vue';

export default {
  name: 'RoleAssignPermission',
  components: {
    Form,
    Field,
    ErrorMessage,
    ToastMessageVue
  },
  data() {
    return {
      schema: RoleAssignPermissionValidation,
      users: [],
      permissions: ['cycling', 'running', 'visit gym', 'swimming', 'team sports', 'other'],
      dataBasePermission: [],
      toastMessage: '',
      toastVariant: 'info'
    };
  },
  methods: {
    async onSubmit(value) {
      const response = await axios.post(BackEndApiRoutes.rolePermissions.role_permission_save, value).catch(error => {
        (this.toastMessage = 'Role Not Assign Permission'), (this.toastVariant = 'error'), console.log(error);
      });
      if (response?.data) {
        this.toastMessage = 'Role Assign Permission Successfuly';
        this.toastVariant = 'success';
      }
      this.$refs.toast.show();
    },
    async getRoles() {
      const response = await axios
        .get(BackEndApiRoutes.roles.role_get)
        .catch(error => console.error('Search Error:', error));
      this.users = response?.data ?? [];
    },
    async getPermissions() {
      const response = await axios
        .get(BackEndApiRoutes.permissions.permissions_get)
        .catch(error => console.error('Search Error:', error));
      this.dataBasePermission = response?.data ?? [];
    }
  },
  mounted() {
    this.getRoles();
    this.getPermissions();
  }
};
</script>
