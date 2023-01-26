import React, { useState } from 'react';
import style from 'style.css';

export default function ColorPicker() {
  let [greencentric, setValueForColorPicker] = useState('green');
  let changeHandler = (event) => {
    console.log(event.target.value);
    setValueForColorPicker(event.target.value);
  };

  return (
    <div>
      <br />
      <hr />
      Please choose Green Based Colors:
      <input
        type="color"
        name="greenpicker"
        value={greencentric}
        role="colorpicker"
        onChange={changeHandler}
      />
    </div>
  );
}
