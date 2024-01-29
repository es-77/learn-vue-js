<template>
  <p>YupAndVeeValidate</p>
  <Form @submit="onSubmit" :validation-schema="schema">
    <Field name="email" type="email" /> <br />
    <ErrorMessage name="email" /><br />
    <button>submit</button>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';
export default {
  name: 'YupAndVeeValidate',
  data() {
    const schema = Yup.object().shape({
      email: Yup.string().required('the email is required *')
    });
    return {
      schema
    };
  },
  components: {
    Form,
    Field,
    ErrorMessage
  },
  methods: {
    onSubmit(value) {
      alert(123);
      console.log('Submitted', value);
    }
  }
};
</script>