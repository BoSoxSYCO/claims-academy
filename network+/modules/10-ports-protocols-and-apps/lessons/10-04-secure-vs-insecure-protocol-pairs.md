---
id: NA-M10-L04
module: 10
lesson: 04
title: "Secure vs. Insecure Protocol Pairs"
unit: 7
objective_ids: ["1.5", "4.1"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E1
prerequisites: ["NA-M10-L01", "NA-M10-L02", "NA-M10-L03"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-06"
---

# [Module 10 · Lesson 04] Secure vs. Insecure Protocol Pairs

> **Unit:** Unit 7 — Ports, Protocols & Applications · **Time:** ~30 min · **Equipment:** E1 (your Windows laptop)
> **You'll need first:** Lessons 10-01, 10-02, and 10-03 (ports and the must-know list).

In the last lesson you learned the must-know ports. Some of those — like Telnet and plain FTP — are **old and unsafe**. This lesson teaches their **secure twins**: newer versions that lock the data so no one can read it. Learn them in pairs, and both stick.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain **why** a secure version of a protocol matters.
- [ ] Match each insecure protocol to its **secure twin**.
- [ ] Recall the secure ports (HTTPS 443, SFTP 22, IMAPS 993, POP3S 995, LDAPS 636).
- [ ] Choose the secure option in a real scenario.

---

## 2. Introduction — why this matters

Imagine mailing a letter. A **postcard** can be read by anyone who handles it. A **sealed envelope** cannot. The words are the same — only one is private.

Many early internet protocols are like postcards. **Telnet**, plain **FTP**, and plain **HTTP** send everything — even passwords — as clear text. Anyone watching the network can read it. That was fine in a small, trusted lab long ago. It is not fine today.

So each risky protocol got a **secure twin**. The twin does the same job but wraps the data in encryption, using a technology called **TLS (Transport Layer Security)** or **SSH (Secure Shell)**. Encryption scrambles the data so only the right receiver can unscramble it.

The exam loves these pairs: "What is the secure version of HTTP?" or "Which port does SFTP use?" Learn them together and you answer both at once.

🎯 **Exam tip:** When you see two choices doing the same job, pick the **encrypted** one. The letter **S** usually means *Secure*.

🔧 **Lab link:** Your browser already uses the secure twin (HTTPS) every day. You'll spot it live.

---

## 3. Simple explanation

**Encryption** turns readable text into scrambled text. Only someone with the right key can turn it back. A protocol that uses encryption is **secure**; one that does not is **insecure** (clear text).

Two tools do most of the wrapping:

- **TLS (Transport Layer Security)** — the modern lock for web, email, and more. (You may hear the older name **SSL**.)
- **SSH (Secure Shell)** — the secure remote-access tool from Lesson 10-03; SFTP rides on it.

### The pairs to learn

| Insecure (clear text) | Port | Secure twin | Port | Locked by |
|-----------------------|:----:|-------------|:----:|-----------|
| **HTTP** (web) | 80 | **HTTPS** | 443 | TLS |
| **FTP** (files) | 20/21 | **SFTP** | 22 | SSH |
| **FTP** (files) | 20/21 | **FTPS** | 989/990 | TLS |
| **Telnet** (remote) | 23 | **SSH** | 22 | SSH itself |
| **POP3** (get mail) | 110 | **POP3S** | 995 | TLS |
| **IMAP** (get mail) | 143 | **IMAPS** | 993 | TLS |
| **SMTP** (send mail) | 25 | **SMTP (submission)** | 587 | TLS (STARTTLS) |
| **LDAP** (directory) | 389 | **LDAPS** | 636 | TLS |
| **DNS** (name → IP) | 53 | **DoT** (DNS over TLS) | 853 | TLS |

> **New here:** **LDAP (Lightweight Directory Access Protocol)** looks up users and devices in a company directory (like a phone book for the network). Plain LDAP is 389; secure **LDAPS** is 636.

### Two special cases

- **SFTP is not "FTP with an S."** SFTP is a totally different tool that runs **over SSH on port 22**. FTPS *is* FTP wrapped in TLS (ports 989/990). Both are secure — just built differently.
- **SNMP** has no new port for its secure version. **SNMPv3** (the safe one) still uses **161/162** but adds encryption and login checks. Older SNMP v1 and v2 do not.

> **The big idea:** Every risky clear-text protocol has a **secure twin** that does the same job with encryption. **Web:** HTTP 80 → HTTPS 443. **Files:** FTP → SFTP 22 (over SSH) or FTPS 989/990. **Remote:** Telnet 23 → SSH 22. **Mail:** POP3 110 → POP3S 995, IMAP 143 → IMAPS 993, SMTP 25 → 587. **Directory:** LDAP 389 → LDAPS 636. When in doubt, choose the encrypted twin.

💡 **Tip:** Many secure mail/web ports end in a pattern worth memorizing: **IMAPS 993, POP3S 995** sit right next to each other in the 990s.

⚠️ **Watch out:** Don't assume "secure" just adds an S to the port. HTTPS (443) and SSH (22) share **no** digits with their insecure twins. Learn each pair as a fact.

---

## 4. Real-world analogy

> **"Insecure protocols are postcards; secure protocols are sealed envelopes."**

| Postcard (insecure) | Sealed envelope (secure) |
|---------------------|--------------------------|
| Anyone in the path can read it | Only the receiver can open it |
| HTTP, Telnet, plain FTP | HTTPS, SSH, SFTP |
| Fine for a note that isn't private | Needed for passwords and data |
| Same message inside | Same message inside |

The job is identical. Only the privacy changes. On a real network, always choose the envelope.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Encryption** | en-KRIP-shun | Scrambling data so only the right person can read it. |
| **Clear text** | | Data sent unscrambled — anyone can read it. |
| **TLS** | T-L-S | Transport Layer Security — the modern lock for web and mail. |
| **SFTP** | S-F-T-P | Secure file transfer that runs over SSH (port 22). |
| **FTPS** | F-T-P-S | FTP wrapped in TLS (ports 989/990). |
| **LDAP / LDAPS** | L-dap | Directory lookup — plain (389) and secure (636). |

---

## 6. ASCII diagram

```
   INSECURE  (clear text)         SECURE TWIN  (encrypted)

   HTTP    80   ───────────►      HTTPS   443    (TLS)
   FTP     20/21 ──────────►      SFTP    22     (over SSH)
                              or   FTPS    989/990 (TLS)
   Telnet  23   ───────────►      SSH     22
   POP3    110  ───────────►      POP3S   995    (TLS)
   IMAP    143  ───────────►      IMAPS   993    (TLS)
   SMTP    25   ───────────►      SMTP    587    (TLS/STARTTLS)
   LDAP    389  ───────────►      LDAPS   636    (TLS)
   DNS     53   ───────────►      DoT     853    (TLS)

   Rule: same job, but the twin locks the data.  Pick the twin.
```

_Read each row as a pair: the old clear-text protocol on the left, its secure twin on the right._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-10-04-secure-pairs-01.svg` (created and stored in this module's `assets/`)
> **Shows:** two columns — insecure (left) and secure twin (right) — with an arrow from each protocol to its safe version, plus port numbers and the lock used (TLS or SSH).
> **Key elements & labels:** HTTP 80→HTTPS 443; FTP→SFTP 22 / FTPS 989-990; Telnet 23→SSH 22; POP3 110→POP3S 995; IMAP 143→IMAPS 993; SMTP 25→587; LDAP 389→LDAPS 636; DNS 53→DoT 853.
> **Color meaning:** left column marked "insecure / clear text" in text and an open-lock icon; right column marked "secure / encrypted" in text and a closed-lock icon. Never color alone — each side is labeled in words.
> **Flow direction:** left-to-right arrows, one pair per row.
> **Alt text (required):** "Two columns pairing insecure protocols with their secure twins. HTTP port 80 becomes HTTPS port 443 using TLS. FTP becomes SFTP port 22 over SSH, or FTPS ports 989 and 990 using TLS. Telnet port 23 becomes SSH port 22. POP3 port 110 becomes POP3S port 995 using TLS. IMAP port 143 becomes IMAPS port 993 using TLS. SMTP port 25 becomes SMTP submission port 587 using TLS. LDAP port 389 becomes LDAPS port 636 using TLS. DNS port 53 becomes DNS over TLS port 853. The left side is labeled insecure clear text with an open lock; the right side is labeled secure encrypted with a closed lock."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-10-04-padlock-https-01.jpg`
> A browser address bar showing the padlock and `https://`. Alt text: "A browser address bar with a padlock icon and https, showing the connection is secure."
>
> **Photo 2** — `img-10-04-cert-details-01.jpg`
> The certificate pop-up after clicking the padlock. Alt text: "The site security details shown after clicking the padlock, proving the page uses TLS encryption."

---

## 9. Hands-on lab

**Goal:** see the secure web twin (HTTPS) working in your own browser.
**Why:** proving encryption is on turns the idea into something real you can point to.

**You will need**
- Your Windows laptop (Equipment tier **E1**), on the internet. Estimated time: 10 min.

⚠️ **Before you start (safety):** you only **look**. You change no settings.

### 9a. Step-by-step instructions

1. Open your browser and go to any bank or shopping site.
2. Look at the address bar. Find the **padlock** and the letters **`https`**.
3. Click the **padlock** once.
4. Choose **Connection is secure**, then **Certificate is valid** (wording varies by browser).
5. Read the pop-up. Note the words **TLS** or **encrypted**.

### 9b. Expected results

- The address starts with **`https://`** (port 443), not `http://`.
- The padlock is closed.
- The details mention a **certificate** and **TLS**.

- ✅ **You did it if:** you found `https`, the padlock, and the word TLS or "secure."

### 9c. Verify it worked

1. Say out loud: "HTTPS on port 443 — the secure twin of HTTP."
2. Name one other pair from memory (e.g., Telnet 23 → SSH 22).

### 9d. Reset / roll back

Nothing changed — you only looked. Close the pop-up when done.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking SFTP = "FTP + S" | Wrong idea and port | SFTP is separate; it rides **SSH on 22**. FTPS is the TLS-wrapped FTP (989/990) |
| Guessing the secure port adds an S | Wrong number | HTTPS is 443, not 80S. Learn each pair as a fact |
| Using Telnet or plain FTP | Passwords exposed | Use SSH (22) and SFTP (22) instead |
| Mixing POP3S and IMAPS | Wrong port | POP3S = **995**, IMAPS = **993** |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Browser warns "Not secure" | Site is plain HTTP | Look for an `https://` version; avoid entering passwords on HTTP |
| Secure file transfer fails | Wrong secure port | Confirm SFTP uses 22, or FTPS uses 989/990 |
| Secure email won't connect | Wrong mail port | Check IMAPS 993 or POP3S 995, and 587 for sending |
| Directory login insecure | Using LDAP 389 | Switch the app to LDAPS on 636 |

---

## 12. Lesson summary

- Old protocols send **clear text**; their **secure twins** encrypt it.
- **Web:** HTTP 80 → **HTTPS 443**. **Remote:** Telnet 23 → **SSH 22**.
- **Files:** FTP → **SFTP 22** (over SSH) or **FTPS 989/990**.
- **Mail:** POP3 110 → **POP3S 995**, IMAP 143 → **IMAPS 993**, SMTP → **587**.
- **Directory:** LDAP 389 → **LDAPS 636**. **Rule:** always pick the encrypted twin.

**One-sentence recap:** Every clear-text protocol has a secure, encrypted twin that does the same job — learn them in pairs and always choose the twin.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-10-04-fill-in-the-blank.md`
2. **Matching** — `wb-10-04-matching.md`
3. **Label the diagram** — `wb-10-04-label-the-diagram.md` (the secure pairs)
4. **Short answer** — `wb-10-04-short-answer.md`
5. **Hands-on observation** — `wb-10-04-hands-on-observation.md` (find HTTPS)
6. **Vocabulary review** — `wb-10-04-vocabulary-review.md`
7. **Reflection** — `wb-10-04-reflection.md`

**Quick written warm-up (do this now):** What is the secure twin of Telnet? What port does HTTPS use?

Secure twin of Telnet: ____________  HTTPS port: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-10-04-knowledge-check.md`.)

1. What is the secure version of **HTTP**? *(Objective: web)*
   - A) HTTPS (443)
   - B) SSH (22)
   - C) SFTP (22)
   - D) FTPS (990)

