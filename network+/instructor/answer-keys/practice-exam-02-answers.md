# Answer Key — Practice Exam #2 (CompTIA Network+ N10-009)

> 🔒 **Instructor / self-check only.** Keep separate from student copies.
> **Companion lesson:** NA-M15-L05 · **Module:** 15 · **Unit:** 12 · **90 questions**
>
> After scoring, compare each domain against your Practice Exam #1 tally (`wb-15-04-hands-on-observation.md`). Log any domain still weak on the two-exam progress tracker for the 15-06 review.

---

## Domain 1 — Networking Concepts

1. **C — Network (Layer 3).** Routing by IP is Layer 3. *(1.1 · M05)*
2. **B — Layer 2.** Frames carry MAC addresses at the Data Link layer. *(1.1 · M05)*
3. **B — Switch.** Each port is its own collision domain; all share one broadcast domain. *(1.1 · M07)*
4. **B — DNS.** IP works, name fails → name resolution. *(1.6 · M08)*
5. **B — DHCP.** Automatic IP/mask/gateway. *(1.6 · M08)*
6. **B — 80.** HTTP uses TCP 80. *(1.5 · M10)*
7. **A — 3389.** RDP uses 3389. *(1.5 · M10)*
8. **A — 25.** SMTP uses 25. *(1.5 · M10)*
9. **B — TCP.** Reliable, acknowledged delivery. *(1.1 · M05)*
10. **B — low delay over perfect delivery.** UDP for real-time. *(1.1 · M05)*
11. **A — 32.** IPv4 is 32 bits. *(1.4 · M08)*
12. **A — 127.0.0.1.** The loopback address. *(1.4 · M08)*
13. **C — 192.168.5.255.** Broadcast on a /24. *(1.4 · M08)*
14. **B — 255.255.0.0.** /16. *(1.4 · M08)*
15. **C — Fiber optic.** Light; immune to EMI. *(1.3 · M06)*
16. **C — an uplink/trunk between switches.** Switch-to-switch link. *(1.3 · M06)*
17. **C — Mesh.** Many direct links = redundancy. *(1.2 · M04)*
18. **B — a logical address that can change.** IP is logical. *(1.1 · M08)*
19. **D — Layer 4.** Ports are Transport-layer. *(1.1 · M05)*
20. **B — six hex pairs.** e.g. `00:1A:2B:3C:4D:5E`. *(1.1 · M08)*
21. **B — ARP.** IP-to-MAC resolution. *(1.4 · M08)*
22. **B — cloud elasticity.** Scale on demand. *(1.7 · M04)*
23. **False.** A switch learns MACs and forwards a known frame only to the right port (a hub floods all ports).
24. **A — DNS A record.** Maps a hostname to an IPv4 address. *(1.6 · M09)*
25. **B — let private addresses share a public one.** NAT. *(1.4 · M08)*

## Domain 2 — Network Implementation

26. **B — segmentation and security.** VLANs separate traffic. *(2.1 · M11)*
27. **B — which VLAN each frame belongs to.** Tagging on a trunk. *(2.1 · M11)*
28. **B — a router or Layer 3 switch.** Inter-VLAN routing. *(2.1 · M11)*
29. **B — 5 GHz.** Faster, shorter range. *(2.3 · M06)*
30. **A — RSSI.** Received signal strength. *(2.3 · M14)*
31. **B — non-overlapping channels.** Avoids interference. *(2.3 · M14)*
32. **B — a DHCP reservation or static IP.** Keeps the same address. *(2.1 · M08)*
33. **A — PoE.** Power over Ethernet. *(2.2 · M07)*
34. **Matching:** IP → C (L3) · MAC → A (L2) · Port → B (L4). *(2.1 · M05)*
35. **A — `ipconfig /renew`.** Renews the DHCP lease. *(2.1 · M14)*
36. **B — default gateway.** Exit to other networks. *(2.1 · M08)*
37. **B — switching loops.** STP blocks loops. *(2.2 · M07)*
38. **B — link aggregation.** Combine links. *(2.2 · M07)*
39. **A — 192.168.20.50.** In the /24 host range (`.255` is broadcast). *(2.1 · M08)*
40. **A — SSID.** The wireless network name. *(2.3 · M06)*
41. **Scenario:** e.g. IP `10.10.0.10` (any unused .1–.254), mask `255.255.255.0`, gateway `10.10.0.1`. Accept any unused in-range host with the /24 mask and in-range gateway. *(2.1 · M08)*
42. **B — touch only your assigned ports.** Safe on a shared switch. *(2.1 · M11)*
43. **C — WPA3.** Strongest listed. *(2.3 · M13)*
44. **B — last octet.** /24 host part. *(2.1 · M08)*
45. **A — Layer 3 (multilayer) switch.** Routes between VLANs. *(2.1 · M11)*

