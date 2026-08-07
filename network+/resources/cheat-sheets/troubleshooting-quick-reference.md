# Cheat Sheet — Network Troubleshooting

> A printable quick reference for **Module 14**. Grows as the module's lessons are published.

---

## The 7-step CompTIA method (Lesson 14-01)

A repeatable method beats random guessing. Follow the steps in order.

| # | Step | In plain words |
|---|------|----------------|
| 1 | **Identify the problem** | Gather info; ask what changed; find the symptoms. |
| 2 | **Establish a theory** | Make a best guess at the probable cause. |
| 3 | **Test the theory** | Check if the guess is right. If not, form a new one. |
| 4 | **Plan of action** | Decide the fix and its steps. |
| 5 | **Implement (or escalate)** | Do the fix — or pass it to someone who can. |
| 6 | **Verify full function** | Confirm it works; add preventive measures. |
| 7 | **Document** | Write down the findings, actions, and outcome. |

- Memory aid: **I**dentify · **T**heory · **T**est · **P**lan · **I**mplement · **V**erify · **D**ocument.
- **Change one thing at a time** — so you know what fixed it.
- If a theory fails, go back to step 2 (new theory) — don't skip ahead.
- **Escalate** when it's beyond your access or time — that's not failure.
- **Document** every time (ties to Lesson 12-01) — it helps the next person.

> **Remember:** find it, guess it, test it, plan it, fix it, check it, write it down.

---

## Command-line tools (Lesson 14-02)

Four built-in Windows commands. Open with **Start → cmd → Enter**.

| Question | Command | Shows |
|----------|---------|-------|
| My settings? | `ipconfig /all` | IP, gateway, DNS, MAC |
| Can I reach it? | `ping 8.8.8.8` | replies + time (RTT) + TTL |
| Where's the path? | `tracert 8.8.8.8` | each hop, in order |
| Name → IP? | `nslookup a-name` | the IP behind a name |

- Test your own stack: `ping 127.0.0.1` (loopback).
- **ping the IP works but the name fails → DNS problem.**
- `ping` a name to check DNS and reachability at once.
- ⚠️ Every IP, time, TTL, and hop **varies** — read your own output.

> **Remember:** ipconfig = my address · ping = reachable? · tracert = the path · nslookup = names.

---

## Deeper CLI tools (Lesson 14-03)

| Clue | Command | Shows |
|------|---------|-------|
| Local IP → MAC? | `arp -a` | the ARP table (IP-to-MAC pairs) |
| My connections/ports? | `netstat -an` | connections + listening ports |
| Where does a path lose? | `pathping 8.8.8.8` | path + packet loss per hop |

- netstat states: **LISTENING** (waiting) · **ESTABLISHED** (connected).
- netstat switches: `-a` all · `-n` numbers/fast · `-an` both.
- **arp is local only** — for the path, use tracert/pathping.
- **pathping is slow on purpose** — it measures loss over time; let it finish.
- ⚠️ Every row/percentage **varies** — read your own output.

> **Remember:** arp = local who's-who · netstat = my connections · pathping = where loss happens.

---

## Hardware tools (Lesson 14-04)

For **physical** faults — when software says "no connection" but settings are fine.

| Physical question | Tool |
|-------------------|------|
| Bad wire? (opens/shorts/miswires) | **cable tester** |
| Meets a speed standard? | **cable certifier** |
| Which cable is this? | **tone generator + toner probe** |
| Is this port/NIC good? | **loopback plug** |
| Where's the fiber break? | **OTDR** |
| Enough light on the fiber? | **light meter** |
| Wi-Fi signal / channels? | **Wi-Fi analyzer** |

- **Loopback plug** (hardware, tests a port) ≠ **loopback address** 127.0.0.1 (software).
- **Tester** = wired right? · **certifier** = good enough for the speed rating?
- ⚠️ Never test a **live** in-use port — use a spare/unused one.

> **Remember:** tester/certifier = cables · toner = find a cable · loopback plug = ports · OTDR/light meter = fiber · analyzer = Wi-Fi.

---

## Connectivity by layer — bottom-up (Lesson 14-05)

For "no connection," climb the OSI layers from the bottom.

| Layer | Check | Tools |
|-------|-------|-------|
| **L1 Physical** (start) | plugged in? link light? cable good? | eyes, cable tester |
| **L2 Data Link** | right VLAN/port? duplex mismatch? errors? | switch, port stats |
| **L3 Network** | real IP (not 169.254)? subnet? gateway? | `ipconfig`, `ping` |

- Go **bottom-up** — most faults are physical (Layer 1). Fix the lowest broken layer first.
- **169.254.x.x = APIPA = no DHCP** answered (a Layer 3 clue).
- **Duplex mismatch** = slow + errors, not a full outage.
- Don't check IP settings while the cable is unplugged.

> **Remember:** plug (L1) → link (L2) → address (L3). Check the plug before the fuse box.

---
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 14_
