<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="schema">
      <button type="submit">Create Tenant</button>
    </Form>
  </div>
</template>

<script>
import SignupTenantApiCall from './apiCalls/SignupTenantApiCall.js';
import { PrepareTenantValidation } from './validations/PrepareTenantValidation.js';
import { Form } from 'vee-validate';
import { storeToRefs } from 'pinia';
import { useSigupStore } from '../store/Sigup';

export default {
  name: 'PrepareTenant',
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
    Form
  },
  data() {
    return {
      schema: PrepareTenantValidation,
      apiData: [],
      formData: {
        tenant_id: this.users.tenant_id,
        step: 'prepare_tenant'
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
        this.$router.push('/emmanuel/login');
      }
    }
  },
  mixins: [SignupTenantApiCall]
};
</script>