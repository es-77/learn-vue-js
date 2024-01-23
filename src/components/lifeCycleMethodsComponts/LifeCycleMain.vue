<template>
  <p>LifeCycleMain</p>
  <!-- <BeforeCreateAndCreatedLifeCycle /> -->
  <!-- <BeforeMountAndMounted /> -->
  <!-- <BeforeUpdateAndUpdated /> -->
  <BeforeUnmountAndUnmounted />
</template>

<script>
// import BeforeCreateAndCreatedLifeCycle from './BeforeCreateAndCreatedLifeCycle.vue';
// import BeforeMountAndMounted from './BeforeMountAndMounted.vue';
// import BeforeUpdateAndUpdated from './BeforeUpdateAndUpdated.vue';
import BeforeUnmountAndUnmounted from './BeforeUnmountAndUnmounted.vue';
export default {
  name: 'LifeCycleMain',
  components: {
    // BeforeCreateAndCreatedLifeCycle
    // BeforeMountAndMounted
    // BeforeUpdateAndUpdated
    BeforeUnmountAndUnmounted
  }
};
</script>
