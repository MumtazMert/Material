import React from 'react';
import { InputField } from '../scripts/inputFocus'; // adjust the path as needed

export const EmailField = () => {
  return (
    <InputField type="email" id="email" labelId="elabel" label="Email" />
  );
}