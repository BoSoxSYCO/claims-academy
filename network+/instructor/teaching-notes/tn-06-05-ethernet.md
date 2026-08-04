# Teaching Notes — NA-M06-L05 "Ethernet Standards and Speeds"

> 🔒 Instructor materials. Pairs with the lesson and `wb-06-05-answers.md`.

## Objective in one line
Learners read a BASE-T name, match 10/100/1000/10G to the Cat cable each needs, and explain auto-negotiation and duplex.

## Where this sits
Fifth lesson of Module 06. Ties cable categories (06-01) to speeds and the speed words from 04-06. Feeds cable testing (06-06) and the home-lab link check. Time: ~27 min + ~40 min worksheets/lab.

## The anchor
**Road signs.** A short code ("SPEED LIMIT 55") packs a rule into a tiny space; a BASE-T name packs speed + medium the same way.

## Common misconceptions (and the fix)
- "Any cable gives gigabit." → Fix: every part (device + port + cable) must support the speed.
- "BASE changes the speed." → Fix: the number is the speed; BASE is just signaling.
- "Ignore the switch." → Fix: the slowest device also limits the link.
- "Half/full duplex are the same." → Fix: full = both ways at once (modern); half = one at a time (old).

## Pacing tips
- The read-your-link-speed lab (6.5.E) is the payoff — everyone finds a real negotiated speed.
- Decode several names on the board (10/100/1000/10G) before the cable-match table.

## How CompTIA tests it
Standard name → speed / cable / distance; auto-negotiation; full vs. half duplex; slowest-part reasoning.

## Support ideas
- Read the name left to right every time: number = speed, T = copper.

## Extension ideas
- Fiber standard names (1000BASE-SX/LX, 10GBASE-SR/LR) and 2.5G/5GBASE-T for fast learners.

## Materials checklist
- Lesson · `dgm-06-05-ethernet-speeds-01.svg` · worksheets `wb-06-05-*` (incl. read-your-link-speed lab) · `quiz-06-05-knowledge-check.md`
- Answer key `wb-06-05-answers.md` · glossary updated (Ethernet, BASE-T, Fast Ethernet, Gigabit Ethernet, auto-negotiation, duplex) · cheat sheet updated
- Photos to capture: switch link/speed LEDs; a Windows link-speed status screen; a Cat6 jacket with speed note.

---
_NetworkAcademy+ · Teaching Notes 06-05 · CompTIA Network+ N10-009_
