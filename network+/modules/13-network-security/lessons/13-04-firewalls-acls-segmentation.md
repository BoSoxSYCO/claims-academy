---
id: NA-M13-L04
module: 13
lesson: 04
title: "Firewalls, ACLs, and Network Segmentation"
unit: 10
objective_ids: ["4.3"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E1
prerequisites: ["NA-M13-L03", "NA-M11-L01"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-07"
---

# [Module 13 · Lesson 04] Firewalls, ACLs, and Network Segmentation

> **Unit:** Unit 10 — Network Security · **Time:** ~30 min · **Equipment:** E1 (concept lesson; paper)
> **You'll need first:** VLANs (11-01) and least privilege (13-03).

AAA controls who logs in. But we also need to control the traffic itself. Which packets may pass? Which must be blocked? And how do we stop one break-in from spreading? This lesson covers three tools: **firewalls**, **ACLs**, and **segmentation**.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what a **firewall** does, and stateful vs. stateless.
- [ ] Read an **ACL** and explain **implicit deny**.
- [ ] Explain **network segmentation** and why it limits damage.
- [ ] Describe a **DMZ** (screened subnet).

---

## 2. Introduction — why this matters

A network without traffic rules is like a building with every door propped open. Anyone can walk anywhere. That is not safe.

We need a guard at the edge. We need a clear list of who may pass. And we need walls inside, so one problem does not reach everything. Those are our three tools.

The exam tests all three. It asks what a firewall does. It asks how an ACL is read. It asks why we split a network into zones. This lesson keeps each idea plain.

🎯 **Exam tip:** Remember the ACL rule: it is read top to bottom, and anything not allowed is denied by default.

🔧 **Lab link:** You'll write a short ACL for your home lab on paper.

---

## 3. Simple explanation

### Firewalls — the guard at the door

A **firewall** is a device or software that allows or blocks traffic by rules. It sits between two networks, often between your network and the internet. You met it briefly in Module 07; now we go deeper.

There are two styles:

- A **stateless firewall** checks each packet on its own. It does not remember past traffic.
- A **stateful firewall** remembers active connections. If you started a chat, it lets the replies back in. This is smarter and more common.

### ACLs — the guard's checklist

An **ACL (Access Control List)** is an ordered list of allow and deny rules. The firewall (or router) reads it top to bottom. The first rule that matches wins.

One rule is always there, even if unwritten: **implicit deny**. It means anything not allowed is blocked by default. So an ACL is a guest list — if your name is not on it, you do not get in.

Here is a plain-language ACL:

```
1. ALLOW  web traffic to the web server
2. ALLOW  staff laptops to the file server
3. DENY   everything else   (implicit deny)
```

Order matters. A deny rule placed too early can block traffic you meant to allow.

### Segmentation — walls inside

**Segmentation** means dividing a network into separate zones. VLANs (from Module 11) are a common way to do it. Each zone is walled off from the others.

Why? To limit the blast radius. If one zone is breached, the attacker cannot easily reach the rest. This is least privilege (13-03) applied to the whole network.

### DMZ — the lobby for public servers

A **DMZ (Demilitarized Zone)**, now often called a **screened subnet**, is a separate zone for public-facing servers. Your web server sits there. Visitors from the internet can reach the DMZ, but not your private inside network.

> **The big idea:** A **firewall** allows or blocks traffic by rules (**stateful** remembers connections; **stateless** does not). An **ACL** is an ordered allow/deny list, read top to bottom, ending in **implicit deny**. **Segmentation** splits the network into zones to limit the blast radius. A **DMZ** (screened subnet) is a zone for public servers, kept away from your private network.

💡 **Tip:** Put specific rules first and broad rules last. Order changes the result.

⚠️ **Watch out:** Even if you don't write a final deny rule, it is still there. ACLs deny by default.

---

## 4. Real-world analogy

> **"These tools are like security in an office building."**

| Building | Network tool |
|----------|--------------|
| A guard at the front door | Firewall |
| The guard's guest list, read top to bottom | ACL |
| "Not on the list? You don't enter." | Implicit deny |
| Separate locked wings | Segmentation |
| A visitor lobby, away from private offices | DMZ (screened subnet) |

Check everyone at the door, keep a clear list, and wall off the private areas.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Firewall** | FIRE-wall | A device or software that allows or blocks traffic by rules. |
| **ACL** | A-C-L | An ordered list of allow and deny rules. |
| **Implicit deny** | im-PLIS-it di-NY | Anything not allowed is blocked by default. |
| **Segmentation** | seg-men-TAY-shun | Dividing a network into separate, walled-off zones. |
| **DMZ** | D-M-Z | A zone for public servers, kept away from the private network. |

---

## 6. ASCII diagram

```
   INTERNET
      |
   [ FIREWALL ] --- reads ACL (top to bottom):
      |               1. ALLOW web -> web server
      |               2. ALLOW staff -> file server
      |               3. DENY  all else  (implicit deny)
      +---------------------+
      |                     |
   [ DMZ ]               [ INSIDE ]
   web server            split into zones (VLANs)
   (public)              staff | guests | servers
```

_Guard at the edge (firewall + ACL); public servers in the DMZ; inside split into zones._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-13-04-firewall-acl-segmentation-01.svg` (created and stored in this module's `assets/`)
> **Shows:** the internet connecting through a firewall to two areas — a DMZ holding a public web server, and an inside network split into VLAN zones — with a small ACL rule table beside the firewall.
> **Key elements & labels:** internet cloud; a firewall box labeled with an ACL table (ALLOW web, ALLOW staff, DENY all else / implicit deny); a DMZ zone with a web server; an inside zone split into staff / guests / servers VLANs.
> **Color meaning:** each zone is titled in words; ALLOW/DENY are written as text, not shown by color alone.
> **Flow direction:** internet at top, firewall in the middle, DMZ and inside zones below.
> **Alt text (required):** "A network diagram. At the top is the internet. It connects to a firewall in the middle. Beside the firewall is an ACL table read top to bottom: rule 1 allows web traffic to the web server, rule 2 allows staff laptops to the file server, and rule 3 denies everything else, labeled implicit deny. Below the firewall are two areas. On one side is a DMZ, also called a screened subnet, holding a public web server that internet visitors may reach. On the other side is the inside network, split by segmentation into separate VLAN zones for staff, guests, and servers, kept away from the internet and from each other to limit the blast radius."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-13-04-firewall-appliance-01.jpg`
> A small firewall appliance or home router's firewall settings screen. Alt text: "A firewall appliance (or a router's firewall settings page), the device that allows or blocks traffic by rules."
>
> **Photo 2** — `img-13-04-router-acl-screen-01.jpg`
> A router/switch web page showing an access rules list. Alt text: "A router's access-rules page listing allow and deny entries in order — a real access control list (ACL)."

---

## 9. Hands-on lab

**Goal:** write a short ACL for your home lab on paper.
**Why:** writing rules in order teaches how an ACL — and implicit deny — really works.

**You will need**
- Paper and pen. Estimated time: 15 min.

⚠️ **Before you start (safety):** this is writing only. You change no switch or router settings.

### 9a. Step-by-step instructions

1. Title a page **"Home Lab ACL."**
2. Write rule 1: **ALLOW** your laptop to reach the router's settings page.
3. Write rule 2: **ALLOW** all lab devices to reach the internet.
4. Write rule 3: **DENY** guest devices from reaching the switch's settings.
5. At the bottom write: **"DENY everything else (implicit deny)."**
6. Read your list top to bottom. Check no early rule cancels a later one.

### 9b. Expected results

- A short, ordered ACL: two or three allow/deny rules plus a final implicit-deny line.

- ✅ **You did it if:** the rules are in a sensible order and end with implicit deny.

### 9c. Verify it worked

1. Point to rule 1 and say who it allows.
2. Explain what happens to traffic that matches no rule (it is denied).

### 9d. Reset / roll back

Nothing changed — writing only. Keep the ACL with your lab notes.

> 🔧 **Home-lab continuity:** save this ACL. On real gear, an ACL command on the Dell PowerConnect 3424 would be **[TO VERIFY ON HARDWARE]** before use.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Putting a broad deny first | It blocks traffic you meant to allow | Specific rules first, broad rules last |
| Forgetting implicit deny | You expect traffic that is actually blocked | Remember: not allowed = denied |
| One flat network, no zones | One breach reaches everything | Segment with VLANs |
| Public server on the inside network | Visitors can reach private data | Put public servers in a DMZ |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Allowed traffic is still blocked | An earlier deny rule matches first | Reorder: move the allow above the deny |
| Traffic that should be blocked gets through | No matching deny; rule too broad | Tighten the rule; rely on implicit deny |
| A breach spread across everything | Flat, unsegmented network | Split into VLAN zones |
| The web server exposes inside files | Server not isolated | Move it to a DMZ / screened subnet |

---

## 12. Lesson summary

- A **firewall** allows or blocks traffic by rules (**stateful** remembers connections; **stateless** does not).
- An **ACL** is an ordered allow/deny list, read top to bottom, ending in **implicit deny**.
- **Segmentation** splits the network into zones to limit the blast radius.
- A **DMZ** (screened subnet) holds public servers, away from the private network.

**One-sentence recap:** Firewalls and ACLs decide which traffic may pass, and segmentation and a DMZ wall the network into zones so one break-in can't reach everything.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-13-04-fill-in-the-blank.md`
2. **Matching** — `wb-13-04-matching.md`
3. **Label the diagram** — `wb-13-04-label-the-diagram.md` (firewall, DMZ, zones)
4. **Short answer** — `wb-13-04-short-answer.md`
5. **Hands-on observation** — `wb-13-04-hands-on-observation.md` (write an ACL)
6. **Vocabulary review** — `wb-13-04-vocabulary-review.md`
7. **Reflection** — `wb-13-04-reflection.md`

**Quick written warm-up (do this now):** What happens to traffic that matches no ACL rule? What zone holds public servers?

No match: ____________  Public zone: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-13-04-knowledge-check.md`.)

1. A **firewall**… *(Objective: concept)*
   - A) speeds up the network
   - B) allows or blocks traffic by rules
   - C) stores backups
   - D) assigns IP addresses

2. A **stateful** firewall… *(Objective: firewall)*
   - A) checks each packet alone, with no memory
   - B) remembers active connections and allows their replies
   - C) only works on Wi-Fi
   - D) blocks all traffic

3. An **ACL** is read… *(Objective: ACL)*
   - A) bottom to top
   - B) in random order
   - C) top to bottom, first match wins
   - D) only once a day

4. **Implicit deny** means… *(Objective: ACL)*
   - A) everything is allowed by default
   - B) anything not allowed is blocked by default
   - C) the ACL is turned off
   - D) only guests are blocked

5. **Segmentation** helps by… *(Objective: design)*
   - A) making one big flat network
   - B) limiting the blast radius if one zone is breached
   - C) removing all firewalls
   - D) speeding up downloads

6. **True or false —** If you don't write a final deny rule, an ACL allows all leftover traffic. Explain in one sentence. *(Objective: ACL)*

7. A **DMZ** (screened subnet) is for… *(Objective: design)*
   - A) storing passwords
   - B) public-facing servers, kept away from the private network
   - C) backups only
   - D) guest Wi-Fi passwords

8. **Matching —** match each tool to its job. *(Objective: tools)*
   - ___ Firewall &nbsp;&nbsp; ___ ACL &nbsp;&nbsp; ___ Segmentation
   - A) An ordered allow/deny list
   - B) Splits the network into zones
   - C) Allows or blocks traffic by rules

9. Fill in the blank: In an ACL, the first rule that ____________ wins. *(Objective: ACL)*

10. **Scenario —** A company puts its public web server on the same flat network as payroll. An attacker breaks into the web server and reaches payroll. Name two design fixes. *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-13-04-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-13-04-firewalls.md`. In brief:

- **Objective in one line:** learners explain firewalls (stateful vs. stateless), read an ACL with implicit deny, and describe segmentation and a DMZ.
- **Common misconceptions:** "no deny rule means allow"; "segmentation slows the network for no reason"; "a DMZ is just a subnet." Correct each.
- **Pacing:** ~30 min. The office-building analogy carries it; the paper-ACL lab makes order and implicit deny click.
- **How CompTIA tests it:** ACL order and implicit deny; stateful vs. stateless; why segment; DMZ/screened-subnet purpose.
- **Accuracy note (Prime Directive #7):** concept lesson; no commands are run. Any real ACL command on the Dell PowerConnect 3424 is marked `[TO VERIFY ON HARDWARE]`.
- **Extension idea:** NGFW (next-gen firewall) and IDS/IPS; the modern name "screened subnet" replacing "DMZ"; micro-segmentation.

---

## 17. Cheat sheet

> **Quick reference — Firewalls, ACLs, segmentation**
>
> | Tool | What it does |
> |------|--------------|
> | **Firewall** | allows / blocks traffic by rules |
> | **Stateful** | remembers connections (smarter, common) |
> | **Stateless** | checks each packet alone |
> | **ACL** | ordered allow/deny list, top-down, first match wins |
> | **Implicit deny** | not allowed = blocked by default |
> | **Segmentation** | split into zones → smaller blast radius |
> | **DMZ / screened subnet** | zone for public servers, away from private |
>
> - Specific rules first, broad rules last.
> - Segmentation = least privilege for the network (VLANs do it).
>
> _(Full version: `resources/cheat-sheets/network-security-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **ACL (Access Control List)** — An ordered list of allow and deny rules, read top to bottom.
- **Stateful firewall** — A firewall that remembers active connections and allows their replies.
- **Stateless firewall** — A firewall that checks each packet on its own, with no memory of past traffic.
- **Implicit deny** — The default rule that blocks anything an ACL does not expressly allow.
- **DMZ (Demilitarized Zone)** — A separate zone for public-facing servers, kept away from the private network; now often called a screened subnet.
- **Screened subnet** — The current name for a DMZ: an isolated zone for public servers.

(Firewall was defined in Lesson 07-04 and Segmentation in 11-01; both are reused and deepened here.)

---

## 19. Homework

- **Practice:** Open your home router's settings and find its firewall or "access rules" page. Read the rules — do not change them.
- **Spaced review:** Explain implicit deny and stateful vs. stateless from memory.
- **Preview:** Next, **Lesson 13-05 — Securing switch ports and wireless**.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Is your home network one flat zone, or split? _______________________
3. What was hardest — ACL order, or the DMZ idea?
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain what a firewall does, and stateful vs. stateless.
- [ ] I can read an ACL and explain implicit deny.
- [ ] I can explain segmentation and the blast radius.
- [ ] I can describe a DMZ (screened subnet).
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I'm ready for Lesson 13-05 (switch ports and wireless).

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M13-L04** — "Firewalls, ACLs, and Network Segmentation" · Module 13 · Unit 10_
