<template>
  <p>LoginFormYupAndVeeValidate</p>
  <p v-capitalize-text="dynamicText">{{ dynamicText }}</p>
  <Form @submit="onSubmit" :validation-schema="schema">
    <Field name="name" type="text" v-can="'user.list'" /> <br />
    <ErrorMessage name="name" /><br />
    <Field name="email" type="email" /> <br />
    <ErrorMessage name="email" /><br />
    <Field name="password" type="password" /> <br />
    <ErrorMessage name="password" /><br />
    <button type="submit">submit</button>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { LoginYupSchema } from './LoginYupSchema';

export default {
  name: 'LoginFormYupAndVeeValidate',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      schema: LoginYupSchema,
      dynamicText: 'initial value'
    };
  },
  methods: {
    onSubmit(value) {
      alert(123);
      console.log('Submitted', value);
    }
  }
};
</script>
