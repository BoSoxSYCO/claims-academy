---
answer_key_for: NA-M10-L04
module: 10
lesson: 04
unit: 7
covers: [quiz-10-04, wb-10-04-fill-in-the-blank, wb-10-04-matching, wb-10-04-label-the-diagram, wb-10-04-short-answer, wb-10-04-hands-on-observation, wb-10-04-vocabulary-review, wb-10-04-reflection]
objective_ids: ["1.5", "4.1"]
---

# 🔒 Instructor Answer Key — Lesson 10-04: Secure vs. Insecure Protocol Pairs

> **Instructor-only.** Do not print with student copies. Answers map to N10-009 objectives **1.5** and **4.1**.

---

## Quiz 10-04 — answers & explanations

**1. Secure version of HTTP? → A) HTTPS (443).**
HTTPS wraps HTTP in TLS on port 443. SSH (B) and SFTP (C) are remote/file tools; FTPS (D) secures FTP, not web.

**2. Telnet's secure replacement? → B) SSH (22).**
SSH gives an encrypted command line. RDP (A) is graphical remote desktop; HTTPS (C) is web; SMB (D) is file sharing.

**3. IMAPS port? → C) 993.**
Secure IMAP is 993. 143 (A) is plain IMAP; 110 (B) is plain POP3; 995 (D) is POP3S — a classic trap since 993/995 sit together.

**4. SFTP runs over… → B) SSH on port 22.**
SFTP is a separate protocol carried by SSH (22). It is **not** FTPS. FTPS (A) uses TLS on 989/990.

**5. What encrypts HTTPS and secure email? → B) TLS.**
TLS (Transport Layer Security; older name SSL) is the lock. DHCP (A) hands out addresses; ARP (C) maps IP to MAC; NAT (D) translates addresses.

**6. True or false — secure always keeps the same port and adds an "S." → FALSE.**
Most secure twins use a **different** port: HTTPS is 443 (not 80), SSH is 22 (not 23). (SNMPv3 is the exception — same 161/162.) Accept any answer that says false and gives a different-port example.

**7. Secure version of LDAP? → A) LDAPS (636).**
LDAPS is LDAP over TLS on 636. DoT (B) secures DNS; POP3S (C) secures mail; SNMPv3 (D) secures SNMP.

**8. Matching → HTTPS = B (443); POP3S = C (995); IMAPS = A (993).**
Full credit requires all three correct.

**9. Fill in the blank → POP3S on port 995.**

**10. Scenario → Switch to HTTPS on port 443, locked by TLS.**
Full credit needs the protocol (HTTPS), the port (443), and the lock (TLS/encryption).

**Score band:** 9–10 ✅ · 7–8 🟡 review the pair you missed · 5–6 🟠 redrill pairs · <5 🔴 reteach with the postcard/envelope analogy.

---

## Worksheet 10.4.A — Fill in the Blank (2 pts each)

1. **HTTPS** &nbsp; 2. **443** &nbsp; 3. **SSH** &nbsp; 4. **SFTP** &nbsp; 5. **POP3S**
6. **IMAPS**, port **993** &nbsp; 7. **LDAPS** &nbsp; 8. **TLS** &nbsp; 9. **encryption**

**Challenge (+2):** SFTP is a separate protocol that rides **SSH on port 22**; FTPS is plain **FTP wrapped in TLS** on ports 989/990. Different tools, both secure.

---

## Worksheet 10.4.B — Matching (2 pts each)

**Part 1:** 1. HTTP → **B (HTTPS)** · 2. Telnet → **A (SSH)** · 3. POP3 → **D (POP3S)** · 4. IMAP → **E (IMAPS)** · 5. LDAP → **C (LDAPS)**

**Part 2:** 6. HTTPS → **J (443)** · 7. SFTP → **H (22)** · 8. IMAPS → **F (993)** · 9. POP3S → **G (995)** · 10. LDAPS → **I (636)**

---

## Worksheet 10.4.C — Label the Diagram (2 pts each)

1. HTTPS &nbsp; 2. **443** &nbsp; 3. **22** &nbsp; 4. SSH &nbsp; 5. **995** &nbsp; 6. IMAPS &nbsp; 7. **636**

8. **TLS** &nbsp; 9. **SSH** &nbsp; 10. **161/162**

---

## Worksheet 10.4.D — Short Answer (4 pts each)

1. Telnet sends everything — including passwords — as **clear text**, so anyone watching the network can read it.
2. HTTP → **HTTPS (443)**; Telnet → **SSH (22)**.
3. **SFTP** = secure file transfer over **SSH, port 22**. **FTPS** = FTP wrapped in **TLS, ports 989/990**. Different tools; both encrypt.
4. **POP3S = 995, IMAPS = 993.** POP3S downloads mail; IMAPS keeps mail on the server.
5. Look for **`https://` and the padlock** (HTTPS on 443, locked by TLS). Without it, the password travels in clear text and can be stolen.

---

## Worksheet 10.4.E — Hands-on Observation

- **2./3.** Yes on a bank/shop site (https + padlock).
- **4.** **443.**
- **5.** Any true security word: TLS, encrypted, valid certificate.
- **6.** Most trusted sites auto-redirect `http` → `https`, or the browser warns "Not secure." Accept an accurate description.
- **Record table:** two real rows the learner observed.
- **7.** Verbal recall — check box.
- **8.** Because on plain HTTP the password is **clear text** and anyone on the path can read it.

> **Accuracy note (Prime Directive #7):** the padlock, `https`, and certificate view are genuine browser features. Exact wording varies by browser, so the learner records what they actually see — no fabricated screenshots.

---

## Worksheet 10.4.F — Vocabulary Review (2 pts each)

**Part 1:** 1. Encryption → **C** · 2. Clear text → **D** · 3. TLS → **A** · 4. SFTP → **E** · 5. FTPS → **B**

**Part 2 (accept close wording):**
6. **TLS** — Transport Layer Security, the modern lock for web and email (older name SSL).
7. **LDAP** — looks up users/devices in a network directory (port 389).
8. **LDAPS** — LDAP directory lookup over TLS (port 636).
9. **POP3S** — POP3 email download over TLS (port 995).
10. **IMAPS** — IMAP email access over TLS (port 993).

---

## Worksheet 10.4.G — Reflection

Not graded for correctness. Full marks for honest, complete answers. Watch item 2/3 — the pair they keep mixing up shows where to reteach.

---
_NetworkAcademy+ · Answer Key 10-04 · CompTIA Network+ N10-009 · Instructor materials_
