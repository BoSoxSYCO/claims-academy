# Teaching Notes — NA-M08-L06 "Subnetting Practice and Shortcuts"

> 🔒 Instructor materials. Pairs with the lesson and `wb-08-06-answers.md`.

## Objective in one line
Learners subnet quickly using the powers of 2, the round-down (magic number) trick, and mask sizing from hosts or subnets needed.

## Where this sits
Sixth lesson of Module 08 — the speed/drill companion to the method in 08-05. Last subnetting-math lesson before IPv6 (08-07). Makes **Lab C** planning fast.
Time: ~30 min, mostly practice + ~40 min worksheets/lab.

## The anchor
**Times tables:** once 2^6 = 64 is recall, you stop counting. Speed is memorized patterns, not new theory.

## The three shortcuts
1. **Powers of 2** (1…256) — subnet counts, host counts, block sizes.
2. **Round down** the interesting octet to the nearest **block size** (magic number) → the subnet.
3. **Size the mask**: hosts → 2^bits − 2 ≥ needed; subnets → 2^borrowed ≥ needed.

## Common misconceptions (and the fix)
- "Round to any lower number." → Fix: nearest **multiple of the block size**.
- "Forget the −2." → Fix: usable = 2^bits − 2.
- "Swap the two sizing rules." → Fix: hosts use 2^bits−2; subnets use 2^borrowed.
- "Slow is fine." → Fix: the exam is timed; drill to recall.

## Pacing tips
- This is a drilling lesson: keep the theory short and run the timed set twice.
- Push learners to beat their first time on the second run — visible progress motivates.

## Accuracy note (Prime Directive #7)
Every worked value is verified (see the QA report's full math check): the round-down results, broadcasts, host ranges, and mask-sizing answers. `ipconfig` is used read-only. No fabricated device output.

## How CompTIA tests it
Timed subnet/broadcast/host-range/host-count and mask-sizing questions; the round-down trick is the fastest route. Domain 1.4.

## Support ideas
- Give a printed powers-of-2 card and the /25–/30 host table; let learners lean on them while memorizing.

## Extension ideas
- VLSM: sizing different subnets to different host needs within one network, for fast learners.

## Materials checklist
- Lesson · `dgm-08-06-shortcuts-01.svg` · worksheets `wb-08-06-*` (incl. timed drill lab) · `quiz-08-06-knowledge-check.md`
- Answer key `wb-08-06-answers.md` · glossary updated (powers of 2, magic number) · cheat sheet updated
- Study aids to capture: a powers-of-2 card; a timed practice sheet with answers.

---
_NetworkAcademy+ · Teaching Notes 08-06 · CompTIA Network+ N10-009_
