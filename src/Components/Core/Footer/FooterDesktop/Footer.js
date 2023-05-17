import React from 'react';
import { Link } from 'react-router-dom';

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
            <footer className='hidden xl:block w-full h-[70vh] text-mainWhiteColorColor'>
                <div className='w-full h-[85%] flex justify-center items-center flex-col bg-footerDesktopImg bg-no-repeat bg-cover'>
                    <div className='w-full h-[85%] flex justify-center items-start gap-[220px] p-[150px]'>
                        <h2 className='mt-5 text-black text-3xl font-poppins bg-mainWhiteColor'>LOCAL
                            <span className='p-0 text-mainWhiteColor bg-black border-solid border-[5px] border-black'>
                                CONSUMER REACH
                            </span>
                        </h2>
                        <div className='font-poppins text-left text-[#f4f7facc]'>
                            <p className='mb-5'>111 Town Square Place,Suite <br />1203,Jersey City, NJ 07310</p>
                            <p>1 877-945-6759 <br />support@youngadvisor.com</p>
                        </div>

                        <div className='flex justify-center items-start gap-1 flex-col'>
                            <h3 className='font-roboto mb-3 text-mainWhiteColor font-bold'>LEGAL</h3>
                            <ul className='list-none m-0 p-0'>
                                <li className='text-left pb-[10px]'>
                                    <Link className='text-[#f4f7fa] no-underline font-poppins text-[#f4f7fa80]
                                    hover:underline' to={'/'}> About us
                                    </Link>
                                </li>
                                <li className='text-left pb-[10px]'>
                                    <Link className='text-[#f4f7fa] no-underline font-poppins text-[#f4f7fa80]
                                    hover:underline' to={'/'}>Privacy Policy</Link>
                                </li>
                                <li className='text-left pb-[10px]'>
                                    <Link className='text-[#f4f7fa] no-underline font-poppins text-[#f4f7fa80]
                                    hover:underline' to={'/'}>SMS Privacy Policy</Link>
                                </li>
                                <li className='text-left pb-[10px]'>
                                    <Link className='text-[#f4f7fa] no-underline font-poppins text-[#f4f7fa80]
                                    hover:underline' to={'/'}>Terms and Conditions</Link>
                                </li>
                                <li className='text-left pb-[10px]'>
                                    <Link className='text-[#f4f7fa] no-underline font-poppins text-[#f4f7fa80]
                                    hover:underline' to={'/'}>SMS Terms and Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='w-4/5 h-[15%] flex justify-between items-center border-t-[3px]
                     border-t-[rgba(244,247,250,0.5)] border-solid'>
                        <p className='text-5 text-[rgba(244,247,250,0.8)]'>
                            © 2023 Local Customer Reach. All rights reserved.
                        </p>

                        <div className='flex justify-center items-center gap-6 text-3xl'>
                            <a className='text-mainWhiteColor hover:text-gray-400 hover:transition-all' href='#/'>{facebookIcon}</a>
                            <a className='text-mainWhiteColor hover:text-gray-400 hover:transition-all' href='#/'>{twitterIcon}</a>
                            <a className='text-mainWhiteColor hover:text-gray-400 hover:transition-all' href='#/'>{pinterestIcon}</a>
                        </div>
                    </div>
                </div>

                <div className='w-full h-[15%] flex justify-between items-center bg-mainOrangeColor'>
                    <div className='font-roboto text-mainWhiteColor text-left ml-[250px] border-l-[3px] border-l-mainWhiteColor border-solid'>
                        <h2 className='ml-3 text-3xl'>Subscribe to put premium content</h2>
                        <p className='ml-3 text-black '>33%
                            <span className='text-mainWhiteColor'>Discount if you subscribe NOW</span>
                        </p>
                    </div>

                    <div className='mr-[250px]'>
                        <button
                            className='bg-mainBlueColor text-mainWhiteColor cursor-pointer mb-1 px-6 py-3 border-[none]
                             hover:bg-hoverBlueColor'
                            type='button'>SUBSCRIBE {arrowRight}
                        </button>
                        <p>No, thanks</p>
                    </div>
                </div>
            </footer>

            <FooterResponsive />
        </>
    )
}

export default Footer;
