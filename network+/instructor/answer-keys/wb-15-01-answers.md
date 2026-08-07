# Answer Key — NA-M15-L01 "Capstone Project: Build the Whole Home Lab"

> 🔒 **Instructor / self-check only.** Keep separate from student copies.
> **Module:** 15 · **Unit:** 12 · **Objective:** 1.1 / 2.1 / 2.3 / 5.3

---

## Quiz answers (`quiz-15-01-knowledge-check.md`)

1. **B — Link light, then IP, then ping, then a name.** Test bottom-up; each success proves one more layer. *(Website first would skip the layers below it.)*

2. **A — the link light.** Layer 1 comes first; no setting helps if the physical link is dead. *(A serial number or DNS server tells you nothing about the link.)*

3. **B — APIPA; DHCP did not answer.** A 169.254 address is self-assigned when no DHCP responds. *(It is never a healthy address on this lab, and it is not a DNS issue by itself.)*

4. **B — router to switch.** The uplink joins your switch to the router (and the internet). *(The laptop-to-switch cable is the patch cable.)*

5. **B — DNS.** IPs work (8.8.8.8 replies) but names fail, so name resolution is the problem. *(Power and the link light are fine if pings succeed.)*

6. **False.** Stop at the failed stage and fix it before moving on — a broken lower layer makes every test above it fail, so continuing wastes time.

7. **B — Only add your cable; leave settings alone.** A shared switch can lock others out if you change it. *(Erasing settings or unplugging others is unsafe.)*

8. **Matching:** **No link light → B** (swap cable / try another port); **169.254 address → A** (check DHCP / reseat cable); **Names won't load → C** (nslookup, then flushdns).

9. **layer.** Fix the lowest broken layer first, then re-test upward.

10. **Scenario —** The address is **APIPA (169.254)**, so **DHCP did not answer** even though the link is up. Next: check the router/DHCP and the uplink, reseat the cable, and renew the address (`ipconfig /renew`). *(Accept "APIPA / no DHCP — check DHCP and renew.")*

---

## Worksheet answers

### Fill in the blank (`wb-15-01-fill-in-the-blank.md`)
1. uplink · 2. link light · 3. ipconfig · 4. APIPA · 5. DHCP · 6. default gateway · 7. nslookup · 8. layer · 9. router · 10. document

### Matching (`wb-15-01-matching.md`)
**Part 1:** 1 → B (router) · 2 → A (switch) · 3 → D (laptop) · 4 → C (Ethernet cable)
**Part 2:** 5 → F (no link light) · 6 → E (APIPA/DHCP) · 7 → G (DNS)

### Label the diagram (`wb-15-01-label-the-diagram.md`)
a. router · b. uplink cable · c. switch · d. patch cable · e. laptop

### Short answer (`wb-15-01-short-answer.md`) — model answers
1. Because each layer holds up the ones above it; if a lower layer is broken, every test above it fails, so bottom-up finds the real problem fast.
2. It is APIPA — a self-assigned address the laptop uses because no DHCP server answered.
3. The uplink is router→switch; the patch cable is switch→laptop.
4. Likely DNS; test with `nslookup` (and `ipconfig /flushdns`).
5. Others may share it; a wrong change can lock people out or break their connections.
6. It lets you (and the next person) rebuild or re-fix without redoing all the work; it builds a history.
7. Stop and fix it — a broken lower layer makes higher tests fail, so continuing just hides the real cause.

### Vocabulary review (`wb-15-01-vocabulary-review.md`)
- **Switch** — connects wired devices on the same local network.
- **Router** — connects your local network to the internet; often runs DHCP.
- **DHCP** — hands out IP settings automatically.
- **Default gateway** — the router address your laptop sends internet traffic to.
- **Link light** — the LED that glows when a port has a live link.
- **APIPA** — a 169.254 self-assigned address when no DHCP answers.

**Part 2 (nine stages):** gather → plan → wire → power up / link lights → get address (DHCP/ipconfig) → test by layer → check the switch → troubleshoot → document.
**Part 3 (test order):** link light → IP address (DHCP) → ping gateway → ping 8.8.8.8 → resolve a name (DNS).

### Hands-on observation (`wb-15-01-hands-on-observation.md`)
Answers are the learner's own real values. Check that: link lights are confirmed before settings; the IPv4 address is real (not 169.254); the three layer tests are recorded; and any failed stage lists a theory and a fix. All values marked `[TO VERIFY ON HARDWARE]`.

---
_NetworkAcademy+ · Answer Key · CompTIA Network+ N10-009 · NA-M15-L01 · Module 15_
