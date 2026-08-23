# Teaching Notes — NA-M07-L03 "Broadcast vs. Collision Domains"

> 🔒 Instructor materials. Pairs with the lesson and `wb-07-03-answers.md`.

## Objective in one line
Learners define collision and broadcast domains and apply the switch/router rule to count them in a diagram.

## Where this sits
Third lesson of Module 07. Builds on hub/switch/router (07-01) and switch flooding of broadcasts (07-02). Sets up other gear (07-04) and VLANs later (splitting broadcast domains without a router). Time: ~27 min + ~40 min worksheets/lab.

## The anchor
**Rooms and PA announcements.** A collision domain is a room where two voices can clash; a broadcast domain is who hears the building-wide PA. Booths (switch) stop clashes; walls (router) stop announcements.

## Common misconceptions (and the fix)
- "A switch stops broadcasts." → Fix: only a router does; a switch floods them.
- "A hub gives per-port collision domains." → Fix: a hub is one collision domain for all ports.
- "Each switch port isn't its own collision domain." → Fix: it is — that's why switches are fast.
- "Rules reversed." → Fix: switch → collision, router → broadcast.

## Pacing tips
- Drill the mantra until automatic; then do the draw-and-count lab (7.3.E).
- Counting: switch port = collision domain; router side = broadcast domain.

## How CompTIA tests it
Counting collision/broadcast domains in a diagram; the switch/router mantra; naming CSMA/CD.

## Support ideas
- Use rooms/booths/walls physically; walk a "voice" and an "announcement" through each.

## Extension ideas
- VLANs as logical broadcast-domain splitting without a physical router (preview of a later topic).

## Materials checklist
- Lesson · `dgm-07-03-domains-01.svg` · worksheets `wb-07-03-*` (incl. draw-and-count lab) · `quiz-07-03-knowledge-check.md`
- Answer key `wb-07-03-answers.md` · glossary updated (collision, collision domain, broadcast domain, CSMA/CD) · cheat sheet updated
- Photos to capture: switch ports as collision domains; a router with two networks; an old hub.

---
_NetworkAcademy+ · Teaching Notes 07-03 · CompTIA Network+ N10-009_
