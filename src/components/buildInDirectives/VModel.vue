<template>
  <p>V Model</p>
  <p>{{ inputText }}</p>
  <input type="text" v-model="inputText" />
</template>

<script>
export default {
  name: 'VModel',
  data() {
    return {
      inputText: 'my text'
    };
  }
};
</script>

<style>
</style>