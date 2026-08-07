---
id: NA-M14-L07
module: 14
lesson: 07
title: "Worked Scenarios: \"The Internet Is Down\""
unit: 11
objective_ids: ["5.1", "5.2", "5.3", "5.4", "5.5"]
reading_level_target: 7
status: Published
est_minutes: 40
equipment_tier: E1
prerequisites: ["NA-M14-L01", "NA-M14-L02", "NA-M14-L05", "NA-M14-L06"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-07"
---

# [Module 14 · Lesson 07] Worked Scenarios: "The Internet Is Down"

> **Unit:** Unit 11 — Network Troubleshooting · **Time:** ~40 min · **Equipment:** E1 (paper; optional laptop)
> **You'll need first:** all of Module 14 (the method, the tools, the layer ladder, the symptom families).

This is the finale of Module 14. You have the method, the tools, and the layer ladder. Now we watch them work together. We'll walk four real complaints from start to finish. Each one follows the same seven steps. By the end, you'll have a pattern you can trust for any problem.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Run the full seven-step method on a real complaint.
- [ ] Pick the right tool at the "test the theory" step.
- [ ] Solve a **DHCP/APIPA**, a **DNS**, a speed, and a wireless problem.
- [ ] Write a short **document** entry for each fix.

---

## 2. Introduction — why this matters

Knowing tools is not the same as solving problems. The real skill is putting it all together: hear a complaint, form a theory, test it, fix it, and write it down.

That's the seven-step method from Lesson 14-01. Every scenario below uses it in the same order. The only thing that changes is which theory you form and which tool you reach for.

The exam gives you scenarios and asks for the next step or the fix. Practicing full walk-throughs is the best way to be ready.

🎯 **Exam tip:** In any scenario, find where you are in the seven steps — the answer is usually the very next step.

🔧 **Lab link:** You'll write your own complaint through all seven steps.

---

## 3. Simple explanation

Every scenario follows the same path: **identify → theory → test → plan → implement → verify → document**. Watch how the tool changes to match the theory.

### Scenario A — "The internet is down" (one PC)

1. **Identify:** One PC has no internet. Others are fine. Ask: what changed?
2. **Theory:** Start at Layer 1 — maybe a cable or IP problem.
3. **Test:** The **link light** is on (Layer 1 OK). Run **ipconfig**. The address is **169.254.x.x** — that's **APIPA**, meaning no **DHCP** answered.
4. **Plan:** Get the PC a real address from DHCP.
5. **Implement:** Reseat the cable and renew the address (or fix the DHCP link). The PC gets a real IP.
6. **Verify:** **ping** the **default gateway** — it replies. A website loads.
7. **Document:** "PC had a 169.254 (APIPA) address; DHCP wasn't reached; reseated cable and renewed; now has a valid IP."

### Scenario B — "A website name won't load" (others do)

1. **Identify:** One site's name fails; other sites work.
2. **Theory:** If the connection works, it may be **DNS**.
3. **Test:** `ping 8.8.8.8` works, but `ping the-name` fails. Run **nslookup** — the name doesn't resolve. That points to DNS.
4. **Plan:** Fix name resolution.
5. **Implement:** Check the DNS server in `ipconfig /all`; clear a stale entry with `ipconfig /flushdns`.
6. **Verify:** The name now resolves and the site loads.
7. **Document:** "Name failed but IPs worked; DNS cache had a stale entry; flushed DNS; resolved."

### Scenario C — "The whole office is slow"

1. **Identify:** Many users are slow, all at once. Not a single PC.
2. **Theory:** A shared cause — a full link (**bandwidth saturation**) or a **duplex mismatch** on an uplink.
3. **Test:** Check the link's load and the switch port. Use **pathping** to see where delay/loss appears.
4. **Plan:** Relieve the load or fix the mismatch.
5. **Implement:** Match speed/duplex on the uplink, or reduce the heavy traffic.
6. **Verify:** Speeds return to normal; errors drop.
7. **Document:** "Office slow; uplink had a duplex mismatch; set both sides to auto; speed restored."

### Scenario D — "Wi-Fi drops in the back room"

1. **Identify:** Wi-Fi is fine near the router but drops in the far room.
2. **Theory:** Weak signal — low **RSSI** from distance/walls (**attenuation**), or **channel** overlap.
3. **Test:** Run `netsh wlan show interfaces` — the Signal reading is high near the router, low in the back room. A **Wi-Fi analyzer** shows a crowded channel.
4. **Plan:** Improve coverage or reduce interference.
5. **Implement:** Move the router, add an access point, or pick a clearer channel.
6. **Verify:** Signal is stronger in the back room; the drops stop.
7. **Document:** "Weak Wi-Fi in back room (low RSSI); added an AP and changed channel; signal now strong."

> **The big idea:** Every problem follows the same seven steps. What changes is the theory and the tool you test with. A no-internet PC with **APIPA** points to **DHCP**. A name-only failure points to **DNS** (**nslookup**, flushdns). Office-wide slowness points to **bandwidth saturation** or a **duplex mismatch**. Far-room Wi-Fi drops point to low **RSSI**. Identify, theorize, test, plan, fix, verify — then document.

💡 **Tip:** Always finish with the document step. Your future self (and the next tech) will thank you.

⚠️ **Watch out:** Don't skip "identify." "What changed?" is often the fastest clue in the whole process.

---

## 4. Real-world analogy

> **"Four different patients, one trusted method — like a doctor's rounds."**

| Patient complaint | Network scenario |
|-------------------|------------------|
| "I feel weak all over." | The internet is down (APIPA / DHCP) |
| "I can't remember a name." | A name won't resolve (DNS) |
| "Everything feels sluggish." | The office is slow (saturation / duplex) |
| "I can't hear far away." | Wi-Fi drops in the back room (RSSI) |

Different symptoms, same steps: ask, diagnose, test, treat, check, and chart it.

---

## 5. Vocabulary

> This is a synthesis lesson — it reuses terms from Lessons 14-01 to 14-06. A quick refresher:

| Term | Plain-language meaning |
|------|------------------------|
| **APIPA** | A 169.254 address a device self-assigns when no DHCP answers. |
| **DNS** | The service that turns names into IP addresses. |
| **Duplex mismatch** | One side full duplex, the other half — errors and slowness. |
| **RSSI** | How strong a received Wi-Fi signal is. |
| **Document** | Write down the problem, actions, and outcome (step 7). |

---

## 6. ASCII diagram

```
   THE 7 STEPS APPLIED (same order every time)

   COMPLAINT                 THEORY / TOOL                 FIX
   ---------                 -------------                 ---
   PC: no internet           APIPA (ipconfig) -> no DHCP   reseat/renew
   One name won't load       DNS (nslookup)                fix DNS / flushdns
   Whole office slow         saturation / duplex mismatch  reduce load / match duplex
   Wi-Fi drops far away      low RSSI (netsh / analyzer)   add AP / change channel

   identify -> theory -> test -> plan -> implement -> verify -> DOCUMENT
```

_Same seven steps every time. Only the theory and the tool change._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-14-07-worked-scenarios-01.svg` (created and stored in this module's `assets/`)
> **Shows:** four scenario cards under one "7-step method" banner — each card gives the complaint, the theory/tool, and the fix.
> **Key elements & labels:** banner "identify → theory → test → plan → implement → verify → document"; Card A (no internet → APIPA/ipconfig → no DHCP → reseat/renew); Card B (name won't load → DNS/nslookup → flushdns); Card C (office slow → saturation/duplex mismatch → reduce load/match duplex); Card D (Wi-Fi drops far → low RSSI/netsh/analyzer → add AP/change channel).
> **Color meaning:** each card is titled in words; complaint/theory/fix are text, not color-coded.
> **Flow direction:** banner on top, four cards below.
> **Alt text (required):** "A banner lists the seven troubleshooting steps: identify, theory, test, plan, implement, verify, document. Below are four scenario cards, each solved with the same steps. Card A, the internet is down on one PC: ipconfig shows a 169.254 APIPA address meaning no DHCP answered, so reseat the cable and renew the address. Card B, one website name won't load while others do: nslookup shows the name doesn't resolve, a DNS problem, so check the DNS server and run ipconfig flushdns. Card C, the whole office is slow: the cause is bandwidth saturation or a duplex mismatch on the uplink, so reduce the load or match the duplex. Card D, Wi-Fi drops in the back room: netsh or a Wi-Fi analyzer shows low RSSI from distance and a crowded channel, so add an access point or change the channel. A footer notes that every problem ends with the document step."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-14-07-ticket-closed-01.jpg`
> A closed help-desk ticket. Alt text: "A completed help-desk ticket showing the symptom, steps taken, and outcome — the documentation that ends every fix."
>
> **Photo 2** — `img-14-07-tech-at-work-01.jpg`
> A technician at a wall jack with a laptop. Alt text: "A technician checking a wall jack and running commands on a laptop, applying the troubleshooting method to a real problem."

---

## 9. Hands-on lab

**Goal:** write one real complaint through all seven steps, choosing your own tools.
**Why:** doing a full walk-through yourself is the best exam and job practice.

**You will need**
- Paper and pen. Optional: your laptop to run the commands. Estimated time: 20 min.

⚠️ **Before you start (safety):** if you run commands, they're read-only tests. Change no settings without permission.

### 9a. Step-by-step instructions

Pick one complaint (real or from the four above). Fill in all seven steps:

1. **Identify:** the symptom, and one "what changed?" question.
2. **Theory:** your best guess at the cause.
3. **Test:** the exact tool/command you'd run, and what result would confirm it.
4. **Plan:** the fix.
5. **Implement:** the action (or when you'd escalate).
6. **Verify:** how you'd confirm it's fixed.
7. **Document:** a one-line record of the problem, action, and outcome.

### 9b. Expected results

- A one-page, seven-step write-up for one complaint, with a matching tool at step 3.

- ✅ **You did it if:** each step has a sensible entry and the tool fits the theory.

> ⚠️ If you run any command, the output is a varying example. **[TO VERIFY ON HARDWARE]**

### 9c. Verify it worked

1. Read your steps in order — do they flow?
2. Check your step 3 tool matches your step 2 theory.

### 9d. Reset / roll back

Paper only (or read-only commands). Nothing changed.

> 🔧 **Home-lab continuity:** keep your seven-step write-ups as a personal troubleshooting playbook.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Skipping "identify" | You fix the wrong thing | Ask "what changed?" first |
| Wrong tool for the theory | Your test proves nothing | Match tool to theory (DNS → nslookup) |
| Fixing without verifying | It may still be broken | Always confirm with a test |
| Never documenting | The next person re-solves it | Finish with the document step |

---

## 11. Troubleshooting

| The complaint | First theory | First tool |
|---------------|--------------|------------|
| One PC, no internet | Layer 1 / APIPA | link light, then `ipconfig` |
| One name won't load | DNS | `nslookup`, `ipconfig /flushdns` |
| Whole office slow | Saturation / duplex mismatch | port stats, `pathping` |
| Wi-Fi drops far away | Low RSSI / channel | `netsh wlan show interfaces`, Wi-Fi analyzer |

---

## 12. Lesson summary

- Every problem uses the same seven steps; only the theory and tool change.
- No internet + **APIPA** (169.254) → no **DHCP**.
- One name fails → **DNS** (`nslookup`, flushdns).
- Office-wide slow → **bandwidth saturation** or **duplex mismatch**.
- Wi-Fi drops far away → low **RSSI** (add an AP / change **channel**).

**One-sentence recap:** Run the seven-step method on every complaint — identify, theorize, test with the right tool, fix, verify, and document.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-14-07-fill-in-the-blank.md`
2. **Matching** — `wb-14-07-matching.md`
3. **Label the diagram** — `wb-14-07-label-the-diagram.md` (scenario → fix)
4. **Short answer** — `wb-14-07-short-answer.md`
5. **Hands-on observation** — `wb-14-07-hands-on-observation.md` (your own seven-step case)
6. **Vocabulary review** — `wb-14-07-vocabulary-review.md`
7. **Reflection** — `wb-14-07-reflection.md`

**Quick written warm-up (do this now):** A PC shows a 169.254 address. What's the theory? What's the last step of every fix?

Theory: ____________  Last step: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-14-07-knowledge-check.md`.)

1. A PC has no internet and `ipconfig` shows **169.254.10.4**. The theory is… *(Objective: apply)*
   - A) a DNS problem
   - B) no DHCP answered (APIPA)
   - C) a duplex mismatch
   - D) weak Wi-Fi

