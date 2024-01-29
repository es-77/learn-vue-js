// import Vue from 'vue';

export default {
    inserted(el, binding) {
        alert(123)
        console.log('element, binding', el, binding);
        // Implement your directive's logic here
    },
};
