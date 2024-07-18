import React, { useState } from 'react';
import './App.css';
import Button from './Button';


function TrackList({ tracks, onRemove}) {
    return (
        <div>
            
            <div>
                {tracks.map((track) => (
                    <div key={track.id} className='Row'>
                        <div id='Track'>
                            <div id='Track-Info'>
                                <div id='Song-Name'>{track.name}</div>
                                <div>{track.artist}</div>
                            </div>
                            <div id='Remove-Button-Layout'>
                                <Button text={'-'} id='Delete-Button' onClick={() => onRemove(track.id)}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );

}

export default TrackList;