---
id: NA-M12-L03
module: 12
lesson: 03
title: "Availability: Redundancy, Uptime, and SLAs"
unit: 9
objective_ids: ["3.3"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E1
prerequisites: ["NA-M11-L04", "NA-M12-L02"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-06"
---

# [Module 12 · Lesson 03] Availability: Redundancy, Uptime, and SLAs

> **Unit:** Unit 9 — Network Operations · **Time:** ~30 min · **Equipment:** E1 (concept lesson; paper and a calculator help)
> **You'll need first:** loop prevention/redundant links (11-04) and monitoring (12-02).

People expect networks to just work — all day, every day. But parts fail. Cables break. Power dips. So we build networks that keep running **even when a part fails**. This is **availability**. This lesson covers how we measure it (**uptime** and the "nines"), how we protect it (**redundancy**), and how we promise it (an **SLA**).

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Define **availability** and **uptime**, and read the "nines."
- [ ] Explain **redundancy**, **high availability**, and **failover**.
- [ ] Define an **SLA** and what it promises.
- [ ] Explain **MTBF**, **MTTR**, **RPO**, and **RTO** in plain terms.

---

## 2. Introduction — why this matters

Think about a store's website. If it goes down for an hour, the store loses sales. If a hospital's network goes down, it can risk lives. So "working most of the time" is not enough. Important networks must stay up **almost all** the time.

**Availability** is how much of the time a service is up and usable. We plan for failure on purpose. We add spare parts and spare paths. If one fails, another takes over. Often no one even notices.

The exam tests the words and the math. It asks what "five nines" means. It asks what failover does. It asks the difference between MTBF and MTTR. This lesson makes each one simple.

🎯 **Exam tip:** Know the "nines" (99.9% ≈ 8.8 hours down per year) and the four time metrics: MTBF, MTTR, RPO, RTO.

🔧 **Lab link:** You'll do a quick "nines" calculation and plan one redundant path for your lab.

---

## 3. Simple explanation

### Availability and uptime

**Availability** is the share of time a service is up. **Uptime** is the time it is running. **Downtime** is the time it is not.

We write availability as a percent. More nines means less downtime. This is the "nines" scale:

| Availability | Nickname | Downtime per year |
|--------------|----------|-------------------|
| 99% | "two nines" | ~3.65 days |
| 99.9% | "three nines" | ~8.8 hours |
| 99.99% | "four nines" | ~53 minutes |
| 99.999% | "five nines" | ~5 minutes |

**More nines = far less downtime — and far more cost.** Five nines is very hard and expensive.

### Redundancy and high availability

**Redundancy** means having a spare, so no single part can take everything down. You saw this idea in Lesson 11-04: a backup link that STP holds ready.

Redundancy comes in many forms:

- Two power supplies in one device.
- Two internet links from two providers.
- Two switches, two paths (STP picks one; the other waits).

**High availability (HA)** is a design that stays up through failures, using redundancy. **Fault tolerance** is the ability to keep working even when a part fails.

### Failover and load balancing

**Failover** is the automatic switch from a failed part to its backup. It happens fast, often with no one noticing.

Load balancing spreads work across several servers (Lesson 07-04, the **load balancer**). It boosts both speed **and** availability — if one server fails, the others carry on.

### The SLA

An **SLA (Service Level Agreement)** is a written promise about service. A provider promises a level — for example, "99.9% uptime." If they miss it, you may get money back. An SLA sets the target everyone agrees to.

### The four time metrics

Four short metrics measure reliability and recovery:

| Term | Full name | Plain meaning |
|------|-----------|---------------|
| **MTBF** | Mean Time Between Failures | how long, on average, a part runs before it fails |
| **MTTR** | Mean Time To Repair | how long, on average, to fix it |
| **RPO** | Recovery Point Objective | how much data you can afford to lose (how old the last backup can be) |
| **RTO** | Recovery Time Objective | how fast you must be back up |

Higher MTBF is better (fails less often). Lower MTTR is better (fixed faster). RPO and RTO come from backups (next lesson).

> **The big idea:** **Availability** is how much of the time a service is up. We measure it in "nines" — **99.9%** is about 8.8 hours down a year; more nines means far less downtime and far more cost. We protect it with **redundancy** (spares and spare paths) for **high availability**, and **failover** switches to a backup automatically. An **SLA** is a written uptime promise. Four metrics track reliability: **MTBF** (time between failures), **MTTR** (time to repair), **RPO** (data you can lose), and **RTO** (time to recover).

💡 **Tip:** Each extra nine costs much more than the last. Pick the level the service really needs.

⚠️ **Watch out:** Redundancy only helps if the backup is truly separate. Two links in the same cut trench fail together.

---

## 4. Real-world analogy

> **"Availability is like a spare tire and roadside help — you carry a spare so one flat doesn't strip you, and your plan promises how fast help arrives."**

| Car | Network |
|-----|---------|
| A spare tire | Redundancy (spare part/path) |
| Swapping to the spare | Failover |
| Two tires would be a rare double fail | Fault tolerance |
| "Help arrives in 30 min" promise | SLA |
| How often tires go flat | MTBF |
| How long to change one | MTTR |

You don't hope you never get a flat. You carry a spare and know your plan.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Availability** | | The share of time a service is up and usable. |
| **Redundancy** | ree-DUN-dan-see | Having a spare part or path so one failure won't take everything down. |
| **Failover** | | The automatic switch from a failed part to its backup. |
| **SLA** | S-L-A | Service Level Agreement — a written promise about service (like uptime). |
| **MTTR** | | Mean Time To Repair — the average time to fix a failed part. |

---

## 6. ASCII diagram

```
   AVAILABILITY AT A GLANCE

   MEASURE   uptime %  →  the "nines"
             99.9% ≈ 8.8 hrs down/yr · 99.999% ≈ 5 min/yr
             (more nines = less downtime, more cost)

   PROTECT   redundancy (spare part / spare path)
             → high availability → failover (auto switch to backup)

   PROMISE   SLA: "we guarantee 99.9% uptime"

   METRICS   MTBF (runs before failing) · MTTR (time to fix)
             RPO (data you can lose) · RTO (time to recover)
```

_Measure availability in nines, protect it with redundancy and failover, promise it in an SLA._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-12-03-availability-01.svg` (created and stored in this module's `assets/`)
> **Shows:** three panels — Measure (the nines table with downtime per year), Protect (redundant paths with a failover arrow), and Promise (an SLA card) — plus the four metrics MTBF/MTTR/RPO/RTO.
> **Key elements & labels:** nines 99% → 99.999% with downtime; two paths where one is active and one is standby with a "failover" arrow; SLA "99.9% uptime"; MTBF/MTTR/RPO/RTO defined in one line each.
> **Color meaning:** each panel titled in words; active vs. standby paths shown by solid vs. dashed line plus labels, not color alone.
> **Flow direction:** three panels left to right, metrics beneath.
> **Alt text (required):** "An availability overview in three panels. Panel one, Measure: a nines table showing 99 percent is about 3.65 days down per year, 99.9 percent about 8.8 hours, 99.99 percent about 53 minutes, and 99.999 percent about 5 minutes, with a note that more nines means less downtime and more cost. Panel two, Protect: two network paths where one is active (solid line) and one is standby (dashed line), with a failover arrow showing the automatic switch to the backup when the active path fails, giving high availability. Panel three, Promise: an SLA card reading guarantee 99.9 percent uptime. Beneath, four metrics: MTBF is the average time a part runs before failing, MTTR is the average time to repair it, RPO is how much data you can afford to lose, and RTO is how fast you must recover."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-12-03-dual-power-01.jpg`
> A device with two power supplies. Alt text: "A network device with two power supplies, an example of redundancy so one power failure won't take it down."
>
> **Photo 2** — `img-12-03-two-isp-01.jpg`
> Two internet links entering a site. Alt text: "Two internet connections from two providers entering one site, giving a redundant path if one provider fails."

---

## 9. Hands-on lab

**Goal:** calculate downtime for a "nines" level, and plan one redundant path for your lab.
**Why:** the math and the plan make availability concrete.

**You will need**
- Paper, a calculator, and your lab design (from 11-08). Estimated time: 15 min.

⚠️ **Before you start (safety):** paper and math only. You change no gear.

### 9a. Step-by-step instructions

1. A year has about **8,760 hours** (365 × 24). Write that down.
2. Pick **99.9%** uptime. Downtime = 0.1% of the year.
3. Calculate: `8760 × 0.001 =` about **8.76 hours** of downtime per year.
4. Now try **99.99%**: `8760 × 0.0001 =` about **0.88 hours** (~53 minutes).
5. On your lab design, add **one** redundant path (a second link between two switches).
6. Note which device would **fail over** to the backup, and what STP does with the loop.

### 9b. Expected results

- Two downtime numbers (99.9% ≈ 8.76 hrs; 99.99% ≈ 0.88 hrs).
- A design with one redundant path and a note on failover + STP.

- ✅ **You did it if:** your numbers match and your design shows a backup path.

### 9c. Verify it worked

1. Say what "three nines" means in hours per year (~8.8).
2. Point to the redundant path and say what fails over to it.

### 9d. Reset / roll back

Nothing changed — paper only. Keep the updated design.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking more nines is always worth it | Huge cost for little gain | Match the level to the real need |
| A "backup" on the same power/trench | Both fail together | Make the backup truly separate |
| Confusing MTBF and MTTR | Wrong metric | MTBF = between failures; MTTR = to repair |
| No failover tested | Backup fails when needed | Test failover before you rely on it |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Outage even with a "backup" | Backup shares a fault | Separate power, path, and provider |
| Failover didn't happen | Not configured/tested | Check and test the failover setup |
| Missing the SLA target | Too little redundancy | Add redundancy or lower the promise |
| Slow recovery | High MTTR | Keep spares and clear repair steps ready |

---

## 12. Lesson summary

- **Availability** = the share of time a service is up; measured in the "nines."
- **99.9%** ≈ 8.8 hours down per year; more nines = less downtime and more cost.
- **Redundancy** and **failover** give **high availability**; the backup must be truly separate.
- An **SLA** promises a level; **MTBF/MTTR/RPO/RTO** measure reliability and recovery.

**One-sentence recap:** Availability is uptime measured in nines, protected by redundancy and automatic failover, promised in an SLA, and tracked by MTBF, MTTR, RPO, and RTO.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-12-03-fill-in-the-blank.md`
2. **Matching** — `wb-12-03-matching.md`
3. **Label the diagram** — `wb-12-03-label-the-diagram.md` (measure/protect/promise)
4. **Short answer** — `wb-12-03-short-answer.md`
5. **Hands-on observation** — `wb-12-03-hands-on-observation.md` (nines math)
6. **Vocabulary review** — `wb-12-03-vocabulary-review.md`
7. **Reflection** — `wb-12-03-reflection.md`

**Quick written warm-up (do this now):** What does an SLA promise? What is failover?

SLA promises: ____________  Failover: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-12-03-knowledge-check.md`.)

1. **Availability** measures… *(Objective: concept)*
   - A) how fast a cable is
   - B) the share of time a service is up
   - C) the number of VLANs
   - D) the Wi-Fi channel

