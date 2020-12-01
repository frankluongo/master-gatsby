import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

export default function PriceInput({ type, value, onChange, inputComponent }) {
  return (
    <div>
      <h2>
        {type.title}: {value && formatMoney(value / 100)}
      </h2>
      {type.description && <p>{type.description}</p>}
      <input
        type={type.name}
        value={value}
        onChange={onPriceChange}
        ref={inputComponent}
      />
    </div>
  );

  function onPriceChange(e) {
    onChange(createPatchFrom(e.target.value));
  }
}

function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

function formatMoney(value) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

PriceInput.focus = function () {
  this._inputElement.focus();
};
