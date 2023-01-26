import React, { useState } from 'react';
import './style.css';

export default function TextBox() {
  const [textBoxValue, setTextBoxValue] = useState('Good Name Please');
  let changeHandler = (event) => {
    console.log(event.target.value);
    setTextBoxValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={textBoxValue}
        /* onChange={(event) => changeHandler(event)}*/
        onChange={changeHandler}
      />
    </div>
  );
}
