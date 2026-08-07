---
answer_key_for: NA-M12-L02
module: 12
lesson: 02
unit: 9
covers: [quiz-12-02, wb-12-02-fill-in-the-blank, wb-12-02-matching, wb-12-02-label-the-diagram, wb-12-02-short-answer, wb-12-02-hands-on-observation, wb-12-02-vocabulary-review, wb-12-02-reflection]
objective_ids: ["3.1"]
---

# 🔒 Instructor Answer Key — Lesson 12-02: Monitoring, Logs, SNMP, and Alerts

> **Instructor-only.** Do not print with student copies. Answers map to N10-009 objective **3.1**.

---

## Quiz 12-02 — answers & explanations

**1. Monitoring → B) watching a network's health all the time.**
Not a yearly fix (A), a diagram (C), or buying gear (D).

**2. Polling → A) the manager asks devices for numbers.**
That's the pull. A device pushing (B) is a trap; C and D are unrelated.

**3. SNMP trap → B) an alert a device pushes on its own.**
The manager asking (A) is polling; not a cable (C) or password (D).

**4. Most urgent Syslog severity → C) 0.**
Lower is worse: 0 Emergency is the top. 7 (A) is debug, the least urgent.

**5. Threshold → B) a limit that triggers an alert when crossed.**
Not a name (A), routing protocol (C), or switch (D).

**6. True or false — level 7 more urgent than level 0. → FALSE.**
Lower numbers are more urgent; **0 is worst**, 7 is debug detail. Accept any answer that says false and states 0 is worst.

**7. NetFlow → A) who talked to whom and how much.**
Not a password (B), cable length (C), or Wi-Fi channel (D).

**8. Matching → MIB = C (the catalog); OID = A (one item's address); Alert = B (warning at a threshold).**
Full credit requires all three.

**9. Fill in the blank → Polling pulls data; a trap pushes it.**

**10. Scenario (sample full-credit answer):**
Set up **monitoring** of the server's disk usage (e.g., via SNMP). Add a **threshold** — say, alert at 85% full. When usage crosses it, the tool sends an **alert** (email/message) to the admin, who clears space **before** the disk fills. Award credit for monitor + threshold (a specific limit) + alert acting **early**.

**Score band:** 9–10 ✅ · 7–8 🟡 review poll vs. trap · 5–6 🟠 redo severity direction · <5 🔴 reteach with the car-dashboard analogy.

---

## Worksheet 12.2.A — Fill in the Blank (2 pts each)

1. **monitoring** &nbsp; 2. **polling** &nbsp; 3. **trap** &nbsp; 4. **MIB** &nbsp; 5. **OID**
6. **Syslog** &nbsp; 7. **0** &nbsp; 8. **threshold** &nbsp; 9. **alert** &nbsp; 10. **NetFlow**

**Challenge (+2):** Polling is the manager **pulling** numbers on a schedule; a trap is a device **pushing** a warning the moment something breaks.

---

## Worksheet 12.2.B — Matching (2 pts each)

**Part 1:** 1. Polling → **B** · 2. SNMP trap → **C** · 3. MIB → **D** · 4. OID → **E** · 5. Threshold → **A**

**Part 2:** 6. 0 → **G** (Emergency) · 7. 3 → **I** (Error) · 8. 4 → **F** (Warning) · 9. 7 → **H** (Debug)

10. **Level 0** (lower is more urgent).

---

## Worksheet 12.2.C — Label the Diagram (2 pts each)

1. **SNMP** &nbsp; 2. **poll** &nbsp; 3. **trap** &nbsp; 4. **Syslog** &nbsp; 5. **0** &nbsp; 6. **7** &nbsp; 7. **NetFlow** &nbsp; 8. **threshold** &nbsp; 9. **alert**

10. **Pull.**

---

## Worksheet 12.2.D — Short Answer (4 pts each)

1. A network runs day and night and you can't watch every device by hand; tools watch for you and warn you early.
2. **Polling** = the manager pulls numbers from agents on a schedule; a **trap** = a device pushes a warning on its own when something breaks.
3. **MIB** = the catalog of items SNMP can ask about; **OID** = the address of one single item in that catalog.
4. Syslog severity goes 0–7 with **lower = more urgent**; 0 (Emergency) means unusable, while 7 (Debug) is just detail.
5. You set a **threshold** (a limit); when a value crosses it, an **alert** is sent. Example: "alert if a link is over 90% busy."

---

## Worksheet 12.2.E — Hands-on Observation

- Steps 1–5: the learner's real events (Source, message, Event ID vary by machine).
- **6.** The Error (Errors are more urgent than Warnings/Information).
- **7.** **Error** is closer to Syslog level 0 (more urgent).
- **8.** A monitoring tool with a threshold on Errors could email/alert automatically.

> **Accuracy note (Prime Directive #7):** Event Viewer is a genuine Windows tool; events vary by machine, so the sample list is marked `[TO VERIFY ON HARDWARE]` and the learner records their **own**. No fabricated output.

---

## Worksheet 12.2.F — Vocabulary Review (2 pts each)

**Part 1:** 1. Monitoring → **B** · 2. SNMP trap → **D** · 3. OID → **A** · 4. Severity level → **E** · 5. Log → **C**

**Part 2 (accept close wording):**
6. It sets a limit that, when crossed, triggers an alert.
7. To see who talked to whom and how much (network conversations).
8. The catalog of items SNMP can ask a device about.
9. Level 0 (Emergency) — lower numbers are more urgent.
10. Too many alerts, so real ones get ignored; avoid it by tuning thresholds to alert on what matters.

---

## Worksheet 12.2.G — Reflection

Not graded for correctness. Full marks for honest, complete answers. Item 4 shows whether they can connect a threshold to a real metric.

---
_NetworkAcademy+ · Answer Key 12-02 · CompTIA Network+ N10-009 · Instructor materials_
