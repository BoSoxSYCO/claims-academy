# Teaching Notes — NA-M13-L03 "AAA: Authentication, Authorization, and Accounting"

> 🔒 Instructor material. **Module:** 13 · **Unit:** 10 · **Objective:** N10-009 4.1 · **Time:** ~30 min

---

## Learning objective (one line)

Learners explain the three parts of AAA, the three authentication factors, MFA, least privilege, RBAC, and what RADIUS/TACACS+ servers do.

## Why this lesson matters

This is the first **defense** lesson. After naming attacks (13-02), AAA is the foundation of access control — the single most tested security framework on the exam. Nearly every later control (firewall rules, port security, VPN logins) leans on authentication and authorization, so a solid AAA model pays off across the rest of the module.

## Common misconceptions (and fixes)

- **"Two passwords = MFA."** The key word is **different factors**. Two passwords are both "something you know." Real MFA mixes factor types (know + have, or have + are).
- **"Authentication = authorization."** Split them with the badge: authentication is badging in (who you are); authorization is which doors open (what you may do).
- **"Accounting means money."** In AAA it means a **log of actions** — who did what, and when. Tie it to Syslog (12-02).
- **"Least privilege slows people down."** Frame it as damage control: if one account is breached, least privilege limits the blast radius.

## Pacing guidance

- ~30 minutes. Lead with the three questions (who / what may / what did), then the keycard-badge analogy (§4).
- Stress the **fixed order**: authenticate → authorize → account. You cannot limit access before you know who someone is.
- The AAA-plan lab (§9) is the payoff. Even a rough one-page plan cements the framework.
- Where learners stall: real MFA vs. same-factor, and least privilege vs. RBAC (RBAC is *how* you often implement least privilege).

## How CompTIA tends to test it

- Matching each A to its question, or to a real example.
- Spotting genuine MFA vs. two of the same factor.
- Least-privilege scenarios (an over-permissioned user).
- RADIUS/TACACS+ as central AAA; TACACS+ is associated with network-device administration and separates the three A's.

## Accuracy note (Prime Directive #7)

Concept lesson. **No commands are run**, so no device output is claimed. Configuring a real RADIUS/TACACS+ server or switch AAA is left for a later hardware lab and would be marked `[TO VERIFY ON HARDWARE]`.

## Extension ideas (fast learners)

- Single sign-on (SSO) and federation.
- RADIUS vs. TACACS+ specifics: UDP vs. TCP, partial vs. full-packet encryption, combined vs. separated AAA.
- Authentication vs. identification vs. authorization as distinct steps.

## Support ideas (struggling learners)

- Give just the three questions on flashcards (who / what may / what did).
- Sort three everyday examples (badge in, badge opens some doors, the door log) before adding MFA/RBAC.
- Skip RADIUS/TACACS+ detail until the three A's are solid — they only need "a central server that does AAA."

## Where this leads

Next is 13-04 (firewalls, ACLs, segmentation) — controls that enforce authorization at the network level.

---
_NetworkAcademy+ · Teaching Notes · CompTIA Network+ N10-009 · NA-M13-L03 · Module 13_