2. About how much downtime is **99.9%** ("three nines") per year? *(Objective: nines)*
   - A) 5 minutes
   - B) 8.8 hours
   - C) 3.65 days
   - D) zero

3. **Redundancy** means… *(Objective: redundancy)*
   - A) deleting spare parts
   - B) having a spare part or path
   - C) one power supply
   - D) turning off backups

4. **Failover** is… *(Objective: failover)*
   - A) the automatic switch to a backup when a part fails
   - B) a type of cable
   - C) a routing protocol
   - D) a log level

5. An **SLA** is… *(Objective: SLA)*
   - A) a written promise about service (like uptime)
   - B) a switch model
   - C) a subnet mask
   - D) a Wi-Fi standard

6. **True or false —** More nines of availability always cost the same. Explain in one sentence. *(Objective: nines/cost)*

7. **MTTR** measures… *(Objective: metrics)*
   - A) time between failures
   - B) the average time to repair a failed part
   - C) the Wi-Fi speed
   - D) the number of hops

8. **Matching —** match each metric to its meaning. *(Objective: metrics)*
   - ___ MTBF &nbsp;&nbsp; ___ RPO &nbsp;&nbsp; ___ RTO
   - A) How fast you must be back up
   - B) Average time a part runs before failing
   - C) How much data you can afford to lose

