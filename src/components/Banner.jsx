import React from 'react'

const Banner = () => {
    return (
        <>
            <section className='lg:h-[90dvh] relative'>
                <div className="w-full h-full flex flex-col-reverse lg:flex-row justify-between items-center">
                    <div className='container'>
                        <ul className='flex flex-col justify-center gap-10 mt-[140%] lg:mt-0'>
                            <li className='lg:w-[650px] text-center lg:text-start'>
                                <h1 className='text-[40px] lg:text-[70px]'>Next generation digital banking </h1>
                            </li>

                            <li className='text-center lg:text-start lg:w-[450px]'>
                                <p className='text-lg leading-[35px]'>Take your financial life online. Your Easybank account will be a one-stop-shop
                                    for spending, saving, budgeting, investing, and much more.</p>
                            </li>

                            <li className='text-center lg:text-start mb-20 lg:mb-0'>
                                <a href="#">
                                    <button className='px-8 py-3 bg-gradient-to-r lg:bg-none lg:hover:bg-gradient-to-r from-[#31d35c] to-[#2bb7da] text-white lg:text-black hover:text-white lg:ring-2 lg:ring-[#00000033] hover:ring-white rounded-full duration-200 cursor-pointer'>Request Invite</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='-top-[40%] -right-[90%] xl:-right-[70%] 2xl:-right-[30%] z-10 lg:absolute'>
                        <img className='lg:h-[1300px] hidden lg:block' src="/images/bg-intro-desktop.svg" alt="easybank banner image" />
                        <img className='w-full absolute left-0 lg:hidden' src="/images/bg-intro-mobile.svg" alt="easybank banner image" />
                        <img className='absolute top-0 left-0 lg:right-[30%] lg:top-[20%] lg:w-[900px]' src="/images/image-mockups.png" alt="easybank banner image" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner