# Answer Key — NA-M14-L02 "Command-Line Tools: ping, tracert, ipconfig, nslookup"

> 🔒 **Instructor / self-check only.** Keep separate from student copies.
> **Module:** 14 · **Unit:** 11 · **Objective:** 5.5

---

## Quiz answers (`quiz-14-02-knowledge-check.md`)

1. **B — ipconfig.** It shows your own IP, gateway, and (with `/all`) DNS and MAC. *(ping tests reach, tracert shows the path, nslookup queries DNS.)*

2. **B — whether you can reach a device.** ping sends a message and waits for a reply. *(A is tracert; C is ipconfig; D is nslookup.)*

3. **A — each hop (router) along the path.** tracert traces the route hop by hop. *(B/C/D are other tools' jobs.)*

4. **B — turn a name into an IP (query DNS).** nslookup asks DNS. *(It doesn't reboot, test cables, or show your gateway.)*

5. **B — round-trip time in milliseconds.** The "time" is how long the ping took to go and come back. *(It's not file size, TTL, or the IP.)*

6. **True.** Reaching the **IP** works, so the connection is fine; the **name** fails, which points to a **DNS** (name-lookup) problem.

7. **B — `ipconfig /all`.** The `/all` switch adds MAC (Physical Address) and DNS servers. *(Plain `ipconfig` omits them; `/all` isn't a ping/tracert option.)*

8. **Matching:** **ipconfig → C** (what are my settings?); **ping → A** (can I reach it?); **tracert → D** (where does the path go?); **nslookup → B** (what IP has this name?).

9. **127.0.0.1.** Pinging the loopback address, 127.0.0.1, tests your own network software.

10. **Scenario —** **ipconfig** told you (no default gateway listed). A missing gateway suggests the laptop has no proper IP/DHCP lease or no route to the router — so it can't reach anything beyond itself. *(Accept "no gateway = no path off the local network; check cable/Wi-Fi/DHCP.")*

---

## Worksheet answers

### Fill in the blank (`wb-14-02-fill-in-the-blank.md`)
1. ipconfig · 2. /all · 3. ping · 4. tracert · 5. nslookup · 6. round-trip time · 7. hop · 8. DNS · 9. gateway · 10. loopback

### Matching (`wb-14-02-matching.md`)
**Part 1:** 1 → C (ipconfig) · 2 → A (ping) · 3 → D (tracert) · 4 → B (nslookup)
**Part 2:** 5 → G (round-trip time) · 6 → E (hop) · 7 → F (TTL)

### Label the diagram (`wb-14-02-label-the-diagram.md`)
a. ipconfig · b. ping · c. tracert · d. nslookup · e. `ipconfig /all` · f. `ping 8.8.8.8` · g. `tracert 8.8.8.8` · h. `nslookup a-name`

### Short answer (`wb-14-02-short-answer.md`) — model answers
1. ipconfig shows your IP, subnet mask, and default gateway; `/all` adds your MAC address, DNS servers, and DHCP info.
2. ping tests whether you can reach a device; the "time" is the round-trip time in milliseconds (lower is better).
3. tracert shows each hop (router) along the path to a destination, and where the path stops if it breaks.
4. nslookup asks DNS for the IP address behind a name.
5. Likely a DNS problem: reaching the IP works, so the connection is fine, but the name won't resolve to an IP.
6. Because every network is different — IPs, times, TTLs, and hop lists vary by computer and network and change over time.
7. Some devices are configured to ignore (not reply to) ping, so a non-reply doesn't always mean the device is down.

### Hands-on observation (`wb-14-02-hands-on-observation.md`)
Values are personal and vary — that's the point. Full credit when the learner records real ipconfig values, notes whether each ping replied (with a time), counts tracert hops, records an nslookup IP, and correctly identifies a name-fail-but-IP-works case as DNS.

### Vocabulary review (`wb-14-02-vocabulary-review.md`)
- **ipconfig** — a command that shows your computer's network settings.
- **ping** — a command that tests whether you can reach a device.
- **tracert** — a command that shows the hops (routers) to a destination.
- **nslookup** — a command that asks DNS for the IP behind a name.
- **Round-trip time (RTT)** — how long a ping takes to go and come back, in ms.
- **TTL** — Time to Live; a limit on how many hops a packet may take.
- **Hop** — one router (step) along the path.

**Part 3:** 1. ipconfig · 2. ping · 3. tracert · 4. nslookup

---
_NetworkAcademy+ · Answer Key · CompTIA Network+ N10-009 · NA-M14-L02 · Module 14_
