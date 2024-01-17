<template>
  <p>child component</p>
  {{ console.log('users', users) }}
  <p v-for="user in users" :key="user.id">
    {{ user.id }}
  </p>
</template>
<script>
export default {
  name: 'ChildComponent',
  props: {
    users: Array
  }
};
</script>