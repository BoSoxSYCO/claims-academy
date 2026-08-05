# Teaching Notes — NA-M08-L05 "Subnetting Step by Step (the Beginner Method)"

> 🔒 Instructor materials. Pairs with the lesson and `wb-08-05-answers.md`.

## Objective in one line
Learners subnet a network with a repeatable 5-step method: block size → list subnets → network/broadcast/host range → usable-host count.

## Where this sits
Fifth lesson of Module 08 and the pivotal one. Builds on masks (08-03) and CIDR (08-04); the next lesson (08-06) adds speed and practice. This is the core of **Lab C** (carving the home network into subnets).
Time: ~32 min (longest lesson so far) + ~45 min worksheets/lab.

## The anchor
**Interior walls:** one big open room (a /24) gets walls to make smaller, quieter rooms (subnets). Door sign = network address; all-call speaker = broadcast; desks = usable hosts.

## The one worked example (do it completely)
`192.168.1.0/24 → /26`: mask 255.255.255.192, block 64, subnets .0/.64/.128/.192, 62 hosts each. Resist teaching more variants until this one lands. Then /27 as practice (block 32, 8 subnets, 30 hosts).

## Common misconceptions (and the fix)
- "Usable = 2^host." → Fix: subtract 2 (network + broadcast).
- "Any address in the range is usable." → Fix: not the first (network) or last (broadcast).
- "Block size is the slash number." → Fix: block size = 256 − the interesting octet's mask value.
- "More subnets is free." → Fix: more subnets = fewer hosts each; it's a trade.

## Pacing tips
- Pencil and paper beats mental math here. Have every learner physically write the four-row table.
- Verify with the "add-up" check: subnets × block = 256 (the whole /24), no gaps or overlaps.

## Accuracy note (Prime Directive #7)
All example numbers are verified: /26 → block 64, 4 subnets, 62 hosts; broadcasts .63/.127/.191/.255; /27 → block 32, 8 subnets, 30 hosts. `ipconfig` is real and used read-only to place the learner's own IP. No fabricated device output.

## How CompTIA tests it
Given an address + mask: find the subnet, broadcast, host range, or usable-host count — often PBQ-style. Domain 1.4.

## Support ideas
- For a stuck learner, pre-fill Steps 1–2 and let them complete Steps 3–5.
- Keep a printed block-size reference (/25=128, /26=64, /27=32, /28=16, /29=8, /30=4).

## Extension ideas
- Variable-length subnet masks (VLSM) and right-sizing subnets to host needs for fast learners.

## Materials checklist
- Lesson · `dgm-08-05-subnetting-01.svg` · worksheets `wb-08-05-*` (incl. subnet-by-hand lab) · `quiz-08-05-knowledge-check.md`
- Answer key `wb-08-05-answers.md` · glossary updated (subnetting, borrowing bits, block size, network address, broadcast address, usable host) · cheat sheet updated
- Photos to capture: a hand-worked subnet table; a router page with two LAN subnets.

---
_NetworkAcademy+ · Teaching Notes 08-05 · CompTIA Network+ N10-009_
