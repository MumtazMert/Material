import React, { useState } from 'react';

export const InputField = ({ type, id, labelId, label }) => {
  const [isFilled, setIsFilled] = useState(false);

  const handleInput = (event) => {
    setIsFilled(event.target.value !== '');
  };

  return (
    <div className="input-field">
      <input type={type} id={id} required onChange={handleInput} onFocus={handleInput} onBlur={handleInput} />
      <label htmlFor={id} id={labelId} className={isFilled ? 'filled' : ''}>{label}</label>
    </div>
  );
}