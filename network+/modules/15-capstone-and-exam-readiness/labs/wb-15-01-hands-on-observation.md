# Worksheet — Hands-On Observation

> **Lesson:** NA-M15-L01 — Capstone Build · **Module:** 15 · **Unit:** 12
> **Name:** ______________________  **Date:** __________  **Objective:** 1.1 / 2.1 / 5.3

Build the lab and record what you see at each stage. Every value you write is your own real result.

## Requirements

- Home router with internet · switch (Dell PowerConnect 3424) · Windows laptop · two known-good Ethernet cables.

⚠️ **Safety:** the switch may be shared. Only add your own cable. Do not change its settings.

## Record your build

**Stage 3 — Wiring**

- Router LAN port used (uplink): ____________
- Switch port for uplink: ____________
- Switch port for laptop: ____________

**Stage 4 — Link lights**

- Uplink port link light on? (yes / no): ______
- Laptop port link light on? (yes / no): ______

**Stage 5 — ipconfig**

Run `ipconfig` and copy these lines:

- IPv4 Address: ____________________
- Default Gateway: ____________________
- Is it a real address (not 169.254)? (yes / no): ______

**Stage 6 — Test by layer**

| Test | Command | Result (reply / fail) |
|------|---------|-----------------------|
| Gateway | `ping <your gateway>` | ____________ |
| Internet | `ping 8.8.8.8` | ____________ |
| Name (DNS) | `nslookup example.com` | ____________ |

> Every address and reply is your own varying result. **[TO VERIFY ON HARDWARE]**

**Stage 8 — Did anything fail?**

- Which stage (if any) failed? ____________
- First theory: ____________
- What fixed it? ____________

**Stage 9 — Final check**

- Website loaded by name? (yes / no): ______
- ✅ You did it if every test passed and you wrote a build record.

## Verify

1. Load a website in a browser. Does it open?
2. Re-read your notes — could someone rebuild the lab from them?

## Reset / roll back

Unplug your two cables. Leave shared switch settings exactly as you found them.

---
_NetworkAcademy+ · Worksheet · CompTIA Network+ N10-009 · NA-M15-L01 · Module 15_
