import React, { useState } from 'react';
import './App.css';

function Button({text, id, onClick}) {
    const [onHover, setOnHover] = useState(false);

    const handleMouseEnter = () => {
        setOnHover(true);
    };

    const handleMouseLeave = () => {
        setOnHover(false);
    }
    
    return (
        <div>
                <button id={id} className={`General-Button ${onHover ? 'hovered' : ''}`} type='submit' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={onClick} >{text}</button>

        </div>

    );

}

export default Button;