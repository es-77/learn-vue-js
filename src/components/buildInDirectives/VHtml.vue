<template>
  <p>v html</p>
  <p>raw html varible : {{ rawHtml }}</p>
  <div v-html="rawHtml"></div>
</template>

<script>
export default {
  name: 'VHtml',
  data() {
    return {
      rawHtml: '<input type="color" name="color" id="color" placeholder="Enter your color"/>'
    };
  }
};
</script>
