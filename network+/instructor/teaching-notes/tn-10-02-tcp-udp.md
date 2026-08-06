# Teaching Notes — NA-M10-L02 "TCP vs. UDP — Reliable vs. Fast"

> 🔒 Instructor materials. Pairs with the lesson and `wb-10-02-answers.md`.

## Objective in one line
Learners contrast TCP (reliable/connection-oriented) and UDP (fast/connectionless), describe the three-way handshake, and say which apps use each.

## Where this sits
Second lesson of Module 10. Builds on ports (10-01) and segments (05-04). Precedes the must-know port table (10-03), where ports get tagged TCP/UDP.
Time: ~26 min + ~35 min worksheets/lab.

## The anchor
**Phone call vs. live broadcast:** TCP dials, confirms "can you hear me?", and repeats missed words (reliable). UDP just talks on air — fast, no confirmation.

## Common misconceptions (and the fix)
- "UDP is broken." → Fix: it skips checks **on purpose** for speed (live media).
- "TCP has no setup." → Fix: it does a three-way handshake first.
- "Files can use UDP." → Fix: files need TCP's reliability.
- "Live video should use TCP." → Fix: UDP; resending a late frame is useless.

## Pacing tips
- Drill the handshake order (SYN → SYN-ACK → ACK) out loud.
- `netstat -an` makes it concrete: TCP rows have a **State** (ESTABLISHED/LISTENING); UDP rows show `*:*` and no state.

## Accuracy note (Prime Directive #7)
The handshake is SYN → SYN-ACK → ACK. `netstat -an` is a real Windows command; TCP rows genuinely show states and UDP rows don't. Sample output is representative (addresses/ports vary). No fabricated device data.

## How CompTIA tests it
TCP vs. UDP traits (reliable/connection-oriented vs. fast/connectionless); handshake order; which services use each (web/email/files = TCP; voice/video/games/DNS = UDP). Domain 1.5.

## Support ideas
- Sort a stack of app cards ("file download", "video call", "DNS", "email") into TCP vs. UDP piles.

## Extension ideas
- TCP flow/congestion control, and QUIC / HTTP/3 (reliable transport built on UDP), for fast learners.

## Materials checklist
- Lesson · `dgm-10-02-tcp-vs-udp-01.svg` · worksheets `wb-10-02-*` (incl. netstat lab) · `quiz-10-02-knowledge-check.md`
- Answer key `wb-10-02-answers.md` · glossary updated (UDP, connection-oriented, connectionless, three-way handshake, acknowledgment/ACK) · cheat sheet updated
- Screens to capture: `netstat -an` showing TCP states vs. UDP no-state.

---
_NetworkAcademy+ · Teaching Notes 10-02 · CompTIA Network+ N10-009_
