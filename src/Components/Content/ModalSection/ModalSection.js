import React from 'react';

import styles from './styles/modalSection.module.css';

function ModalSection({
    modalToggle,
    modalOn,
    modalIsClicked
}) {

    const onCloseModalHandle = () => {
        modalToggle(false);
    }

    return (
        <>
            <section
                className={`w-[100vw] h-[100vh] flex justify-center items-center fixed
                right-0 top-0 z-[1] bg-[rgba(6,6,6,0.7)] overflow-auto translate-x-[-100%]
                ${(modalOn && modalIsClicked) && styles['slide-in']}
                ${(!modalOn && modalIsClicked) && styles['slide-out']}`}
            >
                <div onClick={onCloseModalHandle}
                    className='w-[100%] h-[25%] absolute left-0 top-0 z-10'>
                </div>
                <div onClick={onCloseModalHandle}
                    className='w-[100%] h-[25%] absolute left-0 bottom-0 z-10'>
                </div>
                <div onClick={onCloseModalHandle}
                    className='w-[35%] h-[40%] absolute left-0 top-[50%] translate-y-[-50%] z-10'
                ></div>
                <div onClick={onCloseModalHandle}
                    className='w-[35%] h-[40%] absolute right-0 top-[50%] translate-y-[-50%] z-10'>
                </div>

                <div className='w-[80%] h-[40%] ml-[5px] xl:w-[30%] xl:h-[50%]
                flex justify-center items-center xl:gap-[50px] flex-col
                bg-mainOrangeColor border-solid border-mainWhiteColor border-[10px]
                font-roboto'>
                    <h2 className='text-[26px] mx-5 leading-7 
                    xl:leading-10 mb-[20px] xl:text-[42px]
                    xl:mx-[100px] font-bold text-[rgba(11,57,84,1)]'>
                        Subscribe to our premium content
                    </h2>

                    <form className='flex justify-center items flex-col gap-4'>
                        <input
                            className='w-[200px] h-[35px] xl:w-[460px] xl:h-[55px] 
                        bg-[rgba(223,223,223,1)] text-[32px]'
                            type="text"
                            name="email"
                        />
                        <input
                            className='w-[200px] h-[35px] xl:w-[460px] xl:h-[55px] 
                        bg-[rgba(223,223,223,1)] text-[32px]'
                            type="text"
                            name="username"
                        />

                        <button
                            className='xl:max-w-[200px] xl:self-center py-[6px] px-[32px] xl:py-[10px] 
                            xl:px-[50px]
                            mt-8 text-mainWhiteColor borden-none bg-mainBlueColor
                            hover:bg-hoverBlueColor hover:transition-all'
                            type='button'
                            onClick={onCloseModalHandle}
                        >
                            SEND
                        </button>
                    </form>
                </div>
            </section>

        </>
    )
}

export default ModalSection
