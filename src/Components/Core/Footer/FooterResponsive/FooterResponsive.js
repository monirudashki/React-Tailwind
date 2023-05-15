import React from 'react';
import styles from './styles/footerResp.module.css';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
const pinterestIcon = <FontAwesomeIcon icon={faPinterest} />
const arrowRight = <FontAwesomeIcon icon={faArrowRight} />

function FooterResponsive() {
    return (
        <footer className={styles['footer-section']}>
            <div className={styles['footerResp-main']}>
                <div className={styles['footerResp-main__content']}>
                    <h3>All work Travel</h3>
                    <div className={styles['address']}>
                        <p>111 Town Square Place,Suite <br />1203,Jersey City, NJ 07310</p>
                        <p>1 877-945-6759 <br />support@youngadvisor.com</p>
                    </div>

                    <div className={styles['navigation']}>
                        <h4>LEGAL</h4>
                        <Link to={'/'}>About us</Link>
                        <Link to={'/'}>Privacy Policy</Link>
                        <Link to={'/'}>SMS Privacy Policy</Link>
                        <Link to={'/'}>Terms and Conditions</Link>
                        <Link to={'/'}>SMS Terms and Conditions</Link>
                    </div>
                </div>

                <div className={styles['icons']}>
                    <a href='#/'>{facebookIcon}</a>
                    <a href='#/'>{twitterIcon}</a>
                    <a href='#/'>{pinterestIcon}</a>
                </div>
                <div className={styles['divider']}></div>
                <p>© 2023 Local Customer Reach. All rights reserved.</p>
            </div>

            <div className={styles['footer-end']}>
                <div className={styles['footer-end__title']}>
                    <h2>Subscribe to put premium content</h2>
                    <p>33% <span>Discount if you subscribe NOW</span></p>
                </div>

                <div className={styles['footer-end__button']}>
                    <button type='button'>SUBSCRIBE {arrowRight}</button>
                    <p>No, thanks</p>
                </div>
            </div>
        </footer>
    )
}

export default FooterResponsive;
