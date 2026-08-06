---
id: NA-M11-L03
module: 11
lesson: 03
title: "Trunks, Tagging (802.1Q), and Access Ports"
unit: 8
objective_ids: ["2.3"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E2
prerequisites: ["NA-M11-L01", "NA-M11-L02"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-06"
---

# [Module 11 · Lesson 03] Trunks, Tagging (802.1Q), and Access Ports

> **Unit:** Unit 8 — Network Implementation · **Time:** ~30 min · **Equipment:** E2 (your laptop + the Dell PowerConnect 3424)
> **You'll need first:** VLAN concepts (11-01) and how to create a VLAN (11-02).

You can build VLANs on one switch. But what happens when VLAN 10 needs to reach the **other** switch, or the router? A single cable has to carry **many** VLANs at once — and the switch on the far end must know which frame belongs to which VLAN. That's what a **trunk** and **802.1Q tagging** do. This lesson explains both, next to the **access port** you already met.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain the difference between an **access port** and a **trunk port**.
- [ ] Describe what **802.1Q tagging** adds to a frame and why.
- [ ] Explain the **native VLAN** on a trunk.
- [ ] Configure a basic trunk on the Dell 3424 (with `[TO VERIFY ON HARDWARE]` notes).

---

## 2. Introduction — why this matters

Imagine a mailroom in a building with many departments. Inside each department, mail has no department label — everyone there is in the same group. But the **one hallway** that connects all departments to the front desk carries mail for **every** department at once. To keep it straight, each envelope in that hallway gets a **label** saying which department it's for.

A switch works the same way. An **access port** is inside one department — it carries one VLAN, and the device plugged in doesn't need labels. But the link between two switches (or a switch and a router) is the **hallway**: it must carry many VLANs on one cable. That link is a **trunk**, and each frame on it gets a **tag** saying which VLAN it belongs to.

Without trunks, every VLAN would need its own separate cable between switches. That doesn't scale. One trunk carries them all.

🎯 **Exam tip:** Access port = one VLAN, no tag. Trunk = many VLANs, tagged with 802.1Q. Know this cold.

🔧 **Lab link:** You'll set a port to trunk mode on your Dell 3424 so it can carry VLAN 10 and VLAN 20 together.

---

## 3. Simple explanation

### Access port vs. trunk port

- An **access port** carries traffic for **one** VLAN. The device (a PC, printer) has no idea VLANs exist. This is what you set in Lesson 11-02.
- A **trunk port** carries traffic for **many** VLANs on one link. It's used switch-to-switch or switch-to-router.

### What a tag is (802.1Q)

On a trunk, frames from different VLANs share one wire. So the switch adds a small label — a **VLAN tag** — inside each frame. The standard for this is **802.1Q** (say "eight-oh-two-dot-one-Q"). The tag holds the **VLAN ID**, so the switch on the other end knows exactly which VLAN the frame belongs to.

```
   ACCESS LINK (one VLAN, no tag):
     PC ── g1 [VLAN 10] ── switch        (frame has no VLAN tag)

   TRUNK LINK (many VLANs, tagged):
     switch ══ g24 [TRUNK] ══ switch
       frames carry a tag:  [VLAN 10]…  [VLAN 20]…  [VLAN 10]…
```

The tag is added when a frame **enters** the trunk and removed when it **leaves** onto an access port. The end devices never see it.

### The native VLAN

One VLAN on a trunk is special: the **native VLAN**. Its frames cross the trunk with **no tag**. By default the native VLAN is **VLAN 1**. It exists for older devices that don't understand tags. For safety, many networks change the native VLAN to an unused number and never put real devices on it.

### Putting it together

- Ports to **PCs and printers** → **access** (one VLAN).
- Links between **switches, or switch to router** → **trunk** (many VLANs, 802.1Q tags).
- On a trunk, one VLAN (the **native**) is untagged.

> **The big idea:** An **access port** carries **one** VLAN with **no tag** (for end devices). A **trunk port** carries **many** VLANs on one link, and tags each frame with **802.1Q** so the far end knows the VLAN. One VLAN on the trunk — the **native VLAN** (default VLAN 1) — travels **untagged**. Trunks are how VLANs move between switches and to the router.

💡 **Tip:** "Tag" = a sticky note on each frame that says its VLAN number. Removed before it reaches a PC.

⚠️ **Watch out:** Both ends of a trunk must agree on the **native VLAN**. A mismatch causes traffic from one VLAN to leak into another — a real exam gotcha and a security risk.

---

## 4. Real-world analogy

> **"A trunk is the mailroom hallway — it carries every department's mail on one path, and each envelope is labeled with its department."**

| Mailroom | Switch |
|----------|--------|
| Inside a department (no label needed) | Access port (one VLAN, no tag) |
| The shared hallway | Trunk port (many VLANs) |
| Label on each envelope | 802.1Q tag (VLAN ID) |
| The "default" unlabeled pile | Native VLAN (untagged) |

Inside a department, no labels. In the shared hallway, every envelope is labeled so it reaches the right department.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Trunk port** | | A switch port that carries many VLANs on one link. |
| **802.1Q** | eight-oh-two-dot-one-Q | The standard that tags a frame with its VLAN ID. |
| **VLAN tag** | | The small label inside a frame that names its VLAN. |
| **Native VLAN** | | The one VLAN whose frames cross a trunk untagged (default VLAN 1). |
| **Access port** | | A port that carries traffic for exactly one VLAN. |

---

## 6. ASCII diagram

```
   ACCESS vs. TRUNK

   ACCESS PORT  (one VLAN, no tags)
     [PC]── g1 ──[ VLAN 10 ]── switch

   TRUNK PORT   (many VLANs, 802.1Q tags)
     switch A ══ g24 ════════ g24 ══ switch B
                  │  carries VLAN 10 + VLAN 20  │
                  └─ frames tagged: [10][20][10] ─┘
                     native VLAN (1) rides untagged

   PC↔switch = access.  switch↔switch / switch↔router = trunk.
```

_Access ports face devices; trunk ports face other switches and the router._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-11-03-trunk-vs-access-01.svg` (created and stored in this module's `assets/`)
> **Shows:** two switches joined by a trunk (labeled, carrying VLAN 10 + 20 with tags), and PCs on access ports (one VLAN each, no tag).
> **Key elements & labels:** access ports "VLAN 10 / VLAN 20 (no tag)", trunk link "802.1Q — VLAN 10 + 20 tagged", a note "native VLAN 1 = untagged".
> **Color meaning:** each VLAN has a color **and** a text label; trunk vs. access is marked in words, not color alone.
> **Flow direction:** PCs on the left/right (access), the trunk across the middle (switch to switch).
> **Alt text (required):** "Two switches connected by a trunk link in the middle. Each switch has PCs on access ports, where each access port carries a single VLAN — VLAN 10 or VLAN 20 — with no tag. The trunk link between the switches carries both VLAN 10 and VLAN 20 at once, and each frame on the trunk is tagged with its VLAN ID using 802.1Q. A note states the native VLAN, VLAN 1 by default, crosses the trunk untagged. Access ports face end devices; the trunk faces the other switch."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-11-03-trunk-cable-01.jpg`
> Two switches joined by one uplink cable. Alt text: "Two switches joined by a single uplink cable acting as a trunk that carries multiple VLANs."
>
> **Photo 2** — `img-11-03-cli-showtrunk-01.jpg`
> The CLI showing a trunk port's VLAN membership. Alt text: "The switch CLI showing a trunk port configured to carry several VLANs, with the native VLAN listed."

---

## 9. Hands-on lab

**Goal:** set port g24 on your Dell 3424 to trunk mode so it can carry VLAN 10 and VLAN 20.
**Why:** a trunk is required before two switches (or a switch and router) can share VLANs.

**You will need**
- Your laptop, the Dell PowerConnect 3424 (with VLAN 10 from 11-02; add VLAN 20 if not present). Estimated time: 15 min.

⚠️ **Before you start (safety):** Do not turn your **management** port into a trunk unless you know your session will survive. Use the console cable so a mistake doesn't lock you out.

### 9a. Step-by-step instructions

1. Log in and reach `console#`, then `configure`.
2. Make sure VLAN 20 exists (from 11-02 homework). If not:
   ```
   vlan database
   vlan 20
   exit
   ```
3. Set g24 to trunk mode and allow both VLANs:
   ```
   interface ethernet g24
   switchport mode trunk
   switchport trunk allowed vlan add 10,20
   exit
   ```
4. Leave config: `end`.
5. Verify: `show interfaces switchport ethernet g24` (or `show vlan`).
6. Save: `copy running-config startup-config`.

> **[TO VERIFY ON HARDWARE]** The exact trunk commands and the verification command name vary by PowerConnect firmware (e.g., `general` vs. `trunk` mode wording). Confirm against your switch's guide — do not assume this is word-for-word.

### 9b. Expected results

The verify command should show g24 as a **trunk** carrying VLANs **10 and 20**, with a native VLAN listed. **[TO VERIFY ON HARDWARE]**:

```
 Port    Mode    VLANs allowed   Native
 g24     trunk   10,20           1
```

- ✅ **You did it if:** g24 shows trunk mode with VLANs 10 and 20 allowed, and the save succeeds.

### 9c. Verify it worked

1. Confirm g24 is in trunk mode, not access.
2. Confirm both VLAN 10 and VLAN 20 are allowed on it.

### 9d. Reset / roll back

To undo, set g24 back to an access port in VLAN 1:

```
console(config)# interface ethernet g24
console(config-if)# switchport mode access
console(config-if)# switchport access vlan 1
console(config-if)# end
console# copy running-config startup-config
```

> 🔧 **Home-lab continuity:** leave g24 as a trunk carrying VLAN 10 and 20 — the uplink for Lesson 11-06 (inter-VLAN routing).

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Native VLAN mismatch on the two ends | Traffic leaks between VLANs | Set the same native VLAN on both trunk ends |
| Trunking a port that faces a PC | The PC can't use tagged traffic | PCs use **access** ports, not trunks |
| Forgetting to allow a VLAN on the trunk | That VLAN can't cross | `switchport trunk allowed vlan add <id>` |
| Leaving real devices on VLAN 1 (native) | Weaker security | Use a spare unused native VLAN |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| VLAN 20 can't reach the other switch | VLAN 20 not allowed on the trunk | Add it: `switchport trunk allowed vlan add 20` |
| Odd cross-VLAN traffic | Native VLAN mismatch | Make both ends' native VLAN match |
| PC on a trunk port has no network | PC can't read tags | Change that port to access |
| Trunk shows access after reboot | Never saved | `copy running-config startup-config` |

---

## 12. Lesson summary

- **Access port:** one VLAN, no tag — for PCs and printers.
- **Trunk port:** many VLANs on one link — for switch-to-switch and switch-to-router.
- **802.1Q** adds a **tag** (the VLAN ID) to each frame on a trunk.
- The **native VLAN** (default VLAN 1) rides the trunk **untagged**; both ends must match.

**One-sentence recap:** Access ports carry one untagged VLAN for devices, while trunk ports carry many VLANs on one link by tagging each frame with 802.1Q — with one native VLAN left untagged.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-11-03-fill-in-the-blank.md`
2. **Matching** — `wb-11-03-matching.md`
3. **Label the diagram** — `wb-11-03-label-the-diagram.md` (access vs. trunk)
4. **Short answer** — `wb-11-03-short-answer.md`
5. **Hands-on observation** — `wb-11-03-hands-on-observation.md` (build a trunk)
6. **Vocabulary review** — `wb-11-03-vocabulary-review.md`
7. **Reflection** — `wb-11-03-reflection.md`

**Quick written warm-up (do this now):** Which port type carries many VLANs? What standard tags the frames?

Many VLANs: ____________  Tagging standard: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-11-03-knowledge-check.md`.)

1. An **access port** carries how many VLANs? *(Objective: access)*
   - A) None
   - B) Exactly one
   - C) Many, tagged
   - D) All of them, always

