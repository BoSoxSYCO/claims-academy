---
id: NA-M12-L04
module: 12
lesson: 04
title: "Backups, Disaster Recovery, and Change Control"
unit: 9
objective_ids: ["3.3"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E1
prerequisites: ["NA-M11-L02", "NA-M12-L03"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-06"
---

# [Module 12 · Lesson 04] Backups, Disaster Recovery, and Change Control

> **Unit:** Unit 9 — Network Operations · **Time:** ~30 min · **Equipment:** E1 (concept lesson; your laptop for a config-save)
> **You'll need first:** saving switch config (11-02) and RPO/RTO (12-03).

Things go wrong. A disk dies. A flood hits. A change breaks the network. When that happens, you need a way back. This lesson covers three safety nets: **backups** (copies of your data), **disaster recovery** (a plan to come back after a big failure), and **change control** (a safe way to make changes).

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain **why** backups matter, and name backup types.
- [ ] State the **3-2-1 rule** and what **off-site** means.
- [ ] Explain **disaster recovery** and **cold/warm/hot sites**.
- [ ] Explain **change control** and a **rollback**.

---

## 2. Introduction — why this matters

Imagine you type a report for hours. Then the power dies. If you saved a copy, you lose almost nothing. If you didn't, it's gone. A **backup** is that saved copy.

Networks need backups too. They need copies of data, and copies of device settings. They also need a plan for a real disaster — a fire, a flood, a bad attack. And they need a safe way to make changes, so one bad edit doesn't break everything.

The exam tests these words and rules. It asks the backup types. It asks the 3-2-1 rule. It asks what a warm site is. This lesson makes each one simple.

🎯 **Exam tip:** Know the three backup types (full, incremental, differential) and the 3-2-1 rule.

🔧 **Lab link:** You'll save a copy of your switch's config — a real config backup.

---

## 3. Simple explanation

### Backups: copies you can restore

A **backup** is a saved copy of data you can restore later. There are three common types:

- A **full backup** copies **everything**, every time. It is simple but big and slow.
- An **incremental backup** copies only what changed **since the last backup** (of any kind). It is small and fast, but restoring needs the full plus every increment.
- A **differential backup** copies everything changed **since the last full backup**. It grows over the week, but restoring needs only the full plus the latest differential.

A **snapshot** is a saved point-in-time image of a system. You can roll a machine back to that exact moment.

### The 3-2-1 rule

A simple, strong rule for backups:

- **3** copies of your data.
- **2** different kinds of media (for example, a disk and the cloud).
- **1** copy kept **off-site** (in another place).

**Off-site** matters. If a fire hits the building, an on-site backup burns too. A copy elsewhere survives.

### Disaster recovery (DR)

**Disaster recovery (DR)** is the plan to bring a network back after a big failure. A key part is a **DR site** — a second location you can run from. There are three kinds:

| DR site | What it is | Recovery speed | Cost |
|---------|-----------|:--------------:|:----:|
| **Cold site** | empty space, power, and cooling only | slow (days) | low |
| **Warm site** | some gear, ready to set up | medium (hours) | medium |
| **Hot site** | a full running copy, always ready | fast (minutes) | high |

Your **RPO** and **RTO** (Lesson 12-03) decide which site you need. Need to be back in minutes? A hot site. Can wait days? A cold site.

### Change control

**Change control** (also called change management) is a safe process for making changes. Before a change, you plan it, get it approved, and schedule it. You also plan a **rollback** — a way to undo the change if it breaks something.

For a switch, a config backup **is** your rollback. You saved `startup-config` in Lesson 11-02. If a new config fails, you restore the old one.

> **The big idea:** Three safety nets keep a network recoverable. **Backups** are copies you can restore — **full** (everything), **incremental** (changes since the last backup), or **differential** (changes since the last full). Follow the **3-2-1 rule**: 3 copies, 2 media, 1 **off-site**. **Disaster recovery** is the plan to come back, using a **cold**, **warm**, or **hot** DR site chosen by your RPO/RTO. **Change control** makes changes safely, and a **rollback** (like a saved config) undoes a bad one.

💡 **Tip:** A backup you never test is a hope, not a plan. Test a restore now and then.

⚠️ **Watch out:** All three copies in one building is **not** 3-2-1. The off-site copy is the one that saves you in a real disaster.

---

## 4. Real-world analogy

> **"Backups and DR are like copies of your house key — spares in different places, one at a friend's house, and a plan for where to stay if your home floods."**

| Home | Network |
|------|---------|
| Spare keys | Backups (3 copies) |
| A key at a friend's house | Off-site copy |
| A place to stay if flooded | DR site |
| "Move in today" hotel | Hot site |
| An empty rental to furnish | Cold site |
| Undo a bad renovation | Rollback |

You don't keep every spare key on one hook by the door. You spread them out.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Backup** | | A saved copy of data you can restore later. |
| **Full / incremental / differential** | | Backup types: everything · changes since last backup · changes since last full. |
| **3-2-1 rule** | | 3 copies, 2 media types, 1 kept off-site. |
| **Disaster recovery (DR)** | | The plan to bring a network back after a big failure. |
| **Rollback** | | Undoing a change to return to the last good state. |

---

## 6. ASCII diagram

```
   THREE SAFETY NETS

   1) BACKUPS   full (all) · incremental (since last backup) · differential (since last full)
                snapshot = point-in-time image
                3-2-1 rule: 3 copies · 2 media · 1 OFF-SITE

   2) DISASTER RECOVERY (DR)   a DR site to run from:
                cold (empty, slow, cheap) → warm (some gear) → hot (full, fast, costly)
                RPO/RTO pick the site

   3) CHANGE CONTROL   plan → approve → schedule → change → (rollback if it breaks)
```

_Copy your data (backups), plan your comeback (DR), and change safely (change control)._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-12-04-backups-dr-change-01.svg` (created and stored in this module's `assets/`)
> **Shows:** three panels — Backups (the three types + the 3-2-1 rule), DR (cold → warm → hot sites on a speed/cost scale), and Change control (plan → approve → change → rollback flow).
> **Key elements & labels:** full/incremental/differential; 3-2-1 (3 copies, 2 media, 1 off-site); cold/warm/hot with recovery speed and cost; the change-control steps with a rollback arrow.
> **Color meaning:** each panel titled in words; the cold/warm/hot scale uses text (slow/fast, low/high) plus order, not color alone.
> **Flow direction:** three panels left to right; change steps flow left to right with a rollback loop.
> **Alt text (required):** "Three safety-net panels. Panel one, Backups: full copies everything, incremental copies changes since the last backup, differential copies changes since the last full backup; a snapshot is a point-in-time image; the 3-2-1 rule says keep 3 copies on 2 media types with 1 copy off-site. Panel two, Disaster recovery: three DR sites on a scale — a cold site is empty space that is slow and cheap, a warm site has some gear and is medium, and a hot site is a full running copy that is fast and costly; RPO and RTO choose the site. Panel three, Change control: a flow of plan, approve, schedule, change, with a rollback arrow looping back to undo the change if it breaks something."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-12-04-backup-drives-01.jpg`
> An external backup drive beside a cloud icon. Alt text: "An external backup drive next to a cloud symbol, showing two different backup media as in the 3-2-1 rule."
>
> **Photo 2** — `img-12-04-config-save-01.jpg`
> A switch CLI saving its config. Alt text: "A switch command line running the save command that copies the running configuration to the startup configuration, a config backup."

---

## 9. Hands-on lab

**Goal:** make a real config backup of your switch, and write a 3-2-1 plan for your data.
**Why:** a saved config is your rollback; a 3-2-1 plan protects your files.

**You will need**
- Your laptop (and the Dell 3424 if available). Estimated time: 15 min.

⚠️ **Before you start (safety):** saving config is safe — it only copies settings. Do not change settings.

### 9a. Step-by-step instructions

1. **Config backup (if you have the switch):** log in, reach `console#`, and save:
   ```
   copy running-config startup-config
   ```
   This copies the live settings to the saved settings (Lesson 11-02).
2. Optionally copy the config off the switch to a file/server for safekeeping.
3. **3-2-1 plan (on paper):** pick an important folder on your laptop.
4. Write **3 copies**: the original, plus two backups.
5. Write **2 media**: for example, an external drive and cloud storage.
6. Write **1 off-site**: which copy lives somewhere else (cloud counts).

> **[TO VERIFY ON HARDWARE]** The exact command to copy a config **off** the PowerConnect 3424 (to TFTP/USB) varies by firmware. Confirm the syntax on your unit — do not assume it word-for-word.

### 9b. Expected results

- A saved switch config (running copied to startup).
- A written 3-2-1 plan: 3 copies, 2 media, 1 off-site.

- ✅ **You did it if:** your plan lists 3 copies on 2 media with 1 off-site, and (if you have the switch) the save succeeded.

### 9c. Verify it worked

1. Point to the off-site copy in your plan.
2. Say what your saved switch config lets you do (roll back).

### 9d. Reset / roll back

Nothing harmful changed. Saving config and writing a plan are safe.

> 🔧 **Home-lab continuity:** keep the saved config; it's your rollback for future lab changes.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| All backups in one building | A fire loses them all | Keep 1 copy off-site (3-2-1) |
| Never testing a restore | Backup fails when needed | Test a restore now and then |
| No rollback plan for a change | Can't undo a bad change | Save config / plan a rollback first |
| Confusing incremental and differential | Wrong restore steps | Incremental = since last backup; differential = since last full |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Can't restore after a disaster | No off-site copy | Add an off-site backup (3-2-1) |
| Restore takes too long | Too many increments | Use differential, or more frequent fulls |
| A change broke the network | No rollback ready | Restore the saved config; add change control |
| DR too slow for the business | Cold site, need faster | Move to a warm or hot site |

---

## 12. Lesson summary

- A **backup** is a copy you can restore: **full**, **incremental**, or **differential**.
- Follow **3-2-1**: 3 copies, 2 media, 1 **off-site**.
- **Disaster recovery** uses a **cold**, **warm**, or **hot** site, chosen by RPO/RTO.
- **Change control** makes changes safely; a **rollback** (like a saved config) undoes a bad one.

**One-sentence recap:** Keep restorable backups by the 3-2-1 rule, plan disaster recovery with a cold, warm, or hot site sized to your RPO/RTO, and change safely with a rollback ready.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-12-04-fill-in-the-blank.md`
2. **Matching** — `wb-12-04-matching.md`
3. **Label the diagram** — `wb-12-04-label-the-diagram.md` (the three safety nets)
4. **Short answer** — `wb-12-04-short-answer.md`
5. **Hands-on observation** — `wb-12-04-hands-on-observation.md` (config backup + 3-2-1)
6. **Vocabulary review** — `wb-12-04-vocabulary-review.md`
7. **Reflection** — `wb-12-04-reflection.md`

**Quick written warm-up (do this now):** What does the "1" in 3-2-1 mean? What undoes a bad change?

The "1": ____________  Undoes a change: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-12-04-knowledge-check.md`.)

1. A **backup** is… *(Objective: concept)*
   - A) a spare switch
   - B) a saved copy of data you can restore
   - C) a routing protocol
   - D) a Wi-Fi channel

