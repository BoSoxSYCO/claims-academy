---
id: NA-M13-L03
module: 13
lesson: 03
title: "AAA: Authentication, Authorization, and Accounting"
unit: 10
objective_ids: ["4.1"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E1
prerequisites: ["NA-M13-L01", "NA-M12-L02"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-07"
---

# [Module 13 · Lesson 03] AAA: Authentication, Authorization, and Accounting

> **Unit:** Unit 10 — Network Security · **Time:** ~30 min · **Equipment:** E1 (concept lesson; paper)
> **You'll need first:** the CIA triad (13-01) and logs/Syslog (12-02).

Now we start defending the network. The first defense answers three questions about every user. Who are you? What may you do? What did you do? These three make up **AAA**. It is one of the most useful ideas in all of security.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain the three parts of **AAA**.
- [ ] Name the three **factors** of authentication.
- [ ] Explain **MFA**, **least privilege**, and **RBAC**.
- [ ] Say what a **RADIUS** or **TACACS+** server does.

---

## 2. Introduction — why this matters

A network must control who gets in. It must also control what each person can touch. And it must keep a record of what happened.

Security experts bundle these into one framework: **AAA**. It stands for **authentication**, **authorization**, and **accounting**. Say it as three questions:

- **Authentication:** who are you?
- **Authorization:** what are you allowed to do?
- **Accounting:** what did you actually do?

The exam tests all three. It asks how you prove who you are. It asks how access is limited. It asks how actions get logged. Learn the three questions and AAA falls into place.

🎯 **Exam tip:** Keep the order straight. First you prove who you are, then you get access, then your actions are logged.

🔧 **Lab link:** You'll plan AAA for your own home lab in three short steps.

---

## 3. Simple explanation

Picture a workplace with keycard badges. It shows AAA perfectly.

### Authentication — who are you?

**Authentication** is proving who you are. You badge in at the door. The system checks that the badge is really yours.

You prove who you are with **factors**. There are three kinds:

- **Something you know** — a password or PIN.
- **Something you have** — a phone, a token, or a keycard.
- **Something you are** — a fingerprint or your face.

Using two or more **different** factors is **MFA (Multi-Factor Authentication)**. Using exactly two is **2FA (Two-Factor Authentication)**. A password plus a phone code is far safer than a password alone.

### Authorization — what may you do?

**Authorization** is what you are allowed to do once you are in. Your badge opens some doors, not all of them.

Two ideas guide good authorization:

- **Least privilege** means giving each person only the access they need. Nothing extra.
- **RBAC (Role-Based Access Control)** grants access by job role, not per person. A "nurse" role opens nurse doors.

### Accounting — what did you do?

**Accounting** is keeping a record of what each user did. The badge system logs every door you opened and when. This ties back to logs and Syslog from Lesson 12-02.

### The central helpers

Big networks check logins in one place. Two servers do this:

- **RADIUS** is a common server that checks logins for many devices at once.
- **TACACS+** is another such server, often used for network gear. It separates the three A's.

> **The big idea:** **AAA** answers three questions. **Authentication** = who are you? (proven with **factors** — know, have, are; two or more is **MFA**). **Authorization** = what may you do? (guided by **least privilege** and **RBAC**). **Accounting** = what did you do? (a log of actions). **RADIUS** and **TACACS+** are servers that do AAA centrally.

💡 **Tip:** The order is fixed: authenticate, then authorize, then account. You cannot limit access before you know who someone is.

⚠️ **Watch out:** Two of the same factor is not MFA. Two passwords are still one factor ("something you know").

---

## 4. Real-world analogy

> **"AAA is like a workplace badge system."**

| Badge system | AAA part |
|--------------|----------|
| Badging in at the front door | Authentication |
| Your badge opens only certain doors | Authorization |
| The log of every door you opened | Accounting |
| Badge + fingerprint to enter | MFA (two factors) |
| A new hire gets only their team's doors | Least privilege |

Prove who you are, get the right doors, and leave a trail. That is AAA.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **AAA** | triple-A | Authentication, authorization, and accounting. |
| **Authentication** | aw-then-ti-KAY-shun | Proving who you are. |
| **Authorization** | aw-thor-i-ZAY-shun | What you are allowed to do. |
| **Accounting** | a-KOWN-ting | Keeping a record of what a user did. |
| **MFA** | M-F-A | Using two or more different factors to log in. |
| **Least privilege** | leest PRIV-lij | Giving only the access someone needs. |

---

## 6. ASCII diagram

```
                 A A A

   1. AUTHENTICATION   "Who are you?"   -> factors: know / have / are
                                           (two or more = MFA)
   2. AUTHORIZATION    "What may you do?" -> least privilege, RBAC
   3. ACCOUNTING       "What did you do?" -> logs (Syslog, 12-02)

   Central helpers: RADIUS, TACACS+ (check logins for many devices)
```

_Authenticate first, then authorize, then account. Always in that order._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-13-03-aaa-01.svg` (created and stored in this module's `assets/`)
> **Shows:** three numbered steps left to right — Authentication (Who are you?), Authorization (What may you do?), Accounting (What did you do?) — with the three factors listed under Authentication and least privilege/RBAC under Authorization.
> **Key elements & labels:** each step numbered and titled with its question; under step 1 the three factors (something you know / have / are) and an "MFA = 2+ factors" note; under step 2 "least privilege" and "RBAC"; under step 3 "a log of actions (Syslog)."
> **Color meaning:** each step is titled in words and numbered; labels carry meaning, not color.
> **Flow direction:** three steps left to right with arrows, showing the fixed order.
> **Alt text (required):** "Three numbered steps left to right, joined by arrows, under the heading AAA. Step 1, Authentication, asks 'Who are you?' and is proven with factors: something you know like a password, something you have like a phone, and something you are like a fingerprint; using two or more different factors is MFA. Step 2, Authorization, asks 'What may you do?' and is guided by least privilege, giving only needed access, and RBAC, granting access by job role. Step 3, Accounting, asks 'What did you do?' and keeps a log of every action, tied to Syslog. A footer notes that RADIUS and TACACS plus are servers that perform AAA centrally for many devices."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-13-03-mfa-prompt-01.jpg`
> A phone showing a 2FA/MFA code prompt. Alt text: "A phone showing a one-time login code, an example of a second factor (something you have) used in multi-factor authentication."
>
> **Photo 2** — `img-13-03-keycard-01.jpg`
> A workplace keycard reader. Alt text: "A keycard reader at a door, a real-world example of authentication and authorization — the badge proves who you are and opens only certain doors."

---

## 9. Hands-on lab

**Goal:** plan AAA for your home lab in three short steps.
**Why:** writing your own AAA plan makes the framework concrete.

**You will need**
- Paper and pen. Estimated time: 10 min.

⚠️ **Before you start (safety):** this is writing only. You change no settings.

### 9a. Step-by-step instructions

1. Title a page **"Home Lab AAA Plan."**
2. **Authentication:** write how you log in to the switch and router. Add one way to make it MFA (for example, a password plus a phone code where supported).
3. **Authorization:** write one rule using least privilege. For example, "guests get Wi-Fi only, not switch access."
4. **Accounting:** write where actions are logged (for example, the switch or router log, from 12-02).
5. Read your plan and check all three A's are covered.

### 9b. Expected results

- A one-page plan with an Authentication step, an Authorization rule, and an Accounting note.

- ✅ **You did it if:** each of the three A's has at least one clear line.

### 9c. Verify it worked

1. Point to your Authentication step. Name the factor(s) you used.
2. Point to your Authorization rule. Say who is limited and why.

### 9d. Reset / roll back

Nothing changed — writing only. Keep the plan with your lab documentation.

> 🔧 **Home-lab continuity:** save this plan. It feeds the hardening checklist in Lesson 13-07.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Two passwords called "MFA" | Not real MFA | MFA needs two **different** factor types |
| Giving everyone full access | One breach hits everything | Use least privilege |
| Skipping accounting | No trail after an incident | Log actions (Syslog, 12-02) |
| Mixing up authn and authz | Wrong exam answer | Authn = who you are; authz = what you may do |

---

## 11. Troubleshooting

| Symptom | Likely AAA gap | Try this |
|---------|----------------|----------|
| Anyone can log in with a leaked password | Weak authentication | Add MFA (a second factor) |
| A user can reach data they shouldn't | Weak authorization | Apply least privilege / RBAC |
| No idea who made a change | No accounting | Turn on logging; review the logs |
| Managing logins on each device is a pain | No central AAA | Use a RADIUS or TACACS+ server |

---

## 12. Lesson summary

- **AAA** = authentication, authorization, accounting.
- **Authentication** = who are you? Proven with **factors** (know / have / are); two or more = **MFA**.
- **Authorization** = what may you do? Use **least privilege** and **RBAC**.
- **Accounting** = what did you do? Keep a log of actions.
- **RADIUS** and **TACACS+** do AAA centrally.

**One-sentence recap:** AAA answers who you are (authentication), what you may do (authorization), and what you did (accounting) — the backbone of access control.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-13-03-fill-in-the-blank.md`
2. **Matching** — `wb-13-03-matching.md`
3. **Label the diagram** — `wb-13-03-label-the-diagram.md` (the three A's)
4. **Short answer** — `wb-13-03-short-answer.md`
5. **Hands-on observation** — `wb-13-03-hands-on-observation.md` (your AAA plan)
6. **Vocabulary review** — `wb-13-03-vocabulary-review.md`
7. **Reflection** — `wb-13-03-reflection.md`

**Quick written warm-up (do this now):** Which A proves who you are? Which A limits what you can do?

Proves who: ____________  Limits access: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-13-03-knowledge-check.md`.)

1. **AAA** stands for… *(Objective: concept)*
   - A) Access, Alert, Audit
   - B) Authentication, Authorization, Accounting
   - C) Address, Area, Availability
   - D) Admin, App, Access

