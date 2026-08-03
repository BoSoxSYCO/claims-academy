# Teaching Notes — NA-M04-L04 "Network Topologies (Star, Bus, Ring, Mesh)"

> 🔒 Instructor materials. Pairs with the lesson and `wb-04-04-answers.md`.

## Objective in one line
Learners match each topology (star, bus, ring, mesh) to its picture and one strength/weakness, and name their home network as a star.

## Where this sits
Fourth lesson of Module 04. Builds on nodes/links (04-02) and sizes (04-03): topologies arrange the nodes inside a LAN. Feeds client-server vs. peer-to-peer (04-05). Time: ~25 min + ~40 min worksheets/lab.

## The anchor
The **seating-arrangement** analogy: the shape decides who can talk to whom. Pattern test for any diagram: one center? one line? a loop? many cross-links?

## Common misconceptions (and the fix)
- "Star and mesh look the same." → Fix: star has ONE center; mesh has many cross-links.
- "A star dies if any cable breaks." → Fix: one cable break drops only that node; only a center failure downs all.
- "A bus is safe." → Fix: one break in the shared backbone stops the whole bus.
- "Modern homes are meshes." → Fix: most homes/offices are stars (Wi-Fi mesh kits are a special case).

## Pacing tips
- The sketch-all-four lab (4.4.E) is the payoff — have everyone draw and label the four shapes.
- Physically model each shape with chairs/students if in a room.

## How CompTIA tests it
Picture-to-name matching and trade-off reasoning (which shape for which need). Single-point-of-failure language is common.

## Support ideas
- Start every diagram question with the four-way pattern test.

## Extension ideas
- Introduce physical vs. logical topology, and hybrid star-bus, for fast learners.

## Materials checklist
- Lesson · `dgm-04-04-topologies-01.svg` · worksheets `wb-04-04-*` (incl. hands-on observation) · `quiz-04-04-knowledge-check.md`
- Answer key `wb-04-04-answers.md` · glossary updated (topology, star/bus/ring/mesh topology, backbone) · cheat sheet updated
- Photos to capture: router with cables fanning out (star); Wi-Fi mesh units (mesh); switch port bank (star center).

---
_NetworkAcademy+ · Teaching Notes 04-04 · CompTIA Network+ N10-009_
