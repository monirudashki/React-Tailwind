import React from 'react';

import styles from './styles/latestBenefitsCard.module.css';

function LatestBenefitsCard({
    img
}) {
    return (
        <article className={styles['card']}>
            <div className={styles['card__img-wrapper']}>
                <img src={img} alt="first" />
            </div>

            <div className={styles['card__desc']}>
                <p>Category: name</p>
                <h4>The quick brown fox...</h4>

                <button type='button'>Read article</button>
            </div>
        </article>
    )
}

export default LatestBenefitsCard;
