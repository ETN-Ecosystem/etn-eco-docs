---
sidebar_position: 4
title: ETN Pay
sidebar_label: ETN Pay
---

# 💳 ETN Pay

**ETN Pay** karra kaffaltii (payment gateway) nageenyi isaa eegamaa ta'e kan **ETN Jetton** dhaaf TON birookcheenii irratti dalagu yoo ta'u, yeroo ammaa **Beeetaa Cufaa (Closed Beta)** irra jira. Gatii barbaaduu (price fetching) adeemsa kaffaltii irraa adda baasuun fi araara atoomikii kaffaltii qoodamee (atomic reconciliation of split payments) mirkaneessuun daldaltootaaf amanamummaa addaa kenna.

## 🚀 Waliigala

Karra kaffaltii giddu-galeessaa kanneen yeroo transaakshinii murteessaatti API'wwan alaa irratti hirkatan irraa adda, ETN Pay **birmadummaa fi tasgabbii** dhaaf kan dizaayinii ta'eedha.
*   **Wal-qabsiisa Salphaa:** Daldaltoonni laayibraroota birookcheenii xaxamaa ta'an fe'uu ykn TON SDKs barachuu isaan hin barbaachisu. API salphaan qofti gahaadha.
*   **Gatii Adda-ba'e:** **Tajaajilli Raaga Gatii (Price Oracle Service)** of-danda'e gatiiwwan ETN/USD daqiiqaa 5n ni kuusa (cache), kunis otoo API'n gatii alaa hojii dhaaban illee uumamni invoice (invoice creation) tasumaa akka hin kuunne mirkaneessa.
*   **Qoodiinsa Atoomikii:** Moodeelota ekosistimii addaa bakka kaffaltiiwwan itti qoodaman (Fkn: 99.5% Daldalaaf, 0.5% Waltajjiif) transaakshinii birookcheenii atoomikii tokko keessatti ni deggara.

## ✨ Amaloota Ijoo

### 🛡️ Amanamummaa Dursa
*   **Hojjetaa Raaga Gatii (Price Oracle Worker):** Gatiiwwan duuba-duubaan (background) fidaa fi kuusa. Ya'ni checkout keessanii kan dubbisu kuusaa naannoo (local cache) kana irraayi, kunis yeroo deebii battalaa mirkaneessa.
*   **Hirkattummaa Alaa Zero:** Uumamni invoice yeroo bittaa API'wwan gatii qaama sadaffaa onlaayinii ta'uu irratti hin hirkatu.

### 🔗 Wal-qabsiisa Birookcheenii
*   **Kaffaltii Qoodamee Atoomikii:** Yeroo takkatti maallaqa gara walletoota hedduutti (Daldalaa + Waltajjii) raabsuuf dandeettiiwwan multi-message TON fayyadama.
*   **Araara Mirkanaa'e:** Tajaajilli **TON Listener** transaakshinii 'memos' addaa ta'aniif birookcheenicha hordofa, kunis kaffaltiin guyya-guyyaa hundi hordofamu, mirkanaa'uu, fi sirriitti galmaa'uu isaa mirkaneessa.

### 🔐 Nageenya & To'annoo
*   **Karaa API Keys Bulchama:** Gahiinsa API Merchant nageenyi isaa eegamaa.
*   **Webhooks Mallatteeffaman:** Kaffaltiin yeroo milkaa'u webhooks `X-ETN-Signature` dhaan mirkanaa'an gara backend keessaniitti simadhaa.

## ⚙️ Akkaataa Itti Hojjetu

### Ya'a Kaffaltii

1.  **Uumama Invoice:**
    *   Daldalaan gaaffii POST hamma USD wajjin erga.
    *   Sirnichi gatii kuufame (cached rate) fayyadamuun gara ETN tti jijjiira.
    *   Sirnichi invoice adda ta'e 'memos' murtaa'an wajjin uuma.

2.  **Kaffaltii Fayyadamaa:**
    *   Maamilichi gara **ETN Pay Hosted Frontend** tti qajeelfama.
    *   Maamilichi TON Wallet isaanii karaa **TON Connect** wal-qabsiisu.
    *   Maamilichi transaakshinicha mirkaneessu.

3.  **Araara (Settlement):**
    *   **TON Listener** transaakshinicha on-chain irratti adda baasa.
    *   Sirnichi hammootaa fi 'memos' mirkaneessa.
    *   Invoice sun akka `PAID` tti mallatteeffama.
    *   Webhook gara daldalaatti ergama.

## 🛠️ Teeknoolojii (Tech Stack)

ETN Pay 'stack' ammayyaa fi cimaa amanamummaaf dizaayinii ta'e irratti ijaarame:
*   **API:** Node.js (Express)
*   **Kuusaa Daataa:** PostgreSQL (Invoice tursiisuuf)
*   **Kuusaa (Cache):** Redis (Raaga Gatiitiif)
*   **Dhaggeeffataa (Listener):** Laayibraroota Mailiyaa TON

## 📦 Jalqabuu

ETN Pay yeroo ammaa **Beeetaa Cufaa (Closed Beta)** keessa jira, dhihoottis uummataaf ni gad-lakkifama.
*   **Daldaltoota:** Bal'inni wal-qabsiisaa michuuwwan beeetaaf kallattiin ni kennama.
*   **Misoomsitoota:** Ragaan API yeroo uummataaf gad-lakkifamu ni dhihaata.
