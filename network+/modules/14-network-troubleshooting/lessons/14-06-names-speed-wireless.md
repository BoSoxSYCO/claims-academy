---
id: NA-M14-L06
module: 14
lesson: 06
title: "Troubleshooting Names, Speed, and Wireless"
unit: 11
objective_ids: ["5.2", "5.3", "5.4"]
reading_level_target: 7
status: Published
est_minutes: 35
equipment_tier: E2
prerequisites: ["NA-M14-L02", "NA-M14-L05", "NA-M11-L07"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-07"
---

# [Module 14 · Lesson 06] Troubleshooting Names, Speed, and Wireless

> **Unit:** Unit 11 — Network Troubleshooting · **Time:** ~35 min · **Equipment:** E2 (your Windows laptop, Wi-Fi)
> **You'll need first:** DNS/nslookup (14-02), the layer ladder (14-05), and Wi-Fi (11-07).

Layer 1–3 covers "no connection." But some problems are subtler. A name won't load, though the internet works. Everything is just slow. Wi-Fi keeps dropping. This lesson sorts these three common complaints and gives you the fix for each.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Diagnose a name resolution (DNS) problem and flush the **DNS cache**.
- [ ] Name the common **speed** problems: **duplex mismatch**, **bandwidth saturation**, **latency**, **jitter**.
- [ ] Diagnose **wireless** problems: weak **RSSI**, channel overlap, wrong **band**.
- [ ] Match each symptom to its likely cause and tool.

---

## 2. Introduction — why this matters

Three complaints come up again and again:

- "That website won't load — but others do." → a **name** (DNS) problem.
- "Everything is so slow today." → a **speed** problem.
- "My Wi-Fi keeps dropping." → a **wireless** problem.

Each family has its own clues and fixes. A name problem is not a speed problem. Sorting the complaint into the right family is half the battle. The exam tests exactly this — matching a symptom to its cause.

🎯 **Exam tip:** "Can ping the IP but not the name" is the classic clue for a **DNS** problem.

🔧 **Lab link:** You'll test DNS, flush the DNS cache, and check your Wi-Fi signal.

---

## 3. Simple explanation

### Family 1 — Name resolution (DNS)

Symptom: a name won't load, but a direct IP works.

- Test it: `ping 8.8.8.8` works, `ping www.google.com` fails → it's **DNS** (from Module 09).
- Check your **DNS** server in `ipconfig /all`. Is it set right?
- Look it up: `nslookup www.example.com` (from 14-02). Does DNS return an IP?
- Clear a stale/bad entry from the **DNS cache**:

```
ipconfig /flushdns
```

### Family 2 — Speed and performance

Symptom: it works, but it's slow. Several causes:

- A **duplex mismatch** (from 14-05) — errors and slowness.
- **Bandwidth saturation** — the link is full. **Bandwidth saturation** means so much traffic is flowing that there's no room left; new traffic waits.
- High **latency** (delay) or **jitter** (delay that keeps changing) — bad for calls and video.
- A bad cable or **interference** — errors force resends.

Know the difference: **bandwidth** is the pipe's size, **throughput** is what actually gets through, **latency** is the delay, and **jitter** is how much that delay wobbles.

### Family 3 — Wireless

Symptom: Wi-Fi is weak or keeps dropping.

- Weak signal — low **RSSI**. **RSSI** is the received signal strength; the farther you are (or the more walls), the weaker it gets. That's **attenuation**.
- Channel overlap — too many networks on the same **channel**. Use a **Wi-Fi analyzer** (from 14-04) to pick a clear one.
- Wrong **band** — 2.4 GHz reaches farther but is slower and crowded; 5 GHz is faster but shorter range.
- **Interference** — microwaves, cordless phones, and walls all hurt the signal.
- Wrong passphrase or **SSID** — you joined the wrong network, or typed the password wrong.

> **The big idea:** Sort the complaint into one of three families. A **name** problem is **DNS** — the IP works but the name fails; check the DNS server, use **nslookup**, and `ipconfig /flushdns`. A **speed** problem has many causes — **duplex mismatch**, **bandwidth saturation**, high **latency**/**jitter**, or a bad cable. A **wireless** problem is usually weak signal (**RSSI**/**attenuation**), channel overlap, the wrong **band**, **interference**, or a wrong **SSID**/passphrase.

