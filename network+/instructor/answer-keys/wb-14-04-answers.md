# Answer Key — NA-M14-L04 "Hardware Tools: Cable Testers and Loopbacks"

> 🔒 **Instructor / self-check only.** Keep separate from student copies.
> **Module:** 14 · **Unit:** 11 · **Objective:** 5.5

---

## Quiz answers (`quiz-14-04-knowledge-check.md`)

1. **B — opens, shorts, and miswires.** A cable tester checks each wire end to end. *(Wi-Fi channel, DNS, and IP are software/other tools.)*

2. **B — checking the cable meets a speed standard.** A certifier rates the cable (crosstalk, attenuation, category). *(A/C/D are unrelated.)*

3. **A — trace/find a specific cable.** The generator sends a tone; the probe beeps near that cable. *(Not Wi-Fi speed, backup, or blocking.)*

4. **A — a port or NIC by looping it back.** The plug sends the port's transmit back to its receive. *(Not internet speed, DNS cache, or fiber distance.)*

5. **False.** A loopback **plug** is a physical adapter that tests a port; **127.0.0.1** is a software self-test **address**. Same idea (self-test), different thing (hardware vs. software).

6. **B — OTDR.** It reports the distance to a fiber break or fault. *(A cable tester is copper; Wi-Fi analyzer is wireless; a toner traces cables.)*

7. **A — signal strength and busy channels.** A Wi-Fi analyzer maps wireless signal and channel use. *(Not the MAC table, cable length, or gateway.)*

8. **Matching:** **Cable tester → B** (opens/shorts/miswires); **Toner probe → D** (trace a specific cable); **Loopback plug → A** (test a port by looping back); **OTDR → C** (distance to a fiber break).

9. **Light meter.** A light meter (power meter) measures how much light arrives on a fiber link.

10. **Scenario —** Use a **cable tester** — it checks the cable end to end for an open, short, or miswire (the likely cause when the port and settings are fine). *(Accept "cable tester — check the cable for a break/short"; a loopback plug to rule out the port is also reasonable.)*

---

## Worksheet answers

### Fill in the blank (`wb-14-04-fill-in-the-blank.md`)
1. cable tester · 2. cable certifier · 3. tone generator · 4. toner probe · 5. loopback plug · 6. 127.0.0.1 · 7. OTDR · 8. light meter · 9. Wi-Fi analyzer · 10. open

### Matching (`wb-14-04-matching.md`)
**Part 1:** 1 → B (cable tester) · 2 → A (tone generator + probe) · 3 → D (loopback plug) · 4 → C (OTDR)
**Part 2:** 5 → F (cable certifier) · 6 → G (light meter) · 7 → E (Wi-Fi analyzer)

### Label the diagram (`wb-14-04-label-the-diagram.md`)
a. cable tester · b. cable certifier · c. tone generator · d. loopback plug · e. OTDR · f. light meter · g. Wi-Fi analyzer

### Short answer (`wb-14-04-short-answer.md`) — model answers
1. Opens (broken wires), shorts (wires touching), and miswires (wires in the wrong order).
2. A certifier also measures whether the cable meets a full speed standard (crosstalk, attenuation, category rating); a basic tester only checks the wiring is correct.
3. The tone generator sends a tone down a cable; the toner probe beeps when it's near that cable, so you can trace it through a bundle or wall.
4. A loopback plug is a physical adapter that loops a port's transmit back to its receive to test the port/NIC; 127.0.0.1 is a software address that tests the computer's own network stack.
5. The distance to a break or fault in the fiber.
6. Wireless signal strength and which channels are busy (to pick a clear channel or find weak spots).
7. Because the fault may be physical (a bad cable, dead port, or fiber break) that software tools can't see or fix.

### Vocabulary review (`wb-14-04-vocabulary-review.md`)
- **Cable tester** — finds opens, shorts, and miswires in a cable.
- **Cable certifier** — also checks the cable meets a speed standard.
- **Tone generator** — sends a tone down a cable so it can be traced.
- **Toner probe** — the wand that beeps to find that cable.
- **Loopback plug** — a physical adapter that loops a port back to test it.
- **OTDR** — a fiber tool that reports the distance to a break.
- **Light meter** — measures how much light arrives on a fiber.
- **Wi-Fi analyzer** — shows wireless signal strength and busy channels.

**Part 3:** A loopback **plug** is a physical adapter that tests a port by looping it back; the loopback **address** 127.0.0.1 is a software self-test of the computer's own networking.

---
_NetworkAcademy+ · Answer Key · CompTIA Network+ N10-009 · NA-M14-L04 · Module 14_
