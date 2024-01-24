<template>
  <p>AComponent</p>
  <p>A Count Value : {{ count }}</p>
  <p>A Count Value + 2 : {{ doubleIncrement }}</p>
  <button @click="handleIncrement">A component Increment</button>
  <button @click="handleDecrement">A component Decrement</button>
</template>

<script>
import { storeToRefs } from 'pinia';
import { useCounterStore } from './store/Counter';

export default {
  name: 'AComponent',
  setup() {
    const store = useCounterStore();
    const { count, doubleIncrement } = storeToRefs(store);
    const { handleDecrement, handleIncrement } = store;
    return {
      store,
      count,
      doubleIncrement,
      handleDecrement,
      handleIncrement
    };
  }
};
</script>