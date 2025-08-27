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
    title: 'ለETN ስነ-ምህዳር የተሰራ',
    image: '/img/animated/etn-eco.webp',
    description: <>ለETN ማህበረሰብ የተነደፈው ይህ መድረክ ሁሉንም የስነ-ምህዳር መሳሪያዎች እና መገልገያዎችን ለማስጀመር እና ለማስተዳደር ቀላል ያደርገዋል።</>,
  },
  {
    title: 'ቶከን-ተኮር መገልገያዎች',
    image: '/img/animated/etn_coin.webp',
    description: <>ከETN Pay እስከ ETN DNS ድረስ፣ $ETN ስነ-ምህዳሩን በሚያጎለብትበት ጊዜ በመገንባት ላይ ያተኩሩ — አንድ የተዋሃደ ኮይን፣ ብዙ የአጠቃቀም ሁኔታዎች።</>,
  },
  {
    title: 'በቶን ላይ የተገነባ',
    image: '/img/animated/ton_animated.webp',
    description: <>በቶን ላይ የተገነባው ለፈጣን ፍጥነት፣ መጠነ-ሰፊነት እና ደህንነት። $ETN እውነተኛ እሴት እና እንከን የለሽ ውህደቶችን ያቀርባል።</>,
  },
  {
    title: 'ETN Learn',
    icon: <FaChalkboardTeacher size={42} color="#FFB400" />,
    description: <>ብሎክቼይን-ተኮር LMS Web3ን ያስተምራል። በ$ETN የተጎላበተ።</>,
  },
  {
    title: 'ETN DNS',
    icon: <FaGlobeAfrica size={42} color="#FFB400" />,
    description: <>ያልተማከለ የቶን ጎራዎች — ለአፍሪካ ዲጂታል ማንነት።</>,
  },
  {
    title: 'ETN Hosting',
    icon: <FaRocket size={42} color="#FFB400" />,
    description: <>የተገላቢጦሽ ፕሮክሲ Web2/Web3 ጣቢያዎች ከሳንሱር መቋቋም ጋር።</>,
  },
  {
    title: 'ETN Pay',
    icon: <FaLock size={42} color="#FFB400" />,
    description: <>በቶን ቦርሳ በኩል ETNን በአለም አቀፍ ደረጃ ይቀበሉ። ፈጣን እና ድንበር የለሽ።</>,
  },
  {
    title: 'ETN Council',
    icon: <FaUsers size={42} color="#FFB400" />,
    description: <>በNFTs በኩል አስተዳደር — 120 አባላት የወደፊቱን ይመራሉ።</>,
  },
  {
    title: 'ETN Ads',
    icon: <FaTools size={42} color="#FFB400" />,
    description: <>ስማርት ኮንትራቶች እና ቶከን ሽልማቶች ያለው Web3 የማስታወቂያ አውታረ መረብ።</>,
  },
  {
    title: 'ETN Daily',
    icon: <FaNewspaper size={42} color="#FFB400" />,
    description: <>ኢትዮጵያን + ቶን ፈጠራን የሚሸፍን የአካባቢ ክሪፕቶ ብሎግ።</>,
  },
  {
    title: 'መሰወር መጽሐፍት',
    icon: <FaBook size={42} color="#FFB400" />,
    description: <>ቴሌግራም-ተኮር የመጽሐፍ መደብር ከETN ክፍያዎች ጋር።</>,
  },
  {
    title: 'ETN-Ex',
    icon: <FaExchangeAlt size={42} color="#FFB400" />,
    description: <>ያልተማከለ ፈሳሽነት መዳረሻ የሚያቀርብ DEX አግሪጌተር።</>,
  },
  {
    title: 'ETN Staking (jVault)',
    icon: <FaWallet size={42} color="#FFB400" />,
    description: <>ETNን ስቴኪንግ በማድረግ ያግኙ፣ ከቶን PoS መካኒኮች ጋር የተጣጣመ።</>,
  },
  {
    title: 'ETN ጀመዓ',
    icon: <FaUserSecret size={42} color="#FFB400" />,
    description: <>ግላዊነት-መጀመሪያ፣ ለአፍሪካ የአካባቢ-መጀመሪያ ማህበራዊ መድረክ።</>,
  },
  {
    title: 'ETN ነፃ-ላንሰር',
    icon: <FaLaptopCode size={42} color="#FFB400" />,
    description: <>ስማርት ኮንትራት-የተጎላበተ የፍሪላንስ መድረክ።</>,
  },
  {
    title: 'ETN ጉዞ',
    icon: <FaMapMarkedAlt size={42} color="#FFB400" />,
    description: <>በኢትዮጵያ ውስጥ ጉዞዎችን ያስይዙ። ክሪፕቶ-ዝግጁ ዝርዝሮች።</>,
  },
  {
    title: 'ETN Cards',
    icon: <FaCreditCard size={42} color="#FFB400" />,
    description: <>በUSDT ሊጫኑ የሚችሉ ምናባዊ ካርዶች — በETN የተገዙ።</>,
  },
  {
    title: 'ETN Templates',
    icon: <FaShapes size={42} color="#FFB400" />,
    description: <>ለፈጣሪዎች ዲጂታል ንብረት የገበያ ቦታ። በETN ይከፈላል።</>,
  },
  {
    title: 'ETN-FM',
    icon: <FaBroadcastTower size={42} color="#FFB400" />,
    description: <>በኦን-ቼይን ባህሪያት ያለው ሬዲዮ። በመጀመሪያ የሙከራ ስርጭት ላይ።</>,
  },
  {
    title: 'ETN Numbers',
    icon: <FaIdCard size={42} color="#FFB400" />,
    description: <>ያልተማከለ ማንነት ከNFT እና SSO ውህደት ጋር።</>,
  },
  {
    title: 'የኢትዮጵያ ጠባቂዎች',
    icon: <FaShieldAlt size={42} color="#FFB400" />,
    description: <>እውነተኛ የቶን ሽልማቶች እና የመዳረሻ ደረጃዎች ያለው NFT ስብስብ።</>,
  },
  {
    title: 'ETN Auth',
    icon: <FaKey size={42} color="#FFB400" />,
    description: <>ETN Numbersን ለweb3 መግቢያ የሚጠቀም SSO ስርዓት።</>,
  },
  {
    title: 'ETN ጉሊት',
    icon: <FaCubes size={42} color="#FFB400" />,
    description: <>ለአካባቢው የአፍሪካ ፈጣሪ የተነደፈ NFT የገበያ ቦታ።</>,
  },
  {
    title: 'ETN እቁብ',
    icon: <FaPeopleCarry size={42} color="#FFB400" />,
    description: <>ባህላዊ የቁጠባ ቡድኖች አሁን በብሎክቼይን የተጎላበቱ።</>,
  },
  {
    title: 'ETN Devs',
    icon: <FaLaptopCode size={42} color="#FFB400" />,
    description: <>ገንቢዎችን ይቀጥሩ እና በETN ውስጥ በምዕራፍ-ተኮር ኤስክሮው ይክፈሉ።</>,
  },
  {
    title: 'ETN Bio',
    icon: <FaLink size={42} color="#FFB400" />,
    description: <>በቲፒንግ እና በቦርሳ መገለጫዎች ያለው Web3 ሊንክ-በ-ባዮ።</>,
  },
  {
    title: 'ነፃAI',
    icon: <FaRobot size={42} color="#FFB400" />,
    description: <>ቴሌግራም AI ቦት ፈጣሪ — ከደንበኞች ETN ይቀበሉ።</>,
  },
  {
    title: 'ETN Authenticator',
    icon: <FaKey size={42} color="#FFB400" />,
    description: <>በETN ስነ-ምህዳር ውስጥ ላሉ መተግበሪያዎች OTP + 2FA ስርዓት።</>,
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
          🌍 እያንዳንዱ መድረክ ለአፍሪካ ልዩ የሆነ ችግርን ይፈታል
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
          የETN ስነ-ምህዳር ቴክኖሎጂ ብቻ አይደለም — ግንኙነትን፣ ማንነትን፣ ፋይናንስን እና ትምህርትን ጨምሮ እውነተኛ ዓለም አቀፍ ችግሮችን ለመፍታት የተበጀ ነው። ለኢትዮጵያ የተሰራ። ለአፍሪካ የተሰራ።
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
