# Teaching Notes — NA-M13-L02 "Common Attacks"

> 🔒 Instructor material. **Module:** 13 · **Unit:** 10 · **Objective:** N10-009 4.2 · **Time:** ~30 min

---

## Learning objective (one line)

Learners name the common attacks — social engineering, phishing, malware, ransomware, spoofing, on-path, DoS/DDoS — and match each to the CIA goal it breaks.

## Why this lesson matters

This is the "what are we defending against?" lesson. It sits between the CIA triad (13-01) and the defenses (13-04 onward). Learners must be able to recognize an attack by name and say which security goal it threatens — a very common exam task.

## Common misconceptions (and fixes)

- **"Threat = vulnerability."** Anchor with the burglar/window pair: threat = the burglar (danger); vulnerability = the unlocked window (weak spot). An attack needs both.
- **"All attacks are technical hacking."** The biggest category targets people — phishing and social engineering. Stress that people are the top target.
- **"A DoS steals data."** No — a DoS/DDoS breaks **availability** (knocks the service offline). It does not read or change data.
- **"On-path is only eavesdropping."** It can also **change** traffic (integrity), not just read it (confidentiality).

## Pacing guidance

- ~30 minutes. Lead with the three-word split (threat / vulnerability / attack), then the locked-house analogy (§4).
- Group the attacks the way the lesson does — trick people / bad software / hit the network — so learners aren't memorizing a flat list of ten.
- The phishing lab (§9) is the payoff and the most transferable real-world skill. Keep it link-safe (look, never click).
- Where learners stall: threat vs. vulnerability, and matching each attack to its CIA goal.

## How CompTIA tends to test it

- Recognition: "What is phishing / spoofing / a DoS?"
- Mapping an attack to its CIA impact (DoS → availability, on-path/phishing → confidentiality, tampering → integrity).
- Short scenarios describing an event → name the attack.
- The current exam uses **on-path** for the older "man-in-the-middle" term; teach both names.

## Accuracy note (Prime Directive #7)

Concept lesson. **No commands are run**, so no device output is claimed. The lab is observation only — no links clicked, no attachments opened.

## Extension ideas (fast learners)

- Malware subtypes: virus vs. worm vs. trojan vs. spyware.
- Password attacks: brute force, dictionary, credential stuffing.
- Why DDoS is harder to block than DoS (many sources, spoofed addresses).

## Support ideas (struggling learners)

- Give three flashcards only: threat / vulnerability / attack, with the burglar example on the back.
- Have them sort just three attacks (phishing, DoS, ransomware) into CIA before adding the rest.
- Use everyday framing: a scam call (social engineering), a fake text (phishing), a website that won't load (DoS).

## Where this leads

Next is 13-03 (AAA — authentication, authorization, accounting), the first of the defense lessons. Every attack here gets a matching defense across 13-03…13-07.

---
_NetworkAcademy+ · Teaching Notes · CompTIA Network+ N10-009 · NA-M13-L02 · Module 13_
