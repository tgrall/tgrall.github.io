import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

export default function BlogPostList() {
    const recentPosts = require("../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");

    return (

        <section className={styles.features}>
        <div className="container">
            <div className="row">
                <div className={clsx('col col--4')}></div>
                <div className={clsx('col col--4')}>
                    <h3>Recent Posts</h3>
                        <ul>
                        {recentPosts.items.slice(0, 5).map((item, index) => (
                        <li key={index}>
                        <a href={`${item.permalink}`}>{item.title}</a>{" "}
                        </li>
                        ))}
                        </ul>
                </div>
                <div className={clsx('col col--4')}></div>
            </div>
        </div>
        </section>
    );
}