💡 **Tip:** For any "slow" report, first ask: wired or wireless? That splits the causes in half.

⚠️ **Watch out:** More **bandwidth** doesn't fix high **latency**. A wide pipe can still be slow to respond.

---

## 4. Real-world analogy

> **"Three complaints, like problems at a busy diner."**

| Diner problem | Network family |
|---------------|----------------|
| The phone book lists the wrong number | Name (DNS) |
| The kitchen is backed up; food is slow | Speed (saturation, latency) |
| You can't hear the waiter across the room | Wireless (weak RSSI, far away) |

Find the right kind of problem first — then the fix is obvious.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **RSSI** | R-S-S-I | Received signal strength — how strong the Wi-Fi signal is. |
| **Bandwidth saturation** | | The link is full; no room left for more traffic. |
| **Jitter** | JIT-ter | How much the delay (latency) changes from moment to moment. |
| **Throughput** | THROO-put | The data that actually gets through in real use. |
| **DNS cache** | | A short local store of recent name-to-IP answers. |

---

## 6. ASCII diagram

```
   THE COMPLAINT              LIKELY CAUSE               FIX / TOOL
   -------------              ------------               ----------
   Name won't load (IP does)  DNS                        nslookup · ipconfig /flushdns
   Everything is slow         duplex mismatch · full     match duplex · check load ·
                              link · latency/jitter      test wired vs wireless
   Wi-Fi weak / dropping      low RSSI · channel · band  move closer · pick a clear
                              · interference             channel · Wi-Fi analyzer
```

_Sort the complaint into name / speed / wireless — then fix its cause._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-14-06-names-speed-wireless-01.svg` (created and stored in this module's `assets/`)
> **Shows:** three symptom-family cards — Name (DNS), Speed, Wireless — each with the symptom, likely causes, and the tool/fix.
> **Key elements & labels:** Name card (symptom "name fails, IP works" → DNS → nslookup, ipconfig /flushdns); Speed card (symptom "slow" → duplex mismatch, bandwidth saturation, latency/jitter → match duplex, check load); Wireless card (symptom "weak/dropping" → low RSSI, channel overlap, wrong band, interference → move closer, pick a channel, Wi-Fi analyzer).
> **Color meaning:** each card is titled in words; symptoms/causes/fixes are text, not color-coded.
> **Flow direction:** three cards left to right.
> **Alt text (required):** "Three troubleshooting cards, one per complaint. Card one, Name: the symptom is that a website name will not load even though a direct IP works; the cause is DNS; the fix is to check the DNS server, use nslookup, and run ipconfig slash flushdns to clear the DNS cache. Card two, Speed: the symptom is that everything is slow; causes include a duplex mismatch, bandwidth saturation where the link is full, and high latency or jitter; fixes include matching the duplex, checking the load, and testing wired versus wireless. Card three, Wireless: the symptom is weak or dropping Wi-Fi; causes include low RSSI signal strength, channel overlap, the wrong band, and interference; fixes include moving closer, picking a clear channel with a Wi-Fi analyzer, and choosing the right band."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-14-06-flushdns-01.jpg`
> A Command Prompt after `ipconfig /flushdns`. Alt text: "A Command Prompt showing the ipconfig /flushdns command, which clears the DNS cache of stale name-to-IP entries."
>
> **Photo 2** — `img-14-06-wifi-signal-01.jpg`
> A Wi-Fi signal display. Alt text: "A Wi-Fi status screen showing signal strength (RSSI); a weak signal points to a wireless problem like distance or interference."

---

## 9. Hands-on lab

**Goal:** test DNS, flush the DNS cache, and check your Wi-Fi signal.
**Why:** these are the exact checks for the three complaint families.

**You will need**
- Your Windows laptop, on Wi-Fi, online. Estimated time: 20 min.

⚠️ **Before you start (safety):** these commands only test and clear a cache. They change no settings and don't disconnect you.

### 9a. Step-by-step instructions

**Name (DNS):**

