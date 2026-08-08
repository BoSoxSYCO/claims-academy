# Answer Key — Practice Exam #1 (CompTIA Network+ N10-009)

> 🔒 **Instructor / self-check only.** Keep separate from student copies.
> **Companion lesson:** NA-M15-L04 · **Module:** 15 · **Unit:** 12 · **90 questions**
>
> Each entry gives the correct answer, a short "why," and the mapped domain/module. After scoring, log every miss by **domain** on the weak-domain tracker (`wb-15-04-hands-on-observation.md`) for the 15-06 weak-spot review.

---

## Domain 1 — Networking Concepts

1. **A — Physical (Layer 1).** Layer 1 moves raw bits as signals. *(1.1 · M05)*
2. **B — Layer 2.** A switch forwards frames by MAC address. *(1.1 · M05)*
3. **C — Router.** Routers connect and route between networks. *(1.1 · M07)*
4. **B — Turns names into IP addresses.** That is DNS. *(1.6 · M08)*
5. **B — Automatically hands out IP settings.** That is DHCP. *(1.6 · M08)*
6. **C — 443.** HTTPS uses TCP 443. *(1.5 · M10)*
7. **A — 53.** DNS uses port 53. *(1.5 · M10)*
8. **A — 22.** SSH uses port 22. *(1.5 · M10)*
9. **B — connection-oriented and reliable.** TCP acknowledges and retransmits. *(1.1 · M05)*
10. **B — speed with low overhead.** UDP trades reliability for speed. *(1.1 · M05)*
11. **A — 254.** A /24 has 256 addresses minus network and broadcast. *(1.4 · M08)*
12. **B — 172.16.5.4.** 172.16–172.31 is private. *(1.4 · M08)*
13. **B — APIPA — no DHCP answered.** 169.254 is self-assigned. *(1.4 · M08)*
14. **C — 255.255.255.0.** /24 = three network octets. *(1.4 · M08)*
15. **C — Fiber.** Immune to EMI; long distances. *(1.3 · M06)*
16. **B — straight-through.** Different device types use straight-through. *(1.3 · M06)*
17. **C — Star.** All devices to a central switch. *(1.2 · M04)*
18. **B — a hardware address burned into the device.** MAC does not change. *(1.1 · M08)*
19. **B — Layer 3.** IP addressing is Network layer. *(1.1 · M05)*
20. **C — Port number.** Ports are Layer 4. *(1.1 · M05)*
21. **A — Find the MAC that goes with an IP.** That is ARP. *(1.4 · M08)*
22. **B — You scale resources up or down as needed.** Elastic/on-demand. *(1.7 · M04)*
23. **True.** A hub is one shared collision domain — all ports share the same medium and can collide.
24. **B — SFTP.** Secure file transfer over SSH (22). *(1.5 · M10)*
25. **C — 128.** IPv6 is 128 bits. *(1.4 · M08)*

## Domain 2 — Network Implementation

26. **B — separate broadcast domains on one switch.** That is a VLAN. *(2.1 · M11)*
27. **B — carries many VLANs between switches.** A trunk is tagged. *(2.1 · M11)*
28. **B — untagged.** The native VLAN is untagged on a trunk. *(2.1 · M11)*
29. **B — routing (a router or Layer 3 switch).** Inter-VLAN routing. *(2.1 · M11)*
30. **A — 2.4 GHz.** Lower band reaches farther, slower. *(2.3 · M06)*
31. **B — non-overlapping channels.** Avoids interference. *(2.3 · M14)*
32. **A — RSSI.** Received signal strength. *(2.3 · M14)*
33. **B — a static IP (or DHCP reservation).** Keeps the same address. *(2.1 · M08)*
34. **B — send power and data over one Ethernet cable.** That is PoE. *(2.2 · M07)*
35. **Matching:** Hub → B (L1) · Switch → C (L2) · Router → A (L3). *(2.1 · M05/M07)*
36. **B — `ipconfig`.** Shows Windows IP settings. *(2.1 · M14)*
37. **B — the router address a device uses to leave its network.** *(2.1 · M08)*
38. **B — combine links for more bandwidth/redundancy.** Link aggregation. *(2.2 · M07)*
39. **A — 10.55.4.9.** 10.0.0.0/8 covers all 10.x.x.x. *(2.1 · M08)*
40. **A — SSID.** The broadcast network name. *(2.3 · M06)*
41. **Scenario:** e.g. IP `192.168.10.10` (any unused .1–.254), mask `255.255.255.0`, gateway `192.168.10.1`. Accept any unused in-range host with the correct mask and in-range gateway. *(2.1 · M08)*
42. **B — Only change the ports you were assigned.** Safe on a shared switch. *(2.1 · M11)*
43. **B — prevent switching loops.** STP blocks loops. *(2.2 · M07)*
44. **C — the first three octets.** /24 mask. *(2.1 · M08)*
45. **C — WPA2/WPA3.** WEP and Open are insecure. *(2.3 · M13)*

