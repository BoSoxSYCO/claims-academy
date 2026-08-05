---
id: NA-M09-L02
module: 09
lesson: 02
title: "DNS: Turning Names into Numbers"
unit: 6
objective_ids: ["1.4"]
reading_level_target: 7
status: Published
est_minutes: 28
equipment_tier: E1
prerequisites: ["NA-M08-L01", "NA-M09-L01"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-04"
---

# [Module 09 · Lesson 02] DNS: Turning Names into Numbers

> **Unit:** Unit 6 — Core Network Services · **Time:** ~28 min · **Equipment:** E1 (your Windows laptop)
> **You'll need first:** Lesson 08-01 (what an IP address is) and Lesson 09-01 (DHCP gives you a DNS server).

You type `google.com`, not `142.250.72.14`. But computers route by **IP address** (Module 08), not names. So who turns the name into a number? **DNS** — the internet's phone book. This lesson shows how names become addresses, and the record types the exam expects.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what **DNS** does and **why** it matters.
- [ ] Describe the **lookup** flow from name to IP address.
- [ ] Name the common **record types** (A, AAAA, CNAME, MX, PTR).
- [ ] Use **`nslookup`** to turn a name into a number yourself.

---

## 2. Introduction — why this matters

Think about your phone's **contacts** app. You don't memorize phone numbers — you remember **names**. You tap "Mom," and the phone looks up her number and dials it. The name is for **you**; the number is for the **phone**.

The internet is the same. You remember `google.com`, `youtube.com`, `wikipedia.org` — names are easy for people. But routers and computers need **IP addresses** (Module 08) to actually connect. Something has to look up the name and return the number.

**DNS (Domain Name System)** is that phone book. Every time you visit a site, DNS quietly turns the **name** you typed into the **IP address** your computer needs — usually in a fraction of a second. Without DNS, you'd have to memorize a number for every website. The exam expects you to know how it works and its main record types.

🎯 **Exam tip:** Network+ tests DNS **record types** (A, AAAA, CNAME, MX, PTR, TXT) and the basic **name → IP** lookup. Know what each record maps.

🔧 **Lab link:** Part of **Lab D** — you'll watch DNS turn names into numbers with `nslookup`.

---

## 3. Simple explanation

### What DNS does
**DNS** turns a **domain name** (a human name like `google.com`) into an **IP address** (like `142.250.72.14`) so your computer can connect. Names for people, numbers for machines.

### The lookup flow (simplified)
When you type a name, your computer finds its IP like this:

1. **Check the cache.** Your computer keeps a short list of recent answers (its **DNS cache**). If the name is there, done.
2. **Ask a resolver.** If not cached, your computer asks a **DNS resolver** — a lookup server. (DHCP told your computer which DNS server to use — Lesson 09-01.)
3. **Walk the hierarchy.** If the resolver doesn't know, it asks up the chain: the **root** servers point to the **.com** servers, which point to the server that's authoritative for `google.com`.
4. **Return the IP.** The answer comes back, your computer **caches** it for a while, and connects.

All of that usually happens in **milliseconds**.

### Common record types
DNS stores different **records**. The exam expects these:

| Record | Maps… | Plain meaning |
|:------:|-------|---------------|
| **A** | name → **IPv4** | the main "name to number" record |
| **AAAA** | name → **IPv6** | same, but for an IPv6 address |
| **CNAME** | name → **another name** | an alias (nickname for a name) |
| **MX** | domain → **mail server** | where email for the domain goes |
| **PTR** | IP → **name** | the reverse lookup (number to name) |
| **TXT** | name → **text** | notes/verification (e.g., email security) |

**A** is the one you use most: `google.com` → an IPv4 address.

### Caching and TTL
Answers are **cached** so we don't look up the same name over and over. Each record has a **time to live (TTL)** — how long it may be cached before checking again. That's why a site change can take a little while to reach everyone.

> **The big idea:** **DNS** is the internet's phone book: it turns a **domain name** into an **IP address**. Your computer checks its **cache**, then a **resolver**, which walks **root → .com → the site's server** and returns the IP. Records include **A** (IPv4), **AAAA** (IPv6), **CNAME** (alias), **MX** (mail), and **PTR** (reverse).

💡 **Tip:** On Windows, `nslookup google.com` shows the DNS server it asked and the address(es) it got back. `ping google.com` also shows the resolved IP.

⚠️ **Watch out:** "Can't reach the site by name but its IP works" usually means a **DNS** problem, not a network-down problem. Test with `nslookup`.

---

## 4. Real-world analogy

> **"DNS is a phone book: you know the name, it gives you the number."**

| Phone book / contacts | DNS |
|-----------------------|-----|
| A person's name | A **domain name** (google.com) |
| Their phone number | The **IP address** |
| Looking up the name | A DNS **lookup** |
| Directory assistance (411) | The DNS **resolver** |
| A nickname that points to a name | A **CNAME** (alias) |
| The mail-forwarding address | An **MX** record |

You remember "Mom," not her ten digits. DNS lets you remember `google.com`, not its IP.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **DNS** | D-N-S | The service that turns names into IP addresses. |
| **Domain name** | | A human-friendly name for a site, like google.com. |
| **DNS resolver** | | A server that looks up a name and returns its IP. |
| **DNS cache** | | A short local store of recent name → IP answers. |
| **A record** | | A DNS record mapping a name to an IPv4 address. |
| **CNAME record** | SEE-name | A DNS record that points one name to another (an alias). |
| **MX record** | | A DNS record that names a domain's mail server. |

---

## 6. ASCII diagram

```
   DNS — TURNING A NAME INTO A NUMBER

   You type:  google.com          Computer needs:  142.250.72.14

   1. Cache?  ── your computer's recent answers ── (hit → done)
   2. Ask a RESOLVER (the DNS server DHCP gave you)
   3. Resolver walks the chain:
         root (.)  ──▶  .com  ──▶  google.com's server (authoritative)
   4. IP comes back  ──▶  cached (for its TTL)  ──▶  connect

   RECORDS:  A → IPv4   AAAA → IPv6   CNAME → alias   MX → mail   PTR → reverse
```

_Name in, number out. Cache → resolver → root → TLD → the site's server → the IP._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-09-02-dns-lookup-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a name-to-IP lookup: the computer checks its cache, asks a resolver, the resolver walks root → .com → the authoritative server, and the IP returns; plus a small records table (A/AAAA/CNAME/MX/PTR).
> **Key elements & labels:** google.com → 142.250.72.14; cache; resolver; root/.com/authoritative chain; records table.
> **Color meaning:** each step is numbered and labeled with text, not color alone.
> **Flow direction:** left-to-right lookup chain, then the IP returning.
> **Alt text (required):** "A DNS lookup turning google.com into an IP address. First the computer checks its local DNS cache. If not found, it asks a DNS resolver, the server DHCP provided. The resolver walks the hierarchy: root servers point to the dot-com servers, which point to the authoritative server for google.com. The IP address, for example 142.250.72.14, returns and is cached for its time to live, then the computer connects. A table lists record types: A maps a name to an IPv4 address, AAAA to an IPv6 address, CNAME to another name as an alias, MX to a mail server, and PTR is the reverse lookup from IP to name."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-09-02-nslookup-01.jpg`
> An `nslookup google.com` result showing the server and returned addresses. Alt text: "The nslookup command showing the DNS server used and the IP addresses returned for a name."
>
> **Photo 2** — `img-09-02-router-dns-01.jpg`
> A router page showing the DNS server addresses it hands out. Alt text: "A router page listing the DNS server addresses it gives to devices via DHCP."

---

## 9. Hands-on lab

**Goal:** turn a name into a number yourself with `nslookup`, and see DNS in a `ping`.
**Why:** watching a real lookup makes DNS concrete.

**You will need**
- Your Windows laptop (Equipment tier **E1**), on the internet. Estimated time: 10 min.

⚠️ **Before you start (safety):** These commands only **look up** and **ping** public names. Nothing on your device changes.

### 9a. Step-by-step instructions

1. Open the **Command Prompt** (Start → type `cmd` → Enter).
2. Type this exact command and press **Enter**:

   ```
   nslookup google.com
   ```

3. Read the output: the **Server** it asked (your DNS server) and the **Addresses** it returned.
4. Now run:

   ```
   ping google.com
   ```

5. Notice the line "Pinging google.com [some IP address]" — that **IP** came from DNS.

### 9b. Expected results

`nslookup` shows something like this (your server and IPs will differ):

```
   Server:  dns.example-router
   Address:  192.168.1.1

   Non-authoritative answer:
   Name:    google.com
   Addresses:  142.250.72.14
```

- The `ping` line shows the **same kind** of IP in brackets — DNS resolved the name first.
- ✅ **You did it if:** `nslookup` returned at least one address, and `ping` showed an IP in brackets.

### 9c. Verify it worked

1. Point to the **Server** line — that's the DNS resolver (often your router).
2. Explain: if `ping 8.8.8.8` works but `ping google.com` fails, what's broken? (DNS.)

### 9d. Reset / roll back

Nothing changed — these commands only look up names. Close the window when done.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Mixing up A and PTR | Wrong record on the exam | A = name→IP; PTR = IP→name (reverse) |
| Thinking DNS "connects" you | Misunderstanding | DNS only **looks up** the IP; the network connects |
| Blaming the whole network for a name fail | Wasted time | If the IP works but the name doesn't, it's **DNS** |
| Confusing CNAME and A | Wrong mapping | CNAME points name→name; A points name→IPv4 |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Names don't resolve | DNS server unreachable/wrong | `nslookup` a name; check the DNS server address |
| A site works by IP, not name | DNS problem | Confirm with `nslookup`; try another DNS server |
| Old page after a site moved | Cached record (TTL) | Wait for the TTL, or clear the DNS cache |
| `nslookup` says "can't find" | Typo or dead name | Re-type the name; try a known site like `google.com` |

---

## 12. Lesson summary

- **DNS** turns a **domain name** into an **IP address** — the internet's phone book.
- Lookup order: **cache → resolver → root → .com → the site's server → the IP**.
- Records: **A** (IPv4), **AAAA** (IPv6), **CNAME** (alias), **MX** (mail), **PTR** (reverse).
- Answers are **cached** for a **TTL**; if a name fails but its IP works, suspect DNS.

**One-sentence recap:** DNS is the internet's phone book — it looks up the name you typed and returns the IP address your computer needs, using records like A, CNAME, and MX.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-09-02-fill-in-the-blank.md`
2. **Matching** — `wb-09-02-matching.md`
3. **Label the diagram** — `wb-09-02-label-the-diagram.md` (the lookup flow)
4. **Short answer** — `wb-09-02-short-answer.md`
5. **Hands-on observation** — `wb-09-02-hands-on-observation.md` (nslookup)
6. **Vocabulary review** — `wb-09-02-vocabulary-review.md`
7. **Reflection** — `wb-09-02-reflection.md`

**Quick written warm-up (do this now):** What does DNS turn a name into? Which record maps a name to an IPv4 address?

Name into: ____________  Record: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-09-02-knowledge-check.md`.)

1. What does **DNS** do? *(Objective: definition)*
   - A) Assigns IP addresses automatically
   - B) Turns names into IP addresses
   - C) Blocks attacks
   - D) Powers devices

2. A human-friendly name like `google.com` is a… *(Objective: terms)*
   - A) MAC address
   - B) domain name
   - C) subnet mask
   - D) port

3. Which record maps a name to an **IPv4** address? *(Objective: records)*
   - A) MX
   - B) PTR
   - C) A
   - D) TXT

4. Which record names a domain's **mail server**? *(Objective: records)*
   - A) A
   - B) MX
   - C) CNAME
   - D) AAAA

5. A **PTR** record does what? *(Objective: records)*
   - A) name → IPv4
   - B) IP → name (reverse)
   - C) name → mail server
   - D) name → text

6. **True or false —** If a site's IP works but its name doesn't, the problem is most likely DNS. Explain in one sentence. *(Objective: troubleshoot)*

7. The server that looks up a name and returns its IP is the DNS… *(Objective: terms)*
   - A) cache
   - B) resolver
   - C) gateway
   - D) switch

8. **Matching —** write the letter next to each record. *(Objective: records)*
   - ___ A &nbsp;&nbsp; ___ CNAME &nbsp;&nbsp; ___ AAAA
   - A) name → another name (alias) &nbsp; B) name → IPv6 &nbsp; C) name → IPv4

9. Fill in the blank: Your computer keeps a short store of recent answers called the DNS ____________. *(Objective: cache)*

10. **Scenario —** You can `ping 8.8.8.8` fine, but `ping google.com` fails. What service is likely broken, and how would you confirm it? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-09-02-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-09-02-dns.md`. In brief:

- **Objective in one line:** learners explain what DNS does, the lookup flow, and the common record types, and run `nslookup`.
- **Common misconceptions:** A vs. PTR; DNS "connects" you; CNAME vs. A. Correct all three.
- **Pacing:** ~28 min. The phone-book analogy carries it; the `nslookup` lab makes it real.
- **How CompTIA tests it:** record types (A, AAAA, CNAME, MX, PTR, TXT); name→IP flow; DNS as a failure that looks like "no internet."
- **Accuracy note:** `nslookup`/`ping` are real; returned IPs vary (Google has many, and they change) — sample output is labeled representative. No fabricated fixed answers.
- **Extension idea:** recursive vs. iterative queries, root/TLD/authoritative tiers, and DNS security (DNSSEC) for fast learners.

---

## 17. Cheat sheet

> **Quick reference — DNS**
>
> - **DNS** = turns a **domain name** → an **IP address** (the internet's phone book).
> - **Flow:** cache → resolver → root → .com (TLD) → the site's (authoritative) server → IP.
> - **Records:** **A** name→IPv4 · **AAAA** name→IPv6 · **CNAME** alias (name→name) · **MX** mail · **PTR** reverse (IP→name) · **TXT** text.
> - Answers are **cached** for a **TTL**.
> - Name fails but IP works → suspect **DNS**. Test with **`nslookup <name>`**.
> - DHCP tells your device **which** DNS server to use (Lesson 09-01).
>
> _(Full version: `resources/cheat-sheets/network-services-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **DNS** — The service that turns names into IP addresses.
- **Domain name** — A human-friendly name for a site, like google.com.
- **DNS resolver** — A server that looks up a name and returns its IP.
- **DNS cache** — A short local store of recent name → IP answers.
- **A record** — A DNS record mapping a name to an IPv4 address.
- **CNAME record** — A DNS record that points one name to another (an alias).
- **MX record** — A DNS record that names a domain's mail server.

---

## 19. Homework

- **Practice:** Run `nslookup` on three sites; note each returned IP and the server used.
- **Spaced review:** Redo the Lesson 09-01 flashcards on DORA and what DHCP provides.
- **Preview:** Next lesson revisits **NAT and PAT** in depth — sharing one public address.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I name three DNS record types now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain what DNS does and why.
- [ ] I can describe the name → IP lookup flow.
- [ ] I can name A, AAAA, CNAME, MX, and PTR records.
- [ ] I used `nslookup` to resolve a name.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: NAT and PAT in depth.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M09-L02** — "DNS: Turning Names into Numbers" · Module 09 · Unit 6_
