---
id: NA-M11-L07
module: 11
lesson: 07
title: "Wireless Standards, Channels, and Security"
unit: 8
objective_ids: ["2.4"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E1
prerequisites: ["NA-M04-L03", "NA-M07-L04"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-06"
---

# [Module 11 · Lesson 07] Wireless Standards, Channels, and Security

> **Unit:** Unit 8 — Network Implementation · **Time:** ~30 min · **Equipment:** E1 (your Windows laptop and your home Wi-Fi)
> **You'll need first:** wireless basics (04-03) and access points (07-04).

Most devices join a network with no cable at all. They use **Wi-Fi**. But Wi-Fi has many versions, two radio bands, and different locks for safety. The exam expects you to know the **standards** (like Wi-Fi 6), the **channels** and **bands**, and the **security** types (like WPA3). This lesson sorts them out in plain terms.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Name the main **Wi-Fi standards** (802.11a/b/g/n/ac/ax) and their Wi-Fi numbers.
- [ ] Explain the **2.4 GHz** and **5 GHz** bands and their trade-offs.
- [ ] Explain why **channels** matter and which 2.4 GHz channels don't overlap.
- [ ] Choose the right **wireless security** (WPA2/WPA3) and avoid old, weak ones.

---

## 2. Introduction — why this matters

Wireless is how phones, laptops, and smart devices get online. There's no cable to plug in. Instead, a device and an **access point (AP)** talk over radio waves (Lesson 07-04).

But radio is shared and open. Anyone nearby can hear it. So three things matter. **Speed** — newer standards are faster. **Space** — the right band and channel keep signals from clashing. **Safety** — good security stops strangers from joining or listening.

The exam tests all three. It asks which standard is fastest. It asks which channels don't overlap. And it asks which security type is safe today. Get these straight and wireless questions become easy points.

🎯 **Exam tip:** Know the 802.11 standards **and** their Wi-Fi names (Wi-Fi 4/5/6). Know that **WPA3** is the current best security.

🔧 **Lab link:** You'll check your own Wi-Fi's band and security on your laptop.

---

## 3. Simple explanation

### Wi-Fi standards (802.11)

Wi-Fi rules come from the **802.11** family. Each letter is a version. Newer ones are faster. They also got simple **Wi-Fi numbers** to make them easier to say.

| Standard | Wi-Fi name | Band | Rough top speed |
|----------|------------|------|-----------------|
| 802.11a | — | 5 GHz | 54 Mbps |
| 802.11b | — | 2.4 GHz | 11 Mbps |
| 802.11g | — | 2.4 GHz | 54 Mbps |
| **802.11n** | **Wi-Fi 4** | 2.4 **and** 5 GHz | 600 Mbps |
| **802.11ac** | **Wi-Fi 5** | 5 GHz | ~1.3+ Gbps |
| **802.11ax** | **Wi-Fi 6** | 2.4 **and** 5 GHz | several Gbps |

Newer standards are backward-compatible. A Wi-Fi 6 router still lets an old phone connect.

### Bands: 2.4 GHz vs. 5 GHz

A **band** is a range of radio frequencies. Wi-Fi mainly uses two.

- **2.4 GHz** — reaches **farther** and through walls, but is **slower** and crowded (microwaves and neighbors use it too).
- **5 GHz** — **faster** and less crowded, but a **shorter** reach and weaker through walls.

Rule of thumb: **2.4 GHz for distance, 5 GHz for speed.**

### Channels (and the 2.4 GHz rule)

Each band is split into **channels** — like lanes on a road. Two nearby APs on the **same** channel clash and slow down.

In the crowded 2.4 GHz band, only three channels **don't overlap**: **1, 6, and 11.** Use those to keep neighbors from interfering. The 5 GHz band has many more non-overlapping channels, so clashing is rarer there.

### Wireless security

Radio is open, so you must lock it. Security types, oldest (worst) to newest (best):

- **WEP** — very old, **broken**. Never use it.
- **WPA** — old, weak. Avoid.
- **WPA2** — strong, still common and acceptable.
- **WPA3** — the **current best**. Use it when you can.

Also set a strong **passphrase**, and give the network a name (the **SSID**). Hiding the SSID is minor and not real security.

> **The big idea:** Wi-Fi uses the **802.11** standards. Know them by number: **802.11n = Wi-Fi 4, ac = Wi-Fi 5, ax = Wi-Fi 6** (newer = faster). Two bands: **2.4 GHz** reaches farther but is slower and crowded; **5 GHz** is faster but shorter range. In 2.4 GHz, use non-overlapping channels **1, 6, 11**. For safety, use **WPA2** or, better, **WPA3** — never WEP.

💡 **Tip:** On most home routers you can run **both** bands at once. Devices pick the better one.

⚠️ **Watch out:** **WEP** looks like security but is easily cracked. If you see it, replace it with WPA2/WPA3 right away.

---

## 4. Real-world analogy

> **"Wi-Fi bands and channels are like highways and lanes — a wide slow highway that reaches far, a fast one that's shorter, and lanes you pick so cars don't collide."**

| Highways & lanes | Wi-Fi |
|------------------|-------|
| Long, busy highway | 2.4 GHz (far, slower, crowded) |
| Short, fast highway | 5 GHz (near, faster) |
| Choosing a clear lane | Picking channel 1, 6, or 11 |
| A locked gate | WPA2 / WPA3 security |

You pick the highway for the trip, a clear lane to avoid crashes, and a locked gate to keep strangers out.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **802.11** | eight-oh-two-dot-eleven | The family of Wi-Fi standards. |
| **Band** | | A range of radio frequencies (2.4 GHz or 5 GHz). |
| **Channel** | | One "lane" within a band; nearby APs should differ. |
| **SSID** | S-S-I-D | The wireless network's name. |
| **WPA2 / WPA3** | | Modern Wi-Fi security; WPA3 is the newest and best. |

---

## 6. ASCII diagram

```
   WI-FI AT A GLANCE

   STANDARDS:  a · b · g · n(Wi-Fi 4) · ac(Wi-Fi 5) · ax(Wi-Fi 6)
               (newer = faster)

   BANDS:      2.4 GHz  → farther, slower, crowded
               5 GHz    → faster, shorter reach

   2.4 GHz non-overlapping channels:   1 ... 6 ... 11

   SECURITY (worst → best):  WEP ✗  <  WPA  <  WPA2  <  WPA3 ✓
```

_Pick a standard for speed, a band and channel for space, and WPA2/WPA3 for safety._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-11-07-wifi-overview-01.svg` (created and stored in this module's `assets/`)
> **Shows:** three stacked strips — standards (a/b/g/n/ac/ax with Wi-Fi 4/5/6 labels), bands (2.4 vs. 5 GHz with trade-offs), and security (WEP→WPA→WPA2→WPA3 worst-to-best), plus the 2.4 GHz channels 1/6/11.
> **Key elements & labels:** standard names + Wi-Fi numbers; "2.4 GHz farther/slower", "5 GHz faster/shorter"; channels 1, 6, 11 marked non-overlapping; WEP marked unsafe (✗), WPA3 marked best (✓).
> **Color meaning:** each strip is labeled in words; security uses text (worst/best) and ✗/✓ marks, never color alone.
> **Flow direction:** top-to-bottom strips; security shown left (old) to right (new).
> **Alt text (required):** "A three-part Wi-Fi overview. Top strip, standards: 802.11a, b, g, then n labeled Wi-Fi 4, ac labeled Wi-Fi 5, and ax labeled Wi-Fi 6, with newer meaning faster. Middle strip, bands: 2.4 GHz reaches farther but is slower and crowded, while 5 GHz is faster but has shorter range; the 2.4 GHz non-overlapping channels 1, 6, and 11 are marked. Bottom strip, security from worst to best: WEP marked unsafe with an X, then WPA, then WPA2, then WPA3 marked best with a check. A caption says pick a standard for speed, a band and channel for space, and WPA2 or WPA3 for safety."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-11-07-router-wifi-settings-01.jpg`
> A home router's Wi-Fi settings page showing band and security choices. Alt text: "A home router Wi-Fi settings page showing the 2.4 and 5 GHz bands, the channel, and the security type (WPA2 or WPA3)."
>
> **Photo 2** — `img-11-07-laptop-wifi-details-01.jpg`
> The Windows Wi-Fi connection details. Alt text: "The Windows Wi-Fi details screen showing the network name, the band, and the security type in use."

---

## 9. Hands-on lab

**Goal:** find your own Wi-Fi's band, standard, and security type on your Windows laptop.
**Why:** checking real settings makes the standards and security types concrete.

**You will need**
- Your Windows laptop (Equipment tier **E1**), connected to Wi-Fi. Estimated time: 10 min.

⚠️ **Before you start (safety):** you only **read** settings. You change nothing on the router.

### 9a. Step-by-step instructions

1. Click the **Wi-Fi icon** in the taskbar.
2. Open **Wi-Fi settings**, then find your connected network's **Properties**.
3. Look for **Security type** (e.g., WPA2 or WPA3).
4. Look for **Network band** (2.4 GHz or 5 GHz).
5. Look for **Protocol** (e.g., Wi-Fi 5 or Wi-Fi 6).
6. Or open Command Prompt and run this exact command:

   ```
   netsh wlan show interfaces
   ```

### 9b. Expected results

You'll see details like these (yours will differ) **[TO VERIFY ON HARDWARE]**:

```
   SSID          : MyHomeNetwork
   Radio type    : 802.11ac
   Band          : 5 GHz
   Authentication: WPA2-Personal
```

- ✅ **You did it if:** you found your band, your standard/protocol, and your security type.

### 9c. Verify it worked

1. Say your Wi-Fi's band and whether it's the "far" or "fast" one.
2. Say your security type, and whether it's safe (WPA2/WPA3) or should be replaced (WEP/WPA).

### 9d. Reset / roll back

Nothing changed — you only viewed settings. Close the window when done.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Using WEP (or open) Wi-Fi | Easily cracked | Switch to WPA2 or WPA3 |
| Two nearby APs on the same 2.4 GHz channel | Interference, slowdowns | Use non-overlapping 1, 6, or 11 |
| Expecting 5 GHz to reach far | Weak signal at distance | Use 2.4 GHz for range, 5 GHz for speed |
| Thinking a hidden SSID is secure | False safety | Hiding the name is not real security; use WPA3 |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Slow Wi-Fi in one room | 5 GHz too weak there | Move closer, or use 2.4 GHz for that room |
| Wi-Fi drops near neighbors | Channel overlap on 2.4 GHz | Set the channel to 1, 6, or 11 |
| Old device won't connect | Needs an older band/standard | Enable 2.4 GHz; standards are backward-compatible |
| "Weak security" warning | WEP or WPA in use | Change the router to WPA2/WPA3 |

---

## 12. Lesson summary

- Wi-Fi uses **802.11**: n = **Wi-Fi 4**, ac = **Wi-Fi 5**, ax = **Wi-Fi 6** (newer = faster).
- **2.4 GHz** = farther but slower; **5 GHz** = faster but shorter reach.
- In 2.4 GHz, use non-overlapping channels **1, 6, 11**.
- Use **WPA2** or, better, **WPA3** for security. **Never WEP.**

**One-sentence recap:** Wi-Fi comes in 802.11 standards (Wi-Fi 4/5/6), on the far-but-slow 2.4 GHz or fast-but-short 5 GHz band, with non-overlapping channels 1/6/11 on 2.4 GHz and WPA2/WPA3 for safety.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-11-07-fill-in-the-blank.md`
2. **Matching** — `wb-11-07-matching.md`
3. **Label the diagram** — `wb-11-07-label-the-diagram.md` (standards/bands/security)
4. **Short answer** — `wb-11-07-short-answer.md`
5. **Hands-on observation** — `wb-11-07-hands-on-observation.md` (check your Wi-Fi)
6. **Vocabulary review** — `wb-11-07-vocabulary-review.md`
7. **Reflection** — `wb-11-07-reflection.md`

**Quick written warm-up (do this now):** Which band reaches farther? Which security is best today?

Farther band: ____________  Best security: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-11-07-knowledge-check.md`.)

1. Which standard is **Wi-Fi 6**? *(Objective: standards)*
   - A) 802.11n
   - B) 802.11ac
   - C) 802.11ax
   - D) 802.11b