2. A **trunk port** is used to… *(Objective: trunk)*
   - A) connect a single PC
   - B) carry many VLANs between switches (or to a router)
   - C) charge the switch
   - D) replace a router

3. What does **802.1Q** do? *(Objective: tagging)*
   - A) Assigns IP addresses
   - B) Tags each frame with its VLAN ID
   - C) Sets the switch password
   - D) Speeds up the port

4. The **native VLAN** on a trunk is… *(Objective: native VLAN)*
   - A) tagged twice
   - B) carried untagged
   - C) never used
   - D) always VLAN 100

5. By default, the native VLAN is… *(Objective: native VLAN)*
   - A) VLAN 0
   - B) VLAN 1
   - C) VLAN 10
   - D) VLAN 4094

6. **True or false —** A PC should be plugged into a trunk port. Explain in one sentence. *(Objective: access vs trunk)*

7. Where is a VLAN tag **removed**? *(Objective: tagging)*
   - A) When a frame leaves the trunk onto an access port
   - B) Never
   - C) Inside the PC
   - D) At the router only

8. **Matching —** match each term to its meaning. *(Objective: vocabulary)*
   - ___ Access port &nbsp;&nbsp; ___ Trunk port &nbsp;&nbsp; ___ Native VLAN
   - A) Carries many VLANs, tagged
   - B) Untagged VLAN on a trunk
   - C) Carries one VLAN, no tag

