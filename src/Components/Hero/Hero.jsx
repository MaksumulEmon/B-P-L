import React from 'react';
import bgshadow from "../../assets/bgshadow.png"
import heroimg from "../../assets/banner-main.png"
const Hero = () => {
    return (
        <div className='container mx-auto p-12 rounded-xl '
            style={{
                background: `url(${bgshadow})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundColor: 'black',

            }}>
            <div className='flex flex-col gap-4 items-center justify-center h-full text-white'>
                <img src={heroimg} height={200} width={250} alt="" />
                <h1 className='font-bold text-4xl items-center '>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='font-light'>Beyond Boundaries Beyond Limits</p>
                <div className='p-2 border-2 rounded-xl border-[#E7FE29]'>
                    <button className="btn bg-[#E7FE29] border-0">Claim Free Credit</button>
                </div>

            </div>
        </div >
    );
};

export default Hero;