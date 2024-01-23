<template>
  <p>BeforeMountAndMounted</p>
  <p>my name is : {{ name }}</p>
</template>

<script>
export default {
  name: 'BeforeMountAndMounted',
  data() {
    return {
      name: 'Emmanuel'
    };
  },
  beforeMount() {
    // eslint-disable-next-line no-undef
    console.log('before mount', this.$el);
  },
  mounted() {
    // eslint-disable-next-line no-undef
    console.log('mounted', this.$el);
  }
};
// In Vue.js 3, this.$el is used to access the root element of the component. However, it's important to note that in Vue 3, the concept of $el has been deprecated, and direct access to the root element is discouraged.
</script>
