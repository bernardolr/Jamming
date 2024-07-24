import React, { useState } from 'react';
import './App.css';
import Button from './Button';
import TrackList from './Tracklist';


function Playlist({tracks, onRemoveTrack}) {
    const [PlaylistName, setPlaylistName] = useState();
    const [buttonText, setButtonText] = useState('Save to Spotify');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submitted with the Playlist Name:', PlaylistName);
        console.log()
        // Here you can handle the form submission, e.g., send the data to an API

      };
    

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <h1 className='Card-Header'>Playlist</h1>
                <label className='Card-Header'>Name your playlist:</label>
                <input 
                    type="search" 
                    id="searchInput" 
                    name="search"
                    value={PlaylistName}
                    onChange={(e) => setPlaylistName(e.target.value)}
                    style={{ 
                        backgroundColor: '#1e1e1eff', 
                        border: '2px solid #1DB954', 
                        margin: "10px 0px 10px 10px"  
                    }}>
                </input>
                
                <TrackList tracks={tracks} onRemove={onRemoveTrack}/>

                <div id='Save-To-Spotify'>
                    <Button type={"submit"} text={buttonText} onClick={tracks.onSave}/>
                </div>
            </form>
        </div>

    );

}

export default Playlist;