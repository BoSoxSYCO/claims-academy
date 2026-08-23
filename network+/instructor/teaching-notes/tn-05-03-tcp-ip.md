# Teaching Notes — NA-M05-L03 "The TCP/IP Model and How It Maps to OSI"

> 🔒 Instructor materials. Pairs with the lesson and `wb-05-03-answers.md`.

## Objective in one line
Learners name the 4 TCP/IP layers and map them to the OSI 7.

## Where this sits
Third lesson of Module 05. Builds directly on 05-01 (why a model) and 05-02 (OSI 7). Sets up encapsulation (05-04), which walks data down these layers. Time: ~25 min + ~40 min worksheets/lab.

## The anchor
**Same building, fewer sections.** OSI = 7 floors; TCP/IP = the same building drawn as 4 sections, merging closely-related floors.

## Common misconceptions (and the fix)
- "TCP/IP replaced OSI." → Fix: both describe the same networking; OSI stays as the detailed teaching map.
- "Swap TCP and IP." → Fix: IP = addressing/routing (Internet); TCP = reliable delivery (Transport).
- "TCP/IP should have 7 layers too." → Fix: Application merges OSI 5–7; Network Access merges OSI 1–2.

## Pacing tips
- Anchor the mapping on the **middle**: Internet = 3, Transport = 4. Then teach the two merges.
- The draw-the-mapping lab (5.3.E) is the payoff — everyone connects the two stacks.

## How CompTIA tests it
The mapping itself (Internet=3, Transport=4) and "which TCP/IP layer holds IP/TCP." Layer-number talk ("Layer 3 issue") translated across models.

## Support ideas
- Reuse the learner's OSI ladder from 05-02 as the right-hand column.

## Extension ideas
- Mention the 5-layer hybrid model some texts use (splitting Network Access back into Physical + Data Link).

## Materials checklist
- Lesson · `dgm-05-03-tcpip-map-01.svg` · worksheets `wb-05-03-*` (incl. draw-the-mapping lab) · `quiz-05-03-knowledge-check.md`
- Answer key `wb-05-03-answers.md` · glossary updated (Network Access layer, Internet layer, IP, TCP, map) · cheat sheet updated (TCP/IP ↔ OSI)
- Photos to capture: a home router (Internet layer); an OSI/TCP-IP poster; a cable + Wi-Fi symbol (Network Access).

---
_NetworkAcademy+ · Teaching Notes 05-03 · CompTIA Network+ N10-009_
