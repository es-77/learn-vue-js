<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <label for="module_name">Module Name</label><br />
    <Field name="module_name" type="text" v-model="module_name" />
    <div v-for="(permission, index) in permissions" :key="index">
      <Field :name="`permissions[${index}]`" type="text" />
      <button type="button" @click="removePermission(index)">Remove</button>
      <ErrorMessage :name="`permissions.${index}`" /><br />
    </div>

    <button type="button" @click="addPermission">Add Permission</button>

    <button type="submit">Submit</button>
  </Form>
</template>

<script>
import { PermissionValidation } from './PermissionValidation';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { ref } from 'vue';
// import axios from 'axios';
// import BackEndApiRoutes from '../../BackEndApiRoutes';

export default {
  name: 'CreatePermission',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  setup() {
    const schema = PermissionValidation;
    const permissions = ref([]);

    const addPermission = () => {
      permissions.value.push('');
    };

    const removePermission = index => {
      permissions.value.splice(index, 1);
    };

    const onSubmit = async value => {
      try {
        console.log('value', value);
        // const response = await axios.post(BackEndApiRoutes.users.user_save, value);
        // console.log('Response:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    return { schema, permissions, addPermission, removePermission, onSubmit };
  }
};
</script>
