<template>
  <p>BeforeCreateAndCreatedLifeCycle</p>
  <p>my name is : {{ name }}</p>
</template>

<script>
export default {
  name: 'BeforeCreateAndCreatedLifeCycle',
  data() {
    return {
      name: 'Emmanuel'
    };
  },
  beforeCreate() {
    alert(this.name);
  },
  created() {
    alert(this.name);
  }
};
</script>
