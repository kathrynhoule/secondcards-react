import React, { useState } from 'react';
import Checkbox from './Checkbox';

function Price({ onPriceSelectionChange }) {

     const [selectedPrices, setSelectedPrices] = useState([]);

     const handleOptionChange = (event) => {
          const value = event.target.value;
          setSelectedPrices(current => {
               const newSelection = current.includes(value) ? current.filter(item => item !== value) : [...current, value];
               onPriceSelectionChange(newSelection);
               return newSelection;
          });
     };

     const options = [
          { value: '0-10', label: '$0 - $10' },
          { value: '10-20', label: '$10 - $20' },
          { value: '20-30', label: '$20 - $30' },
          { value: '30-40', label: '$30 - $40' },
          { value: '40-50', label: '$40 - $50' },
          { value: '50+', label: '$50+' },
     ];

     return (
          <div>
               <h3>PRICE</h3>
               <Checkbox
                    name="priceOptions"
                    options={options}
                    selectedOptions={selectedPrices}
                    onChange={handleOptionChange}
               />
          </div>
        );
}
   
export default Price;