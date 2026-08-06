# Answer Key — Lesson NA-M10-L02 "TCP vs. UDP — Reliable vs. Fast"

> 🔒 **Instructor / self-check only.** Covers Quiz 10.2.Q and Worksheets 10.2.A–10.2.G.

**In one line:** **TCP** is reliable and **connection-oriented** — three-way handshake (SYN, SYN-ACK, ACK), then ACKs, resends, and in-order delivery (web/email/files). **UDP** is fast and **connectionless** — just sends, best-effort (voice/video/games/DNS).

---

## Quiz 10.2.Q — Knowledge Check (10 pts)

1. **B** — TCP is reliable and checks that data arrives.
2. **B** — UDP is connectionless (no setup).
3. **A** — The TCP setup is the three-way handshake.
4. **B** — SYN, SYN-ACK, ACK.
5. **B** — A live video call is best on UDP (speed; resending late frames is useless).
6. **False.** Good answer: UDP skips resending **on purpose** so it stays fast — that's the point for live media, not a defect.
7. **A** — A file download fits TCP (must be complete/correct). (B, C, D favor UDP.)
8. TCP → **B** (reliable, connection-oriented, in order), UDP → **A** (fast, connectionless, best-effort).
9. **acknowledgment (ACK)**.
10. The **file download** uses **TCP** — a missing piece would corrupt the file, so it must be reliable. The **voice call** uses **UDP** — speed matters more, and a lost bit of audio is better skipped than resent late.

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 10.2.A — Fill-in-the-blank (20 pts, 2 each)

1. TCP 2. UDP 3. handshake 4. ACK 5. reliable 6. fast 7. connectionless 8. order 9. resend 10. DNS.
**Challenge (+2):** live video must stay current; a lost frame resent late would be useless, so UDP's fast, no-resend approach fits better than TCP's checking.

## Worksheet 10.2.B — Matching (20 pts)

1→B, 2→A, 3→D, 4→C, 5→E, 6→F, 7→G, 8→H.
**Explain (+2):** any correct reason.

## Worksheet 10.2.C — Label the handshake (20 pts, 4 each)

1. SYN 2. SYN-ACK 3. ACK 4. ACK 5. none.
**Why (+2):** the handshake first confirms both sides can hear each other and agree to connect, so the reliable, ordered data transfer that follows has a known, agreed connection.

## Worksheet 10.2.D — Short answer (20 pts, 5 each)

1. TCP is reliable because it acknowledges each piece (ACK), resends anything lost, and puts pieces back in order (any two). *(idea /3, why /2)*
2. UDP is fast because it skips setup and checks; it gives up reliability — no handshake, ACKs, resends, or ordering. *(idea /3, why /2)*
3. Before data, the two sides exchange three messages — SYN ("can you hear me?"), SYN-ACK ("yes, can you?"), ACK ("yes") — then the connection is ready. *(idea /3, why /2)*
4. TCP: e.g., a file download or web page (must be complete). UDP: e.g., a live video call or DNS lookup (speed matters, a lost bit is OK). *(idea /3, why /2)*

## Worksheet 10.2.E — Hands-on observation (25 pts)

- Step 1: `netstat -an` ran *(5)*.
- Step 2: a TCP row + its State recorded *(5)*.
- Step 3: a UDP row (foreign `*:*`, no state) recorded *(5)*.
- Step 4: **TCP** shows a state *(5)*.
- Step 5: UDP is connectionless, so there's no connection to track *(5)*.
- (Accept any valid rows; values vary.)

## Worksheet 10.2.F — Vocabulary review (20 pts)

- **Part A:** UDP = fast, connectionless, no delivery checks; Connection-oriented = sets up + confirms delivery (TCP); Connectionless = just sends, no setup/checks (UDP); Three-way handshake = TCP's SYN/SYN-ACK/ACK setup.
- **Part B:** 5. acknowledgment (ACK) 6. TCP 7. UDP.
- **Part C:** any correct sentences.
- **Part D:** No — the port number is the same either way; TCP and UDP are separate transports that can each use a given port number.

## Worksheet 10.2.G — Reflection (10 pts)

Completion credit — honest answers, no wrong response.

---
_NetworkAcademy+ · Answer Key 10.2 · CompTIA Network+ N10-009 · Instructor materials_
