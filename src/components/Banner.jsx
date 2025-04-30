import React from 'react'

const Banner = () => {
    return (
        <>
            <section className='h-[90dvh] overflow-hidden relative'>
                <div className="container h-full">
                    <ul className='h-full flex flex-col justify-center gap-10'>
                        <li className='w-[650px]'>
                            <h1 className='text-[70px]'>Next generation digital banking </h1>
                        </li>

                        <li className='w-[450px]'>
                            <p className='text-lg leading-[35px]'>Take your financial life online. Your Easybank account will be a one-stop-shop
                                for spending, saving, budgeting, investing, and much more.</p>
                        </li>

                        <li>
                            <button>Request Invite</button>
                        </li>
                    </ul>
                </div>
                <div className='absolute -top-[38%] -right-[30%] z-10'>
                    <img className='h-[1300px]' src="/images/bg-intro-desktop.svg" alt="easybank banner image" />
                </div>
            </section>
            <div className='absolute -top-10 -right-40 z-20'>
                <img className='w-[1000px]' src="/images/image-mockups.png" alt="easybank banner image" />
            </div>
        </>
    )
}

export default Banner