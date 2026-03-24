import React from 'react';

import navleftimg from "../../assets/logo.png"
import imgdoller from "../../assets/dollar.png"

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between bg-base-200 shadow-sm mt-2 mb-4 md:pl-7 md:pr-7">
                <div className="flex-1">
                    <img src={navleftimg} alt="" />
                </div>


                <div className=' flex items-center gap-7'>
                    <ul className='hidden md:flex gap-7  cursor-pointer '>
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                    </ul>


                    <button className='flex gap-2 mr-3 border border-[#13131390] font-bold rounded p-3'>
                        <p>0 Coin</p>
                        <img className='w-6 h-6' src={imgdoller} alt="" />
                    </button>


                </div>


            </div>
        </div>
    );
};

export default Navbar;