# Answer Key — NA-M14-L03 "More Tools: arp, netstat, pathping"

> 🔒 **Instructor / self-check only.** Keep separate from student copies.
> **Module:** 14 · **Unit:** 11 · **Objective:** 5.5

---

## Quiz answers (`quiz-14-03-knowledge-check.md`)

1. **B — local IP-to-MAC pairs (the ARP table).** arp -a lists what your PC learned locally. *(It doesn't show the path, Wi-Fi password, or DNS cache.)*

2. **A — active connections and listening ports.** That's netstat's job. *(Cable length, ARP table, and firmware are other things.)*

3. **B — ping plus tracert, with per-hop loss.** pathping traces the path and measures loss at each hop. *(Not ipconfig+nslookup, a backup, or a firewall rule.)*

4. **B — no messages were lost — good.** 0% packet loss is ideal. *(A describes 100% loss; C/D are unrelated.)*

5. **B — shows numbers only (no name lookups), which is faster.** `-n` skips resolving names. *(It doesn't disable the network, delete connections, or ping.)*

6. **False.** arp only shows **local** IP-to-MAC pairs on your own network segment; it can't find the MAC of a device across the internet. (MACs don't travel past the local router.)

7. **C — pathping.** It reports packet loss at each hop, so it shows *where* a path loses data. *(arp is local, netstat is connections, ipconfig is your settings.)*

8. **Matching:** **arp → B** (local IP-to-MAC pairs); **netstat → C** (connections + listening ports); **pathping → A** (path + packet loss per hop).

9. **LISTENING.** A port waiting to accept incoming connections shows the LISTENING state.

10. **Scenario —** Use **netstat** (e.g., `netstat -an`). Look for the program's port in the **LISTENING** state. If it isn't listening, the program isn't accepting connections — that's the problem, not the network. *(Accept "netstat — check if the port is LISTENING.")*

---

## Worksheet answers

### Fill in the blank (`wb-14-03-fill-in-the-blank.md`)
1. arp · 2. ARP table · 3. netstat · 4. pathping · 5. -an · 6. listening · 7. MAC · 8. local · 9. packet loss · 10. hop

### Matching (`wb-14-03-matching.md`)
**Part 1:** 1 → C (arp -a) · 2 → A (netstat) · 3 → B (pathping)
**Part 2:** 4 → E (ARP table) · 5 → F (listening port) · 6 → D (packet loss)

### Label the diagram (`wb-14-03-label-the-diagram.md`)
a. arp · b. netstat · c. pathping · d. `arp -a` · e. `netstat -an` · f. `pathping 8.8.8.8`

### Short answer (`wb-14-03-short-answer.md`) — model answers
1. arp -a shows the local IP-to-MAC pairs; the ARP table (ARP cache) is that stored list of pairs the device has learned.
2. netstat shows active connections and listening ports; e.g., `-a` shows all connections and listening ports, `-n` shows numbers only (faster).
3. pathping measures **packet loss at each hop** over time, not just the path — plain tracert only lists the hops.
4. Because MAC addresses are used only on the local segment; they don't travel past the router, so arp can't learn a far device's MAC.
5. LISTENING = a port waiting to accept connections; ESTABLISHED = an active, connected session.
6. It tests each hop over time to measure loss, which takes several minutes to gather.
7. Because every computer and network differs and connections change constantly — the samples are examples only.

### Hands-on observation (`wb-14-03-hands-on-observation.md`)
Values are personal and vary. Full credit when the learner records a real arp IP/MAC pair (and identifies the gateway), a LISTENING and an ESTABLISHED netstat line, a pathping hop count, and whether any hop showed loss.

### Vocabulary review (`wb-14-03-vocabulary-review.md`)
- **arp (arp -a)** — a command that shows local IP-to-MAC pairs.
- **ARP table** — the stored list of local IP-to-MAC pairs a device learned.
- **netstat** — a command showing active connections and listening ports.
- **pathping** — a command that shows a path and the packet loss at each hop.
- **Packet loss** — the share of messages that got no reply (0% is best).
- **Listening port** — a port waiting to accept incoming connections.

**Part 3:** 1. arp (arp -a) · 2. netstat · 3. pathping

---
_NetworkAcademy+ · Answer Key · CompTIA Network+ N10-009 · NA-M14-L03 · Module 14_
