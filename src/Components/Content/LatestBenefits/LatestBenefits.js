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
        <section className={styles['latest-benefits-section']}>
            <div className={styles['header']}>
                <h3>Latest Benefits</h3>

                <p className={styles['header-desc']}>From: <span>Business</span></p>
            </div>

            <p className={styles['header-resp-desc']}>From: <span>Business</span></p>

            <div className={styles['cards-wrapper']}>
                {cards.map(card => <LatestBenefitsCard key={card.id} img={card.img} />)}
            </div>
        </section>
    )
}

export default LatestBenefits;
