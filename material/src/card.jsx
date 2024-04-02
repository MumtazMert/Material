import { EmailField } from "./components/emailField/emailField";
import { UserField } from "./components/userNameField/usernameField";
import { PasswordField } from "./components/passwordField/passwordField";
import { SubmitButton } from "./components/submitButton/submitButton";

export function Card() {
  return (
    <div className="card">
      <h2>Sign Up</h2>
      <form id="signup-form">
        <EmailField />
        <UserField />
        <PasswordField />
        <SubmitButton />
      </form>
    </div>
  );
}