1. Open **cmd**. Run `ping 8.8.8.8`, then `ping www.google.com`. If the IP works but the name fails, it's DNS.
2. Run `nslookup www.example.com`. Note the IP it returns.
3. Run `ipconfig /flushdns` to clear the DNS cache. You should see a "Successfully flushed" message.

**Wireless (signal):**

4. Run `netsh wlan show interfaces`. Find the **Signal** line — that's your Wi-Fi strength (an RSSI reading).
5. Walk to another room and run it again. Watch the **Signal** number drop with distance.

### 9b. Expected results

- `ipconfig /flushdns` reports the DNS Resolver Cache was flushed.
- `netsh wlan show interfaces` shows a **Signal** percentage that falls as you move away.

- ✅ **You did it if:** you flushed DNS and saw your signal change with distance.

> ⚠️ Exact IPs, signal percentages, and messages vary by device and network. Read your own output. **[TO VERIFY ON HARDWARE]**

### 9c. Verify it worked

1. Explain what "ping IP works, ping name fails" tells you (DNS).
2. Say what happened to your **Signal** number as you moved away (it dropped — attenuation).

### 9d. Reset / roll back

Nothing changed — you tested and cleared a cache. No settings altered.

> 🔧 **Home-lab continuity:** note your normal Wi-Fi signal in your main spot. You'll use this in Lesson 14-07.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Blaming the connection for a name fail | You miss a DNS issue | Ping the IP; if it works, it's DNS |
| Thinking more bandwidth fixes lag | Latency stays high | Bandwidth ≠ latency |
| Ignoring channel overlap | Wi-Fi stays flaky | Use a Wi-Fi analyzer; pick a clear channel |
| Standing far from the AP | Weak RSSI, drops | Move closer or add an access point |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Names fail, IPs work | DNS | Check DNS server; `nslookup`; `ipconfig /flushdns` |
| Video calls choppy | Jitter / latency | Test wired; reduce load; check the path (pathping) |
| Downloads crawl at busy times | Bandwidth saturation | Check who/what is using the link |
| Wi-Fi drops in far rooms | Low RSSI / attenuation | Move closer; add an AP; change channel/band |

---

## 12. Lesson summary

