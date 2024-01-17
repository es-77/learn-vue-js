<template>
  <p>life cycle method check console</p>
  {{ text }}
  <input type="text" name="text" id="text" placeholder="Enter some text" v-model="text" />
</template>
<script>
export default {
  name: 'LifeCycleMethod',
  data() {
    return { text: 'hello' };
  },
  beforeCreate() {
    console.log('beforeCreate', 'called');
  },
  created() {
    console.log('Created', 'called');
  },
  beforeMount() {
    console.log('onBeforeMount', 'called');
  },
  mounted() {
    console.log('mounted', 'called');
  },
  beforeUpdate() {
    console.log('beforeUpdate', 'called');
  },
  updated() {
    console.log('updated', 'called');
  }
};
</script>