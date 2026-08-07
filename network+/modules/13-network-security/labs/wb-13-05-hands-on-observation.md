# Worksheet — Hands-On Observation

> **Lesson:** NA-M13-L05 — Securing Switch Ports and Wireless · **Module:** 13 · **Unit:** 10
> **Name:** ______________________  **Date:** __________  **Objective:** 4.3

**Goal:** check your home Wi-Fi's security type, and plan which switch ports to disable.
**You need:** your Windows laptop on home Wi-Fi, and paper. **Time:** ~15 min.
**Safety:** the Wi-Fi check only reads settings. Do not disable ports on a shared switch without permission.

## Part A — Check your Wi-Fi (Windows)

1. Open Start, type **cmd**, press **Enter**.
2. Type this command and press **Enter**:

```
netsh wlan show interfaces
```

3. Find the **Authentication** line. Write what it says:

- Authentication: ____________________  *(e.g., WPA2-Personal, WPA3-Personal)*

4. Is it safe? Circle one:  **WPA3 / WPA2 (safe)**  —  **WEP / Open (fix it!)**

> The exact output varies by laptop and network — read your own **Authentication** line.

## Part B — Plan your switch ports (paper)

5. How many ports does your switch have? ____________
6. Which ports are actually in use? ____________________
7. Which ports are unused (circle to disable)? ____________________

## Verify

- Say your Wi-Fi's security type aloud. Is it safe? ____________
- Point to one unused port and say why disabling it helps. ____________

> Any switch command to disable a port is **[TO VERIFY ON HARDWARE]** before you run it.

> 🔧 **Home-lab continuity:** keep this result and port plan. They feed the hardening checklist in Lesson 13-07.

---
_NetworkAcademy+ · Worksheet · CompTIA Network+ N10-009 · NA-M13-L05 · Module 13_
