import React from 'react'

const Articles = () => {

    const articleCards = [
        {
            id : "1",
            image : "/images/",
            writer : "By Claire Robinson",
            heading : "",
            infos : ""
        },

        {
            id : "2",
            image : "/images/",
            writer : "By Wilson Hutton",
            heading : "",
            infos : ""
        },

        {
            id : "3",
            image : "/images/",
            writer : "By Wilson Hutton",
            heading : "",
            infos : ""
        },

        {
            id : "4",
            image : "/images/",
            writer : "By Claire Robinson",
            heading : "",
            infos : ""
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