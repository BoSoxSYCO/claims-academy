# Teaching Notes — NA-M03-L05 "Why This Matters for IP and MAC Addresses"

> 🔒 Instructor materials. Pairs with the lesson and `wb-03-05-answers.md`.

## Objective in one line
Learners connect binary/hex to real addresses: IPv4 = 4 decimal bytes; MAC = 6 hex bytes.

## Where this sits
Fifth and final lesson of Module 03 — and the **capstone of the entire on-ramp (Unit 1)**. It synthesizes bits, bytes, place values, conversion, and hex into the two address types used across the rest of the course. Time: ~25 min + ~40 min worksheets/lab.

## The anchor
The **"alphabet → words"** analogy and the two-question tip: *decimal or hex? how many bytes?* — which instantly distinguishes IP (4 decimal) from MAC (6 hex).

## Common misconceptions (and the fix)
- IP vs. MAC confusion. → Fix: dots+decimal (IP) vs. colons+hex (MAC).
- Octet over 255. → Fix: one octet = one byte, max 255.
- Reading a MAC pair as two numbers. → Fix: each pair = one byte.

## Pacing tips
- Keep it a light synthesis lesson; full IP theory is Module 08, full MAC/switching is Module 07.
- The `ipconfig` + `ipconfig /all` lab lets learners see *their own* IP and MAC — a satisfying close to the on-ramp.
- Celebrate: this is a milestone (M1-M2 territory / end of Unit 1). Acknowledge the journey from "what is RAM."

## How CompTIA tests it
Every address on the exam is an IP (dotted decimal) or MAC (hex). This mental model underpins Domains 1 and 2.

## Support ideas
- Have learners annotate their own ipconfig output: circle IP octets, box MAC bytes.

## Extension ideas
- Convert all four octets of their IP to binary (a direct Module-08 warm-up).

## Module 03 / on-ramp wrap
With this lesson, all five Module 03 lessons are Published, completing **Unit 1 (the on-ramp)**. Learners are ready for **Module 04 (Networking Fundamentals)** and Unit 2.

## Materials checklist
- Lesson · `dgm-03-05-ip-mac-addresses-01.svg` · worksheets `wb-03-05-*` · `quiz-03-05-knowledge-check.md`
- Answer key `wb-03-05-answers.md` · glossary updated (IPv4 address, octet) · cheat sheet updated
- Screenshots to capture: ipconfig IP; ipconfig /all MAC; a router MAC label.

---
_NetworkAcademy+ · Teaching Notes 03-05 · CompTIA Network+ N10-009_