2. Which band reaches **farther** (but slower)? *(Objective: bands)*
   - A) 2.4 GHz
   - B) 5 GHz
   - C) both the same
   - D) neither

3. Which 2.4 GHz channels **don't overlap**? *(Objective: channels)*
   - A) 1, 2, 3
   - B) 1, 6, 11
   - C) 2, 5, 9
   - D) all of them

4. Which security is the **current best**? *(Objective: security)*
   - A) WEP
   - B) WPA
   - C) WPA2
   - D) WPA3

5. Which security is **broken** and should never be used? *(Objective: security)*
   - A) WEP
   - B) WPA2
   - C) WPA3
   - D) none of them

6. **True or false —** Hiding the SSID makes a network truly secure. Explain in one sentence. *(Objective: security)*

7. The name of a wireless network is its… *(Objective: vocabulary)*
   - A) channel
   - B) band
   - C) SSID
   - D) gateway

8. **Matching —** match each standard to its Wi-Fi name. *(Objective: standards)*
   - ___ 802.11n &nbsp;&nbsp; ___ 802.11ac &nbsp;&nbsp; ___ 802.11ax
   - A) Wi-Fi 5
   - B) Wi-Fi 6
   - C) Wi-Fi 4

9. Fill in the blank: For speed at short range, choose the ____________ GHz band. *(Objective: bands)*

