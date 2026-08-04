# Answer Key — Lesson NA-M07-L06 "First Login: Console vs. Web Management"

> 🔒 **Instructor / self-check only.** Covers Quiz 7.6.Q and Worksheets 7.6.A–7.6.G.

**In one line:** Two doors into a managed switch. **Console** = **out-of-band** (direct cable, terminal at 9600 8-N-1, always works → the **first** login). **Web** = **in-band** (browser to the switch's IP, easy, needs a working network).

---

## Quiz 7.6.Q — Knowledge Check (10 pts)

1. **B** — The console (out-of-band) works even with no network. (Web, SSH, Telnet are in-band.)
2. **B** — In-band = over the network (web, SSH). (A console is out-of-band.)
3. **B** — A new switch has no IP yet, so a browser can't reach it; the console needs no IP.
4. **B** — A terminal emulator (PuTTY, Tera Term) shows the switch's text screen.
5. **B** — A blank/garbled screen is almost always the wrong baud rate (or COM port).
6. **False.** Good answer: out of the box the switch has no IP address, so a browser cannot reach it — you must use the console first.
7. **B** — "9600 8-N-1" is the serial console settings (speed, data bits, parity, stop bits).
8. Console cable → **C**, Baud rate → **A**, Web management → **B**.
9. **in-band**.
10. Use the **console** (out-of-band) — it does not rely on the network, so it still works when the network is down.

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 7.6.A — Fill-in-the-blank (20 pts, 2 each)

1. console 2. web 3. out-of-band 4. in-band 5. terminal 6. baud 7. 9600 8. IP 9. browser 10. first.
**Challenge (+2):** a brand-new switch has no IP address yet, so a browser has nothing to connect to — you must set it up by console first.

## Worksheet 7.6.B — Matching (20 pts)

1→C, 2→D, 3→B, 4→E, 5→A, 6→G, 7→F, 8→H.
**Explain (+2):** any correct reason.

## Worksheet 7.6.C — Label the two doors (20 pts, 4 each)

1. Console 2. out-of-band 3. Web 4. in-band 5. IP.
**Why (+2):** the console — a new switch has no IP, and the console works with no network, so the first setup uses it.

## Worksheet 7.6.D — Short answer (20 pts)

1. Out-of-band = managing off the network, over a direct console cable; in-band = managing over the network itself (web, SSH). *(idea /3, why /2)*
2. A new switch has no IP address, so a browser can't reach it; the console needs no IP and always works. *(idea /3, why /2)*
3. A **console cable**, a **terminal emulator** (PuTTY/Tera Term), and the right **baud rate** (e.g., 9600, i.e., 9600 8-N-1). *(idea /3, why /2)*
4. The wrong **baud rate** (or COM port); fix it by setting the speed to the switch's value (commonly 9600) and choosing the correct COM port. *(idea /3, why /2)*

## Worksheet 7.6.E — Hands-on observation (25 pts)

- Step 1: console cable connected *(5)*.
- Step 2: COM port identified in Device Manager *(5, `[TO VERIFY ON HARDWARE]`)*.
- Step 3: PuTTY set to Serial, speed 9600 *(5, `[TO VERIFY ON HARDWARE]`)*.
- Step 4: switch text appears on Enter (or troubleshoot baud/COM) *(5)*.
- Step 5: out-of-band; works because it does not use the network *(5)*.

## Worksheet 7.6.F — Vocabulary review (20 pts)

- **Part A:** Console cable = direct laptop-to-switch cable into the console port; Terminal emulator = program that shows the switch's text screen; Out-of-band management = managing off the network (console); In-band management = managing over the network (web, SSH).
- **Part B:** 5. baud rate 6. web management (GUI) 7. out-of-band (console).
- **Part C:** any correct sentences (e.g., "A blank screen usually means the baud rate is wrong").
- **Part D:** the **console** door uses the console port.

## Worksheet 7.6.G — Reflection (10 pts)

Completion credit — honest answers, no wrong response.

---
_NetworkAcademy+ · Answer Key 7.6 · CompTIA Network+ N10-009 · Instructor materials_
