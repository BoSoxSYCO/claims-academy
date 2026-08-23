# Answer Key — NA-M13-L04 "Firewalls, ACLs, and Network Segmentation"

> 🔒 **Instructor / self-check only.** Keep separate from student copies.
> **Module:** 13 · **Unit:** 10 · **Objective:** 4.3

---

## Quiz answers (`quiz-13-04-knowledge-check.md`)

1. **B — allows or blocks traffic by rules.** That is a firewall's job. *(A/C/D are speed, backup, and addressing — different jobs.)*

2. **B — remembers active connections and allows their replies.** Stateful firewalls track connection state. *(A describes a stateless firewall; C and D are wrong.)*

3. **C — top to bottom, first match wins.** ACLs are read in order, and the first matching rule decides. *(A/B/D misstate how ACLs work.)*

4. **B — anything not allowed is blocked by default.** That is implicit deny. *(A is the opposite; C/D are wrong.)*

5. **B — limiting the blast radius if one zone is breached.** Segmentation walls off zones. *(A/C/D reduce security or are unrelated.)*

6. **False.** An ACL has an **implicit deny** at the end whether you write it or not — leftover traffic is blocked, not allowed.

7. **B — public-facing servers, kept away from the private network.** A DMZ (screened subnet) isolates public servers. *(A/C/D are other functions.)*

8. **Matching:** **Firewall → C** (allows or blocks traffic by rules); **ACL → A** (an ordered allow/deny list); **Segmentation → B** (splits the network into zones).

9. **Matches.** The first rule that **matches** the traffic wins.

10. **Scenario —** Two fixes: (1) **segment** the network so the web server and payroll are in separate zones (VLANs), and (2) put the public web server in a **DMZ / screened subnet**, away from the private inside network. *(Accept firewall/ACL rules between zones as a valid second fix.)*

---

## Worksheet answers

### Fill in the blank (`wb-13-04-fill-in-the-blank.md`)
1. firewall · 2. stateful · 3. stateless · 4. ACL · 5. top · 6. implicit deny · 7. segmentation · 8. blast radius · 9. VLAN · 10. DMZ

### Matching (`wb-13-04-matching.md`)
**Part 1:** 1 → C · 2 → A · 3 → D · 4 → B
**Part 2:** 5 → G (stateful) · 6 → E (stateless) · 7 → F (implicit deny)

### Label the diagram (`wb-13-04-label-the-diagram.md`)
a. internet · b. firewall · c. ACL · d. implicit deny · e. DMZ · f. segmentation

### Short answer (`wb-13-04-short-answer.md`) — model answers
1. A firewall allows or blocks traffic by rules, usually at the edge between your network and the internet.
2. A stateful firewall remembers active connections and lets their replies back in; a stateless firewall checks each packet alone with no memory.
3. An ACL is read top to bottom; "first match wins" means the first rule that matches the traffic decides, and later rules are skipped.
4. Implicit deny means anything the ACL does not expressly allow is blocked by default — even if no final deny rule is written.
5. Segmentation divides a network into separate walled-off zones (often VLANs). If one zone is breached, the attacker can't easily reach the rest, so damage is limited.
6. A DMZ (screened subnet) is an isolated zone for public-facing servers (like a web server), kept away from the private inside network.
7. Because the first match wins — a broad rule placed early can match and act before the specific rule is reached.

### Hands-on observation (`wb-13-04-hands-on-observation.md`)
Answers vary. Full credit when: rules 1–3 have sensible ALLOW/DENY actions, the list ends in the implicit-deny line, the learner states that no-match traffic is denied, and the segmentation note names a real split (e.g., guests on their own VLAN).

### Vocabulary review (`wb-13-04-vocabulary-review.md`)
- **Firewall** — a device or software that allows or blocks traffic by rules.
- **Stateful firewall** — remembers active connections and allows their replies.
- **Stateless firewall** — checks each packet alone, with no memory.
- **ACL** — an ordered list of allow and deny rules, read top to bottom.
- **Implicit deny** — anything not allowed is blocked by default.
- **Segmentation** — dividing a network into separate, walled-off zones.
- **DMZ** — a zone for public servers, away from the private network.
- **Screened subnet** — the current name for a DMZ.

**Part 3 quick recall:** 1. Stateful · 2. Implicit deny · 3. DMZ (screened subnet)

---
_NetworkAcademy+ · Answer Key · CompTIA Network+ N10-009 · NA-M13-L04 · Module 13_
