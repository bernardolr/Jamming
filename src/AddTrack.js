import React, { useState } from 'react';
import './App.css';
import Button from './Button';

function AddTrack({id, name, artist, onAdd, onRemove, isSelected}) {

// const [songName, setSongName] = useState(name);    
// const [artistName, setArtistName] = useState(artist);
// //const [albumName, setAlbumName] = useState('');
// const [trackText, setTrackText] = useState('');

//     const handleChangeText = () => {
//         setTrackText('Text Changed!');
//       };
    
//     const handleChangeSongName = () => {
//         setSongName(name);
//     };

//     const handleChangeArtistName = () => {
//         setSongName(artist);
//     };

    const handleClick = () => {
        if (isSelected) {
            onRemove();
        } else {
            onAdd();
        }
    };

    return (
        <div className='Row' >
            <div id='Track'>
                <div id='Track-Info'>
                    <div id='Song-Name' >{name}</div>
                    <div >{artist}</div>
                
                </div>
                
                <div id='Add-Button-Layout'>
                    <Button id='Add-Button' text={'+'} onClick={handleClick}/>
                </div>
                </div>

            
        </div>

    );

}

export default AddTrack;