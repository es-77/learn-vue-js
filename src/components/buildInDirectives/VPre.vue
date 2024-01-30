<template>
  <p>V Pre</p>
  <span v-pre>{{ this will not be compiled alert(123) }}</span>

  <!-- <div class="div" id="myDiv">{{ alert(21) }}</div> //error -->
</template>

<script>
export default {
  name: 'VPre'
};
</script>
