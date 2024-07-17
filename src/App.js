
import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';

function App() {

  const [tracks, setTracks] = useState([]);

    // Function to update tracks, passed to SearchResults
    const updateTracks = (newTracks) => {
        setTracks(newTracks);
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
          <SearchResults onUpdateTracks={updateTracks}/> 
        </div>
        <div className='Card'> 
          <Playlist tracks={tracks}/>
        </div>
      </div>
      
      
      
    </div>
  );
}

export default App;
