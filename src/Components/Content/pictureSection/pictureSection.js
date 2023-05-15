import React, { memo } from 'react';

import styles from './styles/pictureSection.module.css';

function PictureSection() {
    return (
        <section className={styles['pictureSection-container']}>
            <div className={styles['img-wrapper']}></div>
        </section>
    )
}

export default memo(PictureSection);
