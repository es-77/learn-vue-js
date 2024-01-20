<template>
  <p>RequestPost</p>
  <form method="post" @submit="handleSubmitLogin">
    <div class="mb-3">
      <label for="" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        name="email"
        id="email"
        v-model="loginData.email"
        aria-describedby="emailHelpId"
        placeholder="abc@mail.com"
      />
      <small id="emailHelpId" class="form-text text-muted">Help text</small>
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        name="password"
        id="password"
        placeholder=" Enter your password"
        v-model="loginData.password"
      />
    </div>
    <button type="submit">save data</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RequestPost',
  data() {
    return {
      loginData: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    handleSubmitLogin(e) {
      e.preventDefault();
      console.log('loginData', this.loginData);
      axios.post('http://localhost:3000/users', this.loginData);
    }
  }
};
</script>
