import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const Available = ({ players }) => {
    console.log(players, "players");

    return (

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 container mx-auto'>

            {
                players.map(player => {
                    console.log(player);
                    return <div className='container mx-auto'>
                        <div className="card bg-base-100  shadow-sm p-4">
                            <figure>
                                <img className='rounded'
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
                                    <p>India</p>
                                </div>

                                <button className=" pt-2 pb-2 pl-4 pr-4 bg-[#1313130D] rounded">All-Rounder</button>
                            </div>

                            <hr className='border border-[#1313131A] mt-4' />


                            <div className='space-y-3'>
                                <h1 className='font-bold'>Rating</h1>

                                <div className='flex justify-between'>
                                    <p className='font-semibold text-[#131313]'>Left-Hand-Bat</p>
                                    <p className='text-[#131313B3]'>Left-Hand-Bat</p>
                                </div>

                                {/* ---------------------------------------- */}

                                <div className='flex justify-between items-center'>
                                    <p className='font-semibold text-[#131313]'>Price: $1500000</p>
                                    <button className='text-[#131313B3] p-1 pl-2 pr-2 rounded border-4 border-[#E7FE29]
                        active:bg-gray-700 active:scale-95 transition-all duration-150'>Choose Player</button>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }


        </div>
    );
};

export default Available;