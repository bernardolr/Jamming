import React, { useState } from 'react';
import './App.css';
import Button from './Button';

function SearchBar({ onSearch }) {
    const [buttonText, setButtonText] = useState('Search');
    const [term, setTerm] = useState("");

    const handleButtonClick = (event) => {
        event.preventDefault();
        onSearch(term);
    };

    function handleTermChange({ target }) {
        setTerm(target.value);
    }

    return (
        <div>
            <form onSubmit={handleButtonClick}>
                <input 
                    type="search" 
                    id="searchInput" 
                    placeholder='Enter a Song, or Artist' 
                    onChange={handleTermChange}
                />
                <div id="Search-Button">
                    <Button text={buttonText} onClick={handleButtonClick} />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
