# Teaching Notes — NA-M08-L02 "IPv4 Structure, Classes, and Private Ranges"

> 🔒 Instructor materials. Pairs with the lesson and `wb-08-02-answers.md`.

## Objective in one line
Learners describe IPv4 structure (32 bits, network/host split) and recognize address classes, the three private ranges, loopback, and APIPA on sight.

## Where this sits
Second lesson of Module 08. Builds on 08-01 (what an IP is) and sets up the subnet mask (08-03), which makes the network/host split exact. Feeds **Lab C** (home IP scheme, almost always a private range).
Time: ~28 min + ~35 min worksheets/lab.

## The anchor
**A phone number:** area code (network portion) + line number (host portion). Office extensions repeat everywhere (private ranges); a public listed number is unique (public IP).

## Common misconceptions (and the fix)
- "All 172.x is private." → Fix: only 172.16.0.0/12 (172.16–172.31).
- "127 is Class A." → Fix: 127.0.0.0/8 is reserved for loopback; usable Class A first octets are 1–126.
- "169.254 is a normal address." → Fix: it's APIPA — DHCP didn't answer.
- "Classes still strictly define networks." → Fix: masks (08-03/08-04) override the old classful defaults; classes are mostly a recognition/exam topic now.

## Pacing tips
- Turn the three private ranges into a chant: "10, 172-dot-16, 192-dot-168." Repeat until automatic.
- The classify-your-IP + loopback lab cements the patterns on the learner's own machine.

## Accuracy note (Prime Directive #7)
All ranges here are exact and standards-based: RFC 1918 private (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16), loopback 127.0.0.0/8 (127.0.0.1), APIPA/link-local 169.254.0.0/16. `ipconfig` and `ping 127.0.0.1` are real commands; the shown loopback reply is a representative example — the learner's exact timing/TTL may differ slightly.

## How CompTIA tests it
"What kind of address is this?" — class by first octet; private-range recognition; loopback; APIPA as a DHCP-failure signal. Domain 1.4.

## Support ideas
- Give a struggling learner a printed table and have them classify 10 sample addresses before the lab.

## Extension ideas
- Why classful gave way to classless (CIDR) — a natural bridge to Lesson 08-04 — for fast learners.

## Materials checklist
- Lesson · `dgm-08-02-classes-and-private-01.svg` · worksheets `wb-08-02-*` (incl. classify-your-IP lab) · `quiz-08-02-knowledge-check.md`
- Answer key `wb-08-02-answers.md` · glossary updated (network portion, host portion, address class, private IP address, public IP address, loopback address, APIPA) · cheat sheet updated
- Screens to capture: a router DHCP-range page; an `ipconfig` showing a 169.254 APIPA address.

---
_NetworkAcademy+ · Teaching Notes 08-02 · CompTIA Network+ N10-009_
