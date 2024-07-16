import React, { useState } from 'react';
import './App.css';

function Button({text, onClick}) {
    const [onHover, setOnHover] = useState(false);

    const handleMouseEnter = () => {
        setOnHover(true);
    };

    const handleMouseLeave = () => {
        setOnHover(false);
    }
    
    return (
        <div>
                <button className={`Search-Button ${onHover ? 'hovered' : ''}`} type='submit' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={onClick}>{text}</button>

        </div>

    );

}

export default Button;