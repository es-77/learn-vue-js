<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="schema">
      <div>
        <label for="purpose">Purpose:</label>
        <Field type="text" name="purpose" id="purpose" v-model="formData.purpose" />
        <ErrorMessage name="purpose" />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </div>
</template>

<script>
import SignupTenantApiCall from './apiCalls/SignupTenantApiCall.js';
import { PurposeTenantValidation } from './validations/PurposeTenantValidation.js';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { storeToRefs } from 'pinia';
import { useSigupStore } from '../store/Sigup';

export default {
  name: 'PurposeTenant',
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
      schema: PurposeTenantValidation,
      apiData: [],
      formData: {
        purpose: '',
        tenant_id: this.users.tenant_id,
        step: 'purpose'
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
        this.$router.push('/emmanuel/package_selection');
      }
    }
  },
  mixins: [SignupTenantApiCall]
};
</script>