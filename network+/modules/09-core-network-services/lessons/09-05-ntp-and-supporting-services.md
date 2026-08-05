---
id: NA-M09-L05
module: 09
lesson: 05
title: "Time (NTP) and Other Supporting Services"
unit: 6
objective_ids: ["1.4", "3.1"]
reading_level_target: 7
status: Published
est_minutes: 26
equipment_tier: E1
prerequisites: ["NA-M09-L01"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-04"
---

# [Module 09 · Lesson 05] Time (NTP) and Other Supporting Services

> **Unit:** Unit 6 — Core Network Services · **Time:** ~26 min · **Equipment:** E1 (your Windows laptop)
> **You'll need first:** Lesson 09-01 (services like DHCP that make networks work).

Networks need one thing that's easy to forget: **agreed-upon time**. Logs, security certificates, and some logins all break if clocks drift apart. **NTP** keeps every device's clock in sync. This lesson closes Module 09 with NTP, plus two more helpers — **SNMP** and **Syslog**.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what **NTP** does and **why** accurate time matters.
- [ ] Explain **stratum** — how close a clock is to the true source.
- [ ] Describe **SNMP** (monitoring) and **Syslog** (central logging).
- [ ] Check your own time source with `w32tm`.

---

## 2. Introduction — why this matters

Picture a meeting where everyone's watch shows a different time. Some arrive early, some late, and nobody agrees on when things happened. It's chaos. Now imagine a courtroom where two logs of the same event show different times — which one is right?

Networks face the same problem. Devices write **logs** with timestamps. Security **certificates** have start and end dates. Some **logins** only work if two clocks agree within a few minutes. If clocks drift apart, logs don't line up, certificates get rejected, and logins fail. Time is quiet — until it's wrong.

**NTP (Network Time Protocol)** fixes this. It keeps every device's clock set to the same reliable time. It's one of those services that works invisibly, like DHCP and DNS — you only notice it when it breaks.

🎯 **Exam tip:** Network+ tests **NTP** (and **stratum**), plus supporting services **SNMP** (monitoring) and **Syslog** (central logs). Know what each one is for.

🔧 **Lab link:** You'll check your laptop's time source and stratum with `w32tm`.

---

## 3. Simple explanation

### NTP: everyone sets the same clock
**NTP** keeps device clocks **synchronized** to a reliable time source. A device asks an **NTP server**, "What time is it?" and adjusts its clock to match. It does this again and again, so the clock never drifts far.

Think of a town where everyone sets their watch to the **official clock tower**. NTP is that habit, done automatically, across the whole network.

### Stratum: how close to the true source
NTP servers form a chain, measured in **stratum** levels:

- **Stratum 0:** the true source — an atomic clock or GPS. Not on the network itself.
- **Stratum 1:** servers connected **directly** to a stratum 0 source. The most accurate networked time.
- **Stratum 2:** servers that get their time from stratum 1. Slightly less exact.
- …and so on. **Lower number = closer to the source = more accurate.**

So a stratum 2 server is one step further from the true clock than a stratum 1. Each step adds a tiny bit of error.

### Why accurate time matters (examples)
- **Logs:** if two devices disagree on the time, you can't line up what happened when. Troubleshooting gets much harder.
- **Certificates:** security certificates have valid dates. A wrong clock can reject a good certificate — or trust an expired one.
- **Logins:** some login systems fail if two clocks differ by more than a few minutes.

### Two more supporting services
Networks lean on a few quiet helpers. Two you should know:

- **SNMP (Simple Network Management Protocol):** lets a central **manager** watch and manage many network devices. Devices report their status (up/down, traffic, errors); the manager collects it — like a facilities dashboard for the network.
- **Syslog:** a standard way for devices to send their **log messages** to one central **server**. Instead of checking each device, you read one place — a shared logbook.

Together, NTP, SNMP, and Syslog keep a network **on time, watched, and logged**.

> **The big idea:** **NTP** keeps every device's clock in sync with a reliable source, ranked by **stratum** (lower = closer/more accurate). Accurate time matters for **logs, certificates, and logins**. **SNMP** monitors devices; **Syslog** centralizes their logs. These quiet services keep a network on time, watched, and logged.

💡 **Tip:** On Windows, `w32tm /query /status` shows your time **Source** and **Stratum**; `w32tm /query /source` shows just the source.

⚠️ **Watch out:** A clock that's off by minutes can cause "weird" failures — rejected certificates, failed logins — that look like other problems. Check the time first.

---

## 4. Real-world analogy

> **"NTP is everyone setting their watch to the same official clock tower."**

| Town | Network |
|------|---------|
| The official clock tower | The reliable **time source** (stratum 0) |
| Setting your watch to it | **NTP** syncing the clock |
| How many people down the chain | The **stratum** level |
| The building manager reading gauges | **SNMP** monitoring |
| The shared event logbook | **Syslog** central logging |

If everyone sets their watch to the same tower, meetings start together and logs agree. That's all NTP is really doing.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **NTP** | N-T-P | Keeps device clocks synchronized to a reliable time source. |
| **Stratum** | STRAT-um | An NTP level showing how far a clock is from the true source (lower = closer). |
| **SNMP** | S-N-M-P | Lets a central manager monitor and manage network devices. |
| **Syslog** | SIS-log | A standard for sending device log messages to a central server. |

---

## 6. ASCII diagram

```
   NTP — KEEPING CLOCKS IN SYNC (by stratum)

   Stratum 0:  [atomic clock / GPS]   ← the true source (not networked)
                     │
   Stratum 1:  [primary time server]  ← directly attached (most accurate)
                     │
   Stratum 2:  [server] ── your router ── your laptop
                     (each step: a little further from the true time)

   Lower stratum = closer to the source = more accurate.

   OTHER HELPERS:  SNMP = monitor devices    Syslog = central logbook
   WHY TIME MATTERS:  logs line up · certificates valid · logins work
```

_Everyone sets the same clock. Lower stratum is closer to the true source._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-09-05-ntp-stratum-01.svg` (created and stored in this module's `assets/`)
> **Shows:** the NTP stratum chain from a stratum 0 source down through stratum 1 and 2 to a laptop, plus a small panel for SNMP and Syslog and a "why time matters" list.
> **Key elements & labels:** stratum 0 (atomic/GPS), stratum 1, stratum 2, laptop; "lower = closer/more accurate"; SNMP = monitor, Syslog = central logs; logs/certificates/logins.
> **Color meaning:** each stratum level is labeled with its number and role in text, not color alone.
> **Flow direction:** top-to-bottom stratum chain.
> **Alt text (required):** "The NTP stratum chain for keeping clocks in sync. At the top is stratum 0, the true source such as an atomic clock or GPS, which is not on the network. Below it, stratum 1 is a primary time server connected directly to stratum 0 and is the most accurate networked time. Stratum 2 servers get their time from stratum 1 and are slightly less exact, then pass it to a router and a laptop. The label notes that a lower stratum number is closer to the source and more accurate. A side panel explains two more services: SNMP lets a manager monitor network devices, and Syslog sends device logs to a central server. A list shows why accurate time matters: logs line up, certificates stay valid, and logins work."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-09-05-w32tm-01.jpg`
> A `w32tm /query /status` result showing Source and Stratum. Alt text: "The w32tm query status output showing the time source and the stratum number."
>
> **Photo 2** — `img-09-05-syslog-server-01.jpg`
> A syslog server screen collecting messages from several devices. Alt text: "A syslog server screen listing log messages received from several network devices."

---

## 9. Hands-on lab

**Goal:** find your laptop's time source and stratum, and confirm its clock is synced.
**Why:** seeing your own stratum makes the NTP chain real.

**You will need**
- Your Windows laptop (Equipment tier **E1**), on a network. Estimated time: 10 min.

⚠️ **Before you start (safety):** These `w32tm /query` commands only **read**. Nothing changes.

### 9a. Step-by-step instructions

1. Open the **Command Prompt** (Start → type `cmd` → Enter).
2. Type this exact command and press **Enter**:

   ```
   w32tm /query /source
   ```

3. Read the **source** — the time server your laptop uses.
4. Now run:

   ```
   w32tm /query /status
   ```

5. Find the **Stratum** line and the **Last Successful Sync Time**. Write them down.

### 9b. Expected results

`w32tm /query /status` shows lines like these (your values differ):

```
   Leap Indicator: 0(no warning)
   Stratum: 4 (secondary reference - syncd by (S)NTP)
   ...
   Source: time.windows.com
   Last Successful Sync Time: 8/4/2026 9:15:03 AM
```

- The **Stratum** is a small number (often 3–5 for a laptop).
- ✅ **You did it if:** you found your time **source** and your **stratum** number.

### 9c. Verify it worked

1. Say your stratum number, and explain: a **lower** number means closer to the true clock.
2. Name one thing that would break if your clock were far off (logs, certificates, or logins).

### 9d. Reset / roll back

Nothing changed — `w32tm /query` only reads. Close the window when done.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking a **higher** stratum is better | Backwards | **Lower** stratum = closer to the source = better |
| Ignoring the clock when things fail | Wasted time | A wrong clock breaks certificates and logins |
| Confusing SNMP and Syslog | Exam miss | SNMP = monitor/manage; Syslog = central logs |
| Assuming stratum 0 is a server you reach | Wrong model | Stratum 0 is the reference clock, not on the network |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Certificate errors on many sites | Clock is wrong | Fix the time; check the NTP source (`w32tm`) |
| Logins fail with "time" errors | Clock skew too large | Sync the clock to a good NTP source |
| Logs from two devices don't line up | No/poor time sync | Point both at the same NTP server |
| `w32tm` shows a high stratum or no sync | Bad/unreachable source | Set a reliable NTP source and re-sync |

---

## 12. Lesson summary

- **NTP** keeps every device's clock **synchronized** to a reliable time source.
- **Stratum** ranks how close a clock is to the true source — **lower = closer = more accurate**.
- Accurate time matters for **logs**, **certificates**, and some **logins**.
- **SNMP** monitors/manages devices; **Syslog** collects their logs centrally.

**One-sentence recap:** NTP keeps clocks in sync (ranked by stratum, lower being closer to the true source), which keeps logs, certificates, and logins working — while SNMP watches devices and Syslog centralizes their logs.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-09-05-fill-in-the-blank.md`
2. **Matching** — `wb-09-05-matching.md`
3. **Label the diagram** — `wb-09-05-label-the-diagram.md` (the stratum chain)
4. **Short answer** — `wb-09-05-short-answer.md`
5. **Hands-on observation** — `wb-09-05-hands-on-observation.md` (w32tm)
6. **Vocabulary review** — `wb-09-05-vocabulary-review.md`
7. **Reflection** — `wb-09-05-reflection.md`

**Quick written warm-up (do this now):** Which is more accurate — stratum 1 or stratum 3? What does NTP keep in sync?

More accurate: ____________  NTP syncs: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-09-05-knowledge-check.md`.)

