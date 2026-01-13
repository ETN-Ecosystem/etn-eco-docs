---
sidebar_position: 4
title: ETN Pay
sidebar_label: ETN Pay
---

# 💳 ETN Pay

**ETN Pay** is a secure payment gateway for the ETN Jetton on the TON blockchain, currently in **Closed Beta**. It guarantees specialized reliability for merchants by decoupling price fetching from payment processing and ensuring atomic reconciliation of split payments.

## 🚀 Overview

Unlike centralized payment gateways that rely on external APIs during critical transaction windows, ETN Pay is designed for **sovereignty and stability**.
*   **Simplified Integration:** Merchants are not required to install complicated blockchain libraries or learn TON SDKs. A simple API is all that is needed.
*   **Decoupled Pricing:** A dedicated **Price Oracle Service** caches ETN/USD rates every 5 minutes, ensuring that invoice creation never fails due to external API downtimes.
*   **Atomic Splits:** Supports specific ecosystem models where payments are split (e.g., 99.5% to Merchant, 0.5% to Platform) in a single, atomic blockchain transaction.

## ✨ Key Features

### 🛡️ Reliability First
*   **Price Oracle Worker:** Fetches and caches rates in the background. Your checkout flow reads exclusively from a local cache, guaranteeing instant response times.
*   **Zero External Dependencies:** Invoice creation does not depend on third-party pricing APIs being online at the moment of purchase.

### 🔗 Blockchain Integration
*   **Atomic Split Payments:** Uses TON's multi-message capabilities to distribute funds to multiple wallets (Merchant + Platform) in one go.
*   **Guaranteed Reconciliation:** A **TON Listener** service monitors the blockchain for unique transaction memos, ensuring everyday payments are tracked and verified accurately.

### 🔐 Security & Control
*   **Managed via API Keys:** Secure Merchant API access.
*   **Signed Webhooks:** Receive `X-ETN-Signature` verified webhooks to your backend upon payment success.

## ⚙️ How It Works

### The Payment Flow

1.  **Invoice Creation:**
    *   Merchant sends a POST request with the USD amount.
    *   System converts to ETN using the cached rate.
    *   System generates a unique invoice with specific memos.

2.  **User Payment:**
    *   Customer is redirected to the **ETN Pay Hosted Frontend**.
    *   Customer connects their TON Wallet via **TON Connect**.
    *   Customer approves the transaction.

3.  **Settlement:**
    *   The **TON Listener** detects the transaction on-chain.
    *   System verifies the amounts and memos.
    *   Invoice is marked `PAID`.
    *   Webhook is sent to the merchant.

## 🛠️ Tech Stack

ETN Pay is built on a modern, robust stack designed for reliability:
*   **API:** Node.js (Express)
*   **Database:** PostgreSQL (Invoice persistence)
*   **Cache:** Redis (Price Oracle)
*   **Listener:** TON Client Libraries

## 📦 Getting Started

ETN Pay is currently in **Closed Beta** and will be released to the public soon.
*   **Merchants:** Integration details will be provided to beta partners directly.
*   **Developers:** The API documentation will be made available upon public release.
