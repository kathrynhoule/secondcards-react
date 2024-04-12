import React from 'react';
import './Checkbox.css';

const Checkbox = ({ name, options, chosenOption, onChange }) => {
  return (
    <div>
      {options.map(option => (
        <div key={option.value}>
          <input
            type="checkbox"
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

export default Checkbox;