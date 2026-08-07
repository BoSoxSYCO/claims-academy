---
answer_key_for: NA-M11-L06
module: 11
lesson: 06
unit: 8
covers: [quiz-11-06, wb-11-06-fill-in-the-blank, wb-11-06-matching, wb-11-06-label-the-diagram, wb-11-06-short-answer, wb-11-06-hands-on-observation, wb-11-06-vocabulary-review, wb-11-06-reflection]
objective_ids: ["2.3"]
---

# 🔒 Instructor Answer Key — Lesson 11-06: Inter-VLAN Routing

> **Instructor-only.** Do not print with student copies. Answers map to N10-009 objective **2.3**.

---

## Quiz 11-06 — answers & explanations

**1. Why can't two VLANs talk on their own? → B) They are separate networks and need a Layer 3 device.**
VLANs are separate broadcast domains/subnets; crossing between networks is a Layer 3 job. They don't share a cable (A) or subnet (D), and "turned off" (C) is wrong.

**2. Inter-VLAN routing moves traffic → B) between VLANs.**
"Inter" = between. Not inside one VLAN (A), between cables (C), or between PC ports (D).

**3. Router-on-a-stick uses a → A) trunk.**
The trunk carries every VLAN on one link to the router. Crossover (B), console (C), and power (D) don't carry VLAN traffic.

**4. A Layer 3 switch → B) can switch AND route.**
That's the whole point — both jobs in one box. Not switch-only (A), router-only (C), and it does have VLANs (D).

**5. Each VLAN must have its own → B) subnet and gateway address.**
Not a password (A), cable color (C), or its own switch (D).

**6. True or false — two VLANs share one subnet and route fine. → FALSE.**
Each VLAN needs its **own** subnet; sharing one breaks routing (the router can't tell the networks apart). Accept any answer that says false and notes separate subnets.

**7. Router holds each VLAN's → A) default gateway address.**
Via a sub-interface per VLAN. Not just a MAC (B), a Wi-Fi password (C), or a serial number (D).

**8. Matching → Router-on-a-stick = B; Layer 3 switch = A; Sub-interface = C.**
Full credit requires all three.

**9. Fill in the blank → default gateway.**

**10. Scenario (sample full-credit answer):**
On a small budget, use **router-on-a-stick**: connect a router to the switch by a **trunk** carrying VLAN 10 and VLAN 20, and give the router a **gateway (sub-interface)** for each VLAN. Each VLAN needs its **own subnet** and its **own gateway address**, and each PC must point at its VLAN's gateway. Then Sales can reach the Engineering printer. Award credit for router-on-a-stick + per-VLAN subnet/gateway.

**Score band:** 9–10 ✅ · 7–8 🟡 review the two methods · 5–6 🟠 redo subnet/gateway rule · <5 🔴 reteach with the locked-rooms analogy.

---

## Worksheet 11.6.A — Fill in the Blank (2 pts each)

1. **Layer 3** &nbsp; 2. **routing** &nbsp; 3. **between** &nbsp; 4. **router-on-a-stick** &nbsp; 5. **trunk**
6. **sub-interface** &nbsp; 7. **subnet** &nbsp; 8. **gateway** &nbsp; 9. **Layer 3** &nbsp; 10. **separate**

**Challenge (+2):** All VLAN-to-VLAN traffic shares that one trunk cable up to the router and back, so it can become a bottleneck.

---

## Worksheet 11.6.B — Matching (2 pts each)

**Part 1:** 1. Inter-VLAN routing → **C** · 2. Router-on-a-stick → **A** · 3. Layer 3 switch → **B** · 4. Sub-interface → **E** · 5. Default gateway → **D**

**Part 2 (R = router-on-a-stick, L = Layer 3 switch):** 6. **R** · 7. **L** · 8. **R** · 9. **L** · 10. **R**

---

## Worksheet 11.6.C — Label the Diagram (2 pts each)

1. **Router-on-a-stick** &nbsp; 2. **Layer 3** &nbsp; 3. **trunk** &nbsp; 4. **192.168.10.1** &nbsp; 5. **192.168.10.1** &nbsp; 6. **cheap**
7. **Layer 3** &nbsp; 8. **subnet** &nbsp; 9. **their (VLAN 10) gateway / the router** &nbsp; 10. **Layer 3 switch**

---

## Worksheet 11.6.D — Short Answer (4 pts each)

1. Each VLAN is a separate network/subnet, and moving between networks is a Layer 3 (router) job — so they can't talk without one.
2. Router-on-a-stick connects one router to the switch by a **trunk**; the trunk carries all VLANs on one cable, and the router has a gateway per VLAN to route between them.
3. A Layer 3 switch does the switching **and** routing inside one box (no separate router, no single-trunk bottleneck).
4. So the router can tell the networks apart and route correctly; two VLANs on one subnet break routing.
5. VLANs are **locked rooms** (separate); the router is a **guarded door** that lets chosen traffic pass between them.

---

## Worksheet 11.6.E — Hands-on Build

- Steps 1, 4, 5, 6, 8: completion/short answers.
- **2./3.** The learner's chosen gateways (own subnet each).
- **7.** Their actual ping reply line (varies by machine).
- **9.** "A separate router (router-on-a-stick)" if the switch was Layer 2 only.

> **Accuracy note (Prime Directive #7):** whether a given PowerConnect 3424 supports Layer 3 (VLAN IP + `ip routing`) varies by model/firmware; the lesson marks samples `[TO VERIFY ON HARDWARE]` and offers router-on-a-stick when the switch is Layer 2 only. The learner records their **own** ping result. No fabricated device output.

---

## Worksheet 11.6.F — Vocabulary Review (2 pts each)

**Part 1:** 1. Inter-VLAN routing → **C** · 2. Router-on-a-stick → **E** · 3. Layer 3 switch → **A** · 4. Sub-interface → **B** · 5. Default gateway → **D**

**Part 2 (accept close wording):**
6. VLANs are separate networks; crossing networks needs Layer 3.
7. It carries all VLANs on one link from the switch to the router.
8. Routing happens inside the switch — faster, no single-trunk bottleneck.
9. It's the address a VLAN's devices send traffic to when leaving the VLAN.
10. So the router can tell the networks apart and route between them.

---

## Worksheet 11.6.G — Reflection

Not graded for correctness. Full marks for honest, complete answers. Item 4 (what to keep separate) shows they grasp that routing is a controlled exception, not a free-for-all.

---
_NetworkAcademy+ · Answer Key 11-06 · CompTIA Network+ N10-009 · Instructor materials_
