<template>
  <p>RequestDelete</p>
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
        <td><button v-on:click="handleDelete(user.id)">Delete</button></td>
      </tr>
    </body>
  </table>
</template>

<script>
import axios from 'axios';
export default {
  name: 'RequestDelete',
  methods: {
    handleGetUser() {
      axios.get('http://localhost:3000/users').then(response => {
        console.log(response.data);
        this.users = response.data;
      });
    },
    handleDelete(id) {
      console.log('delete', id);
      axios.delete('http://localhost:3000/users/' + id).then(reponse => {
        console.log(reponse);
        this.handleGetUser();
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
