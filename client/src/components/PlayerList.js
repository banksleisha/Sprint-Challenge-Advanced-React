import React from 'react';
import PlayerCard from './PlayerCard';
import styled from 'styled-components';

const AppStyling = styled.div  
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