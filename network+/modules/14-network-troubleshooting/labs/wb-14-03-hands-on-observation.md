# Worksheet — Hands-On Observation

> **Lesson:** NA-M14-L03 — More Tools: arp, netstat, pathping · **Module:** 14 · **Unit:** 11
> **Name:** ______________________  **Date:** __________  **Objective:** 5.5

**Goal:** run all three tools on your Windows laptop and record what you see.
**You need:** your Windows laptop, online. **Time:** ~20 min.
**Safety:** these commands only read and report — they change no settings.

> ⚠️ Every value you record is **yours** — it varies by computer and network. **[TO VERIFY ON HARDWARE]**

Open the command line: **Start** → type **cmd** → **Enter**.

## Step 1 — arp -a

Run `arp -a`. Record one pair:

- An IP address: ____________________
- Its MAC address: ____________________
- Your gateway's IP and MAC: ____________________

## Step 2 — netstat -an

Run `netstat -an`. Record:

- One line with state **LISTENING** (local address/port): ____________________
- One line with state **ESTABLISHED** (remote address/port): ____________________

## Step 3 — pathping

Run `pathping 8.8.8.8`. Let it finish (a few minutes).

- How many hops did it list? ____________
- Did any hop show packet loss above 0%? Which? ____________________

## Verify

- In `arp -a`, which entry is your router (default gateway)? ____________
- If a hop showed loss, what might that hint at? ____________________

> 🔧 **Home-lab continuity:** keep your gateway's MAC. You'll use these tools again in 14-05 and 14-07.

---
_NetworkAcademy+ · Worksheet · CompTIA Network+ N10-009 · NA-M14-L03 · Module 14_
