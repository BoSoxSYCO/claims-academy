# Answer Key — NA-M13-L07 "A Hardening Checklist for Your Home Lab"

> 🔒 **Instructor / self-check only.** Keep separate from student copies.
> **Module:** 13 · **Unit:** 10 · **Objective:** 4.3

---

## Quiz answers (`quiz-13-07-knowledge-check.md`)

1. **B — making a device harder to attack by removing weak spots.** That is hardening. *(Faster gear, more cables, or turning off the firewall don't harden anything.)*

2. **B — many layers of security so one failure isn't fatal.** Defense in depth stacks protections. *(A single lock, a cable, or backups alone are not defense in depth.)*

3. **B — changing default passwords.** Defaults are published, so this is the first, biggest win. *(The others don't improve security, and turning off backups hurts it.)*

4. **B — keeping firmware and software updated.** Patch management fixes known holes. *(A/C/D are unrelated tasks.)*

5. **B — to shrink the ways in and limit damage.** Fewer open ports and least privilege reduce attack surface and blast radius. *(They don't slow the network on purpose, and they do matter.)*

6. **False.** No single control is perfect. Layers (defense in depth) back each other up, so one failure doesn't expose everything.

7. **B — WPA3, a strong PSK, and WPS off.** That's the wireless-layer checklist. *(WEP, open networks, and no password are all unsafe.)*

8. **Matching:** **MFA → C** (accounts and access); **Port security → A** (the switch); **Firewall → B** (the edge).

9. **Patch.** Keeping firmware updated is **patch** management.

10. **Scenario —** A strong Wi-Fi password is one layer. Add any two more, e.g.: change default admin passwords and turn on MFA (accounts); turn WPS off and add a guest network (wireless/segment); keep the firewall on (edge); or keep firmware updated (patch management). *(Accept any two distinct layers.)*

---

## Worksheet answers

### Fill in the blank (`wb-13-07-fill-in-the-blank.md`)
1. hardening · 2. defense in depth · 3. default · 4. MFA · 5. least privilege · 6. port security · 7. guest network · 8. WPS · 9. firewall · 10. patch management

### Matching (`wb-13-07-matching.md`)
**Part 1:** 1 → D (MFA → accounts) · 2 → A (disable unused ports → switch) · 3 → B (WPA3/WPS → wireless) · 4 → C (firewall/ACL → edge)
**Part 2:** 5 → F (hardening) · 6 → G (defense in depth) · 7 → E (patch management)

### Label the diagram (`wb-13-07-label-the-diagram.md`)
a. Accounts · b. Switch · c. Segment · d. Wireless · e. Edge · f. Data · g. Updates · h. defense in depth

### Short answer (`wb-13-07-short-answer.md`) — model answers
1. Hardening is making a device (or network) harder to attack by removing weak spots.
2. Defense in depth is stacking many layers of security; if one fails, the next still protects you — better than betting everything on one control.
3. Change default passwords, and turn on MFA.
4. Patch management is keeping firmware and software updated; it matters because updates fix known, published security holes.
5. Any two of: enable port security/sticky MAC; disable unused ports; move the native VLAN off VLAN 1.
6. Any two of: use WPA3 (or WPA2); set a strong PSK; turn WPS off.
7. So that if something breaks, you know exactly which change caused it and can roll it back.

### Hands-on observation (`wb-13-07-hands-on-observation.md`)
This is the module capstone checklist — answers are personal. Full credit when every item has a Done / To do / N/A mark and the learner lists three real "to do" fixes. Encourage default passwords and MFA as the first two.

### Vocabulary review (`wb-13-07-vocabulary-review.md`)
- **Hardening** — making a device harder to attack by removing weak spots.
- **Defense in depth** — many layers of security so one failure isn't fatal.
- **Patch management** — keeping software/firmware updated to fix known holes.
- **Default password** — the factory password that must be changed.
- **Least privilege** — giving only the access someone needs.

**Part 3 (name the layer):** 1. Accounts · 2. Switch · 3. Wireless · 4. Edge · 5. Data

---
_NetworkAcademy+ · Answer Key · CompTIA Network+ N10-009 · NA-M13-L07 · Module 13_
