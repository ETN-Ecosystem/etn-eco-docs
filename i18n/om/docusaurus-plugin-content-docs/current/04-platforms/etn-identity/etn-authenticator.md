---
sidebar_position: 3
title: Mirkaneessaa ETN (ETN Authenticator)
sidebar_label: ETN Authenticator
---

# 🔐 Mirkaneessaa ETN (ETN Authenticator)

**Ramaddii:** Waltajjiiwwan Ekosistimii & Meeshaalee Misoomsitootaa
**Fayyadamtoota:** Misoomsitoota Qaama 3ffaa, Wal-qabsiistota (Integrators)

---

## **Waliigala**

**ETN Authenticator** bu'uura misoomaa duubaa (backend) Eco-system ETN humneessudha. Salphina Web2 fi nageenya Web3 gidduu jiru wal-qabsiisuun, misoomsitootaaf karaalee teeknikaa ittiin fayyadamtoota mirkaneessanii fi kaffaltiiwwan raawwatan dhiheessa.

### **Seera Seensa Ekosistimii**

Appilikeeshenii Kuusaa Appii Ekosistimii ETN keessatti maxxansuuf, misoomsitoonni karaalee wal-qabsiisaa lamaan keessaa tokko hordofuu qabu:

1. **Daandii Eenyummaa (The Identity Path):** Bulchiinsa fayyadamaa nageenyi isaa eegamaa fi mirkanaa'aa ta'e mirkaneessuuf **ETN Authenticator** wal-qabsiisuu.
2. **Daandii Dinagdee (The Economy Path):** Appilikeeshinicha keessatti akka mala kaffaltii fudhatama qabu isa a a tokkichaatti **ETN Pay** wal-qabsiisuu.

---

## **Daandii 1: Filannoowwan Wal-qabsiisa Eenyummaa**

Misoomsaan hundi laayibraroota birookcheenii xaxamaa ta'an barachuuf qophii akka hin taane ni hubanna. ETN Authenticator wal-qabsiisaaf mala adda ta'an lama dhiheessa:

### **Filannoo A: Standard OAuth 2.0 (Web2 Friendly)** 🚀

*Warra kanaaf filatamaa: Misoomsitoota koodii birookcheenii otoo hin bulchin muuxannoo "Google dhaan seenaa" (Sign in with Google) barbaadan.*

* **Seshiniiwwan Bulfamanii fi Haaromsitoota:** Mirkaneessichii (Authenticator) guutummaa marsaa jireenyaa seshinii (session lifecycle) isiniif bulcha. **Waraqaa Eenyummaa Seshinii (Session IDs)** nageenyi isaa eegamaa ta'e ni kenna, akkasumas **Haaromsitoota Tookenii (Token Refreshers)** ofumaan ni bulcha, kunis otoo isin loojikii eegumsa seshinii xaxamaa ta'e ijaaruu isin hin barbaachisin fayyadamtoonni keessan akka seenanitti akka turan taasisa.
* **Laayibrariin Birookcheenii Hin Barbaachisu:** `@ton/core` fe'uu ykn TON SDK barachuun isin hin barbaachisu.
* **Raawwii Idilee (Standard Implementation):** Fayyadamtoota gara fuula hayyamaa keenya keessummeeffametti (hosted authorization page) qajeelchuuf laayibrarii OAuth 2.0 / OIDC afaan filattaniif (Node.js, Python, PHP, kkf) ta'u kamiyyuu fayyadamaa.

**Ya'a Isaa (The Flow):**

1. Fayyadamaa gara `https://account.etnecosystem.org/oauth/authorize` tti qajeelchaa.
2. Fayyadamaan waltajjii keenya irratti nageenyaan ni seena (Wallet ykn Lakkoofsa ETN dhaan).
3. Nuti `code` hayyamaa idilee gara URL deebii (callback URL) keessaniitti deebisna.
4. Isin koodicha piroofaayilii fayyadamaa, tookenii qaqqabaa (access token), fi tookenii haaromsaaf (refresh token) jijjiirratu.

### **Filannoo B: Web3 Native (TON Connect)** 💎

*Warra kanaaf filatamaa: DApps fi waltajjiiwwan mirkaneessa 'cryptographic' gama-mailiyaa (client-side) barbaadan.*

