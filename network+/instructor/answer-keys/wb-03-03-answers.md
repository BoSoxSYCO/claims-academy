# Answer Key — Lesson NA-M03-L03 "Converting Binary ↔ Decimal the Easy Way"

> 🔒 **Instructor / self-check only.** Covers Quiz 3.3.Q and Worksheets 3.3.A–3.3.G.

---

## Quiz 3.3.Q — Knowledge Check (10 pts)

1. **C** — Start at 128 (biggest place).
2. **B** — Fits → write 1 and subtract it.
3. **C** — `11000000` = 128 + 64 = 192.
4. **A** — 172 = `10101100` (128 + 32 + 8 + 4).
5. **B** — Use the new "what's left" number.
6. **False.** Good answer: always start at the biggest place (128) and work down.
7. **B** — `00010100` = 16 + 4 = 20.
8. Convert → **B**, Remainder → **A**, Subtraction method → **C**.
9. **8** bits.
10. 168 = 128 + 32 + 8 → places 128, 32, 8 on → `10101000`.

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 3.3.A — Fill-in-the-blank (20 pts, 2 each)

1. convert 2. add 3. 128 4. biggest 5. subtract 6. remainder 7. fit 8. 8 9. add 10. remainder.
**Challenge (+2):** 130: 128 fits → 130 − 128 = 2 → …only 2 place also on → `10000010`.

## Worksheet 3.3.B — Matching binary ↔ decimal (20 pts)

1→C (172), 2→D (11001000), 3→A (192), 4→B (10101000), 5→F (10), 6→G (00010100), 7→E (255), 8→H (01100100).
**Show your work (+2):** 200 = 128 + 64 + 8.

## Worksheet 3.3.C — Work the steps for 200 (20 pts)

| Place | Fit? | Bit | Left |
|------:|:----:|:---:|:----:|
| 128 | yes | 1 | 72 |
| 64 | yes | 1 | 8 |
| 32 | no | 0 | 8 |
| 16 | no | 0 | 8 |
| 8 | yes | 1 | 0 |
| 4 | no | 0 | 0 |
| 2 | no | 0 | 0 |
| 1 | no | 0 | 0 |

**Final:** `11001000`.
**Why (+2):** subtracting keeps "what's left" correct, so later places are judged against the true remainder.

## Worksheet 3.3.D — Short answer (20 pts)

1. Add the place values where the bit is 1. *(idea /3, steps /2)*
2. For each place from 128 down: does it fit? yes → 1 and subtract; no → 0. *(idea /3, steps /2)*
3. Coins 128…1; hand over the biggest coin that fits, repeat with what's left. *(idea /3, clarity /2)*
4. 172: 128 fits (r44), 32 fits (r12), 8 fits (r4), 4 fits (r0) → `10101100`. *(idea /3, steps /2)*

## Worksheet 3.3.E — Vocabulary review (20 pts)

- **Part A:** Convert = rewrite in another system; Subtraction method = the decimal→binary routine; Remainder = what's left after subtracting; Byte = 8 bits.
- **Part B:** 1. Remainder 2. Convert 3. Place value.
- **Part C:** 64 = `01000000`; `10000001` = 129.
- **Part D:** 8 bits; biggest = 255.

## Worksheet 3.3.G — Hands-on observation (25 pts)

- Decimal→binary: 172 = `10101100`, 168 = `10101000`, 255 = `11111111`. *(/12)*
- Binary→decimal: `11000000` = 192, `10000001` = 129, `01100100` = 100. *(/9)*
- 172 = 128 + 32 + 8 + 4; matches confirmed. *(interpretation /4)*

---
_NetworkAcademy+ · Answer Key 3.3 · CompTIA Network+ N10-009 · Instructor materials_
