import React, { memo } from 'react';
import styles from '../LatestBenefits/styles/latestBenefits.module.css';

import img1 from './images/lastBenefitsImage1.png';
import img2 from './images/lastBenefitsImage2.png';
import img3 from './images/lastBenefitsImage3.png';
import LatestBenefitsCard from '../../Shared/LatestBenefitsCard/LatestBenefitsCard';

const cards = [
    {
        id: 1,
        img: img1,
    },
    {
        id: 2,
        img: img2,
    },
    {
        id: 3,
        img: img3,
    }
]

function LatestBenefits() {
    return (
        <section className='w-full h-auto mt-5 px-4 xl:px-[150px]'>
            <div
                className='w-full h-[15%] flex justify-center items-end mb-1 xl:justify-between xl:border-b-[5px] 
            xl:border-b-solid xl:border-b-mainBlueColor xl:mt-10 xl:mb-10' >
                <h3 className='text-2xl px-[18px] text-center bg-mainBlueColor text-mainWhiteColor font-roboto
                xl:text-4xl xl:py-[14px] xl:px-[32px]'>Latest Benefits</h3>

                <p className='hidden xl:block xl:font-poppins xl:mb-[10px] xl:text-xl'>From: <span className='text-mainBlueColor'>Business</span></p>
            </div>

            <div className='w-full flex justify-center items-center gap-[34px] flex-col xl:h-[82%] xl:gap-10 xl:flex-row'>
                {cards.map(card => <LatestBenefitsCard key={card.id} img={card.img} />)}
            </div>
        </section>
    )
}

export default LatestBenefits;
