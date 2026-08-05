---
id: NA-M08-L07
module: 08
lesson: 07
title: "IPv6: Why It Exists and How to Read It"
unit: 5
objective_ids: ["1.4"]
reading_level_target: 7
status: Published
est_minutes: 28
equipment_tier: E1
prerequisites: ["NA-M03-L04", "NA-M08-L01"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-04"
---

# [Module 08 · Lesson 07] IPv6: Why It Exists and How to Read It

> **Unit:** Unit 5 — IP Addressing & Subnetting · **Time:** ~28 min · **Equipment:** E1 (your Windows laptop)
> **You'll need first:** Lesson 03-04 (hexadecimal) and Lesson 08-01 (what an IP address is).

You've mastered IPv4. But the world ran out of IPv4 addresses, so a bigger system exists: **IPv6**. Those long addresses full of colons look scary — they're not. This lesson explains **why** IPv6 exists and teaches you two simple rules to **read** and shorten any IPv6 address.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain **why** IPv6 was created (IPv4 ran out).
- [ ] Describe IPv6's format: **128 bits**, eight **hextets** of hex, colon-separated.
- [ ] Shorten an address with the two rules (**drop leading zeros**, **`::` once**).
- [ ] Recognize **loopback (::1)**, **link-local (fe80::)**, and **global unicast**.

---

## 2. Introduction — why this matters

Think about phone numbers. When an area only had 7-digit numbers, it could hold a few million lines. As more people got phones, areas ran out and had to add digits and area codes to make room for everyone.

The internet hit the same wall. An IPv4 address is **32 bits** — about **4.3 billion** addresses (Lesson 08-02). That sounded huge in the 1980s, but with phones, laptops, cameras, doorbells, and cars all online, we **ran out**. IPv4 exhaustion is real.

**IPv6** is the fix. It uses **128 bits** — that's about **340 undecillion** addresses (a 3 followed by 38 digits). Enough for every grain of sand to have billions of its own. IPv6 exists so the internet never runs out again.

🎯 **Exam tip:** Network+ expects you to know IPv6 is 128-bit, written in hex with colons, and to shorten an address using the two rules. It also tests loopback (::1) and link-local (fe80::).

🔧 **Lab link:** Your laptop already has an IPv6 address — you'll find it with `ipconfig` in the lab.

---

## 3. Simple explanation

### The format: 128 bits, eight hextets of hex
An IPv6 address is **128 bits**, written as **eight groups** of **four hexadecimal digits** (Lesson 03-04), separated by **colons**. Each group is called a **hextet** (16 bits). For example:

```
   2001:0db8:0000:0000:0000:ff00:0042:8329
   └──┘ └──┘ └──┘ └──┘ └──┘ └──┘ └──┘ └──┘
    1    2    3    4    5    6    7    8     ← eight hextets
```

That's long. So there are two rules to shorten it.

### Rule 1 — Drop leading zeros in each hextet
In each group, remove zeros at the **front** (not the middle or end):

- `0db8` → `db8`
- `0000` → `0`
- `0042` → `42`
- `8329` → `8329` (no leading zero to drop)

After Rule 1:
```
   2001:db8:0:0:0:ff00:42:8329
```

### Rule 2 — Replace one run of all-zero hextets with `::`
One run of consecutive **all-zero** groups can be replaced by a **double colon** (`::`). You may do this **only once** in an address (or a reader couldn't tell how many zeros it stands for).

```
   2001:db8:0:0:0:ff00:42:8329   →   2001:db8::ff00:42:8329
```

The `::` stands for "the missing zero groups needed to make eight." Both forms mean the **same** address.

### A few addresses to recognize
- **Loopback: `::1`** — the IPv6 "yourself" address (like 127.0.0.1 in IPv4).
- **Unspecified: `::`** — all zeros; "no address yet."
- **Link-local: `fe80::…`** — an address a device makes **itself** to talk on its own link (its local network). Every IPv6 device has one. It always starts **fe80**.
- **Global unicast: starts `2000`–`3fff`** — a normal **public**, internet-routable address (the `2001:db8::` block above is a documentation example).

### Two quick differences from IPv4
- **No broadcast.** IPv6 has no broadcast address; it uses **multicast** (one-to-many) instead.
- **Usually no NAT.** There are so many addresses that devices often get a real public one (more on NAT in Lesson 08-08).

> **The big idea:** **IPv6** exists because IPv4 (32-bit, ~4.3 billion) ran out. IPv6 is **128 bits**, written as eight **hextets** of hex with colons. Shorten it by **dropping leading zeros** and replacing **one** run of zero groups with **`::`**. Know **::1** (loopback) and **fe80::** (link-local).

💡 **Tip:** Only **leading** zeros go. `ff00` stays `ff00` — you never drop the zeros in the middle or end of a group.

⚠️ **Watch out:** You can use `::` **only once**. `2001:0:0:1:0:0:0:1` becomes `2001:0:0:1::1` (compress the longer run), not `2001::1::1`.

---

## 4. Real-world analogy

> **"IPv6 is like adding digits to phone numbers when a city runs out."**

| Phones | IP addresses |
|--------|--------------|
| 7-digit numbers run out | IPv4 (32-bit) ran out |
| Add digits + area codes | IPv6 (128-bit) — vastly more room |
| Write long numbers with dashes | IPv6 groups split by colons |
| Drop a leading 0 in an area code | Drop leading zeros in a hextet |
| "etc." for a long run of zeros | `::` for a run of zero groups |

The point of both moves is the same: make enough room so nobody is ever turned away.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **IPv6** | I-P-v-six | The 128-bit address system, made to replace the limited IPv4. |
| **Hextet** | HEX-tet | One of the eight 4-hex-digit groups in an IPv6 address (16 bits). |
| **Double colon (`::`)** | | A shorthand that replaces one run of all-zero hextets — used only once. |
| **Link-local address** | | An address (IPv6 `fe80::…`) a device makes itself to talk on its own link. |
| **Global unicast address** | | A public, internet-routable IPv6 address (starts 2000–3fff). |

---

## 6. ASCII diagram

```
   IPv6 = 128 BITS = 8 HEXTETS OF HEX, COLON-SEPARATED

   2001 : 0db8 : 0000 : 0000 : 0000 : ff00 : 0042 : 8329

   RULE 1 — drop leading zeros in each group:
   2001 : db8  : 0    : 0    : 0    : ff00 : 42   : 8329

   RULE 2 — one run of zero groups → ::  (once only)
   2001 : db8  ::                    ff00 : 42   : 8329
   =  2001:db8::ff00:42:8329

   RECOGNIZE:  ::1 = loopback    ::  = unspecified
               fe80:: = link-local    2000–3fff = global unicast (public)
```

_128 bits · eight hex groups · drop leading zeros · one `::` for a run of zeros._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-08-07-ipv6-01.svg` (created and stored in this module's `assets/`)
> **Shows:** one IPv6 address shortened in two labeled steps (drop leading zeros, then `::`), plus a small key of address types (::1, ::, fe80::, global unicast).
> **Key elements & labels:** eight hextets; Rule 1 result; Rule 2 result; final short form; loopback/unspecified/link-local/global-unicast key.
> **Color meaning:** the zero groups being replaced by `::` are labeled in text ("run of zero groups"), not shown by color alone.
> **Flow direction:** top-to-bottom, full → Rule 1 → Rule 2 → final.
> **Alt text (required):** "An IPv6 address 2001:0db8:0000:0000:0000:ff00:0042:8329 shortened in two steps. Rule one drops leading zeros in each of the eight hextets, giving 2001:db8:0:0:0:ff00:42:8329. Rule two replaces the one run of all-zero groups with a double colon, giving the final 2001:db8::ff00:42:8329. A key lists address types: colon-colon-1 is loopback, colon-colon alone is unspecified, fe80 colon-colon is link-local, and addresses starting 2000 to 3fff are global unicast, meaning public."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-08-07-ipconfig-ipv6-01.jpg`
> An `ipconfig` showing the IPv6 Address and Link-local IPv6 Address (fe80::) lines. Alt text: "The ipconfig output showing a link-local IPv6 address starting fe80 and a full IPv6 address."
>
> **Photo 2** — `img-08-07-ipv6-label-01.jpg`
> A device or router label listing an IPv6 address. Alt text: "A device label printed with an IPv6 address in hex groups separated by colons."

---

## 9. Hands-on lab

**Goal:** find your laptop's own IPv6 addresses, and shorten a sample address by hand.
**Why:** IPv6 stops looking scary the moment you read your own and shorten one yourself.

**You will need**
- Your Windows laptop (Equipment tier **E1**). Pencil and paper. Estimated time: 12 min.

⚠️ **Before you start (safety):** Read-only `ipconfig` plus a paper exercise. Nothing changes.

### 9a. Step-by-step instructions

1. Open the **Command Prompt** and run `ipconfig`.
2. Find the **Link-local IPv6 Address** line — it starts with **fe80::**. Write it down.
3. If shown, also note the full **IPv6 Address** line.
4. On paper, shorten this sample with the two rules:
   `fe80:0000:0000:0000:0204:61ff:fe9d:f156`
5. Apply Rule 1 (drop leading zeros), then Rule 2 (`::` for the zero run).

### 9b. Expected results

- Your link-local address starts **fe80::** (Windows adds `%` and a number — that's the interface ID; ignore it).
- The sample shortens to: **`fe80::204:61ff:fe9d:f156`**.
- ✅ **You did it if:** you found your own fe80 address and shortened the sample correctly.

### 9c. Verify it worked

1. Count the groups in your shortened sample and confirm `::` fills the missing zero groups to reach eight.
2. Say: "`::1` would be loopback; my `fe80::` address is link-local."

### 9d. Reset / roll back

Nothing changed — read-only command and paper only. Close the window when done.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Dropping middle/trailing zeros | Wrong address | Drop only **leading** zeros in a group |
| Using `::` twice | Ambiguous, invalid | Use `::` **once**; compress the longest zero run |
| Confusing fe80 with public | Wrong address type | **fe80::** is link-local, not internet-routable |
| Thinking IPv6 has broadcast | Wrong concept | IPv6 uses **multicast**, not broadcast |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| No IPv6 shown | IPv6 disabled or not issued | Check the adapter settings; link-local (fe80) should still appear |
| `::` won't shorten more | Only one run allowed | Compress the **longest** zero run once |
| A `%12` after fe80 | Windows interface ID (zone) | It's normal; it names the interface, not part of the address |
| Two colons look wrong | That's the shorthand | `::` is valid — it stands for a run of zero groups |

---

## 12. Lesson summary

- **IPv6** exists because IPv4 (32-bit, ~4.3 billion) **ran out**; IPv6 is **128 bits** — vastly more.
- Format: **eight hextets** of four hex digits, **colon**-separated.
- **Rule 1:** drop **leading** zeros in each group. **Rule 2:** replace **one** run of zero groups with **`::`**.
- Recognize **::1** (loopback), **::** (unspecified), **fe80::** (link-local), **2000–3fff** (global unicast/public).

**One-sentence recap:** IPv6 is a 128-bit, hex-and-colon address made to replace the exhausted IPv4, and you read it by dropping leading zeros and using `::` once for a run of zero groups.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-08-07-fill-in-the-blank.md`
2. **Matching** — `wb-08-07-matching.md`
3. **Label the diagram** — `wb-08-07-label-the-diagram.md` (shorten an address)
4. **Short answer** — `wb-08-07-short-answer.md`
5. **Hands-on observation** — `wb-08-07-hands-on-observation.md` (find your fe80 address)
6. **Vocabulary review** — `wb-08-07-vocabulary-review.md`
7. **Reflection** — `wb-08-07-reflection.md`

**Quick written warm-up (do this now):** How many bits is IPv6? What does `::1` mean?

Bits: ____________  `::1`: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-08-07-knowledge-check.md`.)

1. Why was **IPv6** created? *(Objective: why)*
   - A) To be shorter than IPv4
   - B) Because IPv4 addresses ran out
   - C) To remove hex
   - D) To add broadcast

