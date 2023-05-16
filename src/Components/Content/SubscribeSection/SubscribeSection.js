import React from 'react';

import subscribeImg from './images/smsSubscribe.png'

function SubscribeSection({
    modalToggle,
    modalIsClickedHandle
}) {

    const onClickPopUpHandle = () => {
        modalIsClickedHandle();
        modalToggle(true);
    }

    return (
        <section className='w-full h-[80%] pb-10 xl:h-[70vh]'>
            <div className='w-full h-full flex justify-center items-center flex-col gap-10
            p-[10px] xl:gap-0 xl:flex-row xl:py-[80px] xl:px-[166px]'>
                <div className='w-full xl:w-1/2 h-full flex justify-center items-center'>
                    <img className='w-full h-full' src={subscribeImg} alt="subscribe" />
                </div>

                <div className='w-full xl:w-1/2 h-full flex justify-center items-center gap-3 xl:gap-10
                flex-col text-center'>
                    <h2 className='font-roboto text-[36px] font-bold'>SMS SUBSCRIBE</h2>
                    <p className='text-[18px] font-poppins'>The quick brown fox...</p>
                    <button
                        className='cursor-pointer font-roboto py-3 px-[100px] border-none
                    text-mainWhiteColor bg-mainBlueColor
                    hover:bg-hoverBlueColor hover:transition-all'
                        type='button'
                        onClick={onClickPopUpHandle}>
                        POP UP
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SubscribeSection
