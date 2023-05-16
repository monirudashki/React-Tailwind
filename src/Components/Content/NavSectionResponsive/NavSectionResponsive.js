import React from 'react';

import contentImg from './images/communityImg.jpg';

function NavSectionResponsive() {
    return (
        <section className='xl:hidden w-full h-[742px] py-[10px] px-[10px]'>
            <div className='w-full h-[80%] bg-mainOrangeColor'>
                <div className='w-full h-[76px] flex justify-between items-center
                pt-[15px] pb-[25px] px-3'>
                    <h4 className='text-2xl font-roboto font-bold text-mainWhiteColor'>
                        Community
                    </h4>
                    <button
                        className='w-[10%] h-[80%] flex justify-center items-center bg-mainWhiteColor'
                        type='button'>
                        <div className='w-4 h-[2px] bg-black'></div>
                    </button>
                </div>

                <p className='font-monserat pt-0 px-[12px] pb-[25px] text-mainWhiteColor text-left'>
                    From learning about volunteering in your community
                    to information about local events,
                    Local Consumer Reach is your guide to
                    finding out what’s happening where you live and how you can help out.v
                </p>

                <div className='w-full h-[55%] flex justify-center items-center pt-0 px-3 pb-6'>
                    <img className='w-full h-full' src={contentImg} alt="community" />
                </div>
            </div>

            <div className='w-full h-[76px] flex justify-between items-center py-4 px-3'>
                <h4 className='text-2xl font-roboto font-bold text-black'>
                    Local Events
                </h4>
                <button className='bg-transparent border-none text-[32px]' type='button'>+</button>
            </div>

            <div className='w-full h-[50px] flex justify-between items-center py-4 px-3 pb-0 
            border-b-[2px] border-solid border-[#c9c9c9]'>
                <h4 className='text-2xl font-roboto font-bold text-black'>
                    Support
                </h4>
                <button className='bg-transparent border-none text-[32px]' type='button'>+</button>
            </div>
        </section>
    )
}

export default NavSectionResponsive
