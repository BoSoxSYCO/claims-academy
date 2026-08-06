---
id: NA-M10-L02
module: 10
lesson: 02
title: "TCP vs. UDP — Reliable vs. Fast"
unit: 7
objective_ids: ["1.5"]
reading_level_target: 7
status: Published
est_minutes: 26
equipment_tier: E1
prerequisites: ["NA-M05-L04", "NA-M10-L01"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-04"
---

# [Module 10 · Lesson 02] TCP vs. UDP — Reliable vs. Fast

> **Unit:** Unit 7 — Ports, Protocols & Applications · **Time:** ~26 min · **Equipment:** E1 (your Windows laptop)
> **You'll need first:** Lesson 05-04 (segments) and Lesson 10-01 (ports).

Data travels through ports (Lesson 10-01). But there are **two** ways to send it. **TCP** is careful and **reliable** — it checks that everything arrives. **UDP** is quick and **connectionless** — it just sends, no checking. This lesson shows the trade-off, and when each one wins.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain **TCP** (reliable, connection-oriented) and **UDP** (fast, connectionless).
- [ ] Describe the TCP **three-way handshake**.
- [ ] Say **when** to use TCP vs. UDP.
- [ ] Spot TCP and UDP in `netstat`.

---

## 2. Introduction — why this matters

Think about two ways to send a message. First, a **phone call**: you dial, they pick up, and you both check "can you hear me?" before talking. If a word is missed, you repeat it. It's reliable — but it takes setup.

Second, a **live radio broadcast**: the host just talks. There's no dialing, no checking. If a listener misses a word, the show moves on. It's fast — but nothing is confirmed.

Networks send data both ways. **TCP** is the phone call: it sets up a connection and makes sure every piece arrives, in order. **UDP** is the broadcast: it just sends, fast, with no promises. Neither is "better" — they fit **different jobs**. A file download must be perfect (TCP). A live video call must be fast (UDP).

Why does this matter? The exam expects you to know both, their trade-off, and which apps use which.

🎯 **Exam tip:** Network+ tests **TCP vs. UDP** (reliable vs. fast), the **three-way handshake**, and which common services use each.

🔧 **Lab link:** You'll see TCP and UDP side by side with `netstat -an`.

---

## 3. Simple explanation

### TCP: reliable, connection-oriented
**TCP (Transmission Control Protocol)** is the careful one (Lesson 05-03). It is **connection-oriented**: it sets up a connection **first**, then sends. It is **reliable**: it numbers each piece, waits for an **acknowledgment (ACK)** that each arrived, resends anything lost, and puts the pieces back **in order**.

That checking costs a little time and effort (overhead). But nothing goes missing. TCP is the phone call.

### The three-way handshake
Before TCP sends data, the two sides do a **three-way handshake** — a quick "can you hear me?" in three messages:

```
   1. Client → Server:  SYN      "Can you hear me?"
   2. Server → Client:  SYN-ACK  "Yes — can you hear me?"
   3. Client → Server:  ACK      "Yes."   → connection ready
```

After those three, data flows on a known, agreed connection.

### UDP: fast, connectionless
**UDP (User Datagram Protocol)** is the quick one. It is **connectionless**: **no** handshake, no setup — it just sends. It is **best-effort**: no acknowledgments, no resending, no reordering. If a piece is lost, it's simply gone.

That makes UDP **fast** and light. UDP is the live broadcast.

### TCP vs. UDP at a glance

| | **TCP** | **UDP** |
|---|---------|---------|
| Setup | **Handshake** first (connection) | **None** (connectionless) |
| Reliable? | **Yes** — ACKs, resends, in order | **No** — best-effort |
| Speed | Slower (more overhead) | **Faster** (little overhead) |
| Like | A phone call | A live broadcast |

### When to use which
- **TCP (must be complete/correct):** web (HTTP/HTTPS), email, file transfer — anything where a missing piece breaks it.
- **UDP (must be fast, can lose a little):** live voice and video calls, streaming, online games, and quick lookups like **DNS** (Lesson 09-02).

> **The big idea:** **TCP** is reliable and **connection-oriented** — it does a **three-way handshake**, then confirms every piece with an **ACK** and resends losses, in order. **UDP** is fast and **connectionless** — it just sends, best-effort, no checks. Use TCP when data must be perfect; use UDP when speed matters more than a lost piece.

💡 **Tip:** A memory hook — **TCP = Trusty/Checked; UDP = Ultra-fast/Don't-care.**

⚠️ **Watch out:** UDP isn't "broken" for having no checks — that's the **point**. For live video, resending a lost frame late is useless; it's better to skip it and stay current.

---

## 4. Real-world analogy

> **"TCP is a phone call; UDP is a live broadcast."**

| Communication | Protocol |
|---------------|----------|
| Dial and wait for "hello" (setup) | TCP **handshake** |
| "Can you hear me?" both ways | Connection check |
| Repeat a missed word | TCP **resend** (reliable) |
| The host just talks | **UDP** (connectionless) |
| A listener misses a word — show goes on | UDP **best-effort** |
| Fast, no setup, no promises | UDP is **fast** |

A phone call confirms you're heard. A broadcast just goes out. Each fits a different need.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **UDP (User Datagram Protocol)** | | A fast, connectionless way to send data with no delivery checks. |
| **Connection-oriented** | | Sets up a connection and confirms delivery (TCP). |
| **Connectionless** | | Just sends data, with no setup or delivery checks (UDP). |
| **Three-way handshake** | | TCP's SYN, SYN-ACK, ACK setup that starts a connection. |
| **Acknowledgment (ACK)** | | A message confirming that data was received (used by TCP). |

---

## 6. ASCII diagram

```
   TWO WAYS TO SEND DATA

   TCP — reliable, connection-oriented
     handshake:  SYN → SYN-ACK → ACK   (then data flows)
     each piece:  sent → ACK back → resend if lost → put in order
     like a PHONE CALL.   Use for: web, email, files.

   UDP — fast, connectionless
     no handshake — just send.  no ACK, no resend, no reorder.
     like a LIVE BROADCAST.   Use for: voice/video, games, DNS.

   Trade-off:  TCP = trusty & checked  ·  UDP = ultra-fast & don't-care
```

_TCP confirms every piece (reliable). UDP just sends (fast). Pick by the job._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-10-02-tcp-vs-udp-01.svg` (created and stored in this module's `assets/`)
> **Shows:** the TCP three-way handshake and reliable delivery on one side (phone call), and UDP's just-send best-effort on the other (broadcast), with a compare table and "when to use which."
> **Key elements & labels:** SYN/SYN-ACK/ACK handshake; ACK + resend; UDP no-setup send; phone vs. broadcast; TCP uses (web/email/files) vs. UDP uses (voice/video/games/DNS).
> **Color meaning:** each protocol's steps are labeled in text (TCP vs. UDP), not color alone.
> **Flow direction:** TCP steps top-to-bottom on the left; UDP on the right.
> **Alt text (required):** "Two ways to send data. On the left, TCP is reliable and connection-oriented, like a phone call. It first does a three-way handshake: the client sends SYN meaning can you hear me, the server replies SYN-ACK meaning yes can you hear me, and the client sends ACK meaning yes; then data flows. Each piece is acknowledged, and lost pieces are resent and put back in order. TCP is used for web, email, and file transfer. On the right, UDP is fast and connectionless, like a live broadcast. It just sends with no handshake, no acknowledgments, no resending, and no reordering; a lost piece is gone. UDP is used for voice and video calls, online games, and DNS. A table summarizes the trade-off: TCP is trusty and checked, UDP is ultra-fast and does not care."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-10-02-netstat-proto-01.jpg`
> A `netstat -an` result with the Proto column showing both TCP and UDP rows. Alt text: "The netstat output Proto column showing both TCP rows with states and UDP rows without states."
>
> **Photo 2** — `img-10-02-videocall-01.jpg`
> A live video call (UDP) beside a file download (TCP). Alt text: "A live video call, which uses UDP for speed, next to a file download, which uses TCP for reliability."

---

## 9. Hands-on lab

**Goal:** see TCP and UDP side by side with `netstat`, and notice TCP has connection states while UDP does not.
**Why:** the difference is real on your own laptop, right now.

**You will need**
- Your Windows laptop (Equipment tier **E1**), on a network. Estimated time: 10 min.

⚠️ **Before you start (safety):** `netstat` only **reads**. Nothing changes.

### 9a. Step-by-step instructions

1. Open the **Command Prompt** (Start → type `cmd` → Enter).
2. Type this exact command and press **Enter**:

   ```
   netstat -an
   ```

3. Read the **Proto** column on the left. Find rows marked **TCP** and rows marked **UDP**.
4. On the **TCP** rows, read the **State** column (like `LISTENING` or `ESTABLISHED`).
5. On the **UDP** rows, notice there is **no state** — UDP is connectionless, so there's nothing to track.

### 9b. Expected results

You'll see rows like these (your addresses differ):

```
   Proto  Local Address       Foreign Address     State
   TCP    192.168.1.24:51000  142.250.72.14:443   ESTABLISHED
   UDP    0.0.0.0:53          *:*
```

- **TCP** rows show a **State**; **UDP** rows show `*:*` and **no** state.
- ✅ **You did it if:** you found at least one TCP row with a state and one UDP row without one.

### 9c. Verify it worked

1. Point to a TCP row's state and say "TCP tracks a connection."
2. Point to a UDP row and say "UDP is connectionless — nothing to track."

### 9d. Reset / roll back

Nothing changed — `netstat` only reads. Close the window when done.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking UDP is "broken" | Wrong idea | UDP skips checks **on purpose** for speed |
| Saying TCP has no setup | Wrong | TCP does a **three-way handshake** first |
| Using UDP for a file transfer | Missing/corrupt data | Files need **TCP** (reliable) |
| Using TCP for live video | Laggy calls | Live media prefers **UDP** (fast) |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| A download is corrupt | Not really TCP's job to fail | Re-download; TCP normally guarantees integrity |
| Choppy video call | Network loss on UDP | Improve the link; UDP won't resend lost frames |
| App won't connect (TCP) | Handshake blocked | Check firewall/port for that TCP service |
| DNS slow but web fine | DNS uses UDP; server slow | Try another DNS server (Lesson 09-02) |

---

## 12. Lesson summary

- **TCP** is **reliable** and **connection-oriented**: a **three-way handshake**, then ACKs, resends, and in-order delivery.
- **UDP** is **fast** and **connectionless**: no setup, no checks — best-effort.
- **TCP** for web, email, files; **UDP** for voice/video, games, DNS.
- The trade-off: TCP trades speed for reliability; UDP trades reliability for speed.

**One-sentence recap:** TCP is the reliable phone call — it shakes hands and confirms every piece — while UDP is the fast live broadcast that just sends, so you pick TCP when data must be perfect and UDP when speed matters most.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-10-02-fill-in-the-blank.md`
2. **Matching** — `wb-10-02-matching.md`
3. **Label the diagram** — `wb-10-02-label-the-diagram.md` (the handshake)
4. **Short answer** — `wb-10-02-short-answer.md`
5. **Hands-on observation** — `wb-10-02-hands-on-observation.md` (netstat TCP/UDP)
6. **Vocabulary review** — `wb-10-02-vocabulary-review.md`
7. **Reflection** — `wb-10-02-reflection.md`

**Quick written warm-up (do this now):** Which is reliable — TCP or UDP? Which is faster?

Reliable: ____________  Faster: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-10-02-knowledge-check.md`.)

