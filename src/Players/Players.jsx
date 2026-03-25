import React, { use, useState } from 'react';
import Available from '../Available/Available';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise, setCoin, coin }) => {

    const players = use(playersPromise);
    // console.log(data);
    const [selectedType, setSelectedType] = useState("available");
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    return (
        <div className='container mx-auto mt-5'>
            {/* <h2>Player:{players.length}</h2> */}

            <div className='flex justify-between gap-4 items-center'>


                {selectedType === "available" ? <h2 className='text-3xl font-bold ml-4'>Avaiable Players</h2> : <h2 className='text-3xl font-bold '>Selected Players ({selectedPlayers.length}/{players.length})</h2>}



                <div className='flex '>
                    <button onClick={() => setSelectedType("available")}
                        className={`btn  ${selectedType === "available" ? "bg-[#E7FE29]" : ""}  rounded-r-none font-bold rounded-l-xl`}>
                        Available</button>


                    <button onClick={() => setSelectedType("selected")}
                        className={`btn mr-4 ${selectedType === "selected" ? "bg-[#E7FE29]" : ""}  rounded-l-none font-bold rounded-r-xl`}>
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>
            {selectedType === "available" ?
                <Available players={players}
                    setCoin={setCoin}
                    coin={coin}
                    setSelectedPlayers={setSelectedPlayers}
                    selectedPlayers={selectedPlayers} ></Available>
                : <SelectedPlayers selectedPlayers={selectedPlayers}setCoin={setCoin}
                    coin={coin}  setSelectedPlayers={setSelectedPlayers}></SelectedPlayers>}
        </div>


    );
};

export default Players;