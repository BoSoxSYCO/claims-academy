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

## CIDR / slash values (Lesson 08-04)

- **CIDR** = a slash + the count of **network (1) bits** (the **prefix length**). A slash counts **bits, not octets**.
- Each **255** octet = **8** bits. `255.255.255.0` = **/24**.

| Mask | Slash |
|------|:-----:|
| 255.0.0.0 | /8 |
| 255.255.0.0 | /16 |
| 255.255.255.0 | /24 |

**Octet → bits (partial octets):**

| Octet | 0 | 128 | 192 | 224 | 240 | 248 | 252 | 254 | 255 |
|-------|:-:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Bits | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |

- Example: `255.255.255.128` = /25 · `255.255.255.192` = /26.
- CIDR is **classless** — the split can fall anywhere (not just A/B/C edges).
- Max slash = **/32** (an IPv4 address is only 32 bits).

> **Remember:** count the 1s → that's the slash. Shorthand like "a dozen" = 12.

---

## Subnetting — the beginner method (Lesson 08-05)

1. **New mask** → find the **interesting octet** (the one that isn't 255 or 0).
2. **Block size = 256 − that octet's mask value.** Subnets start every block, from 0.
3. **Network** = first address (host bits 0). **Broadcast** = last (host bits 1) = one below the next subnet.
4. **Usable hosts** = the range between = **2^(host bits) − 2**.
5. **Number of subnets = 2^(bits borrowed).**

**Block-size / host quick table:**

| Slash | Mask (last octet) | Block | Usable hosts |
|:-----:|:-----------------:|:-----:|:------------:|
| /25 | 128 | 128 | 126 |
| /26 | 192 | 64 | 62 |
| /27 | 224 | 32 | 30 |
| /28 | 240 | 16 | 14 |
| /29 | 248 | 8 | 6 |
| /30 | 252 | 4 | 2 |

- **Always −2** for usable hosts (drop network + broadcast).
- Check: subnets × block = 256 (the whole octet) — no gaps, no overlaps.

> **Remember:** block size is your friend — get it, then count. Network first, broadcast last, hosts between.

---

## Subnetting shortcuts (Lesson 08-06)

- **Powers of 2:** 1, 2, 4, 8, 16, 32, 64, 128, 256.
- **Round down (magic number):** round the interesting octet **down** to the nearest **block size** → that's the subnet. Broadcast = next block − 1.
- **Size a mask:**
  - hosts → smallest bits with **2^bits − 2 ≥ hosts needed**.
  - subnets → **2^borrowed ≥ subnets needed**.

**Usable hosts by slash:**

| /24 | /25 | /26 | /27 | /28 | /29 | /30 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 254 | 126 | 62 | 30 | 14 | 6 | 2 |

- Example: `192.168.1.100/26` → block 64 → 100 rounds to **64** → subnet .64, broadcast .127.

> **Remember:** like times tables — recall the pattern, don't count. Round down to find the subnet.

---

## IPv6 (Lesson 08-07)

- **Why:** IPv4 (32-bit, ~4.3 billion) ran out → **IPv6 = 128-bit** (vastly more).
- **Format:** eight **hextets** of 4 hex digits, colon-separated.
- **Rule 1:** drop **leading** zeros per group (`0db8`→`db8`, `0000`→`0`).
- **Rule 2:** one run of zero groups → **`::`** (once only; compress the longest run).
  - `2001:0db8:0000:0000:0000:ff00:0042:8329` → `2001:db8::ff00:42:8329`.

**Recognize:**

| Address | Type |
|---------|------|
| `::1` | loopback (yourself) |
| `::` | unspecified (no address) |
| `fe80::…` | link-local (own link, not routable) |
| `2000–3fff…` | global unicast (public) |

- **No broadcast** in IPv6 — it uses **multicast**.

> **Remember:** drop leading zeros, `::` once. `::1` = self, `fe80::` = link-local.

---

## Public/private & NAT (Lesson 08-08)

- **Private** IP: inside only, not routable (10.x · 172.16–31.x · 192.168.x).
- **Public** IP: unique on the internet; the ISP gives your router **one**.
- **NAT** = router swaps **private → public** going out, **public → private** coming back.
- **PAT** = uses **port numbers** so **many** devices share the one public IP (what home routers do).
- NAT hides inside devices but is **not** a full firewall.
- `ipconfig` shows your **private** IP; the router's WAN page shows your **public** IP.

```
inside (private) ─▶ [ router: NAT ] ─▶ internet (one public IP)
192.168.1.x           swap ⇄            203.0.113.7
```

> **Remember:** many private inside · one public outside · NAT translates · PAT shares.

---
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 08_
