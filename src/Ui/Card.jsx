import React, { use, useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';


const Card = ({ player, setCoin, coin ,setSelectedPlayers,selectedPlayers}) => {

    const [isSelected, setSelected] = useState(false);
    console.log(player.price);
    const handleChoosePlayer = () => {

        let newCoin = coin - player.price;
        if (newCoin >= 0) {
            setCoin(coin - player.price)
        } else {
            alert("Not enoght coin to purhase this player")
            return;
        }


        alert(`${player.playerName} is selectd`)
        setSelected(true);

        setSelectedPlayers([...selectedPlayers,player]);


        // setCoin(coin - player.price )
    };

    return (


        <div className="card bg-base-100  shadow-sm p-4">
            <figure>
                <img className='rounded'
                    src={player.playerImg}
                    alt="Shoes" />
            </figure>
            {/* ------------------------------------------------ */}
            <div className="flex items-center pt-1 gap-2">
                <FaUser></FaUser>
                <h1 className='text-xl font-semibold'>{player.playerName}</h1>
            </div>

            {/* --------------------------------------------------- */}
            <div className='flex justify-between items-center'>
                <div className='flex gap-3 items-center'>
                    <FaFlag></FaFlag>
                    <p>{player.playerCountry}</p>
                </div>

                <button className=" pt-2 pb-2 pl-4 pr-4 bg-[#1313130D] rounded">All-Rounder</button>
            </div>

            <hr className='border border-[#1313131A] mt-4' />


            <div className='space-y-3'>
                <h1 className='font-bold pt-2'>Rating: {player.rating}</h1>

                <div className='flex justify-between'>
                    <p className='font-semibold text-[#131313]'>{player.battingStyle}</p>
                    <p className='text-[#131313B3]'>{player.bowlingStyle}</p>
                </div>

                {/* ---------------------------------------- */}

                <div className='flex justify-between items-center'>
                    <p className='font-semibold text-[#131313]'>{player.price}</p>
                    <button onClick={handleChoosePlayer}
                        disabled={isSelected ? true : false}
                        className='btn
                    text-[#131313B3] p-1 pl-2 pr-2 rounded border-4 border-[#E7FE29]
                     active:bg-gray-700 active:scale-95 transition-all duration-150'>
                        {isSelected === true ? "Selected" : "Choose Player"}</button>
                </div>
            </div>
        </div>






    );
};

export default Card;