- **Name** problem = **DNS**: IP works, name fails → check DNS, `nslookup`, `ipconfig /flushdns`.
- **Speed** problem = **duplex mismatch**, **bandwidth saturation**, **latency**, or **jitter** (bandwidth ≠ latency).
- **Wireless** problem = weak **RSSI**/**attenuation**, channel overlap, wrong **band**, or **interference**.
- Sort the complaint first; the fix follows.

**One-sentence recap:** Split every complaint into name (DNS), speed (duplex/saturation/latency), or wireless (signal/channel/band), then apply that family's fix.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-14-06-fill-in-the-blank.md`
2. **Matching** — `wb-14-06-matching.md`
3. **Label the diagram** — `wb-14-06-label-the-diagram.md` (the three families)
4. **Short answer** — `wb-14-06-short-answer.md`
5. **Hands-on observation** — `wb-14-06-hands-on-observation.md` (DNS + Wi-Fi signal)
6. **Vocabulary review** — `wb-14-06-vocabulary-review.md`
7. **Reflection** — `wb-14-06-reflection.md`

**Quick written warm-up (do this now):** "Ping the IP works, ping the name fails." What kind of problem is it? What command clears the DNS cache?

Problem: ____________  Command: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-14-06-knowledge-check.md`.)

1. "Ping the IP works, but ping the name fails." This is a… *(Objective: name)*
   - A) power problem
   - B) DNS (name resolution) problem
   - C) cable problem
   - D) firewall rule

2. The command to clear the DNS cache is… *(Objective: name)*
   - A) `ipconfig /flushdns`
   - B) `ping /clear`
   - C) `tracert /reset`
   - D) `nslookup /flush`

3. **Bandwidth saturation** means… *(Objective: speed)*
   - A) the cable is too short
   - B) the link is full; there's no room for more traffic
   - C) the DNS is wrong
   - D) the signal is weak

4. **Jitter** is… *(Objective: speed)*
   - A) the size of the pipe
   - B) how much the delay changes moment to moment
   - C) a DNS record
   - D) a Wi-Fi channel

5. A weak Wi-Fi signal is shown by a low… *(Objective: wireless)*
   - A) TTL
   - B) RSSI
   - C) MAC
   - D) VLAN

6. **True or false —** Buying more bandwidth will fix high latency. Explain in one sentence. *(Objective: speed)*

7. Two nearby Wi-Fi networks on the same **channel** cause… *(Objective: wireless)*
   - A) a DNS error
   - B) overlap and interference (flaky Wi-Fi)
   - C) a duplex mismatch
   - D) a broken cable

8. **Matching —** match each symptom to its family. *(Objective: apply)*
   - ___ Name fails, IP works &nbsp;&nbsp; ___ Choppy video call &nbsp;&nbsp; ___ Wi-Fi drops far from the router
   - A) Speed (latency/jitter)
   - B) Wireless (weak signal)
   - C) Name (DNS)

9. Fill in the blank: The signal weakening as you move away from the access point is called ____________. *(Objective: wireless)*

10. **Scenario —** A user says video calls are choppy on Wi-Fi but fine when wired. Name the likely family and one cause. *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-14-06-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-14-06-names-speed-wireless.md`. In brief:

- **Objective in one line:** learners sort a complaint into name (DNS), speed, or wireless, and match each symptom to a cause and tool.
- **Common misconceptions:** "a name fail is a connection problem"; "more bandwidth fixes latency"; "weak Wi-Fi is always the router." Correct each.
- **Pacing:** ~35 min. The busy-diner analogy carries it; the DNS + Wi-Fi-signal lab is the payoff.
- **How CompTIA tests it:** ping-IP-works-name-fails = DNS; bandwidth vs. latency vs. jitter; low RSSI/channel/band for wireless.
- **Accuracy note (Prime Directive #7):** `nslookup`, `ipconfig /flushdns`, and `netsh wlan show interfaces` are real Windows commands; outputs (IPs, signal %, messages) are examples that vary, marked `[TO VERIFY ON HARDWARE]`.
- **Extension idea:** speed-test tools; QoS for jitter-sensitive traffic; roaming/AP placement; 2.4 vs. 5 vs. 6 GHz trade-offs.

---

## 17. Cheat sheet

> **Quick reference — Names, speed, wireless**
>
> | Complaint | Family | Fix / tool |
> |-----------|--------|-----------|
> | Name fails, IP works | **DNS** | check DNS server · `nslookup` · `ipconfig /flushdns` |
> | Slow / laggy | **Speed** | duplex mismatch · bandwidth saturation · latency/jitter |
> | Weak / dropping Wi-Fi | **Wireless** | low **RSSI** · channel overlap · wrong **band** · interference |
>
> - **Bandwidth** = pipe size · **throughput** = what gets through · **latency** = delay · **jitter** = delay wobble.
> - More bandwidth does **not** fix latency.
> - Weak signal = low **RSSI** (distance/walls = attenuation).
>
> _(Full version: `resources/cheat-sheets/troubleshooting-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **RSSI (Received Signal Strength Indicator)** — A measure of how strong a received Wi-Fi signal is.
- **Bandwidth saturation** — When a link is so full of traffic that there is no room left for more.

(DNS, DNS cache, nslookup, latency, jitter, throughput, bandwidth, interference, attenuation, band, channel, SSID, and duplex mismatch were all defined earlier — reused here.)

---

## 19. Homework

- **Practice:** Run `ipconfig /flushdns`, then browse a site — the first lookup rebuilds the cache.
- **Spaced review:** Say which family (name/speed/wireless) each common symptom belongs to.
- **Preview:** Next, **Lesson 14-07 — Worked scenarios: "the internet is down"** (the finale of Module 14).

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Which of the three complaints do you hit most at home? _______________________
3. What was hardest — the speed causes, or the wireless causes?
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can diagnose a DNS name problem and flush the DNS cache.
- [ ] I can name the common speed problems.
- [ ] I can diagnose wireless problems (RSSI, channel, band).
- [ ] I can match a symptom to its family, cause, and tool.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I'm ready for Lesson 14-07 (worked scenarios).

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M14-L06** — "Troubleshooting Names, Speed, and Wireless" · Module 14 · Unit 11_
