<template>
  <p>Watchers</p>
  {{ count }}
  <button v-on:click="count = count + 1">add</button>
  <button v-on:click="count = count - 1">subract</button>
  <button @click="handleAlert">Alert</button>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Watchers',
  data() {
    return {
      count: 0
    };
  },
  watch: {
    count() {
      alert(123);
    }
  },
  methods: {
    handleAlert() {
      alert('alert');
    }
  }
};
</script>

<style>
</style>