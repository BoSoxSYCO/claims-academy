---
id: NA-M14-L03
module: 14
lesson: 03
title: "More Tools: arp, netstat, pathping"
unit: 11
objective_ids: ["5.5"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E2
prerequisites: ["NA-M14-L02", "NA-M09-L04", "NA-M10-L01"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-07"
---

# [Module 14 · Lesson 03] More Tools: arp, netstat, pathping

> **Unit:** Unit 11 — Network Troubleshooting · **Time:** ~30 min · **Equipment:** E2 (your Windows laptop)
> **You'll need first:** the four basic tools (14-02), ARP (09-04), and ports/sockets (10-01).

Lesson 14-02 gave you the everyday four. Now we add three more for deeper problems. **arp** shows who's who on your local network. **netstat** shows what your computer is talking to. **pathping** finds where a path loses packets. All three are real, safe Windows commands.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Use **arp -a** to see the **ARP table** (IP-to-MAC pairs).
- [ ] Use **netstat** to see active connections and listening ports.
- [ ] Use **pathping** to find where a path loses packets.
- [ ] Pick the right one of these three for a problem.

---

## 2. Introduction — why this matters

The basic four answer "can I reach it?" and "what's my address?" But some problems go deeper. Which device really has that IP? What is my computer connected to right now? A path works, but it's slow and drops data — where?

Three more tools answer these. Each is built into Windows and safe to run:

- **arp** — which MAC address goes with each local IP?
- **netstat** — what connections and open ports does my computer have?
- **pathping** — along a path, where is the packet loss?

CompTIA still asks "which tool fits this problem?" These three cover the harder cases. Learn what each reveals.

🎯 **Exam tip:** Match the tool to the clue. Local IP-to-MAC → arp. Connections/ports → netstat. Where loss happens → pathping.

🔧 **Lab link:** You'll run all three on your Windows laptop.

---

## 3. Simple explanation

Open the command line first: **Start** → type **cmd** → **Enter**.

### arp -a — who's who locally

**ARP** (from Module 09) is how a device matches an IP to a MAC address on the local network. Your computer keeps those pairs in an **ARP table** (also called the ARP cache).

```
arp -a
```

This lists each local **IP address** with the **MAC address** it learned for it. Use it to spot a wrong or duplicate mapping — for example, two devices claiming one IP.

> A typical row reads `192.168.1.1  aa-bb-cc-dd-ee-ff  dynamic`. The real IPs and MACs on your network differ. **[TO VERIFY ON HARDWARE]**

### netstat — what am I connected to?

**netstat** shows your computer's active network connections and its **listening ports** (from Module 10). It answers "what is my machine talking to, and what is waiting for calls?"

Common switches:

- `netstat -a` — show all connections and listening ports.
- `netstat -n` — show numbers only (no name lookups); it's faster.
- `netstat -an` — both together.

```
netstat -an
```

Each line shows a local address and port, a remote address and port, and a state (like `LISTENING` or `ESTABLISHED`).

> Your connection list is unique to your computer and changes constantly. Treat any sample as an example. **[TO VERIFY ON HARDWARE]**

### pathping — where is the loss?

**pathping** combines **ping** and **tracert**. First it traces the path. Then it tests each **hop** over time and reports **packet loss** per hop. It shows not just *where* the path goes, but *where it drops data*.

```
pathping 8.8.8.8
```

It takes a while — often a few minutes — because it gathers data at each hop. The payoff is a per-hop loss report, which pinpoints a bad link.

> Hop lists and loss percentages differ on every network and over time. Any sample is an example only. **[TO VERIFY ON HARDWARE]**

> **The big idea:** Three deeper Windows tools. **arp -a** shows the **ARP table** — the local IP-to-MAC pairs your computer learned. **netstat** shows active connections and **listening ports**. **pathping** blends ping and tracert to show a path *and* the **packet loss** at each hop. Pick by the clue: local mapping → arp, connections/ports → netstat, where-loss-happens → pathping.

💡 **Tip:** `pathping` is slow on purpose — it's measuring loss over time. Let it finish.

⚠️ **Watch out:** `netstat` output looks scary at first. You don't need every line — scan for unexpected remote addresses or ports.

---

## 4. Real-world analogy

> **"These three are deeper diagnostic tools in the kit."**

| Everyday picture | Tool |
|------------------|------|
| A "who's who" list of neighbors and their door numbers | arp (IP → MAC) |
| A log of every call your phone has open right now | netstat |
| A delivery report showing where packages get lost | pathping |

Know your neighbors (arp), see your open calls (netstat), and find the leaky stop on the route (pathping).

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **ARP table** | A-R-P TAY-bul | The list of local IP-to-MAC pairs a device has learned. |
| **netstat** | NET-stat | A command showing active connections and listening ports. |
| **pathping** | PATH-ping | A command that shows a path and the packet loss at each hop. |
| **Packet loss** | | The share of messages that got no reply (0% is best). |
| **Listening port** | | A port waiting to accept incoming connections. |

---

## 6. ASCII diagram

```
   THE CLUE                     THE TOOL        SHOWS
   --------                     --------        -----
   Which MAC has this local IP? arp -a          IP -> MAC pairs (ARP table)
   What am I connected to?      netstat -an      connections + listening ports
   Where does the path lose?    pathping 8.8.8.8 path + packet loss per hop
```

_arp = local who's-who · netstat = my connections · pathping = where loss happens._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-14-03-arp-netstat-pathping-01.svg` (created and stored in this module's `assets/`)
> **Shows:** three tool cards — arp, netstat, pathping — each with the clue it answers, its command, and what it reveals.
> **Key elements & labels:** each card names the tool, the clue ("which MAC has this local IP?", "what am I connected to?", "where does the path lose packets?"), the command, and the output type.
> **Color meaning:** each card is titled in words; the clue and command are text, not color-coded.
> **Flow direction:** three cards left to right.
> **Alt text (required):** "Three tool cards. Card one, arp: answers 'which MAC address goes with this local IP?' with the command arp dash a, showing the ARP table of IP-to-MAC pairs the computer has learned. Card two, netstat: answers 'what is my computer connected to, and what ports are listening?' with the command netstat dash a n, showing active connections and listening ports. Card three, pathping: answers 'where along the path does it lose packets?' with the command pathping 8.8.8.8, combining ping and tracert to show the path and the packet loss at each hop. A note reminds that all IPs, MACs, connections, and loss values vary by computer and network."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-14-03-cmd-arp-01.jpg`
> A Command Prompt after `arp -a`. Alt text: "A Command Prompt showing an arp -a table of local IP addresses and their MAC addresses (values vary by network)."
>
> **Photo 2** — `img-14-03-cmd-netstat-01.jpg`
> A Command Prompt after `netstat -an`. Alt text: "A Command Prompt showing netstat output with local and remote addresses, ports, and connection states, which differ on every computer."

---

## 9. Hands-on lab

**Goal:** run all three tools on your Windows laptop and read what they show.
**Why:** these are the go-to commands when the basic four aren't enough.

**You will need**
- Your Windows laptop, online. Estimated time: 20 min.

⚠️ **Before you start (safety):** these commands only read and report. They change no settings.

### 9a. Step-by-step instructions

1. Open the command line: **Start** → type **cmd** → **Enter**.
2. Type `arp -a` and press **Enter**. Find your router's IP and the MAC beside it.
3. Type `netstat -an` and press **Enter**. Look for lines that say **LISTENING** and **ESTABLISHED**.
4. Type `pathping 8.8.8.8` and press **Enter**. Wait for it to finish (a few minutes). Read the per-hop loss.

### 9b. Expected results

- `arp -a` lists local IPs with MAC addresses.
- `netstat -an` lists connections and listening ports with states.
- `pathping` lists the hops and a loss figure for each.

- ✅ **You did it if:** you saw real output from all three commands.

> ⚠️ Every value — IPs, MACs, connections, loss percentages — varies by computer and network. Read your own output; don't expect the samples. **[TO VERIFY ON HARDWARE]**

### 9c. Verify it worked

1. In `arp -a`, point to your default gateway's IP and its MAC.
2. In `pathping`, say which hop (if any) showed loss, and what that hints at.

### 9d. Reset / roll back

Nothing changed — all three are read-only. Close the window when done.

> 🔧 **Home-lab continuity:** note your gateway's MAC from `arp -a`. You'll use these tools again in Lessons 14-05 and 14-07.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Expecting the sample rows | Yours differ | Read your own output |
| Stopping `pathping` early | You miss the loss data | Let it run to the end |
| Panicking at `netstat` output | It looks like a lot | Scan for odd remote addresses/ports |
| Using arp for far devices | arp is local only | Use tracert/pathping for the path |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Two devices fight over one IP | Duplicate IP | Check `arp -a` for a changed/odd MAC |
| A program can't connect | Its port isn't listening | `netstat -an` — is the port LISTENING? |
| A path is slow and drops data | Loss at one hop | `pathping` — find the hop with loss |
| arp shows nothing useful for a site | It's not local | Use tracert/pathping instead |

---

## 12. Lesson summary

- **arp -a** shows the **ARP table** — local IP-to-MAC pairs.
- **netstat** shows active connections and **listening ports** (`-an` = numbers, all).
- **pathping** shows a path and the **packet loss** at each hop.
- Pick by the clue: local mapping → arp, connections → netstat, where-loss → pathping.

**One-sentence recap:** arp shows local IP-to-MAC pairs, netstat shows your connections and open ports, and pathping shows where along a path packets are lost.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-14-03-fill-in-the-blank.md`
2. **Matching** — `wb-14-03-matching.md`
3. **Label the diagram** — `wb-14-03-label-the-diagram.md` (tool → clue)
4. **Short answer** — `wb-14-03-short-answer.md`
5. **Hands-on observation** — `wb-14-03-hands-on-observation.md` (run the three tools)
6. **Vocabulary review** — `wb-14-03-vocabulary-review.md`
7. **Reflection** — `wb-14-03-reflection.md`

**Quick written warm-up (do this now):** Which tool shows local IP-to-MAC pairs? Which shows per-hop packet loss?

IP-to-MAC: ____________  Per-hop loss: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-14-03-knowledge-check.md`.)

1. **arp -a** shows… *(Objective: tool)*
   - A) the path to a website
   - B) local IP-to-MAC pairs (the ARP table)
   - C) your Wi-Fi password
   - D) the DNS cache

2. **netstat** shows… *(Objective: tool)*
   - A) active connections and listening ports
   - B) cable length
   - C) the ARP table
   - D) the router's firmware

3. **pathping** is best described as… *(Objective: tool)*
   - A) ipconfig plus nslookup
   - B) ping plus tracert, with per-hop loss
   - C) a backup tool
   - D) a firewall rule

4. **Packet loss** of 0% means… *(Objective: concept)*
   - A) every message got no reply
   - B) no messages were lost — good
   - C) the cable is broken
   - D) the port is closed

5. The `-n` switch on `netstat`… *(Objective: tool)*
   - A) turns off the network
   - B) shows numbers only (no name lookups), which is faster
   - C) deletes connections
   - D) pings a name

6. **True or false —** arp is useful for finding the MAC of a server across the internet. Explain in one sentence. *(Objective: apply)*

7. Which tool would you use to find where a slow path is losing data? *(Objective: apply)*
   - A) arp
   - B) netstat
   - C) pathping
   - D) ipconfig

8. **Matching —** match each tool to what it reveals. *(Objective: tools)*
   - ___ arp &nbsp;&nbsp; ___ netstat &nbsp;&nbsp; ___ pathping
   - A) Path + packet loss per hop
   - B) Local IP-to-MAC pairs
   - C) Connections + listening ports

9. Fill in the blank: A port that is waiting to accept incoming connections shows the state ____________ in netstat. *(Objective: concept)*

10. **Scenario —** A program on your PC can't connect to its server. You suspect the program isn't even listening. Which tool checks that, and what would you look for? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-14-03-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-14-03-arp-netstat-pathping.md`. In brief:

- **Objective in one line:** learners use arp -a, netstat, and pathping and match each to the clue it answers.
- **Common misconceptions:** "the sample rows are what I'll see"; "arp works across the internet"; "pathping is broken because it's slow." Correct each.
- **Pacing:** ~30 min. The deeper-kit analogy carries it; the three-command lab is the payoff (budget time for pathping to finish).
- **How CompTIA tests it:** match tool to clue; arp = local IP-to-MAC; netstat = connections/ports; pathping = path + loss.
- **Accuracy note (Prime Directive #7):** all three commands are real and safe on Windows. Every shown row/percentage is a typical example that varies, marked `[TO VERIFY ON HARDWARE]`. No specific table row is presented as fact.
- **Extension idea:** `netstat -o` (owning process ID), `-b` (program name, admin); `arp -d` to clear the cache; `pathping -q`/`-p` timing switches.

---

## 17. Cheat sheet

> **Quick reference — Three deeper CLI tools**
>
> | Clue | Command | Shows |
> |------|---------|-------|
> | Local IP → MAC? | `arp -a` | the ARP table (IP-to-MAC pairs) |
> | My connections/ports? | `netstat -an` | connections + listening ports |
> | Where does a path lose? | `pathping 8.8.8.8` | path + packet loss per hop |
>
> - `netstat` states: **LISTENING** (waiting) · **ESTABLISHED** (connected).
> - `arp` is **local only** — for the path, use tracert/pathping.
> - `pathping` is slow on purpose (measuring loss over time).
> - ⚠️ Every row/percentage **varies** — read your own output.
>
> _(Full version: `resources/cheat-sheets/troubleshooting-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **ARP table** — The list of local IP-to-MAC pairs a device has learned (also called the ARP cache).
- **netstat** — A command that shows a computer's active connections and listening ports.
- **pathping** — A command that combines ping and tracert to show a path and the packet loss at each hop.

(ARP was defined in 09-04, Packet loss in 02-05, Port/Port number/Socket in Modules 01/09/10, hop in Module 05, and MAC address earlier — all reused here.)

---

## 19. Homework

- **Practice:** Run `arp -a` before and after visiting a new local device; watch the table grow.
- **Spaced review:** Say which of the three tools answers each clue, from memory.
- **Preview:** Next, **Lesson 14-04 — Hardware tools: cable testers and loopbacks**.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Which of the three will you reach for first, and why? _______________________
3. What was hardest — reading netstat, or waiting through pathping?
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can use arp -a to see the ARP table.
- [ ] I can use netstat to see connections and listening ports.
- [ ] I can use pathping to find where a path loses packets.
- [ ] I can pick the right one of these three for a problem.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I'm ready for Lesson 14-04 (hardware tools).

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M14-L03** — "More Tools: arp, netstat, pathping" · Module 14 · Unit 11_
