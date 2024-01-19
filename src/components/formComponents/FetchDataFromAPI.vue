<template>
  <p>FetchDataFromAPI</p>

  <table border="2">
    <tr>
      <td>id</td>
      <td>name</td>
      <td>username</td>
      <td>email</td>
    </tr>
    <tr v-for="user in responseData" :key="user.id">
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.username }}</td>
      <td>{{ user.email }}</td>
    </tr>
  </table>
</template>

<script>
import axios from 'axios';

// Make sure to install the necessary packages if you haven't already:
// npm install axios vue-axios

export default {
  name: 'FetchDataFromAPI',
  data() {
    return {
      responseData: null
    };
  },
  methods: {
    fetchData() {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          this.responseData = response.data;
          console.log(this.responseData);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>
