<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <label for="user_id">Select User</label><br />
    <Field name="user_id" as="select">
      <option value="">Select User</option>
      <option v-for="user in users" :key="user.id" :value="user.id">{{ user.email }} {{ user.id }}</option>
    </Field>
    <ErrorMessage name="user_id" /><br />

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

    <button type="submit" :disabled="userPermissions.length == 1 ? true : false">Submit</button>
  </Form>
</template>

<script>
import { PermissionValidation } from './PermissionValidation';
import { Form, Field, ErrorMessage } from 'vee-validate';
import axios from 'axios';
import BackEndApiRoutes from '../../BackEndApiRoutes';
import { usePermissionStore } from '../../projectStore/PermissionStore';
import { storeToRefs } from 'pinia';

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
      permissions: ['cycling', 'running', 'visit gym', 'swimming', 'team sports', 'other'],
      dataBasePermission: []
    };
  },
  methods: {
    async onSubmit(value) {
      const response = await axios
        .post(BackEndApiRoutes.userPermission.user_permission_save, value)
        .catch(error => console.error('Search Error:', error));
      response?.data?.results ?? null;
      this.handleAddNewPermission(value);
      localStorage.setItem('permission', JSON.stringify(value.permissions));
    },
    async getUsers() {
      const response = await axios
        .get(BackEndApiRoutes.users.user_get)
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
    this.getUsers();
    this.getPermissions();
  },
  setup() {
    const store = usePermissionStore();
    const { userPermissions } = storeToRefs(store);
    const { handleDeletePermission, handleUpdatePermission, handleAddNewPermission } = store;
    return {
      store,
      userPermissions,
      handleDeletePermission,
      handleUpdatePermission,
      handleAddNewPermission
    };
  }
};
</script>
