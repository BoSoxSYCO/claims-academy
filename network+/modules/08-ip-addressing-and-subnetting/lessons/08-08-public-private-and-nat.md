---
id: NA-M08-L08
module: 08
lesson: 08
title: "Public vs. Private, and the Role of NAT (Preview)"
unit: 5
objective_ids: ["1.4"]
reading_level_target: 7
status: Published
est_minutes: 26
equipment_tier: E1
prerequisites: ["NA-M08-L02"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-04"
---

# [Module 08 · Lesson 08] Public vs. Private, and the Role of NAT (Preview)

> **Unit:** Unit 5 — IP Addressing & Subnetting · **Time:** ~26 min · **Equipment:** E1 (your Windows laptop + home router)
> **You'll need first:** Lesson 08-02 (public vs. private addresses).

Here's a puzzle: your laptop has a **private** address that can't travel the internet — yet you browse the web fine. How? A router trick called **NAT** translates your private address to a public one. This lesson closes Module 08 by connecting private and public addresses through NAT.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain the difference between a **public** and a **private** IP address.
- [ ] Explain what **NAT** does and **why** it's needed.
- [ ] Describe how many private devices share **one** public address.
- [ ] Find your **private** address and see that your **public** one differs.

---

## 2. Introduction — why this matters

Think about a large office building. Inside, every desk has a short **extension** (x214, x215) that only works within the building. But the building has just **one public phone number** printed on the door. When someone inside calls out, the phone system puts the call on the public line; when a call comes in, the receptionist routes it to the right extension.

Your home network works the same way. Inside, your devices have **private** addresses (like `192.168.1.x` — Lesson 08-02) that can't travel the internet. Your ISP gives your router just **one public** address. So how do five devices share one public address? **NAT** — Network Address Translation. The router is the phone system: it swaps private for public on the way out, and back again on the way in.

Why does this matter? Because it's how nearly every home and office reaches the internet, and because it's why we didn't run out of IPv4 even sooner. The exam expects you to know it.

🎯 **Exam tip:** Network+ tests **public vs. private** and the role of **NAT** (and its common form, **PAT**, that lets many devices share one public IP).

🔧 **Lab link:** You'll compare your **private** address (from `ipconfig`) with your router's **public** address on its status page.

---

## 3. Simple explanation

### Public vs. private — a quick review
- A **private IP address** (10.x, 172.16–31.x, 192.168.x — Lesson 08-02) is used **inside** a network. It's reused in millions of homes and **can't** be routed on the public internet.
- A **public IP address** is **unique** on the internet and **can** be routed there. Your ISP assigns one to your router.

The problem: your private laptop needs to talk to a public web server, but its private address can't cross the internet. Something must translate.

### NAT — the translator
**NAT (Network Address Translation)** is the router's job of swapping addresses:

- **Going out:** the router replaces your device's **private source address** with its **own public address**, then sends the request to the internet.
- **Coming back:** the reply arrives at the public address; the router swaps it **back** to the right private device and delivers it.

To the outside world, all your traffic looks like it comes from **one** public address — the router's. Inside, each device keeps its private address.

### Sharing one public address (PAT)
But if five devices all use the router's one public address, how does a reply find the **right** device? The router uses **PAT (Port Address Translation)** — it tags each conversation with a **port number** (you'll learn ports fully in Module 10) so it can send each reply back to the device that asked. PAT is what almost every home router actually does — it's how many devices share a single public IP.

### A bonus: a little safety
Because outside devices only see the router's public address, they **can't** reach your inside devices directly by default. NAT isn't a full firewall, but it hides your private network as a side effect.

> **The big idea:** Private addresses stay **inside** and can't cross the internet; your ISP gives your router **one public** address. **NAT** swaps private for public on the way out and back on the way in, and **PAT** uses port numbers so **many** devices share that one public address.

💡 **Tip:** Run `ipconfig` and you'll see a **private** address (like 192.168.x.x). Your router's status page shows a **different**, public address facing the internet. That gap is NAT.

⚠️ **Watch out:** NAT is **not** a firewall. It hides inside devices, but you still need real firewall rules for security (Lesson 07-04).

---

## 4. Real-world analogy

> **"NAT is the office phone system: many inside extensions, one public number."**

