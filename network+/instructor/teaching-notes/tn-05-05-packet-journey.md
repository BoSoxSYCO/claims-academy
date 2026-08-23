# Teaching Notes — NA-M05-L05 "Following One Packet Through All the Layers"

> 🔒 Instructor materials. Pairs with the lesson and `wb-05-05-answers.md`.

## Objective in one line
Learners trace a request end-to-end and explain IP (end-to-end) vs. MAC (hop-to-hop), naming what a switch and a router each read.

## Where this sits
Fifth and final lesson of Module 05 — the capstone that ties layers (05-02), TCP/IP (05-03), and encapsulation (05-04) into one worked story. Uses `tracert` (and latency from 04-06). Feeds Module 06 (physical media). Time: ~30 min + ~45 min worksheets/lab.

## The anchor
**A parcel across the country.** The final delivery address (IP) stays on the box the whole way; each depot adds a new "next truck" label (MAC). Destination never changes; local label changes every stop.

## Common misconceptions (and the fix)
- "MAC stays the same end-to-end." → Fix: MAC changes every hop; only IP is end-to-end.
- "A switch reads IP." → Fix: switch reads MAC (L2); router reads IP (L3).
- "Each router makes a new IP packet." → Fix: the IP packet rides the whole way; only the frame (MAC) is rebuilt.
- "One request = one way." → Fix: request plus reply is one round trip.

## Pacing tips
- The `tracert` lab (5.5.E) is the highlight — everyone sees real hops on their own laptop.
- Draw the two label tracks (IP constant, MAC changing) beneath the path; it's the whole lesson in one picture.

## How CompTIA tests it
IP end-to-end vs. MAC hop-to-hop; which device reads which address; interpreting a traceroute.

## Support ideas
- Re-use the parcel-relabeling picture at every hop; physically relabel a box.

## Extension ideas
- Read a real `tracert` and discuss why hop times vary (distance, congestion); mention `*` timeouts.

## Materials checklist
- Lesson · `dgm-05-05-packet-journey-01.svg` · worksheets `wb-05-05-*` (incl. `tracert` lab) · `quiz-05-05-knowledge-check.md`
- Answer key `wb-05-05-answers.md` · glossary updated (hop, source/destination address, round trip, end-to-end, hop-to-hop) · cheat sheet updated
- Photos to capture: a router + switch; a `tracert` result; a parcel being relabeled at a depot.

---
_NetworkAcademy+ · Teaching Notes 05-05 · CompTIA Network+ N10-009_
