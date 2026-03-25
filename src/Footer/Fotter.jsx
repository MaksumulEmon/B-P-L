import React from 'react';
import Footerbanner from "../assets/bgshadow.png";
import Logofotter from ".././assets/logo-footer.png"

const Fotter = () => {
    return (
        <div className='bg-[#06091A] py-12'>

            <div className='w-full md:w-[50%] mx-auto'>

                <div className='relative p-8 md:p-12 rounded-xl h-[350px] overflow-hidden'>

                    {/* Background Image */}
                    <div
                        className='absolute inset-0'
                        style={{
                            background: `url(${Footerbanner})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    ></div>

                    {/* Overlay */}
                    <div className='absolute inset-0 bg-white'></div>

                    {/* Content */}
                    <div className='relative z-10 flex flex-col gap-4 items-center justify-center h-full text-center'>

                        <h1 className='font-bold text-2xl md:text-4xl text-black'>
                            Subscribe to our Newsletter
                        </h1>

                        <p className='text-gray-700'>
                            Get the latest updates and news right in your inbox!
                        </p>

                        <div className='flex flex-col md:flex-row gap-3'>
                            <input
                                className="placeholder:text-gray-500 w-full md:w-80 border border-gray-300
                                py-3 px-5 rounded-2xl"
                                placeholder="Enter your email"
                                type="text"
                            />

                            <button className='bg-[#E7FE29] px-5 py-3 rounded text-black font-bold cursor-pointer'>
                                Subscribe
                            </button>
                        </div>

                    </div>

                </div>

            </div>






            {/* Second part */}

            <div className='container mx-auto mb-20'>


                <div className='flex  justify-center items-center mt-10'>

                    <img src={Logofotter} alt="" />
                </div>


                {/* Information Section */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-30 mt-8 '>

                    <div className='max-w-2xs'>

                        <h1 className='text-lg text-white '>About Us</h1>
                        <p className='text-[#FFFFFF99]'>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <h1 className='text-lg text-white '>Quick Links</h1>

                        <div className='text-[#FFFFFF99] mt-2'>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Home</li>
                            <li>Home</li>
                        </div>
                    </div>



                    <div className='space-y-2'>
                        <h1 className='text-lg text-white '>Subscribe</h1>
                        <p className='max-w-2xs text-[#FFFFFF99]'>Subscribe to our newsletter for the latest updates.</p>

                        <div className='flex flex-col md:flex-row gap-2'>
                            <input
                                className="placeholder:text-gray-500 bg-white w-full md:w-80 border border-gray-300
                                py-3 px-5 rounded"
                                placeholder="Enter your email"
                                type="text"
                            />

                            <button className='bg-[#E7FE29] px-5 py-3 rounded text-black font-bold cursor-pointer'>
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>

            </div>


            {/* Hr Section */}
            <hr className='border-2' />

            <div className='flex flex-col items-center pt-10'>
                <small className='text-[white]/60'>@2026 Your Company All Rights Reserved.</small>
            </div>


        </div>
    );
};

export default Fotter;