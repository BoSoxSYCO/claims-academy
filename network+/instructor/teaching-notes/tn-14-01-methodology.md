# Teaching Notes — NA-M14-L01 "The CompTIA Troubleshooting Methodology"

> 🔒 Instructor material. **Module:** 14 · **Unit:** 11 · **Objective:** N10-009 5.1 · **Time:** ~30 min

---

## Learning objective (one line)

Learners list the seven CompTIA troubleshooting steps in order and explain theory-of-cause, escalation, verification, and documentation.

## Why this lesson matters

This opens Module 14 and is the framework every later troubleshooting lesson hangs on. The command-line tools (14-02+) are *how* you test theories; this lesson is *when and why*. CompTIA tests the methodology heavily — especially "what is the NEXT step?" — so the exact order is worth real drill time.

## The seven steps (memorize the order)

1. Identify the problem (gather info, ask what changed)
2. Establish a theory of probable cause (simple/likely first)
3. Test the theory (wrong → back to step 2)
4. Establish a plan of action
5. Implement the solution, or escalate
6. Verify full system functionality (+ preventive measures)
7. Document findings, actions, and outcomes

## Common misconceptions (and fixes)

- **"Fix first, ask later."** Skipping step 1 leads to fixing the wrong thing. Gather facts first.
- **"Escalating is failing."** It's a skill — routing a problem to the right person is the correct move when it's beyond your access/skill.
- **"Documentation is optional."** It's step 7 for a reason: it saves the next person's time and builds history (ties to 12-01).
- **"A failed theory means move on to the fix."** No — a failed test loops **back to step 2**, not forward.

## Pacing guidance

- ~30 minutes. Lead with the doctor analogy (§4) — diagnose, test, then treat.
- Drill the **order** and the **loop-back** (step 3 → step 2). Most exam misses are order errors.
- The paper walk-through (§9) is the payoff; have learners narrate the loop-back aloud.
- Where learners stall: the exact order of steps 4–6, and remembering that prevention lives in step 6.

## How CompTIA tends to test it

- "What is the NEXT step?" given a scenario mid-process.
- The exact sequence and names of the seven steps.
- The loop-back from a disproven theory.
- Escalation and documentation as required parts of the process.

## Accuracy note (Prime Directive #7)

Concept lesson. **No commands are run** — real command-line tools begin in Lesson 14-02. Nothing is fabricated.

## Extension ideas (fast learners)

- Approaches: top-down, bottom-up, and divide-and-conquer (by OSI layer).
- "What changed?" as the single fastest diagnostic question.
- How change management and documentation feed back into faster future fixes.

## Support ideas (struggling learners)

- Give the doctor-visit table (§4) as the anchor; map each row to a step.
- Use a memory phrase: "find it, guess it, test it, plan it, fix it, check it, write it."
- Have them number the steps repeatedly until the order is automatic before adding nuance.

## Where this leads

Next is 14-02 (ping, tracert, ipconfig, nslookup) — the real Windows tools used to **test theories** (step 3) and **verify** fixes (step 6).

---
_NetworkAcademy+ · Teaching Notes · CompTIA Network+ N10-009 · NA-M14-L01 · Module 14_
