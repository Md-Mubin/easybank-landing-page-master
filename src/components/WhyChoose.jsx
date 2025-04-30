import React from 'react'

const WhyChoose = () => {

    const whyChooseCards = [
        {
            id : "1",
            icon : "/images/icon-online.svg",
            heading : "Online Banking",
            infos : "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        },

        {
            id : "2",
            icon : "/images/icon-budgeting.svg",
            heading : "Simple Budgeting",
            infos : "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
        },

        {
            id : "3",
            icon : "/images/icon-onboarding.svg",
            heading : "Fast Onboarding",
            infos : "We don't do branches. Open your account in minutes online and start taking control of your finances right away."
        },

        {
            id : "4",
            icon : "/images/icon-api.svg",
            heading : "Open API",
            infos : "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
        }
    ]

    return (
        <>
            <section className='py-20 bg-slate-200'>
                <div className="container">
                    <ul>
                        <li>
                            <h2 className='text-[60px]'>Why Choose Easybank?</h2>
                        </li>
                        <li className='mt-5 w-[750px]'>
                            <p className='text-xl'>We leverage Open Banking to turn your bank account into your financial hub. Control
                            your finances like never before.</p>
                        </li>
                    </ul>
                    <ul className='mt-10 flex items-center justify-between gap-10'>
                        {
                            whyChooseCards.map((items)=>(
                                <li key={items.id} className='flex flex-col items-start gap-5 p-2'>
                                    <img src={items.icon} alt="icons" />
                                    <h4 className='font-semibold text-xl'>{items.heading}</h4>
                                    <p className='text-lg'>{items.infos}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default WhyChoose