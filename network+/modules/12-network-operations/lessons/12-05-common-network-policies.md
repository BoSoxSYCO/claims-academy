---
id: NA-M12-L05
module: 12
lesson: 05
title: "Common Network Policies and Best Practices"
unit: 9
objective_ids: ["3.1"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E1
prerequisites: ["NA-M12-L01", "NA-M12-L04"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-06"
---

# [Module 12 · Lesson 05] Common Network Policies and Best Practices

> **Unit:** Unit 9 — Network Operations · **Time:** ~30 min · **Equipment:** E1 (concept lesson; paper)
> **You'll need first:** documentation (12-01) and backups/DR (12-04).

Rules keep a network safe and fair. Who may use it? What must a password look like? What happens when someone joins or leaves? We write these rules down. Each one is a **policy**. This lesson covers the common ones the exam expects. It adds a few best practices too. None of it is hard. It is about being clear.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what a **policy** is and why networks need them.
- [ ] Describe an **AUP**, a **password policy**, and a **BYOD policy**.
- [ ] Explain **onboarding**, **offboarding**, and an **NDA**.
- [ ] Name common agreements: **SLA**, **MOU**, and **SOW**.

---

## 2. Introduction — why this matters

Imagine a workplace with no rules. Anyone installs anything. Passwords are "1234." People keep their access after they quit. That is a disaster waiting to happen.

A **policy** is a written rule. It says how something must be done. Rules like this protect data. They keep things fair. They make everyone follow the same steps. They also help in an audit — you can prove what the rule is.

The exam tests the common rule names and what each one covers. It asks what an AUP is. It asks what happens when someone leaves. It asks how an MOU differs from an SOW. This lesson names each one simply.

🎯 **Exam tip:** Learn the policy names and one line of what each covers. CompTIA tests recognition.

🔧 **Lab link:** You'll draft two short policies for your own home lab.

---

## 3. Simple explanation

A **policy** is a written rule for how to do something safely and fairly. Here are the common ones.

### User and device policies

- An **AUP (Acceptable Use Policy)** says what people **may** and **may not** do. For example: no illegal downloads. No sharing your password.
- A **password policy** sets the rules for passwords. It covers length, a mix of characters, and how often to change them.
- A **BYOD (Bring Your Own Device) policy** covers personal phones and laptops. It says what is allowed and how to keep them safe.
- A **remote-access policy** sets the rules for joining from outside. It may say you need a VPN.

### People joining and leaving

- **Onboarding** is how you set up a new person. You give them accounts, access, and training.
- **Offboarding** is the reverse. When someone leaves, you **remove** their access and collect their gear. Skip this and you leave an open door.
- An **NDA (Non-Disclosure Agreement)** is a promise not to share private information. New staff often sign one.

### Data and safety policies

- A **data-handling policy** (or retention policy) says how to store, protect, and eventually delete data. It sets how long to keep records.

### Agreements between parties

Three agreements name what two sides expect. They look similar, so learn the difference:

| Agreement | Full name | What it is |
|-----------|-----------|-----------|
| **SLA** | Service Level Agreement | a promise about service level (e.g., 99.9% uptime — Lesson 12-03) |
| **MOU** | Memorandum of Understanding | an informal "we agree to work together" note |
| **SOW** | Statement of Work | a detailed list of exactly what work will be done |

Think of it this way. An **MOU** is a friendly handshake. An **SOW** is the detailed job list. An **SLA** is the quality promise.

> **The big idea:** A **policy** is a written rule for doing things safely and fairly. Common ones are an **AUP** (what you may do), a **password policy** (password rules), a **BYOD policy** (personal devices), and a **remote-access policy** (joining from outside). You set people up during **onboarding**. You remove them during **offboarding**. New staff may sign an **NDA**. A **data-handling policy** says how to store and delete data. Three agreements name what each side expects: an **SLA** (service quality), an **MOU** (informal), and an **SOW** (a work list).

💡 **Tip:** The most important step people forget is **offboarding** — remove access the day someone leaves.

⚠️ **Watch out:** Don't confuse the three agreements. **MOU** = informal, **SOW** = detailed work, **SLA** = a service-level promise.

---

## 4. Real-world analogy

> **"Policies are like the rules of a shared apartment — who does what, how to treat the space, and what happens when a roommate moves in or out."**

| Shared apartment | Network |
|------------------|---------|
| House rules on the fridge | AUP |
| "Lock the door" rule | Password policy |
| Rules for guests' stuff | BYOD policy |
| Giving a new roommate a key | Onboarding |
| Taking the key back when they leave | Offboarding |
| "Don't tell others our business" | NDA |

Clear house rules prevent most fights. Clear network policies prevent most problems.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Policy** | | A written rule for how to do something safely and fairly. |
| **AUP** | A-U-P | Acceptable Use Policy — what people may and may not do. |
| **BYOD** | BEE-yod | Bring Your Own Device — rules for personal devices on the network. |
| **Offboarding** | | Removing a leaver's access and collecting their gear. |
| **NDA** | N-D-A | Non-Disclosure Agreement — a promise not to share private info. |

---

## 6. ASCII diagram

```
   COMMON NETWORK POLICIES

   USERS/DEVICES   AUP (what you may do) · password policy · BYOD · remote-access

   PEOPLE          onboarding (set up access) → offboarding (remove access)
                   NDA = promise to keep secrets

   DATA            data-handling / retention (store, protect, delete)

   AGREEMENTS      SLA (quality promise) · MOU (informal) · SOW (detailed work)
```

_Policies set clear, written rules for users, people, data, and agreements._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-12-05-policies-01.svg` (created and stored in this module's `assets/`)
> **Shows:** four grouped cards — Users/Devices (AUP, password, BYOD, remote-access), People (onboarding → offboarding, NDA), Data (data-handling/retention), and Agreements (SLA vs. MOU vs. SOW).
> **Key elements & labels:** each policy named with a one-line meaning; onboarding→offboarding shown as an arrow; the three agreements compared (informal / detailed / quality).
> **Color meaning:** each card titled in words; the labels carry meaning, not color.
> **Flow direction:** four cards in a 2×2 grid.
> **Alt text (required):** "Four policy cards. Card one, Users and devices: an Acceptable Use Policy sets what people may and may not do, a password policy sets password rules, a BYOD policy covers personal devices, and a remote-access policy covers connecting from outside. Card two, People: onboarding sets up a new person's access, an arrow leads to offboarding which removes a leaver's access and collects their gear, and an NDA is a promise not to share private information. Card three, Data: a data-handling or retention policy covers storing, protecting, and deleting data. Card four, Agreements: an SLA is a service-quality promise, an MOU is an informal agreement to work together, and an SOW is a detailed list of the work to be done."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-12-05-policy-binder-01.jpg`
> A binder of written IT policies. Alt text: "A binder of written network and IT policies, showing that rules are documented and kept for reference."
>
> **Photo 2** — `img-12-05-offboarding-checklist-01.jpg`
> An offboarding checklist. Alt text: "An offboarding checklist showing steps to remove a departing employee's access and collect their equipment."

---

## 9. Hands-on lab

**Goal:** draft two short policies for your home lab — a password policy and a simple AUP.
**Why:** writing a real policy makes the idea concrete.

**You will need**
- Paper and pen. Estimated time: 15 min.

⚠️ **Before you start (safety):** this is writing only. You change no settings.

### 9a. Step-by-step instructions

1. Title a page **"Home Lab Password Policy."**
2. Write three rules. For example: at least 12 characters; a mix of letters, numbers, and symbols; change if exposed.
3. Title a second page **"Home Lab Acceptable Use Policy."**
4. Write three rules. For example: no sharing passwords; no unknown downloads on lab devices; report problems.
5. Add one **offboarding** step: "When a device leaves the lab, wipe it and remove its access."

### 9b. Expected results

- Two short written policies: a password policy (3 rules) and an AUP (3 rules), plus one offboarding step.

- ✅ **You did it if:** each policy has clear, specific rules a beginner could follow.

### 9c. Verify it worked

1. Read one password rule aloud and check it is specific (a number, not "strong").
2. Point to your offboarding step and say why it matters.

### 9d. Reset / roll back

Nothing changed — writing only. Keep the policies with your lab documentation.

> 🔧 **Home-lab continuity:** store these with your diagrams and IPAM from Lesson 12-01.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| No offboarding step | Ex-staff keep access | Remove access the day someone leaves |
| Vague policy ("be safe") | No one can follow it | Write specific, checkable rules |
| Confusing MOU and SOW | Wrong document | MOU = informal; SOW = detailed work |
| No password policy | Weak passwords everywhere | Set length + complexity rules |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| A former employee still has access | Offboarding skipped | Remove all their accounts and keys |
| Staff install risky software | No AUP | Write and share an AUP |
| Personal phones cause issues | No BYOD policy | Add a BYOD policy with clear limits |
| A dispute over work scope | No SOW | Write a Statement of Work up front |

---

## 12. Lesson summary

- A **policy** is a written rule for doing things safely and fairly.
- User/device policies: **AUP**, **password policy**, **BYOD**, **remote-access**.
- People: **onboarding** sets up access; **offboarding** removes it; new staff sign an **NDA**.
- Agreements: **SLA** (quality), **MOU** (informal), **SOW** (detailed work).

**One-sentence recap:** Networks run on clear written rules. These cover use, passwords, devices, joining and leaving, data, and the SLA/MOU/SOW agreements.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-12-05-fill-in-the-blank.md`
2. **Matching** — `wb-12-05-matching.md`
3. **Label the diagram** — `wb-12-05-label-the-diagram.md` (the policy groups)
4. **Short answer** — `wb-12-05-short-answer.md`
5. **Hands-on observation** — `wb-12-05-hands-on-observation.md` (draft policies)
6. **Vocabulary review** — `wb-12-05-vocabulary-review.md`
7. **Reflection** — `wb-12-05-reflection.md`

**Quick written warm-up (do this now):** What does an AUP cover? What is offboarding?

AUP covers: ____________  Offboarding: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-12-05-knowledge-check.md`.)

1. A **policy** is… *(Objective: concept)*
   - A) a type of cable
   - B) a written rule for how to do something
   - C) a routing protocol
   - D) a backup

