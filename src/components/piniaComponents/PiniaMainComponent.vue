<template>
  <p>PiniaMainComponent</p>
  <p>count : {{ count }}</p>
  <p>double Increment : {{ doubleIncrement }}</p>

  <button @click="handleIncrement">main component handleIncrement</button>
  <button @click="handleDecrement">main component handleDeIncrement</button>

  <div class="border_component">
    <AComponent />
  </div>
  <div class="border_component">
    <BComponent />
  </div>
  <div class="border_component">
    <CComponent />
  </div>
  <div class="border_component">
    <DComponent />
  </div>
</template>


<script>
import { storeToRefs } from 'pinia';
import AComponent from './AComponent.vue';
import BComponent from './BComponent.vue';
import CComponent from './CComponent.vue';
import DComponent from './DComponent.vue';
import { useCounterStore } from './store/Counter.js';
export default {
  name: 'PiniaMainComponent',
  components: {
    AComponent,
    BComponent,
    CComponent,
    DComponent
  },
  setup() {
    const store = useCounterStore();
    const { count, doubleIncrement } = storeToRefs(store);
    const { handleDecrement, handleIncrement } = store;
    return {
      store,
      handleDecrement,
      handleIncrement,
      count,
      doubleIncrement
    };
  }
};
</script>
<style scoped>
.border_component {
  border: 1px solid black;
  margin-top: 23px;
  margin-bottom: 23px;
}
</style>