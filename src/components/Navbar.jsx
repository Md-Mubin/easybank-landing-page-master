import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='w-full bg-[#fff] sticky top-0 z-[100]'>
                <div className="container">
                    <div className="flex justify-between items-center">
                        <img src="/images/logo.svg" alt="easybank logo" />
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
                        <button>Request Invite</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar