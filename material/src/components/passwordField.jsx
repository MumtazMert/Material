import React, { useState } from 'react';
import { InputField } from '../scripts/inputFocus';
import { PasswordToggle } from '../scripts/passwordToggle';

export const PasswordField = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <InputField type={passwordVisible ? "text" : "password"} id="password" labelId="plabel" label="Password" />
      <PasswordToggle onClick={togglePasswordVisibility} passwordVisible={passwordVisible} />
    </div>
  );
}