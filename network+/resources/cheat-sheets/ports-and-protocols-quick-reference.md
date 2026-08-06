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
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 10_
