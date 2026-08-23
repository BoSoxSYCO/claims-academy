# Cheat Sheet — Ports, Protocols & Applications

> A printable quick reference for **Module 10**. Grows as the module's lessons are published.

---

## What ports and protocols are (Lesson 10-01)

- **Protocol** = the agreed **rules** (language) two devices speak.
- **Port number** (0–65535) = **which program** the data is for — the mailbox at the IP's address.
  - **IP → the device** (building) · **Port → the program** (mailbox).
- **Socket** = IP + port together → `192.168.1.24:443`.

**Three port ranges:**

| Range | Numbers | Used by |
|-------|---------|---------|
| **Well-known** | 0 – 1023 | common services (web 80/443, …) |
| **Registered** | 1024 – 49151 | specific apps / vendors |
| **Ephemeral (dynamic)** | 49152 – 65535 | a **client's** temporary port |

- Servers **listen** on well-known ports; clients **connect from** ephemeral ports.

```
laptop:51000  (ephemeral)  ⇄  server:443  (well-known)
```

- A network **port** (a number) ≠ a **physical port** (the plug).
- See it: **`netstat -n`** (local ephemeral ⇄ foreign well-known).

> **Remember:** IP = the building, port = the mailbox, protocol = the language of the letter.

---

## TCP vs. UDP (Lesson 10-02)

| | **TCP** | **UDP** |
|---|---------|---------|
| Setup | three-way **handshake** | none (connectionless) |
| Reliable | **yes** — ACK, resend, in order | no — best-effort |
| Speed | slower (more overhead) | **faster** |
| Like | a phone call | a live broadcast |
| Use | web, email, files | voice/video, games, DNS |

- **Three-way handshake:** SYN → SYN-ACK → ACK, then data flows.
- **ACK** = a message confirming data was received.
- Memory hook: **TCP = Trusty/Checked · UDP = Ultra-fast/Don't-care.**
- See it: `netstat -an` — TCP rows show a **State**; UDP rows don't.

> **Remember:** TCP when data must be perfect; UDP when speed matters more than a lost piece.

---

## The must-know ports (Lesson 10-03)

Learn them **by job** — the groups make them stick.

| Port | Protocol | Job | TCP/UDP |
|:----:|----------|-----|:-------:|
| 20/21 | FTP | file transfer | TCP |
| 22 | SSH | secure remote | TCP |
| 23 | Telnet | remote (insecure) | TCP |
| 25 | SMTP | send email | TCP |
| 53 | DNS | name → IP | TCP/UDP |
| 67/68 | DHCP | auto addressing | UDP |
| 69 | TFTP | simple file transfer | UDP |
| 80 | HTTP | web | TCP |
| 110 | POP3 | download email | TCP |
| 123 | NTP | time | UDP |
| 143 | IMAP | email (server-kept) | TCP |
| 161/162 | SNMP | monitoring | UDP |
| 443 | HTTPS | secure web | TCP |
| 445 | SMB | file/printer sharing | TCP |
| 514 | Syslog | logging | UDP |
| 3389 | RDP | remote desktop | TCP |

- **Web:** HTTP 80 · HTTPS 443. **Mail:** SMTP 25 (send) · POP3 110 · IMAP 143 (receive).
- **Remote:** SSH 22 (secure) · Telnet 23 (insecure) · RDP 3389. **Files:** FTP 20/21 · TFTP 69 · SMB 445.
- ⚠️ **SSH 22 (secure) vs Telnet 23 (insecure).** **S**MTP **S**ends; POP3/IMAP receive.

> **Remember:** group by job, then note TCP vs. UDP for each.

---

## Secure vs. insecure pairs (Lesson 10-04)

Every clear-text protocol has a **secure twin** that does the same job with encryption.

| Insecure | Port | Secure twin | Port | Lock |
|----------|:----:|-------------|:----:|------|
| HTTP | 80 | **HTTPS** | 443 | TLS |
| FTP | 20/21 | **SFTP** | 22 | SSH |
| FTP | 20/21 | **FTPS** | 989/990 | TLS |
| Telnet | 23 | **SSH** | 22 | SSH |
| POP3 | 110 | **POP3S** | 995 | TLS |
| IMAP | 143 | **IMAPS** | 993 | TLS |
| SMTP | 25 | **SMTP (submission)** | 587 | TLS |
| LDAP | 389 | **LDAPS** | 636 | TLS |
| DNS | 53 | **DoT** | 853 | TLS |

- ⚠️ **SFTP (22, over SSH) ≠ FTPS (989/990, TLS).** **SNMPv3** stays on **161/162** but adds encryption.
- **TLS (Transport Layer Security)** is the modern lock (older name: SSL).
- Mail secure ports sit together: **IMAPS 993, POP3S 995.**

> **Remember:** secure ≠ "same port + S." Learn each pair as a fact, and always pick the twin.

---

## The port memory system (Lesson 10-05)

Four habits to lock the whole port table in:

1. **Chunk** — web · mail · remote · files · services. Learn one group at a time.
2. **Active recall** — cover the answer, say it, check. Quiz **both** directions (number ↔ protocol).
3. **Space it** — review today → tomorrow → +2 days → +4 days → +1 week.
4. **Mnemonic** — only for the ports you keep missing.

- **Recall beats rereading.** Two minutes quizzing > twenty minutes reading.
- Hooks: **SSH 22** "too secure" · **SMB 445** "Share My Business" · mail climbs **25 → 110 → 143**.

> **Remember:** pull the fact OUT of your head — don't just read it in.

---
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 10_
