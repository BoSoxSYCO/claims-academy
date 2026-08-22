---
id: NA-M13-L06
module: 13
lesson: 06
title: "VPNs and Encryption in Plain Language"
unit: 10
objective_ids: ["4.1", "4.3"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E1
prerequisites: ["NA-M13-L01"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-07"
---

# [Module 13 · Lesson 06] VPNs and Encryption in Plain Language

> **Unit:** Unit 10 — Network Security · **Time:** ~30 min · **Equipment:** E1 (concept lesson; a browser)
> **You'll need first:** the CIA triad and checksum (13-01).

We've locked the doors and hardened the gear. But data still travels across the internet, where anyone might peek. So we scramble it. This lesson explains **encryption**, **hashing**, and the **VPN** — the private tunnel — all in plain words.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain **encryption**, **plaintext**, **ciphertext**, and a **key**.
- [ ] Tell **symmetric** from **asymmetric** encryption.
- [ ] Explain **hashing** and how it protects integrity.
- [ ] Explain what a **VPN** does and name its two types.

---

## 2. Introduction — why this matters

Data on the internet travels past many strangers. Without protection, they could read it. That breaks confidentiality (from Lesson 13-01).

The fix is **encryption**. It scrambles data so only the right key can unscramble it. You already use it every day. The little padlock in your browser means the page is encrypted.

We also need a way to prove data wasn't changed. That's **hashing**. And when you connect to work from home, a **VPN** wraps your traffic in a private tunnel. The exam tests all three ideas. This lesson keeps them simple.

🎯 **Exam tip:** Match the tool to the goal. Encryption protects confidentiality. Hashing protects integrity.

🔧 **Lab link:** You'll find the padlock in your browser and see that a real website is encrypted.

---

## 3. Simple explanation

### Encryption — scramble the message

**Encryption** turns readable data into scrambled data. Only someone with the right key can turn it back.

- **Plaintext** is the readable data (a normal message).
- **Ciphertext** is the scrambled data (looks like nonsense).
- A **key** is the secret that locks and unlocks the data.

Encryption protects **confidentiality**. Even if someone grabs the ciphertext, they can't read it without the key.

There are two styles:

- **Symmetric encryption** uses one key for both locking and unlocking. It's fast. But both sides must share the same secret key safely.
- **Asymmetric encryption** uses a pair of keys: a public key and a private key. Anyone can lock with your public key. Only your private key can unlock. This solves the "how do we share a key" problem.

Everyday example: **HTTPS** (from Module 10) uses **TLS** to encrypt web traffic. That's the padlock in your browser.

### Hashing — a one-way fingerprint

**Hashing** turns data into a short, fixed fingerprint. It is one-way — you cannot turn the fingerprint back into the data.

Why is that useful? If the data changes even a little, the fingerprint changes. So a matching hash proves the data was not altered. That protects **integrity**. You met this idea as a **checksum** in Lesson 13-01.

> ⚠️ Encryption and hashing are different. Encryption is two-way (you can unlock it). Hashing is one-way (you cannot).

### VPN — a private tunnel

A **VPN (Virtual Private Network)** makes a private, encrypted **tunnel** across the public internet. Your data goes through the tunnel, safe from prying eyes.

There are two common types:

- A **site-to-site VPN** connects two whole networks, such as two office buildings.
- A **remote-access VPN** (client VPN) connects one person — you, from home — to a network.

Two common tunnel technologies are **IPsec** and TLS. You don't need the deep details for now. Just know a VPN encrypts your traffic end to end.

> **The big idea:** **Encryption** scrambles **plaintext** into **ciphertext** using a **key**, protecting confidentiality. **Symmetric** uses one shared key; **asymmetric** uses a public/private key pair. **Hashing** is a one-way fingerprint that protects integrity (like a **checksum**). A **VPN** wraps your traffic in an encrypted **tunnel** — **site-to-site** joins two networks, **remote-access** connects one person from afar.

💡 **Tip:** Two-way = encryption (lock and unlock). One-way = hashing (fingerprint only).

⚠️ **Watch out:** A VPN hides your traffic from snoops, but it is not magic. It doesn't stop malware or phishing.

---

## 4. Real-world analogy

> **"Encryption is a locked box; a VPN is an armored tunnel."**

| Everyday life | Network idea |
|---------------|--------------|
| A readable note | Plaintext |
| The same note in secret code | Ciphertext |
| The code key that scrambles/unscrambles | Key |
| One house key you both copy | Symmetric encryption |
| A padlock anyone can snap, one key opens | Asymmetric encryption |
| A tamper-proof wax seal | Hashing (integrity) |
| An armored tunnel through a public road | VPN |

Lock the message (encryption), seal it so tampering shows (hashing), and drive it through a private tunnel (VPN).

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Encryption** | en-KRIP-shun | Scrambling data so only the right key can read it. |
| **Plaintext** | PLAIN-text | Readable data before encryption. |
| **Ciphertext** | SY-fer-text | Scrambled data after encryption. |
| **Hashing** | HASH-ing | A one-way fingerprint of data, used to spot changes. |
| **VPN** | V-P-N | A private, encrypted tunnel across the internet. |

---

## 6. ASCII diagram

```
   ENCRYPTION (two-way):
     PLAINTEXT --[ lock with key ]--> CIPHERTEXT --[ unlock with key ]--> PLAINTEXT

   HASHING (one-way):
     DATA --[ hash ]--> FINGERPRINT     (cannot go back)

   VPN:
     YOU  ==(encrypted tunnel through the internet)==>  NETWORK
```

_Encryption locks and unlocks. Hashing only goes one way. A VPN tunnels your traffic._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-13-06-encryption-vpn-01.svg` (created and stored in this module's `assets/`)
> **Shows:** two rows. Top row: an encryption flow — plaintext → lock (with a key) → ciphertext → unlock (with a key) → plaintext. Bottom row: a VPN — a laptop connected through an encrypted tunnel across an internet cloud to a company network.
> **Key elements & labels:** the encryption row labels plaintext, ciphertext, and the key; a small note marks hashing as one-way. The VPN row labels the tunnel "encrypted" and the two ends "you" and "network."
> **Color meaning:** each step is labeled in words; "encrypted tunnel" is written as text, not shown by color alone.
> **Flow direction:** left to right in both rows.
> **Alt text (required):** "Two rows. The top row shows encryption: readable plaintext is locked with a key to become scrambled ciphertext, then unlocked with a key back into plaintext — encryption is two-way and protects confidentiality. A side note shows hashing as one-way: data goes into a hash and becomes a fixed fingerprint that cannot be turned back, which protects integrity. The bottom row shows a VPN: a laptop labeled you connects through an encrypted tunnel that crosses an internet cloud and reaches a company network, keeping the traffic private end to end."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-13-06-browser-padlock-01.jpg`
> A browser address bar with the padlock and https. Alt text: "A web browser address bar showing a padlock icon and https, meaning the connection is encrypted with TLS."
>
> **Photo 2** — `img-13-06-vpn-client-01.jpg`
> A VPN client app showing a "connected" state. Alt text: "A VPN client app showing a connected status, the encrypted tunnel that protects traffic from a remote device."

---

## 9. Hands-on lab

**Goal:** find the padlock in your browser and confirm a real website is encrypted.
**Why:** it proves encryption is already protecting you, every day.

**You will need**
- Your Windows laptop and a web browser. Estimated time: 10 min.

⚠️ **Before you start (safety):** you only look at a website's security info. You type no passwords.

### 9a. Step-by-step instructions

1. Open your web browser.
2. Go to a site you trust, such as `https://www.wikipedia.org`.
3. Look at the address bar. Find the small **padlock** icon before the address.
4. Check that the address starts with **https**, not http. The "s" means secure.
5. Click the padlock. Choose "Connection is secure" (wording varies) to see the encryption details.

### 9b. Expected results

- The address bar shows a padlock and **https**.
- Clicking the padlock shows the connection is secure (encrypted with TLS).

- ✅ **You did it if:** you found the padlock and saw "connection is secure."

> ⚠️ Menu wording differs by browser and version. The padlock and "https" are the constant signs. Exact click paths are **[TO VERIFY ON HARDWARE]** on your browser.

### 9c. Verify it worked

1. Say what the padlock and "https" mean (the page is encrypted).
2. Find one site that shows "Not secure" (plain http) and say why that's a warning.

### 9d. Reset / roll back

Nothing changed — you only viewed security info. Close the browser when done.

> 🔧 **Home-lab continuity:** note which of your everyday sites use https. It reinforces the hardening checklist in Lesson 13-07.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking hashing is encryption | You expect to "unhash" data | Hashing is one-way; encryption is two-way |
| Believing a VPN blocks all threats | Malware/phishing still get through | A VPN hides traffic; it isn't full protection |
| Sharing a symmetric key carelessly | Anyone with it can read everything | Share keys safely, or use asymmetric |
| Trusting a plain http page | Data is sent in the clear | Look for https and the padlock |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Browser says "Not secure" | The site uses plain http | Avoid entering private data; use the https version |
| Downloaded file may be tampered | No integrity check | Compare its hash/checksum to the published one |
| Remote work traffic is exposed | No VPN | Connect the remote-access VPN first |
| Two offices share data openly | No tunnel between sites | Set up a site-to-site VPN |

---

## 12. Lesson summary

- **Encryption** scrambles **plaintext** into **ciphertext** with a **key**; it protects confidentiality.
- **Symmetric** uses one shared key; **asymmetric** uses a public/private pair.
- **Hashing** is a one-way fingerprint that protects integrity (like a **checksum**).
- A **VPN** makes an encrypted **tunnel**: **site-to-site** joins networks; **remote-access** connects a person.

**One-sentence recap:** Encryption locks data with a key, hashing fingerprints it to catch changes, and a VPN tunnels your traffic safely across the internet.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-13-06-fill-in-the-blank.md`
2. **Matching** — `wb-13-06-matching.md`
3. **Label the diagram** — `wb-13-06-label-the-diagram.md` (encryption + VPN)
4. **Short answer** — `wb-13-06-short-answer.md`
5. **Hands-on observation** — `wb-13-06-hands-on-observation.md` (find the padlock)
6. **Vocabulary review** — `wb-13-06-vocabulary-review.md`
7. **Reflection** — `wb-13-06-reflection.md`

**Quick written warm-up (do this now):** Which is two-way, encryption or hashing? What does a VPN create?

Two-way: ____________  A VPN creates a: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-13-06-knowledge-check.md`.)

1. **Encryption** turns plaintext into… *(Objective: concept)*
   - A) a hash
   - B) ciphertext
   - C) a cable
   - D) a VLAN

