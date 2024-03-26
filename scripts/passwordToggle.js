export const setupPasswordToggle = (card) => {
    const passwordToggle = card.querySelector('#toggle-password');
    passwordToggle.addEventListener('click', () => {
      const passwordInput = card.querySelector('#password');
      passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    });
  };