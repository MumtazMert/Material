import { EmailField } from "./components/emailField.js";
import { UserField } from "./components/usernameField.js";
import { PasswordField } from "./components/passwordField.js";
import { SubmitButton } from "./components/submitButton.js";
import { setupPasswordToggle } from "./scripts/passwordToggle.js";

export const createCard = () => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
      <h2>Sign Up</h2>
      <form id="signup-form">
      ${EmailField()}
      ${UserField()}
        ${PasswordField()}
        ${SubmitButton()}
      </form>
    `;
  setupPasswordToggle(card);
  return card;
};
