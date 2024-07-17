import React, { useState } from 'react';
import './App.css';
import Button from './Button';

function AddTrack({id, name, artist}) {

const [songName, setSongName] = useState(name);    
const [artistName, setArtistName] = useState(artist);
//const [albumName, setAlbumName] = useState('');
const [trackText, setTrackText] = useState('');

    const handleChangeText = () => {
        setTrackText('Text Changed!');
      };
    
    const handleChangeSongName = () => {
        setSongName(name);
    };

    const handleChangeArtistName = () => {
        setSongName(artist);
    };

    return (
        <div className='Row' >
            <div id='Track'>
                <div id='Track-Info'>
                    <div id='Song-Name' >{songName}</div>
                    <div >{artistName}</div>
                
                </div>
                
                <div id='Add-Button-Layout'>
                    <Button id='Add-Button' text={'+'}/>
                </div>
                </div>

            
        </div>

    );

}

export default AddTrack;