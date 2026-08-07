# Teaching Notes — NA-M13-L07 "A Hardening Checklist for Your Home Lab"

> 🔒 Instructor material. **Module:** 13 · **Unit:** 10 · **Objective:** N10-009 4.3 · **Time:** ~30 min

---

## Learning objective (one line)

Learners explain hardening and defense in depth, then apply a layered security checklist (accounts, switch, segmentation, wireless, edge, data, updates) to their own gear.

## Why this lesson matters

This is the **capstone of Module 13**. It converts six lessons of concepts into one repeatable, real-world action: a hardening checklist the learner applies to their switch, router, and laptop. Objective 4.3 is about *applying* best practices, and this lesson is where the learner finally does.

## Common misconceptions (and fixes)

- **"One strong control is enough."** The whole point of defense in depth is that no single control is perfect. Layers back each other up.
- **"Updates can wait."** Old firmware carries known, published holes — patch management is a top-tier, easy win.
- **"Hardening is a one-time job."** It's ongoing; re-run the checklist periodically and after any change.
- **"More settings = safer."** Not if you change many at once and can't tell what broke. One change, test, next.

## Pacing guidance

- ~30 minutes. Lead with the castle/house-layers analogy (§4), then walk the seven-layer checklist (§3).
- The **real checklist lab (§9)** is the heart of the lesson and the module. Give learners time to actually mark Done / To do / N/A on their gear.
- Steer the first fixes to **default passwords** and **MFA** — highest impact, lowest risk.
- Reinforce the safety rule: don't lock yourself out; on a shared switch, get permission; when unsure, mark "To do."

## How CompTIA tends to test it

- Choosing layered defense (defense in depth) over any single fix.
- Recognizing hardening steps and mapping them to layers.
- Patch management as a best practice.
- "Best next step" scenarios where the answer adds a missing layer.

## Accuracy note (Prime Directive #7)

The lab is a checklist the learner applies to their own equipment. **No commands or output are fabricated;** any Dell PowerConnect 3424 command is `[TO VERIFY ON HARDWARE]`, and risky changes are gated behind the safety rule.

## Extension ideas (fast learners)

- CIS Benchmarks and vendor hardening guides.
- Security baselines and change management for security changes.
- Attack surface as a concept — measuring what you reduced.

## Support ideas (struggling learners)

- Have them complete only Layers 1 and 4 (accounts + wireless) first — the biggest, easiest wins.
- Use the house-layers table (§4) as the anchor and map each row to its network layer.
- Let them mark everything "To do" honestly; awareness is the first step.

## Module 13 wrap-up

With 13-07 published, **Module 13 (Network Security) is complete** (7 of 7). Mark the module ✅ Complete in its README. Next: **Module 14 — Network Troubleshooting** (domain 5, unit 11), which needs its README board populated and a new cheat sheet.

---
_NetworkAcademy+ · Teaching Notes · CompTIA Network+ N10-009 · NA-M13-L07 · Module 13_
