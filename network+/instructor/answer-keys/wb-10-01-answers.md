# Answer Key — Lesson NA-M10-L01 "What Ports and Protocols Are (the Mailbox Idea)"

> 🔒 **Instructor / self-check only.** Covers Quiz 10.1.Q and Worksheets 10.1.A–10.1.G.

**In one line:** A **protocol** is the rules two devices speak. A **port number** (0–65535) says which **program** data is for — the mailbox at the IP's address. **IP + port = a socket.** Ranges: **well-known 0–1023**, **registered 1024–49151**, **ephemeral 49152–65535** (client, temporary).

---

## Quiz 10.1.Q — Knowledge Check (10 pts)

1. **B** — A port number identifies the program on the device.
2. **B** — A protocol is the agreed rules (language) two devices speak.
3. **B** — IP + port together is a socket.
4. **A** — Well-known ports are 0–1023.
5. **B** — A client connects from an ephemeral (temporary) port.
6. **False.** Good answer: a port here is a **number** identifying a program; a physical port is the plug you push a cable into — same word, different meaning.
7. **C** — Secure web pages use port 443.
8. 0–1023 → **C** (well-known), 1024–49151 → **A** (registered), 49152–65535 → **B** (ephemeral).
9. **port**.
10. **Port numbers** sort it out: incoming web data uses the browser's port and incoming email uses the email app's port, so the one IP delivers each to the right program.

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 10.1.A — Fill-in-the-blank (20 pts, 2 each)

1. protocol 2. port 3. program 4. socket 5. 65535 6. well-known 7. 1023 8. ephemeral 9. 443 10. IP.
**Challenge (+2):** one device runs many programs at once; the single IP can't tell them apart, so each program uses a different port number as its mailbox.

## Worksheet 10.1.B — Matching (20 pts)

1→C, 2→D, 3→A, 4→B, 5→F, 6→E, 7→G, 8→H.
**Explain (+2):** any correct reason.

## Worksheet 10.1.C — Label the mailboxes (20 pts, 4 each)

1. IP address (the device) 2. port 3. 443 4. ephemeral 5. well-known.
**Why (+2):** the well-known port (443) is reserved for the server's service, so the client picks a free, temporary high (ephemeral) port for its side of that one conversation.

## Worksheet 10.1.D — Short answer (20 pts, 5 each)

1. A port is a number identifying which program data is for; one IP needs many because a device runs many programs at once and must tell them apart. *(idea /3, why /2)*
2. A protocol is the agreed rules/language two devices speak; a port is a number for a program — the rules vs. the mailbox. *(idea /3, why /2)*
3. A socket is an IP address plus a port together, naming one exact endpoint — e.g., 192.168.1.24:443. *(idea /3, why /2)*
4. Well-known = **0–1023**, Registered = **1024–49151**, Ephemeral = **49152–65535**.

## Worksheet 10.1.E — Hands-on observation (25 pts)

- Step 1: secure tab open *(5)*.
- Step 2: `netstat -n` ran *(5)*.
- Step 3: a `:443` foreign address found *(5)*.
- Step 4: matching high local (ephemeral) port recorded *(5)*.
- Step 5: 443 = well-known, high local port = ephemeral *(5)*.
- (Accept any valid values; ports vary.)

## Worksheet 10.1.F — Vocabulary review (20 pts)

- **Part A:** Socket = IP + port together (one endpoint); Well-known ports = 0–1023 for common services; Ephemeral port = a client's temporary high port (49152–65535); Protocol = the agreed rules two devices speak.
- **Part B:** 5. 0–1023 6. 49152–65535 7. socket.
- **Part C:** any correct sentences.
- **Part D:** the client side uses an **ephemeral** port (49152–65535).

## Worksheet 10.1.G — Reflection (10 pts)

Completion credit — honest answers, no wrong response.

---
_NetworkAcademy+ · Answer Key 10.1 · CompTIA Network+ N10-009 · Instructor materials_
