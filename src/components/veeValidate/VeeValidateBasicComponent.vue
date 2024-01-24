<template>
  <p>VeeValidateBasicComponent</p>
  <!-- <form novalidate @submit.prevent="onSubmit">
    <input type="email" name="email" />
    <button>Sign up for newsletter</button>
  </form> -->

  <Form @submit="onSubmit">
    <Field name="email" type="email" :rules="validateEmail" /> <br />
    <ErrorMessage name="email" /><br />
    <button>Sign up for newsletter</button>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
export default {
  name: 'VeeValidateBasicComponent',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  methods: {
    // onSubmit() {
    //   console.log('Submitted');
    // }
    onSubmit(value) {
      console.log('Submitted', value);
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required';
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      // All is good
      return true;
    }
  }
};
</script>