2. Names fail but IPs work. Which tool do you test with? *(Objective: apply)*
   - A) cable tester
   - B) nslookup
   - C) loopback plug
   - D) Wi-Fi analyzer

3. The whole office is slow at once. A likely theory is… *(Objective: apply)*
   - A) one bad DNS record
   - B) bandwidth saturation or a duplex mismatch
   - C) a single weak Wi-Fi signal
   - D) APIPA on one PC

4. Wi-Fi is fine near the router but drops in the far room. The cause is likely… *(Objective: apply)*
   - A) low RSSI (distance/attenuation)
   - B) a DNS problem
   - C) no DHCP
   - D) a bad DNS cache

5. What is the last step of every scenario? *(Objective: method)*
   - A) Identify
   - B) Test the theory
   - C) Document
   - D) Escalate

6. **True or false —** You can skip verifying once you apply a fix. Explain in one sentence. *(Objective: method)*

7. After `ipconfig /flushdns` fixes a name problem, what should you do next? *(Objective: method)*
   - A) Nothing
   - B) Verify the name resolves, then document
   - C) Reboot the switch
   - D) Escalate

8. **Matching —** match each complaint to its first tool. *(Objective: apply)*
   - ___ No internet, one PC &nbsp;&nbsp; ___ Name won't load &nbsp;&nbsp; ___ Wi-Fi drops far away
   - A) nslookup
   - B) ipconfig (check for 169.254)
   - C) netsh wlan show interfaces

