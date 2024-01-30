<template>
  <p>VIf</p>
  <p v-if="isCondition">true</p>
</template>

<script>
export default {
  name: 'VIf',
  data() {
    return {
      isCondition: true
      //   isCondition: false
    };
  }
};
</script>

<style>
</style>