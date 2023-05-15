import React from 'react';

import styles from './styles/UsersSection.module.css';

import leftUserImg from './images/womanLeftImage.png';
import rightUserImg from './images/womanRightImage.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const apostrophe = <FontAwesomeIcon icon={faDroplet} />
const errorLeft = <FontAwesomeIcon icon={faChevronLeft} />
const errorRight = <FontAwesomeIcon icon={faChevronRight} />

function UsersSection() {
    return (
        <section className={styles['usersSection']}>
            <div className={styles['arrow-left']}>
                {errorLeft}
            </div>
            <div className={styles['usersCard-wrapper']}>
                <article className={styles['userCard']}>
                    <div className={styles['userCard__img']}>
                        <img src={leftUserImg} alt="user" />
                    </div>

                    <div className={styles['pointer']}></div>

                    <div className={styles['userCard_content']}>
                        <div className={styles['content']}>
                            <h3>Karli O'Sullivan</h3>
                            <p>I’ve been designing mobile apps and
                                services for many years – for companies
                                ranging from emerging start-ups to Fortune 100’s.
                            </p>
                        </div>
                        <div className={styles['icons']}>
                            <span>{apostrophe}</span>
                            <span>{apostrophe}</span>
                        </div>
                    </div>
                </article>

                <article className={styles['userCard2']}>
                    <div className={styles['userCard__img']}>
                        <img src={rightUserImg} alt="user" />
                    </div>

                    <div className={styles['pointer']}></div>

                    <div className={styles['userCard_content']}>
                        <div className={styles['content']}>
                            <h3>Karli O'Sullivan</h3>
                            <p>I’ve been designing mobile apps and
                                services for many years – for companies
                                ranging from emerging start-ups to Fortune 100’s.
                            </p>
                        </div>
                        <div className={styles['icons']}>
                            <span>{apostrophe}</span>
                            <span>{apostrophe}</span>
                        </div>
                    </div>
                </article>
            </div>

            <div className={styles['arrow-right']}>
                {errorRight}
            </div>
        </section>
    )
}

export default UsersSection;
