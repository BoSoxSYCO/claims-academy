# Teaching Notes — NA-M07-L02 "MAC Addresses and How a Switch Learns Them"

> 🔒 Instructor materials. Pairs with the lesson and `wb-07-02-answers.md`.

## Objective in one line
Learners explain switch learning (source MAC → MAC address table) and forwarding (destination MAC → forward for known, flood for unknown/broadcast).

## Where this sits
Second lesson of Module 07. Builds on the switch = L2/MAC device (07-01) and MAC addresses (03-04). Sets up broadcast/collision domains (07-03). Time: ~28 min + ~40 min worksheets/lab.

## The anchor
**A new receptionist** who learns desks by noting the sender on every memo, then delivers by looking up the recipient (or walks it to every desk if unknown).

## Common misconceptions (and the fix)
- "Learns from the destination." → Fix: it learns from the **source** MAC.
- "Flooding = broken." → Fix: unknown/broadcast frames are flooded on purpose.
- "Entries last forever." → Fix: idle entries age out (~5 min).
- "A switch always floods (like a hub)." → Fix: it forwards **known** traffic to one port.

## Pacing tips
- Drill the memory hook: **source to learn, destination to forward.**
- The find-your-MAC + reason-it-out lab (7.2.E) makes the process concrete.

## How CompTIA tests it
Source vs. destination roles; forward vs. flood; broadcast address (FF:FF:FF:FF:FF:FF); aging.

## Support ideas
- Walk the receptionist analogy for each of learn/forward/flood.

## Extension ideas
- MAC flooding (CAM overflow) attacks and port security as a security preview for fast learners.

## Materials checklist
- Lesson · `dgm-07-02-switch-learning-01.svg` · worksheets `wb-07-02-*` (incl. find-your-MAC lab) · `quiz-07-02-knowledge-check.md`
- Answer key `wb-07-02-answers.md` · glossary updated (MAC address table, forward, flood, broadcast, aging time) · cheat sheet updated
- Photos to capture: per-port activity LEDs; a switch CLI MAC table; a `getmac` result.

---
_NetworkAcademy+ · Teaching Notes 07-02 · CompTIA Network+ N10-009_