1. Which protocol is **reliable** and checks that data arrives? *(Objective: TCP)*
   - A) UDP
   - B) TCP
   - C) ARP
   - D) DNS

2. Which protocol is **connectionless** (no setup)? *(Objective: UDP)*
   - A) TCP
   - B) UDP
   - C) HTTP
   - D) DHCP

3. The TCP setup before data flows is the… *(Objective: handshake)*
   - A) three-way handshake
   - B) subnet mask
   - C) default route
   - D) lease

4. What are the three handshake steps, in order? *(Objective: handshake)*
   - A) ACK, SYN, SYN-ACK
   - B) SYN, SYN-ACK, ACK
   - C) SYN, ACK, SYN-ACK
   - D) ACK, ACK, SYN

5. Which is best for a **live video call**? *(Objective: when)*
   - A) TCP
   - B) UDP
   - C) neither
   - D) both equally

6. **True or false —** UDP is "broken" because it doesn't resend lost data. Explain in one sentence. *(Objective: UDP purpose)*

7. Which service best fits **TCP**? *(Objective: when)*
   - A) a file download
   - B) a live game
   - C) streaming video
   - D) a quick DNS lookup

8. **Matching —** write the letter next to each protocol. *(Objective: compare)*
   - ___ TCP &nbsp;&nbsp; ___ UDP
   - A) fast, connectionless, best-effort &nbsp; B) reliable, connection-oriented, in order

