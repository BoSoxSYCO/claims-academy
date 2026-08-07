# Teaching Notes — NA-M13-L05 "Securing Switch Ports and Wireless"

> 🔒 Instructor material. **Module:** 13 · **Unit:** 10 · **Objective:** N10-009 4.3 · **Time:** ~30 min

---

## Learning objective (one line)

Learners harden the access layer: port security/sticky MAC, disabling unused ports, moving the native VLAN off VLAN 1, and securing Wi-Fi (WPA3, strong PSK, changed SSID/admin password, no WPS, guest network).

## Why this lesson matters

This is the most **hands-on, real-gear** security lesson in the module. It maps every idea to the learner's own Dell PowerConnect 3424 switch and home router. Objective 4.3 tests exactly these hardening steps, and they are the changes a beginner can actually make to be safer today.

## Common misconceptions (and fixes)

- **"Unused ports are harmless."** A live, open port is an entry point — anyone can plug in. Disable what's unused.
- **"WPS is just convenient."** Its easy-join feature is a known weak point; convenience for you is convenience for an attacker.
- **"Default SSID/admin passwords are random and safe."** They are **published per model** — attackers already know them. Change both.
- **"MAC filtering is unbreakable."** It raises the bar but MACs can be spoofed; it's one layer, not a wall.

## Pacing guidance

- ~30 minutes. Lead with the house-locks analogy (§4).
- The real Wi-Fi check (`netsh wlan show interfaces` → **Authentication**) is the highlight — it makes the WPA3/WPA2/WEP ranking personal. Have everyone read their own line.
- Keep the switch part as a **paper plan** unless learners own the switch outright; the actual disable-port command is `[TO VERIFY ON HARDWARE]`.
- Where learners stall: remembering WPS should be OFF (it sounds protective), and the native-VLAN caution.

## How CompTIA tends to test it

- Port security / sticky MAC purpose (allow known MACs; lock the first).
- The Wi-Fi ranking: WPA3 > WPA2 (AES) > (never) WEP/Open.
- Why disable WPS; why disable unused ports; why change default SSID/admin.
- Native-VLAN change as a hardening step.

## Accuracy note (Prime Directive #7)

`netsh wlan show interfaces` is a **real** Windows command; its output varies by device, and the lesson marks the shown value as a typical example. **All** Dell PowerConnect 3424 port-security/disable commands are `[TO VERIFY ON HARDWARE]` — no switch output is fabricated. The Wi-Fi lab is read-only; the switch part is a paper plan.

## Extension ideas (fast learners)

- 802.1X port-based authentication (ties to RADIUS from 13-03).
- DHCP snooping and dynamic ARP inspection.
- MAC spoofing — why MAC filtering alone isn't enough.

## Support ideas (struggling learners)

- Give the house-locks table (§4) as the anchor; map each row to its network term.
- Do only Part A of the lab (the Wi-Fi check) first; add the switch plan later.
- Use the three-tier Wi-Fi flashcard: WPA3 = best, WPA2 = ok, WEP = never.

## Where this leads

Next is 13-06 (VPNs and encryption) — protecting traffic in transit, which complements protecting the access layer here.

---
_NetworkAcademy+ · Teaching Notes · CompTIA Network+ N10-009 · NA-M13-L05 · Module 13_
