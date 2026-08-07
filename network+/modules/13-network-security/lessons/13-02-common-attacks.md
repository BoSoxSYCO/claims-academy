---
id: NA-M13-L02
module: 13
lesson: 02
title: "Common Attacks: How the Bad Guys Break In"
unit: 10
objective_ids: ["4.2"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E1
prerequisites: ["NA-M13-L01"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-07"
---

# [Module 13 · Lesson 02] Common Attacks: How the Bad Guys Break In

> **Unit:** Unit 10 — Network Security · **Time:** ~30 min · **Equipment:** E1 (concept lesson; paper)
> **You'll need first:** the CIA triad from Lesson 13-01.

In Lesson 13-01 you learned the three goals of security. Now we meet the attacks that break them. You do not need to be a hacker to pass the exam. You just need to know the common attacks by name. This lesson keeps each one short and clear.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain the difference between a **threat**, a **vulnerability**, and an **attack**.
- [ ] Describe **malware**, **phishing**, and **social engineering**.
- [ ] Describe **spoofing**, an **on-path attack**, and a **DoS** attack.
- [ ] Match each attack to the **CIA** goal it breaks.

---

## 2. Introduction — why this matters

You cannot defend against what you cannot name. Security teams study attacks first. Then they build defenses that fit.

The exam tests the common attacks. It asks what phishing is. It asks what a DoS attack does. It asks how spoofing works. You do not need deep detail. You need the name and one plain line for each.

Every attack aims at a **CIA** goal from Lesson 13-01. Some steal secrets (confidentiality). Some change data (integrity). Some knock a service offline (availability). Keep the triad in mind as we go.

🎯 **Exam tip:** For each attack, ask: which CIA goal does it break? That framing earns easy points.

🔧 **Lab link:** You'll spot a fake ("phishing") email and list its warning signs.

---

## 3. Simple explanation

First, three words people mix up.

- A **threat** is anything that could cause harm. Example: a burglar.
- A **vulnerability** is a weak spot that lets harm happen. Example: an unlocked window.
- An **attack** is the harmful act itself. Example: the burglar climbing through the window.

A threat plus a vulnerability makes an attack possible. Good security removes the weak spots.

### Attacks that trick people

- **Social engineering** is tricking a person into breaking security. It targets people, not machines.
- **Phishing** is a fake message that tricks you into giving secrets. It often looks like a real email from your bank.

### Attacks that use bad software

- **Malware** is any harmful software. Viruses and worms are types of malware.
- **Ransomware** is malware that locks your files and demands money. It breaks availability — you cannot reach your data.

### Attacks on the network

- **Spoofing** is faking an identity. An attacker pretends to be a trusted address or device.
- An **on-path attack** puts the attacker secretly between two parties. They can read or change the traffic. (You may also hear the old name, "man-in-the-middle.") This breaks confidentiality.
- A **DoS (Denial of Service)** attack floods a service so real users cannot reach it. It breaks availability.
- A **DDoS (Distributed Denial of Service)** attack is a DoS from many machines at once. It is harder to stop.

> **The big idea:** A **threat** is a danger. A **vulnerability** is a weak spot. An **attack** is the harmful act. Common attacks: **social engineering** and **phishing** (trick people), **malware** and **ransomware** (bad software), and **spoofing**, **on-path**, and **DoS/DDoS** (hit the network). Each one breaks a **CIA** goal.

💡 **Tip:** Most breaches start with a trick, not a genius hack. People are the top target.

⚠️ **Watch out:** Don't confuse threat and vulnerability. Threat = the danger; vulnerability = the weak spot it uses.

---

## 4. Real-world analogy

> **"Attacks on a network are like ways to get into a locked house."**

| House | Network attack |
|-------|----------------|
| A burglar (the danger) | Threat |
| An unlocked window (weak spot) | Vulnerability |
| A con artist talks their way in | Social engineering |
| A fake letter from your "bank" | Phishing |
| A stranger reads your mail in secret | On-path attack |
| A crowd blocks your driveway | DoS attack |
| Someone uses a fake name at the door | Spoofing |

Lock the windows (fix weak spots) and check who's really at the door (verify identity).

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Threat** | thret | Anything that could cause harm. |
| **Vulnerability** | vul-ner-a-BIL-it-ee | A weak spot that lets harm happen. |
| **Malware** | MAL-ware | Any harmful software. |
| **Phishing** | FISH-ing | A fake message that tricks you into giving secrets. |
| **Spoofing** | SPOOF-ing | Faking an identity to look trusted. |
| **DoS** | doss | A flood that knocks a service offline. |

---

## 6. ASCII diagram

```
   ATTACK  =  THREAT  +  VULNERABILITY

   TRICK PEOPLE        social engineering, phishing
   BAD SOFTWARE        malware, ransomware
   HIT THE NETWORK     spoofing, on-path, DoS / DDoS

   Each attack breaks a CIA goal:
     confidentiality (read secrets) · integrity (change data) · availability (knock offline)
```

_A weak spot plus a danger makes an attack. Every attack targets C, I, or A._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-13-02-attacks-01.svg` (created and stored in this module's `assets/`)
> **Shows:** three grouped cards of attacks — Trick people (social engineering, phishing), Bad software (malware, ransomware), Hit the network (spoofing, on-path, DoS/DDoS) — each attack tagged with the CIA goal it breaks.
> **Key elements & labels:** a top banner "Attack = Threat + Vulnerability"; three cards, each attack with a one-line meaning and a C/I/A tag.
> **Color meaning:** each card is titled in words; the C/I/A tag is text, not color.
> **Flow direction:** banner on top, then three cards left to right.
> **Alt text (required):** "A banner reads: Attack equals Threat plus Vulnerability. Below are three cards. Card one, Trick people: social engineering tricks a person into breaking security; phishing is a fake message that steals secrets; both mainly break confidentiality. Card two, Bad software: malware is any harmful software; ransomware locks your files and demands money, breaking availability. Card three, Hit the network: spoofing fakes a trusted identity; an on-path attack secretly sits between two parties to read or change traffic, breaking confidentiality or integrity; a DoS or DDoS attack floods a service so real users cannot reach it, breaking availability."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-13-02-phishing-email-01.jpg`
> A phishing email with warning signs marked. Alt text: "A fake 'bank' email with red-flag signs highlighted: an odd sender address, urgent threat, and a suspicious link — an example of phishing."
>
> **Photo 2** — `img-13-02-spam-folder-01.jpg`
> An email spam/junk folder. Alt text: "An email junk folder holding suspected phishing and spam messages, where mail filters send likely attacks."

---

## 9. Hands-on lab

**Goal:** spot a fake (phishing) email and list its warning signs.
**Why:** most real attacks start with a trick. Spotting one is a core skill.

**You will need**
- Paper and pen, or your own email junk folder. Estimated time: 15 min.

⚠️ **Before you start (safety):** never click a link in a suspect email. Just look. If using real mail, do not open attachments.

### 9a. Step-by-step instructions

1. Picture (or find) an email that says: "Your account is locked! Click here now to fix it."
2. Write down the sender's address. Does it match the real company? Often it does not.
3. Look for **urgency**. Fake messages rush you. Write down the rushing words.
4. Look for a **link or attachment**. Hover over the link (do not click). Does the address look wrong?
5. List three warning signs you found.

### 9b. Expected results

- A short list of at least three phishing warning signs (odd sender, urgency, bad link, spelling errors, unexpected attachment).

- ✅ **You did it if:** you can explain why each sign is suspicious.

### 9c. Verify it worked

1. Read your three signs aloud.
2. Say what you would do instead of clicking (go to the real site directly, or delete the message).

### 9d. Reset / roll back

Nothing changed — looking only. Delete any suspect email when done.

> 🔧 **Home-lab continuity:** keep your warning-sign list. It pairs with the hardening checklist in Lesson 13-07.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Mixing up threat and vulnerability | Wrong exam answer | Threat = danger; vulnerability = weak spot |
| Thinking attacks are only "hacking" | You miss social tricks | Phishing and social engineering target people |
| Believing a DoS steals data | Wrong goal | DoS breaks availability, not confidentiality |
| Trusting a message because it looks real | You fall for phishing | Check the sender and go to the site directly |

---

## 11. Troubleshooting

| Symptom | Likely attack | Try this |
|---------|---------------|----------|
| A service is flooded and offline | DoS / DDoS | Block bad traffic; use filtering/redundancy |
| Files are locked with a ransom note | Ransomware | Restore from backup; never assume paying works |
| An email begs you to "verify" a password | Phishing | Do not click; go to the real site yourself |
| Traffic is read or changed in transit | On-path attack | Use encryption (see Lesson 13-06) |

---

## 12. Lesson summary

- **Attack = threat + vulnerability.** A danger plus a weak spot.
- Trick people: **social engineering**, **phishing**.
- Bad software: **malware**, **ransomware**.
- Hit the network: **spoofing**, **on-path attack**, **DoS/DDoS**.
- Each attack breaks a **CIA** goal.

**One-sentence recap:** Common attacks trick people, use bad software, or hit the network — and each one breaks confidentiality, integrity, or availability.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-13-02-fill-in-the-blank.md`
2. **Matching** — `wb-13-02-matching.md`
3. **Label the diagram** — `wb-13-02-label-the-diagram.md` (the attack groups)
4. **Short answer** — `wb-13-02-short-answer.md`
5. **Hands-on observation** — `wb-13-02-hands-on-observation.md` (spot phishing)
6. **Vocabulary review** — `wb-13-02-vocabulary-review.md`
7. **Reflection** — `wb-13-02-reflection.md`

**Quick written warm-up (do this now):** Name one attack that breaks availability. Name one that breaks confidentiality.

Availability: ____________  Confidentiality: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-13-02-knowledge-check.md`.)

1. An **attack** becomes possible when a threat meets a… *(Objective: concept)*
   - A) password
   - B) vulnerability
   - C) backup
   - D) cable