2. **Authentication** answers which question? *(Objective: authn)*
   - A) What did you do?
   - B) Who are you?
   - C) How fast is the link?
   - D) What is the subnet?

3. Which is an example of "something you have"? *(Objective: factors)*
   - A) a password
   - B) a fingerprint
   - C) a phone with a login code
   - D) a PIN

4. **MFA** means… *(Objective: factors)*
   - A) using two or more different factors to log in
   - B) using two passwords
   - C) a faster login
   - D) no password needed

5. **Least privilege** means… *(Objective: authz)*
   - A) giving everyone admin rights
   - B) giving each person only the access they need
   - C) removing all passwords
   - D) turning off logging

6. **True or false —** Using two passwords is multi-factor authentication. Explain in one sentence. *(Objective: factors)*

7. **Accounting** in AAA means… *(Objective: acct)*
   - A) paying for the network
   - B) keeping a record of what a user did
   - C) counting the switches
   - D) setting the budget

8. **Matching —** match each AAA part to its question. *(Objective: AAA)*
   - ___ Authentication &nbsp;&nbsp; ___ Authorization &nbsp;&nbsp; ___ Accounting
   - A) What did you do?
   - B) Who are you?
   - C) What may you do?

9. Fill in the blank: A ____________ or TACACS+ server checks logins for many devices in one place. *(Objective: central)*

