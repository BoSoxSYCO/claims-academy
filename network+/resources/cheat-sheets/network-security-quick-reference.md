# Cheat Sheet — Network Security

> A printable quick reference for **Module 13**. Grows as the module's lessons are published.

---

## The CIA triad (Lesson 13-01)

Security has **three goals**. Together they are the **CIA triad**.

| Goal | Plain meaning | Kept safe by |
|------|---------------|--------------|
| **Confidentiality** | keep secrets secret | passwords, encryption |
| **Integrity** | keep data true and unchanged | checksums, hashes |
| **Availability** | keep it up and usable | backups, redundancy |

- **Confidentiality** — only the right people can see the data. Broken by snooping/theft.
- **Integrity** — the data is not changed by accident or on purpose. Broken by tampering.
- **Availability** — the service is up when you need it (from Lesson 12-03). Broken by outages/attacks.
- A **checksum** is a short number from data used to spot a change (integrity).
- Every security control protects **one or more** of the three goals.

> **Remember:** **C**onfidentiality = secret · **I**ntegrity = true · **A**vailability = up. Break one and you have a security problem.

---

## Common attacks (Lesson 13-02)

**Attack = threat (danger) + vulnerability (weak spot).**

| Attack | What it does | Breaks |
|--------|--------------|--------|
| **Social engineering** | tricks a person | usually C |
| **Phishing** | fake message steals secrets | C |
| **Malware** | any harmful software | C / I / A |
| **Ransomware** | locks files, demands money | A |
| **Spoofing** | fakes a trusted identity | varies |
| **On-path** (was "man-in-the-middle") | secretly reads / changes traffic | C / I |
| **DoS / DDoS** | floods a service offline | A |

- **Threat** = the danger · **Vulnerability** = the weak spot · **Attack** = the act.
- Most attacks start with a **trick**, not a genius hack. People are the top target.
- **DDoS** = a DoS from many machines at once (harder to stop).
- Phishing red flags: odd sender, urgency, bad link, spelling errors, surprise attachment.

> **Remember:** trick people (phishing, social engineering) · bad software (malware, ransomware) · hit the network (spoofing, on-path, DoS). Each breaks a CIA goal.

---
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 13_