## Domain 3 — Network Operations

46. **B — real devices, ports, and cables.** Physical diagram. *(3.1 · M12)*
47. **A — 3 copies, 2 media types, 1 off-site.** The 3-2-1 rule. *(3.3 · M12)*
48. **B — a local disaster destroying both copies.** Off-site value. *(3.3 · M12)*
49. **B — monitor and manage network devices.** SNMP. *(3.1 · M12)*
50. **B — more urgent.** Lower Syslog number = higher urgency. *(3.1 · M12)*
51. **False.** Even small networks need documentation — it saves time on the next change or outage and survives staff turnover.
52. **B — setting up accounts, access, and training.** Onboarding. *(3.2 · M12)*
53. **A — shows normal so you can spot abnormal.** A baseline. *(3.1 · M12)*
54. **B — "nines" of uptime.** HA measured in nines. *(3.3 · M12)*
55. **A — RAID redundancy.** Survives a disk failure. *(3.3 · M12)*
56. **A — make changes safely and on record.** Change management. *(3.2 · M12)*
57. **B — clocks/time.** NTP syncs time. *(3.1 · M12)*

## Domain 4 — Network Security

58. **B — Confidentiality.** The C in CIA. *(4.1 · M13)*
59. **B — tricks a person into giving up secrets.** Phishing. *(4.2 · M13)*
60. **A — sits between two parties to read/change traffic.** On-path. *(4.2 · M13)*
61. **B — Authentication, Authorization, Accounting.** AAA. *(4.1 · M13)*
62. **B — block what is not explicitly allowed.** Default-deny. *(4.3 · M13)*
63. **A — a private, encrypted tunnel over a public network.** VPN. *(4.5 · M13)*
64. **A — hardening.** Reducing the attack surface. *(4.4 · M13)*
65. **True.** MFA requires two or more different factors (something you know/have/are), so one stolen factor is not enough.
66. **B — overwhelm a service so it can't respond.** DDoS. *(4.2 · M13)*
67. **B — only the access they need.** Least privilege. *(4.1 · M13)*
68. **B — Encrypt it (e.g., HTTPS/VPN).** Protects data in transit. *(4.5 · M13)*
69. **A — isolate public-facing servers from the internal network.** Screened subnet. *(4.3 · M13)*
70. **A — defaults are public and easy to guess.** Change them. *(4.4 · M13)*
71. **Matching:** Encryption → B (Confidentiality) · Backups → A (Availability) · Hashing/checksums → C (Integrity). *(4.1 · M13)*
72. **B — two whole networks/offices.** Site-to-site VPN. *(4.5 · M13)*

## Domain 5 — Network Troubleshooting

73. **B — Identify the problem.** Step 1. *(5.1 · M14)*
74. **C — Document findings.** The last step. *(5.1 · M14)*
75. **B — basic reachability and round-trip time.** ping. *(5.2 · M14)*
76. **A — the hops along a path.** tracert. *(5.2 · M14)*
77. **A — test DNS name resolution.** nslookup. *(5.2 · M14)*
78. **B — no DHCP (APIPA).** 169.254 clue. *(5.3 · M14)*
79. **A — DNS.** IPs work, names fail. *(5.3 · M14)*
80. **B — bandwidth saturation or a duplex mismatch.** Shared cause. *(5.3 · M14)*
81. **B — bottom-up: link light, then IP, then ping, then name.** *(5.3 · M14)*
82. **A — check a cable's wiring and continuity.** Cable tester. *(5.2 · M14)*
83. **A — ping and tracert (path + loss per hop).** pathping. *(5.2 · M14)*
84. **False.** Always verify — otherwise you don't know the fix worked and the problem may remain.
85. **B — slowness and errors.** Duplex mismatch (not a full outage). *(5.3 · M14)*
86. **A — a stale DNS entry is causing a name to fail.** flushdns. *(5.3 · M14)*
87. **Scenario:** Likely a **DNS** problem (connection works, names fail); next tool **nslookup** (then check the DNS server / `ipconfig /flushdns`). *(5.3 · M14)*
88. **B — actually test that theory.** Match tool to theory. *(5.1 · M14)*
89. **A — the wireless signal and connection details.** netsh wlan. *(5.3 · M14)*
90. **Scenario:** **Verify** full functionality (confirm the page loads / gateway and internet reachable), then **document** the problem, action, and outcome. *(5.1 · M14)*

---

## Scoring & readiness

- **Total correct: ____ / 90.** Percentage = correct ÷ 90.
- **80%+ (72/90):** strong — keep practicing timing.
- **70–79%:** close — drill your two weakest domains.
- **Below 70%:** review those modules before Practice Exam #2 (15-05).

Log every missed question by domain on the weak-domain tracker. Bring that list to **Lesson 15-06** (weak-spot review).

---
_NetworkAcademy+ · Answer Key · CompTIA Network+ N10-009 · Practice Exam #1 · Module 15_
