export const fontSizeDirective = {
  mounted(el, binding) {
    const fontSize = `${binding.value * el.textContent.length}px`;
    el.style.fontSize = fontSize;
  },
};

export const capitalizeDirective = {
  mounted(el) {
    el.textContent = el.textContent.toUpperCase();
  },
};
