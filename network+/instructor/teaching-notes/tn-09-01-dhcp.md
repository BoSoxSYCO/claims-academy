# Teaching Notes — NA-M09-L01 "DHCP: How Devices Get an Address Automatically"

> 🔒 Instructor materials. Pairs with the lesson and `wb-09-01-answers.md`.

## Objective in one line
Learners explain what DHCP provides and walk the DORA exchange, plus lease/scope/reservation and static vs. dynamic.

## Where this sits
First lesson of Module 09 (Core Network Services). Builds on IP basics (08-01) and APIPA (08-02). Opens the "invisible services" unit; DNS (09-02) and a deeper NAT (09-03) follow. Central to **Lab D** (watch DHCP/DNS on your router).
Time: ~28 min + ~35 min worksheets/lab.

## The anchor
**Hotel front desk:** you don't build your own room — the desk assigns one, gives a key for your stay (lease), and takes it back after. A reservation = "always give me room 101."

## Common misconceptions (and the fix)
- "DORA is in some other order." → Fix: Discover → Offer → Request → Acknowledge.
- "A 169.254 is the device's fault." → Fix: APIPA means the **DHCP server** didn't answer.
- "A lease lasts forever." → Fix: it expires; the device renews before then.
- "DHCP gives the MAC." → Fix: MAC is burned in; DHCP gives IP, mask, gateway, DNS.

## Pacing tips
- Drill DORA out loud until automatic; the hotel analogy makes it stick.
- The `ipconfig /all` lab shows the DHCP server and lease — connect that to "Acknowledge."

## Accuracy note (Prime Directive #7)
`ipconfig /all` is a real Windows command; the shown fields (DHCP Enabled, DHCP Server, Lease Obtained/Expires) are genuine, and the sample values are representative — learners' own values differ. No fabricated device-specific data.

## How CompTIA tests it
DORA order; what DHCP provides; scope/lease/reservation; APIPA as the DHCP-failure signal; static vs. dynamic. Domains 1.4 / 2.

## Support ideas
- Give a printed DORA card; have the learner narrate each step as a hotel action.

## Extension ideas
- DHCP relay / IP helper across subnets, DHCP options, and DHCPv6 for fast learners.

## Materials checklist
- Lesson · `dgm-09-01-dhcp-dora-01.svg` · worksheets `wb-09-01-*` (incl. ipconfig /all lab) · `quiz-09-01-knowledge-check.md`
- Answer key `wb-09-01-answers.md` · glossary updated (DHCP, DORA, lease, DHCP scope, DHCP reservation, dynamic IP address, static IP address) · new cheat sheet `network-services-quick-reference.md`
- Screens to capture: `ipconfig /all` (DHCP fields); a router DHCP page (scope + lease).

---
_NetworkAcademy+ · Teaching Notes 09-01 · CompTIA Network+ N10-009_
