import React, { memo } from 'react';

function PictureSection() {
    return (
        <section
            className='w-full h-[240px] flex justify-center items-center 
        py-5 px-[10px] xl:h-[70vh] xl:py-[80px] xl:px-[150px]'>
            <div className='w-full h-full bg-pictureSectionImgResp bg-no-repeat bg-cover xl:bg-pictureSectionImg'></div>
        </section>
    )
}

export default memo(PictureSection);
