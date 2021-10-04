import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Technical Blog',
    link: '/blog',
    img: '/img/tgrall-screen.png',
    description: (
      <>
        Sharing my experience and discoveries around Development, DevOps, Github and other things....
      </>
    ),
  },
  {
    title: 'Windsurfing Sessions',
    link: 'https://windr.org/riders/10155176187373201',
    img: '/img/tgrall-001.png',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Talks',
    link: '/talks',
    img: '/img/tgrall-devoxx-2021.png',
    description: (
      <>
        Past and future talks
      </>
    ),
  },
];

function Feature({img, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link} >   
          <img src={img} alt={title} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          <a href={link} >   
          {title}
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
