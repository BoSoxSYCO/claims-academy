# Teaching Notes — NA-M14-L02 "Command-Line Tools: ping, tracert, ipconfig, nslookup"

> 🔒 Instructor material. **Module:** 14 · **Unit:** 11 · **Objective:** N10-009 5.5 · **Time:** ~35 min

---

## Learning objective (one line)

Learners use ipconfig, ping, tracert, and nslookup on Windows and match each tool to the question it answers.

## Why this lesson matters

These are the four commands a technician runs first, every day. They are how you **test a theory** (method step 3) and **verify** a fix (step 6) from 14-01. Objective 5.5 is "use the appropriate tool," and matching tool to symptom is a very common exam task. This is also a hands-on, real-gear lesson on the learner's own laptop.

## The four tools (one question each)

- **ipconfig** — "what are my settings?" (IP, gateway, DNS, MAC with `/all`)
- **ping** — "can I reach it?" (reply + round-trip time + TTL)
- **tracert** — "where does the path go, or stop?" (hop by hop)
- **nslookup** — "what IP has this name?" (queries DNS)

## Common misconceptions (and fixes)

- **"The sample numbers are what I'll see."** Every IP, time, TTL, and hop **varies** by network. Have learners read their own output; the samples are illustrative only.
- **"A failed ping means the device is down."** Many devices ignore ping by policy. Use a second test.
- **"A name failure is always the connection."** If ping to the IP works but the name fails, it's **DNS** — not the connection.
- **"tracert and ping do the same thing."** ping = reachable? tracert = the whole path.

## Pacing guidance

- ~35 minutes. Lead with the detective-kit analogy (§4).
- The four-command lab (§9) is the core — budget most of the time there. Everyone should see real output.
- Teach the ping-IP-vs-name test explicitly; it's the single most useful diagnostic pattern here.
- Where learners stall: reading ipconfig output (finding the gateway line) and interpreting a partial tracert.

## How CompTIA tends to test it

- Match the tool to a symptom/question.
- ping vs. tracert distinction.
- "ping IP works, name fails" → DNS.
- ipconfig `/all` for MAC/DNS details.

## Accuracy note (Prime Directive #7)

**All four commands are real and safe** on Windows and are shown with correct syntax. **Every output value is a typical example that varies** and is marked `[TO VERIFY ON HARDWARE]`. No specific reply time, TTL, hop IP, or address is presented as guaranteed — the commands are real, the numbers are the learner's own.

## Extension ideas (fast learners)

- ping switches: `-t` (continuous), `-n <count>`, `-4`/`-6`.
- `tracert -d` (skip name lookups for speed).
- A preview of **pathping** (combines ping + tracert) — taught in 14-03.

## Support ideas (struggling learners)

- Give the four-row "question → tool" table (§4/§6) as the anchor.
- Do only ipconfig and ping first; add tracert and nslookup once those are comfortable.
- Reassure them that different numbers are normal and expected.

## Where this leads

Next is 14-03 (arp, netstat, pathping) — more Windows tools for deeper problems. Then 14-05 and 14-07 apply all of them inside the 7-step method.

---
_NetworkAcademy+ · Teaching Notes · CompTIA Network+ N10-009 · NA-M14-L02 · Module 14_
