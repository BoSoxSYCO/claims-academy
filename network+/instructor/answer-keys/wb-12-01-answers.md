---
answer_key_for: NA-M12-L01
module: 12
lesson: 01
unit: 9
covers: [quiz-12-01, wb-12-01-fill-in-the-blank, wb-12-01-matching, wb-12-01-label-the-diagram, wb-12-01-short-answer, wb-12-01-hands-on-observation, wb-12-01-vocabulary-review, wb-12-01-reflection]
objective_ids: ["3.2"]
---

# 🔒 Instructor Answer Key — Lesson 12-01: Documentation — Diagrams, Labels, and IPAM

> **Instructor-only.** Do not print with student copies. Answers map to N10-009 objective **3.2**.

---

## Quiz 12-01 — answers & explanations

**1. Physical diagram shows → B) devices, ports, and cables.**
IPs/VLANs (A) are logical; internet routes (C) and the exam schedule (D) are wrong.

**2. Logical diagram shows → B) IP addresses, subnets, and VLANs.**
Cable colors (A), rack screws (C), and serials (D) are physical/inventory details.

**3. IPAM → B) track which IP addresses are used and free.**
Not cables (A), cooling (C), or racks (D).

**4. Label a cable → B) at both ends.**
One end (A) still forces tracing; never (C) and color-only (D) are wrong.

**5. Asset inventory → B) all devices you own and their details.**
Normal traffic (A) is a baseline; not just cables (C) or passwords (D).

**6. True or false — stale docs are as good as current. → FALSE.**
Out-of-date documentation misleads and sends you the wrong way — worse than none. Accept any answer that says false and notes it misleads.

**7. Baseline → B) know what "normal" looks like to spot changes.**
Not Wi-Fi speed (A), crimping (C), or hiding an SSID (D).

**8. Matching → Physical = B (how is it wired?); Logical = C (how does traffic flow?); IPAM = A (which IPs are used?).**
Full credit requires all three.

**9. Fill in the blank → rack diagram.**

**10. Scenario (sample full-credit answer):**
(1) **Physical diagram** — shows devices, ports, and cables, so the tech can trace how it's wired. (2) **Logical diagram** — shows IPs, subnets, and VLANs, so they can trace traffic. (3) **IPAM** — shows which IP addresses are used and free, so they avoid conflicts. Award credit for these three (a rack diagram or inventory is acceptable as a bonus).

**Score band:** 9–10 ✅ · 7–8 🟡 review physical vs. logical · 5–6 🟠 redo the doc types · <5 🔴 reteach with the building analogy.

---

## Worksheet 12.1.A — Fill in the Blank (2 pts each)

1. **physical** &nbsp; 2. **logical** &nbsp; 3. **IPAM** &nbsp; 4. **conflict** &nbsp; 5. **rack**
6. **baseline** &nbsp; 7. **inventory** &nbsp; 8. **label** &nbsp; 9. **both** &nbsp; 10. **change**

**Challenge (+2):** It confidently points you the wrong way, so you waste time chasing a layout that no longer exists.

---

## Worksheet 12.1.B — Matching (2 pts each)

**Part 1:** 1. Physical diagram → **C** · 2. Logical diagram → **A** · 3. Rack diagram → **B** · 4. IPAM → **E** · 5. Baseline → **D**

**Part 2:** 6. Physical diagram → **H** · 7. Logical diagram → **I** · 8. IPAM → **F** · 9. Asset inventory → **G**

10. **Both ends.**

---

## Worksheet 12.1.C — Label the Diagram (2 pts each)

1. **Physical** &nbsp; 2. **Logical** &nbsp; 3. **VLANs** &nbsp; 4. **IPAM** &nbsp; 5. **Baseline**
6. **Physical diagram** &nbsp; 7. **Logical diagram** &nbsp; 8. **IPAM** &nbsp; 9. **both** &nbsp; 10. **on every change**

---

## Worksheet 12.1.D — Short Answer (4 pts each)

1. It shows what exists and how it connects, so you can fix the problem fast instead of guessing the layout.
2. **Physical** shows real devices, ports, and cables (trace a cable); **logical** shows IPs, subnets, and VLANs (trace a packet).
3. **IPAM** tracks every IP address (used/free/assigned); it prevents **IP conflicts** and confusion.
4. A **baseline** records normal behavior; you compare current behavior to it to spot what changed.
5. Documentation is a building's **blueprints** (physical), **floor plan** (logical), **room signs** (labels), and **directory** (IPAM/inventory) — anyone can navigate it.

---

## Worksheet 12.1.E — Hands-on Documentation

- Steps 1–3, 6: completion/short answers.
- **2.** The learner's real cable endpoints.
- **4.** Their laptop's actual IPv4 (from `ipconfig`).
- **5.** Three real rows with **no** shared IP.
- **7.** Usually the logical or physical diagram, with a reason — full credit for a thoughtful answer.

> **Accuracy note (Prime Directive #7):** `ipconfig` is a genuine Windows command; the learner records their **own** addresses. No fabricated device data.

---

## Worksheet 12.1.F — Vocabulary Review (2 pts each)

**Part 1:** 1. Physical diagram → **C** · 2. Logical diagram → **E** · 3. IPAM → **A** · 4. Asset inventory → **B** · 5. Baseline → **D**

**Part 2 (accept close wording):**
6. A physical diagram showing where each device sits in an equipment rack, top to bottom.
7. So you know both endpoints without tracing the cable.
8. Every device you own — model, serial, location, and owner.
9. Compare current behavior to the recorded normal to spot changes.
10. Stale documentation misleads; current docs let anyone fix and learn the network.

---

## Worksheet 12.1.G — Reflection

Not graded for correctness. Full marks for honest, complete answers. Item 3 surfaces the real upkeep challenge (update on change, not later).

---
_NetworkAcademy+ · Answer Key 12-01 · CompTIA Network+ N10-009 · Instructor materials_
