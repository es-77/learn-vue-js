<template>
  <p>VOnce</p>
  <p v-once>{{ text }}</p>
  <p>{{ text }}</p>
  <input type="text" name="name" id="name" v-model="text" />
</template>

<script>
export default {
  name: 'VOnce',
  data() {
    return {
      text: 'my text first time'
    };
  }
};
</script>