2. **Phishing** is… *(Objective: social)*
   - A) a fast cable
   - B) a fake message that tricks you into giving secrets
   - C) a backup method
   - D) a type of switch

3. **Ransomware** mainly breaks which CIA goal? *(Objective: apply)*
   - A) confidentiality
   - B) integrity
   - C) availability
   - D) none

4. **Spoofing** means… *(Objective: network)*
   - A) faking an identity to look trusted
   - B) backing up data
   - C) speeding up Wi-Fi
   - D) labeling a cable

5. A **DoS** attack… *(Objective: network)*
   - A) steals passwords quietly
   - B) floods a service so real users cannot reach it
   - C) encrypts your files
   - D) makes the network faster

6. **True or false —** A vulnerability and a threat are the same thing. Explain in one sentence. *(Objective: concept)*

7. An **on-path attack** mainly breaks… *(Objective: apply)*
   - A) availability only
   - B) confidentiality (the attacker reads the traffic)
   - C) nothing
   - D) the power supply

8. **Matching —** match each attack to what it does. *(Objective: attacks)*
   - ___ Phishing &nbsp;&nbsp; ___ DoS &nbsp;&nbsp; ___ Malware
   - A) Floods a service offline
   - B) Harmful software on a device
   - C) A fake message that steals secrets

