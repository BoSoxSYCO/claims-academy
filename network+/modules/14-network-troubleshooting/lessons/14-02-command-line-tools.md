---
id: NA-M14-L02
module: 14
lesson: 02
title: "Command-Line Tools: ping, tracert, ipconfig, nslookup"
unit: 11
objective_ids: ["5.5"]
reading_level_target: 7
status: Published
est_minutes: 35
equipment_tier: E2
prerequisites: ["NA-M14-L01", "NA-M09-L02"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-07"
---

# [Module 14 · Lesson 02] Command-Line Tools: ping, tracert, ipconfig, nslookup

> **Unit:** Unit 11 — Network Troubleshooting · **Time:** ~35 min · **Equipment:** E2 (your Windows laptop)
> **You'll need first:** the 7-step method (14-01) and DNS (09-02).

The method (14-01) tells you *when* to test a theory. These tools are *how*. Four commands answer most "is the network working?" questions. They're built into Windows, free, and safe. You'll run all four on your own laptop.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Use **ipconfig** to see your own network settings.
- [ ] Use **ping** to test if you can reach another device.
- [ ] Use **tracert** to see the path to a destination.
- [ ] Use **nslookup** to turn a name into an IP address.

---

## 2. Introduction — why this matters

Say a website won't load. Is it your address? Your connection? The name lookup? A router far away? Guessing is slow. These four tools answer each question fast.

They fit right into the 7-step method. In step 3, you test a theory. In step 6, you verify the fix. These commands are how you test and verify.

Each tool answers one question:

- **ipconfig** — what are my settings?
- **ping** — can I reach that device?
- **tracert** — where does the path go (or stop)?
- **nslookup** — what IP does this name have?

CompTIA loves these tools. It asks which tool fits which problem. Learn what each one does, and you can pick the right one every time.

🎯 **Exam tip:** Match the tool to the question. Reachability → ping. Path → tracert. Your settings → ipconfig. Name lookup → nslookup.

🔧 **Lab link:** You'll run all four commands on your Windows laptop.

---

## 3. Simple explanation

First, open the command line. Click **Start**, type **cmd**, and press **Enter**.

### ipconfig — show my settings

**ipconfig** shows your computer's network settings. You met it earlier; now we go further.

```
ipconfig
```

It shows your **IP address**, subnet mask, and **default gateway** (your router). For more detail — your **MAC address**, **DNS** servers, and DHCP info — add `/all`:

```
ipconfig /all
```

> A typical line looks like `IPv4 Address. . . : 192.168.1.42`. Your real values differ — read your own output. **[TO VERIFY ON HARDWARE]**

### ping — can I reach it?

**ping** tests whether you can reach another device. It sends a small message and waits for a reply. If replies come back, the path works.

```
ping 8.8.8.8
```

`8.8.8.8` is a public Google DNS server — handy for testing the internet. You can also ping a name:

```
ping www.google.com
```

Each reply shows a **round-trip time (RTT)** — how long the trip took, in milliseconds (ms). Lower is better. That delay is **latency** (from Module 04). Replies also show a **TTL (Time to Live)** number, which limits how many hops a packet may take.

> A typical reply reads `Reply from 8.8.8.8: bytes=32 time=14ms TTL=118`. The exact time and TTL vary by network — this is an example only. **[TO VERIFY ON HARDWARE]**

💡 **Tip:** Ping your own **loopback** address, `ping 127.0.0.1`, to check that your computer's own network software works.

### tracert — where does the path go?

**tracert** (trace route) shows each **hop** — each router — along the path to a destination. If the path breaks, tracert shows where it stops.

```
tracert 8.8.8.8
```

It lists the hops in order, with a time for each. The last line is the destination (if reached).

> Hop lists and times are different on every network and change over time. Treat any sample as an example. **[TO VERIFY ON HARDWARE]**

### nslookup — name to IP

**nslookup** asks **DNS** (from Module 09) for the IP address behind a name. Use it when a name won't resolve but a direct IP works.

```
nslookup www.example.com
```

It returns the IP address(es) for that name. If it fails, you have a DNS problem, not a connection problem.

> **The big idea:** Four built-in Windows tools answer four questions. **ipconfig** shows your settings (IP, gateway, DNS, MAC). **ping** tests reachability and shows **round-trip time**. **tracert** shows the **hops** along the path and where it stops. **nslookup** turns a name into an IP using **DNS**. They power step 3 (test) and step 6 (verify) of the method.

⚠️ **Watch out:** A failed ping doesn't always mean "down." Some devices are set to ignore ping. Use more than one clue.

---

## 4. Real-world analogy

> **"These four tools are a network detective's kit."**

| Detective action | Tool |
|------------------|------|
| Check your own ID and address | ipconfig |
| Knock and see if anyone answers | ping |
| Map the roads your message travels | tracert |
| Look up a name in the phone book | nslookup |

Know your own address, knock to test, map the route, and look up names. Four questions, four tools.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **ping** | ping | A command that tests whether you can reach a device. |
| **tracert** | TRACE-ert | A command that shows the hops (routers) to a destination. |
| **nslookup** | N-S-lookup | A command that asks DNS for the IP behind a name. |
| **Round-trip time (RTT)** | | How long a ping takes to go and come back, in ms. |
| **TTL** | T-T-L | Time to Live — a limit on how many hops a packet may take. |

---

## 6. ASCII diagram

```
   THE QUESTION            THE TOOL           EXAMPLE
   ------------            --------           -------
   What are my settings?   ipconfig /all      (IP, gateway, DNS, MAC)
   Can I reach it?         ping 8.8.8.8       (replies + time + TTL)
   Where does it stop?     tracert 8.8.8.8    (hop 1, hop 2, ...)
   What IP has this name?  nslookup a-name    (name -> IP)
```

_One question, one tool. Test with ping/tracert; check names with nslookup._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-14-02-cli-tools-01.svg` (created and stored in this module's `assets/`)
> **Shows:** four cards, one per tool — ipconfig, ping, tracert, nslookup — each with the question it answers and its example command.
> **Key elements & labels:** each card names the tool, the question ("what are my settings?", "can I reach it?", "where does the path go?", "what IP has this name?"), and a sample command; a footer maps them to method step 3 (test) and step 6 (verify).
> **Color meaning:** each card is titled in words; the question and command are text, not color-coded.
> **Flow direction:** four cards in a 2×2 grid.
> **Alt text (required):** "Four tool cards. Card one, ipconfig: answers 'what are my settings?' and shows your IP address, default gateway, DNS servers, and MAC address; example command ipconfig slash all. Card two, ping: answers 'can I reach it?' by sending a message and waiting for a reply, showing the round-trip time and TTL; example command ping 8.8.8.8. Card three, tracert: answers 'where does the path go, or stop?' by listing each hop or router along the way; example command tracert 8.8.8.8. Card four, nslookup: answers 'what IP has this name?' by asking DNS; example command nslookup a website name. A footer notes these tools power step 3, test the theory, and step 6, verify, of the troubleshooting method."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-14-02-cmd-ipconfig-01.jpg`
> A Windows Command Prompt after `ipconfig`. Alt text: "A Windows Command Prompt window showing ipconfig output with an IPv4 address and default gateway (values vary by computer)."
>
> **Photo 2** — `img-14-02-cmd-ping-01.jpg`
> A Command Prompt after `ping`. Alt text: "A Command Prompt showing ping replies with round-trip times and TTL values, which differ on every network."

---

## 9. Hands-on lab

**Goal:** run all four tools on your Windows laptop and read what they show.
**Why:** these are the everyday commands for testing and verifying.

**You will need**
- Your Windows laptop, online. Estimated time: 20 min.

⚠️ **Before you start (safety):** these commands only read and test. They change no settings.

### 9a. Step-by-step instructions

1. Open the command line: **Start** → type **cmd** → **Enter**.
2. Type `ipconfig` and press **Enter**. Find your **IPv4 Address** and **Default Gateway**.
3. Type `ipconfig /all` and press **Enter**. Find your **DNS Servers** and **Physical Address** (MAC).
4. Type `ping 127.0.0.1` and press **Enter**. This tests your own network software (loopback).
5. Type `ping 8.8.8.8` and press **Enter**. Watch for **Reply** lines and the **time** in ms.
6. Type `ping www.google.com` and press **Enter**. If a name works, DNS is working too.
7. Type `tracert 8.8.8.8` and press **Enter**. Watch the **hops** appear in order. (It may take a minute.)
8. Type `nslookup www.example.com` and press **Enter**. Note the IP it returns.

### 9b. Expected results

- `ipconfig` shows your IP and gateway; `/all` adds DNS and MAC.
- `ping` to a working target shows **Reply** lines with times.
- `tracert` lists hops to the destination.
- `nslookup` returns an IP for the name.

- ✅ **You did it if:** you saw real output from all four commands.

> ⚠️ Every value above — IPs, times, TTLs, hop lists — varies by computer and network. Read your own output. Do not expect the sample numbers. **[TO VERIFY ON HARDWARE]**

### 9c. Verify it worked

1. Say what your default gateway is, and what device it names (your router).
2. If `ping 8.8.8.8` works but `ping www.google.com` fails, name the likely problem (DNS).

### 9d. Reset / roll back

Nothing changed — these are read-only tests. Close the window when done.

> 🔧 **Home-lab continuity:** write down your IP, gateway, and DNS. You'll reuse these tools in Lessons 14-05 and 14-07.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Expecting the sample numbers | Yours differ; you get confused | Read your own output |
| Assuming a failed ping = "down" | Some devices ignore ping | Use another test too |
| Confusing ping and tracert | Wrong tool for the question | Ping = reachable? Tracert = the path |
| Blaming the connection for a name fail | It may be DNS | Ping the IP; if that works, it's DNS |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| `ping 8.8.8.8` works, names fail | DNS problem | `nslookup` a name; check DNS servers in `ipconfig /all` |
| No gateway in `ipconfig` | No IP/DHCP | Check the cable/Wi-Fi; renew the address |
| `tracert` stops partway | A hop is down or blocked | Note the last good hop; that's near the fault |
| `ping 127.0.0.1` fails | Local network stack issue | Restart networking or the PC |

---

## 12. Lesson summary

- **ipconfig** shows your settings (IP, gateway, DNS, MAC); add `/all` for detail.
- **ping** tests reachability and shows **round-trip time** and **TTL**.
- **tracert** shows the **hops** to a destination and where it stops.
- **nslookup** turns a name into an IP using **DNS**.

**One-sentence recap:** ipconfig shows your address, ping tests reachability, tracert maps the path, and nslookup checks names — the four everyday troubleshooting commands.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-14-02-fill-in-the-blank.md`
2. **Matching** — `wb-14-02-matching.md`
3. **Label the diagram** — `wb-14-02-label-the-diagram.md` (tool → question)
4. **Short answer** — `wb-14-02-short-answer.md`
5. **Hands-on observation** — `wb-14-02-hands-on-observation.md` (run the four tools)
6. **Vocabulary review** — `wb-14-02-vocabulary-review.md`
7. **Reflection** — `wb-14-02-reflection.md`

**Quick written warm-up (do this now):** Which tool tests if you can reach a device? Which shows the path?

Reach: ____________  Path: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-14-02-knowledge-check.md`.)