9. Fill in the blank: A native VLAN ____________ on the two trunk ends causes VLAN traffic to leak. *(Objective: safety)*

10. **Scenario —** You have two switches. VLAN 10 and VLAN 20 exist on both, and users on switch A can't reach the same VLAN on switch B. What kind of link do the switches need between them, and what must you allow on it? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-11-03-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-11-03-trunks-tagging.md`. In brief:

- **Objective in one line:** learners distinguish access vs. trunk ports, explain 802.1Q tagging and the native VLAN, and build a basic trunk.
- **Common misconceptions:** "PCs go on trunks"; "the native VLAN is tagged." Correct both.
- **Pacing:** ~30 min. The mailroom-hallway analogy carries the tagging idea; spend time on native-VLAN matching.
- **How CompTIA tests it:** access = 1 untagged VLAN; trunk = many tagged (802.1Q); native VLAN untagged and must match.
- **Accuracy note (Prime Directive #7):** exact PowerConnect 3424 trunk commands/output vary by firmware; every unverified line is marked **[TO VERIFY ON HARDWARE]**.
- **Extension idea:** discuss double-tagging (Q-in-Q) and VLAN hopping attacks as a security bridge to Module 13.

---

## 17. Cheat sheet

> **Quick reference — Access vs. trunk (802.1Q)**
>
> | | Access port | Trunk port |
> |---|-------------|------------|
> | VLANs carried | **one** | **many** |
> | Tagging | none | **802.1Q** tag per frame |
> | Faces | a PC/printer | another switch or a router |
> | Native VLAN | n/a | one VLAN **untagged** (default 1) |
>
> **Dell 3424 trunk (basic):**
> ```
> interface ethernet g24
> switchport mode trunk
> switchport trunk allowed vlan add 10,20
> ```
> - ⚠️ Native VLAN must **match** on both ends. Save when done.
> - **[TO VERIFY ON HARDWARE]** — confirm exact wording on your firmware.
>
> _(Full version: `resources/cheat-sheets/vlans-and-switching-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Trunk port** — A switch port that carries traffic for many VLANs on one link.
- **802.1Q** — The IEEE standard that tags each frame with its VLAN ID so trunks can carry many VLANs.
- **VLAN tag** — The small label inside a frame that names which VLAN it belongs to.
- **Native VLAN** — The one VLAN whose frames cross a trunk untagged (default VLAN 1).

(Access port was defined in Module 07 and is reused here.)

---

## 19. Homework

- **Practice:** On paper, mark which switch ports would be access and which would be trunk for a two-switch network.
- **Spaced review:** Explain access vs. trunk to someone, using the mailroom analogy.
- **Preview:** Next lesson, **Spanning Tree Protocol** — how switches avoid loops.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Which is clearer to me now — access ports or trunks? _______________________
3. Why does the native VLAN need to match on both ends? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain access vs. trunk ports.
- [ ] I know 802.1Q tags each frame with its VLAN ID.
- [ ] I can explain the native VLAN and why it must match.
- [ ] I set a port to trunk mode on the switch (or read the steps).
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know the next lesson covers loop prevention (Spanning Tree).

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M11-L03** — "Trunks, Tagging (802.1Q), and Access Ports" · Module 11 · Unit 8_
