<template>
  <p>child components</p>
  <br />
  <input v-on:input="handleInputChange" type="text" placeholder="Enter some text" v-model="text" />
</template>
<script>
export default {
  name: 'ChildComponent',
  data() {
    return { text: '' };
  },
  methods: {
    handleInputChange() {
      this.$emit('handleInput', this.text);
    }
  }
};
</script>