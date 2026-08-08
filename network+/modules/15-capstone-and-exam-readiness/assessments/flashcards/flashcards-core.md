# Core Flashcards — CompTIA Network+ (N10-009)

> **Companion lesson:** NA-M15-L06 · **Module:** 15 · **Unit:** 12
> High-yield facts drawn only from taught content (Modules 01–14). Cover the answer, say it aloud, then check.

**How to use:** Read the **Q** side, answer from memory (active recall), then uncover the **A** side. Sort each card into "got it" or "review again." Re-drill the "review again" pile after a day (spaced repetition).

---

## Deck 1 — Common ports (Module 10)

| Q (service) | A (port) |
|-------------|----------|
| FTP (data / control) | 20 / 21 |
| SSH (and SFTP) | 22 |
| Telnet | 23 |
| SMTP (send email) | 25 |
| DNS | 53 |
| DHCP (server / client) | 67 / 68 |
| HTTP | 80 |
| HTTPS | 443 |
| POP3 | 110 |
| IMAP | 143 |
| SNMP | 161 |
| RDP (Remote Desktop) | 3389 |

- Memory hook: **web** = 80/443; **mail** = 25/110/143; **remote** = 22 (SSH) / 3389 (RDP).

---

## Deck 2 — OSI model, 7 layers (Module 05)

| Q | A |
|---|---|
| Layer 1 name + example | Physical — cables, hubs, bits |
| Layer 2 name + example | Data Link — MAC addresses, switches, frames |
| Layer 3 name + example | Network — IP addresses, routers, packets |
| Layer 4 name + example | Transport — ports, TCP/UDP, segments |
| Layer 5 | Session — starts/keeps/ends connections |
| Layer 6 | Presentation — format/encryption |
| Layer 7 | Application — the app's own protocols (HTTP) |
| PDU at L2 / L3 / L4 | Frame / Packet / Segment |

- Memory hook (L1→L7): **P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way.

---

## Deck 3 — IP addressing & subnet masks (Module 08)

| Q | A |
|---|---|
| /24 mask | 255.255.255.0 |
| /16 mask | 255.255.0.0 |
| /8 mask | 255.0.0.0 |
| Usable hosts on a /24 | 254 |
| Private ranges | 10.0.0.0/8 · 172.16–31.0.0 · 192.168.0.0/16 |
| APIPA range (and meaning) | 169.254.x.x — no DHCP answered |
| Loopback address | 127.0.0.1 |
| IPv4 / IPv6 bit-length | 32 / 128 |
| Default gateway | the router address a host uses to leave its network |
| DHCP does what? | hands out IP, mask, gateway, DNS automatically |
| DNS does what? | turns names into IP addresses |
| ARP does what? | finds the MAC that goes with an IP |

---

## Deck 4 — Devices, media & VLANs (Modules 06, 07, 11)

| Q | A |
|---|---|
| Hub works at layer | 1 (floods all ports; one collision domain) |
| Switch works at layer | 2 (forwards by MAC) |
| Router works at layer | 3 (routes by IP) |
| PC-to-switch cable | straight-through |
| Long / noisy run media | fiber |
| VLAN gives you | separate broadcast domains / segmentation |
| Trunk port carries | many VLANs (tagged) between switches |
| Inter-VLAN traffic needs | a router or Layer 3 switch |
| PoE provides | power + data over one Ethernet cable |
| STP prevents | switching loops |

---

## Deck 5 — Operations (Module 12)

| Q | A |
|---|---|
| 3-2-1 backup rule | 3 copies, 2 media types, 1 off-site |
| SNMP is for | monitoring/managing devices |
| Syslog severity 0 | most urgent (emergency) |
| Baseline is | a saved "normal" to compare against |
| NTP syncs | device clocks/time |
| Onboarding vs offboarding | grant access / remove access |
| Five nines | 99.999% uptime (high availability) |
| RAID protects against | a single disk failure |

---

## Deck 6 — Security (Module 13)

| Q | A |
|---|---|
| CIA triad | Confidentiality, Integrity, Availability |
| AAA | Authentication, Authorization, Accounting |
| Phishing | fake message to trick out secrets |
| On-path attack | attacker relays/alters traffic between two hosts |
| DDoS | flood a service so it can't respond |
| Firewall default-deny | block unless explicitly allowed |
| VPN | encrypted tunnel over a public network |
| Least privilege | give only the access needed |
| Hardening examples | change default passwords, disable unused ports |
| Screened subnet (DMZ) | isolates public-facing servers |
| Protect data in transit | encrypt it (HTTPS/TLS, VPN) |

---

## Deck 7 — Troubleshooting method & tools (Module 14)

| Q | A |
|---|---|
| 7-step method, in order | identify → theory → test → plan → implement → verify → document |
| First step / last step | identify the problem / document findings |
| ping tests | reachability + round-trip time (ICMP) |
| tracert shows | the hops along a path |
| ipconfig shows | Windows IP settings |
| nslookup tests | DNS name resolution |
| arp -a shows | the IP-to-MAC table |
| netstat shows | active connections + listening ports |
| pathping combines | ping + tracert (path + loss per hop) |
| cable tester / loopback plug | checks cable wiring / tests one port |
| 169.254 + no internet | APIPA — no DHCP |
| IP works, name fails | DNS problem (nslookup, flushdns) |
| whole office slow | bandwidth saturation or duplex mismatch |
| Wi-Fi drops far away | low RSSI (distance/attenuation), channel overlap |
| troubleshoot order | bottom-up: link light → IP → ping → name |

---

> ⚠️ Any command output is a varying example. **[TO VERIFY ON HARDWARE]** Every answer here comes from a taught module; verify port/spec details against your own gear where relevant.

---
_NetworkAcademy+ · Core Flashcards · CompTIA Network+ N10-009 · Module 15 · Unit 12_
