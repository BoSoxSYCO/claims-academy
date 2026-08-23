# Answer Key — Lesson NA-M07-L05 "Meet the Dell PowerConnect 3424 (Managed Switch)"

> 🔒 **Instructor / self-check only.** Covers Quiz 7.5.Q and Worksheets 7.5.A–7.5.G.

**In one line:** A **managed** switch (the Dell 3424) can be logged into and configured; an **unmanaged** switch just forwards frames. Front panel = **24 access ports (10/100)** · faster **uplink/Gigabit** ports (some with an **SFP** slot) · a management-only **console port** · status **LEDs**.

---

## Quiz 7.5.Q — Knowledge Check (10 pts)

1. **B** — A managed switch lets you log in and configure it. (A, C, D are true of any switch, not just managed.)
2. **B** — An unmanaged switch just forwards frames with no settings. (A is a managed switch; C/D are false.)
3. **C** — The Dell 3424 has 24 access ports (10/100).
4. **B** — The console port is for management (the first login), not network traffic, power, or Wi-Fi.
5. **B** — An SFP slot holds a plug-in module, often for fiber.
6. **False.** Good answer: the console port is for management only, not network traffic, so a normal network cable will not give a working link.
7. **B** — An uplink port connects the switch up to a router or core switch, and is often faster.
8. Access port → **B**, Console port → **A**, SFP slot → **C**.
9. **managed**.
10. **No**, an unmanaged switch would not work. You need a **managed** switch, because only a managed switch lets you create VLANs and watch (monitor) traffic.

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 7.5.A — Fill-in-the-blank (20 pts, 2 each)

1. managed 2. unmanaged 3. 24 4. access 5. uplink 6. console 7. SFP 8. fiber 9. LEDs 10. configure.
**Challenge (+2):** the console port is for management only (a serial link), not network traffic, so a normal cable will not create a working network link there.

## Worksheet 7.5.B — Matching (20 pts)

1→C, 2→E, 3→A, 4→F, 5→G, 6→B, 7→D, 8→H.
**Explain (+2):** any correct reason.

## Worksheet 7.5.C — Label the front panel (20 pts, 4 each)

1. access 2. uplink 3. SFP 4. console 5. LEDs.
**Why (+2):** the console port is a management-only port (used for the first login), so it is kept apart from the access ports that carry normal traffic.

## Worksheet 7.5.D — Short answer (20 pts)

1. A managed switch lets you log in and configure it (VLANs, monitoring, port settings); an unmanaged switch has no settings and just forwards frames. *(idea /3, why /2)*
2. The console port is for the first login / management; a normal network cable does not belong there because it carries no network traffic — it is a serial management port. *(idea /3, why /2)*
3. An access port is where an end device (a PC) plugs in; an uplink port connects the switch up to a router or core switch and is usually faster. *(idea /3, why /2)*
4. An SFP slot holds a plug-in module (often fiber, or a special copper link); it is handy for long uplinks or when you need to choose copper vs. fiber. *(idea /3, why /2)*

## Worksheet 7.5.E — Hands-on observation (25 pts)

- Step 1: power + system LED state noted *(5)*.
- Step 2: 24 access ports; speed = 10/100 *(5)*.
- Step 3: uplink/Gigabit count noted; SFP present or not *(5, `[TO VERIFY ON HARDWARE]`)*.
- Step 4: console port found; for management (only) *(5)*.
- Step 5: labeled sketch done *(5)*.

## Worksheet 7.5.F — Vocabulary review (20 pts)

- **Part A:** Managed switch = one you can log into and configure; Unmanaged switch = no settings, just forwards frames; Console port = management-only port for the first login; SFP = a slot that holds a plug-in module, often fiber.
- **Part B:** 5. access port 6. uplink port 7. managed switch.
- **Part C:** any correct sentences.
- **Part D:** No — a managed switch still reads MAC addresses and forwards frames the same way; "managed" only **adds** the ability to log in and configure it.

## Worksheet 7.5.G — Reflection (10 pts)

Completion credit — honest answers, no wrong response.

---
_NetworkAcademy+ · Answer Key 7.5 · CompTIA Network+ N10-009 · Instructor materials_
