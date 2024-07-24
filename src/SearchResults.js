import React, { useState, useEffect } from 'react';
import './App.css';
import AddTrack from './AddTrack';

function SearchResults({ searchResults, selectedTracks, onUpdateSelectedTracks, onRemoveTrack }) {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        setTracks(searchResults);
    }, [searchResults]);

    const addTrack = (id) => {
        const track = tracks.find(track => track.id === id);
        const newSelectedTracks = [...selectedTracks, track];
        onUpdateSelectedTracks(newSelectedTracks);
    };

    const isTrackSelected = (id) => {
        return selectedTracks.some(track => track.id === id);
    };

    return (
        <div>
            <h1 className='Card-Header'>Results</h1>
            <div>
                {tracks.map(({ id, name, artist }) => (
                    <AddTrack
                        key={id}
                        id={id}
                        name={name}
                        artist={artist}
                        onAdd={() => addTrack(id)}
                        onRemove={() => onRemoveTrack(id)}
                        isSelected={isTrackSelected(id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default SearchResults;
