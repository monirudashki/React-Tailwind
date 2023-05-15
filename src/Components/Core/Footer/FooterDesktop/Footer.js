import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles/footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import FooterResponsive from '../FooterResponsive/FooterResponsive';

const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
const pinterestIcon = <FontAwesomeIcon icon={faPinterest} />
const arrowRight = <FontAwesomeIcon icon={faArrowRight} />

function Footer() {
    return (
        <>
            <footer className={styles['footer-section']}>
                <div className={styles['footer-main']}>
                    <div className={styles['footer-main__content']}>
                        <h2>LOCAL <span>CONSUMER REACH</span></h2>
                        <div className={styles['address']}>
                            <p>111 Town Square Place,Suite <br />1203,Jersey City, NJ 07310</p>
                            <p>1 877-945-6759 <br />support@youngadvisor.com</p>
                        </div>

                        <div className={styles['navigation']}>
                            <h3>LEGAL</h3>
                            <ul>
                                <li><Link to={'/'}>About us</Link></li>
                                <li><Link to={'/'}>Privacy Policy</Link></li>
                                <li><Link to={'/'}>SMS Privacy Policy</Link></li>
                                <li><Link to={'/'}>Terms and Conditions</Link></li>
                                <li><Link to={'/'}>SMS Terms and Conditions</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles['footer-main__wrights']}>
                        <p>© 2023 Local Customer Reach. All rights reserved.</p>

                        <div className={styles['icons']}>
                            <a href='#/'>{facebookIcon}</a>
                            <a href='#/'>{twitterIcon}</a>
                            <a href='#/'>{pinterestIcon}</a>
                        </div>
                    </div>
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

            <FooterResponsive />
        </>
    )
}

export default Footer;
