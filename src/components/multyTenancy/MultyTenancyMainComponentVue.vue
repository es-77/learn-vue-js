<template>
  <p>multyTenancyMainComponent</p>
  <TenancyAuthLayoutVue />
</template>

<script>
import TenancyAuthLayoutVue from './layouts/TenancyAuthLayout.vue';
export default {
  name: 'MultyTenancyMainComponentVue',
  components: {
    TenancyAuthLayoutVue
  }
};
</script>