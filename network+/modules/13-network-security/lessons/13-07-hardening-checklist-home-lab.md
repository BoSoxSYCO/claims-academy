---
id: NA-M13-L07
module: 13
lesson: 07
title: "A Hardening Checklist for Your Home Lab"
unit: 10
objective_ids: ["4.3"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E2
prerequisites: ["NA-M13-L03", "NA-M13-L04", "NA-M13-L05", "NA-M13-L06"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-07"
---

# [Module 13 · Lesson 07] A Hardening Checklist for Your Home Lab

> **Unit:** Unit 10 — Network Security · **Time:** ~30 min · **Equipment:** E2 (your switch, router, laptop)
> **You'll need first:** all of Module 13, plus backups (12-04) and documentation (12-01).

This is the finale of Module 13. You've learned the goals, the attacks, and the defenses. Now we put them together. **Hardening** means making a device harder to attack. In this lesson, you'll build one checklist and apply it to your real gear.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain **hardening** and **defense in depth**.
- [ ] Apply a layered security checklist to your home lab.
- [ ] Explain why **patch management** (updates) matters.
- [ ] Connect each checklist item to the lesson that taught it.

---

## 2. Introduction — why this matters

One lock is not enough. A burglar who beats the front door shouldn't reach everything inside. So we use many layers. If one fails, the next still protects you.

That idea is **defense in depth** — layered security. No single control has to be perfect. Together, they're strong.

**Hardening** is the work of removing weak spots from each device. You change default passwords. You turn off things you don't use. You keep software updated. The exam expects you to apply these best practices, not just name them. This lesson turns Module 13 into action.

🎯 **Exam tip:** When a question asks for the "best" security, layered controls (defense in depth) usually beat any single fix.

🔧 **Lab link:** You'll fill in a real hardening checklist for your own switch, router, and laptop.

---

## 3. Simple explanation

**Defense in depth** means stacking protections in layers. Think of a castle: a moat, a wall, a locked gate, and guards inside. Break one, and the next still stops you.

Here is the hardening checklist, grouped by layer. Each item links back to where you learned it.

### Layer 1 — Accounts and access
- Change every **default password** (switch, router, admin pages).
- Turn on **MFA** where you can (13-03).
- Give each user only what they need — **least privilege** (13-03).

### Layer 2 — The switch
- Enable **port security** (often **sticky MAC**) so only known devices connect (13-05).
- Disable unused ports (13-05).
- Move the **native VLAN** off VLAN 1 (13-05).

### Layer 3 — Segment the network
- Split the network with **VLANs** — **segmentation** (13-04).
- Give visitors a **guest network** (13-05).

### Layer 4 — Wireless
- Use **WPA3** (or WPA2), a strong **PSK**, and turn **WPS** off (13-05).

### Layer 5 — The edge
- Keep the **firewall** on, with sensible **ACL** rules (13-04).

### Layer 6 — Data and recovery
- Use **encryption**/a **VPN** for private traffic (13-06).
- Keep **backups** (12-04) and up-to-date **documentation** (12-01).

### Layer 7 — Stay current
- **Patch management:** keep firmware and software updated. Updates fix known holes.

> **The big idea:** **Hardening** removes weak spots; **defense in depth** stacks many layers so one failure isn't fatal. Apply the checklist across accounts (default passwords, **MFA**, **least privilege**), the switch (**port security**, disable unused ports, **native VLAN**), segmentation (**VLANs**, **guest network**), wireless (**WPA3**, strong **PSK**, no **WPS**), the edge (**firewall**, **ACL**), data (**encryption**/**VPN**, **backups**, **documentation**), and updates (**patch management**).

💡 **Tip:** You don't have to do it all today. Start with default passwords and MFA — the biggest wins.

⚠️ **Watch out:** Skipping updates is a top risk. Old firmware often has known, published holes.

---

## 4. Real-world analogy

> **"Hardening is like securing a house in layers — no single lock does it all."**

| Home layer | Network layer |
|------------|---------------|
| A fence and a locked gate | Firewall + ACL |
| Strong door locks, changed from the builder's | Changed default passwords |
| A deadbolt plus an alarm code | MFA |
| Only giving keys to who needs them | Least privilege |
| A separate guest room | Guest network / segmentation |
| A safe for valuables, and insurance | Encryption + backups |
| Fixing a broken window right away | Patch management |

Layers back each other up. That's defense in depth.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Hardening** | HARD-en-ing | Making a device harder to attack by removing weak spots. |
| **Defense in depth** | | Stacking many layers of security so one failure isn't fatal. |
| **Patch management** | patch MAN-ij-ment | Keeping software and firmware updated to fix known holes. |
| **Default password** | | The factory password that must be changed. |
| **Least privilege** | leest PRIV-lij | Giving only the access someone needs (from 13-03). |

---

## 6. ASCII diagram

```
        DEFENSE IN DEPTH  (many layers)

   1 ACCOUNTS   default passwords · MFA · least privilege
   2 SWITCH     port security · disable unused ports · native VLAN
   3 SEGMENT    VLANs · guest network
   4 WIRELESS   WPA3 · strong PSK · WPS off
   5 EDGE       firewall · ACL
   6 DATA       encryption/VPN · backups · documentation
   7 UPDATES    patch management (firmware + software)

   Break one layer -> the next still protects you.
```

_Harden every layer. If one fails, the others hold._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-13-07-hardening-checklist-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a stack of seven labeled layers under a "Defense in depth" banner — Accounts, Switch, Segment, Wireless, Edge, Data, Updates — each with its checklist items.
> **Key elements & labels:** each layer numbered and named, with 2–3 checklist items; a note that breaking one layer still leaves the others.
> **Color meaning:** each layer is titled in words and numbered; items are text, not color-coded.
> **Flow direction:** top to bottom, layer 1 to layer 7.
> **Alt text (required):** "A stack of seven security layers under the heading Defense in depth. Layer 1, Accounts: change default passwords, turn on MFA, apply least privilege. Layer 2, Switch: enable port security, disable unused ports, move the native VLAN off VLAN 1. Layer 3, Segment: use VLANs and a guest network. Layer 4, Wireless: use WPA3, a strong PSK, and turn WPS off. Layer 5, Edge: keep the firewall on with ACL rules. Layer 6, Data: use encryption or a VPN, and keep backups and documentation. Layer 7, Updates: practice patch management by keeping firmware and software current. A note says that if one layer is broken, the next still protects the network."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-13-07-checklist-01.jpg`
> A printed hardening checklist with items ticked off. Alt text: "A printed network hardening checklist with items checked, showing security applied layer by layer."
>
> **Photo 2** — `img-13-07-router-firmware-update-01.jpg`
> A router admin page showing a firmware update. Alt text: "A router's admin page offering a firmware update, an example of patch management that fixes known security holes."

---

## 9. Hands-on lab

**Goal:** fill in a real hardening checklist for your own switch, router, and laptop.
**Why:** this turns everything you learned into concrete, safer settings.

**You will need**
- Your gear (switch, router, laptop) and paper (or the printed checklist). Estimated time: 20 min.

⚠️ **Before you start (safety):** only change a setting if you understand it and won't lock yourself out. On a shared switch, get permission first. When unsure, mark it "to do," not "done."

### 9a. Step-by-step instructions

For each item, mark **Done**, **To do**, or **N/A**:

1. **Accounts:** default passwords changed? MFA on where possible? Least privilege applied?
2. **Switch:** port security/sticky MAC on? Unused ports disabled? Native VLAN moved off VLAN 1?
3. **Segment:** VLANs in use? Guest network set up?
4. **Wireless:** WPA3 (or WPA2) on? Strong PSK set? WPS turned off?
5. **Edge:** firewall on? ACL rules sensible?
6. **Data:** encryption/VPN used for private traffic? Backups made? Documentation current?
7. **Updates:** firmware and software up to date?

### 9b. Expected results

- A completed checklist showing what's done and what's left to do.

- ✅ **You did it if:** every item has a Done / To do / N/A mark, and you know your top three "to do" fixes.

### 9c. Verify it worked

1. Read your three biggest "to do" items aloud.
2. Name the layer each one belongs to (accounts, switch, wireless, and so on).

### 9d. Reset / roll back

If you changed a setting and something broke, undo that one change. Keep a note of what you changed, so you can reverse it.

> 🔧 **Home-lab continuity:** save the checklist with your documentation. Redo it every few months. Any switch command you run is **[TO VERIFY ON HARDWARE]**.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Relying on one control | One failure exposes everything | Use layers — defense in depth |
| Leaving default passwords | Attackers know the defaults | Change them first |
| Never updating firmware | Known holes stay open | Practice patch management |
| Changing many settings at once | Hard to tell what broke | Change one thing, test, then the next |

---

## 11. Troubleshooting

| Symptom | Likely gap | Try this |
|---------|-----------|----------|
| A break-in reached everything | No layering | Add segmentation and least privilege |
| Device still uses "admin/admin" | Default password | Change it now |
| A known bug keeps being exploited | Out-of-date firmware | Update it (patch management) |
| You locked yourself out after a change | Risky single change | Roll back that change; note what you did |

---

## 12. Lesson summary

- **Hardening** removes weak spots; **defense in depth** stacks protections in layers.
- Apply the checklist: accounts, switch, segmentation, wireless, edge, data, updates.
- Start with the biggest wins: **default passwords** and **MFA**.
- Keep firmware current — **patch management** closes known holes.

**One-sentence recap:** Harden every layer of your network so no single failure exposes everything — and keep it updated.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-13-07-fill-in-the-blank.md`
2. **Matching** — `wb-13-07-matching.md`
3. **Label the diagram** — `wb-13-07-label-the-diagram.md` (the seven layers)
4. **Short answer** — `wb-13-07-short-answer.md`
5. **Hands-on observation** — `wb-13-07-hands-on-observation.md` (the real checklist)
6. **Vocabulary review** — `wb-13-07-vocabulary-review.md`
7. **Reflection** — `wb-13-07-reflection.md`

**Quick written warm-up (do this now):** What does "defense in depth" mean? What is the first checklist item you'd fix?

Defense in depth: ____________  First fix: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-13-07-knowledge-check.md`.)

1. **Hardening** means… *(Objective: concept)*
   - A) buying faster gear
   - B) making a device harder to attack by removing weak spots
   - C) adding more cables
   - D) turning off the firewall

2. **Defense in depth** is… *(Objective: concept)*
   - A) one very strong lock
   - B) many layers of security so one failure isn't fatal
   - C) a type of cable
   - D) a backup plan only

3. Which is usually the first and biggest win? *(Objective: apply)*
   - A) repainting the switch
   - B) changing default passwords
   - C) buying a new router
   - D) turning off backups

4. **Patch management** means… *(Objective: updates)*
   - A) fixing cables
   - B) keeping firmware and software updated
   - C) adding VLANs
   - D) changing the SSID

5. Why disable unused ports and use **least privilege**? *(Objective: apply)*
   - A) to make the network slower
   - B) to shrink the ways in and limit damage
   - C) they do nothing
   - D) to save money only

6. **True or false —** One strong control is always enough, so layers are a waste. Explain in one sentence. *(Objective: concept)*

7. On Wi-Fi, the checklist says use… *(Objective: apply)*
   - A) WEP with WPS on
   - B) WPA3, a strong PSK, and WPS off
   - C) an open network
   - D) no password

8. **Matching —** match each checklist item to its layer. *(Objective: layers)*
   - ___ MFA &nbsp;&nbsp; ___ Port security &nbsp;&nbsp; ___ Firewall
   - A) The switch
   - B) The edge
   - C) Accounts and access

9. Fill in the blank: Keeping firmware updated to fix known holes is called ____________ management. *(Objective: updates)*

10. **Scenario —** A friend says, "I set a strong Wi-Fi password, so my network is fully secure." Using defense in depth, give two more layers they should add. *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-13-07-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-13-07-hardening-checklist.md`. In brief:

- **Objective in one line:** learners explain hardening and defense in depth, then apply a layered security checklist (accounts, switch, segmentation, wireless, edge, data, updates) to real gear.
- **Common misconceptions:** "one strong control is enough"; "updates can wait." Correct both.
- **Pacing:** ~30 min. The castle/house-layers analogy carries it; the real checklist lab is the payoff and the module capstone.
- **How CompTIA tests it:** picking layered defense over a single fix; recognizing hardening steps; patch management as a best practice.
- **Accuracy note (Prime Directive #7):** the lab is a checklist the learner applies to their own gear; any Dell switch command is `[TO VERIFY ON HARDWARE]`. No output is fabricated.
- **Extension idea:** the CIS Benchmarks and vendor hardening guides; change management for security changes; a security baseline.

---

## 17. Cheat sheet

> **Quick reference — Hardening checklist (defense in depth)**
>
> | Layer | Do this |
> |-------|---------|
> | **Accounts** | change default passwords · **MFA** · least privilege |
> | **Switch** | port security/sticky MAC · disable unused ports · native VLAN off 1 |
> | **Segment** | VLANs · guest network |
> | **Wireless** | WPA3 · strong PSK · WPS off |
> | **Edge** | firewall on · sensible ACLs |
> | **Data** | encryption/VPN · backups · documentation |
> | **Updates** | **patch management** (firmware + software) |
>
> - Biggest first wins: **default passwords** and **MFA**.
> - Layers back each other up — **defense in depth**.
>
> _(Full version: `resources/cheat-sheets/network-security-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Hardening** — Making a device or network harder to attack by removing weak spots.
- **Defense in depth** — Using many layers of security so that one failure does not expose everything.
- **Patch management** — Keeping software and firmware updated to fix known security holes.
- **Default password** — The factory-set password on a device that must be changed.
- **Documentation** — The written record of a network (backfilled; first taught in 12-01).

(This lesson reuses the whole of Module 13 — AAA, MFA, least privilege, port security, sticky MAC, native VLAN, VLAN, segmentation, guest network, WPA3, PSK, WPS, firewall, ACL, DMZ, encryption, VPN — plus backups (12-04) and documentation (12-01). Firmware was defined in 01-05.)

---

## 19. Homework

- **Practice:** Finish your checklist. Do your top three "to do" fixes this week (start with default passwords and MFA).
- **Spaced review:** Say the seven layers from memory.
- **Preview:** Module 13 is complete! Next, **Module 14 — Network Troubleshooting**.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Which layer is your network weakest on right now? _______________________
3. What was hardest — remembering all the layers, or actually applying them?
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain hardening and defense in depth.
- [ ] I applied a layered checklist to my own gear.
- [ ] I can explain why patch management matters.
- [ ] I can connect each item to the lesson that taught it.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I finished Module 13 and I'm ready for Module 14 (troubleshooting).

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M13-L07** — "A Hardening Checklist for Your Home Lab" · Module 13 · Unit 10_
