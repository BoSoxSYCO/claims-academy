---
answer_key_for: NA-M11-L03
module: 11
lesson: 03
unit: 8
covers: [quiz-11-03, wb-11-03-fill-in-the-blank, wb-11-03-matching, wb-11-03-label-the-diagram, wb-11-03-short-answer, wb-11-03-hands-on-observation, wb-11-03-vocabulary-review, wb-11-03-reflection]
objective_ids: ["2.3"]
---

# 🔒 Instructor Answer Key — Lesson 11-03: Trunks, Tagging (802.1Q), and Access Ports

> **Instructor-only.** Do not print with student copies. Answers map to N10-009 objective **2.3**.

---

## Quiz 11-03 — answers & explanations

**1. Access port carries how many VLANs? → B) Exactly one.**
Access = one VLAN, no tag. "Many, tagged" (C) describes a trunk.

**2. Trunk port is used to → B) carry many VLANs between switches (or to a router).**
A single PC uses an access port (A). C and D are wrong — a trunk doesn't power or replace anything.

**3. 802.1Q does → B) Tags each frame with its VLAN ID.**
It doesn't assign IPs (A), set passwords (C), or change speed (D).

**4. Native VLAN is → B) carried untagged.**
It's the one VLAN whose frames cross the trunk with no tag. It is used (not C) and defaults to VLAN 1 (not 100, D).

**5. Default native VLAN → B) VLAN 1.**

**6. True or false — PC on a trunk port. → FALSE.**
PCs go on **access** ports; they don't understand VLAN tags. Accept any answer that says false and mentions access/PCs can't read tags.

**7. Tag removed → A) When a frame leaves the trunk onto an access port.**
The tag is added entering the trunk and stripped leaving onto access, so end devices never see it.

**8. Matching → Access port = C; Trunk port = A; Native VLAN = B.**
Full credit requires all three.

**9. Fill in the blank → mismatch (a native VLAN mismatch).**

**10. Scenario (sample full-credit answer):**
The switches need a **trunk** link between them, and you must **allow VLANs 10 and 20** on that trunk (`switchport trunk allowed vlan add 10,20`). Then same-VLAN users on both switches can reach each other. Award credit for "trunk" + "allow the needed VLANs."

**Score band:** 9–10 ✅ · 7–8 🟡 review native VLAN · 5–6 🟠 redo access-vs-trunk · <5 🔴 reteach with the mailroom analogy.

---

## Worksheet 11.3.A — Fill in the Blank (2 pts each)

1. **access** &nbsp; 2. **trunk** &nbsp; 3. **802.1Q** &nbsp; 4. **tag** &nbsp; 5. **native**
6. **one** &nbsp; 7. **many** &nbsp; 8. **untagged** &nbsp; 9. **switches** &nbsp; 10. **match**

**Challenge (+2):** The tag is stripped when the frame leaves the trunk onto the access port, so the PC receives a normal untagged frame.

---

## Worksheet 11.3.B — Matching (2 pts each)

**Part 1:** 1. Access port → **C** · 2. Trunk port → **D** · 3. 802.1Q → **A** · 4. VLAN tag → **E** · 5. Native VLAN → **B**

**Part 2 (A = access, T = trunk):** 6. **A** · 7. **T** · 8. **A** · 9. **T** · 10. **A**

---

## Worksheet 11.3.C — Label the Diagram (2 pts each)

1. **access** &nbsp; 2. **one** &nbsp; 3. **none** &nbsp; 4. **trunk** &nbsp; 5. **802.1Q** &nbsp; 6. **1**
7. **no** &nbsp; 8. **when it leaves the trunk onto an access port** &nbsp; 9. **native** &nbsp; 10. **trunk**

---

## Worksheet 11.3.D — Short Answer (4 pts each)

1. An **access** port carries one VLAN with no tag (for a device); a **trunk** port carries many VLANs on one link, tagged.
2. 802.1Q adds a **VLAN tag** (the VLAN ID) to each frame so the far switch knows which VLAN it belongs to — needed because a trunk mixes VLANs on one wire.
3. The **native VLAN** is the one VLAN whose frames cross the trunk **untagged** (default VLAN 1).
4. If the two ends disagree on the native VLAN, untagged frames get placed in the wrong VLAN, causing traffic to **leak** between VLANs (a security risk).
5. The trunk is the shared **hallway** carrying every department's mail; the **tag** is the label on each envelope so it reaches the right department.

---

## Worksheet 11.3.E — Hands-on Build

- Steps 1–3, 7, 9: completion checks.
- **4.** The learner's actual g24 mode line (wording varies by firmware).
- **5.** VLANs 10 and 20. **6.** Native VLAN (default 1, unless changed).
- **8.** Any real firmware difference — full credit for honest observation.

> **Accuracy note (Prime Directive #7):** trunk command syntax and the verification output vary by PowerConnect firmware; the lesson marks samples `[TO VERIFY ON HARDWARE]` and the learner records their **own** output. No fabricated output is claimed.

---

## Worksheet 11.3.F — Vocabulary Review (2 pts each)

**Part 1:** 1. Trunk port → **C** · 2. 802.1Q → **A** · 3. VLAN tag → **E** · 4. Native VLAN → **D** · 5. Access port → **B**

**Part 2 (accept close wording):**
6. To carry many VLANs between switches (or to a router) on one link.
7. Tags each frame with its VLAN ID so the far end knows the VLAN.
8. For frames/devices that don't use tags; it rides the trunk untagged.
9. **Access** — a PC can't read VLAN tags.
10. That VLAN's traffic can't cross the trunk.

---

## Worksheet 11.3.G — Reflection

Not graded for correctness. Full marks for honest, complete answers. Item 3 flags whether tagging or native VLAN needs a reteach.

---
_NetworkAcademy+ · Answer Key 11-03 · CompTIA Network+ N10-009 · Instructor materials_
