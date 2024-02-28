<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="schema">
      <div>
        <label for="package_id">package_id:</label>
        <Field type="text" name="package_id" id="package_id" v-model="formData.package_id" />
        <ErrorMessage name="package_id" />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </div>
</template>


<script>
import SignupTenantApiCall from './apiCalls/SignupTenantApiCall.js';
import { PackageSelectionValidation } from './validations/PackageSelectionValidation.js';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { storeToRefs } from 'pinia';
import { useSigupStore } from '../store/Sigup';

export default {
  name: 'PackageSelection',
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
      schema: PackageSelectionValidation,
      apiData: [],
      formData: {
        package_id: '',
        tenant_id: this.users.tenant_id,
        step: 'package_selection'
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
        this.$router.push('/emmanuel/workspace');
      }
    }
  },
  mixins: [SignupTenantApiCall]
};
</script>