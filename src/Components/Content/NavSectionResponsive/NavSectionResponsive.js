import React from 'react';

import styles from './styles/navSectionResponsive.module.css';

import contentImg from './images/communityImg.jpg';

function NavSectionResponsive() {
    return (
        <section className={styles['navResponsiveSection']}>
            <div className={styles['community-wrapper']}>
                <div className={styles['community-wrapper__header']}>
                    <h4>Community</h4>
                    <button type='button'>
                        <div></div>
                    </button>
                </div>

                <p>From learning about volunteering in your community
                    to information about local events,
                    Local Consumer Reach is your guide to
                    finding out what’s happening where you live and how you can help out.v
                </p>

                <div className={styles['community-wrapper__img']}>
                    <img src={contentImg} alt="community" />
                </div>
            </div>

            <div className={styles['link']}>
                <h4>Local Events</h4>
                <button type='button'>+</button>
            </div>

            <div className={styles['link2']}>
                <h4>Support</h4>
                <button type='button'>+</button>
            </div>
        </section>
    )
}

export default NavSectionResponsive
