---
id: NA-M14-L01
module: 14
lesson: 01
title: "The CompTIA Troubleshooting Methodology"
unit: 11
objective_ids: ["5.1"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E1
prerequisites: ["NA-M12-L01"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-07"
---

# [Module 14 · Lesson 01] The CompTIA Troubleshooting Methodology

> **Unit:** Unit 11 — Network Troubleshooting · **Time:** ~30 min · **Equipment:** E1 (concept lesson; paper)
> **You'll need first:** documentation (12-01).

Something breaks. The internet is down, or a printer won't print. What do you do first? Random guessing wastes time and can make things worse. Instead, pros follow a method — the same seven steps every time. This lesson teaches that method. It is the backbone of the whole troubleshooting unit.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] List the seven steps of the CompTIA troubleshooting method, in order.
- [ ] Explain a **theory of probable cause** and how to test it.
- [ ] Explain when to **escalate**.
- [ ] Explain why you always **document** at the end.

---

## 2. Introduction — why this matters

Imagine your internet stops working. You could unplug random cables and hope. But that's slow, and you might break something that worked.

A **troubleshooting methodology** is a fixed set of steps for finding and fixing problems. It keeps you calm and organized. You gather facts first. You make one guess at a time. You test before you change. And you write down what you did.

CompTIA tests this method heavily. Many exam questions ask, "What is the next step?" So the order matters. Learn the seven steps and their order, and these questions become easy.

🎯 **Exam tip:** When a question asks for the "next step," find where you are in the seven steps — the answer is the step that comes next.

🔧 **Lab link:** You'll walk a real, simple problem through all seven steps on paper.

---

## 3. Simple explanation

The method has seven steps. Follow them in order.

1. **Identify the problem.** Gather information. Ask the user what happened and what changed. Note the symptoms.
2. **Establish a theory of probable cause.** Make your best guess at what's wrong. Start with the simple, likely causes first.
3. **Test the theory.** Check if your guess is right. If it is, move on. If not, form a new theory (back to step 2).
4. **Establish a plan of action.** Decide the fix and the steps to do it. Think about side effects.
5. **Implement the solution, or escalate.** Do the fix. If it's beyond your access or skill, **escalate** — hand it to someone who can.
6. **Verify full system functionality.** Make sure everything works again. Add preventive measures so it doesn't happen again.
7. **Document findings, actions, and outcomes.** Write down what was wrong, what you did, and the result.

A **theory of probable cause** is just your best guess at the cause. You test it before changing anything. That saves time and avoids new problems.

To **escalate** means to pass the problem to someone with more access or skill. It is not failure. Knowing when to escalate is a real skill.

> **The big idea:** Troubleshoot with a fixed method, not guesses. The seven steps are: (1) **identify** the problem, (2) form a **theory of probable cause**, (3) **test** the theory, (4) make a **plan**, (5) **implement** the fix or **escalate**, (6) **verify** it works and add prevention, and (7) **document** it. Do them in order. If a theory fails, go back to step 2.

💡 **Tip:** Change one thing at a time. If you change five things and it works, you won't know which one fixed it.

⚠️ **Watch out:** Don't skip step 1. Fixing before you understand the problem often makes things worse.

---

## 4. Real-world analogy

> **"Troubleshooting is like a doctor treating a patient."**

| Doctor visit | Troubleshooting step |
|--------------|----------------------|
| Ask about symptoms | 1. Identify the problem |
| Form a diagnosis | 2. Theory of probable cause |
| Run a test to check | 3. Test the theory |
| Decide the treatment | 4. Plan of action |
| Treat, or refer to a specialist | 5. Implement or escalate |
| Check that the patient recovers | 6. Verify it works |
| Write it in the chart | 7. Document |

A good doctor doesn't guess and operate. They diagnose, test, then treat. So do you.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Troubleshooting methodology** | | A fixed set of steps for finding and fixing problems. |
| **Theory of probable cause** | | Your best guess at what is causing the problem. |
| **Escalate** | ES-kuh-late | Pass a problem to someone with more access or skill. |
| **Verify** | VAIR-i-fy | Confirm that the fix actually worked. |
| **Document** | DOK-yoo-ment | Write down what was wrong, what you did, and the result. |

---

## 6. ASCII diagram

```
   THE 7 STEPS (in order)

   1. IDENTIFY the problem
   2. THEORY of probable cause  <----+
   3. TEST the theory                |  (theory wrong?
        |                            |   make a new one)
        +--- wrong? ----------------->
        v right
   4. PLAN of action
   5. IMPLEMENT the fix  (or ESCALATE)
   6. VERIFY it works  (+ prevent it next time)
   7. DOCUMENT findings, actions, outcomes
```

_Find it, guess it, test it, plan it, fix it, check it, write it down._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-14-01-troubleshooting-steps-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a top-to-bottom flowchart of the seven steps, with a loop arrow from "Test the theory" back to "Establish a theory" when the theory is wrong.
> **Key elements & labels:** each step numbered and named; a labeled loop-back arrow (theory wrong → new theory); step 5 shows "implement or escalate"; step 6 notes "verify + prevent."
> **Color meaning:** each step is numbered and named in words; the loop-back is a labeled arrow, not shown by color alone.
> **Flow direction:** top to bottom, with one loop-back arrow.
> **Alt text (required):** "A top-to-bottom flowchart of the seven CompTIA troubleshooting steps. Step 1, identify the problem by gathering information and asking what changed. Step 2, establish a theory of probable cause — your best guess, simple causes first. Step 3, test the theory; if the theory is wrong, a loop-back arrow returns to step 2 to form a new theory. Step 4, establish a plan of action. Step 5, implement the solution, or escalate to someone with more access or skill. Step 6, verify full system functionality and add preventive measures. Step 7, document the findings, actions, and outcomes."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-14-01-help-desk-ticket-01.jpg`
> A help-desk ticket form. Alt text: "A help-desk ticket recording a problem's symptoms and steps taken — where troubleshooting is identified and documented."
>
> **Photo 2** — `img-14-01-flowchart-whiteboard-01.jpg`
> A whiteboard with the seven steps. Alt text: "A whiteboard showing the seven troubleshooting steps in order, used as a team reference."

---

## 9. Hands-on lab

**Goal:** walk a simple problem through all seven steps on paper.
**Why:** practicing the order makes it stick for the exam and real life.

**You will need**
- Paper and pen. Estimated time: 15 min.

⚠️ **Before you start (safety):** this is writing only. You change no settings.

### 9a. Step-by-step instructions

Use this problem: **"My laptop won't connect to the Wi-Fi."**

1. **Identify:** write two questions you'd ask (for example, "Did it ever work?" "What changed?").
2. **Theory:** write one simple probable cause (for example, "Wi-Fi is turned off").
3. **Test:** write how you'd check that theory (for example, "look for the Wi-Fi toggle").
4. **Plan:** write the fix you'd do.
5. **Implement/escalate:** write your fix — or when you'd escalate.
6. **Verify:** write how you'd confirm it works (for example, "open a website").
7. **Document:** write one line recording what you found and did.

### 9b. Expected results

- A one-page walk-through with a line for each of the seven steps, in order.

- ✅ **You did it if:** every step has a sensible entry and they're in order.

### 9c. Verify it worked

1. Read your steps aloud in order. Do they flow logically?
2. Point to step 3. Say what happens if your theory is wrong (go back to step 2).

### 9d. Reset / roll back

Nothing changed — writing only. Keep your notes as a template for real problems.

> 🔧 **Home-lab continuity:** save your seven-step template. You'll reuse it in Lessons 14-05 and 14-07.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Fixing before identifying | You solve the wrong problem | Do step 1 first — gather facts |
| Changing many things at once | Can't tell what fixed it | Change one thing at a time |
| Skipping the test step | You "fix" the wrong cause | Test the theory before changing |
| Never documenting | The next person repeats your work | Always do step 7 |

---

## 11. Troubleshooting

| Symptom | Likely method mistake | Try this |
|---------|-----------------------|----------|
| You're stuck and frustrated | No clear method | Restart at step 1: gather facts |
| The "fix" didn't help | Theory was wrong | Go back to step 2, new theory |
| It broke again next week | No prevention or record | Add preventive measures; document |
| It's beyond your access | Trying to force it | Escalate to someone who can |

---

## 12. Lesson summary

- Troubleshoot with a method, not guesses.
- The seven steps: **identify → theory → test → plan → implement/escalate → verify → document.**
- A **theory of probable cause** is a guess you **test** before changing anything.
- Always **document** at the end, and **escalate** when needed.

**One-sentence recap:** Find it, guess it, test it, plan it, fix it (or escalate), check it, and write it down — in that order.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-14-01-fill-in-the-blank.md`
2. **Matching** — `wb-14-01-matching.md`
3. **Label the diagram** — `wb-14-01-label-the-diagram.md` (the seven steps)
4. **Short answer** — `wb-14-01-short-answer.md`
5. **Hands-on observation** — `wb-14-01-hands-on-observation.md` (walk a problem)
6. **Vocabulary review** — `wb-14-01-vocabulary-review.md`
7. **Reflection** — `wb-14-01-reflection.md`

**Quick written warm-up (do this now):** What is step 1? What do you always do in step 7?

Step 1: ____________  Step 7: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-14-01-knowledge-check.md`.)

1. What is the first troubleshooting step? *(Objective: order)*
   - A) Document the outcome
   - B) Identify the problem
   - C) Implement a fix
   - D) Test a theory

2. A **theory of probable cause** is… *(Objective: concept)*
   - A) a written report
   - B) your best guess at the cause
   - C) the final fix
   - D) a type of cable

3. You test your theory and it's wrong. What next? *(Objective: order)*
   - A) Give up
   - B) Implement anyway
   - C) Establish a new theory
   - D) Document and stop

4. To **escalate** means to… *(Objective: concept)*
   - A) make the problem worse
   - B) pass it to someone with more access or skill
   - C) reboot everything
   - D) skip the fix

5. In which step do you add preventive measures? *(Objective: order)*
   - A) Identify the problem
   - B) Test the theory
   - C) Verify full system functionality
   - D) Establish a theory

6. **True or false —** You should change several settings at once to fix things faster. Explain in one sentence. *(Objective: best practice)*

7. Why is documenting (step 7) important? *(Objective: concept)*
   - A) It isn't; you can skip it
   - B) It records the problem and fix for next time
   - C) It slows everyone down
   - D) It replaces testing

8. **Matching —** put these steps in order by matching each to its number. *(Objective: order)*
   - ___ Identify the problem &nbsp;&nbsp; ___ Test the theory &nbsp;&nbsp; ___ Document
   - A) Step 7
   - B) Step 1
   - C) Step 3

9. Fill in the blank: The step after "establish a plan of action" is to ____________ the solution (or escalate). *(Objective: order)*

10. **Scenario —** A user says "the internet is down." You immediately reboot the router without asking anything. Which step did you skip, and why does that matter? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-14-01-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-14-01-methodology.md`. In brief:

- **Objective in one line:** learners list the seven CompTIA troubleshooting steps in order and explain theory-of-cause, escalation, and documentation.
- **Common misconceptions:** "fix first, ask later"; "escalating is failing"; "documentation is optional." Correct each.
- **Pacing:** ~30 min. The doctor analogy carries it; the paper walk-through cements the order.
- **How CompTIA tests it:** heavy on "what is the NEXT step?" and the exact order; the loop-back from a failed theory.
- **Accuracy note (Prime Directive #7):** concept lesson; no commands are run. Real command-line tools begin in Lesson 14-02.
- **Extension idea:** top-down vs. bottom-up vs. divide-and-conquer approaches; the "what changed?" question as the fastest clue.

---

## 17. Cheat sheet

> **Quick reference — The 7 steps**
>
> 1. **Identify** the problem (gather info, ask what changed)
> 2. **Theory** of probable cause (simple causes first)
> 3. **Test** the theory (wrong? new theory)
> 4. **Plan** of action
> 5. **Implement** the fix (or **escalate**)
> 6. **Verify** it works (+ prevent)
> 7. **Document** findings, actions, outcomes
>
> - Change **one thing at a time.**
> - A failed theory sends you back to step 2, not forward.
>
> _(Full version: `resources/cheat-sheets/troubleshooting-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Troubleshooting methodology** — A fixed set of steps for finding and fixing problems in order.
- **Theory of probable cause** — Your best guess at what is causing a problem, tested before any change.
- **Escalate** — To pass a problem to someone with more access, skill, or authority.

(Documentation was defined in Lesson 12-01 and is reused in step 7.)

---

## 19. Homework

- **Practice:** Pick a real problem you've had (phone, printer, Wi-Fi) and write it through all seven steps.
- **Spaced review:** Say the seven steps in order from memory.
- **Preview:** Next, **Lesson 14-02 — Command-line tools: ping, tracert, ipconfig, nslookup**.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Which step do you most often skip in real life? _______________________
3. What was hardest — memorizing the order, or the loop-back idea?
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can list the seven steps in order.
- [ ] I can explain a theory of probable cause and how to test it.
- [ ] I can explain when to escalate.
- [ ] I can explain why documenting matters.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I'm ready for Lesson 14-02 (command-line tools).

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M14-L01** — "The CompTIA Troubleshooting Methodology" · Module 14 · Unit 11_
