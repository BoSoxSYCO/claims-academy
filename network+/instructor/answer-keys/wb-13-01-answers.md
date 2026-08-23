# Answer Key — NA-M13-L01 "Security Goals: Confidentiality, Integrity, Availability"

> 🔒 **Instructor / self-check only.** Keep separate from student copies.
> **Module:** 13 · **Unit:** 10 · **Objective:** 4.1

---

## Quiz answers (`quiz-13-01-knowledge-check.md`)

1. **B — Confidentiality, Integrity, Availability.** That is the CIA triad, the three goals of security. *(A is the spy agency — a common trick; C and D are made up.)*

2. **B — only the right people can see the data.** Confidentiality is about secrecy. *(A is availability, D is a backup, C is speed.)*

3. **A — the data is correct and unchanged.** Integrity means the data is trustworthy. *(B is confidentiality; C and D are unrelated.)*

4. **C — the service is up and usable when needed.** Availability is about uptime (from 12-03). *(A is confidentiality, B and D are other controls.)*

5. **B — integrity.** A checksum spots a change in a file, protecting integrity. *(It does not hide data or keep a system up.)*

6. **False.** If no one can ever open it, the data is not usable — that breaks **availability**, so it fails a security goal even though it is secret.

7. **C — confidentiality.** A password keeps out people who should not see the data. *(It does not fix data or keep the system running.)*

8. **Matching:** **Confidentiality → B** (only the right people can see the data); **Integrity → C** (the data is correct and unchanged); **Availability → A** (the service is up and usable).

9. **Availability.** A backup lets you restore a service or data, protecting availability.

10. **Scenario —** The attacker broke **integrity** (they changed the data — the price — without permission). One way to protect it: use checks that detect changes (such as a checksum or a system that logs and verifies edits), and limit who can change prices. *(Accept any answer naming integrity plus a change-detection or access-limit control.)*

---

## Worksheet answers

### Fill in the blank (`wb-13-01-fill-in-the-blank.md`)
1. CIA triad · 2. confidentiality · 3. integrity · 4. availability · 5. checksum · 6. password · 7. backup · 8. integrity · 9. integrity · 10. availability

### Matching (`wb-13-01-matching.md`)
**Part 1:** 1 → C · 2 → A · 3 → B
**Part 2:** 4 → F (password → confidentiality) · 5 → D (checksum → integrity) · 6 → E (backup → availability)

### Label the diagram (`wb-13-01-label-the-diagram.md`)
a. CIA · b. Confidentiality · c. Integrity · d. Availability · e. secret · f. true · g. up · h. passwords · i. checksums · j. backups

### Short answer (`wb-13-01-short-answer.md`) — model answers
1. Confidentiality, Integrity, and Availability — the three goals of security.
2. Confidentiality means only the right people can see the data. Example: a password on your email.
3. Integrity means the data is correct and unchanged. Example: a checksum confirming a file was not altered.
4. Availability means the service is up and usable when needed. Example: a backup that restores a downed server.
5. A checksum is a short number made from a file; a changed number warns you the file was altered. It protects integrity.
6. Because "secure" means all three goals. A file no one can open fails availability, so it is not fully secure.
7. Confidentiality — a password blocks people who should not see the data.

### Hands-on observation (`wb-13-01-hands-on-observation.md`)
Placements: switch admin password → **C**; backup of config → **A**; checksum on a download → **I**; laptop login screen → **C**; spare cable → **A**. Learner-added examples vary; full credit when each clearly matches its goal.

### Vocabulary review (`wb-13-01-vocabulary-review.md`)
- **CIA triad** — the three goals of security: confidentiality, integrity, availability.
- **Confidentiality** — only the right people can see the data.
- **Integrity** — the data is correct and unchanged.
- **Availability** — the service is up and usable when needed.
- **Checksum** — a short number from a file that shows if it changed.

**Part 3 quick recall:** 1. Confidentiality · 2. Integrity · 3. Availability · 4. Checksum

---
_NetworkAcademy+ · Answer Key · CompTIA Network+ N10-009 · NA-M13-L01 · Module 13_