2. A **full backup** copies… *(Objective: types)*
   - A) only what changed since the last backup
   - B) everything, every time
   - C) nothing
   - D) only the config

3. An **incremental backup** copies… *(Objective: types)*
   - A) everything since the last full backup
   - B) only what changed since the last backup (of any kind)
   - C) everything, every time
   - D) only deleted files

4. In the **3-2-1 rule**, the "1" means… *(Objective: 3-2-1)*
   - A) one copy total
   - B) one copy kept off-site
   - C) one media type
   - D) one hour of backups

5. A **hot site** is… *(Objective: DR sites)*
   - A) empty space with power only
   - B) a full running copy, ready fast
   - C) a warm building
   - D) a backup tape

6. **True or false —** Keeping all three backup copies in one building follows the 3-2-1 rule. Explain in one sentence. *(Objective: 3-2-1)*

7. A **rollback** lets you… *(Objective: change control)*
   - A) speed up Wi-Fi
   - B) undo a change and return to the last good state
   - C) delete all logs
   - D) add a VLAN

8. **Matching —** match each DR site to its speed. *(Objective: DR sites)*
   - ___ Cold &nbsp;&nbsp; ___ Warm &nbsp;&nbsp; ___ Hot
   - A) Fast (minutes)
   - B) Slow (days)
   - C) Medium (hours)

