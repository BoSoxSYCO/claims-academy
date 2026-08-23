# Answer Key — Lesson NA-M08-L07 "IPv6: Why It Exists and How to Read It"

> 🔒 **Instructor / self-check only.** Covers Quiz 8.7.Q and Worksheets 8.7.A–8.7.G.

**In one line:** **IPv6** exists because IPv4 (32-bit) ran out; it is **128 bits**, eight **hextets** of hex with colons. Shorten by **dropping leading zeros** and using **`::` once** for a run of zero groups. Know **::1** (loopback), **::** (unspecified), **fe80::** (link-local), **2000–3fff** (global unicast).

---

## Quiz 8.7.Q — Knowledge Check (10 pts)

1. **B** — IPv6 was created because IPv4 addresses ran out.
2. **C** — IPv6 is 128 bits.
3. **B** — Eight groups of four hexadecimal digits.
4. **A** — 2001:db8::ff00:42:8329 (drop leading zeros; one `::` for the zero run).
5. **B** — ::1 is the loopback address.
6. **False.** Good answer: `::` may be used only once, or a reader couldn't tell how many zero groups each stands for.
7. **B** — fe80:: is a link-local address.
8. ::1 → **C** (loopback), fe80::1 → **A** (link-local), 2001:db8::1 → **B** (global unicast).
9. **leading**.
10. It's a **link-local** address (fe80::). It only works on the device's own link and is **not internet-routable**, so with only that address the device can't reach the internet (it never got a global/public address, e.g., DHCP/router advertisement failed).

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 8.7.A — Fill-in-the-blank (20 pts, 2 each)

1. 128 2. hex 3. eight 4. hextet 5. colons 6. leading 7. once 8. ::1 9. fe80 10. multicast.
**Challenge (+2):** `::` stands for "however many zero groups are missing to make eight"; two of them would be ambiguous — you couldn't tell how many zeros each represents.

## Worksheet 8.7.B — Matching (20 pts)

1→C, 2→A, 3→B, 4→E, 5→D, 6→F, 7→G, 8→H.
**Explain (+2):** any correct reason.

## Worksheet 8.7.C — Shorten the address (20 pts, 4 each)

Full `2001:0db8:0000:0000:0000:00a3:0000:1234`.
1. db8 2. a3 3. **2001:db8::a3:0:1234** 4. **3** groups.
**Q5:** you compress the **longest** run (the three zeros); the lone zero later is a single group, and `::` may be used only once. **Bonus:** `2001:db8::a3::1234` is **invalid** — two `::` are ambiguous.

## Worksheet 8.7.D — Short answer (20 pts, 5 each)

1. IPv6 exists because IPv4's ~4.3 billion (32-bit) addresses ran out; IPv6 is 128-bit, giving vastly more (~3.4×10^38).
2. `fe80::1`.
3. `2001:db8::abcd:0:1000` (Rule 1 → 2001:db8:0:0:0:abcd:0:1000; compress the three-zero run).
4. `::1` → loopback; `fe80::5` → link-local; `2001:db8::10` → global unicast (public).

## Worksheet 8.7.E — Hands-on observation (25 pts)

- Step 1: IPv6 line present *(5)*.
- Step 2: fe80:: link-local found *(5)*.
- Step 3: `%number` interface ID noted (not part of the address) *(5)*.
- Step 4: sample shortens to `fe80::204:61ff:fe9d:f156` *(5)*.
- Step 5: ::1 = loopback, fe80:: = link-local *(5)*.

## Worksheet 8.7.F — Vocabulary review (20 pts)

- **Part A:** IPv6 = the 128-bit address system replacing IPv4; Hextet = one 4-hex-digit group (16 bits); Double colon = shorthand for one run of zero groups (used once); Link-local address = an fe80:: address a device makes for its own link.
- **Part B:** 5. ::1 6. 128 7. global unicast (public).
- **Part C:** any correct sentences.
- **Part D:** hex is compact — four hex digits stand for 16 bits, so 128 bits fit in eight short groups instead of a long decimal string.

## Worksheet 8.7.G — Reflection (10 pts)

Completion credit — honest answers, no wrong response.

---
_NetworkAcademy+ · Answer Key 8.7 · CompTIA Network+ N10-009 · Instructor materials_
