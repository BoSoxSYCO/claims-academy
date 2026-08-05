# Teaching Notes — NA-M08-L08 "Public vs. Private, and the Role of NAT (Preview)"

> 🔒 Instructor materials. Pairs with the lesson and `wb-08-08-answers.md`.

## Objective in one line
Learners explain public vs. private addresses and how NAT (and PAT) let private devices share one public address to reach the internet.

## Where this sits
Eighth and final lesson of Module 08 — it closes the module by tying the public/private ranges (08-02) to real internet access. This is a **preview**; the deep NAT/DHCP/DNS treatment is Module 09.
Time: ~26 min + ~35 min worksheets/lab.

## The anchor
**Office phone system:** many desk extensions (private), one public number (public); the phone system (NAT) routes calls, tracking which extension each is for (PAT).

## Keep it a preview
Ports aren't formally taught until Module 10, so PAT is introduced by name and analogy only — say "port numbers keep each conversation apart; you'll learn ports in Module 10." Don't go deeper here.

## Common misconceptions (and the fix)
- "My laptop has a public IP." → Fix: the laptop is private; the router's WAN is public.
- "NAT is a firewall." → Fix: it hides devices as a side effect but isn't a full firewall.
- "Each device needs its own public IP." → Fix: PAT shares one public IP among many.

## Pacing tips
- The compare-two-addresses lab is the payoff — private from `ipconfig`, public from the router's WAN page.
- Note carrier-grade NAT (some ISPs hand out a 100.64.x or private WAN); the concept still holds.

## Accuracy note (Prime Directive #7)
Uses documentation-only address blocks: `203.0.113.0/24` (RFC 5737) for the public example, `192.168.1.x` private. `ipconfig` is real and read-only. Router pages vary by model → marked `[TO VERIFY ON HARDWARE]`. No fabricated device output.

## How CompTIA tests it
Public vs. private; NAT's purpose; PAT as the many-to-one sharer; NAT is not a firewall. Domain 1.4.

## Support ideas
- For a struggling learner, keep to the office-phone analogy and the one-public-IP idea; skip PAT depth.

## Extension ideas
- Static NAT, port forwarding, and carrier-grade NAT for fast learners (all revisited in Modules 09/11/13).

## Materials checklist
- Lesson · `dgm-08-08-nat-01.svg` · worksheets `wb-08-08-*` (incl. private-vs-public lab) · `quiz-08-08-knowledge-check.md`
- Answer key `wb-08-08-answers.md` · glossary updated (NAT, PAT) · cheat sheet updated
- **Module 08 now complete** (08-01 → 08-08 all Published).
- Screens to capture: a router status page (WAN public + LAN private); an `ipconfig` private address.

---
_NetworkAcademy+ · Teaching Notes 08-08 · CompTIA Network+ N10-009_
