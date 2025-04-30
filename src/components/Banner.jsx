import React from 'react'

const Banner = () => {
    return (
        <>
            <section className='h-[100dvh]'>
                <div className="container">
                    <ul className='flex flex-col gap-10'>
                        <li>
                            <h1>Next generation digital banking </h1>
                        </li>

                        <li>
                            <p>Take your financial life online. Your Easybank account will be a one-stop-shop
                                for spending, saving, budgeting, investing, and much more.</p>
                        </li>

                        <li>
                            <button>Request Invite</button>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Banner