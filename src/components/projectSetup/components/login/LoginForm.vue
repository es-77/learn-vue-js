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
  <ToastMessageVue :message="toastMessage" :variant="toastVariant" ref="toast" />
</template>

<script>
import axios from 'axios';
import { LoginValidation } from './LoginValidation';
import { Form, Field, ErrorMessage } from 'vee-validate';
import BackEndApiRoutes from '../../BackEndApiRoutes';
import ToastMessageVue from '../../common/ToastMessage.vue';
import { setUser } from '../../common/LocalStoreage.js';
import { useUserDataStore } from '../../projectStore/UserDataStore';
import { storeToRefs } from 'pinia';

export default {
  name: 'LoginForm',
  components: {
    Form,
    Field,
    ErrorMessage,
    ToastMessageVue
  },
  data() {
    return {
      schema: LoginValidation,
      users: [],
      usersRole: [],
      rolePermission: [],
      toastMessage: '',
      toastVariant: 'info'
    };
  },
  methods: {
    async onSubmit(value) {
      const user = this.users.find(u => u.email === value.email && u.password === value.password);
      if (user) {
        const role = this.usersRole.find(role => role.user_id == user.id);
        const rolePermission = this.rolePermission.find(rolePermission => rolePermission.role_id == role.role_id);
        const data = {
          user: user,
          role: role,
          rolePermission: rolePermission
        };
        setUser(data);
        // this.handleAddUserData(data);
        this.toastMessage = 'Login';
        this.toastVariant = 'success';
        this.$router.push('/');
      } else {
        this.toastMessage = 'User not found';
        this.toastVariant = 'error';
      }
      this.$refs.toast.show();
    },
    async getAllUsers() {
      const response = await axios
        .get(`${BackEndApiRoutes.users.user_get}?_embed=user_role`)
        .catch(error => console.error('Search Error:', error));
      this.users = response?.data ?? null;
    },
    async getAllUserRole() {
      const response = await axios
        .get(BackEndApiRoutes.userRole.user_role_get)
        .catch(error => console.error('Search Error:', error));
      this.usersRole = response?.data ?? null;
    },
    async getAllRolePermission() {
      const response = await axios
        .get(BackEndApiRoutes.rolePermissions.role_permission_get)
        .catch(error => console.error('Search Error:', error));
      this.rolePermission = response?.data ?? null;
    }
  },
  mounted() {
    this.getAllUsers();
    this.getAllUserRole();
    this.getAllRolePermission();
  },
  setup() {
    const store = useUserDataStore();
    const { userData } = storeToRefs(store);
    const { handleDeleteUserData, handleUpdateUserData, handleAddUserData } = store;
    return {
      store,
      userData,
      handleDeleteUserData,
      handleUpdateUserData,
      handleAddUserData
    };
  }
};
</script>