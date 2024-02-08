<template>
  <p>OnClickCount</p>
  <button @click="increment">{{ count }}</button>
</template>

<script>
import MixinsCountFunction from './MixinsCountFunction.js';
export default {
  name: 'OnClickCount',
  mixins: [MixinsCountFunction]
};
</script>
