# Teaching Notes — NA-M09-L02 "DNS: Turning Names into Numbers"

> 🔒 Instructor materials. Pairs with the lesson and `wb-09-02-answers.md`.

## Objective in one line
Learners explain what DNS does, the name→IP lookup flow, and the common record types, and run `nslookup`.

## Where this sits
Second lesson of Module 09. Builds on IP (08-01) and DHCP handing out the DNS server (09-01). Precedes the deeper NAT lesson (09-03). Part of **Lab D** (watch DHCP/DNS work).
Time: ~28 min + ~35 min worksheets/lab.

## The anchor
**Phone book / contacts:** you remember the name ("Mom," google.com); the book gives the number (the IP). Directory assistance (411) = the resolver.

## Common misconceptions (and the fix)
- "A vs. PTR." → Fix: A = name→IP; PTR = IP→name (reverse).
- "DNS connects you." → Fix: DNS only looks up the IP; the network then connects.
- "CNAME vs. A." → Fix: CNAME = name→name (alias); A = name→IPv4.
- "Name fails = whole internet down." → Fix: if the IP works, it's a DNS problem.

## Pacing tips
- Teach the record table as a quick chant: A/AAAA/CNAME/MX/PTR/TXT with one word each.
- The `nslookup` lab makes it concrete — have learners try two or three names.

## Accuracy note (Prime Directive #7)
`nslookup` and `ping` are real Windows commands. Returned IPs vary — big sites have many addresses that change over time — so the sample output is labeled representative and the diagram notes "real addresses vary and change." No fabricated fixed answers. Public-name lookups only (no data leaves that isn't a normal DNS query).

## How CompTIA tests it
Record types (A, AAAA, CNAME, MX, PTR, TXT); the name→IP flow; DNS failures that look like "no internet." Domain 1.4.

## Support ideas
- Anchor each record to the phone-book analogy (MX = mail-forwarding address, PTR = reverse directory).

## Extension ideas
- Recursive vs. iterative queries, the root/TLD/authoritative tiers, and DNSSEC for fast learners.

## Materials checklist
- Lesson · `dgm-09-02-dns-lookup-01.svg` · worksheets `wb-09-02-*` (incl. nslookup lab) · `quiz-09-02-knowledge-check.md`
- Answer key `wb-09-02-answers.md` · glossary updated (DNS, domain name, DNS resolver, DNS cache, A record, CNAME record, MX record) · cheat sheet updated
- Screens to capture: `nslookup google.com`; a router page listing the DNS servers it hands out.

---
_NetworkAcademy+ · Teaching Notes 09-02 · CompTIA Network+ N10-009_