1. What does **NTP** do? *(Objective: definition)*
   - A) assigns IP addresses
   - B) keeps device clocks synchronized
   - C) turns names into IPs
   - D) blocks attacks

2. In NTP, a **lower** stratum number means… *(Objective: stratum)*
   - A) further from the true source
   - B) closer to the true source (more accurate)
   - C) a slower network
   - D) an error

3. **Stratum 0** is… *(Objective: stratum)*
   - A) a server you connect to
   - B) the reference clock (atomic/GPS), not on the network
   - C) the least accurate level
   - D) a router

4. Which service **monitors** network devices? *(Objective: SNMP)*
   - A) SNMP
   - B) Syslog
   - C) DHCP
   - D) NTP

5. Which service collects **log messages** centrally? *(Objective: Syslog)*
   - A) NTP
   - B) Syslog
   - C) DNS
   - D) ARP

6. **True or false —** A wrong clock can cause certificate and login failures. Explain in one sentence. *(Objective: why time)*

7. A stratum **2** server gets its time from a stratum… *(Objective: stratum)*
   - A) 0 server
   - B) 1 server
   - C) 3 server
   - D) 4 server

8. **Matching —** write the letter next to each service. *(Objective: services)*
   - ___ NTP &nbsp;&nbsp; ___ SNMP &nbsp;&nbsp; ___ Syslog
   - A) monitor/manage devices &nbsp; B) central logging &nbsp; C) keep clocks in sync

