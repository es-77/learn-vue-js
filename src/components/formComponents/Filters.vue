<template>
  <p>filters check</p>
  <p>{{ formattedPrice }}</p>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Filters',
  data() {
    return { price: 123 };
  },
  computed: {
    formattedPrice() {
      return '$' + this.price;
    }
  }
};
</script>
