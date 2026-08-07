# Answer Key — NA-M14-L07 "Worked Scenarios: The Internet Is Down"

> 🔒 **Instructor / self-check only.** Keep separate from student copies.
> **Module:** 14 · **Unit:** 11 · **Objective:** 5.1–5.5

---

## Quiz answers (`quiz-14-07-knowledge-check.md`)

1. **B — no DHCP answered (APIPA).** A 169.254 address is self-assigned because DHCP didn't respond. *(Not DNS, duplex, or Wi-Fi.)*

2. **B — nslookup.** It queries DNS, the right tool for a name-resolution theory. *(A cable tester/loopback plug are physical; a Wi-Fi analyzer is wireless.)*

3. **B — bandwidth saturation or a duplex mismatch.** Many users at once points to a shared cause. *(A single DNS record, one weak signal, or one PC's APIPA wouldn't slow everyone.)*

4. **A — low RSSI (distance/attenuation).** Fine near the router, bad far away = weak signal. *(Not DNS, DHCP, or cache.)*

5. **C — Document.** Every scenario ends by writing down the problem, action, and outcome. *(Identify is first; testing/escalating are earlier steps.)*

6. **False.** Always verify after a fix — otherwise you don't know it actually worked, and the problem may still be there.

7. **B — Verify the name resolves, then document.** Confirm the fix, then record it. *(Doing nothing, rebooting the switch, or escalating are all wrong here.)*

8. **Matching:** **No internet, one PC → B** (ipconfig — check for 169.254); **Name won't load → A** (nslookup); **Wi-Fi drops far away → C** (netsh wlan show interfaces).

9. **Theory (theory of probable cause).** The test tool must match your theory, or the test proves nothing.

10. **Scenario —** The connection works (IP + ping to 8.8.8.8 succeed) but names fail — a **DNS** problem. Next tool: **nslookup** (then check the DNS server and run `ipconfig /flushdns`). *(Accept "DNS — nslookup.")*

---

## Worksheet answers

### Fill in the blank (`wb-14-07-fill-in-the-blank.md`)
1. identify · 2. theory · 3. test · 4. document · 5. APIPA · 6. DHCP · 7. DNS · 8. nslookup · 9. duplex mismatch · 10. RSSI

### Matching (`wb-14-07-matching.md`)
**Part 1:** 1 → D (ipconfig) · 2 → A (nslookup) · 3 → B (netsh) · 4 → C (pathping/port stats)
**Part 2:** 5 → G (no DHCP/APIPA) · 6 → E (DNS) · 7 → F (low RSSI/attenuation)

### Label the diagram (`wb-14-07-label-the-diagram.md`)
a. document · b. APIPA · c. DNS · d. duplex mismatch · e. RSSI

### Short answer (`wb-14-07-short-answer.md`) — model answers
1. The seven-step method stays the same; the theory you form and the tool you test with change per problem.
2. Theory: no DHCP (APIPA). Test: run `ipconfig` and see the 169.254 address; try to renew/reach DHCP.
3. Theory: DNS. Test: `nslookup` the name (and confirm `ping 8.8.8.8` works but the name fails).
4. A single PC's fault would affect only that PC; everyone slow at once points to a shared link/uplink (saturation or a duplex mismatch).
5. Weak signal (low RSSI) from distance and walls (attenuation), or channel overlap.
6. Because a mismatched tool tests the wrong thing — the result won't confirm or rule out your theory.
7. It records the problem and fix so the next person (and future you) doesn't repeat the work, and it builds a history.

### Vocabulary review (`wb-14-07-vocabulary-review.md`)
- **APIPA** — a 169.254 self-assigned address when no DHCP answers.
- **DHCP** — the service that hands out IP settings.
- **DNS** — turns names into IP addresses.
- **nslookup** — a command that asks DNS for a name's IP.
- **Duplex mismatch** — one side full, one half; errors and slowness.
- **RSSI** — how strong a received Wi-Fi signal is.
- **Document (step 7)** — write down the problem, actions, and outcome.

**Part 2 (seven steps):** identify the problem → establish a theory of probable cause → test the theory → establish a plan of action → implement the solution (or escalate) → verify full system functionality → document.
**Part 3:** 1. no DHCP / APIPA · 2. DNS · 3. saturation / duplex mismatch · 4. low RSSI

---
_NetworkAcademy+ · Answer Key · CompTIA Network+ N10-009 · NA-M14-L07 · Module 14_
