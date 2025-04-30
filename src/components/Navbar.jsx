"use client"
import React, { useState } from 'react'
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {

    // hooks
    const [show, setShow] = useState(false)

    return (
        <>
            <nav className='w-full bg-[#fff] sticky top-0 z-[100]'>
                <div className="container">
                    <div className="lg:flex justify-between items-center hidden">

                        {/* logo */}
                        <img src="/images/logo.svg" alt="easybank logo" />

                        {/* nav-items */}
                        <ul className='navItems'>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                        </ul>

                        {/* nav button */}
                        <button className='px-8 py-3 ring-2 ring-[#00000033] hover:ring-[#fff] text-[#000] hover:bg-gradient-to-r from-[#31d35c] to-[#2bb7da] rounded-full hover:text-[#fff] duration-200 cursor-pointer'>Request Invite</button>
                    </div>

                    {/* ============ resposnive navbar ============ */}
                    <div className="flex justify-between h-[8vh] items-center relative lg:hidden ">
                        <img src="/images/logo.svg" alt="easybank logo" />

                        {/* res_nav-items */}
                        <ul className={show ? "resNavItems" : "hidden"}>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                        </ul>

                        {/* toggle button for res-Navbar */}
                        <button className='cursor-pointer' onClick={() => setShow(!show)}>
                            {
                                show ?
                                    <RxCross1 className='text-4xl' />
                                    :
                                    <HiMiniBars3 className='text-4xl' />
                            }
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar