# Teaching Notes — NA-M03-L02 "Bits, Bytes, and Counting in Binary"

> 🔒 Instructor materials. Pairs with the lesson and `wb-03-02-answers.md`.

## Objective in one line
Learners can name the 8 place values and read a byte by adding the "on" places (max 255).

## Where this sits
Second lesson of Module 03 — the **highest-leverage on-ramp lesson for subnetting**. The place values 128–1 are used in every IP octet and subnet mask (Module 08). Time: ~30 min + ~40 min worksheets/lab.

## The anchor
The **doubling-coins analogy** (coins worth 128…1; pick which are "in") and the fact that binary places double while decimal places grow ×10.

## Common misconceptions (and the fix)
- Writing place values backward (1 on the left). → Fix: rightmost = 1, values grow left.
- Adding "0" places. → Fix: only add a place when its bit is 1.
- 255 vs. 256. → Fix: 0 to 255 is 256 *values*, but the biggest number is 255.

## Pacing tips
- Have learners memorize `128 64 32 16 8 4 2 1` — quiz it verbally.
- Reading (binary→decimal) is enough here; the systematic two-way method + speed drills are 03-03.
- Use the Calculator to make every paper answer self-checking.

## How CompTIA tests it
Directly underlies subnetting: every subnet mask value (255, 254, 252, 248, 240, 224, 192, 128, 0) is a run of place values. Learning these now is the biggest single win.

## Support ideas
- Physical "coins" labeled 128…1 to build numbers by hand.

## Extension ideas
- Build 10, 172, and 168 (common private-IP numbers) as a Module-08 preview.

## Materials checklist
- Lesson · `dgm-03-02-place-values-01.svg` · worksheets `wb-03-02-*` · `quiz-03-02-knowledge-check.md`
- Answer key `wb-03-02-answers.md` · glossary updated (byte, place value, decimal) · cheat sheet updated
- Photos to capture: place-value scratch card; Calculator 192↔11000000; labeled coins.

---
_NetworkAcademy+ · Teaching Notes 03-02 · CompTIA Network+ N10-009_
