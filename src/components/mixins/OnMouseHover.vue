<template>
  <p @mouseover="increment">{{ count }} OnMouseHover</p>
</template>

<script>
import MixinsCountFunction from './MixinsCountFunction.js';
export default {
  name: 'OnMouseHover',
  mixins: [MixinsCountFunction]
};
</script>
