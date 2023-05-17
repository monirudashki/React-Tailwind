import React from 'react';

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
        <footer className='xl:hidden w-full h-full'>
            <div className='w-full h-[85%] flex justify-center items-center flex-col
            bg-footerDesktopRespImg bg-no-repeat bg-cover'>
                <div className='w-full h-[75%] flex items-center justify-start flex-col gap-12'>
                    <h3 className='mt-5 pt-5 font-bold font-poppins text-3xl text-gray-400'>
                        All work Travel
                    </h3>
                    <div className='font-poppins text-[rgba(244,247,250,0.8)]'>
                        <p className='mb-3'>111 Town Square Place,Suite <br />1203,Jersey City, NJ 07310</p>
                        <p className='mb-3'>1 877-945-6759 <br />support@youngadvisor.com</p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-1 mb-10'>
                        <h4 className='font-roboto text-mainWhiteColor mb-3'>LEGAL</h4>
                        <Link className='font-poppins text-[rgba(244,247,250,0.8)]' to={'/'}>About us</Link>
                        <Link className='font-poppins text-[rgba(244,247,250,0.8)]' to={'/'}>Privacy Policy</Link>
                        <Link className='font-poppins text-[rgba(244,247,250,0.8)]' to={'/'}>SMS Privacy Policy</Link>
                        <Link className='font-poppins text-[rgba(244,247,250,0.8)]' to={'/'}>Terms and Conditions</Link>
                        <Link className='font-poppins text-[rgba(244,247,250,0.8)]' to={'/'}>SMS Terms and Conditions</Link>
                    </div>
                </div>

                <div className='flex justify-center items-center gap-3 mb-2'>
                    <a className='text-mainWhiteColor text-2xl' href='#/'>{facebookIcon}</a>
                    <a className='text-mainWhiteColor text-2xl' href='#/'>{twitterIcon}</a>
                    <a className='text-mainWhiteColor text-2xl' href='#/'>{pinterestIcon}</a>
                </div>
                <div className='w-4/5 h-[3px] bg-mainWhiteColor mb-4'></div>
                <p className='px-[80px] pb-6 pt-1 text-mainWhiteColor'>© 2023 Local Customer Reach. All rights reserved.</p>
            </div>

            <div className='w-full h-1/4 flex flex-col justify-center items-center bg-mainOrangeColor'>
                <div className='text-center font-roboto text-mainWhiteColor mt-7'>
                    <h2 className='text-2xl mb-6 font-bold'>Subscribe to put premium content</h2>
                    <p className='text-black mb-6'>33% <span className='text-mainWhiteColor'>Discount if you subscribe NOW</span></p>
                </div>

                <div>
                    <button className='text-mainWhiteColor bg-mainBlueColor text-sm mb-2.5 px-3.5 py-1.5 border-[none]'
                        type='button'>SUBSCRIBE {arrowRight}
                    </button>
                    <p className='text-[12px] text-mainWhiteColor mb-6'>No, thanks</p>
                </div>
            </div>
        </footer>
    )
}

export default FooterResponsive;
