import React, { useState } from 'react';
import './App.css';
import Track from './Track';

function SearchResults() {
    const [trackText, setTrackText] = useState('Hey');

    const handleChangeText = () => {
        setTrackText('Text Changed!');
      };

    return (
        <div >
            <h1 className='Card-Header'>Results</h1>
            <Track text={trackText}/>
            


        </div>

    );

}

export default SearchResults;