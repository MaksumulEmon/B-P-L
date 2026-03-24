import React, { use, useState } from 'react';
import Available from '../Available/Available';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise }) => {

    const players = use(playersPromise);
    // console.log(data);
    const [selectedType, setSelectedType] = useState("available");
    return (
        <div className='container mx-auto mt-5'>
            {/* <h2>Player:{players.length}</h2> */}

            <div className='flex justify-between gap-4 items-center'>
               {selectedType ==="available" ? <h2 className='text-3xl font-bold'>Avaiable Players</h2> : <h2 className='text-3xl font-bold'>Selected Players</h2>}

                <div className='flex '>
                    <button onClick={() => setSelectedType("available")} 
                    className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""}  rounded-r-none font-bold rounded-l-xl`}>
                        Available</button>


                    <button onClick={() => setSelectedType("selected")} 
                     className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""}  rounded-l-none font-bold rounded-r-xl`}>
                        Selected(0  )
                        </button>
                </div>
            </div>
            {selectedType ==="available" ?  <Available players={players}></Available> : <SelectedPlayers></SelectedPlayers>} 
        </div>


    );
};

export default Players;