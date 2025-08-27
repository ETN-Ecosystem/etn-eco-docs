// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ETN Ecosystem',
  tagline: 'Ethiopia Unchained',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.etnecosystem.org',
  baseUrl: '/',

  organizationName: 'ETN-Ecosystem',
  projectName: 'etn-eco-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'am', 'om'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      am: {
        label: 'አማርኛ',
        direction: 'ltr',
      },
      om: {
        label: 'Afaan Oromoo',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/ETN-Ecosystem/etn-eco-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/ETN-Ecosystem/etn-eco-docs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'keywords', content: 'ETN Ecosystem, $ETN, ET Netsa Coin, ETN Ecosystem Documentation, $ETN on TON, ET Netsa Coin Jetton, TON, TON blockchain, decentralized, Ethiopia, crypto, web3, documentation'},
        {name: 'description', content: 'The official documentation for the ETN Ecosystem, a suite of decentralized platforms built on the TON blockchain to empower Ethiopia and beyond.'},
      ],
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ETN Ecosystem',
        logo: {
          alt: 'ETN Ecosystem Logo',
          src: 'img/etn-eco-light.svg',
          srcDark: 'img/etn-eco.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/ETN-Ecosystem/etn-eco-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              { label: 'Telegram: ET Apps', href: 'http://t.me/et_apps' },
              { label: 'Telegram: ETN Channel', href: 'https://t.me/etnetsacoin' },
              { label: 'Airdrop Bot', href: 'https://t.me/ET_Netsa_Airdrop_bot?start=' },
              { label: 'Buy $ETN Bot', href: 'https://t.me/Buy_ETN_bot' },
              { label: 'YouTube', href: 'https://www.youtube.com/@ETNetsaCoin?sub_confirmation=1' },
              { label: 'TikTok', href: 'https://www.tiktok.com/@etneco' },
              { label: 'X / Twitter', href: 'https://x.com/etnetsa' },
              { label: 'CryptoTalkET LinkTree', href: 'https://linktr.ee/cryptotalket' },
            ],
          },
          {
            title: 'Platforms',
            items: [
              { label: 'ETN Learn', href: 'http://etn-learn.ethio-tech.com/' },
              { label: 'ETN Main Website', href: 'http://etn.ethio-tech.com/' },
              { label: 'ETN Platform Stats', href: 'http://stats.ethiotech.net.et/' },
            ],
          },
          {
            title: 'Token & Governance',
            items: [
              { label: 'TON Viewer: $ETN Token', href: 'https://tonviewer.com/EQAz_XrD0hA4cqlprWkpS7TIAhCG4CknAfob1VQm-2mBf5Vl' },
              { label: 'GetGems NFT Collection', href: 'https://getgems.io/etnetsa' },
              { label: 'TON Vote: ETN DAO', href: 'https://ton.vote/EQDv3VVbwaNwqIzn_EVb_dygJGj-AM9CZ80ZnkG8K_k48r-9/about' },
              { label: 'DYOR Token Info', href: 'https://dyor.io/token/EQAz_XrD0hA4cqlprWkpS7TIAhCG4CknAfob1VQm-2mBf5Vl' },
              { label: 'GeckoTerminal Pool', href: 'https://www.geckoterminal.com/ton/pools/EQBt7drPhWyQRIVnSkDzThhiVcq1lwPT371DYX-gGHzN9bwh' },
            ],
          },
          {
            title: 'Docs',
            items: [
              { label: 'Platform Overview', to: '/docs/intro' },
            ],
          },
        ],
        copyright: `
          <div style="text-align: center; font-size: 0.9rem; color: #AAB8C2; display: flex; align-items: center; justify-content: center; gap: 0.4rem;">
            <span>Copyright © ${new Date().getFullYear()} ETN Ecosystem. Built on</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" style="margin-bottom: -2px;">
              <path d="M8 13.2008L12.6156 5.20034C13.07 4.41285 13.2971 4.01911 13.2631 3.69603C13.2334 3.41422 13.0856 3.15824 12.8563 2.99171C12.5935 2.80078 12.1389 2.80078 11.2297 2.80078H8M8 13.2008L3.38436 5.20034C2.93004 4.41285 2.70288 4.01911 2.73691 3.69603C2.76659 3.41422 2.91444 3.15824 3.1437 2.99171C3.40654 2.80078 3.86111 2.80078 4.77026 2.80078L8 2.80078M8 13.2008V2.80078" stroke="#728A96" stroke-width="1.3" stroke-linejoin="round"></path>
            </svg>
            <span>TON</span>
          </div>
        `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;