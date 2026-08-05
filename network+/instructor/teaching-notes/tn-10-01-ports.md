# Teaching Notes — NA-M10-L01 "What Ports and Protocols Are (the Mailbox Idea)"

> 🔒 Instructor materials. Pairs with the lesson and `wb-10-01-answers.md`.

## Objective in one line
Learners explain protocols, ports, sockets, and the three port ranges (well-known, registered, ephemeral).

## Where this sits
First lesson of Module 10 (Ports, Protocols & Applications). It gives ports their **full** treatment — redeeming the light forward references from 09-03 (PAT). Builds on IP (08-01). Precedes TCP vs. UDP (10-02) and the must-know port table (10-03).
Time: ~26 min + ~35 min worksheets/lab.

## The anchor
**Apartment mailboxes:** the building's street address = the IP; each mailbox number = a port (a program). The protocol = the language the letter is written in. The carrier finds the building, then the mailbox.

## Common misconceptions (and the fix)
- "Port = the physical plug." → Fix: here a port is a **number** for a program (Lesson 01-03 was the plug).
- "Clients use well-known ports." → Fix: clients use **ephemeral**; servers listen on well-known.
- "Protocol = port." → Fix: protocol is the rules; port is the number.
- "One IP = one program." → Fix: one IP, many programs, sorted by port.

## Pacing tips
- The mailbox analogy carries the whole lesson; keep returning to it.
- `netstat -n` ties it to reality: foreign `:443` (well-known) vs. your high local (ephemeral) port — the same tool from 09-03.

## Accuracy note (Prime Directive #7)
Port ranges are standards-based: well-known 0–1023, registered 1024–49151, dynamic/ephemeral 49152–65535. Port numbers are 16-bit (0–65535). 443 = HTTPS is correct; the full common-ports table is deliberately deferred to Lesson 10-03. `netstat -n` is real; sample output representative. No fabricated device data.

## How CompTIA tests it
What a port/protocol is; IP+port = socket; the three ranges; client (ephemeral) vs. server (well-known). Domain 1.5.

## Support ideas
- Draw a building with three labeled mailboxes and have the learner "deliver" data to the right one.

## Extension ideas
- Listening vs. connected sockets; how a server handles many clients on one well-known port, for fast learners.

## Materials checklist
- Lesson · `dgm-10-01-mailbox-ports-01.svg` · worksheets `wb-10-01-*` (incl. netstat lab) · `quiz-10-01-knowledge-check.md`
- Answer key `wb-10-01-answers.md` · glossary updated (socket, well-known ports, registered ports, ephemeral port) · new cheat sheet `ports-and-protocols-quick-reference.md`
- Screens to capture: `netstat -n` with a `:443` line; a wall of numbered mailboxes.

---
_NetworkAcademy+ · Teaching Notes 10-01 · CompTIA Network+ N10-009_
