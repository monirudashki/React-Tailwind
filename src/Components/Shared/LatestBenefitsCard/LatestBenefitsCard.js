import React from 'react';

function LatestBenefitsCard({
    img
}) {
    return (
        <article className='w-full h-auto shadow-lg xl:w-[33%] xl:h-[100%]'>
            <div className='w-full h-[245px] flex justify-center items-center mb-5'>
                <img className='w-full h-full object-cover' src={img} alt="first" />
            </div>

            <div className='font-poppins xl:text-left text-center ml-4'>
                <p className='text-[13px] text-[#707c89] mb-3'>Category: name</p>
                <h4 className='xl:text-xl text-[#212832] mb-5'>The quick brown fox...</h4>

                <button
                    className='mb-4 bg-mainBlueColor py-3 px-4 cursor-pointer 
                    border-none text-mainWhiteColor hover:bg-hoverBlueColor transition-all'
                    type='button'>
                    Read article
                </button>
            </div>
        </article>
    )
}

export default LatestBenefitsCard;
