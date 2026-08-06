---
answer_key_for: NA-M10-L03
module: 10
lesson: 03
unit: 7
covers: [quiz-10-03, wb-10-03-fill-in-the-blank, wb-10-03-matching, wb-10-03-label-the-diagram, wb-10-03-short-answer, wb-10-03-hands-on-observation, wb-10-03-vocabulary-review, wb-10-03-reflection]
objective_ids: ["1.5"]
---

# 🔒 Instructor Answer Key — Lesson 10-03: The Must-Know Ports

> **Instructor-only.** Do not print with student copies. Every answer maps to N10-009 objective **1.5**.

---

## Quiz 10-03 — answers & explanations

**1. What port does HTTPS use? → B) 443.**
HTTPS is secure (encrypted) web. Port 80 (A) is plain HTTP. 22 (C) is SSH; 25 (D) is SMTP.

**2. What port does SSH use? → A) 22.**
SSH is the secure remote command line. 23 (B) is Telnet — one number up but insecure. 3389 (C) is RDP; 21 (D) is FTP.

**3. Which protocol sends email? → C) SMTP.**
**S**MTP **S**ends. POP3 (A) and IMAP (B) *receive*. SMB (D) is file sharing, not mail.

**4. What service uses port 3389? → B) RDP (Remote Desktop).**
RDP remote-controls a Windows desktop. SSH (A) is 22; DNS (C) is 53; FTP (D) is 20/21.

**5. SMB uses port… → C) 445.**
SMB is Windows file/printer sharing. 21 (A) is FTP; 69 (B) is TFTP; 143 (D) is IMAP.

**6. True or false — Telnet is the secure remote protocol. → FALSE.**
Telnet (port 23) is **unencrypted** — anyone watching can read it. **SSH (port 22) is the secure one.** Accept any answer that says false and names SSH as the secure choice.

**7. Which service uses both TCP and UDP? → B) DNS (53).**
DNS uses UDP for quick lookups and TCP for larger transfers (like zone transfers). HTTP (A), SMB (C), and RDP (D) are TCP.

**8. Matching → HTTP = B (80); SMTP = C (25); FTP = A (21).**
Full credit requires all three correct.

**9. Fill in the blank → HTTP uses port 80.**
(HTTPS is 443, already given.)

**10. Scenario → SSH on port 22 (secure command line) and SMB on port 445 (file share).**
Accept SSH/22 + SMB/445. Both protocol **and** port needed for full credit. Note: SSH is chosen over Telnet because the prompt says *securely*.

**Score band:** 9–10 ✅ · 7–8 🟡 review the mixed-up group · 5–6 🟠 redrill by job · <5 🔴 reteach with flashcards.

---

## Worksheet 10.3.A — Fill in the Blank (2 pts each)

1. **80** &nbsp; 2. **443** &nbsp; 3. **22** &nbsp; 4. **23** &nbsp; 5. **25**
6. **110** &nbsp; 7. **143** &nbsp; 8. **3389** &nbsp; 9. **445** &nbsp; 10. **53**

**Challenge (+2):** The remote-access ports are **22 (SSH)** and **23 (Telnet)**; **SSH (22) is the secure one.**

---

## Worksheet 10.3.B — Matching (2 pts each)

1. HTTP → **C (80)**
2. HTTPS → **F (443)**
3. SSH → **E (22)**
4. Telnet → **G (23)**
5. SMTP → **A (25)**
6. IMAP → **H (143)**
7. RDP → **D (3389)**
8. SMB → **B (445)**

9. Secure remote protocol → **SSH**
10. Insecure, avoid → **Telnet**

---

## Worksheet 10.3.C — Label the Diagram (2 pts each)

1. HTTP = **80** &nbsp; 2. HTTPS = **443** &nbsp; 3. SMTP = **25** &nbsp; 4. POP3 = **110** &nbsp; 5. SSH = **22**
6. RDP = **3389** &nbsp; 7. TFTP = **69** &nbsp; 8. SMB = **445** &nbsp; 9. DNS = **53**

10. TFTP is **UDP**. DNS uses **both TCP and UDP**.

---

## Worksheet 10.3.D — Short Answer (4 pts each)

1. **HTTP 80 and HTTPS 443; 443 (HTTPS) is secure/encrypted.**
2. **SMTP sends; POP3 and IMAP receive.** (POP3 downloads to one device; IMAP keeps mail on the server.)
3. **SSH = 22, Telnet = 23. Use SSH** because it is encrypted; Telnet sends everything in the clear.
4. **DNS uses both TCP and UDP, on port 53** — not UDP only.
5. **RDP, port 3389.**

---

## Worksheet 10.3.E — Hands-on Observation

- **4.** 443 = **HTTPS** (secure web).
- **5.** Yes/No both acceptable — depends on the laptop; SMB may or may not be listening.
- **6.** 445 = **SMB**.
- **Record table:** any three real rows the learner saw, correctly named and tagged TCP/UDP. (Common: 443→HTTPS→TCP, 53→DNS→UDP, 445→SMB→TCP.)
- **7.** Check the box — verbal recall.
- **8.** Any UDP service: **DNS 53, DHCP 67/68, NTP 123, SNMP 161/162, TFTP 69, or Syslog 514.**
- **9./10.** Completion + honest reflection; full credit for any thoughtful answer.

> **Accuracy note (Prime Directive #7):** `netstat -an` is a real Windows command. Exact rows vary by machine, so the learner records *their own* output — no fabricated device data.

---

## Worksheet 10.3.F — Vocabulary Review (2 pts each)

**Part 1:** 1. SSH → **B** (Secure Shell) · 2. SMTP → **A** (Simple Mail Transfer Protocol) · 3. IMAP → **D** (Internet Message Access Protocol) · 4. RDP → **C** (Remote Desktop Protocol) · 5. SMB → **E** (Server Message Block).

**Part 2 (accept close wording):**
6. **HTTPS** — secure, encrypted web pages (port 443).
7. **POP3** — downloads email to one device (port 110).
8. **Telnet** — old, unencrypted remote command line (port 23); avoid it.
9. **FTP** — transfers files between computers (ports 20/21).
10. **TFTP** — a simple, no-frills file transfer (port 69, UDP).

---

## Worksheet 10.3.G — Reflection

Not graded for correctness. Award full marks for honest, complete answers. Watch item 3 (the port they mix up) — it flags where to reteach.

---
_NetworkAcademy+ · Answer Key 10-03 · CompTIA Network+ N10-009 · Instructor materials_
