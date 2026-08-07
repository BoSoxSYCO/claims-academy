# Answer Key — NA-M13-L03 "AAA: Authentication, Authorization, and Accounting"

> 🔒 **Instructor / self-check only.** Keep separate from student copies.
> **Module:** 13 · **Unit:** 10 · **Objective:** 4.1

---

## Quiz answers (`quiz-13-03-knowledge-check.md`)

1. **B — Authentication, Authorization, Accounting.** That is the AAA framework. *(A, C, and D are made-up expansions.)*

2. **B — Who are you?** Authentication proves identity. *(A is accounting, C and D are unrelated.)*

3. **C — a phone with a login code.** A phone is "something you have." *(A password and a PIN are "something you know"; a fingerprint is "something you are.")*

4. **A — using two or more different factors to log in.** MFA needs different factor types. *(Two passwords are the same factor; MFA does not remove passwords or just speed things up.)*

5. **B — giving each person only the access they need.** That is least privilege. *(A, C, and D are the opposite of good security.)*

6. **False.** Two passwords are both "something you know" — the same factor. MFA needs two **different** factor types (for example, a password plus a phone code).

7. **B — keeping a record of what a user did.** Accounting logs actions. *(A, C, and D are about money or counting hardware.)*

8. **Matching:** **Authentication → B** (Who are you?); **Authorization → C** (What may you do?); **Accounting → A** (What did you do?).

9. **RADIUS.** A RADIUS (or TACACS+) server checks logins for many devices in one place.

10. **Scenario —** **Least privilege** (part of authorization) was ignored — the intern got far more access than the job needs. Apply least privilege, ideally with **RBAC**, so the intern's role opens only the files that role requires. *(Accept "authorization / least privilege / RBAC.")*

---

## Worksheet answers

### Fill in the blank (`wb-13-03-fill-in-the-blank.md`)
1. AAA · 2. authentication · 3. authorization · 4. accounting · 5. factor · 6. MFA · 7. least privilege · 8. RBAC · 9. RADIUS · 10. TACACS+

### Matching (`wb-13-03-matching.md`)
**Part 1:** 1 → C · 2 → A · 3 → B
**Part 2:** 4 → F (factor) · 5 → D (MFA) · 6 → G (least privilege) · 7 → E (RBAC) · 8 → H (RADIUS)

### Label the diagram (`wb-13-03-label-the-diagram.md`)
a. Authentication · b. Authorization · c. Accounting · d. know/have/are · e. least privilege · f. MFA

### Short answer (`wb-13-03-short-answer.md`) — model answers
1. Authentication (Who are you?), Authorization (What may you do?), Accounting (What did you do?).
2. Something you know (password/PIN), something you have (phone/token), something you are (fingerprint/face).
3. Because both passwords are the same factor type ("something you know"). Real MFA needs two different factor types.
4. Least privilege means giving only the access someone needs. It limits the damage if an account is breached.
5. RBAC grants access by job role, so you manage a few roles instead of each person one at a time.
6. Accounting records what each user did (a log of actions). It ties to logs/Syslog from Lesson 12-02.
7. It checks logins (AAA) for many devices from one place, so you don't manage accounts on each device separately.

### Hands-on observation (`wb-13-03-hands-on-observation.md`)
Answers vary. Full credit when the plan has: an Authentication step naming the login and a plausible second factor; one least-privilege Authorization rule (who is limited and why); and an Accounting note naming where actions are logged.

### Vocabulary review (`wb-13-03-vocabulary-review.md`)
- **AAA** — authentication, authorization, and accounting.
- **Authentication** — proving who you are.
- **Authorization** — what an authenticated user may do.
- **Accounting** — a record of what a user did.
- **Factor** — a way to prove who you are (know / have / are).
- **MFA** — two or more different factors to log in.
- **2FA** — exactly two different factors.
- **Least privilege** — only the access someone needs.
- **RBAC** — access granted by job role.
- **RADIUS** — a server that checks logins for many devices.
- **TACACS+** — a server that provides AAA for network gear, separating the three A's.

**Part 3 quick recall:** 1. Authentication · 2. Authorization · 3. Accounting · 4. MFA

---
_NetworkAcademy+ · Answer Key · CompTIA Network+ N10-009 · NA-M13-L03 · Module 13_
