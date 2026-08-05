# Answer Key — Lesson NA-M09-L05 "Time (NTP) and Other Supporting Services"

> 🔒 **Instructor / self-check only.** Covers Quiz 9.5.Q and Worksheets 9.5.A–9.5.G.

**In one line:** **NTP** keeps device clocks in sync, ranked by **stratum** (lower = closer to the true source = more accurate). Accurate time keeps **logs, certificates, and logins** working. **SNMP** monitors devices; **Syslog** centralizes their logs.

---

## Quiz 9.5.Q — Knowledge Check (10 pts)

1. **B** — NTP keeps device clocks synchronized.
2. **B** — A lower stratum is closer to the true source, so more accurate.
3. **B** — Stratum 0 is the reference clock (atomic/GPS), not on the network.
4. **A** — SNMP monitors and manages network devices.
5. **B** — Syslog collects log messages centrally.
6. **True.** Good answer: certificates have valid dates and some logins require close clocks, so a wrong clock can reject good certificates and fail logins.
7. **B** — A stratum 2 server gets its time from a stratum 1 server.
8. NTP → **C**, SNMP → **A**, Syslog → **B**.
9. **w32tm** (e.g., `w32tm /query /status`).
10. **NTP** is likely misconfigured — it keeps device clocks in sync. With clocks off, certificates get rejected and logs don't line up; pointing the servers at a good NTP source fixes it.

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 9.5.A — Fill-in-the-blank (20 pts, 2 each)

1. NTP 2. clocks 3. stratum 4. lower 5. source 6. SNMP 7. Syslog 8. logins 9. logs 10. w32tm.
**Challenge (+2):** stratum 1 is directly attached to the true (stratum 0) source, while stratum 3 is two more steps away — each step adds a little error, so stratum 1 is more accurate.

## Worksheet 9.5.B — Matching (20 pts)

1→B, 2→C, 3→D, 4→A, 5→F, 6→E, 7→G, 8→H.
**Explain (+2):** any correct reason.

## Worksheet 9.5.C — Label the stratum chain (20 pts, 4 each)

1. 0 2. primary 3. 2 4. lower 5. SNMP.
**Why (+2):** stratum 0 is a physical reference clock (atomic/GPS) that feeds a stratum 1 server directly; it isn't a networked service you query — you reach the time through stratum 1 and below.

## Worksheet 9.5.D — Short answer (20 pts, 5 each)

1. NTP keeps device clocks synchronized to a reliable source; accurate time matters so logs line up, certificates stay valid, and logins work. *(idea /3, why /2)*
2. A stratum is how far a clock is from the true source; a **lower** number is closer and more accurate. *(idea /3, why /2)*
3. SNMP monitors and manages network devices (status, traffic); Syslog sends device log messages to one central server. *(idea /3, why /2)*
4. Any two: rejected/invalid **certificates**, failed **logins**, and **logs** that don't line up across devices. *(idea /3, why /2)*

## Worksheet 9.5.E — Hands-on observation (25 pts)

- Step 1: time source recorded *(5)*.
- Step 2: stratum number recorded *(5)*.
- Step 3: last successful sync time recorded *(5)*.
- Step 4: lower = better *(5)*.
- Step 5: one time-dependent failure named (certificate, login, or log correlation) *(5)*.
- (Accept any valid values; stratum/source vary.)

## Worksheet 9.5.F — Vocabulary review (20 pts)

- **Part A:** NTP = keeps device clocks synchronized; Stratum = how far a clock is from the true source (lower = closer); SNMP = monitors/manages network devices; Syslog = central logging of device messages.
- **Part B:** 5. stratum 0 6. NTP 7. Syslog.
- **Part C:** any correct sentences.
- **Part D:** **NTP** keeps clocks in sync.

## Worksheet 9.5.G — Reflection (10 pts)

Completion credit — honest answers, no wrong response.

---
_NetworkAcademy+ · Answer Key 9.5 · CompTIA Network+ N10-009 · Instructor materials_
