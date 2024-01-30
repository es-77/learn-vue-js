<template>
  <p>V bind</p>
  <p v-bind:style="{ color: text }">style bind</p>
  <input type="color" name="color" id="color" v-model="text" />
</template>

<script>
export default {
  name: 'VBind',
  data() {
    return {
      text: 'red'
    };
  }
};
</script>
