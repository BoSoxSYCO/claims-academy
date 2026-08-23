# Answer Key — NA-M13-L05 "Securing Switch Ports and Wireless"

> 🔒 **Instructor / self-check only.** Keep separate from student copies.
> **Module:** 13 · **Unit:** 10 · **Objective:** 4.3

---

## Quiz answers (`quiz-13-05-knowledge-check.md`)

1. **B — MAC address.** Port security allows or blocks devices by their MAC (hardware) address. *(IP, cable color, and VLAN name are not what it checks.)*

2. **B — learns and locks to the first device's MAC.** Sticky MAC captures the first device and blocks others. *(A is a joke answer; C/D are wrong.)*

3. **B — an unused live port is an open door for anyone.** Anyone could plug in and reach the network. *(Saving power is minor; it doesn't speed the switch.)*

4. **C — WPA3 (or WPA2 with AES).** WPA3 is best; WPA2 with AES is fine. *(WEP, Open, and old WPA are all unsafe.)*

5. **B — turned off, because it's easy to attack.** WPS's push-button/PIN join is a known weak point. *(Leaving it on or using it instead of a password is unsafe.)*

6. **False.** Default SSIDs and admin passwords are **published** for each model, so attackers already know them. Change both.

7. **B — your Wi-Fi password (pre-shared key).** The PSK is the shared Wi-Fi password. *(It is not a port, cable, or VLAN.)*

8. **Matching:** **Port security → B** (allows only known devices on a port); **Guest network → A** (keeps visitors off your main devices); **WPA3 → C** (strong Wi-Fi encryption).

9. **Native.** Move the native VLAN off the default VLAN 1.

10. **Scenario —** Any two of: enable **port security** (allow only known MAC addresses) or **sticky MAC**; **disable the unused port** on that wall jack; place unused/guest ports on an isolated VLAN. *(Accept port security + disabling unused ports as the two clearest fixes.)*

---

## Worksheet answers

### Fill in the blank (`wb-13-05-fill-in-the-blank.md`)
1. port security · 2. sticky MAC · 3. unused · 4. native · 5. WPA3 · 6. WEP · 7. PSK · 8. SSID · 9. WPS · 10. guest network

### Matching (`wb-13-05-matching.md`)
**Part 1:** 1 → C · 2 → A · 3 → B · 4 → D
**Part 2:** 5 → F (WPA3 best) · 6 → G (WPA2 okay) · 7 → E (WEP never)

### Label the diagram (`wb-13-05-label-the-diagram.md`)
a. Switch ports · b. Wireless · c. port security · d. unused · e. native · f. WPA3 · g. WEP · h. PSK · i. WPS · j. guest network

### Short answer (`wb-13-05-short-answer.md`) — model answers
1. Port security limits which devices may use a switch port; it checks the device's MAC (hardware) address.
2. Sticky MAC makes the port learn and lock to the first device's MAC, so a different device that plugs in is blocked.
3. An unused but live port is an open door — anyone could plug in and reach the network. Disabling it closes that door.
4. WPA3 (best), WPA2 (okay, use AES), WEP (never — it's broken and easily cracked).
5. A PSK is the shared Wi-Fi password. A good one is long, unique, and hard to guess.
6. WPS's easy-join push-button/PIN feature is simple for an attacker to abuse, so it should be off.
7. A guest network is a separate Wi-Fi for visitors, kept away from your main devices, so guests can't reach your private data.

### Hands-on observation (`wb-13-05-hands-on-observation.md`)
Answers vary by device. Full credit when: Part A records the real **Authentication** value and judges it safe (WPA2/WPA3) or unsafe (WEP/Open); Part B lists the switch's ports, which are in use, and which unused ports to disable.

### Vocabulary review (`wb-13-05-vocabulary-review.md`)
- **Port security** — limiting which devices (by MAC) may use a switch port.
- **MAC filtering** — allowing only known MAC addresses.
- **Sticky MAC** — a port that learns and locks to the first device's MAC.
- **PSK** — the shared Wi-Fi password (pre-shared key).
- **WPS** — an insecure easy-join Wi-Fi feature; turn it off.
- **Guest network** — a separate Wi-Fi for visitors.
- **WPA3** — the newest, strongest Wi-Fi security.
- **WEP** — old, broken Wi-Fi security; never use it.

**Part 3 quick recall:** 1. Port security · 2. WPA3 · 3. WPS · 4. The guest network

---
_NetworkAcademy+ · Answer Key · CompTIA Network+ N10-009 · NA-M13-L05 · Module 13_