2. **Telnet** is insecure. Its secure replacement is… *(Objective: remote)*
   - A) RDP (3389)
   - B) SSH (22)
   - C) HTTPS (443)
   - D) SMB (445)

3. Which port does **IMAPS** (secure IMAP) use? *(Objective: mail)*
   - A) 143
   - B) 110
   - C) 993
   - D) 995

4. **SFTP** transfers files securely. It runs over… *(Objective: files)*
   - A) TLS on port 990
   - B) SSH on port 22
   - C) HTTP on port 80
   - D) UDP on port 69

5. What technology encrypts HTTPS and most secure email? *(Objective: encryption)*
   - A) DHCP
   - B) TLS
   - C) ARP
   - D) NAT

6. **True or false —** Adding an "S" to a protocol always keeps the same port number, just adding S. Explain in one sentence. *(Objective: ports)*

7. Which is the secure version of **LDAP**? *(Objective: directory)*
   - A) LDAPS (636)
   - B) DoT (853)
   - C) POP3S (995)
   - D) SNMPv3

8. **Matching —** write the secure twin's port next to each. *(Objective: recall)*
   - ___ HTTPS &nbsp;&nbsp; ___ POP3S &nbsp;&nbsp; ___ IMAPS
   - A) 993 &nbsp; B) 443 &nbsp; C) 995

