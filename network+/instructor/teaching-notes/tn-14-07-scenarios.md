# Teaching Notes — NA-M14-L07 "Worked Scenarios: The Internet Is Down"

> 🔒 Instructor material. **Module:** 14 · **Unit:** 11 · **Objective:** N10-009 5.1–5.5 · **Time:** ~40 min

---

## Learning objective (one line)

Learners run the full seven-step method on real complaints, choosing the right tool for each theory.

## Why this lesson matters

This is the **capstone of Module 14**. It fuses everything — the method (14-01), the CLI tools (14-02/03), the hardware tools (14-04), the layer ladder (14-05), and the name/speed/wireless families (14-06) — into complete, end-to-end walk-throughs. This is exactly how CompTIA presents troubleshooting: a scenario, then "what's the next step / which tool / what's the cause?"

## The four scenarios (theory → tool → fix)

- **A. One PC, no internet:** link light OK → `ipconfig` shows 169.254 (**APIPA**) → no **DHCP** → reseat/renew.
- **B. One name won't load:** IPs work, name fails → **DNS** → `nslookup`, `ipconfig /flushdns`.
- **C. Whole office slow:** shared cause → **bandwidth saturation** or **duplex mismatch** → port stats/`pathping` → reduce load / match duplex.
- **D. Wi-Fi drops far away:** low **RSSI**/**attenuation**, **channel** overlap → `netsh` / Wi-Fi analyzer → add AP / change channel.

## Common misconceptions (and fixes)

- **"Skip identify."** "What changed?" is the fastest clue; never skip it.
- **"Any tool proves the theory."** The tool must match the theory (DNS theory → nslookup, not a cable tester).
- **"No need to verify."** Always confirm the fix worked before closing.
- **"Documenting is optional."** It's step 7 for a reason — it saves the next person's time.

## Pacing guidance

- ~40 minutes — the longest lesson (four walk-throughs plus a self-authored case).
- Lead with the doctor's-rounds analogy (§4): same method, different patients.
- Walk all four scenarios aloud, pausing at "test the theory" to ask which tool and why.
- The lab (§9) has each learner author one full seven-step case — the best synthesis practice.
- Where learners stall: matching tool to theory, and remembering to verify + document.

## How CompTIA tends to test it

- Scenario "next step" and "which tool" items.
- Cause identification: APIPA→DHCP, name-only→DNS, office-wide→saturation/duplex, far-Wi-Fi→RSSI.
- The fixed order of the seven steps.

## Accuracy note (Prime Directive #7)

All commands referenced are real. **Every shown result (169.254 addresses, signal %, ping replies) is a varying example**, marked `[TO VERIFY ON HARDWARE]`. The lab is paper or read-only commands; nothing is changed or fabricated.

## Module 14 wrap-up

With 14-07 published, **Module 14 (Network Troubleshooting) is complete** (7 of 7). Mark the module ✅ Complete in its README. Next: **Module 15 — Capstone & Exam Readiness** (unit 12), the final module of the course, which needs its README board populated.

## Extension ideas (fast learners)

- Build a personal "runbook" of common complaints with theory/tool/fix.
- Add escalation criteria (when a scenario is beyond your access/skill).
- Time-box each scenario to build speed under exam pressure.

## Support ideas (struggling learners)

- Give the four-row scenario table (§17) as the anchor; drill theory→tool for each.
- Author one scenario together as a class before the solo lab.
- Anchor the single rule: "the tool must match the theory."

---
_NetworkAcademy+ · Teaching Notes · CompTIA Network+ N10-009 · NA-M14-L07 · Module 14_
