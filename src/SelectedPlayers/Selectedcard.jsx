import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";

const Selectedcard = ({ player, handleDeleteSelectedPlayer }) => {
    return (
        <div>
            <div  className='flex items-center gap justify-between p-5 rounded-2xl border mt-5 '>


                <div className='flex items-center gap-5'>
                    <img src={player.playerImg} alt="" className='w-auto h-16 rounded' />
                    <div>
                        <p className='flex items-center gap-2 text-lg font-bold '><FaUser></FaUser> {player.playerName}</p>

                        <p className='text-[rgba(19,19,19,0.6)]'>{player.playerType}</p>

                    </div>
                </div>
                <button onClick={() => handleDeleteSelectedPlayer(player)} className='btn color-gray-300'>
                    < MdDelete />
                </button>
            </div>
        </div>
    );
};

export default Selectedcard;