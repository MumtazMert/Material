import React from 'react';

export const PasswordToggle = ({ onClick, passwordVisible }) => {
  return (
    <button onClick={onClick}>
      {passwordVisible ? 'Hide password' : 'Show password'}
    </button>
  );
}