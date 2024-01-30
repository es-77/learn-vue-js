<template>
  <p>VMemo</p>
  <div class="memo" v-mome="[likeCounts]">
    <p>likeCounts : {{ likeCounts }}</p>
    <p>disLikeCounts : {{ disLikeCounts }}</p>
  </div>
  <!-- <p>uppdate {{ updateCount }}</p> -->
  <button @click="likeCounts++">like Button {{ likeCounts }}</button>
  <button @click="disLikeCounts++">disLike Button {{ disLikeCounts }}</button>
  <button @click="comentCounts++">comentCounts Button {{ comentCounts }}</button>
  <!-- {{ onUpdateCount() }} -->
</template>

<script>
export default {
  name: 'VMemo',
  data() {
    return {
      likeCounts: 1,
      disLikeCounts: 1,
      comentCounts: 1,
      updateCount: 1
    };
  },
  methods: {
    onUpdateCount() {
      this.updateCount++;
    }
  }
};
</script>