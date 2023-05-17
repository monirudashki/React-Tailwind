import React from 'react';

function GettingStartedArticle({
    article
}) {
    return (
        <article className='w-full h-auto xl:w-[30%] xl:h-full flex justify-center items-center
        gap-4 flex-col'>
            <h3 className='text-4xl mb-[100px] xl:text-3xl font-roboto'>{article.title}</h3>
            <div className='h-0 w-[200px] border-t-[80px] border-t-[white] border-solid
            relative border-x-[50px] border-x-transparent
            before:absolute before:content-[""] before:h-0 before:w-[200px]
            before:border-b-[80px] before:border-b-[white] before:border-solid
            before:border-x-[50px] before:border-x-transparent before:bottom-[80px] before:left-[-50px]
            '>
                <div className='h-0 w-[175px] absolute -translate-x-2/4 translate-y-[-112%] 
                border-t-[71px] border-t-mainOrangeColor border-x-[42px] 
                border-x-transparent border-solid left-2/4 top-[112%]
                before:absolute before:content-[""] before:h-0 before:w-[175px] before:left-[-42px]
                before:border-b-[70px] before:border-b-mainOrangeColor 
                before:border-x-[42px] before:border-x-transparent before:border-solid before:bottom-[70px]'>
                    <span className='text-[46px] text-center absolute -translate-x-2/4 translate-y-[-150%] left-2/4 top-[150%]'>{article.icon}</span>
                </div>
            </div>
            <p className='font-poppins text-center p-1 xl:py-5 xl:px-[80px]'>{article.description}</p>
        </article>
    )
}

export default GettingStartedArticle;
