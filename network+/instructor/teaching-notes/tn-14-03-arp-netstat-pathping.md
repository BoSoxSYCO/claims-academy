# Teaching Notes — NA-M14-L03 "More Tools: arp, netstat, pathping"

> 🔒 Instructor material. **Module:** 14 · **Unit:** 11 · **Objective:** N10-009 5.5 · **Time:** ~30 min

---

## Learning objective (one line)

Learners use arp -a, netstat, and pathping and match each to the clue it answers.

## Why this lesson matters

These three pick up where the basic four (14-02) stop. They handle deeper problems: local IP-to-MAC conflicts (arp), what a host is actually connected to (netstat), and *where* a working-but-lossy path drops data (pathping). Objective 5.5 keeps testing "which tool fits?", now for harder cases.

## The three tools (one clue each)

- **arp -a** — "which MAC has this local IP?" → the ARP table (local only)
- **netstat** — "what am I connected to, what's listening?" → connections + ports (`-a`, `-n`, `-an`)
- **pathping** — "where does the path lose packets?" → ping + tracert + per-hop loss

## Common misconceptions (and fixes)

- **"The sample rows are what I'll see."** Every arp/netstat row and pathping percentage **varies**. Read your own output.
- **"arp works across the internet."** No — MACs are **local**. arp only shows your own segment; use tracert/pathping for the path.
- **"pathping is broken because it's slow."** It's slow **on purpose** — it measures loss over time. Let it finish.
- **"netstat output means something is wrong."** Lots of connections is normal. Scan for *unexpected* remote addresses/ports.

## Pacing guidance

- ~30 minutes. Lead with the deeper-kit analogy (§4): neighbor list (arp), open-calls log (netstat), delivery-loss report (pathping).
- The three-command lab (§9) is the core — budget several minutes for pathping to finish.
- Teach the netstat states LISTENING vs. ESTABLISHED explicitly; they anchor the quiz and real use.
- Where learners stall: reading dense netstat output and being patient with pathping.

## How CompTIA tends to test it

- Match tool to clue: local IP-to-MAC → arp; connections/ports → netstat; path + loss → pathping.
- netstat states (LISTENING/ESTABLISHED) and common switches (`-a`, `-n`).
- arp is local-only; pathping locates loss.

## Accuracy note (Prime Directive #7)

**All three commands are real and safe** on Windows and shown with correct syntax and switches. **Every sample row/percentage is a typical example that varies** and is marked `[TO VERIFY ON HARDWARE]`. No specific MAC, connection, or loss figure is presented as guaranteed.

## Extension ideas (fast learners)

- `netstat -o` (owning process ID) and `-b` (program name — needs admin).
- `arp -d` to clear the cache and watch it repopulate.
- pathping timing switches; comparing pathping to a plain tracert on the same target.

## Support ideas (struggling learners)

- Give the three-row "clue → tool" table (§4/§6) as the anchor.
- Run only `arp -a` first (short, readable) before the busier netstat.
- Reassure them that different rows and a slow pathping are normal and expected.

## Where this leads

Next is 14-04 (hardware tools — cable testers, loopbacks), moving from software commands to physical-layer diagnosis. Then 14-05 and 14-07 apply every tool inside the 7-step method.

---
_NetworkAcademy+ · Teaching Notes · CompTIA Network+ N10-009 · NA-M14-L03 · Module 14_