1. Which tool shows your own IP, gateway, and DNS? *(Objective: tool)*
   - A) ping
   - B) ipconfig
   - C) tracert
   - D) nslookup

2. **ping** tests… *(Objective: tool)*
   - A) the path's every hop
   - B) whether you can reach a device
   - C) your MAC address
   - D) a name's IP

3. **tracert** shows… *(Objective: tool)*
   - A) each hop (router) along the path
   - B) your subnet mask
   - C) the Wi-Fi password
   - D) the DNS cache only

4. **nslookup** is used to… *(Objective: tool)*
   - A) reboot the router
   - B) turn a name into an IP (query DNS)
   - C) test cable length
   - D) show your gateway

5. A ping reply's **time** value is the… *(Objective: concept)*
   - A) file size
   - B) round-trip time in milliseconds
   - C) TTL only
   - D) IP address

6. **True or false —** If `ping 8.8.8.8` works but `ping www.google.com` fails, it's probably a DNS problem. Explain in one sentence. *(Objective: apply)*

7. To see your **MAC address** and **DNS servers**, run… *(Objective: tool)*
   - A) `ipconfig`
   - B) `ipconfig /all`
   - C) `ping /all`
   - D) `tracert /all`

8. **Matching —** match each tool to the question it answers. *(Objective: tools)*
   - ___ ipconfig &nbsp;&nbsp; ___ ping &nbsp;&nbsp; ___ tracert &nbsp;&nbsp; ___ nslookup
   - A) Can I reach it?
   - B) What IP has this name?
   - C) What are my settings?
   - D) Where does the path go?

