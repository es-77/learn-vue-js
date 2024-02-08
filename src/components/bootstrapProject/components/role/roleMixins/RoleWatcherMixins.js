export default {
    watch: {
        role: {
            handler(newVal) {
                if (newVal) {
                    this.id = newVal.id || 0;
                    this.name = newVal.name || '';
                }
            },
            immediate: true // Trigger the handler immediately on component creation
        }
    }
}