import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Built for ETN Ecosystem',
    image: '/img/animated/etn-eco.webp',
    description: (
      <>
        Designed for the ETN community, this platform makes it easy to launch and manage all ecosystem tools and utilities.
      </>
    ),
  },
  {
    title: 'Token-Based Utilities',
    image: '/img/animated/etn_coin.webp',
    description: (
      <>
        From ETN Pay to ETN DNS, focus on building while $ETN powers the ecosystem — one unified coin, many use cases.
      </>
    ),
  },
  {
    title: 'Built on TON',
    image: '/img/animated/ton_animated.webp',
    description: (
      <>
         Built on TON for blazing speed, scalability, and security. We simplify $ETN token integration beyond other frameworks — with a limited supply, rising demand, and increasing value, your payouts often exceed your intended price.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt={title} className={styles.featureImage} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
