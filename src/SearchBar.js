import React, { useState } from 'react';
import './App.css';

function SearchBar() {
    const [onHover, setOnHover] = useState(false);

    const handleMouseEnter = () => {
        setOnHover(true);
    };

    const handleMouseLeave = () => {
        setOnHover(false);
    }
    
    return (
        <div>
            <form>
                <label> Search: </label>
                <input type="search" id="searchInput"></input>
                <button className={`Search-Button ${onHover ? 'hovered' : ''}`} type='submit' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Search</button>
            </form>

        </div>

    );

}

export default SearchBar;