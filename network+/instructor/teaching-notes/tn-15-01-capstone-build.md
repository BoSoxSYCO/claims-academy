# Teaching Notes — NA-M15-L01 "Capstone Project: Build the Whole Home Lab"

> 🔒 Instructor material. **Module:** 15 · **Unit:** 12 · **Objective:** N10-009 1.1 / 2.1 / 2.3 / 5.3 · **Time:** ~45 min

---

## Learning objective (one line)

Learners build the full home lab and verify it layer by layer, fixing any failed stage from the bottom up.

## Why this lesson matters

This is the **first capstone lesson of the course**. It fuses the whole program into one hands-on build: cabling (Module 06), switching (Module 11), IP addressing and DHCP (Module 08), the OSI layers (Module 05), and the troubleshooting method (Module 14). A learner who can build and verify this network has proven real, job-ready skill — not just recall.

## The nine stages (build a little, test a little)

gather → plan → wire → power/link lights → address (ipconfig/DHCP) → test by layer → check switch → troubleshoot → document. The whole method is "prove each layer before trusting the next."

## The test order (drill this)

**link light (L1) → IP from DHCP (L3) → ping gateway → ping 8.8.8.8 → resolve a name (DNS).** Each success proves one more layer is healthy. A failure tells you the problem is at that layer or below.

## Common misconceptions (and fixes)

- **"Test the website first."** No — check the link light first. Bottom-up saves time.
- **"A 169.254 address is fine."** It is APIPA; DHCP did not answer. Nothing reaches the internet.
- **"I can change switch settings freely."** On a shared switch, a wrong change locks others out. Only add your cable.
- **"Keep going if a stage fails."** Stop and fix it; higher tests will fail anyway.

## Pacing guidance

- ~45 minutes. This is a build, so pace by stages, not by clock.
- Pause after each stage for a thumbs-up before moving on.
- Where learners stall: link lights (bad cable/port), and reading `ipconfig` output (which line is the gateway).
- The plumbing analogy (§4) carries the "test one faucet at a time" idea.

## How CompTIA tends to test it

- Bottom-up reasoning and "what do you check first" items.
- Cause identification: APIPA→DHCP, name-only→DNS.
- Safe-change practice on shared equipment.

## Accuracy note (Prime Directive #7)

All commands (`ipconfig`, `ping`, `nslookup`, `ipconfig /renew`, `ipconfig /flushdns`) are real Windows commands. **Every address and reply shown (192.168.x.x, 169.254.x.x, 8.8.8.8 replies) is a varying example**, marked `[TO VERIFY ON HARDWARE]`. Nothing on a shared switch is changed.

## Module 15 context

This opens **Module 15 — Capstone & Exam Readiness** (the final module). Next: 15-02 (exam-day logistics), then PBQ practice, two full practice exams, weak-spot review, and the 7-day plan.

## Extension ideas (fast learners)

- Add a VLAN on the switch (Module 11) and re-verify connectivity within and across it.
- Add a second device and confirm both pull addresses from DHCP.
- Time the full build to grow speed and confidence.

## Support ideas (struggling learners)

- Give the nine-stage ladder (§6 / cheat sheet) as a checklist to tick off.
- Build stages 1–4 together as a class before the solo run.
- Anchor one rule: "check the link light before any setting."

---
_NetworkAcademy+ · Teaching Notes · CompTIA Network+ N10-009 · NA-M15-L01 · Module 15_
