import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';
import {
  FaRocket, FaGlobeAfrica, FaLock, FaTools, FaChalkboardTeacher, FaUsers,
  FaBook, FaExchangeAlt, FaWallet, FaUserSecret, FaLaptopCode, FaMapMarkedAlt,
  FaCreditCard, FaShapes, FaBroadcastTower, FaIdCard, FaShieldAlt, FaCubes,
  FaPeopleCarry, FaNewspaper, FaLink, FaRobot, FaKey
} from 'react-icons/fa';

const FeatureList = [
  {
    title: <Translate id="feature.etn_eco.title">Built for ETN Ecosystem</Translate>,
    image: '/img/animated/etn-eco.webp',
    description: <Translate id="feature.etn_eco.desc">Designed for the ETN community, this platform makes it easy to launch and manage all ecosystem tools and utilities.</Translate>,
  },
  {
    title: <Translate id="feature.token.title">Token-Based Utilities</Translate>,
    image: '/img/animated/etn_coin.webp',
    description: <Translate id="feature.token.desc">From ETN Pay to ETN DNS, focus on building while $ETN powers the ecosystem — one unified coin, many use cases.</Translate>,
  },
  {
    title: <Translate id="feature.ton.title">Built on TON</Translate>,
    image: '/img/animated/ton_animated.webp',
    description: <Translate id="feature.ton.desc">Built on TON for blazing speed, scalability, and security. $ETN offers real value and frictionless integrations.</Translate>,
  },
  {
    title: <Translate id="feature.identity.title">ETN Identity</Translate>,
    image: 'https://account.etnecosystem.org/etn_ident_darkmode_logo.png',
    description: <Translate id="feature.identity.desc">The world's first Sovereign OIDC Protocol on TON. It bridges the gap between the chaotic anonymity of Web3 and the legal certainty of the real world. Forge your universal, on-chain identity for the ETN Ecosystem.</Translate>,
  },
  {
    title: <Translate id="feature.vibe.title">ETN Vibe</Translate>,
    image: 'https://camo.githubusercontent.com/ef30d0af77088acf7b9150f09d889175189d7b447567adae1be9691e04fb75e6/68747470733a2f2f766962652e65746e65636f73797374656d2e6f72672f5f6e6578742f696d6167653f75726c3d25324665746e2d766962652d6c6f676f2e706e6726773d33383426713d3735',
    description: <Translate id="feature.vibe.desc">The premier "Vibe Coding" platform in The ETN Ecosystem. It bridges the gap between human ideas and AI execution by translating natural language concepts into developer-ready Product Requirements Documents (PRDs), expert prompts, and full-stack software blueprints.</Translate>,
  },
  {
    title: 'ETN Learn',
    image: 'https://account.etnecosystem.org/ecosystem_logos/etn_learn.png',
    description: <Translate id="feature.learn.desc">An innovative online learning platform offering a wide range of courses, primarily focusing on blockchain and cryptocurrency education. Courses are available for both free and paid. The platform also encourages other instructors to host their courses on the platform, subject to review. It is an online education marketplace.</Translate>,
  },
  {
    title: 'ETN DNS',
    icon: <FaGlobeAfrica size={42} color="#FFB400" />,
    description: <Translate id="feature.dns.desc">Decentralized TON domains — digital identity for Africa.</Translate>,
  },
  {
    title: 'ETN Hosting',
    image: 'https://account.etnecosystem.org/ecosystem_logos/ETN_host.png',
    description: <Translate id="feature.hosting.desc">Reverse proxy Web2/Web3 sites with censorship resistance.</Translate>,
  },
  {
    title: 'ETN Pay',
    icon: <EtnPayIcon />,
    description: <Translate id="feature.pay.desc">Accept ETN globally through TON wallet. Fast and borderless.</Translate>,
  },
  {
    title: 'ETN Council',
    icon: <FaUsers size={42} color="#FFB400" />,
    description: <Translate id="feature.council.desc">Governance via NFTs — 120 members guiding the future.</Translate>,
  },
  {
    title: 'ETN Ads',
    icon: <FaTools size={42} color="#FFB400" />,
    description: <Translate id="feature.ads.desc">Web3 ad network with smart contracts and token rewards.</Translate>,
  },
  {
    title: 'ETN Daily',
    icon: <FaNewspaper size={42} color="#FFB400" />,
    description: <Translate id="feature.daily.desc">Local crypto blog covering Ethiopia + TON innovation.</Translate>,
  },
  {
    title: 'Mesewer Books',
    icon: <FaBook size={42} color="#FFB400" />,
    description: <Translate id="feature.books.desc">Telegram-based book store with ETN payments.</Translate>,
  },
  {
    title: 'ETN-Ex',
    icon: <FaExchangeAlt size={42} color="#FFB400" />,
    description: <Translate id="feature.ex.desc">DEX aggregator providing decentralized liquidity access.</Translate>,
  },
  {
    title: 'ETN Staking (jVault)',
    icon: <FaWallet size={42} color="#FFB400" />,
    description: <Translate id="feature.staking.desc">Earn by staking ETN, aligned with TON’s PoS mechanics.</Translate>,
  },
  {
    title: 'ETN Jem’aa',
    icon: <FaUserSecret size={42} color="#FFB400" />,
    description: <Translate id="feature.jemaa.desc">Privacy-first, local-first social platform for Ethiopia.</Translate>,
  },
  {
    title: 'ETN Netsa-Lancer',
    icon: <FaLaptopCode size={42} color="#FFB400" />,
    description: <Translate id="feature.lancer.desc">Smart contract-powered freelancing platform.</Translate>,
  },
  {
    title: 'ETN Travel',
    icon: <FaMapMarkedAlt size={42} color="#FFB400" />,
    description: <Translate id="feature.travel.desc">Book trips in Ethiopia. Crypto-ready listings.</Translate>,
  },
  {
    title: 'ETN Cards',
    icon: <FaCreditCard size={42} color="#FFB400" />,
    description: <Translate id="feature.cards.desc">Virtual cards loadable with USDT — purchased using ETN.</Translate>,
  },
  {
    title: 'ETN Templates',
    icon: <FaShapes size={42} color="#FFB400" />,
    description: <Translate id="feature.templates.desc">Digital asset marketplace for creatives. Paid in ETN.</Translate>,
  },
  {
    title: 'ETN-FM',
    icon: <FaBroadcastTower size={42} color="#FFB400" />,
    description: <Translate id="feature.fm.desc">Radio with on-chain features. In early test broadcast.</Translate>,
  },
  {
    title: 'ETN Numbers',
    icon: <FaIdCard size={42} color="#FFB400" />,
    description: <Translate id="feature.numbers.desc">Decentralized identity with NFT and SSO integration.</Translate>,
  },
  {
    title: 'Guardians of Ethiopia',
    icon: <FaShieldAlt size={42} color="#FFB400" />,
    description: <Translate id="feature.guardians.desc">NFT collection with real TON rewards and access levels.</Translate>,
  },
  {
    title: 'ETN Auth',
    icon: <FaKey size={42} color="#FFB400" />,
    description: <Translate id="feature.auth.desc">SSO system using ETN Numbers for web3 login.</Translate>,
  },
  {
    title: 'ETN Gulit',
    icon: <FaCubes size={42} color="#FFB400" />,
    description: <Translate id="feature.gulit.desc">NFT marketplace designed for the local African creator.</Translate>,
  },
  {
    title: 'ETN Equb',
    icon: <FaPeopleCarry size={42} color="#FFB400" />,
    description: <Translate id="feature.equb.desc">Traditional saving groups now blockchain-powered.</Translate>,
  },
  {
    title: 'ETN Devs',
    icon: <FaLaptopCode size={42} color="#FFB400" />,
    description: <Translate id="feature.devs.desc">Hire devs and pay in ETN with milestone-based escrow.</Translate>,
  },
  {
    title: 'ETN Bio',
    icon: <FaLink size={42} color="#FFB400" />,
    description: <Translate id="feature.bio.desc">Web3 link-in-bio with tipping and wallet profiles.</Translate>,
  },
  {
    title: 'NetsaAI',
    icon: <FaRobot size={42} color="#FFB400" />,
    description: <Translate id="feature.ai.desc">Telegram AI bot creator — accept ETN from clients.</Translate>,
  },
  {
    title: 'ETN Authenticator',
    icon: <FaKey size={42} color="#FFB400" />,
    description: <Translate id="feature.authenticator.desc">OTP + 2FA system for apps across the ETN ecosystem.</Translate>,
  },
];

function EtnPayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="auto" style={{ maxHeight: 100 }}>
      <defs>
        <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#134a36', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0e2b1f', stopOpacity: 1 }} />
        </linearGradient>

        <linearGradient id="chipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FFB400', stopOpacity: 1 }} />
        </linearGradient>

        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dx="0" dy="4" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect x="26" y="111" width="460" height="290" rx="24" ry="24" fill="url(#cardGradient)" filter="url(#shadow)" stroke="#133A2A" strokeWidth="2" />

      <rect x="65" y="190" width="90" height="70" rx="8" ry="8" fill="#FFB400" opacity="0.2" />

      <g transform="translate(74, 195) scale(0.12311)">
        <path fill="url(#chipGradient)" d="M441.8,65.3v41.2H181.2V65.3c-4.3,4.2-10.7,8-14.6,12.2c-18.6,17.8-36.9,36.2-55.5,54V280h330.8v122.5l70.2-66.2V214.8  H181.2v-42.7l330.8-0.6V0H249.3c-24.1,20.5-45.2,43.9-68,65.6h260.6V65.3z M68.7,171.8L0,236.4V391h326.5v121  c24.4-19.9,45.8-43,68.7-64.7V324.2H68.7V172.1V171.8z" />
      </g>

      <text x="256" y="270" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="40" letterSpacing="2">
        <tspan fill="#FFFFFF">ETN</tspan>
        <tspan fill="#FFB400">PAY</tspan>
      </text>

      <g transform="translate(420, 256)" stroke="#FFB400" strokeWidth="6" strokeLinecap="round" fill="none">
        <path d="M-30,10 A 35,35 0 0 1 -30,-10" opacity="0.6" />
        <path d="M-15,18 A 50,50 0 0 1 -15,-18" opacity="0.8" />
        <path d="M0,26 A 65,65 0 0 1 0,-26" opacity="1.0" />
      </g>

      <g fill="#1A4F3A">
        <rect x="65" y="340" width="240" height="12" rx="4" />
        <rect x="65" y="365" width="140" height="12" rx="4" opacity="0.6" />
      </g>

      <path d="M50,113 H462 A22,22 0 0 1 484,135 V160 H28 V135 A22,22 0 0 1 50,113 Z" fill="#ffffff" opacity="0.05" />
    </svg>
  );
}

function Feature({ image, icon, title, description }) {
  return (
    <div className={clsx('col col--4')} style={{ padding: '1rem' }}>
      <div className={clsx('card glass-card', styles.featureCard)}>
        <div className={clsx("text--center", styles.featureIcon)}>
          {image ? (
            <img src={image} alt={typeof title === 'string' ? title : "Feature Image"} className={styles.featureImage} />
          ) : (
            icon
          )}
        </div>
        <div className="text--center">
          <Heading as="h3" className={styles.featureTitle}>
            {title}
          </Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className="text--center premium-gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--ifm-color-primary-lightest)' }}>
          <Translate id="homepage.features.heading">🌍 Every Platform Solves a Problem Unique to Africa</Translate>
        </Heading>
        <p className="text--center" style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '700px', margin: '0 auto 3rem auto' }}>
          <Translate id="homepage.features.subheading">
            The ETN Ecosystem isn't just technology — it's tailored to fix real-world challenges: connectivity, identity, finance, and education. Built for Ethiopia. Built for Africa.
          </Translate>
        </p>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
