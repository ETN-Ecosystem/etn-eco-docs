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
  <p><strong>ስሪት 1.0.0</strong> | የተለቀቀው: <strong>ጃንዋሪ 13, 2026</strong></p>
  <p><em>"ETN Identityን ለማዋሃድ ኦፊሴላዊው React SDK።"</em></p>

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

# ETN Identity SDK ሰነዶች (Documentation)

## አጠቃላይ እይታ

ይህ SDK ገንቢዎች "በ ETN ይግቡ" (Sign in with ETN) ን ወደ መተግበሪያዎቻቸው እንዲያዋህዱ ይረዳቸዋል። ይህ በ ETN ስነ-ምህዳር (ለምሳሌ፡ ETN Vibe) ውስጥ ጥቅም ላይ የሚውለው መደበኛ የደህንነት ንድፍ (pattern) የሆነውን **OIDC Authorization Code Flow** ከ **Token Rotation** ጋር ይከተላል።

ውህደቱ ሁለት ክፍሎችን ያቀፈ ነው፡-
1.  **ግንባር-ገጽ (Frontend/Client):** ተጠቃሚውን ወደ ETN Identity አቅራቢ ማዞር።
2.  **ኋላ-ገጽ (Backend/Server):** ኮዱን ለቶከኖች መቀየር እና ክፍለ-ጊዜውን (session) ማስተዳደር።

## መጫን (Installation)

```bash
npm install @etn-ecosystem/identity-sdk iron-session
```

*(ማስታወሻ፡ `iron-session` ለደህንነቱ የተጠበቀ የኩኪ (cookie) አስተዳደር ይመከራል)።*

## 1. የደንበኛ-ጎን (Client-Side): ወደ መግቢያ ማዞር

የፍቃድ ዩአርኤልን (authorization URL) ለመገንባት SDKውን ይጠቀሙ።

```typescript
// src/lib/auth-client.ts
import { ETNAuthClient } from '@etn-ecosystem/identity-sdk';

export const authClient = new ETNAuthClient({
  clientId: process.env.ETN_CLIENT_ID!,
  redirectUri: process.env.ETN_REDIRECT_URI!,
  // ነባሪ (Default) scope 'openid profile offline_access' ነው
});

export function signIn() {
  // ለ CSRF ጥበቃ በዘፈቀደ state ያመነጫል
  const state = crypto.randomUUID(); 
  const url = authClient.buildAuthorizeUrl(state);
  window.location.href = url; // ወይም Next.js redirect() ይጠቀሙ
}
```

## 2. የአገልጋይ-ጎን (Server-Side): Callbackን እና የቶከን ልውውጥን ማስተናገድ

ከ ETN Identity የሚመጣውን ቅየራ (redirect) ለማስተናገድ የመንገድ ተቆጣጣሪ (route handler) ይፍጠሩ (ለምሳሌ በ Next.js ውስጥ `app/api/auth/callback/route.ts`)።

```typescript
// app/api/auth/callback/route.ts
import { getSession } from '@/lib/session'; // ደረጃ 3ን ይመልከቱ
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { code } = await req.json(); // ወይም GET ከሆነ ከ searchParams ያግኙ

  // ኮድን ለቶከኖች ይቀይሩ (Exchange Code for Tokens)
  const tokenResponse = await fetch('https://auth.etnecosystem.org/api/v1/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        grant_type: 'authorization_code',
        code: code,
        client_id: process.env.ETN_CLIENT_ID,
        client_secret: process.env.ETN_CLIENT_SECRET, // ይህንን ለደንበኛ (client) በጭራሽ አያጋልጡ
        redirect_uri: process.env.ETN_REDIRECT_URI,
    }),
  });

  const tokens = await tokenResponse.json();

  if (tokens.error) {
     return NextResponse.json({ error: tokens.error_description }, { status: 400 });
  }

  // ወደ ክፍለ-ጊዜ (Session) ያስቀምጡ
  const session = await getSession();
  session.isLoggedIn = true;
  session.token = tokens.access_token;
  session.refreshToken = tokens.refresh_token; 
  // የአገልግሎት ማብቂያን ያስሉ: አሁን + expires_in - 1 ደቂቃ መጠባበቂያ
  session.expiresAt = Date.now() + (tokens.expires_in * 1000) - 60000;
  
  await session.save();

  return NextResponse.json({ success: true });
}
```

## 3. የክፍለ-ጊዜ አስተዳደር እና የቶከን ሽክርክሪት (Token Rotation)

ተጠቃሚው ደህንነቱ በተጠበቀ ሁኔታ እንደገባ እንዲቆይ **የቶከን ሽክርክሪት (Token Rotation)** መተግበር ወሳኝ ነው። የመዳረሻ ቶከን (Access Token) በ1 ሰዓት ውስጥ ጊዜው ያልፍበታል፤ ተጠቃሚው እንደገና እንዲገባ ሳያስገድዱ አዲስ ለማግኘት የማደሻ ቶከን (Refresh Token) ይጠቀሙ።

ረዳት `src/lib/session.ts` ይፍጠሩ (`iron-session` በመጠቀም):

```typescript
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

// ... የክፍለ-ጊዜ ውሂብ በይነገጽ (Session Data Interface) ...

export async function getValidSession({ redirectOnExpire = false } = {}) {
  const session = await getSession();

  if (!session.isLoggedIn || !session.expiresAt) return session;

  // የመዳረሻ ቶከን ጊዜው ያለፈበት መሆኑን ያረጋግጡ
  if (Date.now() > session.expiresAt) {
    if (redirectOnExpire) {
       // በአገልጋይ አካላት (Server Components) ውስጥ ኩኪዎችን ማዘጋጀት ስለማንችል፣ ወደሚችል መንገድ እናዞራለን።
       const { redirect } = await import('next/navigation');
       redirect('/api/auth/refresh'); 
    }

    // ማደስን ይሞክሩ (Server Actions / Route Handlers ብቻ)
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
        // ክፍለ-ጊዜውን በአዲስ ቶከኖች ያዘምኑ
        session.token = newTokens.access_token;
        if (newTokens.refresh_token) session.refreshToken = newTokens.refresh_token;
        session.expiresAt = Date.now() + (newTokens.expires_in * 1000) - 60000;
        await session.save();
    } catch (e) {
        session.isLoggedIn = false;
        // ስህተትን ያስተናግዱ
    }
  }
  return session;
}
```

## 4. ገጾችን መጠበቅ (Protecting Pages)

በተጠበቁ ገጾችዎ (Server Components) ውስጥ፣ ሁልጊዜ `getValidSession`ን ከ `redirectOnExpire: true` ጋር ይጥሩ።

```typescript
// app/dashboard/page.tsx
export default async function Dashboard() {
  // ይህ የአገልግሎት ማብቂያን ያረጋግጣል እና አስፈላጊ ከሆነ ወደ ማደስ (refresh) ያዞራል
  const session = await getValidSession({ redirectOnExpire: true });

  if (!session.isLoggedIn) redirect('/');

  // ...
}
```
