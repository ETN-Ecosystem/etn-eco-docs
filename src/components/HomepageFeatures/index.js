import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {
  FaRocket, FaGlobeAfrica, FaLock, FaTools, FaChalkboardTeacher, FaUsers,
  FaBook, FaExchangeAlt, FaWallet, FaUserSecret, FaLaptopCode, FaMapMarkedAlt,
  FaCreditCard, FaShapes, FaBroadcastTower, FaIdCard, FaShieldAlt, FaCubes,
  FaPeopleCarry, FaNewspaper, FaLink, FaRobot, FaKey
} from 'react-icons/fa';
import { useColorMode } from '@docusaurus/theme-common';

const FeatureList = [
  {
    title: 'Built for ETN Ecosystem',
    image: '/img/animated/etn-eco.webp',
    description: <>Designed for the ETN community, this platform makes it easy to launch and manage all ecosystem tools and utilities.</>,
  },
  {
    title: 'Token-Based Utilities',
    image: '/img/animated/etn_coin.webp',
    description: <>From ETN Pay to ETN DNS, focus on building while $ETN powers the ecosystem — one unified coin, many use cases.</>,
  },
  {
    title: 'Built on TON',
    image: '/img/animated/ton_animated.webp',
    description: <>Built on TON for blazing speed, scalability, and security. $ETN offers real value and frictionless integrations.</>,
  },
  {
    title: 'ETN Learn',
    icon: <FaChalkboardTeacher size={42} color="#FFB400" />,
    description: <>Blockchain-based LMS teaching Web3. Powered by $ETN.</>,
  },
  {
    title: 'ETN DNS',
    icon: <FaGlobeAfrica size={42} color="#FFB400" />,
    description: <>Decentralized TON domains — digital identity for Africa.</>,
  },
  {
    title: 'ETN Hosting',
    icon: <FaRocket size={42} color="#FFB400" />,
    description: <>Reverse proxy Web2/Web3 sites with censorship resistance.</>,
  },
  {
    title: 'ETN Pay',
    icon: <FaLock size={42} color="#FFB400" />,
    description: <>Accept ETN globally through TON wallet. Fast and borderless.</>,
  },
  {
    title: 'ETN Council',
    icon: <FaUsers size={42} color="#FFB400" />,
    description: <>Governance via NFTs — 120 members guiding the future.</>,
  },
  {
    title: 'ETN Ads',
    icon: <FaTools size={42} color="#FFB400" />,
    description: <>Web3 ad network with smart contracts and token rewards.</>,
  },
  {
    title: 'ETN Daily',
    icon: <FaNewspaper size={42} color="#FFB400" />,
    description: <>Local crypto blog covering Ethiopia + TON innovation.</>,
  },
  {
    title: 'Mesewer Books',
    icon: <FaBook size={42} color="#FFB400" />,
    description: <>Telegram-based book store with ETN payments.</>,
  },
  {
    title: 'ETN-Ex',
    icon: <FaExchangeAlt size={42} color="#FFB400" />,
    description: <>DEX aggregator providing decentralized liquidity access.</>,
  },
  {
    title: 'ETN Staking (jVault)',
    icon: <FaWallet size={42} color="#FFB400" />,
    description: <>Earn by staking ETN, aligned with TON’s PoS mechanics.</>,
  },
  {
    title: 'ETN Jem’aa',
    icon: <FaUserSecret size={42} color="#FFB400" />,
    description: <>Privacy-first, local-first social platform for Ethiopia.</>,
  },
  {
    title: 'ETN Netsa-Lancer',
    icon: <FaLaptopCode size={42} color="#FFB400" />,
    description: <>Smart contract-powered freelancing platform.</>,
  },
  {
    title: 'ETN Travel',
    icon: <FaMapMarkedAlt size={42} color="#FFB400" />,
    description: <>Book trips in Ethiopia. Crypto-ready listings.</>,
  },
  {
    title: 'ETN Cards',
    icon: <FaCreditCard size={42} color="#FFB400" />,
    description: <>Virtual cards loadable with USDT — purchased using ETN.</>,
  },
  {
    title: 'ETN Templates',
    icon: <FaShapes size={42} color="#FFB400" />,
    description: <>Digital asset marketplace for creatives. Paid in ETN.</>,
  },
  {
    title: 'ETN-FM',
    icon: <FaBroadcastTower size={42} color="#FFB400" />,
    description: <>Radio with on-chain features. In early test broadcast.</>,
  },
  {
    title: 'ETN Numbers',
    icon: <FaIdCard size={42} color="#FFB400" />,
    description: <>Decentralized identity with NFT and SSO integration.</>,
  },
  {
    title: 'Guardians of Ethiopia',
    icon: <FaShieldAlt size={42} color="#FFB400" />,
    description: <>NFT collection with real TON rewards and access levels.</>,
  },
  {
    title: 'ETN Auth',
    icon: <FaKey size={42} color="#FFB400" />,
    description: <>SSO system using ETN Numbers for web3 login.</>,
  },
  {
    title: 'ETN Gulit',
    icon: <FaCubes size={42} color="#FFB400" />,
    description: <>NFT marketplace designed for the local African creator.</>,
  },
  {
    title: 'ETN Equb',
    icon: <FaPeopleCarry size={42} color="#FFB400" />,
    description: <>Traditional saving groups now blockchain-powered.</>,
  },
  {
    title: 'ETN Devs',
    icon: <FaLaptopCode size={42} color="#FFB400" />,
    description: <>Hire devs and pay in ETN with milestone-based escrow.</>,
  },
  {
    title: 'ETN Bio',
    icon: <FaLink size={42} color="#FFB400" />,
    description: <>Web3 link-in-bio with tipping and wallet profiles.</>,
  },
  {
    title: 'NetsaAI',
    icon: <FaRobot size={42} color="#FFB400" />,
    description: <>Telegram AI bot creator — accept ETN from clients.</>,
  },
  {
    title: 'ETN Authenticator',
    icon: <FaKey size={42} color="#FFB400" />,
    description: <>OTP + 2FA system for apps across the ETN ecosystem.</>,
  },
];

