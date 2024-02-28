<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="schema">
      <div>
        <label for="card_number">Card Number:</label>
        <Field type="text" name="card_number" id="card_number" v-model="formData.card_number" />
        <ErrorMessage name="card_number" />
      </div>
      <div>
        <label for="card_name">Card Holder Name:</label>
        <Field type="text" name="card_name" id="card_name" v-model="formData.card_name" />
        <ErrorMessage name="card_name" />
      </div>
      <div>
        <label for="card_expiry">Card Expiry:</label>
        <Field type="text" name="card_expiry" id="card_expiry" v-model="formData.card_expiry" />
        <ErrorMessage name="card_expiry" />
      </div>
      <div>
        <label for="card_cvv">Card CVV:</label>
        <Field type="text" name="card_cvv" id="card_cvv" v-model="formData.card_cvv" />
        <ErrorMessage name="card_cvv" />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </div>
</template>

<script>
import SignupTenantApiCall from './apiCalls/SignupTenantApiCall.js';
import { BillingValidation } from './validations/BillingValidation.js';
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
      schema: BillingValidation,
      apiData: [],
      formData: {
        card_number: '',
        card_name: '',
        card_expiry: '',
        card_cvv: '',
        payment_gateway: 'authorize_net',
        tenant_id: this.users.tenant_id,
        step: 'billing'
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
        this.$router.push('/emmanuel/prepare_tenant');
      }
    }
  },
  mixins: [SignupTenantApiCall]
};
</script>