10. **Scenario —** Your Wi-Fi is slow and keeps dropping, and you notice several neighbors' networks. Your router uses WEP on 2.4 GHz channel 3. Name two changes you'd make and why. *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-11-07-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-11-07-wireless.md`. In brief:

- **Objective in one line:** learners name the 802.11 standards (with Wi-Fi numbers), compare the two bands, use non-overlapping channels, and choose WPA2/WPA3.
- **Common misconceptions:** "5 GHz is always better"; "hidden SSID = secure"; "WEP is fine." Correct all three.
- **Pacing:** ~30 min. The highway/lane analogy carries bands and channels; spend time on the security ladder.
- **How CompTIA tests it:** 802.11 letters ↔ Wi-Fi numbers ↔ bands/speeds; channels 1/6/11; WPA3 best, WEP broken.
- **Accuracy note (Prime Directive #7):** `netsh wlan show interfaces` is a genuine Windows command; the sample output is marked **[TO VERIFY ON HARDWARE]** since exact fields vary by adapter/driver, and the learner records their own.
- **Extension idea:** 6 GHz (Wi-Fi 6E), MU-MIMO, and roaming between APs.

---

## 17. Cheat sheet

> **Quick reference — Wireless (802.11)**
>
> | Standard | Wi-Fi | Band | Speed |
> |----------|-------|------|-------|
> | 802.11n | Wi-Fi 4 | 2.4 + 5 | up to 600 Mbps |
> | 802.11ac | Wi-Fi 5 | 5 | ~1.3+ Gbps |
> | 802.11ax | Wi-Fi 6 | 2.4 + 5 | several Gbps |
>
> - **2.4 GHz** = farther, slower, crowded · **5 GHz** = faster, shorter reach.
> - 2.4 GHz non-overlapping channels: **1, 6, 11.**
> - Security worst→best: **WEP ✗ < WPA < WPA2 < WPA3 ✓.**
> - **SSID** = the network name. A strong passphrase matters more than hiding the name.
>
> _(Full version: `resources/cheat-sheets/vlans-and-switching-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **802.11** — The IEEE family of Wi-Fi standards (a/b/g/n/ac/ax).
- **Band** — A range of radio frequencies Wi-Fi uses, mainly 2.4 GHz or 5 GHz.
- **Channel** — One "lane" within a band; nearby access points should use different, non-overlapping ones.
- **SSID (Service Set Identifier)** — The name of a wireless network.
- **WPA2 / WPA3 (Wi-Fi Protected Access)** — Modern Wi-Fi security; WPA3 is the newest and strongest.
- **WEP (Wired Equivalent Privacy)** — An old, broken Wi-Fi security type; never use it.

(Access point and Wi-Fi were defined earlier and are reused here.)

---

## 19. Homework

- **Practice:** Write your home Wi-Fi's standard, band, channel, and security from the lab.
- **Spaced review:** Order WEP, WPA, WPA2, WPA3 from worst to best from memory.
- **Preview:** Next lesson, **designing a small network end to end** — the Module 11 capstone.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Is my own Wi-Fi using safe security? _______________________
3. Which idea was hardest — standards, bands, or channels? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can name the 802.11 standards and their Wi-Fi numbers.
- [ ] I can compare 2.4 GHz and 5 GHz.
- [ ] I know the non-overlapping 2.4 GHz channels (1, 6, 11).
- [ ] I know WPA3 is best and WEP is broken.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know the next lesson designs a whole small network.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M11-L07** — "Wireless Standards, Channels, and Security" · Module 11 · Unit 8_
