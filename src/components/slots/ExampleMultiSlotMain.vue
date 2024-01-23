<template>
  <p>ExampleMultiSlotMain</p>
  <ExampleMultiSlotMainChild>
    <template v-slot:nav>
      <p>nav bar here</p>
    </template>
    <template v-slot:side_bar>
      <p>side bar here</p>
    </template>
    <template v-slot:content>
      <p>content here</p>
    </template>
    <template v-slot:footer>
      <p>footer here</p>
    </template>
  </ExampleMultiSlotMainChild>
</template>

<script>
import ExampleMultiSlotMainChild from './ExampleMultiSlotMainChild.vue';
export default {
  name: 'ExampleMultiSlotMain',
  components: {
    ExampleMultiSlotMainChild
  }
};
</script>
