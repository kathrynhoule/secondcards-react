import React, { useState } from 'react';
import './SearchBar.css';
import {FaSearch} from "react-icons/fa";

function SearchBar ({products, onSearch}) {
     const [searchInput, setSearchInput] = useState('');

     const handleSearchChange = (e) => {
          setSearchInput(e.target.value);
               const filteredProducts = products.filter((product) =>
               product.name.toLowerCase().includes(e.target.value.toLowerCase())
          );
          onSearch(filteredProducts);
     };

     return (
          <div className = "inputwrap">
               <FaSearch id = "searchicon" />
               <input
               type="text"
               placeholder="Search..."
               value={searchInput}
               onChange={handleSearchChange} />
          </div>
     );
}

export default SearchBar;