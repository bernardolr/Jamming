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
            <form >
                <input type="search" id="searchInput"></input>
                <div id="Search-Button" >
                    <Button text={buttonText}/>
                </div>
                
            </form>
            

        </div>

    );

}

export default SearchBar;