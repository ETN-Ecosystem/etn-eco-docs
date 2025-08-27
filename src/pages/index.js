import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const typewriterWords = [
    "ETN DNS",
    "ETN Hosting",
    "ETN Learn",
    "ETN Pay",
    "ETN Gebeya",
    "Mesewer Books",
    "ETN Ads",
    "ETN Council",
    "ETN-Ex",
    "ETN Staking",
    "ETN Jem’aa",
    "ETN Netsa-Lancer",
    "ETN Travel",
    "ETN Cards",
    "ETN Kazna",
    "ETN Templates",
    "ETN-FM",
    "ETN Numbers",
    "Guardians of Ethiopia",
    "ETN Auth",
    "ETN Gulit",
    "ETN Equb",
    "ETN Devs",
    "ETN Daily",
    "ETN Bio",
    "NetsaAI",
    "ETN Authenticator",
  ];

  return (
    <header
      className={clsx('hero', styles.heroBanner)}
      style={{
        background: 'linear-gradient(135deg, #133A2A 0%, #1B5E20 100%)',
        padding: '5rem 0',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="container text--center">
        <img
          src="/img/etn-eco.svg"
          alt="ETN Ecosystem Logo"
          style={{
            height: '100px',
            marginBottom: '1.5rem',
            filter: 'drop-shadow(0px 0px 6px rgba(255, 180, 0, 0.3))',
          }}
        />

        <Heading
          as="h1"
          className="hero__title"
          style={{
            fontSize: '1.5rem',
            color: '#ffffff',
            textShadow: '0 1px 4px rgba(0,0,0,0.4)',
          }}
        >
          <Translate
            id="homepage.title"
            values={{
              etn: <span style={{ color: '#FFB400' }}>ETN</span>,
            }}
          >
            {'The {etn} Ecosystem'}
          </Translate>
        </Heading>

        <p
          className="hero__subtitle"
          style={{
            fontSize: '1.1rem',
            color: '#ffffffcc',
            marginBottom: '2.5rem',
            fontStyle: 'italic',
          }}
        >
          <Translate id="homepage.subtitle">Ethiopia Unchained</Translate>
        </p>

        <div style={{ fontSize: '1.15rem', color: '#ffffff' }}>
          <Translate id="homepage.powering">Powering:</Translate>
        </div>
        <div
          style={{
            fontSize: '2.1rem',
            color: '#FFB400',
            fontWeight: 'bold',
            marginBottom: '2rem',
            minHeight: '3.2rem',
            textShadow: '0 1px 2px rgba(0,0,0,0.4)',
          }}
        >
          <Typewriter
            words={typewriterWords}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={25}
            delaySpeed={1500}
          />
        </div>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{
              backgroundColor: '#FFB400',
              color: '#133A2A',
              fontWeight: 'bold',
              boxShadow: '0 6px 16px rgba(255, 180, 0, 0.35)',
              transition: 'all 0.3s ease-in-out',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1.0)';
            }}
          >
            <Translate id="homepage.explore_button">Explore the Platforms 🚀</Translate>
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
      title={`${translate({
        id: 'homepage.layout.title',
        message: 'Hello from',
        description: 'The first part of the page title on the home page',
      })} ${siteConfig.title}`}
      description={translate({
        id: 'homepage.layout.description',
        message: 'Explore the decentralized platforms that make up the ETN Ecosystem. Built on the TON blockchain to empower Ethiopia and beyond.',
        description: 'The meta description of the home page',
      })}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}