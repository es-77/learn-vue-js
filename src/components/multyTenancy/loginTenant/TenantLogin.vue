<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="schema">
      <div>
        <label for="email">Email:</label>
        <Field type="text" name="email" id="email" v-model="formData.email" />
        <ErrorMessage name="email" />
      </div>
      <div>
        <label for="password">Password:</label>
        <Field type="text" name="password" id="password" v-model="formData.password" />
        <ErrorMessage name="password" />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </div>
</template>

<script>
import loginApiCall from './apiCalls/loginApiCall.js';
import { loginValidation } from './validation/loginValidation.js';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { storeToRefs } from 'pinia';
import { useSigupStore } from '../store/Sigup.js';
import { useLoginUserDataStore } from '../store/LoginUserData.js';

export default {
  name: 'TenantLogin',
  setup() {
    const store = useSigupStore();
    const Userstore = useLoginUserDataStore();

    const { users } = storeToRefs(store);
    const { handleUpdateUser } = store;
    const { user } = storeToRefs(Userstore);
    const { handleUpdateUserData } = Userstore;
    return {
      users,
      handleUpdateUser,
      user,
      handleUpdateUserData
    };
  },
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      schema: loginValidation,
      formData: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    async onSubmit() {
      const response = await this.sendData('emmanueltest', this.formData);
      if (response?.data) {
        console.log(response.data);
        this.handleUpdateUserData(response.data);
        this.$router.push('/emmanuel/dashboard');
      }
    }
  },
  mixins: [loginApiCall]
};
</script>