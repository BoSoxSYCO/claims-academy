# Worksheet — Hands-On Observation

> **Lesson:** NA-M14-L05 — Troubleshooting Connectivity (Layers 1–3) · **Module:** 14 · **Unit:** 11
> **Name:** ______________________  **Date:** __________  **Objective:** 5.2 / 5.3

**Goal:** walk your own laptop up the ladder, Layer 1 → Layer 3.
**You need:** your Windows laptop, online (wired if possible). **Time:** ~20 min.
**Safety:** look and run read-only commands only. Reseat a cable gently; change no switch settings.

> ⚠️ Exact IPs and replies **vary** by network. A 169.254 address is a real "no DHCP" symptom. **[TO VERIFY ON HARDWARE]**

## Layer 1 — Physical

- Is the cable seated at both ends (or Wi-Fi connected)? ____________
- Is the **link light** on? ____________
- If you have a tester + spare cable, did the cable pass? ____________

## Layer 2 — Data Link (if wired/known)

- Which switch port / VLAN are you on? ____________
- Any sign of slowness or errors? ____________

## Layer 3 — Network

Open **cmd** and run `ipconfig`.

- IPv4 Address: ____________________
- Is it a **169.254** (APIPA) address? (yes = no DHCP) ____________
- Default Gateway: ____________________
- `ping` the gateway — did it reply? ____________

## Verify

- Which layer is a "no link light" problem? ____________
- What does a 169.254 address tell you? ____________________

> 🔧 **Home-lab continuity:** keep these notes for the worked scenarios in Lesson 14-07.

---
_NetworkAcademy+ · Worksheet · CompTIA Network+ N10-009 · NA-M14-L05 · Module 14_
