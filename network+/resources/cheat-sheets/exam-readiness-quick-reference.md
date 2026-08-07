# Cheat Sheet — Capstone & Exam Readiness

> A printable quick reference for **Module 15**. Grows as the module's lessons are published.

---

## Capstone build order (Lesson 15-01)

Build from the bottom. Test from the bottom. Prove each layer before you trust the next.

| Stage | Do this | Prove it worked |
|-------|---------|-----------------|
| 1. Gather | router · switch · laptop · 2 cables | all parts on the desk |
| 2. Plan | draw internet → router → switch → laptop | a simple map |
| 3. Wire | router→switch (uplink), switch→laptop (patch) | cables seated |
| 4. Power | router, then switch, then laptop | **link lights** on |
| 5. Address | `ipconfig` | real IP + gateway (not 169.254) |
| 6. Test | `ping` gateway → `ping 8.8.8.8` → `nslookup` | replies + a name resolves |
| 7. Switch | confirm link/activity lights | steady link, blinking traffic |
| 8. Fix | seven-step method | lowest broken layer first |
| 9. Document | write ports, IP, results | someone could rebuild it |

### The test order (memorize)

**link light (L1) → IP from DHCP (L3) → ping gateway → ping 8.8.8.8 → resolve a name (DNS)**

- `169.254.x.x` = **APIPA** = no DHCP answered. Reseat the cable; check the router; `ipconfig /renew`.
- Real IP but names fail = **DNS**. Try `nslookup`, then `ipconfig /flushdns`.
- On a **shared** switch: only add your cable; never change its settings.

> **Remember:** plumb the pipes, open the main valve, check each faucet in order, then mark the map.

---
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 15_
