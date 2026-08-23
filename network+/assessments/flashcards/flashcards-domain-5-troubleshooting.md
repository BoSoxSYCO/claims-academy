# Flashcards — Domain 5: Network Troubleshooting

> **Domain 5 of 5 · CompTIA Network+ (N10-009)** · master deck (by domain)
> Every answer comes from a Published lesson (Module 14). Cover the answer, say it from memory, then check.

**How to use:** answer from memory first (active recall); sort "got it" / "review again"; re-drill after growing gaps (spaced repetition).

---

## The 7-step method (Module 14)

| Q | A |
|---|---|
| The 7 steps, in order | identify → theory → test → plan → implement → verify → document |
| First step / last step | Identify the problem / Document findings |
| Rule for the test tool | It must actually test your theory |
| A tool must match the… | Theory (theory of probable cause) |

## CLI & hardware tools (Module 14)

| Q | A |
|---|---|
| ping tests | Reachability + round-trip time (uses ICMP) |
| tracert shows | The hops along a path |
| ipconfig shows | Windows IP settings |
| nslookup tests | DNS name resolution |
| arp -a shows | The IP-to-MAC table |
| netstat shows | Active connections + listening ports |
| pathping combines | ping + tracert (path + loss per hop) |
| cable tester / loopback plug | Checks cable wiring / tests one port |
| netsh wlan show interfaces | Wireless signal + connection details |

## Diagnosing by symptom (Module 14)

| Q | A |
|---|---|
| 169.254 address + no internet | APIPA — no DHCP answered |
| IP works but names fail | DNS problem (nslookup, `ipconfig /flushdns`) |
| Whole office slow at once | Bandwidth saturation or a duplex mismatch |
| Wi-Fi drops far from the AP | Low RSSI (distance/attenuation), channel overlap |
| Slow + errors (not full outage) | Duplex mismatch |
| Troubleshoot order (dead link) | Bottom-up: link light → IP → ping → name |

---

> Any command output referenced is a varying example. **[TO VERIFY ON HARDWARE]** All commands are real; every shown value is an example.

---
_NetworkAcademy+ · Flashcards · CompTIA Network+ N10-009 · Domain 5 (Network Troubleshooting)_
