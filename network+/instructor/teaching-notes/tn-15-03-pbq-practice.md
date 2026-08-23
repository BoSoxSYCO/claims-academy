# Teaching Notes — NA-M15-L03 "Performance-Based Question (PBQ) Practice"

> 🔒 Instructor material. **Module:** 15 · **Unit:** 12 · **Objective:** exam-readiness · **Time:** ~40 min

---

## Learning objective (one line)

Learners recognize the three PBQ formats and apply a five-step method to each.

## Why this lesson matters

PBQs feel scary because they *look* different, not because they *are* harder. This lesson removes that fear: every PBQ is taught content (OSI layers, ports, IP/subnet, VLANs, cabling) shown in a hands-on wrapper. A calm five-step method — read, plan, do, guess, check — turns PBQs from surprises into routine. It follows directly from the 15-02 strategy (flag early, bank fast, never blank).

## The three formats

1. **Drag-and-drop / matching** (OSI layers, ports).
2. **Fill-in / configure** (IP, mask, gateway, VLAN settings).
3. **Label / identify** (cable type, topology).

## The five-step method (drill it)

**Read** the whole task → **Plan** on scratch → **Do** the sure parts → **Guess** the rest → **Check** for blanks. Model the "plan" step aloud with scratch notes — that is where learners stall.

## The three worked PBQs (all reuse taught content)

- OSI drag-and-drop: IP→L3, MAC→L2, cable→L1, port→L4 (Module 05).
- IP fill-in for `192.168.1.0/24`: host in range, mask 255.255.255.0, gateway .1 (Module 08).
- Cable label: PC-to-switch straight-through, long run fiber (Module 06).

## Common misconceptions (and fixes)

- **"PBQs are new material."** No — they reuse what you studied.
- **"Leave the hard sub-part blank."** No — guess; partial credit is possible.
- **"Finish one PBQ perfectly first."** No — get a solid answer, then move on and return if time allows.

## Pacing guidance

- ~40 min. Work all three PBQs aloud; pause at "plan" each time.
- Where learners stall: the subnet mask (/24 = 255.255.255.0), and remembering to fill every slot.

## How CompTIA tends to test it

PBQs appear early and take longer than multiple-choice. They pull from all five domains. The skill tested is *doing*, not just recalling.

## Accuracy note (Prime Directive #7)

All IP/port values are varying examples marked `[TO VERIFY ON HARDWARE]`. The crossover/auto-MDIX nuance is marked `[VERIFY WITH CompTIA]` — modern ports often auto-correct, so the "two like devices need crossover" rule is a classic-exam simplification.

## Extension ideas (fast learners)

- Learners write their own PBQ from a past module and swap with a partner.
- Time each PBQ to build speed under pressure.

## Support ideas (struggling learners)

- Give the five-step method as a printed card to follow on each PBQ.
- Work PBQ 1 together before the solo set.
- Anchor two facts: "/24 = 255.255.255.0" and "never leave a sub-part blank."

---
_NetworkAcademy+ · Teaching Notes · CompTIA Network+ N10-009 · NA-M15-L03 · Module 15_