## Domain 3 — Network Operations

46. **B — IP subnets, VLANs, and flow.** Logical diagram. *(3.1 · M12)*
47. **B — 3-2-1 backup rule.** 3 copies, 2 media, 1 off-site. *(3.3 · M12)*
48. **B — surviving a local disaster.** Off-site value. *(3.3 · M12)*
49. **A — SNMP.** Device monitoring. *(3.1 · M12)*
50. **B — the most urgent (emergency).** Syslog 0 = highest urgency. *(3.1 · M12)*
51. **True.** Synced clocks make log timestamps align across devices, so you can trace an incident in order.
52. **B — offboarding.** Removing access/collecting gear. *(3.2 · M12)*
53. **A — baseline.** Saved normal to compare against. *(3.1 · M12)*
54. **B — availability/uptime.** Five nines. *(3.3 · M12)*
55. **A — RAID redundancy.** Survives a disk failure. *(3.3 · M12)*
56. **A — change management.** Approve and record edits. *(3.2 · M12)*
57. **B — time/clocks.** NTP. *(3.1 · M12)*

## Domain 4 — Network Security

58. **B — Availability.** The A in CIA. *(4.1 · M13)*
59. **A — phishing.** Fake message for secrets. *(4.2 · M13)*
60. **A — an on-path attack.** Relaying/altering between hosts. *(4.2 · M13)*
61. **C — recording what you did.** Accounting. *(4.1 · M13)*
62. **B — default-deny.** Block unless allowed. *(4.3 · M13)*
63. **A — VPN.** Encrypted tunnel to the office. *(4.5 · M13)*
64. **A — attack surface.** Hardening reduces it. *(4.4 · M13)*
65. **False.** Reusing one password means a single breach exposes every account; use unique passwords (and MFA).
66. **A — DDoS attack.** Overwhelm the service. *(4.2 · M13)*
67. **A — least privilege.** Only needed access. *(4.1 · M13)*
68. **B — HTTPS/TLS.** Encrypts data in transit. *(4.5 · M13)*
69. **A — screened subnet (DMZ).** Isolates public servers. *(4.3 · M13)*
70. **A — default password.** Change it first. *(4.4 · M13)*
71. **Matching:** Redundant links/backups → C (Availability) · Encryption → A (Confidentiality) · Checksums/hashing → B (Integrity). *(4.1 · M13)*
72. **B — site-to-site VPN.** Joins two LANs. *(4.5 · M13)*

## Domain 5 — Network Troubleshooting

73. **B — establish a theory of probable cause.** Step 2. *(5.1 · M14)*
74. **B — verify full system functionality.** After implementing. *(5.1 · M14)*
75. **A — ICMP.** ping uses ICMP. *(5.2 · M14)*
76. **B — `tracert`.** Shows hops. *(5.2 · M14)*
77. **A — the IP-to-MAC table.** arp -a. *(5.2 · M14)*
78. **B — no DHCP (APIPA).** 169.254 clue. *(5.3 · M14)*
79. **A — `nslookup`.** Tests DNS. *(5.3 · M14)*
80. **B — bandwidth saturation or duplex mismatch.** Shared cause. *(5.3 · M14)*
81. **B — bottom-up: link light → IP → ping → name.** *(5.3 · M14)*
82. **A — cable tester.** Checks wiring/continuity. *(5.2 · M14)*
83. **A — active connections and listening ports.** netstat. *(5.2 · M14)*
84. **False.** Documentation saves the next person's time and builds a history — it matters even on small networks.
85. **A — a duplex mismatch.** Slow + errors, not a full outage. *(5.3 · M14)*
86. **A — `ipconfig /flushdns`.** Clears a stale entry. *(5.3 · M14)*
87. **Scenario:** Likely **DNS** (connection and IP reachability work, names fail); next tool **nslookup** (then check the DNS server / `ipconfig /flushdns`). *(5.3 · M14)*
88. **B — actually test that specific theory.** Match tool to theory. *(5.1 · M14)*
89. **A — test a single port by sending its own signal back.** Loopback plug. *(5.2 · M14)*
90. **Scenario:** (1) **Identify** — gather info, ask what changed, check the link light at the jack; (2) **Establish a theory** — likely a bad jack/cable (Layer 1); (3) **Test the theory** — move to a known-good jack or test the cable/jack with a cable tester. *(Accept identify → theory → test in order.)* *(5.1 · M14)*

---

## Scoring & comparison

- **Total correct: ____ / 90.** Percentage = correct ÷ 90.
- **Compare to Exam #1** per domain. Improvement means your review is working.
- **Ready signal:** 80%+ on both exams, with no domain badly lagging.
- Any domain still weak → log it for **Lesson 15-06** (weak-spot review).

---
_NetworkAcademy+ · Answer Key · CompTIA Network+ N10-009 · Practice Exam #2 · Module 15_