2. How many bits is an IPv6 address? *(Objective: format)*
   - A) 32
   - B) 64
   - C) 128
   - D) 256

3. An IPv6 address is written as eight groups of… *(Objective: format)*
   - A) decimal numbers
   - B) four hexadecimal digits
   - C) binary bytes
   - D) letters only

4. Shorten `2001:0db8:0000:0000:0000:ff00:0042:8329`. *(Objective: shorten)*
   - A) 2001:db8::ff00:42:8329
   - B) 2001:0db8::ff00::8329
   - C) 2001:db8:ff00:42:8329
   - D) 2001::db8::ff00:42:8329

5. What is **::1**? *(Objective: recognize)*
   - A) a link-local address
   - B) the loopback address
   - C) a public address
   - D) a broadcast

6. **True or false —** You may use `::` twice in one IPv6 address. Explain in one sentence. *(Objective: rules)*

7. An address starting **fe80::** is… *(Objective: recognize)*
   - A) global unicast (public)
   - B) link-local
   - C) loopback
   - D) multicast

8. **Matching —** write the letter next to each address. *(Objective: recognize)*
   - ___ ::1 &nbsp;&nbsp; ___ fe80::1 &nbsp;&nbsp; ___ 2001:db8::1
   - A) link-local &nbsp; B) global unicast (public) &nbsp; C) loopback

