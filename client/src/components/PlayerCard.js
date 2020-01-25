import React from 'react';

const PlayerCard = ({ player }) => {
    return(
        <div>
            <h1>{player.name}</h1>
            <h1>{player.country}</h1>
            <h1> Number of searches: {player.searches}</h1>
        </div>
    )
}

export default PlayerCard