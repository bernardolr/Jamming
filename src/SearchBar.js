import React, { useState } from 'react';
import './App.css';
import Button from './Button';

function SearchBar() {
    const [buttonText, setButtonText] = useState('Search');

    const handleChangeText = () => {
        setButtonText('Text Changed!');
      };
    
    return (
        <div>
            <form>
                <input type="search" id="searchInput"></input>
                <Button text={buttonText}/>
            </form>

        </div>

    );

}

export default SearchBar;