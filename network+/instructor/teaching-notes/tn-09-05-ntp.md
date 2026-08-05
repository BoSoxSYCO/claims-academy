# Teaching Notes — NA-M09-L05 "Time (NTP) and Other Supporting Services"

> 🔒 Instructor materials. Pairs with the lesson and `wb-09-05-answers.md`.

## Objective in one line
Learners explain NTP and stratum, why accurate time matters, and what SNMP and Syslog do.

## Where this sits
Fifth and final lesson of Module 09 — closes the core-services module. Builds on the "invisible services" idea from 09-01. A partial survey (NTP is the star; SNMP/Syslog round it out). Precedes Module 10 (ports & protocols).
Time: ~26 min + ~35 min worksheets/lab.

## The anchor
**Town clock tower:** everyone sets their watch to the same official clock, so meetings start together and logs agree. Stratum = how many people down the chain from the master clock.

## Common misconceptions (and the fix)
- "Higher stratum is better." → Fix: **lower** = closer to the source = more accurate.
- "Stratum 0 is a server you query." → Fix: it's the reference clock (atomic/GPS), not networked.
- "SNMP = Syslog." → Fix: SNMP monitors/manages; Syslog centralizes logs.
- "Time is trivial." → Fix: wrong time breaks certificates and logins in confusing ways.

## Pacing tips
- Lead with *why* time matters (certificates, logins, log correlation) — it motivates the whole lesson.
- The `w32tm /query /status` lab shows a real stratum number; connect it to the chain.

## Accuracy note (Prime Directive #7)
`w32tm /query /source` and `/status` are real Windows commands. Sample output (Stratum, Source like time.windows.com, sync time) is representative — real values vary. Kerberos/authentication time-sensitivity is described generically ("some logins fail if clocks disagree") to avoid pre-teaching Module 13 security. No fabricated device data.

## How CompTIA tests it
NTP purpose; stratum direction (lower = better, 0 = reference); SNMP (monitoring) vs. Syslog (logging); why time affects certificates/auth. Domains 1.4 / 3.1.

## Support ideas
- Have a struggling learner just run `w32tm /query /status` and read the stratum aloud.

## Extension ideas
- SNMP versions and traps, syslog severity levels, and NTP spoofing/security, for fast learners.

## Materials checklist
- Lesson · `dgm-09-05-ntp-stratum-01.svg` · worksheets `wb-09-05-*` (incl. w32tm lab) · `quiz-09-05-knowledge-check.md`
- Answer key `wb-09-05-answers.md` · glossary updated (NTP, stratum, SNMP, Syslog) · cheat sheet updated
- **Module 09 now complete** (09-01 → 09-05 all Published).
- Screens to capture: `w32tm /query /status`; a syslog server collecting messages.

---
_NetworkAcademy+ · Teaching Notes 09-05 · CompTIA Network+ N10-009_
