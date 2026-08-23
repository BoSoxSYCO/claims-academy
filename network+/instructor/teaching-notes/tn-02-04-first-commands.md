# Teaching Notes — NA-M02-L04 "Your First Commands: ipconfig, ping, cd, dir"

> 🔒 Instructor materials. Pairs with the lesson and `wb-02-04-answers.md`.

## Objective in one line
Learners can run ipconfig, ping, cd, and dir and read their output.

## Where this sits
Fourth lesson of Module 02 — the first genuinely networking commands. `ipconfig` and `ping` recur in every later networking lab and are heavily tested. Time: ~30 min + ~40 min worksheets/lab.

## The anchor
The **building-explorer toolbox**: ID card (ipconfig), knock (ping), walk in (cd), look around (dir). Two network tools, two folder tools.

## Common misconceptions (and the fix)
- "Request timed out = internet is down." → Fix: some devices ignore ping; test the gateway and 8.8.8.8.
- Forgetting the space in `ping 8.8.8.8`. → Fix: one space between command and target.
- Confusing cd (move) with dir (list). → Fix: cd = walk in, dir = look around.

## Pacing tips
- Keep IP-address depth for **Module 08**. Here, IPv4 Address is just "your address"; don't teach subnetting.
- The gateway-ping "Reply from" is the celebration moment — the first real network test.

## How CompTIA tests it
`ipconfig` and `ping` are among the most-tested CLI tools. Building fluency now pays off across Domain 5.

## Support ideas
- Have everyone ping their own gateway and read the reply aloud together.

## Extension ideas
- `ipconfig /all` to spot the physical (MAC) address — previews Module 07.

## Materials checklist
- Lesson · `dgm-02-04-command-toolbox-01.svg` · worksheets `wb-02-04-*` · `quiz-02-04-knowledge-check.md`
- Answer key `wb-02-04-answers.md` · glossary updated (ipconfig, ping, cd, dir, IP address, default gateway) · cheat sheet updated
- Screenshots to capture: ipconfig output; ping replies; cd/dir sequence.

---
_NetworkAcademy+ · Teaching Notes 02-04 · CompTIA Network+ N10-009_
