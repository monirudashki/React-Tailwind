import React, { memo } from 'react';

import styles from './styles/gettingStartedSection.module.css';

import { gettingStartedArticles } from '../../../mock/gettingStartedArticles';
import GettingStartedArticle from '../../Shared/GettingStartedArticle/GettingStartedArticle';

function GettingStartedSection() {
    return (
        <section className={styles['section-container']}>
            <h2>Getting Started with Local Reach</h2>

            <div className={styles['article-wrapper']}>
                {gettingStartedArticles.map(article => <GettingStartedArticle key={article.title}
                    article={article}
                />)}
            </div>
        </section>
    )
}

export default memo(GettingStartedSection);
