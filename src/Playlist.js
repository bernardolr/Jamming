import React, { useState } from 'react';
import './App.css';
import Button from './Button';
import TrackList from './Tracklist';


function Playlist({tracks, onRemoveTrack}) {
    const [buttonText, setButtonText] = useState('Save to Spotify');

    const handleChangeText = () => {
        setButtonText('Text Changed!');
      };
    

    return (
        <div >
                <h1 className='Card-Header'>Playlist</h1>
                
                    <TrackList tracks={tracks} onRemove={onRemoveTrack}/>

                <div id='Save-To-Spotify'>
                    <Button  text={buttonText}/>
                </div>
        </div>

    );

}

export default Playlist;