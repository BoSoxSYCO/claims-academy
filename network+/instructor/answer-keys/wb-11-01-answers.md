---
answer_key_for: NA-M11-L01
module: 11
lesson: 01
unit: 8
covers: [quiz-11-01, wb-11-01-fill-in-the-blank, wb-11-01-matching, wb-11-01-label-the-diagram, wb-11-01-short-answer, wb-11-01-hands-on-observation, wb-11-01-vocabulary-review, wb-11-01-reflection]
objective_ids: ["2.3"]
---

# 🔒 Instructor Answer Key — Lesson 11-01: VLANs — Why We Split One Switch

> **Instructor-only.** Do not print with student copies. Answers map to N10-009 objective **2.3**.

---

## Quiz 11-01 — answers & explanations

**1. What is a VLAN? → B) A group of switch ports acting as their own separate network.**
It's a logical (software) split, not new hardware (A), a cable (C), or a router-only setting (D).

**2. A VLAN is its own → B) broadcast domain.**
Broadcasts stay inside the VLAN. It is not a power supply (C) or cable type (D); "collision only" (A) is wrong — VLANs separate broadcast domains, not just collision domains.

**3. Different-VLAN PCs need a → B) router (Layer 3).**
Moving between networks is a router's job. Cable length (A), power (C), or a faster switch (D) don't cross VLANs.

**4. Benefit of VLANs → B) Security through segmentation.**
VLANs reduce broadcasts (not increase, A), give each VLAN its own subnet (not one giant subnet, C), and improve performance (not slow it, D).

**5. Default VLAN → B) VLAN 1.**
Every port starts in VLAN 1. There is no VLAN 0 (A); 100 (C) and 4094 (D) are valid IDs but not the default.

**6. True or false — must buy a switch per VLAN. → FALSE.**
A VLAN is created in **software** on one switch; no new hardware is needed. Accept any answer that says false and mentions software/one switch.

**7. Each VLAN is usually its own → A) subnet.**
E.g., VLAN 10 = 192.168.10.0/24. Not a password (B), cable color (C), or OS (D).

**8. Matching → VLAN = C; Segmentation = B; VLAN ID = A.**
Full credit requires all three.

**9. Fill in the blank → stays inside (within) VLAN 10.**

**10. Scenario (sample full-credit answer):**
Put Sales, Engineering, and Guests each in their **own VLAN** (own broadcast domain + subnet). Guests can no longer reach internal servers because VLANs are isolated by default. To let Sales and Engineering share a printer across VLANs, add a **router / Layer 3 device** to route between those two VLANs (inter-VLAN routing, Lesson 11-06). Award credit for isolation + a router for controlled cross-VLAN access.

**Score band:** 9–10 ✅ · 7–8 🟡 review benefits/routing · 5–6 🟠 reteach broadcast-domain link · <5 🔴 redo with the office analogy.

---

## Worksheet 11.1.A — Fill in the Blank (2 pts each)

1. **VLAN** &nbsp; 2. **broadcast domain** &nbsp; 3. **router** &nbsp; 4. **subnet** &nbsp; 5. **segmentation**
6. **software** &nbsp; 7. **1** &nbsp; 8. **4094** &nbsp; 9. **security** &nbsp; 10. **performance**

**Challenge (+2):** They're in different broadcast domains/subnets; crossing between networks needs a router, which isn't present by default.

---

## Worksheet 11.1.B — Matching (2 pts each)

**Part 1:** 1. VLAN → **C** · 2. Broadcast domain → **E** · 3. Segmentation → **B** · 4. VLAN ID → **A** · 5. Default VLAN → **D**

**Part 2:** 6. Security → **G** · 7. Performance → **F** · 8. Flexibility → **H**

9. **router** &nbsp; 10. **subnet**

---

## Worksheet 11.1.C — Label the Diagram (2 pts each)

1. **192.168.10.0/24** &nbsp; 2. **192.168.20.0/24** &nbsp; 3. **inside** &nbsp; 4. **inside** &nbsp; 5. **router**
6. **one (1)** &nbsp; 7. **domain** &nbsp; 8. **1** &nbsp; 9. **1 to 4094** &nbsp; 10. **no**

---

## Worksheet 11.1.D — Short Answer (4 pts each)

1. As a switch grows, one big broadcast domain gets noisy and offers no separation; a VLAN splits it into smaller, isolated networks.
2. A separate **broadcast** domain — broadcasts sent in one VLAN stay inside it and don't reach other VLANs.
3. **Security** (guests can't reach payroll), **performance** (fewer broadcasts per device), **flexibility** (group by job, not seat).
4. Different VLANs are different networks/subnets; moving between networks is Layer 3, which needs a **router**.
5. A VLAN is like adding **interior walls** to one open office — same building (switch), separate rooms (VLANs).

---

## Worksheet 11.1.E — Hands-on Planning

- Completion-based. Full credit for a labeled two-VLAN plan: two named VLANs, port assignments, and two different subnets.
- **6.** Because the two VLANs are separate networks; a router is needed to move traffic between them.

> **Accuracy note (Prime Directive #7):** this is a paper-planning exercise — no switch commands are run, so no output is claimed. The live Dell 3424 configuration and its verified output come in Lesson 11-02.

---

## Worksheet 11.1.F — Vocabulary Review (2 pts each)

**Part 1:** 1. VLAN → **C** · 2. VLAN ID → **A** · 3. Default VLAN → **B** · 4. Segmentation → **E** · 5. Broadcast domain → **D**

**Part 2 (accept close wording):**
6. A broadcast domain — it keeps broadcasts inside the VLAN.
7. It's the default everything starts in, so leaving it unused avoids mixing management with real traffic and is a common security practice.
8. Guests/untrusted devices can't reach internal systems.
9. People can move seats and still be in the right network for their role.
10. A router (Layer 3 device).

---

## Worksheet 11.1.G — Reflection

Not graded for correctness. Full marks for honest, complete answers. Item 3 (what's fuzzy) flags what to revisit before the 11-02 build.

---
_NetworkAcademy+ · Answer Key 11-01 · CompTIA Network+ N10-009 · Instructor materials_
