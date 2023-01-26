import React, { useState, useId } from 'react';
import style from 'style.css';

export default function Radio() {
  let [citizen, setValueOfCitizen] = useState();

  let changeHandler = (event) => {
    console.log(event.target.value);
    setValueOfCitizen(event.target.value);
  };

  let refId = useId();

  return (
    <div>
      Choose from which country you are:
      <br />
      India:
      <input
        type="radio"
        value="Indian"
        id={`${refId}-Indian`}
        checked={citizen === 'Indian'}
        onChange={changeHandler}
      />
      <br />
      Pakistan:
      <input
        type="radio"
        value="Pakistani"
        id={`${refId}-Pakistani`}
        checked={citizen === 'Pakistani'}
        onChange={changeHandler}
      />
      <br />
      SriLanka
      <input
        type="radio"
        value="Srilankan"
        id={`${refId}-Srilankan`}
        checked={citizen === 'Srilankan'}
        onChange={changeHandler}
      />
    </div>
  );
}
