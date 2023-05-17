import React, { memo } from 'react';

import { gettingStartedArticles } from '../../../mock/gettingStartedArticles';
import GettingStartedArticle from '../../Shared/GettingStartedArticle/GettingStartedArticle';

function GettingStartedSection() {
    return (
        <section className='w-full h-auto p-[10px] xl:p-0 xl:h-[80vh] bg-mainOrangeColor text-mainWhiteColor'>
            <h2 className='text-4xl font-bold font-roboto pt-9 xl:pt-[90px] mb-5'>
                Getting Started with Local Reach
            </h2>

            <div className='w-full h-full xl:w-[80%] xl:h-[60%] flex justify-center items-center flex-col xl:flex-row
            xl:gap-6 gap-[50px] xl:my-[70px] xl:mx-auto m-0 pb-10 xl:pb-0'>
                {gettingStartedArticles.map(article => <GettingStartedArticle key={article.title}
                    article={article}
                />)}
            </div>
        </section>
    )
}

export default memo(GettingStartedSection);
