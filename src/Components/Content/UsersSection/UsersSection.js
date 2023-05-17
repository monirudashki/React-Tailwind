import React from 'react';

import leftUserImg from './images/womanLeftImage.png';
import rightUserImg from './images/womanRightImage.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const apostrophe = <FontAwesomeIcon icon={faDroplet} />
const errorLeft = <FontAwesomeIcon icon={faChevronLeft} />
const errorRight = <FontAwesomeIcon icon={faChevronRight} />

function UsersSection() {
    return (
        <section className='w-full h-auto mt-5 xl:mt-0 flex justify-center items-center relative'>
            <div className='hidden xl:w-[26px] xl:h-[38px] 
            xl:flex xl:justify-center xl:items-center
            text-[32px] text-[rgba(112,124,137,1)] 
            absolute translate-x-[-13%] -translate-y-2/4 left-[13%] top-2/4
            hover:cursor-pointer hover:text-mainOrangeColor'>
                {errorLeft}
            </div>
            <div
                className='w-full h-full p-[10px] xl:w-[70%] xl:h-[400px] xl:my-20 flex justify-center items-center
            gap-12 flex-col xl:flex-row'>
                <article className='w-full h-full flex-col xl:flex-row xl:w-1/2 flex justify-center items-center
                bg-mainOrangeColor relative'>
                    <div className='w-[60%] pt-10 xl:pt-0 xl:w-[45%] h-full flex justify-center items-center'>
                        <img className='w-full h-full' src={leftUserImg} alt="user" />
                    </div>

                    <div className='hidden xl:block w-[40px] h-[40px] bg-mainOrangeColor absolute
                    left-[38%] top-[40%] translate-x-[40%] translate-y-[38%] rotate-[45deg]'></div>

                    <div className='w-full pt-5 xl:pt-0 flex justify-center items-center gap-3
                    flex-col-reverse xl:items-start xl:flex-col xl:w-[60%] h-full xl:pl-5 text-mainWhiteColor'>
                        <div>
                            <h3 className='mt-3 xl:mt-10 font-roboto text-2xl text-center font-bold xl:text-left mb-8'>
                                Karli O'Sullivan
                            </h3>
                            <p
                                className='p-5 xl:p-0 text-center xl-p-0 xl:text-left font-poppins
                            pr-10 mb-12'>
                                I’ve been designing mobile apps and
                                services for many years – for companies
                                ranging from emerging start-ups to Fortune 100’s.
                            </p>
                        </div>
                        <div className='text-left text-4xl'>
                            <span className='mr-[5px]'>{apostrophe}</span>
                            <span className='mr-[5px]'>{apostrophe}</span>
                        </div>
                    </div>
                </article>

                <article className='hidden w-full h-full flex-col xl:w-1/2 xl:flex-row xl:flex justify-center items-center
                bg-mainOrangeColor relative'>
                    <div className='w-[60%] pt-10 xl:pt-0 xl:w-[45%] h-full flex justify-center items-center'>
                        <img className='w-full h-full' src={rightUserImg} alt="user" />
                    </div>

                    <div className='hidden xl:block w-[40px] h-[40px] bg-mainOrangeColor absolute
                    left-[38%] top-[40%] translate-x-[40%] translate-y-[38%] rotate-[45deg]'>
                    </div>

                    <div className='w-full pt-5 xl:pt-0 flex justify-center items-center gap-3
                    flex-col-reverse xl:flex-col xl:items-start xl:w-[60%] h-full xl:pl-5 text-mainWhiteColor'>
                        <div>
                            <h3 className='mt-3 xl:mt-10 font-roboto text-2xl text-center xl:text-left font-bold mb-8'>
                                Karli O'Sullivan
                            </h3>
                            <p
                                className='p-5 xl:p-0 text-center xl-p-0 xl:text-left font-poppins
                            pr-10 mb-12'>
                                I’ve been designing mobile apps and
                                services for many years – for companies
                                ranging from emerging start-ups to Fortune 100’s.
                            </p>
                        </div>
                        <div className='text-left text-4xl'>
                            <span className='mr-[5px]'>{apostrophe}</span>
                            <span className='mr-[5px]'>{apostrophe}</span>
                        </div>
                    </div>
                </article>
            </div>

            <div
                className='hidden xl:w-[26px] xl:h-[38px] xl:flex xl:justify-center xl:items-center
            text-[32px] text-[rgba(112,124,137,1)] 
            absolute translate-x-[-13%] -translate-y-2/4 right-[13%] top-2/4
            hover:cursor-pointer hover:text-mainOrangeColor'>
                {errorRight}
            </div>
        </section>
    )
}

export default UsersSection;
