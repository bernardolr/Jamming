import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import { Spotify } from './util/Spotify';

function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedTracks, setSelectedTracks] = useState([]);

    const updateSelectedTracks = (newSelectedTracks) => {
        setSelectedTracks(newSelectedTracks);
    };

    const removeTrack = (id) => {
        const newSelectedTracks = selectedTracks.filter(track => track.id !== id);
        setSelectedTracks(newSelectedTracks);
    };

    const savePlaylist = () => {
        const trackURIs = selectedTracks.map((t) => t.uri);
        // Add logic to save the playlist
    };

    const search = (term) => {
        Spotify.search(term).then(result => setSearchResults(result));
        console.log(term);
    };

    return (
        <div className='App'>
            <header className="App-Header">
                <nav>Spotify Playlist</nav>
            </header>
            <div className='Search-Bar'>
                <SearchBar onSearch={search} />
            </div>
            <div className='Row'>
                <div className='Card'>
                    <SearchResults
                        searchResults={searchResults}
                        selectedTracks={selectedTracks}
                        onUpdateSelectedTracks={updateSelectedTracks}
                        onRemoveTrack={removeTrack}
                    />
                </div>
                <div className='Card'>
                    <Playlist
                        tracks={selectedTracks}
                        onRemoveTrack={removeTrack}
                        onSave={savePlaylist}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
