# Teaching Notes — NA-M03-L03 "Converting Binary ↔ Decimal the Easy Way"

> 🔒 Instructor materials. Pairs with the lesson and `wb-03-03-answers.md`.

## Objective in one line
Learners can convert both directions reliably using the place-value chart and the subtraction method.

## Where this sits
Third lesson of Module 03. Turns 03-02's reading skill into a dependable two-way routine — the exact process used for every IP octet and subnet mask in Module 08. Time: ~30 min + ~40 min worksheets/lab.

## The anchor
One chart (`128…1`), two directions: **add** to go binary→decimal, **subtract biggest-first** to go decimal→binary. The **doubling-coins "make change"** analogy anchors the subtraction method.

## Common misconceptions (and the fix)
- Reusing the original number after a subtraction. → Fix: always use the new remainder.
- Starting from the small end. → Fix: start at 128, go down.
- Not padding to 8 bits. → Fix: a byte is exactly 8 bits; pad with leading 0s.

## Pacing tips
- Accuracy before speed. Have learners check *every* answer in the Calculator so the method self-corrects.
- Use private-IP-relevant numbers (168, 172, 192, 10) so it previews Module 08.

## How CompTIA tests it
Every subnetting task is repeated octet conversions. A reliable method (not speed tricks) is what survives exam pressure.

## Support ideas
- Physical coins (128…1) to "make change" for decimal→binary.

## Extension ideas
- Convert all four octets of 192.168.1.10 to binary — a direct Module-08 preview.

## Materials checklist
- Lesson · `dgm-03-03-conversion-method-01.svg` · worksheets `wb-03-03-*` · `quiz-03-03-knowledge-check.md`
- Answer key `wb-03-03-answers.md` · glossary updated (convert, subtraction method, remainder) · cheat sheet updated
- Photos to capture: hand-worked 200→binary; Calculator check; coins making 200.

---
_NetworkAcademy+ · Teaching Notes 03-03 · CompTIA Network+ N10-009_
