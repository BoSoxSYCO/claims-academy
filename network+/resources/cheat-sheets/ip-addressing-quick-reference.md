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

## IPv4 structure, classes & private ranges (Lesson 08-02)

- **32 bits = 4 octets**; splits into **network portion** + **host portion**.

**Class by first octet:**

| Class | First octet | Note |
|:-----:|:-----------:|------|
| **A** | 1–126 | huge networks (127 = loopback) |
| **B** | 128–191 | medium |
| **C** | 192–223 | small |
| **D** | 224–239 | multicast |
| **E** | 240–255 | reserved |

**Private ranges (stay inside a network):**

| Range | From – To |
|-------|-----------|
| **10.0.0.0/8** | 10.0.0.0 – 10.255.255.255 |
| **172.16.0.0/12** | 172.16.0.0 – 172.31.255.255 (only 16–31) |
| **192.168.0.0/16** | 192.168.0.0 – 192.168.255.255 |

- **127.0.0.1** = **loopback** (a device reaching itself; tests its own network software).
- **169.254.x.x** = **APIPA** (a device gave itself an address → **DHCP didn't answer**).
- Memory hook: "**10, 172-dot-16, 192-dot-168.**"

> **Remember:** first octet → class. Three private blocks stay inside. 127 = self; 169.254 = DHCP failed.

---

## Subnet masks (Lesson 08-03)

- A **subnet mask** = four octets. **255 = network**, **0 = host**.
- **Split:** cover the 255 octets → that's the network; the rest is the host.
  - `192.168.1.10` + `255.255.255.0` → network **192.168.1**, host **10**.

**Default masks:**

| Class | Default mask | Network octets |
|:-----:|:------------:|:--------------:|
| **A** | 255.0.0.0 | 1 |
| **B** | 255.255.0.0 | 2 |
| **C** | 255.255.255.0 | 3 |

- **Same network?** network portions match → **deliver directly**; differ → **send to the router (gateway)**.
- Shortcut with `255.255.255.0`: same **first three octets** = same network.
- The **mask** (not the class) decides the real split — always read it.

> **Remember:** the mask is a highlighter — 255 highlights the network, 0 leaves the host plain.

---
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 08_
