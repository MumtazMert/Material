export const PasswordField = () => {
  return `
      <div class="input-field">
      <input type="password" id="password" required>
      <label for="password" id="plabel">Password</label>
        <button type="button" id="toggle-password">Show/Hide Password</button>
      </div>
    `;
};
