import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';

function App() {

  const [tracks, setTracks] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);

    // Function to update tracks, passed to SearchResults
    const updateTracks = (newTracks) => {
        setTracks(newTracks);
    };

    const updateSelectedTracks = (newSelectedTracks) => {
      setSelectedTracks(newSelectedTracks);
    }

    const removeTrack = (id) => {
      const newSelectedTracks = selectedTracks.filter(track => track.id !== id);
      setSelectedTracks(newSelectedTracks);
    };
    
  return (
    <div className='App'>
      <header className="App-Header">
        <nav>Spotify Playlist</nav>
        
      </header>
      <div  className='Search-Bar'>
      <SearchBar/>
      </div>
      <div className='Row'>
        <div className='Card'> 

          <SearchResults onUpdateTracks={updateTracks} selectedTracks={selectedTracks} onUpdateSelectedTracks={updateSelectedTracks} onRemoveTrack={removeTrack} /> 

        </div>
        <div className='Card'> 
          <Playlist tracks={selectedTracks} onRemoveTrack={removeTrack}/>
        </div>
      </div>
      
      
      
    </div>
  );
}

export default App;
