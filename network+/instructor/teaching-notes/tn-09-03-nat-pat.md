# Teaching Notes — NA-M09-L03 "NAT and PAT: Sharing One Public Address"

> 🔒 Instructor materials. Pairs with the lesson and `wb-09-03-answers.md`.

## Objective in one line
Learners distinguish static/dynamic/PAT NAT, explain how ports let many devices share one public IP, describe the NAT translation table, and explain port forwarding.

## Where this sits
Third lesson of Module 09 — the full treatment of the NAT preview from 08-08. Introduces ports lightly (fully covered in Module 10). Precedes gateways (09-04).
Time: ~28 min + ~40 min worksheets/lab.

## The anchor
**Apartment building:** one street address (public IP), many apartments (ports). "123 Main St, Apt 5" = 203.0.113.7:40001. The mailroom's unit list = the NAT translation table.

## Ports — teach lightly, forward-reference
Ports are a Module 10 topic. Here, give only the working idea: "a port number labels one conversation, like an apartment number." That satisfies Prime Directive #1 (teach before use) without pre-empting Module 10. Don't drill port ranges/well-known ports yet.

## Common misconceptions (and the fix)
- "PAT needs many public IPs." → Fix: PAT shares **one**, using ports.
- "Static = dynamic." → Fix: static is fixed one-to-one; dynamic draws from a pool.
- "NAT is a firewall." → Fix: it hides inside devices but isn't a full firewall.
- "Forward everything to be safe." → Fix: each forward is an open door; forward only what's needed.

## Pacing tips
- The apartment analogy carries the whole lesson; keep returning to it.
- `netstat -n` shows many local ports at once — the clearest proof PAT has plenty to track.

## Accuracy note (Prime Directive #7)
Documentation blocks used (203.0.113.0/24, RFC 5737). `netstat -n` is a real Windows command; sample lines are representative (ports/foreign IPs vary). Router port-forwarding pages vary → lab is read-only and marked accordingly. No fabricated device output.

## How CompTIA tests it
Static vs. dynamic vs. PAT/overload; port forwarding; NAT hides inside devices; PAT conserves IPv4. Domain 1.4.

## Support ideas
- Have a struggling learner label three "apartments" (ports) behind one "street address" (public IP) on paper.

## Extension ideas
- Carrier-grade NAT, NAT traversal (UPnP/STUN), and why IPv6 usually skips NAT, for fast learners.

## Materials checklist
- Lesson · `dgm-09-03-pat-table-01.svg` · worksheets `wb-09-03-*` (incl. netstat lab) · `quiz-09-03-knowledge-check.md`
- Answer key `wb-09-03-answers.md` · glossary updated (static NAT, dynamic NAT, NAT overload, port number, NAT translation table, port forwarding) · cheat sheet updated
- Screens to capture: `netstat -n`; a router port-forwarding page.

---
_NetworkAcademy+ · Teaching Notes 09-03 · CompTIA Network+ N10-009_
