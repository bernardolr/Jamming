import React, { useState } from 'react';
import './App.css';

function TrackList({ tracks, onRemove}) {
    return (
        <div>
            <h2>Selected Tracks</h2>
            <div>
                {tracks.map((track) => (
                    <div key={track.id} className='Row'>
                        <div id='Track'>
                            <div id='Track-Info'>
                                <div id='Song-Name'>{track.name}</div>
                                <div>{track.artist}</div>
                            </div>
                            <div id='Remove-Button-Layout'>
                                <button id='Remove-Button' onClick={() => onRemove(track.id)}>-</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );

}

export default TrackList;