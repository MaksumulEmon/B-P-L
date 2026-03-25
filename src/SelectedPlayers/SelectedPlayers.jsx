// import React, { use, useState } from 'react';

// const SelectedPlayers = ({ selectedPlayers }) => {

//     console.log(SelectedPlayers, selectedPlayers);
//     return (
//         <div>

//             {
//                 selectedPlayers.map((player, index) => {


//                 })
//             }
//         </div>
//     );
// };

// export default SelectedPlayers;


import React, { useState } from 'react';

import Selectedcard from './Selectedcard';




const SelectedPlayers = ({ selectedPlayers,
    setSelectedPlayers,
    setCoin,
    coin,
}) => {
    console.log(selectedPlayers, "selectedPlayers");


    const handleDeleteSelectedPlayer = (player) => {
        console.log(selectedPlayers, "selectedPlayer");
        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != player.playerName)
        console.log(filteredPlayers, 'filterPlayers')
        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price)
    };


    return (
        <div>
            {selectedPlayers.length === 0 ?
                <div className='h-100 flex flex-col  items-center justify-center gap-2'>
                    <h2 className='font-semibold text-2xl'>No players selected yet</h2>
                    <p>Go to available tab  to select players</p>
                </div>


                : selectedPlayers.map((player, ind) => {
                    return (
                        <Selectedcard key={ind} player={player} handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}></Selectedcard>
                    );
                })}
        </div>


    );
};

export default SelectedPlayers;