# Cheat Sheet — IP Addressing & Subnetting

> A printable quick reference for **Module 08**. Grows as the module's lessons are published.

---

## IP address vs. MAC address (Lesson 08-01)

| | **IP address** | **MAC address** |
|---|----------------|-----------------|
| Kind | **Logical** (software) | **Physical** (hardware) |
| Set by | Assigned (by hand or auto) | Burned in at the factory |
| Changes? | **Yes** — on a new network | **No** — stays with the device |
| Job | **Route** between networks | **Local** delivery on one LAN |
| OSI layer | **3** (Network) | **2** (Data Link) |
| Example | `192.168.1.10` | `AA:BB:CC:11:22:33` |

- **IP = mailing address; MAC = your name.** The address routes mail across the world; the name matters once it's at your door.
- **IPv4** = four **octets** (each 0–255) in **dotted-decimal**: `192.168.1.10`.
- A device with an IP on a network is a **host**.
- **Delivery:** **IP** gets data to the right **network** → **MAC** gets it to the right **device** (last hop).
- Find your own IP on Windows: run **`ipconfig`** → read the **IPv4 Address** line.

```
internet ─▶ router ─▶ router ─▶ your LAN ─▶ your laptop
         └──── uses IP to cross networks ────┘   last hop: MAC
```

> **Remember:** IP to the network, MAC to the device. IP can change; MAC does not.

---
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 08_
