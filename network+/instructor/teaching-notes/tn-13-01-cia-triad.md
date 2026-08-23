# Teaching Notes — NA-M13-L01 "Security Goals: Confidentiality, Integrity, Availability"

> 🔒 Instructor material. **Module:** 13 · **Unit:** 10 · **Objective:** N10-009 4.1 · **Time:** ~25 min

---

## Learning objective (one line)

Learners name and explain the CIA triad — confidentiality, integrity, availability — and give one real example of each, plus how each goal gets broken.

## Why this lesson matters

This is the first lesson of Module 13 and the foundation for the whole security unit. Every later control (passwords, ACLs, firewalls, VPNs, backups, port security) maps back to one or more CIA goals. Teaching the triad first gives learners a frame to hang everything else on. It is also one of the most-tested concepts on the exam.

## Common misconceptions (and fixes)

- **"Security just means secrecy."** Widen it: integrity (data is true) and availability (data is up) are equal goals. A correct-but-leaked file and a secret-but-down file are both insecure.
- **"Integrity = confidentiality."** Anchor the split: **confidentiality = who can SEE it**; **integrity = whether it was CHANGED**. Drill with quick items ("password → C", "checksum → I").
- **"Availability isn't security."** It is — a denial-of-service attack (13-02) attacks availability directly.
- **"A checksum hides data."** No — a checksum reveals *change*; it does not conceal anything.

## Pacing guidance

- ~25 minutes. Lead with the **bank-account** example (§3) and the **diary** analogy (§4); both make the three goals concrete fast.
- The sorting lab (§9) is the payoff — even five minutes of placing real items into C/I/A cements it.
- Where learners stall: telling integrity from confidentiality, and accepting that availability counts as security. Use the "secret / true / up" three-word cue.

## How CompTIA tends to test it

- Which CIA goal a given tool or attack affects (password → C, checksum/hashing → I, backup/redundancy → A, DoS → A).
- Short scenarios: "an attacker alters a record" → integrity; "a site is knocked offline" → availability; "data is leaked" → confidentiality.
- Objective 4.1 groups the CIA triad under common security concepts.

## Accuracy note (Prime Directive #7)

Concept lesson. **No commands are run**, so no device output is claimed. The lab is writing only; nothing on the switch or router changes.

## Extension ideas (fast learners)

- **Non-repudiation** as a related idea (you cannot deny you did something) — sets up AAA in 13-03.
- The difference between **hashing** (integrity) and **encryption** (confidentiality) — deeper in 13-06.
- How one event can break **two** goals at once (e.g., stolen and altered data → C and I).

## Support ideas (struggling learners)

- Give the three-word cue as a flashcard: C = secret, I = true, A = up.
- Have them do only the diary table (§4) first, then map each row to its goal.
- Use everyday items (a locked phone, a saved photo, a working Wi-Fi) as C/I/A examples before network gear.

## Module 13 kickoff

This lesson opens Module 13 (7 lessons, domain 4, unit 10). The module README board is now populated and a new cheat sheet (`network-security-quick-reference.md`) was created; both grow as 13-02…13-07 publish.

---
_NetworkAcademy+ · Teaching Notes · CompTIA Network+ N10-009 · NA-M13-L01 · Module 13_
