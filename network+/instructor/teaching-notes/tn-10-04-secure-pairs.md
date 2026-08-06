---
teaching_notes_for: NA-M10-L04
module: 10
lesson: 04
unit: 7
objective_ids: ["1.5", "4.1"]
---

# 🔒 Teaching Notes — Lesson 10-04: Secure vs. Insecure Protocol Pairs

> Instructor guide. Written so a substitute could teach this cold.

## Learning objective (one line)
Learners match each insecure (clear-text) protocol to its secure twin, recall the secure ports, and choose the encrypted option in a scenario.

## Where this sits
- **Before:** 10-03 (the must-know ports). Learners must already know 80, 23, 110, 143, 25, 389 as the insecure side.
- **After:** 10-05 (a memory system for the whole port table).
- First real security-flavored lesson in the module (maps to domain 4 as well as 1.5).

## The pairs you are teaching (all standards-based)
| Insecure | Port | Secure twin | Port | Lock |
|----------|------|-------------|------|------|
| HTTP | 80 | HTTPS | 443 | TLS |
| FTP | 20/21 | SFTP | 22 | SSH |
| FTP | 20/21 | FTPS | 989/990 | TLS |
| Telnet | 23 | SSH | 22 | SSH |
| POP3 | 110 | POP3S | 995 | TLS |
| IMAP | 143 | IMAPS | 993 | TLS |
| SMTP | 25 | SMTP (submission) | 587 | TLS/STARTTLS |
| LDAP | 389 | LDAPS | 636 | TLS |
| DNS | 53 | DoT | 853 | TLS |

SNMPv3 secures SNMP but stays on **161/162** — call this out as the exception.

## Common misconceptions (correct both)
1. **"Secure = add an S to the port."** No — HTTPS is 443 (not 80), SSH is 22 (not 23). The ports are unrelated; learn each pair as a fact.
2. **"SFTP = FTPS."** They are different. **SFTP** rides SSH (22); **FTPS** is FTP over TLS (989/990). This is a favorite exam trap.
3. Bonus: "secure email is just one port." Sending (587) and receiving (993/995) use different ports.

## Pacing (~30 min)
- 5 min — postcard vs. sealed envelope (the WHY).
- 12 min — walk the pairs table left→right; say each port out loud.
- 5 min — the two special cases (SFTP-over-SSH, SNMPv3 same port).
- 8 min — the HTTPS/TLS browser lab.
Learners stall on 993 vs. 995 and on SFTP vs. FTPS. Drill those two pairs extra.

## How CompTIA tends to test it
- "What is the secure version of X?" and secure-port recall.
- Scenario/PBQ: pick the encrypted protocol for a task (see quiz Q10).
- Distinguishing SFTP (SSH) from FTPS (TLS).

## Support ideas (struggling learners)
- Teach only HTTP→HTTPS and Telnet→SSH first; add mail pairs next session.
- Pair flashcards: insecure on front, secure twin + port on back.
- Anchor 993/995: "IMAP comes before POP alphabetically-ish? No — just memorize IMAPS 993, POP3S 995, both in the 990s."

## Extension ideas (fast learners)
- DoH (DNS over HTTPS, 443) vs. DoT (853).
- SIP 5060 vs. SIPS 5061 (voice).
- Why STARTTLS upgrades an existing plain connection instead of using a separate port.

## Accuracy note (Prime Directive #7)
All ports are IANA/standards-based. The browser padlock, `https`, and certificate view are genuine features; exact wording varies by browser, so learners record what they see — no fabricated screenshots or device data.

---
_NetworkAcademy+ · Teaching Notes 10-04 · CompTIA Network+ N10-009 · Instructor materials_
