---
sidebar_position: 3
title: ETN Identity SDK
sidebar_label: ETN Identity SDK
---

<div align="center">
  <a href="https://etnecosystem.org/">
    <img src="https://account.etnecosystem.org/etn_ident_darkmode_logo.png" alt="ETN Identity SDK Logo" width="200" />
  </a>
  <h1>ETN Identity SDK</h1>
  <p><strong>Lakk. 1.0.0</strong> | Gad-lakkifame: <strong>Jaanuwaarii 13, 2026</strong></p>
  <p><em>"ETN Identity wal-qabsiisuuf React SDK Ofiseelaa."</em></p>

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
</div>

# Galmee Ragaa ETN Identity SDK

## Waliigala

SDK'n kun misoomsitoonni "ETN dhaan Seenaa" (Sign in with ETN) gara appilikeeshinii isaaniitti akka wal-qabsiisan isaan gargaara. Kun **OIDC Authorization Code Flow** kan **Token Rotation** qabu, isa Ekosistimii ETN (Fkn: ETN Vibe) keessatti akka ulaagaa nageenyaatti tajaajilu hordofa.

Wal-qabsiisni kutaalee lama qaba:
1.  **Fuula-dura (Client):** Fayyadamaa gara Dhiheessaa Eenyummaa ETN (ETN Identity Provider) tti qajeelchuu.
2.  **Duuba-keessa (Server):** Koodii gara tookenootaatti jijjiiruu fi seshinii bulchuu.

## Fe'iinsa (Installation)

```bash
npm install @etn-ecosystem/identity-sdk iron-session
```

*(Hubachiisa: `iron-session` bulchiinsa kuukii (cookie) nageenyi isaa eegamaa ta'eef ni gorfama).*

## 1. Gama-Mailiyaa (Client-Side): Gara Seensaa Qajeelchuu

URL hayyamaa (authorization URL) ijaaruuf SDK fayyadamaa.

```typescript
// src/lib/auth-client.ts
import { ETNAuthClient } from '@etn-ecosystem/identity-sdk';

export const authClient = new ETNAuthClient({
  clientId: process.env.ETN_CLIENT_ID!,
  redirectUri: process.env.ETN_REDIRECT_URI!,
  // Scope'n durtii (Default) 'openid profile offline_access' dha
});

export function signIn() {
  // Eegumsa CSRF tiif 'state' tasaa uumaa
  const state = crypto.randomUUID(); 
  const url = authClient.buildAuthorizeUrl(state);
  window.location.href = url; // Ykn Next.js redirect() fayyadamaa
}
```

## 2. Gama-Sarvara (Server-Side): Callback fi Jijjiirraa Token Keessummeessuu

Qajeelchaa (redirect) ETN Identity irraa dhufu keessummeessuuf 'route handler' uumaa (Fkn: Next.js keessatti `app/api/auth/callback/route.ts`).

```typescript
// app/api/auth/callback/route.ts
import { getSession } from '@/lib/session'; // Tarkaanfii 3ffaa ilaalaa
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { code } = await req.json(); // Ykn yoo GET ta'e searchParams irraa argadhaa

  // Koodii gara Tookenootaatti Jijjiiraa (Exchange Code for Tokens)
  const tokenResponse = await fetch('https://auth.etnecosystem.org/api/v1/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        grant_type: 'authorization_code',
        code: code,
        client_id: process.env.ETN_CLIENT_ID,
        client_secret: process.env.ETN_CLIENT_SECRET, // Kana mailiyaa (client) dhaaf tasumaa hin saaxilinaa
        redirect_uri: process.env.ETN_REDIRECT_URI,
    }),
  });

  const tokens = await tokenResponse.json();

  if (tokens.error) {
     return NextResponse.json({ error: tokens.error_description }, { status: 400 });
  }

  // Gara Seshinii Tursiisaa
  const session = await getSession();
  session.isLoggedIn = true;
  session.token = tokens.access_token;
  session.refreshToken = tokens.refresh_token; 
  // Dhumata herregaa: Amma + expires_in - daqiiqaa 1 haftee
  session.expiresAt = Date.now() + (tokens.expires_in * 1000) - 60000;
  
  await session.save();

  return NextResponse.json({ success: true });
}
```

## 3. Bulchiinsa Seshinii & Naanna'iinsa Token (Token Rotation)

Fayyadamaan nageenyaan galee akka turuuf **Naanna'iinsa Token (Token Rotation)** hojii irra oolchuun murteessaadha. Access Token sa'aatii 1 keessatti dhuma; fayyadamaan irra-deebi'ee akka seenu otoo hin dirqisiisin haaraa argachuuf Refresh Token fayyadamaa.

Gargaaraa `src/lib/session.ts` uumaa (`iron-session` fayyadamuun):

```typescript
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

// ... Wal-qunnamtii Daataa Seshinii (Session Data Interface) ...

export async function getValidSession({ redirectOnExpire = false } = {}) {
  const session = await getSession();

  if (!session.isLoggedIn || !session.expiresAt) return session;

  // Access Token dhumuu isaa mirkaneessaa
  if (Date.now() > session.expiresAt) {
    if (redirectOnExpire) {
       // Kutaalee Sarvaraa (Server Components) keessatti, kuukii kaa'uu waan hin dandeenyeef, gara danda'utti qajeelchina.
       const { redirect } = await import('next/navigation');
       redirect('/api/auth/refresh'); 
    }

    // Haaromsuuf Yaalaa (Server Actions / Route Handlers qofa)
    try {
        const res = await fetch("https://auth.etnecosystem.org/api/v1/oauth/token", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                grant_type: "refresh_token",
                refresh_token: session.refreshToken,
                client_id: process.env.ETN_CLIENT_ID,
                client_secret: process.env.ETN_CLIENT_SECRET,
            }),
        });
        
        const newTokens = await res.json();
        // Seshinicha tookenoota haaraan haaromsaa
        session.token = newTokens.access_token;
        if (newTokens.refresh_token) session.refreshToken = newTokens.refresh_token;
        session.expiresAt = Date.now() + (newTokens.expires_in * 1000) - 60000;
        await session.save();
    } catch (e) {
        session.isLoggedIn = false;
        // Dogongora keessummeessaa
    }
  }
  return session;
}
```

## 4. Fuulota Eeguu (Protecting Pages)

Fuulota Eegaman (Server Components) keessan keessatti, yeroo hunda `getValidSession` `redirectOnExpire: true` wajjin waamaa.

```typescript
// app/dashboard/page.tsx
export default async function Dashboard() {
  // Kun dhumata isaa mirkaneessa fi yoo barbaachise gara haaromsaatti qajeelcha
  const session = await getValidSession({ redirectOnExpire: true });

  if (!session.isLoggedIn) redirect('/');

  // ...
}
```
