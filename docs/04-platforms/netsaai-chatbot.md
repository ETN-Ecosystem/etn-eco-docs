---
sidebar_position: 26
title: NetsaAI Documentation
sidebar_label: NetsaAI
---

# NetsaAI Documentation

## Overview

**NetsaAI** is the premier AI-powered business assistant within the ETN Ecosystem. Designed to act as your "Number 1 Employee," NetsaAI turns your company's internal data into a 24/7 intelligent support and sales agent. By integrating directly with the TON Blockchain and Telegram Business, it ensures you never miss a lead.

### Key Value Propositions

* **24/7 Availability:** Operates day or night, weekends, and holidays.
* **Massive Scalability:** Handles unlimited simultaneous customers without delays.
* **Deep Knowledge:** Instantly trained on your specific products and guides.
* **Direct ROI:** Captures intent and increases late-night sales by up to **40%**.

---

## Getting Started: 3-Step Setup

The NetsaAI platform is built for speed, allowing you to move from setup to live support in minutes.

### 1. Customize Your AI

Complete the guided wizard to define your agent's "brain."

* **Knowledge Base:** Upload `.pdf`, `.docx`, or `.txt` files containing your product FAQs and service guides.
* **Personality:** Define the brand voice (e.g., Friendly & Casual vs. Formal & Professional).

### 2. Connect to Telegram Business

NetsaAI is optimized for the Telegram Business suite:

1. Navigate to your **Telegram Settings**.
2. Select **Telegram Business** -> **Chatbots**.
3. Add **@NetsaAIBot** and define which chats it can access.

### 3. Go Live

Once connected, your AI is active. It will automatically process incoming queries, book appointments, and provide intelligent responses based on your data.

---

## Billing & In-App Credits

NetsaAI uses an **In-App Credit** system. You do not pay the AI directly from your wallet for every message; instead, you maintain a balance in the NetsaAI database that is consumed as the AI works.

### The Secure Deposit Flow (TON Connect & Payload Signing)

To ensure the highest level of security and prevent transaction tampering, NetsaAI utilizes a **Backend-Signed Payload** system.

1. **Enter Amount:** Input the specific amount of **$ETN** you wish to deposit.
2. **Secure Payload Generation:** The system generates a unique **UUID** and a transaction payload (BOC) on our self-hosted backend.
3. **Binary Signature:** Our backend signs the transaction data with a private key. This **Signed Binary** ensures that the amount and destination cannot be altered by a third party or local script before reaching your wallet.
4. **Wallet Connection:** Using **TON Wallet Connect**, the app sends the signed payload to your linked wallet.
5. **Transaction Execution:** You confirm the transaction to the hard-coded **ETN Ecosystem Wallet**.
6. **Backend Verification:** Our backend monitors the ecosystem wallet. It verifies the **UUID** in the message comment and validates the **Binary Signature** to ensure the received funds match the authorized request.
7. **Database Credit:** Once verified on the TON Blockchain, your in-app credit balance is updated immediately.

---

## Pricing Structure

All interactions are measured in **Tokens** (syllables or parts of words).

* **Rate:** 1 $ETN / 1,000 tokens.
* **Average Density:** 1,000 tokens ≈ 750 words.

---

## Dashboard Features

The NetsaAI Dashboard provides a comprehensive overview of your automated operations:

* **In-App Balance:** View your current credits available for AI processing.
* **Transaction History:** See a log of your deposits, UUIDs, and verification statuses.
* **Token Usage Analytics:** Track weekly consumption and total messages handled.
* **Knowledge Management:** A central hub to upload and update the documents that train your AI.