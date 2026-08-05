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
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 10_
