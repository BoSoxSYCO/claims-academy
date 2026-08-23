---
id: NA-M13-L01
module: 13
lesson: 01
title: "Security Goals: Confidentiality, Integrity, Availability"
unit: 10
objective_ids: ["4.1"]
reading_level_target: 7
status: Published
est_minutes: 25
equipment_tier: E1
prerequisites: ["NA-M12-L03"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-07"
---

# [Module 13 · Lesson 01] Security Goals: Confidentiality, Integrity, Availability

> **Unit:** Unit 10 — Network Security · **Time:** ~25 min · **Equipment:** E1 (concept lesson; paper)
> **You'll need first:** availability from Lesson 12-03.

Welcome to network security. Before we fight attacks, we need to know what we are protecting. Security has three goals. We call them the **CIA triad**. This lesson teaches all three in plain words. Every tool you learn later protects one of them.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Name the three goals of the **CIA triad**.
- [ ] Explain **confidentiality**, **integrity**, and **availability** in plain words.
- [ ] Give one real example of each goal.
- [ ] Say how each goal can be broken.

---

## 2. Introduction — why this matters

What does "secure" even mean? It is a fuzzy word. Security experts made it clear. They said security has three goals. Meet all three and your data is safe.

The three goals are **confidentiality**, **integrity**, and **availability**. Their first letters spell **CIA**. So we call them the **CIA triad**. "Triad" just means a group of three.

Here is why this matters. Every security tool you will ever use protects one of these three. A password protects one. A backup protects another. Once you see the three goals, security stops feeling random. It starts to make sense.

🎯 **Exam tip:** The exam loves the CIA triad. Learn which goal each tool or attack touches.

🔧 **Lab link:** You'll sort real lab examples into C, I, and A.

---

## 3. Simple explanation

Think about your bank account. It shows the three goals well.

### Confidentiality — keep secrets secret

**Confidentiality** means only the right people can see the data. Your bank balance is private. Only you should see it. A password keeps it that way.

- Kept safe by: passwords, login checks, and secret codes.
- Broken when: someone snoops or steals the data. That is a leak.

### Integrity — keep data true

**Integrity** means the data is correct and unchanged. Your balance must be right. No one should change it in secret. If it says $100, it must be $100.

- Kept safe by: checks that spot changes.
- Broken when: someone tampers with the data, or it gets damaged.

A common tool here is a **checksum**. A **checksum** is a short number made from a file. If the file changes, the number changes too. So a wrong number warns you the data was altered.

### Availability — keep it working

**Availability** means the service is up when you need it. You learned this in Lesson 12-03. The ATM must work when you want cash. A bank with a broken ATM fails this goal.

- Kept safe by: backups and spare parts (redundancy).
- Broken when: the system goes down or an attack floods it.

> **The big idea:** Security has three goals — the **CIA triad**. **Confidentiality** keeps data secret. **Integrity** keeps data true and unchanged. **Availability** keeps the service up and usable. Break any one and you have a security problem.

💡 **Tip:** Say it as a sentence. "Keep it **secret** (C), keep it **true** (I), keep it **up** (A)."

⚠️ **Watch out:** All three matter. A locked file that no one can open still fails — it broke availability.

---

## 4. Real-world analogy

> **"The CIA triad is like your diary with a lock."**

| Your diary | Network goal |
|------------|--------------|
| The lock keeps others out | Confidentiality |
| No one edits your entries | Integrity |
| You can read it whenever you want | Availability |

A good diary does all three. So does a secure network. Lose any one and the diary fails you.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **CIA triad** | C-I-A TRY-ad | The three goals of security: confidentiality, integrity, availability. |
| **Confidentiality** | con-fi-den-she-AL-it-ee | Only the right people can see the data. |
| **Integrity** | in-TEG-rit-ee | The data is correct and unchanged. |
| **Availability** | a-vale-a-BIL-it-ee | The service is up and usable when needed. |
| **Checksum** | CHECK-sum | A short number from a file that shows if it changed. |

---

## 6. ASCII diagram

```
              THE CIA TRIAD
        (three goals of security)

   C — CONFIDENTIALITY   keep it secret   (passwords)
   I — INTEGRITY         keep it true     (checksums)
   A — AVAILABILITY      keep it up       (backups)

   Break any one  ->  you have a security problem.
```

_All three goals must hold. Each has its own tools._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-13-01-cia-triad-01.svg` (created and stored in this module's `assets/`)
> **Shows:** three columns — Confidentiality, Integrity, Availability — each with its plain meaning, how it is kept safe, and how it is broken.
> **Key elements & labels:** each column titled with its full word and letter (C, I, A); a one-line meaning; a "kept safe by" row; a "broken when" row.
> **Color meaning:** each column is titled in words and letters; the labels carry meaning, not color.
> **Flow direction:** three equal columns left to right, under one "CIA triad" banner.
> **Alt text (required):** "Three columns under the heading CIA triad, the three goals of security. Column C, Confidentiality: only the right people can see the data; kept safe by passwords and secret codes; broken when someone snoops or steals the data. Column I, Integrity: the data is correct and unchanged; kept safe by checksums that spot changes; broken when someone tampers with the data. Column A, Availability: the service is up and usable when needed; kept safe by backups and spare parts; broken when the system goes down or an attack floods it. A note reads: break any one goal and you have a security problem."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-13-01-login-screen-01.jpg`
> A device login/password screen. Alt text: "A login screen asking for a password, an everyday example of confidentiality protecting who can see the data."
>
> **Photo 2** — `img-13-01-checksum-01.jpg`
> A file download page showing a checksum/hash value. Alt text: "A download page listing a checksum value, used to confirm the file was not changed — an example of integrity."

---

## 9. Hands-on lab

**Goal:** sort real examples of your home lab into C, I, and A.
**Why:** naming the goal for each example makes the triad stick.

**You will need**
- Paper and pen. Estimated time: 10 min.

⚠️ **Before you start (safety):** this is writing only. You change no settings.

### 9a. Step-by-step instructions

1. Draw three boxes. Label them **C**, **I**, and **A**.
2. Write "switch admin password" in the box it protects. (Answer: C.)
3. Write "a backup of the switch config" in its box. (Answer: A.)
4. Write "a checksum on a downloaded file" in its box. (Answer: I.)
5. Add one example of your own to each box.

### 9b. Expected results

- Three boxes, each with at least two examples of that security goal.

- ✅ **You did it if:** each example clearly matches its goal.

### 9c. Verify it worked

1. Point to your C box. Say why a password protects confidentiality.
2. Point to your A box. Say why a backup protects availability.

### 9d. Reset / roll back

Nothing changed — writing only. Keep the page with your lab notes.

> 🔧 **Home-lab continuity:** save this sheet. In later lessons you'll add real controls for each goal.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking security is only secrecy | You forget integrity and availability | Remember all three: C, I, and A |
| Mixing up integrity and confidentiality | Wrong answer on the exam | Secret = C; unchanged = I |
| Ignoring availability | A "safe" but down system still fails | Up-time is a security goal too |
| Guessing what a checksum does | You miss the integrity clue | A checksum spots a change |

---

## 11. Troubleshooting

| Symptom | Likely goal at risk | Try this |
|---------|---------------------|----------|
| A file was read by the wrong person | Confidentiality | Add a password; limit who can open it |
| A file looks changed or corrupt | Integrity | Check its checksum against the original |
| The service is down | Availability | Restore from backup; use a spare/redundancy |
| You can't decide the goal | — | Ask: secret (C), true (I), or up (A)? |

---

## 12. Lesson summary

- Security has three goals — the **CIA triad**.
- **Confidentiality** = keep data secret (passwords).
- **Integrity** = keep data true and unchanged (checksums).
- **Availability** = keep the service up and usable (backups).

**One-sentence recap:** The CIA triad names the three goals of security — keep data secret, keep it true, and keep it up.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-13-01-fill-in-the-blank.md`
2. **Matching** — `wb-13-01-matching.md`
3. **Label the diagram** — `wb-13-01-label-the-diagram.md` (the CIA columns)
4. **Short answer** — `wb-13-01-short-answer.md`
5. **Hands-on observation** — `wb-13-01-hands-on-observation.md` (sort C/I/A)
6. **Vocabulary review** — `wb-13-01-vocabulary-review.md`
7. **Reflection** — `wb-13-01-reflection.md`

**Quick written warm-up (do this now):** What does the "I" in CIA stand for? Give one example.

I stands for: ____________  Example: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-13-01-knowledge-check.md`.)

1. The **CIA triad** stands for… *(Objective: concept)*
   - A) Central Intelligence Agency
   - B) Confidentiality, Integrity, Availability
   - C) Cable, Internet, Access
   - D) Control, Input, Answer

2. **Confidentiality** means… *(Objective: C)*
   - A) the data is up and usable
   - B) only the right people can see the data
   - C) the data is fast
   - D) the data is backed up

3. **Integrity** means… *(Objective: I)*
   - A) the data is correct and unchanged
   - B) the data is secret
   - C) the network is fast
   - D) the cable is new

4. **Availability** means… *(Objective: A)*
   - A) the data is secret
   - B) the data is encrypted
   - C) the service is up and usable when needed
   - D) the password is long

5. A **checksum** helps protect… *(Objective: I)*
   - A) confidentiality
   - B) integrity
   - C) availability
   - D) the cable

6. **True or false —** A locked file that no one can ever open still meets all three goals. Explain in one sentence. *(Objective: A)*

7. A strong **password** mainly protects… *(Objective: C)*
   - A) availability
   - B) integrity
   - C) confidentiality
   - D) cable length

8. **Matching —** match each goal to its plain meaning. *(Objective: CIA)*
   - ___ Confidentiality &nbsp;&nbsp; ___ Integrity &nbsp;&nbsp; ___ Availability
   - A) The service is up and usable
   - B) Only the right people can see the data
   - C) The data is correct and unchanged

9. Fill in the blank: A **backup** mainly protects the goal of ____________. *(Objective: A)*

10. **Scenario —** An attacker secretly changes a price in an online store from $100 to $1. Which CIA goal did they break, and name one way to protect it. *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-13-01-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-13-01-cia-triad.md`. In brief:

- **Objective in one line:** learners name and explain the CIA triad — confidentiality, integrity, availability — with a real example of each.
- **Common misconceptions:** "security = secrecy only"; "integrity = confidentiality." Correct both.
- **Pacing:** ~25 min. The bank-account and diary analogies carry it; the sorting lab makes it real.
- **How CompTIA tests it:** which goal a tool or attack affects; recognizing checksum → integrity, password → confidentiality, backup → availability.
- **Accuracy note (Prime Directive #7):** concept lesson; no commands are run, so no output is claimed.
- **Extension idea:** non-repudiation as a fourth idea; hashing vs. encryption (deeper in 13-06).

---

## 17. Cheat sheet

> **Quick reference — The CIA triad**
>
> | Goal | Plain meaning | Kept safe by |
> |------|---------------|--------------|
> | **Confidentiality** | keep it secret | passwords, secret codes |
> | **Integrity** | keep it true | checksums |
> | **Availability** | keep it up | backups, redundancy |
>
> - **C** = secret · **I** = true · **A** = up.
> - Every control protects one or more of the three.
> - A **checksum** spots a change → integrity.
>
> _(Full version: `resources/cheat-sheets/network-security-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **CIA triad** — The three goals of security: confidentiality, integrity, and availability.
- **Confidentiality** — Keeping data secret so only the right people can see it.
- **Integrity** — Keeping data correct and unchanged.
- **Checksum** — A short number made from a file, used to spot whether the file changed.

(Availability was defined in Lesson 12-03 and is reused here as the "A" in CIA.)

---

## 19. Homework

- **Practice:** List three things in your home that need confidentiality, integrity, or availability.
- **Spaced review:** Say the CIA triad from memory, with one example each.
- **Preview:** Next, **Lesson 13-02 — Common attacks** (how the bad guys break these goals).

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Which goal is easiest to forget — and why? _______________________
3. What was hardest — integrity, or availability?
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can name the three goals of the CIA triad.
- [ ] I can explain confidentiality, integrity, and availability.
- [ ] I can give one example of each goal.
- [ ] I can say how each goal gets broken.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I'm ready for Lesson 13-02 (common attacks).

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M13-L01** — "Security Goals: Confidentiality, Integrity, Availability" · Module 13 · Unit 10_
