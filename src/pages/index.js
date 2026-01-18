import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Translate, { translate } from '@docusaurus/Translate';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const typewriterWords = [
    translate({ id: 'homepage.typewriterWords.etnDNS', message: 'ETN DNS' }),
    translate({ id: 'homepage.typewriterWords.etnHosting', message: 'ETN Hosting' }),
    translate({ id: 'homepage.typewriterWords.etnLearn', message: 'ETN Learn' }),
    translate({ id: 'homepage.typewriterWords.etnPay', message: 'ETN Pay' }),
    translate({ id: 'homepage.typewriterWords.etnGebeya', message: 'ETN Gebeya' }),
    translate({ id: 'homepage.typewriterWords.mesewerBooks', message: 'Mesewer Books' }),
    translate({ id: 'homepage.typewriterWords.etnAds', message: 'ETN Ads' }),
    translate({ id: 'homepage.typewriterWords.etnCouncil', message: 'ETN Council' }),
    translate({ id: 'homepage.typewriterWords.etnEx', message: 'ETN-Ex' }),
    translate({ id: 'homepage.typewriterWords.etnStaking', message: 'ETN Staking' }),
    translate({ id: 'homepage.typewriterWords.etnJemaa', message: 'ETN Jem’aa' }),
    translate({ id: 'homepage.typewriterWords.etnNetsaLancer', message: 'ETN Netsa-Lancer' }),
    translate({ id: 'homepage.typewriterWords.etnTravel', message: 'ETN Travel' }),
    translate({ id: 'homepage.typewriterWords.etnCards', message: 'ETN Cards' }),
    translate({ id: 'homepage.typewriterWords.etnKazna', message: 'ETN Kazna' }),
    translate({ id: 'homepage.typewriterWords.etnTemplates', message: 'ETN Templates' }),
    translate({ id: 'homepage.typewriterWords.etnFM', message: 'ETN-FM' }),
    translate({ id: 'homepage.typewriterWords.etnNumbers', message: 'ETN Numbers' }),
    translate({ id: 'homepage.typewriterWords.guardiansOfEthiopia', message: 'Guardians of Ethiopia' }),
    translate({ id: 'homepage.typewriterWords.etnAuth', message: 'ETN Auth' }),
    translate({ id: 'homepage.typewriterWords.etnGulit', message: 'ETN Gulit' }),
    translate({ id: 'homepage.typewriterWords.etnEqub', message: 'ETN Equb' }),
    translate({ id: 'homepage.typewriterWords.etnDevs', message: 'ETN Devs' }),
    translate({ id: 'homepage.typewriterWords.etnDaily', message: 'ETN Daily' }),
    translate({ id: 'homepage.typewriterWords.etnBio', message: 'ETN Bio' }),
    translate({ id: 'homepage.typewriterWords.netsaAI', message: 'NetsaAI' }),
    translate({ id: 'homepage.typewriterWords.etnAuthenticator', message: 'ETN Authenticator' }),
  ];

  return (
    <header
      className={clsx('hero', styles.heroBanner)}
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
            {'{etn} Ecosystem'}
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


import Head from '@docusaurus/Head';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ETN Ecosystem Docs",
    "alternateName": ["ETN Docs", "ETN Ecosystem Documentation"],
    "url": "https://docs.etnecosystem.org",
    "applicationCategory": "Web3 Application",
    "operatingSystem": "TON Blockchain",
    "description": "The official documentation for the ETN Ecosystem, a suite of decentralized platforms built on the TON blockchain to empower Ethiopia and beyond. It serves the ETN Ecosystem by providing comprehensive guides and references.",
    "disambiguatingDescription": "This application is part of the ETN Ecosystem built on The Open Network (TON) Blockchain. It utilizes the $ETN Jetton. It is completely distinct from and unrelated to the Electroneum blockchain or cryptocurrency.",
    "author": {
      "@type": "Person",
      "name": "Jason Peters (JP)",
      "jobTitle": "Founder of ETN Ecosystem",
      "url": "https://jasonpeters-ton.etnecosystem.org/",
      "sameAs": [
        "https://x.com/etnetsa",
        "https://t.me/et_apps"
      ]
    },
    "contributor": {
      "@type": "Person",
      "name": "Nathnael Biruk",
      "jobTitle": "Co-Founder of ETN Ecosystem",
      "url": "https://linkedin.com/in/nathnaelbiruk",
      "sameAs": [
        "https://x.com/nathnaelbruke",
        "https://github.com/NathiB"
      ]
    },
    "isRelatedTo": {
      "@type": "FinancialProduct",
      "name": "ET Netsa Coin ($ETN)",
      "tickerSymbol": "ETN",
      "description": "The native utility token of the ETN Ecosystem on TON. Distinct from Electroneum.",
      "identifier": "EQAz_XrD0hA4cqlprWkpS7TIAhCG4CknAfob1VQm-2mBf5Vl"
    },
    "sameAs": [
      "https://x.com/etnetsa",
      "https://t.me/et_apps",
      "https://t.me/etnetsacoin",
      "https://www.youtube.com/@ETNetsaCoin"
    ]
  };

  return (
    <Layout
      title={siteConfig.tagline}
      description={translate({
        id: 'homepage.layout.description',
        message: 'Explore the decentralized platforms that make up the ETN Ecosystem. Built on the TON blockchain to empower Ethiopia and beyond.',
        description: 'The meta description of the home page',
      })}
    >
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}