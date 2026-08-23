---
id: NA-M12-L02
module: 12
lesson: 02
title: "Monitoring, Logs, SNMP, and Alerts"
unit: 9
objective_ids: ["3.2"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E1
prerequisites: ["NA-M09-L05", "NA-M12-L01"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-06"
---

# [Module 12 · Lesson 02] Monitoring, Logs, SNMP, and Alerts

> **Unit:** Unit 9 — Network Operations · **Time:** ~30 min · **Equipment:** E1 (your Windows laptop)
> **You'll need first:** SNMP and Syslog basics (09-05) and documentation (12-01).

A network runs day and night. You cannot watch every device by hand. So you set up tools that watch **for** you. They measure health, save records, and send an **alert** when something goes wrong. This lesson covers the three ways to watch: **monitoring**, **logs**, and **flow data** — plus **SNMP** and **alerts**.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain **why** monitoring matters.
- [ ] Describe **SNMP** polling, a **trap**, and the **MIB**/**OID**.
- [ ] Read **logs** and **Syslog severity levels**.
- [ ] Explain **thresholds**, **alerts**, and **flow data (NetFlow)**.

---

## 2. Introduction — why this matters

You built a network. Now you must keep it healthy. But you can't stare at it all day. And problems often start small. A slow link. A failing fan. A disk filling up. If no one notices, a small problem becomes an outage.

**Monitoring** solves this. Monitoring means watching a network's health all the time, with tools. The tools measure things, keep records, and warn you early. You get to fix the small problem before it grows.

The exam tests the main tools by name. It asks how SNMP works. It asks what log severity levels mean. It asks what a threshold and an alert do. This lesson names each tool and its job.

🎯 **Exam tip:** Know SNMP **polling** vs. a **trap**, and the Syslog **severity levels** (0 = worst, 7 = debug).

🔧 **Lab link:** You'll read real logs in Windows Event Viewer.

---

## 3. Simple explanation

There are three main ways to watch a network. Each answers a different question.

### 1. Metrics — "how is it doing right now?"

Metrics are numbers about health: link speed, CPU use, and errors. A common tool for metrics is **SNMP**.


**SNMP (Simple Network Management Protocol)** was introduced in Lesson 09-05. Here is how it works:

- A central **manager** asks each device for numbers. This asking is called **polling**.
- Each device runs an **agent** that answers.
- The list of things you can ask about lives in the **MIB (Management Information Base)** — think of it as a catalog.
- Each single item in that catalog has an address, called an **OID (Object Identifier)**.
- If something goes wrong, the agent does not wait to be asked. It sends an alert on its own. This pushed alert is an **SNMP trap**.

So polling is the manager **pulling** numbers. A trap is the device **pushing** a warning.

### 2. Logs — "what happened, and when?"

A **log** is a saved record of events. Every device writes logs. **Syslog** (Lesson 09-05) sends logs to one central server.

Log messages have a **severity level** — how urgent the message is. Syslog uses eight levels, 0 to 7:

| Level | Name | Meaning |
|:-----:|------|---------|
| 0 | Emergency | system is unusable |
| 1 | Alert | act now |
| 2 | Critical | serious problem |
| 3 | Error | an error happened |
| 4 | Warning | might become a problem |
| 5 | Notice | normal but notable |
| 6 | Informational | routine info |
| 7 | Debug | detailed troubleshooting |

**Lower number = more urgent.** Level 0 is the worst. Level 7 is just detail.

### 3. Flow data — "who talked to whom?"

Flow data shows conversations: which device talked to which, and how much. **NetFlow** is a common tool for this. It helps you spot heavy users and odd traffic.

### Thresholds and alerts

You don't want to read numbers all day. So you set a **threshold** — a limit. When a value crosses it, the tool sends an **alert** — a message that warns you. For example: "alert me if a link is over 90% busy."

> **The big idea:** Watch a network three ways. Metrics (via **SNMP** — the manager **polls** agents; a device sends a **trap** on trouble; the **MIB** lists items and each has an **OID**). Logs (via **Syslog**, with **severity levels** 0–7, where lower is more urgent). And flow data (via **NetFlow** — who talked to whom). Set a **threshold**, and the tool sends an **alert** when a value crosses it. This catches small problems early.

💡 **Tip:** Polling **pulls** on a schedule. A trap **pushes** the moment something breaks.

⚠️ **Watch out:** Too many alerts cause "alert fatigue." Set thresholds so you get real warnings, not noise.

---

## 4. Real-world analogy

> **"Monitoring is like a car dashboard — gauges show health, a warning light is an alert, and the trip log records what happened."**

| Car | Network |
|-----|---------|
| Speed and fuel gauges | Metrics (SNMP) |
| "Check engine" light | An alert (from a threshold) |
| The car calling for help itself | An SNMP trap (device pushes) |
| The trip/service log | Logs (Syslog) |

You don't stare at the engine. You watch the dashboard, and it warns you.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Monitoring** | | Watching a network's health all the time, with tools. |
| **SNMP trap** | | An alert a device pushes on its own when something is wrong. |
| **MIB / OID** | | The catalog of things you can ask about (MIB) and one item's address (OID). |
| **Severity level** | | How urgent a log message is (Syslog 0–7; lower is worse). |
| **Threshold** | | A limit that, when crossed, triggers an alert. |

---

## 6. ASCII diagram

```
   THREE WAYS TO WATCH A NETWORK

   METRICS   SNMP manager --poll--> device (agent)   "how is it doing?"
                         <--answer--
             device --trap--> manager (on trouble; pushed)

   LOGS      device --Syslog--> central log server    "what happened?"
             severity 0 (worst) ... 7 (debug)

   FLOW      NetFlow: who talked to whom, how much     "who talked?"

   THRESHOLD crossed  ->  ALERT sent to you
```

_Metrics, logs, and flow data each answer one question; a threshold turns a number into an alert._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-12-02-monitoring-overview-01.svg` (created and stored in this module's `assets/`)
> **Shows:** three lanes — Metrics (SNMP manager polling agents, plus a trap arrow), Logs (devices sending Syslog to a central server, with a 0–7 severity scale), and Flow (NetFlow "who talked to whom") — plus a threshold-to-alert arrow.
> **Key elements & labels:** SNMP "poll" (pull) and "trap" (push) arrows; MIB/OID note; Syslog severity 0 worst → 7 debug; NetFlow conversation; "threshold crossed → alert."
> **Color meaning:** each lane titled in words; the severity scale uses numbers 0–7 and text (worst/debug), not color alone.
> **Flow direction:** three horizontal lanes, top to bottom, with the alert at the bottom.
> **Alt text (required):** "Three lanes for watching a network. Lane one, Metrics: an SNMP manager polls each device's agent to pull health numbers, and a device sends a trap to push a warning on trouble; a note says the MIB lists items and each has an OID. Lane two, Logs: devices send Syslog messages to a central log server, with a severity scale from 0, the worst, to 7, debug detail, where lower numbers are more urgent. Lane three, Flow: NetFlow records who talked to whom and how much. At the bottom, when a value crosses a set threshold, an alert is sent to the administrator."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-12-02-dashboard-01.jpg`
> A monitoring dashboard with gauges and a red alert. Alt text: "A network monitoring dashboard showing health gauges and a red alert where a value crossed its threshold."
>
> **Photo 2** — `img-12-02-event-viewer-01.jpg`
> The Windows Event Viewer log list. Alt text: "The Windows Event Viewer showing a list of log events with their levels, such as Information, Warning, and Error."

---

## 9. Hands-on lab

**Goal:** read real log events on your Windows laptop and note their levels.
**Why:** seeing real logs makes severity levels and monitoring concrete.

**You will need**
- Your Windows laptop (Equipment tier **E1**). Estimated time: 12 min.

⚠️ **Before you start (safety):** you only **read** logs. You change nothing.

### 9a. Step-by-step instructions

1. Click **Start** and type **Event Viewer**. Open it.
2. In the left pane, open **Windows Logs**, then **System**.
3. Look at the **Level** column: **Information**, **Warning**, **Error**.
4. Click one **Error** or **Warning**. Read its message at the bottom.
5. Note the date, the level, and one line of the message.

### 9b. Expected results

You'll see a list of events with levels, like this (yours will differ) **[TO VERIFY ON HARDWARE]**:

```
   Level         Date/Time            Source        Event ID
   Information   08/06 10:15          Service...    7036
   Warning       08/06 09:52          Disk          51
   Error         08/06 09:40          DCOM          10016
```

- ✅ **You did it if:** you found at least one Warning or Error and read its message.

### 9c. Verify it worked

1. Point to one event and say its **level**.
2. Say which is more urgent: an **Error** or **Information**. (Error.)

### 9d. Reset / roll back

Nothing changed — you only read logs. Close Event Viewer when done.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking level 7 is the worst | Backwards priorities | **0 is worst**, 7 is debug detail |
| Confusing polling and traps | Wrong SNMP model | Polling **pulls**; a trap **pushes** |
| No thresholds set | Miss real problems | Set thresholds so alerts mean something |
| Too many alerts | Alert fatigue | Tune thresholds; alert on what matters |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| No alerts ever, then a surprise outage | No thresholds set | Add thresholds for key metrics |
| Flooded with alerts | Thresholds too tight | Raise limits; group or filter alerts |
| Can't tell what happened | Logs not centralized | Send logs to a Syslog server |
| Device not answering SNMP | Agent off or wrong community | Check the SNMP agent and settings |

---

## 12. Lesson summary

- **Monitoring** watches health all the time, so you catch problems early.
- **SNMP:** the manager **polls** agents; a device sends a **trap** on trouble; the **MIB** lists items, each with an **OID**.
- **Logs** go to **Syslog**; **severity** runs 0 (worst) to 7 (debug).
- Set a **threshold**; the tool sends an **alert** when a value crosses it. **NetFlow** shows who talked to whom.

**One-sentence recap:** Watch a network with metrics (SNMP polling and traps), logs (Syslog severity 0–7), and flow data (NetFlow), and let thresholds turn numbers into alerts so you fix small problems early.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-12-02-fill-in-the-blank.md`
2. **Matching** — `wb-12-02-matching.md`
3. **Label the diagram** — `wb-12-02-label-the-diagram.md` (the three lanes)
4. **Short answer** — `wb-12-02-short-answer.md`
5. **Hands-on observation** — `wb-12-02-hands-on-observation.md` (read logs)
6. **Vocabulary review** — `wb-12-02-vocabulary-review.md`
7. **Reflection** — `wb-12-02-reflection.md`

**Quick written warm-up (do this now):** Which SNMP action pushes on its own? Which Syslog level is worst?

Pushes: ____________  Worst level: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-12-02-knowledge-check.md`.)

1. **Monitoring** means… *(Objective: concept)*
   - A) fixing a network once a year
   - B) watching a network's health all the time
   - C) drawing a diagram
   - D) buying new gear

2. In SNMP, **polling** is when… *(Objective: SNMP)*
   - A) the manager asks devices for numbers
   - B) a device pushes an alert
   - C) a cable is tested
   - D) a log is deleted

3. An **SNMP trap** is… *(Objective: SNMP)*
   - A) the manager asking for data
   - B) an alert a device pushes on its own
   - C) a type of cable
   - D) a password

4. In Syslog, which severity is **most urgent**? *(Objective: logs)*
   - A) 7
   - B) 5
   - C) 0
   - D) 4

5. A **threshold** is… *(Objective: alerts)*
   - A) the network's name
   - B) a limit that triggers an alert when crossed
   - C) a routing protocol
   - D) a type of switch

6. **True or false —** In Syslog, level 7 is more urgent than level 0. Explain in one sentence. *(Objective: logs)*

7. **NetFlow** helps you see… *(Objective: flow)*
   - A) who talked to whom and how much
   - B) the switch's password
   - C) the cable length
   - D) the Wi-Fi channel

8. **Matching —** match each term to its meaning. *(Objective: vocabulary)*
   - ___ MIB &nbsp;&nbsp; ___ OID &nbsp;&nbsp; ___ Alert
   - A) One item's address in the catalog
   - B) A warning sent when a threshold is crossed
   - C) The catalog of things you can ask about

9. Fill in the blank: Polling ____________ data; a trap ____________ it. *(Objective: SNMP)*

10. **Scenario —** A server's disk keeps filling up and no one notices until it's full. How would monitoring, a threshold, and an alert prevent this next time? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-12-02-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-12-02-monitoring.md`. In brief:

- **Objective in one line:** learners describe monitoring via metrics (SNMP), logs (Syslog severity), and flow data (NetFlow), plus thresholds and alerts.
- **Common misconceptions:** "level 7 is worst"; "polling and traps are the same." Correct both.
- **Pacing:** ~30 min. The car-dashboard analogy carries it; drill the severity direction (0 worst).
- **How CompTIA tests it:** SNMP poll vs. trap, MIB/OID, Syslog severity 0–7, thresholds/alerts, flow data.
- **Accuracy note (Prime Directive #7):** Event Viewer is a genuine Windows tool; the sample event list is marked **[TO VERIFY ON HARDWARE]** since events vary by machine, and the learner records their own.
- **Extension idea:** SNMP versions (v1/v2c community strings vs. v3 security), and packet capture vs. flow data.

---

## 17. Cheat sheet

> **Quick reference — Monitoring, logs, SNMP, alerts**
>
> - **Monitoring** = watch health all the time; catch problems early.
> - **SNMP:** manager **polls** (pull) agents · device sends a **trap** (push) on trouble.
>   - **MIB** = catalog of items · **OID** = one item's address.
> - **Logs → Syslog**; **severity 0 (worst) → 7 (debug)**. Lower = more urgent.
> - **Threshold** crossed → **alert** sent to you.
> - **NetFlow / flow data** = who talked to whom, and how much.
>
> _(Full version: `resources/cheat-sheets/network-operations-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Monitoring** — Watching a network's health all the time, with tools.
- **SNMP trap** — An alert a device pushes to the manager on its own when something is wrong.
- **MIB (Management Information Base)** — The catalog of items SNMP can ask a device about.
- **OID (Object Identifier)** — The address of one single item in the MIB.
- **Severity level** — How urgent a log message is (Syslog 0–7; lower number is more urgent).
- **Threshold** — A limit that, when a value crosses it, triggers an alert.
- **Alert** — A message that warns you when something needs attention (often from a threshold).
- **NetFlow** — A tool that records network flows: who talked to whom, and how much.
- **Log** — A saved record of events on a device.

(SNMP and Syslog were defined in Module 09 and are reused here.)

---

## 19. Homework

- **Practice:** In Event Viewer, find one Warning and one Error and write their messages.
- **Spaced review:** From memory, list the Syslog levels 0–7 in order.
- **Preview:** Next lesson, **availability** — redundancy, uptime, and SLAs.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Which way of watching would help my lab most? _______________________
3. What was hardest — SNMP, severity levels, or flow data? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain why monitoring matters.
- [ ] I can describe SNMP polling, a trap, and the MIB/OID.
- [ ] I can read logs and know severity 0 is worst.
- [ ] I can explain thresholds, alerts, and flow data.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know the next lesson covers availability and SLAs.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M12-L02** — "Monitoring, Logs, SNMP, and Alerts" · Module 12 · Unit 9_
