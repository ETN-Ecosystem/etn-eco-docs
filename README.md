# ETN Ecosystem Documentation

<!-- ETN Ecosystem Badges - Final Version with Links -->

<!-- Main Project Information -->
<p align="center">
  <a href="https://etnecosystem.org/" target="_blank">
    <img src="https://img.shields.io/badge/ETN%20Ecosystem-133A2A" alt="ETN Ecosystem"/>
  </a>
  <a href="https://ton.org/" target="_blank">
    <img src="https://img.shields.io/badge/Built%20on-TON-0088CC?logo=ton&logoColor=white" alt="Built on TON"/>
  </a>
  <a href="https://docs.etnecosystem.org/" target="_blank">
    <img src="https://img.shields.io/badge/Read%20the-Docs-133A2A?logo=readthedocs&labelColor=FFB400" alt="Documentation"/>
  </a>
  <a href="http://etn-learn.ethio-tech.com/" target="_blank">
    <img src="https://img.shields.io/badge/ETN-Learn-133A2A?logo=gitbook&labelColor=FFB400" alt="ETN Learn"/>
  </a>
</p>

<!-- Social & Community Links -->
<p align="center">
  <a href="https://x.com/etnetsa" target="_blank">
    <img src="https://img.shields.io/badge/Follow%20on-X-133A2A?logo=x&labelColor=FFB400" alt="Follow on X"/>
  </a>
  <a href="https://www.youtube.com/@ETNetsaCoin?sub_confirmation=1" target="_blank">
    <img src="https://img.shields.io/badge/Subscribe-YouTube-133A2A?logo=youtube&labelColor=FFB400" alt="Subscribe on YouTube"/>
  </a>
  <a href="https://www.tiktok.com/@etneco" target="_blank">
    <img src="https://img.shields.io/badge/Follow%20on-TikTok-133A2A?logo=tiktok&labelColor=FFB400" alt="Follow on TikTok"/>
  </a>
  <a href="https://t.me/et_apps" target="_blank">
    <img src="https://img.shields.io/badge/Community-Chat-133A2A?logo=telegram&labelColor=FFB400" alt="Community Chat on Telegram"/>
  </a>
  <a href="https://t.me/etnetsacoin" target="_blank">
    <img src="https://img.shields.io/badge/Project-Announcements-133A2A?logo=telegram&labelColor=FFB400" alt="Announcements on Telegram"/>
  </a>
</p>

<!-- TON Ecosystem & Financial Links -->
<p align="center">
  <a href="https://www.geckoterminal.com/ton/pools/EQBt7drPhWyQRIVnSkDzThhiVcq1lwPT371DYX-gGHzN9bwh" target="_blank">
    <img src="https://img.shields.io/badge/Gecko-Terminal-133A2A?labelColor=FFB400" alt="GeckoTerminal Price Chart"/>
  </a>
  <a href="https://jvault.xyz/staking/v2/stake/ETN-ECO" target="_blank">
    <img src="https://img.shields.io/badge/Stake%20on-jVault-133A2A?labelColor=FFB400" alt="Stake on jVault"/>
  </a>
  <a href="https://tonviewer.com/EQAz_XrD0hA4cqlprWkpS7TIAhCG4CknAfob1VQm-2mBf5Vl" target="_blank">
    <img src="https://img.shields.io/badge/Jetton-Master-133A2A?logo=ton&logoColor=white&labelColor=FFB400" alt="Jetton Master on Tonviewer"/>
  </a>
  <a href="https://tonviewer.com/UQA7KhoTClG9QR7DwN1RGAkWIRU0dNp_R8F615y5PiEGQDEK" target="_blank">
    <img src="https://img.shields.io/badge/Donate%20TON-UQA7...QDEK-133A2A?logo=ton&logoColor=white&labelColor=FFB400" alt="Donate TON"/>
  </a>
</p>

This repository contains the source code for the ETN Ecosystem documentation website.

## Contributing

We welcome contributions from the community. If you would like to help improve the documentation, please feel free to fork the repository and submit a pull request.

### Translating the Documentation

We especially welcome contributions to translate the documentation into new languages. Here is how you can do it:

#### 1. Fork and Clone the Repository

First, fork this repository to your own GitHub account. Then, clone your forked repository to your local machine:

```bash
git clone https://github.com/YOUR_USERNAME/etn-eco-docs.git
cd etn-eco-docs
```

#### 2. Create a New Locale

Docusaurus uses a locale code for each language. For example, `en` for English, `am` for Amharic, and `om` for Oromo. To create a new locale, you need to run the following command:

```bash
npm run docusaurus write-translations -- --locale <locale_code>
```

Replace `<locale_code>` with the two-letter ISO 639-1 code for the language you want to add. For example, to add French, you would run:

```bash
npm run docusaurus write-translations -- --locale fr
```

This command will create a new directory under `i18n/<locale_code>` with the necessary JSON translation files.

#### 3. Translate the Content

There are two types of content to translate:

**a) Documentation and Blog Posts (Markdown Files)**

To translate the documentation and blog posts, you need to copy the original English Markdown files from the `/docs` and `/blog` directories to the corresponding directories under `i18n/<locale_code>/docusaurus-plugin-content-docs/current` and `i18n/<locale_code>/docusaurus-plugin-content-blog`.

For example, to translate the `intro.md` doc file into French, you would copy `/docs/intro.md` to `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` and then translate the content of the new file.

**b) UI and Landing Page (JSON Files)**

The UI elements and the landing page text are translated using JSON files. The main file for this is `i18n/<locale_code>/code.json`. You need to open this file and translate the `message` for each entry.

For example:

```json
{
  "homepage.title": {
    "message": "The {etn} Ecosystem",
    "description": "The title of the homepage"
  }
}
```

Would be translated to (for French):

```json
{
  "homepage.title": {
    "message": "L'écosystème {etn}",
    "description": "The title of the homepage"
  }
}
```

#### 4. Submit a Pull Request

Once you have translated the content, commit your changes and push them to your forked repository. Then, open a pull request from your fork to the main `etn-eco-docs` repository. Our team will review your contribution and merge it if everything is correct.

Thank you for helping us make the ETN Ecosystem documentation accessible to a wider audience!