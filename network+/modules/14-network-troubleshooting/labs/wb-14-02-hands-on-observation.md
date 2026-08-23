# Worksheet — Hands-On Observation

> **Lesson:** NA-M14-L02 — Command-Line Tools · **Module:** 14 · **Unit:** 11
> **Name:** ______________________  **Date:** __________  **Objective:** 5.5

**Goal:** run all four tools on your Windows laptop and record what you see.
**You need:** your Windows laptop, online. **Time:** ~20 min.
**Safety:** these commands only read and test — they change no settings.

> ⚠️ Every value you record is **yours** — it varies by computer and network. That's expected. **[TO VERIFY ON HARDWARE]**

Open the command line: **Start** → type **cmd** → **Enter**.

## Step 1 — ipconfig

Run `ipconfig` then `ipconfig /all`. Record:

- IPv4 Address: ____________________
- Default Gateway: ____________________
- DNS Servers: ____________________
- Physical Address (MAC): ____________________

## Step 2 — ping

| Command | Did it reply? | A time you saw (ms) |
|---------|:-------------:|--------------------|
| `ping 127.0.0.1` (loopback) | | |
| `ping 8.8.8.8` | | |
| `ping www.google.com` | | |

## Step 3 — tracert

Run `tracert 8.8.8.8`. How many hops did it list? ____________

## Step 4 — nslookup

Run `nslookup www.example.com`. What IP came back? ____________________

## Verify

- What is your default gateway, and what device is it? ____________________
- If `ping 8.8.8.8` worked but the name failed, what's the likely problem? ____________

> 🔧 **Home-lab continuity:** keep your IP, gateway, and DNS. You'll reuse these tools in 14-05 and 14-07.

---
_NetworkAcademy+ · Worksheet · CompTIA Network+ N10-009 · NA-M14-L02 · Module 14_
