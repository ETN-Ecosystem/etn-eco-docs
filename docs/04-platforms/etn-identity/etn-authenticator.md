---
sidebar_position: 3
title: ETN Authenticator
sidebar_label: ETN Authenticator
---

# 🔐 ETN Authenticator

**Category:** Ecosystem Platforms & Developer Tools
**Audience:** 3rd Party Developers, Integrators

---

## **Overview**

**ETN Authenticator** is the backend infrastructure that powers the ETN Ecosystem. It bridges the gap between Web2 convenience and Web3 security, offering developers flexible ways to verify users and process payments.

### **The Ecosystem "Entry Rule"**

To publish an application within the ETN Ecosystem App Store, developers must adhere to one of two integration paths:

1. **The Identity Path:** Integrate **ETN Authenticator** to ensure secure, verified user management.
2. **The Economy Path:** Integrate **ETN Pay** as the sole accepted payment method within the application.

---

## **Path 1: Identity Integration Options**

We understand that not every developer is ready to learn complex blockchain libraries. ETN Authenticator offers two distinct methods for integration:

### **Option A: Standard OAuth 2.0 (Web2 Friendly)** 🚀

*Best for: Developers who want a "Sign in with Google" style experience without managing blockchain code.*

* **Managed Sessions & Refreshers:** The Authenticator handles the entire session lifecycle for you. It issues secure **Session IDs** and automatically manages **Token Refreshers**, ensuring your users stay logged in without you needing to build complex session maintenance logic.
* **No Blockchain Libraries Required:** You do not need to install `@ton/core` or learn the TON SDK.
* **Standard Implementation:** Use any standard OAuth 2.0 / OIDC library for your language (Node.js, Python, PHP, etc.) to redirect users to our hosted authorization page.

**The Flow:**

1. Redirect user to `https://account.etnecosystem.org/oauth/authorize`.
2. User signs in securely on our platform (via Wallet or ETN Number).
3. We return a standard authorization `code` to your callback URL.
4. You exchange the code for a user profile, access token, and refresh token.

### **Option B: Web3 Native (TON Connect)** 💎

*Best for: DApps and platforms requiring client-side cryptographic verification.*

* **Cryptographic Verification:** Requires the installation of **TON Libraries** to verify `ton_proof` and `signData` payloads directly.
* **Direct Interaction:** Allows your frontend to request signatures directly from the user's wallet without redirecting to a hosted page.

---

## **Path 2: Economy Integration (ETN Pay)** 💳

**ETN Pay** is a secure payment gateway for the **ETN Jetton** on the TON blockchain. It is designed for sovereignty, stability, and ease of use, decoupling complex blockchain logic from your checkout flow.

*Status: Closed Beta*

### **Why Choose ETN Pay?**

* **Simplified Integration:** Merchants use a simple API. No complicated blockchain libraries or TON SDKs are required on your server.
* **Reliability First:**
* **Price Oracle Service:** We cache ETN/USD rates every 5 minutes. Your invoice creation reads from this local cache, ensuring zero downtime even if external price APIs go offline.
* **Atomic Splits:** Perfect for platform models. We support splitting payments (e.g., 99.5% to Merchant, 0.5% to Platform) in a single, atomic blockchain transaction.


* **Guaranteed Reconciliation:** Our **TON Listener** service monitors the blockchain for unique transaction memos, ensuring every payment is tracked, verified, and reported back to you via signed webhooks.

### **The Payment Flow**

1. **Invoice:** You send a POST request with a USD amount. We convert it to ETN and return a unique invoice.
2. **Payment:** The user is redirected to the **ETN Pay Hosted Frontend** to connect their wallet and pay.
3. **Settlement:** Our system detects the transaction on-chain, marks the invoice as `PAID`, and sends an `X-ETN-Signature` verified webhook to your backend.

---

## **Developer Accountability**

Regardless of the integration path chosen (Identity or Economy), all developers must adhere to the ecosystem's trust standards:

* **Developer KYC:** Must verify identity (Government ID / Business License) to obtain API credentials.
* **Binding Agreements:** Must cryptographically sign the **Developer Agreement**, creating a legally binding commitment to uphold user data privacy.

---

## **API Access & Pricing**

* **Authentication API:** Access to ETN Authenticator (OAuth or Web3) is provided to ecosystem partners.
* **Web3 Protocol Access:** Advanced access to specific Web3 protocols (e.g., Blockchain Telephony, SMS Center) may incur usage-based costs payable in **$ETN**.
