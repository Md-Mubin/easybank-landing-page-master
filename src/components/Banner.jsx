import React from 'react'

const Banner = () => {
    return (
        <>
            <section className='lg:h-[90dvh] overflow-hidden relative'>
                <div className="container h-full">
                    <div className='lg:hidden relative z-20 mt-[-30%]'>
                        <img className='' src="/images/image-mockups.png" alt="easybank banner image" />
                    </div>
                    <ul className='h-full flex flex-col justify-center gap-10 mt-20 lg:mt-0'>
                        <li className='lg:w-[650px] text-center lg:text-start'>
                            <h1 className='text-[40px] lg:text-[70px]'>Next generation digital banking </h1>
                        </li>

                        <li className='text-center lg:text-start lg:w-[450px]'>
                            <p className='text-lg leading-[35px]'>Take your financial life online. Your Easybank account will be a one-stop-shop
                                for spending, saving, budgeting, investing, and much more.</p>
                        </li>

                        <li className='text-center mb-20 lg:mb-0'>
                            <a href="#">
                                <button className='px-8 py-3 lg:ring-2 lg:ring-[#00000033] hover:ring-[#fff] text-[#fff] lg:text-[#000] bg-gradient-to-r lg:bg-transparent lg:hover:bg-gradient-to-r from-[#31d35c] to-[#2bb7da] rounded-full hover:text-[#fff] duration-200 cursor-pointer'>Request Invite</button>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='absolute -top-[38%] -right-[30%] z-10 hidden lg:block'>
                    <img className='h-[1300px]' src="/images/bg-intro-desktop.svg" alt="easybank banner image" />
                </div>
                <div className='absolute top-[0%] left-[0%] z-10 lg:hidden'>
                    <img className='w-[500px]' src="/images/bg-intro-mobile.svg" alt="easybank banner image" />
                </div>
            </section>
            <div className='hidden lg:block absolute -top-10 -right-40 z-20'>
                <img className='' src="/images/image-mockups.png" alt="easybank banner image" />
            </div>
        </>
    )
}

export default Banner