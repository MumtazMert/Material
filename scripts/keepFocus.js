export const keepFocus = (selector) => {
  const inputs = document.querySelectorAll(selector);

  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      if (this.value) {
      this.classList.add('filled');
      } else {
      this.classList.remove('filled');
      }
    });
  });
};