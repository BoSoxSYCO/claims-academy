# Teaching Notes — NA-M03-L04 "Hexadecimal — Shorthand for Computers"

> 🔒 Instructor materials. Pairs with the lesson and `wb-03-04-answers.md`.

## Objective in one line
Learners can convert hex ↔ binary using nibbles and recognize where hex is used.

## Where this sits
Fourth lesson of Module 03. Builds on bytes/place values (03-02/03) and previews MAC addresses (Module 07) and IPv6 (Module 08). Time: ~25 min + ~40 min worksheets/lab.

## The anchor
**One hex digit = 4 bits (a nibble); two hex digits = one byte.** The **abbreviation analogy** (Dr. for Doctor) explains *why* hex exists.

## Common misconceptions (and the fix)
- A–F treated as measures. → Fix: they're just symbols for 10–15.
- Splitting bytes into wrong-size groups. → Fix: always 4-bit nibbles.
- Treating `0x` as part of the value. → Fix: it only flags "this is hex."

## Pacing tips
- Keep it to the nibble split; don't teach base-16 place-value math (16s, 256s) — nibbles are enough and less error-prone.
- The `ipconfig /all` MAC sighting is the payoff — hex made real.

## How CompTIA tests it
MAC addresses and IPv6 are always in hex. Reading them (two hex digits = one byte) is expected.

## Support ideas
- Printed 0–F ↔ 4-bit reference card while converting.

## Extension ideas
- Convert all six bytes of the learner's own MAC address to binary.

## Materials checklist
- Lesson · `dgm-03-04-byte-to-hex-01.svg` · worksheets `wb-03-04-*` · `quiz-03-04-knowledge-check.md`
- Answer key `wb-03-04-answers.md` · glossary updated (hexadecimal, base 16, nibble, MAC address) · cheat sheet updated
- Screenshots to capture: Calculator HEX/DEC/BIN; `ipconfig /all` MAC; a hex color code.

---
_NetworkAcademy+ · Teaching Notes 03-04 · CompTIA Network+ N10-009_
