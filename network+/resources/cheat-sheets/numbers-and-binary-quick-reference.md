# Cheat Sheet — Numbers & Binary

> A printable quick reference for **Module 03**. Grows as the module's lessons are published.

---

## Why 1s and 0s (Lesson 03-01)

- A computer = **billions of switches**, each **on** or **off**.
- **on = 1 · off = 0.** A single 1 or 0 is a **bit**.
- Two states are used because they're **simple and reliable** (easy to tell apart).
- This two-digit system is **binary** ("bi" = two).
- **Everything** — numbers, letters, pictures, addresses — is patterns of 1s and 0s.

```
Switch:  ON  OFF  ON  ON  OFF  OFF  ON  OFF
Bit:      1   0    1   1   0    0    1   0     ← 8 bits = 1 byte (next lesson)
```

- **See it yourself:** Calculator → **Programmer** mode → **DEC** → type a number → read the **BIN** row.
  - `5` → `101` · `10` → `1010` · `255` → `1111 1111`
- **Remember:** binary `101` and decimal `5` are the **same number**, written two ways.

> Why this matters: IP addresses, subnet masks, and MAC addresses are all binary underneath (Modules 07–08).

---

## Bytes & place values (Lesson 03-02)

- **8 bits = 1 byte.**
- **Memorize the place values (right → left, values double):**

```
 128   64   32   16    8    4    2    1
```

- **Read a byte:** add each place value where the bit is **1**.

```
 128  64  32  16   8   4   2   1
  0    0   0   0   1   0   1   0     →  8 + 2 = 10
```

- **All 1s = 255** (128+64+32+16+8+4+2+1). A byte counts **0 to 255**.
- Examples: `00001010`=10 · `11000000`=192 · `10100000`=160 · `11111111`=255.
- ⭐ These eight values are the key to **subnetting** (Module 08) — learn them cold.

---
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 03_
