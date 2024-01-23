<template>
  <p>BeforeUpdateAndUpdated</p>
  <p ref="count_p">{{ count }}</p>
  <br />
  <button @click="count = count + 1">add</button>
</template>

<script>
export default {
  name: 'BeforeUpdateAndUpdated',
  data() {
    return {
      count: 0
    };
  },
  //   wrong way

  //   beforeUpdate() {
  //     console.log('beforeUpdate', this.count);
  //   },
  //   updated() {
  //     console.log('updated', this.count);
  //   }
  // right way
  beforeUpdate() {
    console.log('beforeUpdate', this.$refs['count_p'].textContent);
  },
  updated() {
    console.log('updated', this.$refs['count_p'].textContent);
  }
};
</script>
