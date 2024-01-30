<template>
  <p>VElse</p>
  <p v-if="isCondition">if conditions</p>
  <p v-else>else condition</p>
</template>

<script>
export default {
  name: 'VElse',
  data() {
    return {
      // isCondition:true
      isCondition: false
    };
  }
};
</script>

<style>
</style>