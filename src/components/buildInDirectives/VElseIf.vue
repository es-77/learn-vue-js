<template>
  <p>VElseIf</p>
  <p v-if="typeOf == 'A'">type of A</p>
  <p v-else-if="typeOf == 'B'">type of B</p>
  <p v-else-if="typeOf == 'C'">type of C</p>
  <p v-else>type of not A B C</p>
</template>

<script>
export default {
  name: 'VElseIf',
  data() {
    return {
      typeOf: 'A'
      // typeOf:'B',
      // typeOf:'C',
      // typeOf:'D',
    };
  }
};
</script>

<style>
</style>