---
id: NA-M11-L02
module: 11
lesson: 02
title: "Configuring VLANs on the Dell 3424"
unit: 8
objective_ids: ["2.3"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E2
prerequisites: ["NA-M11-L01", "NA-M07-L06"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-06"
---

# [Module 11 · Lesson 02] Configuring VLANs on the Dell 3424

> **Unit:** Unit 8 — Network Implementation · **Time:** ~30 min · **Equipment:** E2 (your laptop + the Dell PowerConnect 3424 + a console or network cable)
> **You'll need first:** VLAN concepts (11-01) and how to log into the switch (07-06).

In Lesson 11-01 you planned two VLANs on paper. Now you **build** them on the real Dell PowerConnect 3424. You'll create a VLAN, give it a name, and assign ports to it. We go slowly, one command at a time, and we always save at the end.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Enter the switch's **configuration mode** safely.
- [ ] **Create** a VLAN and give it a name.
- [ ] **Assign** a port to a VLAN as an access port.
- [ ] **Verify** and **save** your work.

---

## 2. Introduction — why this matters

A plan on paper does nothing until you tell the switch. The switch only knows what you type. In Lesson 11-01 you decided VLAN 10 = "Home" and VLAN 20 = "Lab." Now you make those real so the ports actually separate.

This is your first time **changing** the switch, not just looking. That feels big — and it is. A wrong VLAN move can cut off the port you're managing from. So we take one careful step at a time, we **verify** after each change, and we **save** at the end. If anything looks wrong, there's a reset note at the bottom.

⚠️ **Watch out:** Never move the port you are managing the switch **through** into a new VLAN until you have another way in. That is the classic way to lock yourself out.

🔧 **Lab link:** This is home-lab stage **LAB-E** — creating and testing VLANs on the switch.

---

## 3. Simple explanation

You'll work in the switch's **command line (CLI)** — the text screen you reached in Lesson 07-06. The CLI has **modes**, like rooms you step into:

- **User mode** (`>`) — just looking.
- **Privileged mode** (`#`) — you typed `enable` to get here; you can see everything.
- **Global configuration mode** (`(config)#`) — you typed `configure`; you can now change settings.
- **Interface mode** (`(config-if)#`) — you picked one port to change.

### The three jobs

1. **Create the VLAN** (in global config): give it a number and a name.
2. **Assign a port** (in interface mode): set the port as an **access port** in that VLAN. An **access port** carries traffic for **one** VLAN — the device plugged in doesn't even know VLANs exist.
3. **Verify and save.**

### The commands, step by step

> **Note on output:** the exact prompts and messages below are shown as a beginner will typically see them on a PowerConnect 3424. Any line marked **[TO VERIFY ON HARDWARE]** should be confirmed against your own switch — do not assume it word-for-word.

**Create VLAN 10 and name it:**

```
console> enable
console# configure
console(config)# vlan database
console(config-vlan)# vlan 10
console(config-vlan)# exit
console(config)# interface vlan 10
console(config-if)# name Home
console(config-if)# exit
```

**[TO VERIFY ON HARDWARE]** On some PowerConnect firmware the VLAN is created under `vlan database` and named under `interface vlan`; menu wording can differ by version. Confirm on your unit.

**Assign port 1 to VLAN 10 as an access port:**

```
console(config)# interface ethernet g1
console(config-if)# switchport mode access
console(config-if)# switchport access vlan 10
console(config-if)# exit
console(config)#
```

Here `g1` means gigabit port 1. Use the real port name printed on your switch.

**Verify:**

```
console# show vlan
```

Expected (yours will differ) **[TO VERIFY ON HARDWARE]**:

```
 VLAN   Name     Ports
 ----   ----     -----
 1      default  g2-g24
 10     Home     g1
```

**Save so it survives a reboot:**

```
console# copy running-config startup-config
```

> **The big idea:** Building a VLAN is three careful jobs: **create** it in global config (`vlan 10`, then `name`), **assign** a port to it in interface mode (`switchport mode access`, then `switchport access vlan 10`), then **verify** with `show vlan` and **save** with `copy running-config startup-config`. Go one command at a time, and never strand your own management port.

💡 **Tip:** After every change, run `show vlan` to see it took effect before moving on.

⚠️ **Watch out:** If you don't `copy running-config startup-config`, your VLANs vanish on the next reboot. Saving is the last, essential step.

---

## 4. Real-world analogy

> **"Configuring a VLAN is like assigning desks to departments — you write the name on the door, then tell each desk which department it belongs to."**

| Assigning desks | Configuring a VLAN |
|-----------------|--------------------|
| Name the department | `vlan 10` + `name Home` |
| Point a desk to it | `switchport access vlan 10` |
| Check the seating chart | `show vlan` |
| File the final chart | `copy running-config startup-config` |

Naming the department isn't enough — each desk (port) must be told where it belongs.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Global configuration mode** | | The CLI mode (`(config)#`) where you change switch-wide settings. |
| **Interface mode** | | The CLI mode (`(config-if)#`) where you change one port. |
| **Access port** | | A port that carries traffic for exactly one VLAN. |
| **running-config** | | The switch's live settings, held in memory right now. |
| **startup-config** | | The saved settings the switch loads when it boots. |

---

## 6. ASCII diagram

```
   BUILDING A VLAN — THREE JOBS

   1) CREATE            enable → configure
                        vlan 10 → name Home

   2) ASSIGN A PORT     interface ethernet g1
                        switchport mode access
                        switchport access vlan 10

   3) VERIFY + SAVE     show vlan
                        copy running-config startup-config

   Order matters: create → assign → verify → save.
```

_Create the VLAN, point a port at it, check it, then save so it lasts._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-11-02-vlan-config-steps-01.svg` (created and stored in this module's `assets/`)
> **Shows:** three numbered steps (Create → Assign → Verify/Save) as stacked blocks, each with its key commands, and an arrow flow top-to-bottom.
> **Key elements & labels:** step 1 (`vlan 10`, `name Home`), step 2 (`interface ethernet g1`, `switchport mode access`, `switchport access vlan 10`), step 3 (`show vlan`, `copy running-config startup-config`).
> **Color meaning:** each step numbered 1–3 and labeled in words; the numbers carry the sequence, not color.
> **Flow direction:** top-to-bottom, one step per block, arrow between.
> **Alt text (required):** "Three numbered steps to build a VLAN on the Dell 3424. Step 1, Create: enter configuration mode, then vlan 10 and name Home. Step 2, Assign a port: interface ethernet g1, switchport mode access, switchport access vlan 10. Step 3, Verify and save: show vlan to confirm, then copy running-config startup-config to save. An arrow flows top to bottom showing the order create, assign, verify, save."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-11-02-cli-showvlan-01.jpg`
> A screenshot of the `show vlan` output on the PowerConnect 3424. Alt text: "The switch CLI showing the show vlan output, with VLAN 10 named Home and port g1 assigned to it."
>
> **Photo 2** — `img-11-02-console-session-01.jpg`
> The laptop connected to the switch console with the CLI open. Alt text: "A laptop connected by console cable to the Dell PowerConnect 3424, with the command line open and ready to configure a VLAN."

---

## 9. Hands-on lab

**Goal:** create VLAN 10 named "Home," assign port g1 to it, verify, and save.
**Why:** this is the first real VLAN on your switch — the base for every later lab.

**You will need**
- Your laptop, the Dell PowerConnect 3424, a console cable (or network access to the web/CLI). Estimated time: 18 min.

⚠️ **Before you start (safety):** Manage the switch through a port you will **not** move (for example, keep your management session on the console cable, not on g1). This prevents a lockout. If you only have network access, do not assign the port your laptop is using into the new VLAN.

### 9a. Step-by-step instructions

1. Log into the switch and reach the `console#` prompt (`enable`).
2. Enter global config: type `configure`, press Enter.
3. Create the VLAN:
   ```
   vlan database
   vlan 10
   exit
   interface vlan 10
   name Home
   exit
   ```
4. Assign port g1 as an access port in VLAN 10:
   ```
   interface ethernet g1
   switchport mode access
   switchport access vlan 10
   exit
   ```
5. Leave config mode: type `end`.
6. Verify: type `show vlan` and read the table.
7. Save: type `copy running-config startup-config` and confirm if asked.

### 9b. Expected results

After `show vlan`, you should see VLAN 10 named **Home** with **g1** listed under it. **[TO VERIFY ON HARDWARE]** — the exact column layout depends on your firmware:

```
 VLAN   Name     Ports
 10     Home     g1
```

- ✅ **You did it if:** `show vlan` lists VLAN 10 (Home) with g1, and the save command reports success.

### 9c. Verify it worked

1. Confirm g1 shows under VLAN 10 in `show vlan`.
2. Confirm the save step completed with no error.

### 9d. Reset / roll back

To undo, put g1 back in the default VLAN and remove VLAN 10:

```
console(config)# interface ethernet g1
console(config-if)# switchport access vlan 1
console(config-if)# exit
console(config)# vlan database
console(config-vlan)# no vlan 10
console(config-vlan)# end
console# copy running-config startup-config
```

**[TO VERIFY ON HARDWARE]** Confirm `no vlan 10` is the removal command on your firmware.

> 🔧 **Home-lab continuity:** leave VLAN 10 (Home) in place with g1 assigned. Lesson 11-03 adds a trunk; 11-06 makes VLANs talk.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Moving your own management port | You're locked out | Manage via a port you won't change (console) |
| Forgetting to save | VLANs vanish on reboot | Always `copy running-config startup-config` |
| Skipping `switchport mode access` | Port may not behave as expected | Set access mode **before** assigning the VLAN |
| Using the wrong port name | Change hits the wrong port | Use the exact name printed on the switch (e.g., `g1`) |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| `show vlan` doesn't list VLAN 10 | VLAN not created or not saved | Recreate under `vlan database`; re-run `show vlan` |
| Port not under VLAN 10 | Access VLAN not assigned | Re-enter interface mode and `switchport access vlan 10` |
| Lost your session | Managed port moved VLANs | Reconnect via console; move the port back to VLAN 1 |
| Changes gone after reboot | Never saved | `copy running-config startup-config` |

---

## 12. Lesson summary

- Enter config with `enable` → `configure`.
- **Create:** `vlan 10`, then `name Home`.
- **Assign:** on the port, `switchport mode access`, then `switchport access vlan 10`.
- **Verify** with `show vlan`; **save** with `copy running-config startup-config`.

**One-sentence recap:** Build a VLAN by creating it, assigning a port as an access port, verifying with `show vlan`, and saving — one careful step at a time, without stranding your management port.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-11-02-fill-in-the-blank.md`
2. **Matching** — `wb-11-02-matching.md`
3. **Label the diagram** — `wb-11-02-label-the-diagram.md` (the three config steps)
4. **Short answer** — `wb-11-02-short-answer.md`
5. **Hands-on observation** — `wb-11-02-hands-on-observation.md` (build VLAN 10)
6. **Vocabulary review** — `wb-11-02-vocabulary-review.md`
7. **Reflection** — `wb-11-02-reflection.md`

**Quick written warm-up (do this now):** What command saves your VLANs? What mode do you assign a port in?

Save: ____________  Assign mode: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-11-02-knowledge-check.md`.)

1. Which command moves you from privileged mode into global config? *(Objective: modes)*
   - A) `enable`
   - B) `configure`
   - C) `show vlan`
   - D) `exit`

