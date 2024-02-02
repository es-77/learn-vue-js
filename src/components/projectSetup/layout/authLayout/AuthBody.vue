<template>
  <p>AuthBody</p>
  <div class="main">
    <div class="child"><AuthTopBarVue /></div>
    <div class="child"><router-view></router-view></div>
    <div class="child"><AuthFooterVue /></div>
  </div>
</template>

<script>
import AuthFooterVue from './AuthFooter.vue';
import AuthTopBarVue from './AuthTopBar.vue';
export default {
  name: 'AuthBody',
  components: {
    AuthTopBarVue,
    AuthFooterVue
  }
};
</script>