2. A **key** is… *(Objective: concept)*
   - A) the secret that locks and unlocks data
   - B) a switch port
   - C) a backup
   - D) a subnet mask

3. **Symmetric** encryption uses… *(Objective: types)*
   - A) no keys
   - B) one key for both locking and unlocking
   - C) a public/private key pair
   - D) a password only

4. **Asymmetric** encryption uses… *(Objective: types)*
   - A) one shared key
   - B) a public key and a private key
   - C) no key
   - D) a hash

5. **Hashing** is… *(Objective: integrity)*
   - A) two-way, like encryption
   - B) a one-way fingerprint that spots changes
   - C) a type of cable
   - D) a VPN setting

6. **True or false —** You can turn a hash back into the original data. Explain in one sentence. *(Objective: integrity)*

7. A **VPN** creates a… *(Objective: VPN)*
   - A) faster internet plan
   - B) private, encrypted tunnel across the internet
   - C) new IP address only
   - D) firewall rule

8. **Matching —** match each tool to its main goal. *(Objective: apply)*
   - ___ Encryption &nbsp;&nbsp; ___ Hashing &nbsp;&nbsp; ___ VPN
   - A) Protect integrity (spot changes)
   - B) Protect confidentiality (hide the message)
   - C) Tunnel traffic safely across the internet

