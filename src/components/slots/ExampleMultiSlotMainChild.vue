<template>
  <p>ExampleMultiSlotMainChild</p>
  <slot name="nav"></slot>
  <slot name="side_bar"></slot>
  <slot name="content"></slot>
  <slot name="footer"></slot>
</template>

<script>
export default {
  name: 'ExampleMultiSlotMainChild'
};
</script>
