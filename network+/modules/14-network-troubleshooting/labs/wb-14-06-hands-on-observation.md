# Worksheet — Hands-On Observation

> **Lesson:** NA-M14-L06 — Troubleshooting Names, Speed, and Wireless · **Module:** 14 · **Unit:** 11
> **Name:** ______________________  **Date:** __________  **Objective:** 5.2 / 5.3 / 5.4

**Goal:** test DNS, flush the DNS cache, and watch your Wi-Fi signal change.
**You need:** your Windows laptop on Wi-Fi, online. **Time:** ~20 min.
**Safety:** these commands only test and clear a cache — they change no settings.

> ⚠️ Exact IPs, signal %, and messages **vary** by device/network. **[TO VERIFY ON HARDWARE]**

Open the command line: **Start** → type **cmd** → **Enter**.

## Part A — Name (DNS)

| Command | Result |
|---------|--------|
| `ping 8.8.8.8` | replied? ____ |
| `ping www.google.com` | replied? ____ |
| `nslookup www.example.com` | IP returned: ____________ |
| `ipconfig /flushdns` | message: ____________ |

- If the IP replies but the name fails, what kind of problem is it? ____________

## Part B — Wireless (signal)

1. Run `netsh wlan show interfaces`. Find the **Signal** line.

- Signal here (near the router): ____________ %

2. Walk to a far room and run it again.

- Signal in the far room: ____________ %

- What happened to the number, and why? ____________________

## Verify

- What does "ping IP works, ping name fails" mean? ____________
- What is the signal weakening over distance called? ____________

> 🔧 **Home-lab continuity:** note your normal signal %. You'll use it in Lesson 14-07.

---
_NetworkAcademy+ · Worksheet · CompTIA Network+ N10-009 · NA-M14-L06 · Module 14_
