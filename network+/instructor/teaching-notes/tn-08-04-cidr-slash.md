# Teaching Notes — NA-M08-L04 "CIDR Notation and Slash Values"

> 🔒 Instructor materials. Pairs with the lesson and `wb-08-04-answers.md`.

## Objective in one line
Learners convert between subnet masks and slash (CIDR) values both ways and explain classless addressing.

## Where this sits
Fourth lesson of Module 08. Builds directly on 08-03 (masks as 1s then 0s) and is the last piece before subnetting math (08-05/06). Feeds **Lab C** (describing the home network as x.x.x.0/24).
Time: ~28 min + ~35 min worksheets/lab.

## The anchor
**Shorthand like "a dozen" = 12:** the slash is a quicker way to say the same mask everyone already agrees on. The mask is still there underneath.

## Common misconceptions (and the fix)
- "The slash counts octets." → Fix: it counts **bits**; /24 = 24 bits = 3 octets.
- "A 0 octet still adds bits." → Fix: only the 1s count; a 0 octet adds 0.
- "Guess partial octets." → Fix: use the fixed table (128=1 … 255=8).
- "Classless means no mask." → Fix: classless means the split isn't tied to A/B/C — the mask still exists.

## Pacing tips
- Nail the three defaults first (/8, /16, /24), then introduce the octet-to-bits table with /25 and /26 only.
- Have learners convert both directions in the same drill so neither becomes rote-only.

## Accuracy note (Prime Directive #7)
The octet-to-bits values are exact and verifiable in binary (128=10000000=1 bit … 255=11111111=8 bits). `ipconfig` is real; the sample output is representative and labeled "your numbers differ." No fabricated device-specific values.

## How CompTIA tests it
Mask ⇄ slash conversion both ways; recognizing CIDR networks (x.x.x.0/24); the classless concept. Domain 1.4.

## Support ideas
- Give a printed octet-to-bits strip; let struggling learners look it up while it's memorized.

## Extension ideas
- Host counts per slash (/24 → 254 usable, 2^(32−prefix) − 2) as a bridge to subnetting math (08-05).

## Materials checklist
- Lesson · `dgm-08-04-cidr-slash-01.svg` · worksheets `wb-08-04-*` (incl. convert-your-mask lab) · `quiz-08-04-knowledge-check.md`
- Answer key `wb-08-04-answers.md` · glossary updated (CIDR, prefix length, classless) · cheat sheet updated
- Screens to capture: a router/firewall page showing x.x.x.0/24; an `ipconfig` with a 255.255.255.0 mask.

---
_NetworkAcademy+ · Teaching Notes 08-04 · CompTIA Network+ N10-009_
