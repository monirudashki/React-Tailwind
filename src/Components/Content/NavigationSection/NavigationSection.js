import React from 'react';

import styles from './styles/navigationSection.module.css';

import curlyGirl from './images/curlGirlImage.png';

import { NavLink } from 'react-router-dom'
import NavSectionResponsive from '../NavSectionResponsive/NavSectionResponsive';

function NavigationSection() {

    const setActiveStyle = ({ isActive }) => {
        return isActive
            ? styles['active']
            : 'none'
    }

    return (
        <>
            <section className={styles['navigationSection-container']}>
                <nav>
                    <ul>
                        <li><NavLink to={'/'} className={setActiveStyle}>Community</NavLink></li>
                        <li><NavLink to={'/LocalEvents'} className={setActiveStyle}>Local Events</NavLink></li>
                        <li><NavLink to={'/Support'} className={setActiveStyle}>Support</NavLink></li>
                    </ul>
                </nav>

                <div className={styles['article']}>
                    <div className={styles['article__img']}>
                        <img src={curlyGirl} alt="" />
                    </div>

                    <div className={styles['article__desc']}>
                        <p>
                            From learning about volunteering
                            in your community to information about local events,
                            Local Consumer Reach is your guide to finding out
                            what’s happening where you live and how you can help out.v
                        </p>
                    </div>
                </div>
            </section>

            <NavSectionResponsive />
        </>
    )
}

export default NavigationSection