10. **Scenario —** A new intern can open every file on the network, including payroll. Which AAA idea was ignored, and what should be applied? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-13-03-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-13-03-aaa.md`. In brief:

- **Objective in one line:** learners explain the three parts of AAA, the three authentication factors, MFA, least privilege, RBAC, and the role of RADIUS/TACACS+.
- **Common misconceptions:** "two passwords = MFA"; "authentication = authorization." Correct both.
- **Pacing:** ~30 min. The keycard-badge analogy carries it; the AAA-plan lab makes it real.
- **How CompTIA tests it:** matching each A to its question; spotting real MFA vs. same-factor; least privilege scenarios; RADIUS/TACACS+ as central AAA.
- **Accuracy note (Prime Directive #7):** concept lesson; no commands are run, so no output is claimed. Central-server config is left for a hardware lab.
- **Extension idea:** SSO and federation; TACACS+ vs. RADIUS differences (TCP vs. UDP, full-packet encryption, separated AAA).

---

## 17. Cheat sheet

> **Quick reference — AAA**
>
> | A | Question | Key ideas |
> |---|----------|-----------|
> | **Authentication** | Who are you? | factors: know / have / are; **MFA** = 2+ |
> | **Authorization** | What may you do? | **least privilege**, **RBAC** |
> | **Accounting** | What did you do? | logs (Syslog, 12-02) |
>
> - Order is fixed: **authenticate → authorize → account.**
> - **MFA** needs two **different** factor types (two passwords ≠ MFA).
> - **RADIUS** / **TACACS+** = central AAA for many devices.
>
> _(Full version: `resources/cheat-sheets/network-security-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **2FA (Two-Factor Authentication)** — Logging in with exactly two different factors.
- **AAA** — Authentication, authorization, and accounting: the framework for controlling access.
- **Accounting** — Keeping a record of what a user did on a system or network.
- **Authentication** — Proving who you are.
- **Authorization** — Deciding what an authenticated user is allowed to do.
- **Factor** — A way to prove who you are: something you know, have, or are.
- **Least privilege** — Giving each person only the access they need, and nothing more.
- **MFA (Multi-Factor Authentication)** — Logging in with two or more different factors.
- **RADIUS** — A server that checks logins (AAA) for many devices at once.
- **RBAC (Role-Based Access Control)** — Granting access by job role instead of per person.
- **TACACS+** — A server that provides AAA for network devices, separating the three A's.

(Accounting ties to logs/Syslog from Lesson 12-02.)

---

## 19. Homework

- **Practice:** Turn on MFA for one real account you own (email is a good start).
- **Spaced review:** Say the three A's and their questions from memory.
- **Preview:** Next, **Lesson 13-04 — Firewalls, ACLs, and network segmentation**.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Do any of your accounts still lack MFA? Which? _______________________
3. What was hardest — the three factors, or least privilege vs. RBAC?
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can name the three parts of AAA and their questions.
- [ ] I can name the three authentication factors.
- [ ] I can explain MFA, least privilege, and RBAC.
- [ ] I can say what a RADIUS or TACACS+ server does.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I'm ready for Lesson 13-04 (firewalls and segmentation).

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M13-L03** — "AAA: Authentication, Authorization, and Accounting" · Module 13 · Unit 10_
