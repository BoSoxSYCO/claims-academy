# Teaching Notes — NA-M13-L04 "Firewalls, ACLs, and Network Segmentation"

> 🔒 Instructor material. **Module:** 13 · **Unit:** 10 · **Objective:** N10-009 4.3 · **Time:** ~30 min

---

## Learning objective (one line)

Learners explain firewalls (stateful vs. stateless), read an ACL and its implicit deny, and describe segmentation and a DMZ/screened subnet.

## Why this lesson matters

AAA (13-03) controls who logs in; this lesson controls the **traffic** and the **layout**. Firewalls and ACLs enforce which packets pass; segmentation and a DMZ limit how far a breach can spread. Objective 4.3 (network hardening / secure design) leans heavily on all four ideas.

## Common misconceptions (and fixes)

- **"No deny rule means everything is allowed."** The opposite — every ACL ends in **implicit deny**. Not on the list = blocked.
- **"ACL order doesn't matter."** It does — first match wins, so a broad rule placed early can shadow a specific one below it.
- **"Segmentation just slows things down."** Frame it as blast-radius control: one breach stays contained. It's least privilege (13-03) for the network.
- **"A DMZ is just another subnet."** Its purpose is isolation — public servers reachable from outside, but walled off from private data.

## Pacing guidance

- ~30 minutes. Lead with the office-building analogy (§4): guard (firewall), guest list (ACL), locked wings (segmentation), visitor lobby (DMZ).
- The paper-ACL lab (§9) is where order and implicit deny finally click. Have learners deliberately mis-order a rule and see what breaks.
- Keep stateful vs. stateless light — "remembers connections" vs. "checks each packet."
- Where learners stall: implicit deny (it's invisible), and ACL ordering.

## How CompTIA tends to test it

- ACL reading: first match wins, implicit deny at the end.
- Stateful vs. stateless firewalls.
- Why segment a network (limit blast radius) and how (VLANs).
- DMZ / screened subnet purpose — note the exam's current term is **screened subnet**.

## Accuracy note (Prime Directive #7)

Concept lesson. **No commands are run.** The ACL example is plain-language, not device syntax. Any real ACL command on the Dell PowerConnect 3424 is marked `[TO VERIFY ON HARDWARE]` and left for a hardware lab.

## Extension ideas (fast learners)

- Next-gen firewalls (NGFW), IDS vs. IPS.
- Micro-segmentation and zero trust (segment down to the workload).
- Stateful inspection vs. proxy firewalls.

## Support ideas (struggling learners)

- Give the four analogy rows as flashcards (guard / guest list / locked wings / lobby).
- Have them read a three-line ACL aloud and answer "does this packet pass?" for a few examples.
- Skip stateful/stateless nuance until firewall + ACL + implicit deny are solid.

## Where this leads

Next is 13-05 (securing switch ports and wireless) — hardening the access layer, where segmentation (VLANs) and port controls meet.

---
_NetworkAcademy+ · Teaching Notes · CompTIA Network+ N10-009 · NA-M13-L04 · Module 13_
