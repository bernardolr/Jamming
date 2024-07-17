import React, { useState } from 'react';
import './App.css';
import AddTrack from './AddTrack';



function SearchResults() {

    const object = {
        song1: {
            name: "Birds of a Feather",
            artist: "Billie Eilish"
        },
        song2: {
            name: "Starlight",
            artist: "Martin Garrix"

        }
    }

    const tracks = [];

    Object.entries(object).forEach(([id, { name, artist }]) => {
        tracks.push(<AddTrack key={id} id={id} name={name} artist={artist} />);
    });



    return (
        <div >
            <h1 className='Card-Header'>Results</h1>
            <div>
                {tracks}
            </div>
            


        </div>

    );

}

export default SearchResults;