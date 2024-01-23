<template>
  <p>RouterComponentShow</p>
  <RouterLinksComponent />
  <router-view></router-view>
</template>

<script>
import RouterLinksComponent from './RouterLinksComponent.vue';
export default {
  name: 'RouterComponentShow',
  components: {
    RouterLinksComponent
  }
};
</script>