9. Fill in the blank: The Windows command to check your time source and stratum is ____________. *(Objective: tool)*

10. **Scenario —** Several servers show certificate errors and their logs are minutes apart. What service is likely misconfigured, and what does it do? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-09-05-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-09-05-ntp.md`. In brief:

- **Objective in one line:** learners explain NTP and stratum, why accurate time matters, and what SNMP and Syslog do.
- **Common misconceptions:** higher stratum is better; stratum 0 is a server; SNMP = Syslog. Correct all three.
- **Pacing:** ~26 min. The clock-tower analogy carries NTP; the `w32tm` lab shows a real stratum.
- **How CompTIA tests it:** NTP purpose; stratum direction (lower = better); SNMP (monitoring) vs. Syslog (logging).
- **Accuracy note:** `w32tm /query` is a real Windows command; sample output (stratum, source) is representative. No fabricated device data.
- **Extension idea:** SNMP versions/traps, syslog severity levels, and NTP security (spoofing), for fast learners.

---

## 17. Cheat sheet

> **Quick reference — NTP & supporting services**
>
> - **NTP** = keeps device clocks **synchronized** to a reliable source.
> - **Stratum** = distance from the true clock. **Lower = closer = more accurate.**
>   - Stratum 0 = the reference (atomic/GPS, not networked) · 1 = directly attached · 2 = syncs from 1 · …
> - **Why time matters:** logs line up · certificates valid · logins work.
> - **SNMP** = monitor/manage devices. **Syslog** = central logging.
> - Check it: **`w32tm /query /status`** (Source + Stratum).
>
> _(Full version: `resources/cheat-sheets/network-services-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **NTP** — Keeps device clocks synchronized to a reliable time source.
- **Stratum** — An NTP level showing how far a clock is from the true source (lower = closer).
- **SNMP** — Lets a central manager monitor and manage network devices.
- **Syslog** — A standard for sending device log messages to a central server.

---

## 19. Homework

- **Practice:** Run `w32tm /query /status`; note your stratum and source. Try it again tomorrow.
- **Spaced review:** Redo the Module 09 flashcards on DHCP, DNS, NAT, and gateways.
- **Preview:** Next module (10) covers the **ports and protocols** the exam expects you to know cold.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I explain why accurate time matters now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain what NTP does and why time matters.
- [ ] I can explain stratum (lower = closer/more accurate).
- [ ] I can say what SNMP and Syslog do.
- [ ] I checked my time source with `w32tm`.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next module: ports and protocols.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

**🎉 Module 09 complete!** You can now explain the core services that make networks usable — DHCP, DNS, NAT, gateways, and NTP. Next up: the ports and protocols behind them.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M09-L05** — "Time (NTP) and Other Supporting Services" · Module 09 · Unit 6_
