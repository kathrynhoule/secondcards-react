import React, { useState } from 'react';
import './SearchBar.css';
import {FaSearch} from "react-icons/fa";

function SearchBar () {
     const [searchInput, setSearchInput] = useState('');

     const handleSearchChange = (e) => {
          setSearchInput(e.target.value);
        };

     return (
          <div class = "inputwrap">
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