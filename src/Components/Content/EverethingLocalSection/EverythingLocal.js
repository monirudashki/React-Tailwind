import React, { memo } from 'react';
import styles from './styles/everythingLocal.module.css';

import curlyGirl from './images/curlGirlImage.png';

function EverythingLocal() {
    return (
        <section className={styles['everythingLocal-container']}>
            <article className={styles['content-wrapper']}>
                <div className={styles['img-wrapper']}>
                    <img src={curlyGirl} alt="curlyGirl" />
                </div>

                <div className={styles['pointer']}></div>

                <div className={styles['description']}>

                    <div>
                        <h2>Everything Local - Right Here!</h2>
                        <p>From learning about volunteering in your community to information about local events,
                            Local Consumer Reach is your guide to finding out what’s happening where you live and how you can help out.
                            We are focused on effectiveness, transparency, and innovation. We connect you to learning content, resources,
                            and tools to give in ways more likely to make a difference.
                        </p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default memo(EverythingLocal);
