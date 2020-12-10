import React from 'react';

export default function OrderInput({ name, label, type, value, onChange }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        id={name}
        onChange={onChange}
      />
    </>
  );
}

OrderInput.defaultProps = {
  type: 'text',
};