2. An **AUP** covers… *(Objective: AUP)*
   - A) what people may and may not do with the network
   - B) the Wi-Fi channel
   - C) the switch model
   - D) the subnet mask

3. A **password policy** sets… *(Objective: password)*
   - A) the network name
   - B) rules like length and complexity for passwords
   - C) the cable type
   - D) the VLAN number

4. **Offboarding** means… *(Objective: offboarding)*
   - A) setting up a new employee
   - B) removing a leaver's access and collecting gear
   - C) buying a switch
   - D) writing a diagram

5. A **BYOD policy** covers… *(Objective: BYOD)*
   - A) personal devices on the network
   - B) backup schedules
   - C) routing tables
   - D) DNS records

6. **True or false —** It is safe to skip offboarding if the person was friendly. Explain in one sentence. *(Objective: offboarding)*

7. An **NDA** is… *(Objective: NDA)*
   - A) a network device
   - B) a promise not to share private information
   - C) a subnet
   - D) a cable standard

8. **Matching —** match each agreement to its meaning. *(Objective: agreements)*
   - ___ SLA &nbsp;&nbsp; ___ MOU &nbsp;&nbsp; ___ SOW
   - A) A detailed list of the work to be done
   - B) A service-quality promise (like uptime)
   - C) An informal agreement to work together

