import React from 'react';

import styles from './styles/gettingStartedArticle.module.css';

function GettingStartedArticle({
    article
}) {
    return (
        <article className={styles['article']}>
            <h3>{article.title}</h3>
            <div className={styles['hexagon']}>
                <div className={styles['hexagon-inner']}>
                    <span>{article.icon}</span>
                </div>
            </div>
            <p>{article.description}</p>
        </article>
    )
}

export default GettingStartedArticle;
