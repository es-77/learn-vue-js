<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <label for="name">Enter Role Name</label><br />
    <Field name="name" type="text" /> <br />
    <ErrorMessage name="name" /><br />
    <button type="submit">submit</button>
  </Form>
  <ToastMessageVue :message="toastMessage" :variant="toastVariant" ref="toast" />
</template>

<script>
import { RoleValidation } from './RoleValidation';
import { Form, Field, ErrorMessage } from 'vee-validate';
import axios from 'axios';
import BackEndApiRoutes from '../../BackEndApiRoutes';
import ToastMessageVue from '../../common/ToastMessage.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Role',
  components: {
    Form,
    Field,
    ErrorMessage,
    ToastMessageVue
  },
  data() {
    return {
      schema: RoleValidation,
      toastMessage: '',
      toastVariant: 'info'
    };
  },
  methods: {
    async onSubmit(value) {
      const response = await axios.post(BackEndApiRoutes.roles.role_save, value).catch(error => {
        (this.toastMessage = 'Not Created Role'), (this.toastVariant = 'error'), console.log(error);
      });
      if (response?.data) {
        this.toastMessage = 'Role Created Successfuly';
        this.toastVariant = 'success';
      }
      this.$refs.toast.show();
    }
  }
};
</script>