| Office phones | Network |
|---------------|---------|
| Desk extensions (x214) | **Private** addresses (192.168.x.x) |
| One public phone number | One **public** address (the router's) |
| The phone system routes calls | **NAT** translates addresses |
| Tracking which extension a call is for | **PAT** (port numbers) |
| Outsiders can't dial a desk directly | Inside devices hidden by default |

Everyone inside shares one public number; the system quietly connects each call to the right desk.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **NAT (Network Address Translation)** | nat | When a router swaps a device's private address for its public one so it can reach the internet. |
| **PAT (Port Address Translation)** | pat | A form of NAT that lets many devices share one public address, using port numbers. |
| **Public IP address** (review) | | An address that is unique on the internet and routable there. |
| **Private IP address** (review) | | An address used inside a network; not routed on the internet. |

---

## 6. ASCII diagram

```
   HOW PRIVATE DEVICES REACH THE INTERNET (NAT)

   INSIDE (private)                 ROUTER (NAT)            OUTSIDE (public)
   ┌──────────────┐
   │ Laptop        192.168.1.24 ┐
   │ Phone         192.168.1.25 ┼──▶ [ swap private → public ] ──▶ internet
   │ TV            192.168.1.26 ┘        one public IP:
   └──────────────┘                     203.0.113.7 (from ISP)

   OUT:  src 192.168.1.24  →  router rewrites src to 203.0.113.7
   BACK: reply to 203.0.113.7 → router sends it back to 192.168.1.24

   PAT uses port numbers so many devices share the ONE public IP.
```

_Many private addresses inside · one public address outside · NAT translates between them._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-08-08-nat-01.svg` (created and stored in this module's `assets/`)
> **Shows:** three private devices inside a home, a router in the middle doing NAT, and the internet outside; an outbound packet's source address rewritten from private to the router's one public address, and the reply coming back.
> **Key elements & labels:** private devices (192.168.1.24/.25/.26); router with NAT; one public IP (203.0.113.7); out = swap private→public; back = swap public→private; PAT note.
> **Color meaning:** "inside/private" and "outside/public" zones are labeled with text, not color alone.
> **Flow direction:** left (inside) → middle (router) → right (internet), with a return arrow.
> **Alt text (required):** "A home network showing NAT. On the left, three private devices — a laptop 192.168.1.24, a phone .25, and a TV .26 — connect to a router in the middle. The router does Network Address Translation: on the way out it rewrites each device's private source address to its one public address, 203.0.113.7, given by the ISP, and sends the request to the internet on the right. On the way back, the reply arrives at 203.0.113.7 and the router swaps it back to the correct private device. A note says PAT uses port numbers so many devices share the one public address, using an example address block reserved for documentation."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-08-08-router-wan-ip-01.jpg`
> A router status page showing the WAN/Internet (public) IP next to the LAN (private) range. Alt text: "A router status page showing its public WAN IP address and its private LAN range, the two sides of NAT."
>
> **Photo 2** — `img-08-08-ipconfig-private-01.jpg`
> An `ipconfig` showing a private 192.168.x.x address. Alt text: "The ipconfig output showing a private 192.168 address, the inside address NAT translates."

---

## 9. Hands-on lab

**Goal:** see your **private** address and confirm your **public** one is different — NAT in action.
**Why:** the two-address gap makes NAT real instead of abstract.

**You will need**
- Your Windows laptop (Equipment tier **E1**) and access to your home router's status page. Estimated time: 12 min.

⚠️ **Before you start (safety):** You only **read** addresses — change nothing on the router. Don't alter any settings.

### 9a. Step-by-step instructions

1. Open the **Command Prompt** and run `ipconfig`. Write your **IPv4 Address** (private, e.g., 192.168.1.24) and **Default Gateway** (your router).
2. In a browser, go to your router's address (the **Default Gateway**, often `192.168.1.1`). Log in if needed. `[TO VERIFY ON HARDWARE: router address and login vary by model]`
3. Find the **Status** or **Internet/WAN** page. Read the router's **public** (WAN) IP address.
4. Compare: your laptop's private address vs. the router's public address. They are **different** networks.
5. (Optional, needs internet) A search for "what is my IP" shows the **same** public address as your router's WAN — because NAT makes all your devices share it.

### 9b. Expected results

- Your laptop shows a **private** address (10.x, 172.16–31.x, or 192.168.x).
- The router's WAN shows a **public** address (not in the private ranges).
- ✅ **You did it if:** you can point to a private inside address and a different public outside address, and say "NAT connects them."

### 9c. Verify it worked

1. Confirm your laptop's address **is** in a private range and the WAN address **is not**.
2. Say: "All my devices share that one public address, thanks to NAT/PAT."

### 9d. Reset / roll back

You changed nothing — read-only. Log out of the router page and close the window.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking your laptop has a public IP | Confusion about NAT | Your laptop's IP is private; the **router's** WAN is public |
| Believing NAT is a firewall | False sense of security | NAT hides devices but isn't a full firewall (07-04) |
| Expecting each device its own public IP | Wrong model | Many devices **share** one public IP via PAT |
| Changing router settings in the lab | Could break your internet | Only **read** the status page |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Can't open the router page | Wrong address or login | Use the Default Gateway from `ipconfig`; check the router label |
| WAN IP is also private (100.x/10.x) | ISP uses carrier-grade NAT | Some ISPs NAT you too; the idea still holds |
| Two devices "fight" over the internet | Not an addressing issue | NAT/PAT keeps them separate by port; look elsewhere |
| No internet at all | NAT is fine; link is down | Check the modem/gateway and cabling (Module 06) |

---

## 12. Lesson summary

- **Private** addresses stay inside and can't cross the internet; a **public** address is unique and routable.
- Your ISP gives your router **one** public address.
- **NAT** swaps private for public on the way out and back on the way in.
- **PAT** uses port numbers so **many** devices share that one public address (full detail in later modules).

**One-sentence recap:** NAT lets your private inside devices reach the internet by translating their addresses to the router's one public address — and PAT uses port numbers so they can all share it.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-08-08-fill-in-the-blank.md`
2. **Matching** — `wb-08-08-matching.md`
3. **Label the diagram** — `wb-08-08-label-the-diagram.md` (NAT path)
4. **Short answer** — `wb-08-08-short-answer.md`
5. **Hands-on observation** — `wb-08-08-hands-on-observation.md` (private vs. public)
6. **Vocabulary review** — `wb-08-08-vocabulary-review.md`
7. **Reflection** — `wb-08-08-reflection.md`

**Quick written warm-up (do this now):** Which address can cross the internet — public or private? What does NAT translate?

Crosses internet: ____________  NAT translates: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-08-08-knowledge-check.md`.)

1. Which address can be **routed on the internet**? *(Objective: public vs private)*
   - A) private
   - B) public
   - C) loopback
   - D) APIPA

2. What does **NAT** do? *(Objective: NAT)*
   - A) speeds up Wi-Fi
   - B) swaps a private address for a public one (and back)
   - C) assigns MAC addresses
   - D) encrypts files

3. How many **public** addresses does a typical home usually get from the ISP? *(Objective: NAT)*
   - A) one
   - B) one per device
   - C) none
   - D) 254

4. What lets **many devices share one** public address? *(Objective: PAT)*
   - A) DHCP
   - B) PAT (Port Address Translation)
   - C) DNS
   - D) a hub

5. Your laptop's `ipconfig` shows 192.168.1.30. That address is… *(Objective: public vs private)*
   - A) public
   - B) private
   - C) a MAC address
   - D) a broadcast

6. **True or false —** NAT is a complete firewall that fully secures your network. Explain in one sentence. *(Objective: NAT limits)*

7. Going **out** to the internet, the router replaces the packet's… *(Objective: NAT direction)*
   - A) private source address with its public address
   - B) public address with a private one
   - C) MAC with an IP
   - D) port with a cable

8. **Matching —** write the letter. *(Objective: terms)*
   - ___ Private IP &nbsp;&nbsp; ___ Public IP &nbsp;&nbsp; ___ NAT
   - A) unique on the internet &nbsp; B) used inside, not routable &nbsp; C) translates between the two

9. Fill in the blank: To the outside world, all your home traffic appears to come from ____________ public address. *(Objective: NAT)*

10. **Scenario —** Five devices at home all browse the web at once, but your ISP gave you one public IP. Explain how they all reach the internet. *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-08-08-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-08-08-nat.md`. In brief:

- **Objective in one line:** learners explain public vs. private and how NAT/PAT lets private devices share one public address.
- **Common misconceptions:** the laptop has a public IP; NAT is a firewall; each device needs its own public IP. Correct all three.
- **Pacing:** ~26 min. This is a **preview** — keep PAT/ports light; the deep NAT lesson is Module 09.
- **How CompTIA tests it:** public vs. private; NAT purpose; PAT as the many-to-one sharer.
- **Accuracy note:** uses documentation address blocks (203.0.113.0/24 per RFC 5737) for the public example; `ipconfig` is real and read-only; router pages vary → marked `[TO VERIFY ON HARDWARE]`.
- **Extension idea:** static NAT / port forwarding and carrier-grade NAT for fast learners.

---

## 17. Cheat sheet

> **Quick reference — Public/private & NAT**
>
> - **Private** IP: inside only, not routable (10.x, 172.16–31.x, 192.168.x).
> - **Public** IP: unique on the internet; the ISP gives your router **one**.
> - **NAT** = router swaps **private → public** going out, **public → private** coming back.
> - **PAT** = uses **port numbers** so **many** devices share one public IP (home routers do this).
> - NAT hides inside devices but is **not** a full firewall.
> - `ipconfig` = your private IP; router WAN page = your public IP.
>
> _(Full version: `resources/cheat-sheets/ip-addressing-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **NAT (Network Address Translation)** — When a router swaps a device's private address for its public one so it can reach the internet.
- **PAT (Port Address Translation)** — A form of NAT that lets many devices share one public address, using port numbers.

(**Public IP address** and **Private IP address** were defined in Lesson 08-02 and reused here.)

---

## 19. Homework

- **Practice:** Write down your home's private range and public IP; explain the NAT path in your own words.
- **Spaced review:** Redo the Lesson 08-02 flashcards on public vs. private ranges.
- **Preview:** Next module (09) covers the services that make networks usable — **DHCP**, **DNS**, and a deeper look at **NAT**.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I explain how devices share one public IP? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain public vs. private addresses.
- [ ] I can explain what NAT does and why.
- [ ] I know PAT lets many devices share one public IP.
- [ ] I found my private address and know my public one differs.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next module: DHCP, DNS, and NAT (Module 09).

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

**🎉 Module 08 complete!** You can now read, plan, and subnet IPv4 and IPv6 addresses, and explain how NAT connects your private network to the internet. Next up: the core services that make it all usable.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M08-L08** — "Public vs. Private, and the Role of NAT (Preview)" · Module 08 · Unit 5_
