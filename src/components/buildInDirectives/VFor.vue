<template>
  <p>V For Loop</p>
  <p v-for="user in users" :key="user.id">{{ user.id }}</p>
</template>

<script>
export default {
  name: 'VFor',
  data() {
    return {
      users: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ]
    };
  }
};
</script>
