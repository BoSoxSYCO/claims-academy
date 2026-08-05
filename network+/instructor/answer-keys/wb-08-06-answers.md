# Answer Key — Lesson NA-M08-L06 "Subnetting Practice and Shortcuts"

> 🔒 **Instructor / self-check only.** Covers Quiz 8.6.Q and Worksheets 8.6.A–8.6.G.

**In one line:** **Powers of 2** (1→256) give counts. The **magic number** (block size) lets you **round the interesting octet down** to find any subnet. **Size a mask**: hosts → 2^bits − 2 ≥ needed; subnets → 2^borrowed ≥ needed. Usable hosts: /30→2, /29→6, /28→14, /27→30, /26→62, /25→126, /24→254.

---

## Quiz 8.6.Q — Knowledge Check (10 pts)

1. **C** — 2^6 = 64.
2. **B** — The magic number is the block size.
3. **B** — Block 64; 100 rounds down to 64 → 192.168.1.64.
4. **B** — Round down to the nearest multiple of the block size.
5. **B** — 2^7 − 2 = 126 ≥ 100 → 7 host bits → /25. (/26 gives only 62.)
6. **False.** Good answer: you don't list them — just round the interesting octet down to the nearest block size (the magic number).
7. **B** — 2^3 = 8 ≥ 6 → borrow 3 bits.
8. /30 → **B** (2), /29 → **C** (6), /28 → **A** (14).
9. **128**.
10. `10.5.5.200/27`: block 32, 200 rounds down to 192 → subnet **10.5.5.192**, broadcast **10.5.5.223**, hosts .193–.222 → **.200 is usable**.

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 8.6.A — Fill-in-the-blank (20 pts, 2 each)

1. powers 2. 256 3. 128 4. magic 5. down 6. multiple 7. 64 8. 2 9. borrowed 10. octet.
**Challenge (+2):** the subnet starts at or below the address, so you round *down* to the block boundary that the address falls within — rounding up would land on the next subnet.

## Worksheet 8.6.B — Matching (20 pts)

1→B, 2→D, 3→E, 4→A, 5→C, 6→G, 7→F, 8→H.
**Explain (+2):** any correct reason.

## Worksheet 8.6.C — Label the round-down (20 pts, 4 each)

1. 64 2. 128 3. 191 4. 129 5. 190.
**Why (+2):** 150 sits between the block boundaries 128 and 192, so it rounds down to 128 — the start of the block it falls inside.

## Worksheet 8.6.D — Short answer (20 pts, 5 each)

1. 192.168.7.200/27: block **32**; 200 → 192 → Subnet **192.168.7.192**, Broadcast **192.168.7.223**.
2. 172.20.4.45/28: block 16; 45 → 32 → Subnet **172.20.4.32**, Hosts **.33 – .46** (broadcast .47).
3. **500** hosts → 2^9 − 2 = 510 ≥ 500 → 9 host bits → **/23**.
4. **12** subnets from /24 → 2^4 = 16 ≥ 12 → borrow **4** bits → **/28**.

## Worksheet 8.6.E — Hands-on observation (25 pts)

- Step 1: powers of 2 correct *(5)*.
- Step 2: a) 192.168.1.128 · b) 10.0.0.95 · c) .17–.30 · d) /25 · e) /27 *(10)*.
- Step 3: self-scored against key *(5)*.
- Step 4: own subnet found by rounding down *(5)*.
- (Accept any valid own-IP result; the drill answers are fixed as above.)

## Worksheet 8.6.F — Vocabulary review (20 pts)

- **Part A:** Powers of 2 = the doubling sequence 1…256 used for counts; Magic number = a nickname for the block size, used to find a subnet fast; Block size = 256 − the mask's interesting octet; Broadcast address = last address of a subnet (host bits all 1).
- **Part B:** 5. 64 6. 16 7. 62.
- **Part C:** any correct sentences.
- **Part D:** the **magic number**.

## Worksheet 8.6.G — Reflection (10 pts)

Completion credit — honest answers, no wrong response.

---
_NetworkAcademy+ · Answer Key 8.6 · CompTIA Network+ N10-009 · Instructor materials_
