# Answer Key — NA-M14-L06 "Troubleshooting Names, Speed, and Wireless"

> 🔒 **Instructor / self-check only.** Keep separate from student copies.
> **Module:** 14 · **Unit:** 11 · **Objective:** 5.2 / 5.3 / 5.4

---

## Quiz answers (`quiz-14-06-knowledge-check.md`)

1. **B — DNS (name resolution) problem.** The IP works, so the connection is fine; the name won't resolve. *(Not power, cable, or a firewall rule.)*

2. **A — `ipconfig /flushdns`.** It clears the DNS cache. *(The others are not real commands.)*

3. **B — the link is full; there's no room for more traffic.** That's bandwidth saturation. *(Not cable length, DNS, or signal.)*

4. **B — how much the delay changes moment to moment.** Jitter is variation in latency. *(A is bandwidth; C/D are unrelated.)*

5. **B — RSSI.** A low received signal strength means weak Wi-Fi. *(TTL, MAC, and VLAN are not signal strength.)*

6. **False.** More bandwidth widens the pipe but does not lower **latency** (the delay). A wide pipe can still respond slowly.

7. **B — overlap and interference (flaky Wi-Fi).** Same-channel networks step on each other. *(Not DNS, duplex, or a cable.)*

8. **Matching:** **Name fails, IP works → C** (Name/DNS); **Choppy video call → A** (Speed — latency/jitter); **Wi-Fi drops far from the router → B** (Wireless — weak signal).

9. **Attenuation.** The signal weakening over distance (and through walls) is attenuation — it lowers RSSI.

10. **Scenario —** Likely the **Wireless** family (it's fine wired, bad on Wi-Fi). One cause: weak signal (low RSSI) from distance/walls, channel overlap/interference, or the wrong band. *(Accept "wireless — weak signal / interference / channel.")*

---

## Worksheet answers

### Fill in the blank (`wb-14-06-fill-in-the-blank.md`)
1. DNS · 2. flushdns · 3. bandwidth saturation · 4. latency · 5. jitter · 6. RSSI · 7. channel · 8. band · 9. attenuation · 10. interference

### Matching (`wb-14-06-matching.md`)
**Part 1:** 1 → C (Name/DNS) · 2 → A (Speed) · 3 → B (Wireless)
**Part 2:** 4 → E (bandwidth) · 5 → F (latency) · 6 → G (jitter) · 7 → D (RSSI)

### Label the diagram (`wb-14-06-label-the-diagram.md`)
a. Name (DNS) · b. Speed · c. Wireless · d. DNS · e. bandwidth saturation · f. RSSI · g. flushdns · h. band

### Short answer (`wb-14-06-short-answer.md`) — model answers
1. You can ping the IP but not the name — the connection works, so the name-to-IP lookup (DNS) is failing.
2. It clears the DNS cache (the local store of recent name-to-IP answers). Run it to remove a stale or wrong cached entry.
3. Bandwidth is the pipe's size (capacity); throughput is what actually gets through in real use; latency is the delay before data arrives.
4. Jitter is how much the delay changes moment to moment; uneven delay makes voice/video choppy even if the average speed is fine.
5. Bandwidth is capacity, not speed of response. A wider pipe still has the same delay, so high latency remains.
6. RSSI is the received Wi-Fi signal strength; it drops with distance, walls, and interference (attenuation).
7. They share the same "lane," so their signals overlap and interfere, making the Wi-Fi flaky.

### Vocabulary review (`wb-14-06-vocabulary-review.md`)
- **RSSI** — how strong a received Wi-Fi signal is.
- **Bandwidth saturation** — a link so full there's no room for more traffic.
- **Bandwidth** — the pipe's size (capacity).
- **Throughput** — what actually gets through in real use.
- **Latency** — the delay for data to arrive.
- **Jitter** — how much the delay changes moment to moment.
- **DNS cache** — a local store of recent name-to-IP answers.

**Part 3 (family):** 1. Name (DNS) · 2. Speed · 3. Wireless · 4. Speed (latency/jitter)

---
_NetworkAcademy+ · Answer Key · CompTIA Network+ N10-009 · NA-M14-L06 · Module 14_
