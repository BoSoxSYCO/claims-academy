# Exam-Depth Supplement — Objective 3.5: Network access and management methods

> **What this is:** a short, exam-depth add-on that goes past the beginner lessons. Read it when you are getting ready for the exam.
> **Objective:** N10-009 **3.5** — Compare and contrast network access and management methods. **Builds on:** Module 07, Lesson 06 (console vs. web); Module 13, Lesson 06 (VPNs).

## Why this matters

Admins have to reach and manage gear safely — sometimes from the next rack, sometimes from home, sometimes when the network itself is broken. The exam asks you to compare the ways in and pick the safe one. Lesson 07-06 opened this door; here is the full set.

## Key words

- **In-band management** — Managing a device *over the normal network* it also serves.
- **Out-of-band management** — Managing a device over a *separate* path that still works when the main network is down.
- **Jump box (bastion host)** — One hardened, guarded computer you must go through to reach sensitive systems.

## In-band vs. out-of-band

| | In-band | Out-of-band |
|---|---------|-------------|
| Path | The production network | A separate channel (dedicated mgmt port, console, cellular modem) |
| Works during an outage? | No — if the network is down, so is your access | Yes — that's the point |
| Cost/complexity | Lower | Higher |

> ⚠️ **Watch out:** If a change might cut the network (like a bad firewall rule), out-of-band access is what saves you from a site visit.

## The access methods, compared

| Method | Encrypted? | Use it for |
|--------|-----------|-----------|
| **Console (serial)** | N/A (physical cable) | First setup; recovery when nothing else works |
| **SSH** | **Yes** | Secure command-line management — the default choice |
| **Telnet** | **No** | Legacy only; sends passwords in the clear — avoid |
| **HTTPS (web GUI)** | Yes | Point-and-click management |
| **HTTP** | No | Avoid — unencrypted GUI |
| **RDP (Remote Desktop)** | Yes | Remote graphical desktop (mostly Windows) |
| **API** | Yes (over HTTPS) | Automation — tools/scripts manage the device |

## Remote access to the whole network

- **VPN (client-to-site / remote-access)** — One user's device tunnels into the office network from home.
- **VPN (site-to-site)** — Two whole networks (offices) join over an encrypted tunnel.
- **Clientless VPN** — Reach certain apps through a browser, no VPN app installed.
- **Jump box / bastion host** — Admins connect to this one guarded host first, then reach the protected devices from it. Shrinks the number of doors into sensitive systems.

## The safe-choice pattern

- Prefer the **encrypted** option every time: **SSH over Telnet**, **HTTPS over HTTP**.
- Keep an **out-of-band** path for emergencies.
- Funnel admin access through a **jump box**, and protect every method with strong auth (MFA).

> 🎯 **Exam tip:** Two easy points: pick **SSH** (not Telnet) and **HTTPS** (not HTTP). "Manage the switch when the network is down" = **out-of-band** (console or dedicated mgmt port). "One guarded host you route admin access through" = **jump box / bastion host**.

## Quick check

1. Why is **SSH** preferred over **Telnet**?
2. A firewall change could drop the whole network. What management path lets you fix it without driving to the site?
3. What is a **jump box**, and what problem does it reduce?

### Quick-check answers

1. **SSH encrypts** the session; **Telnet** sends everything, including passwords, in the clear.
2. **Out-of-band management** — a separate path (console or a dedicated management port/modem) that still works when the main network is down.
3. A single hardened host you connect through to reach sensitive systems; it **reduces the number of exposed entry points** (attack surface) into those systems.

---
_NetworkAcademy+ · Exam-Depth Supplement · Objective 3.5 (Access & management) · CompTIA Network+ N10-009_