9. Fill in the blank: A ____________-to-site VPN connects two whole networks, like two offices. *(Objective: VPN)*

10. **Scenario —** You work from a coffee shop and must reach your company's files safely over public Wi-Fi. What should you use, and what does it do? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-13-06-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-13-06-vpns-encryption.md`. In brief:

- **Objective in one line:** learners explain encryption (plaintext/ciphertext/key, symmetric vs. asymmetric), hashing for integrity, and what a VPN tunnel does (site-to-site vs. remote-access).
- **Common misconceptions:** "hashing is encryption"; "a VPN blocks all threats"; "https is optional." Correct each.
- **Pacing:** ~30 min. The locked-box/armored-tunnel analogy carries it; the browser-padlock lab makes encryption real.
- **How CompTIA tests it:** encryption protects confidentiality; hashing protects integrity; symmetric (one key) vs. asymmetric (key pair); VPN types (site-to-site vs. remote-access); IPsec/TLS as tunnel tech.
- **Accuracy note (Prime Directive #7):** the browser-padlock steps are real; exact menu wording varies and is marked `[TO VERIFY ON HARDWARE]`. No fabricated output.
- **Extension idea:** how TLS uses asymmetric keys to exchange a symmetric session key; certificates and the CA chain; AES and SHA by name.

---

## 17. Cheat sheet

> **Quick reference — VPNs & encryption**
>
> | Idea | Plain meaning | Protects |
> |------|---------------|----------|
> | **Encryption** | scramble with a key (two-way) | confidentiality |
> | **Plaintext → ciphertext** | readable → scrambled | — |
> | **Symmetric** | one shared key (fast) | — |
> | **Asymmetric** | public + private key pair | — |
> | **Hashing** | one-way fingerprint | integrity |
> | **VPN** | encrypted tunnel over the internet | confidentiality |
>
> - Encryption is **two-way**; hashing is **one-way**.
> - VPN types: **site-to-site** (two networks) · **remote-access** (one person).
> - The browser padlock + **https** = TLS encryption in action.
>
> _(Full version: `resources/cheat-sheets/network-security-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Plaintext** — Readable data before it is encrypted.
- **Ciphertext** — Scrambled data produced by encryption.
- **Key (encryption)** — The secret value used to lock and unlock encrypted data.
- **Symmetric encryption** — Encryption that uses one shared key for both locking and unlocking.
- **Asymmetric encryption** — Encryption that uses a pair of keys: a public key and a private key.
- **Hashing** — Turning data into a one-way, fixed-length fingerprint used to detect changes.
- **VPN (Virtual Private Network)** — A private, encrypted tunnel across a public network.
- **Site-to-site VPN** — A VPN that connects two whole networks, such as two offices.
- **Remote-access VPN** — A VPN that connects one remote person (a client) to a network.
- **Tunnel** — A protected path that carries encrypted traffic across a public network.
- **IPsec** — A common set of protocols used to build encrypted VPN tunnels.

(Encryption and TLS were defined in Lesson 10-04, HTTPS in 10-03; confidentiality/integrity and checksum in 13-01. All are reused here.)

---

## 19. Homework

- **Practice:** Check three websites you use. Note which show the padlock and https.
- **Spaced review:** Say the difference between encryption and hashing from memory.
- **Preview:** Next, **Lesson 13-07 — A hardening checklist for your home lab** (the finale of Module 13).

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Do you use a VPN anywhere now? Where might one help? _______________________
3. What was hardest — symmetric vs. asymmetric, or encryption vs. hashing?
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain encryption, plaintext, ciphertext, and a key.
- [ ] I can tell symmetric from asymmetric encryption.
- [ ] I can explain hashing and how it protects integrity.
- [ ] I can explain what a VPN does and name its two types.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I'm ready for Lesson 13-07 (the hardening checklist).

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M13-L06** — "VPNs and Encryption in Plain Language" · Module 13 · Unit 10_
