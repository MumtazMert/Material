import React from 'react';
import { InputField } from './inputFocus'; // adjust the path as needed

export const UserField = () => {
  return (
    <InputField type="text" id="username" labelId="ulabel" label="Username" />
  );
}