9. Fill in the blank: A backup on the **same** power or trench is not truly ____________. *(Objective: redundancy)*

10. **Scenario —** A shop's website must not lose more than a few minutes a year and must survive one link failure. Which availability level fits, and what two things give it? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-12-03-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-12-03-availability.md`. In brief:

- **Objective in one line:** learners define availability/uptime, read the nines, and explain redundancy, failover, SLAs, and MTBF/MTTR/RPO/RTO.
- **Common misconceptions:** "more nines is always worth it"; "any backup counts." Correct both.
- **Pacing:** ~30 min. Do the nines math together; it makes the scale real.
- **How CompTIA tests it:** the nines and their downtime; redundancy/HA/failover; SLA; the four metrics (MTBF/MTTR/RPO/RTO).
- **Accuracy note (Prime Directive #7):** the downtime figures come from real math (8,760 hours/year × the downtime fraction); no device output is claimed.
- **Extension idea:** active-active vs. active-passive clusters, and geographic redundancy (a second site).

---

## 17. Cheat sheet

> **Quick reference — Availability**
>
> | Availability | Nickname | Down/year |
> |--------------|----------|-----------|
> | 99% | two nines | ~3.65 days |
> | 99.9% | three nines | ~8.8 hours |
> | 99.99% | four nines | ~53 min |
> | 99.999% | five nines | ~5 min |
>
> - **Redundancy** = spare part/path (must be truly separate). → **high availability**.
> - **Failover** = automatic switch to the backup. **Load balancing** spreads work + adds resilience.
> - **SLA** = a written uptime promise (e.g., 99.9%).
> - **MTBF** (between failures, higher better) · **MTTR** (to repair, lower better) · **RPO** (data you can lose) · **RTO** (time to recover).
>
> _(Full version: `resources/cheat-sheets/network-operations-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Availability** — The share of time a service is up and usable, often written in the "nines."
- **Uptime** — The time a service is running (the opposite of downtime).
- **Redundancy** — Having a spare part or path so one failure won't take everything down.
- **High availability (HA)** — A design that stays up through failures, using redundancy.
- **Failover** — The automatic switch from a failed part to its backup.
- **Fault tolerance** — The ability to keep working even when a part fails.
- **SLA (Service Level Agreement)** — A written promise about a service, such as an uptime target.
- **MTBF (Mean Time Between Failures)** — The average time a part runs before it fails.
- **MTTR (Mean Time To Repair)** — The average time to fix a failed part.
- **RPO (Recovery Point Objective)** — How much data you can afford to lose (how old the last backup can be).
- **RTO (Recovery Time Objective)** — How fast a service must be back up after a failure.

(Load balancer and STP were defined earlier and are reused here.)

---

## 19. Homework

- **Practice:** Calculate the yearly downtime for 99% and 99.999%.
- **Spaced review:** Explain MTBF vs. MTTR to someone in one sentence each.
- **Preview:** Next lesson, **backups, disaster recovery, and change control**.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. What availability level does my own network really need? _______________________
3. What was hardest — the nines, or the four metrics? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can define availability and read the nines.
- [ ] I can explain redundancy, high availability, and failover.
- [ ] I can define an SLA.
- [ ] I can explain MTBF, MTTR, RPO, and RTO.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know the next lesson covers backups and disaster recovery.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M12-L03** — "Availability: Redundancy, Uptime, and SLAs" · Module 12 · Unit 9_