function Feature({ image, icon, title, description }) {
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === 'dark';

  return (
    <div className={clsx('col col--4')} style={{ padding: '1rem' }}>
      <div
        className="card"
        style={{
          padding: '1.5rem',
          borderRadius: '1rem',
          height: '100%',
          backgroundColor: isDarkTheme ? '#1a1a1a' : '#ffffff',
          color: isDarkTheme ? '#ffffff' : '#333333',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <div className="text--center" style={{ marginBottom: '1rem' }}>
          {image ? (
            <img src={image} alt={title} style={{ height: 64 }} />
          ) : (
            icon || <FaRocket size={42} color="#FFB400" />
          )}
        </div>
        <div className="text--center">
          <Heading as="h3" style={{ marginBottom: '0.5rem' }}>
            {title}
          </Heading>
          <p style={{ fontSize: '0.95rem' }}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section
      className={styles.features}
      style={{
        backgroundColor: '#0f2e23',
        padding: '3rem 0',
      }}
    >
      <div className="container">
        <Heading
          as="h2"
          className="text--center"
          style={{
            fontSize: '2.2rem',
            marginBottom: '1.5rem',
            background: 'linear-gradient(90deg, #FFB400, #fff176)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
          }}
        >
          🌍 Every Platform Solves a Problem Unique to Africa
        </Heading>
        <p
          className="text--center"
          style={{
            fontSize: '1rem',
            color: '#cccccc',
            marginBottom: '2.5rem',
            maxWidth: 680,
            margin: '0 auto',
          }}
        >
          The ETN Ecosystem isn't just technology — it's tailored to fix real-world challenges: connectivity, identity, finance, and education. Built for Ethiopia. Built for Africa.
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
