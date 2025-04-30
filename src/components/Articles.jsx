import React from 'react'

const Articles = () => {

    const articleCards = [
        {
            id: "1",
            image: "/images/image-currency.jpg",
            writer: "By Claire Robinson",
            heading: "Receive money in any currency with no fees",
            infos: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …"
        },

        {
            id: "2",
            image: "/images/image-restaurant.jpg",
            writer: "By Wilson Hutton",
            heading: "Treat yourself without worrying about money",
            infos: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
        },

        {
            id: "3",
            image: "/images/image-plane.jpg",
            writer: "By Wilson Hutton",
            heading: "Take your Easybank card wherever you go",
            infos: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you …"
        },

        {
            id: "4",
            image: "/images/image-confetti.jpg",
            writer: "By Claire Robinson",
            heading: "Our invite-only Beta accounts are now live!",
            infos: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ..."
        }
    ]

    return (
        <>
            <section className='py-20 bg-[#fafafa]'>
                <div className="container">
                    <h2 className='text-[40px] text-center lg:text-start lg:text-[60px]'>Latest Articles</h2>

                    <ul className='flex justify-between lg:items-center flex-wrap xl:flex-nowrap gap-10 mt-10'>
                        {
                            articleCards.map((items) => (
                                <li
                                    key={items.id}
                                    className='lg:w-[400px] lg:h-[550px] rounded-lg overflow-hidden hover:bg-[#fff] hover:shadow-xl duration-200 cursor-pointer group'>
                                    <img className='w-full lg:h-[250px]' src={items.image} alt="card image" />

                                    <div className='p-6 '>
                                        <p className='text-sm'>{items.writer}</p>
                                        <h4 className='my-5 text-xl font-semibold group-hover:text-[#28c6a8]'>{items.heading}</h4>
                                        <p className='text-lg'>{items.infos}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Articles