* **Mirkaneessa Cryptographic:** `ton_proof` fi `signData` kallattiin mirkaneessuuf fe'iinsa **TON Libraries** ni barbaada.
* **Wal-qunnamtii Kallattii:** Fuula-dura (frontend) keessan gara fuula keessummeeffametti otoo hin qajeelchin kallattiin wallet fayyadamaa irraa mallattoo akka gaafatu isa dandeessisa.

---

## **Daandii 2: Wal-qabsiisa Dinagdee (ETN Pay)** 💳

**ETN Pay** **ETN Jetton** dhaaf TON birookcheenii irratti karra kaffaltii (payment gateway) nageenyi isaa eegamaadha. Loojikii birookcheenii xaxamaa ta'e ya'a kaffaltii keessan irraa adda baasuun, birmadummaa, tasgabbii, fi salphina itti-fayyadamaaf kan qophaa'edha.

*Haala: Beeetaa Cufaa (Closed Beta)*

### **Maaliif ETN Pay Filatu?**

* **Wal-qabsiisa Salphaa:** Daldaltoonni API salphaa fayyadamu. Sarvara keessan irratti laayibrariin birookcheenii xaxamaan ykn TON SDKs hin barbaachisu.
* **Amanamummaa Dursa:**
* **Tajaajila Raaga Gatii (Price Oracle Service):** Gatiiwtan ETN/USD daqiiqaa 5n ni kuusna. Uumamni invoice keessanii kan dubbisu kuusaa naannoo (local cache) kana irraayi, kunis otoo API'n gatii alaa hojii dhaaban illee yeroo hojii-dhabiinsaa zero ta'e mirkaneessa.
* **Qoodiinsa Atoomikii (Atomic Splits):** Moodeelota waltajjiitiif mijataadha. Transaakshinii birookcheenii atoomikii tokko keessatti kaffaltiiwwan qooduu (Fkn: 99.5% Daldalaaf, 0.5% Waltajjiif) ni deggarra.


* **Araara Mirkanaa'e:** Tajaajilli **TON Listener** keenya birookcheenicha 'memos' transaakshinii addaa ta'aniif hordofa, kunis kaffaltiin hundi hordofamu, mirkanaa'uu, fi karaa webhook mallatteeffameen isinitti gabaafamuu mirkaneessa.

### **Ya'a Kaffaltii**

1. **Invoice:** Isin gaaffii POST hamma USD wajjin ergitu. Nuti gara ETN tti jijjiirra fi invoice addaa ta'e deebisna.
2. **Kaffaltii:** Fayyadamaan wallet isaanii wal-qabsiisuu fi kaffaluuf gara **ETN Pay Hosted Frontend** tti qajeelfamu.
3. **Mirkaneessuu:** Sirni keenya transaakshinicha on-chain irratti adda baasa, invoicecha akka `PAID` (kaffalame) tti mallatteessa, fi webhook `X-ETN-Signature` dhaan mirkanaa'e gara duuba-keessaniitti (backend) erga.

---

## **Itti-gaafatamummaa Misoomsitootaa**

Daandiin wal-qabsiisaa filatame kamiyyuu (Eenyummaa ykn Dinagdee), misoomsitoonni hundi ulaagaalee amanamummaa ekosistimii kabajuu qabu:

* **KYC Misoomsitootaa:** Hayyama API argachuuf eenyummaa isaanii (Waraqaa Eenyummaa Mootummaa / Hayyama Daldalaa) mirkaneessuu qabu.
* **Waliigaltee Dirqisiisoo:** Misoomsitoonni **Waliigaltee Misoomsitootaa** 'cryptographically' mallatteessuu qabu, kunis iccitii daataa fayyadamaa eeguuf waadaa seeraan dirqisiisaa ta'e uuma.

---

## **Gahiinsa API & Gatii**

* **API Mirkaneessaa (Authentication API):** Gahiinsi ETN Authenticator (OAuth ykn Web3) michuuwwan ekosistimiitiif ni kennama.
* **Gahiinsa Pirootokoolii Web3:** Gahiinsi olaanaa pirootokoolota Web3 addaa (Fkn: Telefoonii Birookcheenii, Giddu-gala SMS) baasii itti-fayyadama irratti hundaa'e **$ETN** dhaan kaffalamu qabaachuu danda'a.
