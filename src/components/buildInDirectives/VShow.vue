<template>
  <p>V Show</p>

  <p v-show="isCondition">show content</p>
</template>

<script>
export default {
  name: 'VShow',
  data() {
    return {
      //   isCondition: true
      isCondition: false
    };
  }
};
</script>