2. Which command creates or selects VLAN 10 to work on? *(Objective: create)*
   - A) `vlan 10`
   - B) `port 10`
   - C) `ip vlan 10`
   - D) `make vlan 10`

3. To set a port to carry one VLAN, you use… *(Objective: access port)*
   - A) `switchport mode trunk`
   - B) `switchport mode access`
   - C) `no shutdown`
   - D) `speed auto`

4. Which command **assigns** port g1 to VLAN 10? *(Objective: assign)*
   - A) `switchport access vlan 10`
   - B) `vlan 10 port g1`
   - C) `interface vlan 10`
   - D) `show vlan 10`

5. Which command **saves** your work so it survives a reboot? *(Objective: save)*
   - A) `write vlan`
   - B) `copy running-config startup-config`
   - C) `show running-config`
   - D) `reload`

6. **True or false —** If you skip the save command, your VLANs stay after a reboot. Explain in one sentence. *(Objective: save)*

7. Which command shows you the VLANs and their ports? *(Objective: verify)*
   - A) `show ports`
   - B) `show vlan`
   - C) `show ip`
   - D) `show mac`

8. **Matching —** match each mode to its prompt. *(Objective: modes)*
   - ___ Privileged &nbsp;&nbsp; ___ Global config &nbsp;&nbsp; ___ Interface
   - A) `(config-if)#`
   - B) `#`
   - C) `(config)#`

