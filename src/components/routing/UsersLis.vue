<template>
  <p>Users List Here</p>
  <table border="2">
    <head>
      <tr>
        <td>id</td>
        <td>fullname</td>
        <td>phone</td>
        <td>email</td>
        <td>action</td>
      </tr>
    </head>
    <body>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.fullname }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.email }}</td>
        <td>
          <button type="button">
            <router-link :to="'/SingleUser/' + user.id">view user</router-link>
          </button>
        </td>
      </tr>
    </body>
  </table>
</template>

<script>
import axios from 'axios';
export default {
  name: 'UsersLis',
  methods: {
    handleGetUser() {
      axios.get('http://localhost:3000/users').then(response => {
        console.log(response.data);
        this.users = response.data;
      });
    }
  },
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.handleGetUser();
  }
};
</script>
