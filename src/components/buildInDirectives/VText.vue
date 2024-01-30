<template>
  <p>V Text</p>
  <p v-text="msg"></p>
  <!-- same as -->
  <p>varible use into p tag : {{ msg }}</p>
</template>

<script>
export default {
  name: 'VText',
  data() {
    return {
      msg: 'message come into script tag'
    };
  }
};
</script>