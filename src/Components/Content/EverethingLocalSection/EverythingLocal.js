import React, { memo } from 'react';

import curlyGirl from './images/curlGirlImage.png';

function EverythingLocal() {
    return (
        <section className='w-full h-[85vh] p-3 mt-5 flex justify-center items-center xl:h-[75vh] xl:py-20 xl:px-[150px]'>
            <article className='w-full h-full flex justify-center items-center flex-col-reverse bg-mainOrangeColor relative xl:flex-row'>
                <div className='w-full h-[40%] flex justify-center items-center xl:h-[100%] xl:w-[50%]'>
                    <img className='w-full h-full' src={curlyGirl} alt="curlyGirl" />
                </div>

                <div
                    className='hidden xl:block xl:w-[50px] xl:h-[50px] xl:bg-mainOrangeColor absolute 
                left-[50%] top-[30%] translate-x-[-50%] translate-y-[-30%] rotate-[45deg]'>
                </div>

                <div
                    className='w-full h-[60%] text-mainWhiteColor relative font-roboto xl:w-[50%] xl:h-full'>
                    <div className='w-full h-full xl:w-[70%] xl:h-[70%] xl:ml-[60px] xl:mt-[70px]'>
                        <h2
                            className='text-3xl my-10 text-center xl:text-4xl xl:text-left xl:m-0 xl:mb-12'>
                            Everything Local - Right Here!
                        </h2>
                        <p
                            className='text-center px-3 text-gray-100 font-poppins 
                             xl:text-left xl:px-0 xl:pr-[100px]'
                        >
                            From learning about volunteering in your community to information about local events,
                            Local Consumer Reach is your guide to finding out what’s happening where you live and how you can help out.
                            We are focused on effectiveness, transparency, and innovation. We connect you to learning content, resources,
                            and tools to give in ways more likely to make a difference.
                        </p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default memo(EverythingLocal);
