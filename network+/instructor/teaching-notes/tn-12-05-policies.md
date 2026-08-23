# Teaching Notes — NA-M12-L05 "Common Network Policies and Best Practices"

> 🔒 Instructor material. **Module:** 12 · **Unit:** 9 · **Objective:** N10-009 3.4 · **Time:** ~30 min

---

## Learning objective (one line)

Learners name the common network policies (AUP, password, BYOD, remote-access), the onboarding/offboarding/NDA process, and the three agreements (SLA, MOU, SOW), and can state one line of what each covers.

## Why this lesson matters

This is the final lesson of Module 12 and closes the "run the network" story: after documentation, monitoring, availability, and backups/DR, policies are the **written rules** that keep the whole thing safe and fair. It is also a heavily tested, low-math area — good exam points for a beginner.

## Common misconceptions (and fixes)

- **"Offboarding is optional if the person was nice."** Correct firmly: access is removed based on **status**, not friendship. A former employee with a live account is a security hole. Remove access the day they leave.
- **"MOU and SOW are the same."** Anchor it: **MOU = informal handshake**, **SOW = detailed job list**, **SLA = quality promise**. Drill the three until automatic.
- **"A policy is a technical setting."** No — a policy is a written **rule** people follow. The setting enforces it; the policy states it.
- **"BYOD means no rules for personal devices."** The opposite: a BYOD policy exists precisely to set limits on personal devices.

## Pacing guidance

- ~30 minutes total. The shared-apartment analogy (§4) carries the whole lesson — lead with it.
- Spend the most time on the **three agreements**; that's where learners slip. Use the "handshake / job list / quality promise" mnemonic.
- The drafting lab (§9) makes it concrete. Even 10 minutes of writing real rules cements it.
- Where learners stall: telling SLA from MOU from SOW, and remembering that offboarding is mandatory.

## How CompTIA tends to test it

- Recognition items: "What does an AUP cover?" / "What is offboarding?"
- Distinguishing the three agreements (SLA vs. MOU vs. SOW).
- Short scenarios: an ex-employee still has access → name the failed process (offboarding) and policy (remote-access/account control).
- Objective 3.4 groups these under network policies and standard operating best practices.

## Accuracy note (Prime Directive #7)

This is a paper/policy lesson. **No commands are run**, so no device output is claimed. The hands-on lab is writing only; nothing on the switch or router changes.

## Extension ideas (fast learners)

- NIST password guidance (length over forced complexity/rotation; block breached passwords).
- Least privilege and separation of duties.
- Data classification tiers (public / internal / confidential / restricted) feeding the data-handling policy.

## Support ideas (struggling learners)

- Have them fill only the shared-apartment table (§4) first, then map each row to its network term.
- Give the three agreements as flashcards: front = SLA/MOU/SOW, back = quality / informal / detailed.
- Skip the scenario question until the recall items feel solid.

## Module 12 wrap-up

With 12-05 published, **Module 12 (Network Operations) is complete** (5 of 5). Mark the module ✅ Complete in its README. Next up: **Module 13 — Network Security** (domain 4, unit 10).

---
_NetworkAcademy+ · Teaching Notes · CompTIA Network+ N10-009 · NA-M12-L05 · Module 12_
