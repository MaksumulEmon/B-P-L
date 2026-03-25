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


import React, {  useState } from 'react';
import { MdDelete } from "react-icons/md";


const SelectedPlayers = ({ selectedPlayers }) => {
    console.log(SelectedPlayers, "selectedPlayers");
    return (
        <div>
            {selectedPlayers.map((player, ind) => {
                return <div key={ind} className='flex items-center gap justify-between p-10 rounded-2xl border'>
                    <div>
                 <img src="" alt="" />
                 <div>
                   <h2> {player.playerName}</h2>
                   <p>{player.playerType}</p>

                 </div>
                    </div>
                    <button><MdDelete /></button>
                </div>
            })}
        </div>


    );
};

export default SelectedPlayers;