9. Fill in the blank: For a switch, a saved ____________ config is your rollback. *(Objective: change control)*

10. **Scenario —** A company must be back online within minutes after a disaster and never lose more than a moment of data. What DR site fits, and what backup habit protects the data? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-12-04-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-12-04-backups-dr.md`. In brief:

- **Objective in one line:** learners name backup types, the 3-2-1 rule, DR sites (cold/warm/hot), and change control with rollback.
- **Common misconceptions:** "all copies in one place is fine"; "incremental = differential." Correct both.
- **Pacing:** ~30 min. The house-key analogy carries backups/DR; do the config-save lab.
- **How CompTIA tests it:** backup types and restore steps; 3-2-1; cold/warm/hot sites; change management and rollback; RPO/RTO tie-in.
- **Accuracy note (Prime Directive #7):** `copy running-config startup-config` is real (11-02); copying config **off** the switch varies by firmware, so that step is marked **[TO VERIFY ON HARDWARE]**.
- **Extension idea:** backup rotation schemes (grandfather-father-son), and immutable/air-gapped backups against ransomware.

---

## 17. Cheat sheet

> **Quick reference — Backups, DR, change control**
>
> **Backup types:** **full** (all) · **incremental** (since last backup) · **differential** (since last full) · **snapshot** (point-in-time).
> **3-2-1 rule:** **3** copies · **2** media · **1** off-site.
>
> | DR site | Ready in | Cost |
> |---------|----------|------|
> | Cold | days | low |
> | Warm | hours | medium |
> | Hot | minutes | high |
>
> - **RPO/RTO** pick the DR site.
> - **Change control:** plan → approve → schedule → change → **rollback** if it breaks.
> - Switch rollback = a saved **startup-config** (`copy running-config startup-config`).
>
> _(Full version: `resources/cheat-sheets/network-operations-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Backup** — A saved copy of data you can restore later.
- **Full backup** — A backup that copies everything, every time.
- **Incremental backup** — A backup that copies only what changed since the last backup of any kind.
- **Differential backup** — A backup that copies everything changed since the last full backup.
- **Snapshot** — A saved point-in-time image of a system you can roll back to.
- **3-2-1 rule** — Keep 3 copies of data, on 2 media types, with 1 copy off-site.
- **Off-site backup** — A backup copy kept in a different location, so a local disaster can't destroy it.
- **Disaster recovery (DR)** — The plan to bring a network back after a big failure.
- **DR site** — A second location you can run from after a disaster.
- **Cold site** — A DR site with empty space, power, and cooling only; cheap but slow to bring up.
- **Warm site** — A DR site with some gear ready to set up; medium speed and cost.
- **Hot site** — A DR site that is a full running copy, ready to take over fast (but costly).
- **Change control** — A safe process to plan, approve, and make changes (also called change management).
- **Rollback** — Undoing a change to return to the last good state.

(RPO, RTO, running-config, and startup-config were defined earlier and are reused here.)

---

## 19. Homework

- **Practice:** Write a real 3-2-1 plan for your most important files.
- **Spaced review:** Explain cold vs. warm vs. hot sites in one sentence each.
- **Preview:** Next lesson, **common network policies and best practices** — the Module 12 finish.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Do my own important files follow the 3-2-1 rule? _______________________
3. What was hardest — the backup types, or the DR sites?
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can name the three backup types.
- [ ] I can state the 3-2-1 rule and why off-site matters.
- [ ] I can explain cold, warm, and hot DR sites.
- [ ] I can explain change control and a rollback.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know the next lesson finishes Module 12 with policies.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M12-L04** — "Backups, Disaster Recovery, and Change Control" · Module 12 · Unit 9_
