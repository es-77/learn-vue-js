<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="schema">
      <div>
        <label for="subdomain">Subdomain:</label>
        <Field type="text" name="subdomain" id="subdomain" v-model="formData.subdomain" />
        <ErrorMessage name="subdomain" />
      </div>
      <div>
        <label for="user_cap">User Cap:</label>
        <Field type="number" name="user_cap" id="user_cap" v-model="formData.user_cap" />
        <ErrorMessage name="user_cap" />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </div>
</template>

<script>
import SignupTenantApiCall from './apiCalls/SignupTenantApiCall.js';
import { WorkspaceValidation } from './validations/WorkspaceValidation.js';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { storeToRefs } from 'pinia';
import { useSigupStore } from '../store/Sigup';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Workspace',
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
      schema: WorkspaceValidation,
      apiData: [],
      formData: {
        package_id: '',
        tenant_id: this.users.tenant_id,
        step: 'workspace'
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
        this.$router.push('/emmanuel/billing');
      }
    }
  },
  mixins: [SignupTenantApiCall]
};
</script>