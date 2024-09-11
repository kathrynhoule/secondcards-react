import React, { useState } from 'react';
import Checkbox from './Checkbox';

function Type({ onTypeSelectionChange }) {

     const [selectedTypes, setSelectedTypes] = useState([]);

     const handleOptionChange = (event) => {
          const value = event.target.value;
          setSelectedTypes(current => {
               const newSelection = current.includes(value) ? current.filter(item => item !== value) : [...current, value];
               onTypeSelectionChange(newSelection);
               return newSelection;
          });
     };

     const options = [
          { value: 'single', label: 'Single' },
          { value: 'pack', label: 'Pack' },
          { value: 'deck', label: 'Deck' },
     ];

     return (
          <div>
               <h3>TYPE</h3>
               <Checkbox
                    name="typeOptions"
                    options={options}
                    selectedOptions={selectedTypes}
                    onChange={handleOptionChange}
               />
          </div>
        );
}
   
export default Type;