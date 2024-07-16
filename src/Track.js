import React, { useState } from 'react';
import './App.css';
import Button from './Button';

function Track({text}) {
    return (
        <div className='Row'>
            <li id='Track'>{text}</li>
            <Button id='Add-Button' text={'+'}/>
        </div>

    );

}

export default Track;