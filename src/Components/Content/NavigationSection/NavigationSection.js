import React from 'react';

import curlyGirl from './images/curlGirlImage.png';

import { NavLink } from 'react-router-dom'
import NavSectionResponsive from '../NavSectionResponsive/NavSectionResponsive';

function NavigationSection() {

    return (
        <>
            <section className='hidden xl:block xl:w-full xl:h-[70vh]'>
                <nav>
                    <ul className='w-full h-[80px] flex justify-center items-center list-none m-0'>
                        <li className='w-[28%] h-full flex justify-center items-center'>
                            <NavLink to={'/'}
                                className='w-full h-full flex justify-center items-center
                            no-underline text-center text-3xl font-bold font-roboto bg-mainOrangeColor
                           text-mainWhiteColor
                            hover:bg-#fd9753 hover:text-mainWhiteColor transition-all'>
                                Community
                            </NavLink>
                        </li>
                        <li className='w-[28%] h-full flex justify-center items-center'>
                            <NavLink to={'/LocalEvents'}
                                className='w-full h-full flex justify-center items-center
                            no-underline text-center text-3xl font-bold font-roboto text-[#1c1f22]
                            hover:bg-[#fd9753] hover:text-mainWhiteColor transition-all'
                            >Local Events
                            </NavLink>
                        </li>
                        <li className='w-[28%] h-full flex justify-center items-center'>
                            <NavLink to={'/Support'}
                                className='w-full h-full flex justify-center items-center
                            no-underline text-center text-3xl font-bold font-roboto text-[#1c1f22]
                            hover:bg-[#fd9753] hover:text-mainWhiteColor transition-all'
                            >Support
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className='w-full h-sectionHight flex justify-between items-center gap-[200px]
                bg-mainOrangeColor px-[150px]'>
                    <div className='w-[35%] h-[70%]'>
                        <img className='w-full h-full' src={curlyGirl} alt="dsad" />
                    </div>

                    <div className='w-[65%] h-[40%]'>
                        <p className='font-monserat text-[26px] text-mainWhiteColor text-left pr-[400px]'>
                            From learning about volunteering
                            in your community to information about local events,
                            Local Consumer Reach is your guide to finding out
                            what’s happening where you live and how you can help out.v
                        </p>
                    </div>
                </div>
            </section>

            <NavSectionResponsive />
        </>
    )
}

export default NavigationSection