9. Fill in the blank: **Social engineering** attacks target ____________, not machines. *(Objective: social)*

10. **Scenario —** A company website suddenly gets so much fake traffic that real customers can't load it. Which attack is this, and which CIA goal did it break? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-13-02-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-13-02-attacks.md`. In brief:

- **Objective in one line:** learners name the common attacks (social engineering, phishing, malware, ransomware, spoofing, on-path, DoS/DDoS) and match each to the CIA goal it breaks.
- **Common misconceptions:** "threat = vulnerability"; "all attacks are hacking"; "DoS steals data." Correct each.
- **Pacing:** ~30 min. The locked-house analogy carries it; the phishing lab makes it real.
- **How CompTIA tests it:** recognition of attack names, and matching an attack to its CIA impact (DoS → availability, on-path/phishing → confidentiality, tampering → integrity).
- **Accuracy note (Prime Directive #7):** concept lesson; no commands are run, so no output is claimed.
- **Extension idea:** worm vs. virus vs. trojan; brute-force and password attacks; the term "on-path" replacing "man-in-the-middle."

---

## 17. Cheat sheet

> **Quick reference — Common attacks**
>
> **Attack = threat (danger) + vulnerability (weak spot).**
>
> | Attack | What it does | Breaks |
> |--------|--------------|--------|
> | **Social engineering** | tricks a person | usually C |
> | **Phishing** | fake message steals secrets | C |
> | **Malware** | harmful software | C / I / A |
> | **Ransomware** | locks files, demands money | A |
> | **Spoofing** | fakes a trusted identity | varies |
> | **On-path** | secretly reads/changes traffic | C / I |
> | **DoS / DDoS** | floods a service offline | A |
>
> - Most attacks start with a trick, not a genius hack.
> - **DDoS** = a DoS from many machines at once.
>
> _(Full version: `resources/cheat-sheets/network-security-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Attack** — A harmful act against a system or network.
- **Threat** — Anything that could cause harm to a system or network.
- **Vulnerability** — A weak spot that lets harm happen.
- **Malware** — Any harmful software, such as viruses and worms.
- **Ransomware** — Malware that locks your files and demands money to unlock them.
- **Social engineering** — Tricking a person into breaking security.
- **Phishing** — A fake message that tricks you into giving up secrets.
- **Spoofing** — Faking an identity to appear trusted.
- **On-path attack** — An attack where someone secretly sits between two parties to read or change their traffic (formerly "man-in-the-middle").
- **DoS (Denial of Service)** — An attack that floods a service so real users cannot reach it.
- **DDoS (Distributed Denial of Service)** — A DoS attack launched from many machines at once.

(Confidentiality, integrity, and availability were defined in Lesson 13-01 and are reused here.)

---

## 19. Homework

- **Practice:** Find one real phishing example online (a safe screenshot) and list its warning signs.
- **Spaced review:** Say each attack and the CIA goal it breaks, from memory.
- **Preview:** Next, **Lesson 13-03 — Authentication, authorization, and accounting (AAA)**.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Which attack surprised you most, and why? _______________________
3. What was hardest — the three "trick people" attacks, or the network ones?
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can tell a threat from a vulnerability from an attack.
- [ ] I can describe malware, phishing, and social engineering.
- [ ] I can describe spoofing, an on-path attack, and DoS/DDoS.
- [ ] I can match each attack to the CIA goal it breaks.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I'm ready for Lesson 13-03 (AAA).

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M13-L02** — "Common Attacks: How the Bad Guys Break In" · Module 13 · Unit 10_
