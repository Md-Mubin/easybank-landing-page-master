import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='py-20 bg-primary'>
                <div className="container">
                    <div className='flex items-center justify-between gap-10'>
                        <ul>
                            <li>
                                <img src="/images/logo.svg" alt="easybank logo" />
                            </li>

                            <li className='mt-10'>
                                <ul className='flex gap-4'>
                                    <li>
                                        <a href="#">
                                            <img src="/images/icon-facebook.svg" alt="footer social logos" />
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <img src="/images/icon-instagram.svg" alt="footer social logos" />
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <img src="/images/icon-twitter.svg" alt="footer social logos" />
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <img src="/images/icon-pinterest.svg" alt="footer social logos" />
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <img src="/images/icon-instagram.svg" alt="footer social logos" />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <ul className='flex flex-col gap-4'>
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

                        <ul className='flex flex-col gap-4'>
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

                        <ul className='ml-70 text-end'>
                            <li>
                                <a href="#">
                                    <button className='px-8 py-3 bg-[#373a52] cursor-pointer hover:bg-gradient-to-r from-[#31d35c] to-[#2bb7da] rounded-3xl text-[#fff]'>Request Invite</button>
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