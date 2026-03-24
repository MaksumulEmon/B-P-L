import React, { use } from 'react';
import Available from '../Available/Available';

const Players = ({ playersPromise }) => {

    const players = use(playersPromise);
    // console.log(data);
    return (
        <div>
            {/* <h2>Player:{players.length}</h2> */}
             <Available players ={players}></Available>
        </div>

       
    );
};

export default Players;