<template>
  <p>Input data binding</p>
  <p style="white-space: pre-line">{{ message }}</p>

  <input type="text" v-model="message" placeholder="enter some text" />
  <br />
  <textarea type="text" v-model="message" placeholder="enter some text" />
</template>
<script>
export default {
  name: 'InputDataBinding',
  data() {
    return {
      message: 'hello word'
    };
  }
};
</script>