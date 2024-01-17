<template>
  <p class="backgroundRed">internal styling</p>
  <p v-bind:style="{ backgroundColor: 'blue' }">inline styling</p>
  <p v-bind:class="{ display: show }">object styling</p>
  <p v-bind:class="['arrayStyle']">array styling direct</p>
  <p v-bind:class="[arrayStyle]">array styling through data</p>
  <button v-on:click="handleBrown">add remove brown colur</button>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Styling',
  data() {
    return { show: true, arrayStyle: 'arrayStyle' };
  },
  methods: {
    handleBrown() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
.backgroundRed {
  background-color: red;
}
.display {
  background-color: brown;
}
.arrayStyle {
  background-color: blueviolet;
}
</style>