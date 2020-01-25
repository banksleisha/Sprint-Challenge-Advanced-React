import React from 'react';
import styled from 'styled-components';

const playerStyle = styled.div
`
width: 90px; 
height: 90px;
background: #c21807;
`

const PlayerCard = ({ player }) => {
    return(
        <playerStyle>
            <h1>{player.name}</h1>
            <h1>{player.country}</h1>
            <h1> Number of searches: {player.searches}</h1>
        </playerStyle>
    )
}

export default PlayerCard