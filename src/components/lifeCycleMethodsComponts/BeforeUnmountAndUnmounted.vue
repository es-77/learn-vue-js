<template>
  <p>BeforeUnmountAndUnmounted</p>
  <button @click="show = !show">toggle component</button>
  <MountedUnmounted v-if="show" />
</template>

<script>
import MountedUnmounted from './MountedUnmounted.vue';
export default {
  name: 'BeforeUnmountAndUnmounted',
  data() {
    return {
      show: true
    };
  },
  components: {
    MountedUnmounted
  }
};
</script>
