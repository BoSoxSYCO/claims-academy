# Teaching Notes — NA-M07-L01 "Hubs, Switches, Routers — What's the Difference?"

> 🔒 Instructor materials. Pairs with the lesson and `wb-07-01-answers.md`.

## Objective in one line
Learners tell hub/switch/router apart and map each to its OSI layer (1/2/3) and the address it reads (none/MAC/IP).

## Where this sits
First lesson of Module 07 (Unit 4). Builds directly on the OSI layers (05-02) and the packet journey (05-05, switch=MAC, router=IP). Opens the device unit that leads to the Dell switch labs. Time: ~27 min + ~40 min worksheets/lab.

## The anchor
**Office delivery:** hub shouts to the whole room (L1), switch walks the note to the right desk (L2, MAC), router mails between buildings (L3, IP).

## Common misconceptions (and the fix)
- "Switch = hub." → Fix: hub repeats to all; switch sends to one (by MAC).
- "A switch reaches the internet." → Fix: a router (L3) connects networks; a switch (L2) is within one.
- "Home box is one device." → Fix: it's a router + switch + Wi-Fi AP in one case.
- "Mixing MAC and IP roles." → Fix: MAC → switch (L2); IP → router (L3).

## Pacing tips
- The find-your-devices lab (7.1.E) is the payoff and previews the Dell switch (07-05).
- Anchor everything on address → device → layer.

## How CompTIA tests it
"Which device works at Layer 2/3?" and "which connects two networks?"; hub-vs-switch behavior (collisions).

## Support ideas
- Re-use shout / clerk / post-office for each device.

## Extension ideas
- Managed vs. unmanaged switches; Layer 3 switches (switch that also routes) for fast learners.

## Materials checklist
- Lesson · `dgm-07-01-hub-switch-router-01.svg` · worksheets `wb-07-01-*` (incl. find-your-devices lab) · `quiz-07-01-knowledge-check.md`
- Answer key `wb-07-01-answers.md` · glossary updated (hub, switch, router, repeater) · new cheat sheet `devices-and-switching-quick-reference.md`
- Photos to capture: a switch port bank; a home router/gateway; the Dell PowerConnect 3424.

---
_NetworkAcademy+ · Teaching Notes 07-01 · CompTIA Network+ N10-009_
