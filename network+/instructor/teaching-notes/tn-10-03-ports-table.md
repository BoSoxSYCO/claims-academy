---
teaching_notes_for: NA-M10-L03
module: 10
lesson: 03
unit: 7
objective_ids: ["1.5"]
---

# 🔒 Teaching Notes — Lesson 10-03: The Must-Know Ports (Web, Mail, Remote, Files)

> Instructor guide. Written so a substitute could teach this cold.

## Learning objective (one line)
Learners recall the must-know ports grouped by job (web, mail, remote, files) plus the Module 09 services, and state whether each is TCP or UDP.

## Where this sits
- **Before:** 10-01 (what a port is) and 10-02 (TCP vs. UDP). Both are hard prerequisites.
- **After:** 10-04 (secure vs. insecure pairs) and 10-05 (a memory system for the whole table).
- This is the **heaviest recall lesson** in the module. Don't rush the drill.

## The port list you are teaching (all standards-based, IANA well-known)
| Port | Protocol | TCP/UDP |
|------|----------|---------|
| 20/21 | FTP | TCP |
| 22 | SSH | TCP |
| 23 | Telnet | TCP |
| 25 | SMTP | TCP |
| 53 | DNS | TCP + UDP |
| 67/68 | DHCP | UDP |
| 69 | TFTP | UDP |
| 80 | HTTP | TCP |
| 110 | POP3 | TCP |
| 123 | NTP | UDP |
| 143 | IMAP | TCP |
| 161/162 | SNMP | UDP |
| 443 | HTTPS | TCP |
| 445 | SMB | TCP |
| 514 | Syslog | UDP |
| 3389 | RDP | TCP |

## Common misconceptions (correct all three)
1. **"SSH and Telnet — which is which?"** They sit next to each other (22, 23). Anchor it: **SSH = 22 = Secure**; Telnet = 23 = the old insecure one. The lower number is the safer one.
2. **"SMTP receives my mail."** No — **SMTP sends**. POP3 and IMAP receive. Chant "**S**MTP **S**ends."
3. **"HTTP and HTTPS are the same port."** 80 is plain, 443 is secure. The **S** in HTTPS is *secure*, and it rides a different port.
4. Bonus: **"DNS is UDP only."** DNS uses **both** TCP and UDP on 53. This is a favorite exam trap.

## Pacing (~30 min)
- 5 min — why fixed numbers exist (911/411 analogy).
- 12 min — teach by group: web → mail → remote → files → services. Say each number out loud with its job.
- 8 min — the `netstat -an` lab (spot 443, 445).
- 5 min — quick drill both directions (port→protocol, protocol→port).
Learners get stuck when all 16 are shown at once. **Always teach by group**, then combine.

## How CompTIA tends to test it
- Port ↔ protocol **both directions** ("what port is X" and "what is on port Y").
- **TCP vs. UDP** for a given service.
- **Secure vs. insecure** counterparts (sets up 10-04).
- Scenario/PBQ: "open the ports needed to do X" (see quiz Q10).

## Support ideas (struggling learners)
- Give them only the **four web + mail** ports first; master those, then add remote and files next session.
- Physical flashcards, port on one side, protocol on the other. Drill 5 minutes a day.
- Color the four groups on a printed table (color is a study aid here, never the only signal).

## Extension ideas (fast learners)
- Add the secure counterparts as a preview of 10-04: POP3S 995, IMAPS 993, SMTPS 465/587, FTPS/SFTP (SFTP rides SSH 22), LDAPS 636.
- Have them explain *why* 443 vs. 80 matters for privacy.

## Accuracy note (Prime Directive #7)
Every port/protocol pair is a standards-based IANA well-known assignment. `netstat -an` is a genuine Windows command; observed rows vary by machine, so learners record their own — no fabricated output.

---
_NetworkAcademy+ · Teaching Notes 10-03 · CompTIA Network+ N10-009 · Instructor materials_
