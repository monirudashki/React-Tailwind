import React, { memo } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const menu = <FontAwesomeIcon icon={faBars} />
const errorLeft = <FontAwesomeIcon icon={faChevronLeft} />
const errorRight = <FontAwesomeIcon icon={faChevronRight} />

function Header({
    hamburgerNavToggle,
    HamNavIsClickedHandle
}) {

    const onClickMenuHandle = () => {
        HamNavIsClickedHandle();
        hamburgerNavToggle(true);
    }

    return (
        <header className='w-full h-[523px] bg-headerRespImg bg-no-repeat bg-cover relative 
        xl:bg-headerImg'>

            <nav className="w-full h-auto xl:h-[20%] xl:flex xl:justify-center xl:items-center xl:bg-navBarColor">
                <div className='w-full h-[70px] px-[10px] flex justify-between items-center bg-mainWhiteColor 
                xl:mx-[150px] xl:h-auto xl:bg-transparent'>
                    <p className='font-sans text-xl text-[#565656] xl:font-bold xl:leading-7 xl:text-4xl xl:text-mainWhiteColor'>All Work Travel</p>
                    <button
                        className='bg-transparent text-xl text-[#565656] shadow-none border-none cursor-pointer 
                    hover:text-gray-200 xl:text-2xl xl:text-mainWhiteColor'
                        type='button'
                        onClick={onClickMenuHandle}>{menu}</button>
                </div>
            </nav>


            <div className='hidden xl:w-[26px] xl:h-[38px] xl:flex xl:justify-center xl:items-center bg-mainWhiteColor
            xl:text-xl xl:text-mainBlueColor xl:absolute xl:left-[1%] xl:top-[50%] xl:translate-x-[-1%] xl:translate-y-[-50%]
            xl:hover:bg-gray-400 xl:cursor-pointer'>
                {errorLeft}
            </div>

            <div className='hidden xl:w-[26px] xl:h-[38px] xl:flex xl:justify-center xl:items-center bg-mainWhiteColor
            xl:text-xl xl:text-mainBlueColor xl:absolute xl:right-[1%] xl:top-[50%] xl:translate-x-[-1%] xl:translate-y-[-50%]
            xl:hover:bg-gray-400 xl:cursor-pointer'>
                {errorRight}
            </div>

            <div className='w-[90%] h-[20%] flex justify-center items-center gap-[5px] flex-col bg-[#ffffffcc] absolute
            left-[50%] bottom-[2%] translate-x-[-50%] translate-y-[-2%]
            xl:w-auto xl:gap-0 xl:p-5 xl:bottom-[10%] xl:translate-y-[-10%]'>
                <h1 className='font-roboto font-bold text-2xl text-[#222831] xl:text-5xl'>Find Expert Saving Tips & Resources With Us</h1>
                <p className='hidden xl:block xl:m-2 xl:font-sans xl:text-[#565656]'>The quick brown fox...</p>

                <div className='w-[30px] h-[15px] flex justify-center items-center gap-[3px] xl:hidden'>
                    <button
                        className='w-[16px] h-[16px] bg-[#778dbe] shadow-none border-none p-[8px]'
                        type='button'>
                    </button>
                    <button
                        className='w-[16px] h-[16px] bg-[#cdcdcd] shadow-none border-none p-[8px]'
                        type='button'></button>
                    <button
                        className='w-[16px] h-[16px] bg-[#cdcdcd] shadow-none border-none p-[8px]'
                        type='button'>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default memo(Header)