9. Fill in the blank: In IPv6 you may drop only the ____________ zeros in each group. *(Objective: rules)*

10. **Scenario —** A device shows only an `fe80::` address and can't reach the internet. What kind of address is that, and why can't it route to the internet? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-08-07-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-08-07-ipv6.md`. In brief:

- **Objective in one line:** learners explain why IPv6 exists and read/shorten IPv6 addresses with the two rules.
- **Common misconceptions:** dropping non-leading zeros; using `::` twice; thinking fe80 is public; expecting broadcast. Correct all.
- **Pacing:** ~28 min. Do the one shortening example both directions; then the fe80 lab.
- **How CompTIA tests it:** 128-bit hex format; the two shortening rules; ::1 and fe80::; IPv6 vs IPv4 (no broadcast).
- **Accuracy note:** the compression example and address prefixes are exact; `2001:db8::/32` is the reserved documentation range (safe to print). `ipconfig` used read-only.
- **Extension idea:** SLAAC and EUI-64 (how devices self-build addresses) for fast learners.

---

## 17. Cheat sheet

> **Quick reference — IPv6**
>
> - **Why:** IPv4 (32-bit, ~4.3 billion) ran out; **IPv6 = 128-bit** (vastly more).
> - **Format:** eight **hextets** of 4 hex digits, colon-separated.
> - **Rule 1:** drop **leading** zeros per group (`0db8`→`db8`, `0000`→`0`).
> - **Rule 2:** one run of zero groups → **`::`** (once only).
> - **Recognize:** `::1` loopback · `::` unspecified · `fe80::` link-local · `2000–3fff` global unicast (public).
> - **No broadcast** in IPv6 (uses multicast).
>
> _(Full version: `resources/cheat-sheets/ip-addressing-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **IPv6** — The 128-bit address system, made to replace the limited IPv4.
- **Hextet** — One of the eight 4-hex-digit groups in an IPv6 address (16 bits).
- **Double colon (::)** — A shorthand that replaces one run of all-zero hextets — used only once.
- **Link-local address** — An address (IPv6 fe80::…) a device makes itself to talk on its own link.
- **Global unicast address** — A public, internet-routable IPv6 address (starts 2000–3fff).

---

## 19. Homework

- **Practice:** Shorten five IPv6 addresses, then expand them back to full form.
- **Spaced review:** Redo the Lesson 03-04 flashcards on hexadecimal.
- **Preview:** Next lesson closes the module — **public vs. private** and the role of **NAT**.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I shorten an IPv6 address now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain why IPv6 exists.
- [ ] I know IPv6 is 128 bits, eight hextets of hex.
- [ ] I can shorten an address with the two rules.
- [ ] I can recognize ::1, fe80::, and global unicast.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: public vs. private and NAT.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M08-L07** — "IPv6: Why It Exists and How to Read It" · Module 08 · Unit 5_
