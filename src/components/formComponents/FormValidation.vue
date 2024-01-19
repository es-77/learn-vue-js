<template>
  <div>
    <p>form validation</p>
    <form @submit.prevent="handleLogin">
      <input type="text" id="name" name="name" placeholder="enter your name" v-model="formLogin.name" /><br />
      <p style="color: red">{{ formLogin.name.trim() == '' ? errors.name : '' }}</p>
      <br />
      <input type="text" id="email" name="email" placeholder="enter your email" v-model="formLogin.email" /><br />
      <p style="color: red">{{ formLogin.email.trim() == '' ? errors.email : '' }}</p>
      <br />
      <input type="text" id="password" name="password" placeholder="enter your password" v-model="formLogin.password" />
      <p style="color: red">{{ formLogin.password.trim() == '' ? errors.password : '' }}</p>
      <br />
      <br />
      <button type="submit">submit data</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormValidation',
  data() {
    return {
      errors: {},
      formLogin: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    handleLogin() {
      this.errors = {}; // Clear previous errors

      if (this.formLogin.name.trim() === '') {
        this.errors.name = 'Name is required';
      }
      if (this.formLogin.email.trim() === '') {
        this.errors.email = 'Email is required';
      }
      if (this.formLogin.password.trim() === '') {
        this.errors.password = 'Password is required';
      }

      console.log(this.formLogin.name, this.formLogin.email, this.formLogin.password, this.errors);
    }
  }
};
</script>
