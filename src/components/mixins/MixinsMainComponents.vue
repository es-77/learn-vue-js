<template>
  <p>MixinsMainComponents</p>
  <OnClickCountVue />
  <OnMouseHoverVue />
</template>

<script>
import OnClickCountVue from './OnClickCount.vue';
import OnMouseHoverVue from './OnMouseHover.vue';
export default {
  name: 'MixinsMainComponents',
  components: {
    OnClickCountVue,
    OnMouseHoverVue
  }
};
</script>
