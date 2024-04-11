import React from 'react';

const RadioButtons = ({ name, options, chosenOption, onChange }) => {
  return (
    <div>
      {options.map(option => (
        <div key={option.value}>
          <input
            type="radio"
            id={option.value}
            name={name}
            value={option.value}
            checked={chosenOption === option.value}
            onChange={onChange}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioButtons;