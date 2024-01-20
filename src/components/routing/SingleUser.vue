<template>
  <p>SingleUser</p>
  <p>email : {{ user.email }}</p>
  <p>id : {{ user.id }}</p>
  <p>password : {{ user.password }}</p>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SingleUser',
  data() {
    return {
      userId: this.$route.params.id,
      user: {}
    };
  },
  methods: {
    handleGetSingleUser() {
      axios.get('http://localhost:3000/users/' + this.userId).then(reponse => {
        console.log(reponse.data);
        this.user = reponse.data;
      });
    }
  },
  mounted() {
    this.handleGetSingleUser();
  }
};
</script>