9. Fill in the blank: Setting up a new employee's accounts and access is called ____________. *(Objective: onboarding)*

10. **Scenario —** A worker quits, but weeks later still logs into the network from home. Which two policies/processes failed, and what should have happened? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-12-05-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-12-05-policies.md`. In brief:

- **Objective in one line:** learners name common network policies (AUP, password, BYOD, remote-access), the onboarding/offboarding/NDA process, and the SLA/MOU/SOW agreements.
- **Common misconceptions:** "offboarding is optional"; "MOU = SOW." Correct both.
- **Pacing:** ~30 min. The shared-apartment analogy carries it; the drafting lab makes it real.
- **How CompTIA tests it:** recognition of policy names and one-line meanings; SLA vs. MOU vs. SOW; onboarding/offboarding.
- **Accuracy note (Prime Directive #7):** this is a paper/policy lesson; no commands are run, so no output is claimed.
- **Extension idea:** password complexity standards (NIST), least privilege, and separation of duties.

---

## 17. Cheat sheet

> **Quick reference — Common network policies**
>
> | Policy / term | Covers |
> |---------------|--------|
> | **AUP** | what people may/may not do |
> | **Password policy** | length, complexity, change rules |
> | **BYOD policy** | personal devices on the network |
> | **Remote-access policy** | connecting from outside (VPN) |
> | **Onboarding** | set up a new person's access |
> | **Offboarding** | remove a leaver's access + gear |
> | **NDA** | promise to keep info private |
> | **Data-handling / retention** | store, protect, delete data |
>
> **Agreements:** **SLA** = quality promise · **MOU** = informal · **SOW** = detailed work.
>
> - ⚠️ Never skip **offboarding** — remove access the day someone leaves.
>
> _(Full version: `resources/cheat-sheets/network-operations-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Policy** — A written rule for how to do something safely and fairly.
- **AUP (Acceptable Use Policy)** — A policy stating what people may and may not do with the network.
- **Password policy** — Rules for passwords, such as length, complexity, and how often to change them.
- **BYOD (Bring Your Own Device)** — A policy covering personal devices used on the network.
- **Remote-access policy** — Rules for connecting to the network from outside (often requiring a VPN).
- **Onboarding** — The process of setting up a new person's accounts, access, and training.
- **Offboarding** — Removing a departing person's access and collecting their equipment.
- **NDA (Non-Disclosure Agreement)** — A promise not to share private or confidential information.
- **Data-handling policy** — Rules for storing, protecting, and deleting data (includes retention).
- **MOU (Memorandum of Understanding)** — An informal agreement between parties to work together.
- **SOW (Statement of Work)** — A detailed description of exactly what work will be done.

(SLA was defined in Lesson 12-03 and is reused here.)

---

## 19. Homework

- **Practice:** Write a one-line offboarding checklist for your lab.
- **Spaced review:** Say the difference between SLA, MOU, and SOW from memory.
- **Preview:** Module 12 is complete! Next, **Module 13 — Network Security**.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Which policy would help my own setup most? _______________________
3. What was hardest — the policy names, or the three agreements?
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain what a policy is.
- [ ] I can describe an AUP, a password policy, and a BYOD policy.
- [ ] I can explain onboarding, offboarding, and an NDA.
- [ ] I can tell an SLA from an MOU from an SOW.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I finished Module 12 and I'm ready for Module 13 (security).

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M12-L05** — "Common Network Policies and Best Practices" · Module 12 · Unit 9_
