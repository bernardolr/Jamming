import React, { useState } from 'react';
import './App.css';
import Button from './Button';

function AddTrack({text, name, artist, album}) {

const [songName, setSongName] = useState('Birds of a Feather');    
const [artistName, setArtistName] = useState('Billie Eillish');
//const [albumName, setAlbumName] = useState('');

const [trackText, setTrackText] = useState('');

    const handleChangeText = () => {
        setTrackText('Text Changed!');
      };

    return (
        <div className='Row' >
            <div id='Track'>
                <div id='Track-Info'>
                    <div id='Song-Name'>{songName}</div>
                    <div>{artistName} </div>
                
                </div>
                
                <div id='Add-Button-Layout'>
                    <Button id='Add-Button' text={'+'}/>
                </div>
                </div>

            
        </div>

    );

}

export default AddTrack;