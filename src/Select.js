import React, { useState } from 'react';
import style from 'style.css';

export default function Select() {
  let [firstlanguage, setValueofFirstLanguage] = useState('Tamil');

  let updateFirstLanguage = (event) => {
    console.log(event.target.value);
    setValueofFirstLanguage(event.target.value);
  };

  return (
    <div>
      <hr />
      Please choose your mother tongue:
      <select
        name="mothertongue"
        value={firstlanguage}
        onChange={updateFirstLanguage}
      >
        <option value="Tamil">Tamil</option>
        <option value="English">English</option>
        <option value="Malayalam">Malayalam</option>
        <option value="Telugu">Telugu</option>
      </select>
    </div>
  );
}
