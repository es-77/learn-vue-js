<template>
  <p>SlotsBasicExample</p>
  <SlotsBasicExampleChild>
    <img src="https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg" alt="image" />
    <h1>hello emmanuel saleem</h1>
  </SlotsBasicExampleChild>
</template>

<script>
import SlotsBasicExampleChild from './SlotsBasicExampleChild.vue';
export default {
  name: 'SlotsBasicExample',
  components: {
    SlotsBasicExampleChild
  }
};
</script>