9. Fill in the blank: A port that carries traffic for exactly one VLAN is an ____________ port. *(Objective: access port)*

10. **Scenario —** You're managing the switch through port g1 over the network. You need g1 in VLAN 10. What's the safe way to do this without locking yourself out? *(Objective: apply/safety)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-11-02-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-11-02-vlan-config.md`. In brief:

- **Objective in one line:** learners create a VLAN, name it, assign an access port, verify, and save on the Dell 3424.
- **Common misconceptions:** "naming the VLAN assigns ports"; "changes save themselves." Correct both.
- **Pacing:** ~30 min. The lockout-safety point deserves real emphasis before anyone touches a port.
- **How CompTIA tests it:** the command sequence and the running-config vs. startup-config distinction.
- **Accuracy note (Prime Directive #7):** exact PowerConnect 3424 prompts/output vary by firmware; every unverified line is marked **[TO VERIFY ON HARDWARE]**. Confirm on the actual unit before treating output as exact.
- **Extension idea:** create a second VLAN (20, "Lab") and assign g2 — sets up the 11-03 trunk lab.

---

## 17. Cheat sheet

> **Quick reference — VLAN config on the Dell 3424**
>
> | Job | Command |
> |-----|---------|
> | Enter config | `enable` → `configure` |
> | Create VLAN | `vlan database` → `vlan 10` |
> | Name VLAN | `interface vlan 10` → `name Home` |
> | Pick a port | `interface ethernet g1` |
> | Access mode | `switchport mode access` |
> | Assign VLAN | `switchport access vlan 10` |
> | Verify | `show vlan` |
> | **Save** | `copy running-config startup-config` |
>
> - ⚠️ Don't move the port you manage through. Always save.
> - **[TO VERIFY ON HARDWARE]** — confirm exact wording on your firmware.
>
> _(Full version: `resources/cheat-sheets/vlans-and-switching-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Global configuration mode** — The CLI mode (`(config)#`) where you change switch-wide settings.
- **Interface mode** — The CLI mode (`(config-if)#`) where you change one port.
- **running-config** — The switch's live settings, held in memory right now.
- **startup-config** — The saved settings the switch loads when it boots.

(Access port was defined in Module 07 and is reused here.)

---

## 19. Homework

- **Practice:** Create a second VLAN (20, "Lab") and assign port g2, then `show vlan`.
- **Spaced review:** From memory, write the four command groups: create, assign, verify, save.
- **Preview:** Next lesson, **trunks and 802.1Q tagging** — how VLANs travel between switches.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Which step felt riskiest, and why? _______________________
3. What would I check before moving a port's VLAN? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can enter global config and interface mode.
- [ ] I created and named a VLAN.
- [ ] I assigned a port as an access port in a VLAN.
- [ ] I verified with `show vlan` and saved my work.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know the next lesson carries VLANs between switches with trunks.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M11-L02** — "Configuring VLANs on the Dell 3424" · Module 11 · Unit 8_
