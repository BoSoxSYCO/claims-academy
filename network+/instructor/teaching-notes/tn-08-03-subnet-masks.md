# Teaching Notes — NA-M08-L03 "Subnet Masks Explained Without Fear"

> 🔒 Instructor materials. Pairs with the lesson and `wb-08-03-answers.md`.

## Objective in one line
Learners read a subnet mask, split an address into network and host, decide if two hosts share a network, and name the three default masks.

## Where this sits
Third lesson of Module 08. Builds directly on 08-02 (network vs. host portion, classes) and sets up CIDR (08-04) and subnetting (08-05/06). Central to **Lab C** (planning the home IP scheme).
Time: ~28 min + ~35 min worksheets/lab.

## The anchor
**A highlighter over the address:** the mask highlights the network part (255s) and leaves the host plain (0). Mailing version: highlight the town/ZIP, leave the house number.

## Fear-free delivery (this lesson especially)
The title promises "without fear" — honor it. Start with 255.255.255.0 only, do several worked splits out loud, and do not introduce non-octet masks except as a one-line preview. Normalize the wobble: "this trips up almost everyone at first."

## Common misconceptions (and the fix)
- "The class sets the split." → Fix: the **mask** does; the class is only a default.
- "0 in the mask means network." → Fix: 255 = network, 0 = host.
- "Compare only the first octet." → Fix: with 255.255.255.0 compare **all three** network octets.
- "The gateway can be on any network." → Fix: the gateway must share your network so you can reach it directly.

## Pacing tips
- Drill the same-network test with pairs that differ only in the third octet — that's where mistakes hide.
- The split-your-own-address lab makes it real; give it time.

## Accuracy note (Prime Directive #7)
All examples are arithmetic on standard masks. `ipconfig` is real (Module 02); the sample output is representative and labeled "your numbers differ." No fabricated device-specific values.

## How CompTIA tests it
Read a mask; identify the network; same-network decision; default masks per class. Domain 1.4. (CIDR math comes in 08-04.)

## Support ideas
- Give a printed "255 = network / 0 = host" strip to lay over sample addresses.

## Extension ideas
- Preview a non-octet mask (255.255.255.128) as the bridge to CIDR (08-04) for fast learners.

## Materials checklist
- Lesson · `dgm-08-03-subnet-mask-01.svg` · worksheets `wb-08-03-*` (incl. split-your-own-address lab) · `quiz-08-03-knowledge-check.md`
- Answer key `wb-08-03-answers.md` · glossary updated (subnet mask, subnet, default subnet mask) · cheat sheet updated
- Screens to capture: `ipconfig` with the Subnet Mask line highlighted; a router LAN settings page with IP + mask.

---
_NetworkAcademy+ · Teaching Notes 08-03 · CompTIA Network+ N10-009_
