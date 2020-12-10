import { useState } from 'react';

export function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  return { values, updateValues };

  function updateValues(e) {
    let { value } = e.target;
    if (e.target.type === 'number') value = parseInt(e.target.value);
    setValues({
      ...values,
      [e.target.name]: value,
    });
  }
}