9. Fill in the blank: You can test your computer's own network software by pinging the loopback address, ____________. *(Objective: apply)*

10. **Scenario —** A user can't load any website. `ipconfig` shows no default gateway. Which tool told you this, and what does the missing gateway suggest? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-14-02-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-14-02-cli-tools.md`. In brief:

- **Objective in one line:** learners use ipconfig, ping, tracert, and nslookup, and match each tool to the question it answers.
- **Common misconceptions:** "the sample numbers are what I'll see"; "a failed ping means down"; "a name failure is always the connection." Correct each.
- **Pacing:** ~35 min. The detective-kit analogy carries it; the four-command lab is the payoff.
- **How CompTIA tests it:** match tool to symptom; ping vs. tracert; ping-IP-works-but-name-fails = DNS.
- **Accuracy note (Prime Directive #7):** all four commands are real and safe on Windows. Every shown output value is a typical example that varies, marked `[TO VERIFY ON HARDWARE]`. No specific IP/time/hop is presented as guaranteed.
- **Extension idea:** `ping -t` (continuous), `ping -n`, `tracert -d` (skip name lookups); `-4`/`-6`; pathping (a preview of 14-03).

---

## 17. Cheat sheet

> **Quick reference — Four CLI tools**
>
> | Question | Command | Shows |
> |----------|---------|-------|
> | My settings? | `ipconfig /all` | IP, gateway, DNS, MAC |
> | Can I reach it? | `ping 8.8.8.8` | replies + time + TTL |
> | Where's the path? | `tracert 8.8.8.8` | each hop in order |
> | Name → IP? | `nslookup a-name` | the IP for a name |
>
> - Test your own stack: `ping 127.0.0.1` (loopback).
> - Ping the **IP** works but the **name** fails → DNS problem.
> - Every IP/time/hop you see **varies** — read your own output.
>
> _(Full version: `resources/cheat-sheets/troubleshooting-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **nslookup** — A command that asks DNS for the IP address behind a name.
- **Round-trip time (RTT)** — How long a ping takes to go to a target and come back, in milliseconds.
- **TTL (Time to Live)** — A number that limits how many hops a packet may take before it is dropped.

(ping, traceroute/tracert, ipconfig, hop, latency, loopback address, default gateway, and DNS were all defined in earlier modules and are reused here.)

---

## 19. Homework

- **Practice:** Run all four commands again on a different network (a friend's Wi-Fi, if allowed). Notice how the values change.
- **Spaced review:** Say which tool answers each of the four questions, from memory.
- **Preview:** Next, **Lesson 14-03 — More tools: arp, netstat, pathping**.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Which tool will you use most, and why? _______________________
3. What was hardest — the command names, or reading the output?
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can use ipconfig to see my settings.
- [ ] I can use ping to test reachability.
- [ ] I can use tracert to see the path.
- [ ] I can use nslookup to look up a name.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I'm ready for Lesson 14-03 (arp, netstat, pathping).

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M14-L02** — "Command-Line Tools: ping, tracert, ipconfig, nslookup" · Module 14 · Unit 11_
