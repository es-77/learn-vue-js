<template>
  <p ref="MountedUnmounted_component">MountedUnmounted</p>
</template>

<script>
export default {
  name: 'MountedUnmounted',
  beforeUnmount() {
    console.log('beforeUnmount', this.$refs['MountedUnmounted_component']);
  },
  unmounted() {
    console.log('unmounted', this.$refs['MountedUnmounted_component']);
  }
};
</script>
