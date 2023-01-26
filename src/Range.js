import React, { useState } from 'react';
import style from 'style.css';

export default function Range() {
  let [choosenSpeed, setValueOfSpeed] = useState(25);

  let changeHandler = (event) => {
    console.log(event.target.value);
    if (event.target.value > 140) {
      alert('Speed above 140km/h is not allowed');
      return false;
    }
    setValueOfSpeed(event.target.value);
  };
  return (
    <div>
      <hr />
      <br />
      Please select your maximum speed while driving car:
      <input
        type="range"
        name="speedtracker"
        min="1"
        max="200"
        value={choosenSpeed}
        onChange={changeHandler}
      />
      <p>Selected Speed {choosenSpeed}</p>
    </div>
  );
}
