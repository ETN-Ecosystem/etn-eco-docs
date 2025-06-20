import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx('hero', styles.heroBanner)}
      style={{ backgroundColor: '#133A2A', padding: '5rem 0' }}
    >
      <div className="container text--center">
        {/* ✅ Replaced with direct <img src> instead of import */}
        <img
          src="/img/etn-eco.svg"
          alt="ETN Ecosystem Logo"
          style={{ height: '100px', marginBottom: '1.5rem' }}
        />

        {/* Main Title */}
        <Heading
          as="h1"
          className="hero__title"
          style={{ fontSize: '3.5rem', color: '#ffffff' }}
        >
          The <span style={{ color: '#FFB400' }}>ETN</span> Ecosystem
        </Heading>

        {/* Slogan */}
        <p
          className="hero__subtitle"
          style={{
            fontSize: '1.5rem',
            color: '#ffffffcc',
            marginBottom: '3rem',
          }}
        >
          Ethiopia Unchained
        </p>

        {/* Powering static + typewriter animated platforms below */}
        <div style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 'bold' }}>
          Powering:
        </div>
        <div
          style={{
            fontSize: '4.5rem',
            color: '#FFB400',
            fontWeight: 'bold',
            marginBottom: '2rem',
            minHeight: '3.2rem',
          }}
        >
          <Typewriter
            words={[
              'ETN DNS',
              'ETN Hosting',
              'ETN Learn',
              'ETN Pay',
              'ETN Gebeya',
              'Mesewer Books',
              'ETN Ads',
              'ETN Council',
              'ETN-Ex',
              'ETN Staking',
              'ETN Jem’aa',
              'ETN Netsa-Lancer',
              'ETN Travel',
              'ETN Cards',
              'ETN Kazna',
              'ETN Templates',
              'ETN-FM',
              'ETN Numbers',
              'Guardians of Ethiopia',
              'ETN Auth',
              'ETN Gulit',
              'ETN Equb',
              'ETN Devs',
              'ETN Daily',
              'ETN Bio',
              'NetsaAI',
              'ETN Authenticator',
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={25}
            delaySpeed={1500}
          />
        </div>

        {/* Button */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{
              backgroundColor: '#FFB400',
              color: '#133A2A',
              fontWeight: 'bold',
            }}
          >
            Explore the Platforms 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
