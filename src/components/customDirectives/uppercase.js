
const uppercase = {
    mounted: (el, binding) => {
        el.textContent = el.textContent.toUpperCase();
        console.log('el,binding', el, binding)
    }
};

// Register in main.js:
export { uppercase };