9. Fill in the blank: The secure twin of POP3 is POP3S on port ____________. *(Objective: mail)*

10. **Scenario —** A coworker set up a website login over plain **HTTP**. Passwords are exposed. What protocol and port should they switch to, and what locks it? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-10-04-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-10-04-secure-pairs.md`. In brief:

- **Objective in one line:** learners match each insecure protocol to its secure twin, with ports and the lock (TLS or SSH).
- **Common misconceptions:** "secure = add an S to the port"; "SFTP = FTPS." Correct both.
- **Pacing:** ~30 min. Teach as pairs, drill left↔right, then the two special cases (SFTP-over-SSH, SNMPv3 same port).
- **How CompTIA tests it:** "secure version of X," secure port recall, and scenario choices (pick the encrypted option).
- **Accuracy note:** all ports are IANA/standards-based (HTTPS 443, SFTP 22, FTPS 989/990, POP3S 995, IMAPS 993, submission 587, LDAPS 636, DoT 853). SNMPv3 keeps 161/162. No fabricated data.
- **Extension idea:** DoH (DNS over HTTPS, 443) and SIP/SIPS (5060/5061) as bonus pairs.

---

## 17. Cheat sheet

> **Quick reference — Secure vs. insecure pairs**
>
> | Insecure | Secure twin | Port | Lock |
> |----------|-------------|:----:|------|
> | HTTP 80 | HTTPS | 443 | TLS |
> | FTP 20/21 | SFTP | 22 | SSH |
> | FTP 20/21 | FTPS | 989/990 | TLS |
> | Telnet 23 | SSH | 22 | SSH |
> | POP3 110 | POP3S | 995 | TLS |
> | IMAP 143 | IMAPS | 993 | TLS |
> | SMTP 25 | SMTP (submission) | 587 | TLS |
> | LDAP 389 | LDAPS | 636 | TLS |
> | DNS 53 | DoT | 853 | TLS |
>
> - **SFTP (22, over SSH) ≠ FTPS (989/990, TLS).** SNMPv3 stays on **161/162**.
> - Rule: same job, encrypted — **pick the twin.**
>
> _(Full version: `resources/cheat-sheets/ports-and-protocols-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Encryption** — Scrambling data so only the right receiver can read it.
- **Clear text** — Data sent unscrambled, which anyone in the path can read.
- **TLS (Transport Layer Security)** — The modern encryption that locks web and email traffic (older name: SSL).
- **SFTP (SSH File Transfer Protocol)** — Secure file transfer that runs over SSH (port 22).
- **FTPS (FTP Secure)** — FTP wrapped in TLS encryption (ports 989/990).
- **POP3S (POP3 Secure)** — POP3 email download over TLS (port 995).
- **IMAPS (IMAP Secure)** — IMAP email access over TLS (port 993).
- **LDAP (Lightweight Directory Access Protocol)** — Looks up users and devices in a network directory (port 389).
- **LDAPS (LDAP Secure)** — LDAP directory lookup over TLS (port 636).

(HTTPS and SSH were defined in Lesson 10-03 and are reused here.)

---

## 19. Homework

- **Practice:** Make pair flashcards — insecure on one side, secure twin + port on the other.
- **Spaced review:** Redo the 10-03 flashcards; for each protocol, name its secure twin if it has one.
- **Preview:** Next lesson, a **memory system** to hold the whole port table in your head.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Which pair is easiest for me to remember? _______________________
3. Where would I use a secure twin in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain why encryption matters.
- [ ] I can match each insecure protocol to its secure twin.
- [ ] I can recall the secure ports (443, 22, 993, 995, 636).
- [ ] I know SFTP rides SSH (22) and FTPS uses TLS (989/990).
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: a memory system for the port table.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M10-L04** — "Secure vs. Insecure Protocol Pairs" · Module 10 · Unit 7_
