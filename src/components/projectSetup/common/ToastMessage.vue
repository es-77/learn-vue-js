<template>
  <div v-if="isVisible" :class="['toast', variant]">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'ToastMessage',
  props: {
    message: String,
    variant: {
      type: String,
      default: 'info'
    }
  },
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    show() {
      this.isVisible = true;
      setTimeout(() => {
        this.isVisible = false;
      }, 3000); // Hide after 3 seconds
    }
  }
};
</script>

<style>
.toast {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  border-radius: 5px;
  color: #fff;
  z-index: 9999;
}

.info {
  background-color: #3498db;
}

.error {
  background-color: #e74c3c;
}

.success {
  background-color: #2ecc71;
}
</style>
