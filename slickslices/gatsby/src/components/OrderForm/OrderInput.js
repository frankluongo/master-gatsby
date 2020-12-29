import React from 'react';

export default function OrderInput({
  name,
  label,
  type,
  value,
  onChange,
  ...props
}) {
  return (
    <>
      <label htmlFor={name} {...props}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        id={name}
        onChange={onChange}
        {...props}
      />
    </>
  );
}

OrderInput.defaultProps = {
  type: 'text',
};