9. Fill in the blank: A message that confirms data was received is an ____________. *(Objective: ACK)*

10. **Scenario —** You're downloading an important file and also on a live voice call. Which protocol fits each, and why? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-10-02-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-10-02-tcp-udp.md`. In brief:

- **Objective in one line:** learners contrast TCP (reliable/connection-oriented) and UDP (fast/connectionless), the handshake, and which apps use each.
- **Common misconceptions:** UDP is "broken"; TCP has no setup; files can use UDP. Correct all three.
- **Pacing:** ~26 min. The phone-vs-broadcast analogy carries it; `netstat -an` shows TCP states vs. UDP none.
- **How CompTIA tests it:** TCP vs. UDP traits; the three-way handshake order; which services use which.
- **Accuracy note:** handshake is SYN → SYN-ACK → ACK; `netstat -an` is real (TCP rows have states, UDP rows don't). No fabricated device data.
- **Extension idea:** TCP flow/congestion control and QUIC (UDP-based HTTP/3) for fast learners.

---

## 17. Cheat sheet

> **Quick reference — TCP vs. UDP**
>
> | | **TCP** | **UDP** |
> |---|---------|---------|
> | Setup | three-way **handshake** | none (connectionless) |
> | Reliable | **yes** (ACK, resend, in order) | no (best-effort) |
> | Speed | slower | **faster** |
> | Like | phone call | live broadcast |
> | Use | web, email, files | voice/video, games, DNS |
>
> - **Handshake:** SYN → SYN-ACK → ACK, then data.
> - Memory hook: **TCP = Trusty/Checked; UDP = Ultra-fast/Don't-care.**
> - See it: `netstat -an` — TCP rows have a **State**; UDP rows don't.
>
> _(Full version: `resources/cheat-sheets/ports-and-protocols-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **UDP (User Datagram Protocol)** — A fast, connectionless way to send data with no delivery checks.
- **Connection-oriented** — Sets up a connection and confirms delivery (TCP).
- **Connectionless** — Just sends data, with no setup or delivery checks (UDP).
- **Three-way handshake** — TCP's SYN, SYN-ACK, ACK setup that starts a connection.
- **Acknowledgment (ACK)** — A message confirming that data was received (used by TCP).

(**TCP** was defined in Lesson 05-03 and is reused here.)

---

## 19. Homework

- **Practice:** Run `netstat -an`; list two TCP rows (with states) and two UDP rows (without).
- **Spaced review:** Redo the Lesson 10-01 flashcards on ports and sockets.
- **Preview:** Next lesson, the **must-know ports** — the exact numbers for web, mail, remote, and files.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I explain when to use TCP vs. UDP now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain TCP (reliable) and UDP (fast).
- [ ] I can describe the three-way handshake.
- [ ] I can say when to use TCP vs. UDP.
- [ ] I spotted TCP and UDP in `netstat`.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: the must-know ports.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M10-L02** — "TCP vs. UDP — Reliable vs. Fast" · Module 10 · Unit 7_
