---
answer_key_for: NA-M11-L02
module: 11
lesson: 02
unit: 8
covers: [quiz-11-02, wb-11-02-fill-in-the-blank, wb-11-02-matching, wb-11-02-label-the-diagram, wb-11-02-short-answer, wb-11-02-hands-on-observation, wb-11-02-vocabulary-review, wb-11-02-reflection]
objective_ids: ["2.3"]
---

# 🔒 Instructor Answer Key — Lesson 11-02: Configuring VLANs on the Dell 3424

> **Instructor-only.** Do not print with student copies. Answers map to N10-009 objective **2.3**.

---

## Quiz 11-02 — answers & explanations

**1. Privileged → global config? → B) `configure`.**
`enable` (A) gets you into privileged mode; `configure` steps into global config. `show vlan` (C) displays; `exit` (D) backs out.

**2. Create/select VLAN 10? → A) `vlan 10`.**
The other three are not real commands on the switch.

**3. Carry one VLAN on a port? → B) `switchport mode access`.**
`trunk` (A) carries many VLANs; `no shutdown` (C) enables a port; `speed auto` (D) sets speed.

**4. Assign g1 to VLAN 10? → A) `switchport access vlan 10`.**
`interface vlan 10` (C) enters the VLAN interface, it doesn't assign a physical port. B and D aren't valid.

**5. Save for reboot? → B) `copy running-config startup-config`.**
`show running-config` (C) only displays; `reload` (D) reboots; `write vlan` (A) isn't the command.

**6. True or false — skip save and VLANs stay after reboot. → FALSE.**
Unsaved changes live only in running-config (memory) and are lost on reboot. Accept any answer that says false and mentions saving/startup-config.

**7. Show VLANs and ports? → B) `show vlan`.**

**8. Matching → Privileged = B (`#`); Global config = C (`(config)#`); Interface = A (`(config-if)#`).**
Full credit requires all three.

**9. Fill in the blank → access port.**

**10. Scenario (sample full-credit answer):**
Don't move g1 while you're managing **through** it. Instead, connect to the switch by the **console cable** (out-of-band) first, or set up another management port/VLAN, then move g1 into VLAN 10. That way losing g1's current network path doesn't lock you out. Award credit for recognizing the lockout risk and using console/another path before moving the managed port.

**Score band:** 9–10 ✅ · 7–8 🟡 review the command order · 5–6 🟠 redo the lab steps · <5 🔴 reteach modes + save.

---

## Worksheet 11.2.A — Fill in the Blank (2 pts each)

1. **enable** &nbsp; 2. **configure** &nbsp; 3. **name** &nbsp; 4. **interface** &nbsp; 5. **access**
6. **one** &nbsp; 7. **show vlan** &nbsp; 8. **startup-config** &nbsp; 9. **reboot** &nbsp; 10. **lock**

**Challenge (+2):** We verify first so we know the change took effect correctly before we make it permanent — saving a mistake just makes the mistake permanent.

---

## Worksheet 11.2.B — Matching (2 pts each)

**Part 1:** 1. `configure` → **B** · 2. `vlan 10` → **C** · 3. `switchport mode access` → **E** · 4. `switchport access vlan 10` → **A** · 5. `copy running-config startup-config` → **D**

**Part 2:** 6. User → **H (`>`)** · 7. Privileged → **I (`#`)** · 8. Global config → **F (`(config)#`)** · 9. Interface → **G (`(config-if)#`)**

10. **`show vlan`**

---

## Worksheet 11.2.C — Label the Diagram (2 pts each)

1. **Create** &nbsp; 2. **name** &nbsp; 3. **Assign a port** &nbsp; 4. **access** &nbsp; 5. **10**
6. **Verify + Save** &nbsp; 7. **show vlan** &nbsp; 8. **startup-config**

9. **create → assign → verify → save**
10. **The VLANs are lost on the next reboot** (they lived only in memory).

---

## Worksheet 11.2.D — Short Answer (4 pts each)

1. **Create** the VLAN (and name it), **assign** a port as an access port, then **verify and save**.
2. **running-config** is the live settings in memory now; **startup-config** is the saved copy loaded at boot. Changes aren't permanent until copied to startup-config.
3. Access mode tells the port it belongs to a single VLAN; setting the mode first makes the VLAN assignment behave as expected.
4. If you move the port you're managing **through** into a new VLAN, you lose your path and get locked out. Avoid it by managing via the console cable or another port first.
5. Because exact prompts/output vary by firmware; honestly marking unverified lines (Prime Directive #7) keeps us from presenting a guess as real output.

---

## Worksheet 11.2.E — Hands-on Build

- Steps 1–4, 6, 7, 9: completion checks — award for done + honest answers.
- **5.** The learner's actual VLAN 10 row (wording varies by firmware).
- **8.** Any real firmware difference they noticed — full credit for honest observation.

> **Accuracy note (Prime Directive #7):** the learner records **their own** `show vlan` output; the lesson's sample is marked `[TO VERIFY ON HARDWARE]`. No fabricated device output is claimed.

---

## Worksheet 11.2.F — Vocabulary Review (2 pts each)

**Part 1:** 1. Global configuration mode → **C** · 2. Interface mode → **A** · 3. Access port → **E** · 4. running-config → **B** · 5. startup-config → **D**

**Part 2 (accept close wording):**
6. You are in **interface mode**, changing one specific port.
7. So the settings survive a reboot; running-config alone is lost on power-off.
8. A port that carries traffic for exactly one VLAN.
9. The VLANs on the switch and which ports belong to each.
10. "In memory" = running-config (temporary); "saved" = startup-config (kept at boot).

---

## Worksheet 11.2.G — Reflection

Not graded for correctness. Full marks for honest, complete answers. Item 3 (the last command) should surface `copy running-config startup-config`.

---
_NetworkAcademy+ · Answer Key 11-02 · CompTIA Network+ N10-009 · Instructor materials_
