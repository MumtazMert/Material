import { EmailField } from "./components/emailField";
import { UserField } from "./components/usernameField";
import { PasswordField } from "./components/passwordField";
import { SubmitButton } from "./components/submitButton";

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