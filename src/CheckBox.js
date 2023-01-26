import React, { useState } from 'react';
import style from 'style.css';

export default function CheckBox() {
  let [isAvailable, setAvailability] = useState(false);
  let skillSetList = {
    Psychology: false,
    Economics: false,
    Intuition: false,
    ReadingBooks: false,
  };

  let [skillSet, selectedSkillSet] = useState(skillSetList);
  let changeHandler = () => {
    setAvailability(!isAvailable);
  };
  let skillUpdateHandler = (event) => {
    console.log(event.target.value);

    let newSkillSetUsingSpreadMethod = {
      ...skillSet,
      [event.target.value]: !skillSet[event.target.value],
    };
    selectedSkillSet(newSkillSetUsingSpreadMethod);
  };

  return (
    <div>
      Are you Available?
      <input
        type="checkbox"
        name="Availability-Status"
        value="Off"
        checked={isAvailable}
        onChange={changeHandler}
      />
      <br />
      <hr />
      Skills you wish to learn this year 2023
      <br />
      Psychology{' '}
      <input
        type="checkbox"
        name="skill"
        value="Psychology"
        checked={skillSet.Psychology === true}
        onChange={skillUpdateHandler}
      />
      <br />
      Economics:
      <input
        type="checkbox"
        name="skill"
        value="Economics"
        checked={skillSet.Economics === true}
        onChange={skillUpdateHandler}
      />
      <br />
      Intuition:
      <input
        type="checkbox"
        name="skill"
        value="Intuition"
        checked={skillSet.Intuition === true}
        onChange={skillUpdateHandler}
      />
      <br />
      ReadingBooks:
      <input
        type="checkbox"
        name="skill"
        value="ReadingBooks"
        checked={skillSet.ReadingBooks === true}
        onChange={skillUpdateHandler}
      />
    </div>
  );
}
