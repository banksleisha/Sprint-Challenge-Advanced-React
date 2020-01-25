import React from 'react';
import PlayerCard from './PlayerCard';
import useDarkMode from '../DarkMode/useDarkMode';
import styled from 'styled-components';

const appStyling = styled.div  
`
width: 90px;
height: 90px;
background: #c21807;

`

const PlayerList = ({ players }) => {
    
    
    return (
        <>
        
        <div>

            {players.map(player => (
                <PlayerCard key={player.id} player ={player} />
            ))}
            

        </div>
        

</>



    )
}

export default PlayerList