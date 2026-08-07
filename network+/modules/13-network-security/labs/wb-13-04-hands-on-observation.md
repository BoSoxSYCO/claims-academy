# Worksheet — Hands-On Observation

> **Lesson:** NA-M13-L04 — Firewalls, ACLs, and Network Segmentation · **Module:** 13 · **Unit:** 10
> **Name:** ______________________  **Date:** __________  **Objective:** 4.3

**Goal:** write a short, ordered ACL for your home lab on paper.
**You need:** paper and pen. **Time:** ~15 min. **Safety:** writing only — you change no switch or router settings.

## Step 1 — Title it

Write **"Home Lab ACL"** at the top.

## Step 2 — Write ordered rules

Fill in an action (ALLOW / DENY) and a plain-language rule for each line.

| Rule | Action | Who / what → where |
|------|--------|--------------------|
| 1 | ______ | your laptop → the router's settings page |
| 2 | ______ | all lab devices → the internet |
| 3 | ______ | guest devices → the switch's settings |
| 4 | **DENY** | **everything else (implicit deny)** |

## Step 3 — Check the order

Read your list top to bottom. Answer:

- Does any early rule cancel a later one? ____________
- What happens to traffic that matches no rule? ____________

## Step 4 — Segmentation note

Write one way you could **segment** your lab (for example, put guests on their own VLAN).

- _______________________________________________________________

> **On real gear:** an ACL command on the Dell PowerConnect 3424 would be **[TO VERIFY ON HARDWARE]** before you run it.

> 🔧 **Home-lab continuity:** keep this ACL. It feeds the hardening checklist in Lesson 13-07.

---
_NetworkAcademy+ · Worksheet · CompTIA Network+ N10-009 · NA-M13-L04 · Module 13_
