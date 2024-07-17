import React, { useState } from 'react';
import './App.css';
import AddTrack from './AddTrack';
import TrackList from './Tracklist';

function SearchResults({ onUpdateTracks }) {

    const initialTracks = {
        song1: {
            name: "Birds of a Feather",
            artist: "Billie Eilish"
        },
        song2: {
            name: "Starlight",
            artist: "Martin Garrix"

        },
        song3: {
            name: "Everything Goes On",
            artist: "Porter Robinson"

        }
    }

    const [tracks, setTracks] = useState(initialTracks);
    const [selectedTracks, setSelectedTracks] = useState([]);

    const addTrack = (id) => {
        const track = tracks[id];
        setSelectedTracks([...selectedTracks, { id, ...track }]);
    };

    const removeTrack = (id) => {
        setSelectedTracks(selectedTracks.filter(track => track.id !== id));
    };

    const isTrackSelected = (id) => {
        return selectedTracks.some(track => track.id === id);
    };


    



    return (
        <div >
            <h1 className='Card-Header'>Results</h1>
            <div>
                {Object.entries(tracks).map(([id, { name, artist }]) => (
                    <AddTrack
                        key={id}
                        id={id}
                        name={name}
                        artist={artist}
                        onAdd={() => addTrack(id)}
                        onRemove={() => removeTrack(id)}
                        isSelected={isTrackSelected(id)}
                    />
                ))}
            </div>
            <TrackList tracks={selectedTracks} onRemove={removeTrack} />

            


        </div>

    );

}

export default SearchResults;