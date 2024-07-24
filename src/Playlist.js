import React, { useState } from 'react';
import './App.css';
import Button from './Button';
import TrackList from './Tracklist';

function Playlist({ tracks, onRemoveTrack, onSave, playlistName, setPlaylistName }) {
    const [buttonText, setButtonText] = useState('Save to Spotify');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className='Card-Header'>Playlist</h1>
                <label className='Card-Header'>Name your playlist:</label>
                <input
                    type="search"
                    id="searchInput"
                    value={playlistName}
                    placeholder='Name the Playlist' 
                    onChange={(e) => setPlaylistName(e.target.value)}
                    style={{
                        backgroundColor: '#1e1e1eff',
                        border: '2px solid #1DB954',
                        margin: "10px 0px 10px 10px"
                    }}

                    
                />
                <TrackList tracks={tracks} onRemove={onRemoveTrack} />
                <div id='Save-To-Spotify'>
                    <Button type="submit" text={buttonText} />
                </div>
            </form>
        </div>
    );
}

export default Playlist;
