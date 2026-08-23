# Flashcards — Domain 1: Networking Concepts

> **Domain 1 of 5 · CompTIA Network+ (N10-009)** · master deck (by domain)
> Every answer comes from a Published lesson (Modules 04–10). Cover the answer, say it from memory, then check.

**How to use:** read the **Q**, answer from memory (active recall), uncover the **A**, then sort into "got it" / "review again" and re-drill the second pile after a day (spaced repetition).

---

## OSI & TCP/IP models (Module 05)

| Q | A |
|---|---|
| The 7 OSI layers, 1→7 | Physical, Data Link, Network, Transport, Session, Presentation, Application |
| Memory hook for the OSI layers | Please Do Not Throw Sausage Pizza Away |
| Layer 1 — name + example | Physical — cables, hubs, bits |
| Layer 2 — name + example | Data Link — MAC addresses, switches, frames |
| Layer 3 — name + example | Network — IP addresses, routers, packets |
| Layer 4 — name + example | Transport — ports, TCP/UDP, segments |
| PDU at L2 / L3 / L4 | Frame / Packet / Segment |
| TCP vs UDP | TCP = connection-oriented, reliable (ACKs); UDP = fast, low overhead, best-effort |
| Which TCP/IP layer maps to OSI 1+2 | Network Access (Link) layer |

## Topologies & network types (Module 04)

| Q | A |
|---|---|
| Star topology | Every device connects to one central switch |
| Mesh topology | Many direct links; most redundancy |
| LAN vs WAN | LAN = one local site; WAN = spans distance/sites |
| PAN | Personal Area Network (e.g., Bluetooth) |
| Client-server vs peer-to-peer | Central server vs equal peers sharing directly |
| Cloud "elasticity" | Scale resources up/down on demand |

## Cabling & media (Module 06)

| Q | A |
|---|---|
| Fiber vs copper strength | Fiber = light, immune to EMI, long distances |
| PC-to-switch cable | Straight-through |
| Two like devices (PC-PC) historically | Crossover (auto-MDIX often fixes this now) |
| RJ45 | 8-pin connector for twisted-pair Ethernet |
| Cat5e vs Cat6 | Both twisted pair; Cat6 supports higher speeds/less crosstalk |

## IP addressing, subnetting & services (Modules 08–09)

| Q | A |
|---|---|
| /24 · /16 · /8 masks | 255.255.255.0 · 255.255.0.0 · 255.0.0.0 |
| Usable hosts on a /24 | 254 |
| Private ranges | 10.0.0.0/8 · 172.16–31.0.0 · 192.168.0.0/16 |
| APIPA range + meaning | 169.254.x.x — no DHCP answered |
| Loopback address | 127.0.0.1 |
| IPv4 / IPv6 bit-length | 32 / 128 |
| DHCP does what? | Hands out IP, mask, gateway, DNS automatically |
| DNS does what? | Turns names into IP addresses |
| ARP does what? | Finds the MAC that goes with an IP |
| NAT does what? | Lets private addresses share one public IP |
| Default gateway | The router address a host uses to leave its network |

## Ports & protocols (Module 10)

| Q (service) | A (port) |
|-------------|----------|
| FTP (data / control) | 20 / 21 |
| SSH / SFTP | 22 |
| Telnet | 23 |
| SMTP | 25 |
| DNS | 53 |
| DHCP (server / client) | 67 / 68 |
| HTTP / HTTPS | 80 / 443 |
| POP3 / IMAP | 110 / 143 |
| SNMP | 161 |
| RDP | 3389 |

---

> Any command output referenced anywhere is a varying example. **[TO VERIFY ON HARDWARE]**

---
_NetworkAcademy+ · Flashcards · CompTIA Network+ N10-009 · Domain 1 (Networking Concepts)_
