import React from 'react';

import styles from './styles/hamburgerNav.module.css';

import { Link } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const close = <FontAwesomeIcon icon={faXmark} />

function HamburgerNav({
    hamburgerNavToggle,
    hamburgerNavOn,
    hamNavIsClicked
}) {

    const onClickCloseHandle = () => {
        hamburgerNavToggle(false);
    }

    return (
        <section className=
            {`w-[100vw] h-[100vh] fixed right-0 top-0 z-[1] bg-gray-500 overflow-auto translate-x-[-100%]
        ${(hamburgerNavOn && hamNavIsClicked) && styles['slide-in']}
        ${(!hamburgerNavOn && hamNavIsClicked) && styles['slide-out']}
        `}>
            <nav className='w-full h-[10%] flex justify-center items-center bg-navBarColor mb-[200px]'>
                <div className='mx-5 xl:mx-[150px] flex justify-between items-center w-full'>

                    <p className='font-sans font-bold text-[26px] text-[rgba(249,249,249,1)]'>All Work Travel</p>

                    <button className='bg-transparent text-2xl text-mainWhiteColor shadow-none border-none
                    cursor-pointer'
                        type='button'
                        onClick={onClickCloseHandle}>
                        {close}
                    </button>
                </div>
            </nav>

            <div className='w-[40%] h-[50%] flex justify-center items-center gap-5 flex-col mx-auto'>
                <h2 className='text-mainWhiteColor text-xl font-bold'>
                    HOME
                </h2>
                <nav className='flex justify-center items-center flex-co font-poppins'>
                    <ul className='list-none p-0 m-0'>
                        <li className='pb-[10px]'>
                            <Link className='text-[rgba(249,249,249,0.7)] no-underline text-5 hover:underline'>
                                Category
                            </Link>
                        </li>
                        <li className='pb-[10px]'>
                            <Link className='text-[rgba(249,249,249,0.7)] no-underline text-5 hover:underline'>
                                Category
                            </Link>
                        </li>
                        <li className='pb-[10px]'>
                            <Link className='text-[rgba(249,249,249,0.7)] no-underline text-5 hover:underline'>
                                Category
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className='flex justify-center items-center gap-4 font-roboto mt-[100px]'>
                    <button className='border-none py-2 px-4 text-mainWhiteColor bg-mainOrangeColor'
                        type='button'>
                        REGISTER
                    </button>
                    <button
                        className='border-none py-2 px-4 text-mainWhiteColor bg-mainBlueColor'
                        type='button'>
                        LOGIN
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HamburgerNav;
