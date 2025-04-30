import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoPinterest, IoLogoYoutube } from "react-icons/io";

const Footer = () => {
    return (
        <>
            <footer className='py-20 bg-brandColor'>
                <div className="container">
                    <div className='flex lg:items-center justify-between flex-col lg:flex-row gap-10'>
                        <ul>
                            <li>
                                <img src="/images/footer_logo.svg" alt="easybank logo" />
                            </li>

                            <li className='mt-10'>
                                <ul className='footerSocials'>
                                    <li>
                                        <a href="#">
                                            <IoLogoFacebook />
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <IoLogoYoutube />
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <IoLogoTwitter/>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <IoLogoPinterest/>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <IoLogoInstagram/>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <ul className='footerLinks'>
                            <li>
                                <a href="#">About Us</a>
                            </li>

                            <li>
                                <a href="#">Contact</a>
                            </li>

                            <li>
                                <a href="#">Blog</a>
                            </li>
                        </ul>

                        <ul className='footerLinks'>
                            <li>
                                <a href="#">Careers</a>
                            </li>

                            <li>
                                <a href="#">Support</a>
                            </li>

                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>

                        <ul className='lg:ml-70 lg:text-end'>
                            <li>
                                <a href="#">
                                    <button className='px-8 py-3 lg:bg-[#373a52] cursor-pointer bg-gradient-to-r lg:hover:bg-gradient-to-r from-[#31d35c] to-[#2bb7da] rounded-3xl text-[#fff]'>Request Invite</button>
                                </a>
                            </li>

                            <li className='text-sm text-[#ffffff80] mt-4 tracking-widest'>
                                © Easybank. All Rights Reserved
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer