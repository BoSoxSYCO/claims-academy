---
id: NA-M10-L05
module: 10
lesson: 05
title: "A Memory System for the Port Table"
unit: 7
objective_ids: ["1.4"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E1
prerequisites: ["NA-M10-L01", "NA-M10-L02", "NA-M10-L03", "NA-M10-L04"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-06"
---

# [Module 10 · Lesson 05] A Memory System for the Port Table

> **Unit:** Unit 7 — Ports, Protocols & Applications · **Time:** ~30 min · **Equipment:** E1 (your Windows laptop)
> **You'll need first:** Lessons 10-01 through 10-04 (the ports and their secure twins).

You have met all the must-know ports. Now the real job: **holding them in your head** on exam day. This lesson is not new ports — it is a **system** to make the ones you know stick. Rote repeating a list rarely works. A few simple habits work far better.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain **why** rereading a list is a weak way to memorize.
- [ ] Use **chunking** to group ports by job.
- [ ] Use **active recall** and **spaced repetition** to lock ports in.
- [ ] Build your own flashcards and a simple review schedule.

---

## 2. Introduction — why this matters

Think about how you learned a friend's phone number. You didn't stare at it. You **dialed it** again and again, from memory, until it stuck. Pulling a fact *out* of your head is what builds the memory — not putting it in.

Most people study the wrong way. They **reread** the port list and feel like they know it. That feeling is a trap. Recognizing a port ("oh yeah, 443") is not the same as **recalling** it when the exam asks cold.

This lesson gives you a small set of proven habits: **chunk** the ports into groups, **quiz yourself** instead of rereading, and **space** your reviews over days. Together they turn a scary list of 16 numbers into something you own.

🎯 **Exam tip:** The exam asks ports **both ways** — number to protocol, and protocol to number. Practice both directions.

🔧 **Lab link:** You'll build a real flashcard deck you can use all the way to exam day.

---

## 3. Simple explanation

Four habits do the heavy lifting. Learn them once, use them for every port.

### Habit 1 — Chunking (group by job)

**Chunking** means grouping small facts into a few bigger buckets. Your brain holds a few groups far better than 16 loose numbers. You already met the groups in Lesson 10-03:

- **Web:** HTTP 80, HTTPS 443
- **Mail:** SMTP 25, POP3 110, IMAP 143
- **Remote:** SSH 22, Telnet 23, RDP 3389
- **Files:** FTP 20/21, TFTP 69, SMB 445
- **Services:** DNS 53, DHCP 67/68, NTP 123, SNMP 161/162, Syslog 514

Learn one group at a time. Master web before you touch mail.

### Habit 2 — Active recall (quiz, don't reread)

**Active recall** means pulling the answer from memory, not looking at it. Cover the port column and say each one out loud. Miss one? Peek, then cover and try again. This feels harder than rereading — and that "harder" is exactly what builds memory.

### Habit 3 — Spaced repetition (review over days)

**Spaced repetition** means reviewing at growing gaps instead of all at once. Cramming fades fast. Spacing lasts. A simple schedule:

| Review | When |
|--------|------|
| 1st | Today |
| 2nd | Tomorrow |
| 3rd | In 2 days |
| 4th | In 4 days |
| 5th | In 1 week |

Each time you recall a port, wait a little longer before the next review.

### Habit 4 — Mnemonics (tiny memory hooks)

A **mnemonic** is a short trick that ties a hard fact to something easy. Use them only for the ports you keep missing:

- **SSH 22** is the **Secure** twin — "two 2s, too secure." **Telnet 23** is one more and one worse.
- **SMTP 25** — "**S**end **M**ail" starts the alphabet of mail ports (25 → 110 → 143).
- **SMB 445** — "**S**hare **M**y **B**usiness" on 445.
- **HTTPS 443** — the plain web is 80; the secure web jumps to 443. No shared digits — just a fact.

> **The big idea:** Don't reread — **recall**. **Chunk** the ports into five job groups, **quiz yourself** both directions, **space** your reviews over days, and add a **mnemonic** only for the ones that fight you. This system beats staring at the list every time.

💡 **Tip:** Two minutes of self-quizzing beats twenty minutes of rereading. Short and often wins.

⚠️ **Watch out:** Recognizing an answer on the page is not the same as recalling it blank. Always test yourself covered up.

---

## 4. Real-world analogy

> **"Memorizing ports is like learning a phone number — you dial it from memory, you don't stare at it."**

| Learning a phone number | Learning a port |
|-------------------------|-----------------|
| You dial it from memory | You recall it covered up |
| You use it over many days | You space your reviews |
| Area code groups the digits | Job groups the ports |
| Staring rarely works | Rereading rarely works |

The fact only sticks when you **pull it out**, again and again, over time.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Chunking** | CHUNK-ing | Grouping small facts into a few bigger buckets. |
| **Active recall** | | Pulling an answer from memory instead of looking at it. |
| **Spaced repetition** | | Reviewing at growing gaps over days, not all at once. |
| **Mnemonic** | nih-MON-ik | A short trick that ties a hard fact to something easy. |
| **Flashcard** | | A card with a question on one side and the answer on the other. |

---

## 6. ASCII diagram

```
   THE PORT MEMORY SYSTEM

   1) CHUNK          web · mail · remote · files · services
                     (learn one group at a time)

   2) ACTIVE RECALL  cover the answer → say it → check
                     (both ways: number ↔ protocol)

   3) SPACE IT       today → tomorrow → +2d → +4d → +1wk

   4) MNEMONIC       only for the ports you keep missing
                     (SSH 22 = "too secure"; SMB 445 = "Share My Business")

   Rule: pull the fact OUT of your head — don't just read it in.
```

_Four habits, used together, turn the 16-port list into memory that lasts._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-10-05-memory-system-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a four-step loop — Chunk → Active recall → Space it → Mnemonic — around the port table, each step in its own labeled block.
> **Key elements & labels:** step 1 Chunk (five job groups); step 2 Active recall (cover/say/check, both directions); step 3 Space it (today, +1d, +2d, +4d, +1wk); step 4 Mnemonic (only for missed ports).
> **Color meaning:** each step is numbered 1–4 and labeled in words; numbers and text carry the meaning, not color.
> **Flow direction:** a clockwise loop, step 1 top-left to step 4 bottom-left, arrow back to step 1.
> **Alt text (required):** "A four-step memory-system loop for the port table. Step 1, Chunk: group ports into web, mail, remote, files, and services, learning one group at a time. Step 2, Active recall: cover the answer, say it from memory, then check — practicing both number-to-protocol and protocol-to-number. Step 3, Space it: review today, tomorrow, in two days, in four days, and in one week. Step 4, Mnemonic: add a short memory trick only for the ports you keep missing, such as SSH 22 is too secure and SMB 445 is Share My Business. An arrow loops from step 4 back to step 1 to repeat."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-10-05-flashcards-deck-01.jpg`
> A hand-made flashcard deck, one card showing "443" and its back showing "HTTPS." Alt text: "A hand-made port flashcard deck with a number on the front and its protocol on the back."
>
> **Photo 2** — `img-10-05-review-calendar-01.jpg`
> A small calendar with review days circled. Alt text: "A calendar with spaced review days circled — today, tomorrow, plus two, plus four, and plus seven."

---

## 9. Hands-on lab

**Goal:** build a real port flashcard deck and run your first active-recall session.
**Why:** the deck is the tool you'll use every day until the exam.

**You will need**
- 16 index cards (or a free flashcard app), a pen. Estimated time: 15 min.

⚠️ **Before you start (safety):** this is a study task — nothing on your gear changes.

### 9a. Step-by-step instructions

1. Take 16 cards. On the **front** of each, write one **port** from the table.
2. On the **back**, write the **protocol, its job, and TCP/UDP** (for example: front `443`; back `HTTPS — secure web — TCP`).
3. Shuffle the deck.
4. **Round 1 (number → protocol):** look at the front, say the back from memory, then flip to check.
5. Sort as you go: cards you got **right** in one pile, **missed** in another.
6. **Round 2 (protocol → number):** flip the deck and go the other way.
7. Redo only the **missed** pile until it's empty.

### 9b. Expected results

- Two piles after each round: "got it" and "missed."
- The missed pile shrinks each pass.

- ✅ **You did it if:** you recalled at least 10 of 16 ports covered up, both directions.

### 9c. Verify it worked

1. Hand the deck to a friend and have them quiz you cold.
2. Write tomorrow's date on your calendar as review 2.

### 9d. Reset / roll back

Nothing to undo. Keep the deck — you'll reuse it all the way to exam day.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Rereading and feeling "done" | False confidence | Cover the answer and recall it blank |
| Studying all 16 at once | Overload | Chunk — one job group at a time |
| Cramming the night before | Fades fast | Space reviews across several days |
| Only going one direction | Half-learned | Quiz number→protocol **and** protocol→number |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| "I know it but blank on the test" | Studied by recognition, not recall | Switch to covered self-quizzing |
| One group won't stick | Too much at once | Drill just that group for two days |
| Keep swapping two ports | No memory hook | Add a mnemonic for that exact pair |
| Forget after a few days | No spacing | Add a +4-day and +1-week review |

---

## 12. Lesson summary

- **Recall beats rereading** — pull the fact out of your head.
- **Chunk** the ports into five job groups; learn one at a time.
- **Space** reviews over days: today, +1, +2, +4, +7.
- Add a **mnemonic** only for the ports you keep missing.

**One-sentence recap:** Chunk the ports by job, quiz yourself both directions with flashcards, space the reviews across days, and use a memory hook only where you need one.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-10-05-fill-in-the-blank.md`
2. **Matching** — `wb-10-05-matching.md`
3. **Label the diagram** — `wb-10-05-label-the-diagram.md` (the four-step system)
4. **Short answer** — `wb-10-05-short-answer.md`
5. **Hands-on observation** — `wb-10-05-hands-on-observation.md` (build & test a deck)
6. **Vocabulary review** — `wb-10-05-vocabulary-review.md`
7. **Reflection** — `wb-10-05-reflection.md`

**Quick written warm-up (do this now):** Name the four habits in this system.

1: ___________ 2: ___________ 3: ___________ 4: ___________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-10-05-knowledge-check.md`.)

1. Which study method builds the strongest memory? *(Objective: recall)*
   - A) Rereading the list many times
   - B) Active recall — quizzing yourself covered up
   - C) Highlighting the list in color
   - D) Copying the list once

2. **Chunking** the port table means… *(Objective: chunking)*
   - A) Deleting ports you don't like
   - B) Grouping ports by job (web, mail, remote, files, services)
   - C) Learning all 16 at the same time
   - D) Writing them in binary

3. **Spaced repetition** means… *(Objective: spacing)*
   - A) Reviewing once, the night before
   - B) Reviewing at growing gaps over several days
   - C) Reading the list twice in a row
   - D) Skipping review until the exam

4. You keep swapping **SSH** and **Telnet**. The best fix is… *(Objective: mnemonic)*
   - A) Give up on those two
   - B) A mnemonic (SSH 22 = "too secure"; Telnet 23 = worse)
   - C) Reread the whole table
   - D) Study them only once

5. To quiz "**both directions**," you practice… *(Objective: recall)*
   - A) Only number → protocol
   - B) Only protocol → number
   - C) Number → protocol **and** protocol → number
   - D) Neither; just read

6. **True or false —** Rereading your notes is the most effective way to memorize the ports. Explain in one sentence. *(Objective: study method)*

7. Which review schedule uses spacing best? *(Objective: spacing)*
   - A) Today, today, today
   - B) Today, tomorrow, +2 days, +4 days, +1 week
   - C) Only the night before
   - D) Once a month

8. **Matching —** match each habit to what it does. *(Objective: vocabulary)*
   - ___ Chunking &nbsp;&nbsp; ___ Active recall &nbsp;&nbsp; ___ Mnemonic
   - A) Pull the answer from memory
   - B) A memory hook for a hard fact
   - C) Group facts into buckets

9. Fill in the blank: A card with a question on the front and the answer on the back is a ____________. *(Objective: vocabulary)*

10. **Scenario —** You have one week until the exam and keep missing the mail ports (25, 110, 143). Describe a study plan using all four habits. *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-10-05-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-10-05-memory-system.md`. In brief:

- **Objective in one line:** learners apply chunking, active recall, spaced repetition, and mnemonics to memorize the port table.
- **Common misconceptions:** "rereading = studying"; "recognizing = knowing." Correct both with a live covered-up quiz.
- **Pacing:** ~30 min. Most of it is the flashcard build and first recall round.
- **How CompTIA tests it:** the ports themselves (1.5), both directions; this lesson is the study method that gets learners there.
- **Accuracy note:** all port facts reused from 10-03/10-04 are standards-based. Study techniques (active recall, spaced repetition) are well-established learning science. No fabricated data.
- **Extension idea:** introduce a Leitner box (three-pile spaced system) for learners who want a fuller schedule.

---

## 17. Cheat sheet

> **Quick reference — The port memory system**
>
> 1. **Chunk** — web · mail · remote · files · services (one group at a time).
> 2. **Active recall** — cover, say it, check. Both directions.
> 3. **Space it** — today → +1d → +2d → +4d → +1wk.
> 4. **Mnemonic** — only for ports you keep missing.
>
> - **Recall beats rereading.** Two minutes quizzing > twenty minutes reading.
> - Hooks: SSH 22 "too secure" · SMB 445 "Share My Business" · mail 25→110→143.
>
> _(Full port list: `resources/cheat-sheets/ports-and-protocols-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Chunking** — Grouping small facts into a few bigger buckets so they're easier to hold.
- **Active recall** — Pulling an answer from memory instead of looking at it.
- **Spaced repetition** — Reviewing material at growing gaps over days, not all at once.
- **Mnemonic** — A short trick that ties a hard fact to something easy to remember.
- **Flashcard** — A card with a question on one side and its answer on the other, used for self-quizzing.

---

## 19. Homework

- **Practice:** Run your flashcard deck for five minutes a day, every day, until the exam.
- **Spaced review:** Follow the schedule — today, tomorrow, +2, +4, +7 days.
- **Preview:** Module 10 is complete. Next up, Module 11 — putting networks together (VLANs and more).

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Which habit will help me most? _______________________
3. How will I fit five minutes of recall into my day? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain why recall beats rereading.
- [ ] I can chunk the ports into five job groups.
- [ ] I built a flashcard deck and quizzed both directions.
- [ ] I have a spaced review schedule written down.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know Module 10 is done and Module 11 is next.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M10-L05** — "A Memory System for the Port Table" · Module 10 · Unit 7_