9. Fill in the blank: In any scenario, the tool you use at "test the theory" must match your ____________. *(Objective: method)*

10. **Scenario —** A user says "the internet is down." The link light is on and `ipconfig` shows a real IP, and `ping 8.8.8.8` works — but no website loads by name. What is the likely problem, and your next tool? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-14-07-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-14-07-scenarios.md`. In brief:

- **Objective in one line:** learners run the full seven-step method on real complaints, choosing the right tool for each theory.
- **Common misconceptions:** "skip identify"; "any tool proves the theory"; "no need to verify/document." Correct each.
- **Pacing:** ~40 min (longest lesson — four walk-throughs + a self-authored case). The doctor's-rounds analogy carries it.
- **How CompTIA tests it:** scenario "next step" and "which tool"; APIPA→DHCP, name-only→DNS, office-wide→saturation/duplex, far-Wi-Fi→RSSI.
- **Accuracy note (Prime Directive #7):** all commands are real; every shown result (169.254, signal %, replies) is a varying example marked `[TO VERIFY ON HARDWARE]`.
- **Extension idea:** learners build a personal "runbook" of common complaints; add escalation criteria.

---

## 17. Cheat sheet

> **Quick reference — Worked scenarios**
>
> | Complaint | Theory | First tool | Fix |
> |-----------|--------|-----------|-----|
> | PC no internet | APIPA → no DHCP | `ipconfig` (169.254?) | reseat / renew |
> | One name fails | DNS | `nslookup` | fix DNS / `flushdns` |
> | Office-wide slow | saturation / duplex | port stats, `pathping` | reduce load / match duplex |
> | Wi-Fi drops far | low RSSI / channel | `netsh wlan show interfaces` | add AP / change channel |
>
> - Same seven steps every time: **identify → theory → test → plan → implement → verify → document.**
> - The tool must match the theory. Always finish by documenting.
>
> _(Full version: `resources/cheat-sheets/troubleshooting-quick-reference.md`.)_

---

## 18. Glossary updates

**No new terms.** This synthesis lesson reuses terms from Lessons 14-01 to 14-06 (the method steps, APIPA, DHCP, DNS, nslookup, ipconfig, ping, pathping, link light, duplex mismatch, bandwidth saturation, RSSI, attenuation, channel, Wi-Fi analyzer, default gateway) and from earlier modules. The glossary is unchanged.

---

## 19. Homework

- **Practice:** Write two more complaints of your own through all seven steps.
- **Spaced review:** For each of the four scenarios, say the theory and first tool from memory.
- **Preview:** Module 14 is complete! Next, **Module 15 — Capstone & Exam Readiness**.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Which scenario felt most familiar from real life? _______________________
3. What was hardest — forming the theory, or picking the tool?
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box honestly:

- [ ] I can run the full seven-step method on a complaint.
- [ ] I can pick the right tool for each theory.
- [ ] I can solve a DHCP/APIPA, DNS, speed, and wireless problem.
- [ ] I always verify and document.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I finished Module 14 and I'm ready for Module 15 (the capstone).

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M14-L07** — "Worked Scenarios: The Internet Is Down" · Module 14 · Unit 11_
