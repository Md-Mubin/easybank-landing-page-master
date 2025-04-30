import React from 'react'

const Articles = () => {

    const articleCards = [
        {
            id : "1",
            image : "/images/",
            writer : "By Claire Robinson",
            heading : "Receive money in any currency with no fees",
            infos : "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …"
        },

        {
            id : "2",
            image : "/images/",
            writer : "By Wilson Hutton",
            heading : "Treat yourself without worrying about money",
            infos : "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
        },

        {
            id : "3",
            image : "/images/",
            writer : "By Wilson Hutton",
            heading : "Take your Easybank card wherever you go",
            infos : "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you …"
        },

        {
            id : "4",
            image : "/images/",
            writer : "By Claire Robinson",
            heading : "Our invite-only Beta accounts are now live!",
            infos : "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ..."
        }
    ]

    return (
        <>
            <section className='py-20 bg-[#fafafa]'>
                <div className="container">
                    <h2 className='text-[60px]'>Latest Articles</h2>
                </div>
            </section>
        </>
    )
}

export default Articles