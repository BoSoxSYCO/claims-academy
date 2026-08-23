# Teaching Notes — NA-M08-L01 "What an IP Address Is and Why We Need It"

> 🔒 Instructor materials. Pairs with the lesson and `wb-08-01-answers.md`.

## Objective in one line
Learners explain what an IP address is and **why** it's needed alongside the MAC address (logical vs. physical; routing vs. local delivery).

## Where this sits
The **first** lesson of Module 08 (IP Addressing & Subnetting) — the heart of exam Domain 1. It builds on the IPv4 intro (M03-L05) and MAC addresses (M07-L02), and it opens the road to classes, masks, CIDR, and subnetting (08-02 → 08-06). Ties to **Lab C** (planning a home IP scheme).
Time: ~25 min + ~35 min worksheets/lab.

## The anchor
**Name vs. mailing address:** your name never changes but can't route a letter; your mailing address has structure (country/city/street) and gets mail across the world. MAC = name; IP = mailing address.

## Common misconceptions (and the fix)
- "IP and MAC are the same." → Fix: different jobs — MAC = local (Layer 2), IP = routing (Layer 3).
- "An IP is permanent like a MAC." → Fix: an IP is logical and changes on a new network; the MAC is the fixed one.
- "A MAC could route the internet." → Fix: MACs are flat with no network part, so they can't be steered across networks.
- "The four numbers can go over 255." → Fix: each octet is one byte, 0–255.

## Pacing tips
- The `ipconfig` lab is the payoff — most learners connect the idea once they see their **own** IP. Give it time.
- Have learners read their IP one octet at a time, out loud.

## Accuracy note (Prime Directive #7)
`ipconfig` is a real command taught in Module 02. The output shown in the lesson is a **representative example** (192.168.1.24, etc.) — explicitly tell learners their own numbers will differ. Do not present any specific device's address as a fixed fact.

## How CompTIA tests it
MAC (Layer 2, local) vs. IP (Layer 3, routing); IPv4 dotted-decimal format; logical vs. physical addressing. Domain 1.4.

## Support ideas
- Keep returning to the mail analogy for any "why two addresses?" question.
- Let a struggling learner just find and read their own IP before worrying about routing.

## Extension ideas
- Preview that the IP splits into a **network part** and a **host part** (08-02/08-03), and mention IPv6 exists (08-07) for fast learners.

## Materials checklist
- Lesson · `dgm-08-01-mac-vs-ip-01.svg` · worksheets `wb-08-01-*` (incl. find-your-IP lab) · `quiz-08-01-knowledge-check.md`
- Answer key `wb-08-01-answers.md` · glossary updated (host, logical address, physical address, dotted-decimal notation) · new cheat sheet `ip-addressing-quick-reference.md`
- Screens to capture: `ipconfig` output with the IPv4 line highlighted; a router label showing its default IP.

---
_NetworkAcademy+ · Teaching Notes 08-01 · CompTIA Network+ N10-009_
