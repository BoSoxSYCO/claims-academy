---
id: NA-M10-L03
module: 10
lesson: 03
title: "The Must-Know Ports (Web, Mail, Remote, Files)"
unit: 7
objective_ids: ["1.5"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E1
prerequisites: ["NA-M10-L01", "NA-M10-L02"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-04"
---

# [Module 10 · Lesson 03] The Must-Know Ports (Web, Mail, Remote, Files)

> **Unit:** Unit 7 — Ports, Protocols & Applications · **Time:** ~30 min · **Equipment:** E1 (your Windows laptop)
> **You'll need first:** Lesson 10-01 (ports) and Lesson 10-02 (TCP vs. UDP).

You know what a port is (Lesson 10-01). Now you learn the **exact numbers** the exam expects you to know **cold**. Don't panic — we group them by **job**: web, mail, remote, and files (plus the network services you already met). Grouping makes them stick.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Recall the **web** ports (HTTP 80, HTTPS 443).
- [ ] Recall the **mail** ports (SMTP 25, POP3 110, IMAP 143).
- [ ] Recall the **remote** ports (SSH 22, Telnet 23, RDP 3389).
- [ ] Recall the **file** ports (FTP 20/21, TFTP 69, SMB 445).

---

## 2. Introduction — why this matters

Think about famous phone numbers. **911** is always emergency. **411** is always directory help. You don't look them up — everyone just **knows** them. They're fixed so anyone, anywhere, can reach the right service.

Well-known ports work the same way (Lesson 10-01). A web server is **always** on port **80** (or **443** for secure). Email, remote access, and file sharing each have their own fixed numbers. Because they're fixed, any client can find the right service without asking.

The exam tests these numbers directly: "What port does HTTPS use?" or "Which service is on port 22?" This lesson gives you the list, grouped so it's easier to remember. The next lesson (10-05) adds memory tricks.

🎯 **Exam tip:** Network+ asks port ↔ protocol both ways. Learn the number **and** whether it's TCP or UDP.

🔧 **Lab link:** You'll spot some of these ports live in `netstat`.

---

## 3. Simple explanation

We'll take the ports in four groups, by their job. (TCP/UDP is from Lesson 10-02.)

### Web
- **HTTP (HyperText Transfer Protocol)** — plain web pages — port **80** (TCP).
- **HTTPS (HTTP Secure)** — encrypted web pages — port **443** (TCP).

You use these every time you open a website. `https://` means port 443.

### Mail
- **SMTP (Simple Mail Transfer Protocol)** — **sends** email — port **25** (TCP).
- **POP3 (Post Office Protocol 3)** — **downloads** email to one device — port **110** (TCP).
- **IMAP (Internet Message Access Protocol)** — reads email **kept on the server** (syncs across devices) — port **143** (TCP).

Memory: **S**MTP **S**ends; POP3 and IMAP **receive** (POP downloads, IMAP keeps on the server).

### Remote access
- **SSH (Secure Shell)** — **secure**, encrypted remote command line — port **22** (TCP).
- **Telnet** — old, **unencrypted** remote command line — port **23** (TCP). Avoid it; use SSH.
- **RDP (Remote Desktop Protocol)** — remote control of a Windows **desktop** — port **3389** (TCP).

Memory: SSH (22) is one step past Telnet (23)? No — SSH is **22**, Telnet is **23**. SSH is the **secure** one.

### Files
- **FTP (File Transfer Protocol)** — transfers files — ports **20/21** (TCP). (21 controls, 20 carries data.)
- **TFTP (Trivial File Transfer Protocol)** — a simple, no-frills transfer — port **69** (UDP).
- **SMB (Server Message Block)** — Windows file and printer **sharing** — port **445** (TCP).

### Network services (a Module 09 recap)
You already met these services — here are their ports:

- **DNS** — name → IP — port **53** (TCP **and** UDP).
- **DHCP** — auto addressing — ports **67/68** (UDP).
- **NTP** — time sync — port **123** (UDP).
- **SNMP** — monitoring — ports **161/162** (UDP).
- **Syslog** — central logs — port **514** (UDP).

### The full must-know table

| Port | Protocol | Job | TCP/UDP |
|:----:|----------|-----|:-------:|
| **20/21** | FTP | file transfer | TCP |
| **22** | SSH | secure remote | TCP |
| **23** | Telnet | remote (insecure) | TCP |
| **25** | SMTP | send email | TCP |
| **53** | DNS | name → IP | TCP/UDP |
| **67/68** | DHCP | auto addressing | UDP |
| **69** | TFTP | simple file transfer | UDP |
| **80** | HTTP | web | TCP |
| **110** | POP3 | download email | TCP |
| **123** | NTP | time | UDP |
| **143** | IMAP | email (server-kept) | TCP |
| **161/162** | SNMP | monitoring | UDP |
| **443** | HTTPS | secure web | TCP |
| **445** | SMB | file/printer sharing | TCP |
| **514** | Syslog | logging | UDP |
| **3389** | RDP | remote desktop | TCP |

> **The big idea:** Learn ports by **job**. **Web:** HTTP **80**, HTTPS **443**. **Mail:** SMTP **25** (send), POP3 **110**, IMAP **143** (receive). **Remote:** SSH **22** (secure), Telnet **23**, RDP **3389**. **Files:** FTP **20/21**, TFTP **69**, SMB **445**. Plus the Module 09 services: DNS **53**, DHCP **67/68**, NTP **123**, SNMP **161/162**, Syslog **514**.

💡 **Tip:** The **secure** web port (443) is the plain one (80) you just... remember separately. Secure/insecure pairs get their own lesson (10-04).

⚠️ **Watch out:** Don't confuse **SSH (22)** and **Telnet (23)** — the numbers are next to each other, but SSH is the **secure** one. And **SMTP (25)** *sends*; POP3/IMAP *receive*.

---

## 4. Real-world analogy

> **"Well-known ports are famous numbers, like 911 and 411 — everyone just knows them."**

| Famous numbers | Ports |
|----------------|-------|
| 911 = emergency (fixed) | Port 443 = secure web (fixed) |
| 411 = directory (fixed) | Port 53 = DNS (fixed) |
| You don't look them up | Clients don't look up well-known ports |
| Same everywhere | Same on every network |

Because the numbers are fixed and shared, anyone's device can reach the right service without being told.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **HTTP / HTTPS** | | The web protocols — plain (port 80) and secure (port 443). |
| **SMTP** | | Sends email (port 25). |
| **POP3 / IMAP** | | Receive email — POP3 downloads (110); IMAP keeps it on the server (143). |
| **SSH / Telnet** | | Remote command line — SSH secure (22); Telnet insecure (23). |
| **RDP** | | Remote control of a Windows desktop (port 3389). |
| **FTP / TFTP / SMB** | | File transfer/sharing — FTP (20/21), TFTP (69), SMB (445). |

---

## 6. ASCII diagram

```
   MUST-KNOW PORTS, GROUPED BY JOB

   WEB      HTTP 80 (TCP)      HTTPS 443 (TCP)
   MAIL     SMTP 25 send       POP3 110 · IMAP 143  receive   (all TCP)
   REMOTE   SSH 22 secure      Telnet 23 insecure   RDP 3389  (all TCP)
   FILES    FTP 20/21 (TCP)    TFTP 69 (UDP)         SMB 445 (TCP)

   SERVICES (from Module 09):
     DNS 53 (TCP/UDP) · DHCP 67/68 (UDP) · NTP 123 (UDP)
     SNMP 161/162 (UDP) · Syslog 514 (UDP)

   Watch: SSH 22 (secure) vs Telnet 23 (insecure).  SMTP sends; POP/IMAP receive.
```

_Group by job — web, mail, remote, files — and the numbers stick._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-10-03-port-table-01.svg` (created and stored in this module's `assets/`)
> **Shows:** the must-know ports laid out in four labeled job groups (web, mail, remote, files) plus a services row, each entry with its number and TCP/UDP.
> **Key elements & labels:** web (80/443), mail (25/110/143), remote (22/23/3389), files (20-21/69/445), services (53/67-68/123/161-162/514); TCP vs. UDP tags.
> **Color meaning:** each group is labeled with its job name in text; TCP/UDP shown as text tags, not color alone.
> **Flow direction:** four group blocks top-to-bottom, services at the bottom.
> **Alt text (required):** "The must-know ports grouped by job. Web: HTTP port 80 TCP and HTTPS port 443 TCP. Mail: SMTP port 25 sends, POP3 port 110 downloads, IMAP port 143 keeps mail on the server, all TCP. Remote access: SSH port 22 secure, Telnet port 23 insecure, RDP port 3389, all TCP. Files: FTP ports 20 and 21 TCP, TFTP port 69 UDP, SMB port 445 TCP. Network services from Module 09: DNS port 53 TCP and UDP, DHCP ports 67 and 68 UDP, NTP port 123 UDP, SNMP ports 161 and 162 UDP, Syslog port 514 UDP. A note warns not to confuse SSH 22 secure with Telnet 23 insecure, and that SMTP sends while POP3 and IMAP receive."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-10-03-netstat-known-01.jpg`
> A `netstat -an` result with a well-known port (like 443 or 445) circled. Alt text: "The netstat output with a well-known port such as 443 circled, showing a known service in use."
>
> **Photo 2** — `img-10-03-port-flashcards-01.jpg`
> A set of port flashcards. Alt text: "Flashcards with a port number on one side and its protocol on the other, for study."

---

## 9. Hands-on lab

**Goal:** find well-known ports in use on your own laptop and name their service.
**Why:** matching a real number to a service turns the table into memory.

**You will need**
- Your Windows laptop (Equipment tier **E1**), on the internet. Estimated time: 12 min.

⚠️ **Before you start (safety):** `netstat` only **reads**. Nothing changes.

### 9a. Step-by-step instructions

1. Open a browser tab to a secure (`https://`) site.
2. Open the **Command Prompt** and run this exact command:

   ```
   netstat -an
   ```

3. Scan the **Foreign Address** column for ports you now know — especially **:443** (HTTPS).
4. Scan the **Local Address** column for **:445** (SMB) or **:135/:139** (Windows sharing) in a `LISTENING` state.
5. For each known port you find, write the port and its service from the table.

### 9b. Expected results

You'll see known ports like these (your rows differ):

```
   TCP    192.168.1.24:51000   142.250.72.14:443   ESTABLISHED   → HTTPS
   TCP    0.0.0.0:445          0.0.0.0:0           LISTENING     → SMB
```

- ✅ **You did it if:** you found at least one well-known port and named its service.

### 9c. Verify it worked

1. Point to `:443` and say "HTTPS — secure web."
2. Name one **UDP** service and its port (e.g., DNS 53 or NTP 123).

### 9d. Reset / roll back

Nothing changed — `netstat` only reads. Close the window when done.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Swapping SSH and Telnet | Exam miss | SSH = **22** (secure); Telnet = **23** (insecure) |
| Thinking SMTP receives mail | Wrong direction | SMTP **sends**; POP3/IMAP **receive** |
| Mixing HTTP and HTTPS | Security error | HTTP = 80 (plain); HTTPS = 443 (secure) |
| Calling DNS TCP-only | Incomplete | DNS uses **both** TCP and UDP (port 53) |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Website won't load | HTTP/HTTPS port blocked | Check that 80/443 aren't blocked by a firewall |
| Can't reach a file share | SMB (445) blocked | Confirm 445 is open to the server |
| Remote login refused | SSH (22) closed or wrong service | Confirm the server listens on 22 |
| Email sends but won't receive | POP3/IMAP misconfigured | Check 110 (POP3) or 143 (IMAP) settings |

---

## 12. Lesson summary

- **Web:** HTTP **80**, HTTPS **443** (both TCP).
- **Mail:** SMTP **25** (send), POP3 **110**, IMAP **143** (receive; all TCP).
- **Remote:** SSH **22** (secure), Telnet **23** (insecure), RDP **3389** (all TCP).
- **Files:** FTP **20/21** (TCP), TFTP **69** (UDP), SMB **445** (TCP).

**One-sentence recap:** Learn the ports by job — web (80/443), mail (25/110/143), remote (22/23/3389), files (20-21/69/445) — plus the Module 09 services, and note which are TCP or UDP.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-10-03-fill-in-the-blank.md`
2. **Matching** — `wb-10-03-matching.md`
3. **Label the diagram** — `wb-10-03-label-the-diagram.md` (the port groups)
4. **Short answer** — `wb-10-03-short-answer.md`
5. **Hands-on observation** — `wb-10-03-hands-on-observation.md` (spot known ports)
6. **Vocabulary review** — `wb-10-03-vocabulary-review.md`
7. **Reflection** — `wb-10-03-reflection.md`

**Quick written warm-up (do this now):** What port is HTTPS? What port is SSH?

HTTPS: ____________  SSH: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-10-03-knowledge-check.md`.)

1. What port does **HTTPS** use? *(Objective: web)*
   - A) 80
   - B) 443
   - C) 22
   - D) 25

2. What port does **SSH** use? *(Objective: remote)*
   - A) 22
   - B) 23
   - C) 3389
   - D) 21

3. Which protocol **sends** email? *(Objective: mail)*
   - A) POP3
   - B) IMAP
   - C) SMTP
   - D) SMB

4. What service uses port **3389**? *(Objective: remote)*
   - A) SSH
   - B) RDP (Remote Desktop)
   - C) DNS
   - D) FTP

5. **SMB** (Windows file sharing) uses port… *(Objective: files)*
   - A) 21
   - B) 69
   - C) 445
   - D) 143

6. **True or false —** Telnet is the secure remote protocol. Explain in one sentence. *(Objective: remote security)*

7. Which service uses **both TCP and UDP** on its port? *(Objective: DNS)*
   - A) HTTP
   - B) DNS (53)
   - C) SMB
   - D) RDP

8. **Matching —** write the port next to each protocol. *(Objective: recall)*
   - ___ HTTP &nbsp;&nbsp; ___ SMTP &nbsp;&nbsp; ___ FTP
   - A) 21 &nbsp; B) 80 &nbsp; C) 25

9. Fill in the blank: HTTP uses port ____________; HTTPS uses port 443. *(Objective: web)*

10. **Scenario —** You must let people securely log into a server's command line and reach its file share. Which two ports (and protocols) do you open? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-10-03-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-10-03-ports-table.md`. In brief:

- **Objective in one line:** learners recall the must-know ports grouped by job, with TCP/UDP.
- **Common misconceptions:** SSH vs. Telnet numbers; SMTP receives; HTTP = HTTPS. Correct all three.
- **Pacing:** ~30 min — the heaviest recall lesson. Teach by group, then drill; 10-05 adds the memory system.
- **How CompTIA tests it:** port ↔ protocol both ways; TCP vs. UDP; secure vs. insecure counterparts (10-04).
- **Accuracy note:** every port/protocol pair is standards-based (IANA well-known assignments). `netstat -an` is real; sample output representative. No fabricated data.
- **Extension idea:** the secure counterparts (POP3S 995, IMAPS 993, FTPS/SFTP) as a bridge to Lesson 10-04.

---

## 17. Cheat sheet

> **Quick reference — Must-know ports (by job)**
>
> | Port | Protocol | Job |
> |:----:|----------|-----|
> | 20/21 | FTP | file transfer (TCP) |
> | 22 | SSH | secure remote (TCP) |
> | 23 | Telnet | remote, insecure (TCP) |
> | 25 | SMTP | send email (TCP) |
> | 53 | DNS | name→IP (TCP/UDP) |
> | 67/68 | DHCP | addressing (UDP) |
> | 69 | TFTP | simple files (UDP) |
> | 80 | HTTP | web (TCP) |
> | 110 | POP3 | download mail (TCP) |
> | 123 | NTP | time (UDP) |
> | 143 | IMAP | server mail (TCP) |
> | 161/162 | SNMP | monitoring (UDP) |
> | 443 | HTTPS | secure web (TCP) |
> | 445 | SMB | file sharing (TCP) |
> | 514 | Syslog | logging (UDP) |
> | 3389 | RDP | remote desktop (TCP) |
>
> - **SSH 22 (secure) vs Telnet 23 (insecure).** SMTP **sends**; POP3/IMAP **receive**.
>
> _(Full version: `resources/cheat-sheets/ports-and-protocols-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **HTTP (HyperText Transfer Protocol)** — The web protocol for plain web pages (port 80).
- **HTTPS (HTTP Secure)** — The secure, encrypted web protocol (port 443).
- **SMTP (Simple Mail Transfer Protocol)** — Sends email (port 25).
- **POP3 (Post Office Protocol 3)** — Downloads email to one device (port 110).
- **IMAP (Internet Message Access Protocol)** — Reads email kept on the server (port 143).
- **SSH (Secure Shell)** — Secure, encrypted remote command access (port 22).
- **Telnet** — Old, unencrypted remote command access (port 23).
- **RDP (Remote Desktop Protocol)** — Remote control of a Windows desktop (port 3389).
- **FTP (File Transfer Protocol)** — Transfers files between computers (ports 20/21).
- **TFTP (Trivial File Transfer Protocol)** — A simple, no-frills file transfer (port 69).
- **SMB (Server Message Block)** — Windows file and printer sharing (port 445).

(DNS, DHCP, NTP, SNMP, and Syslog were defined in Module 09 and are reused here.)

---

## 19. Homework

- **Practice:** Make flashcards for all 16 rows. Drill port → protocol and protocol → port.
- **Spaced review:** Redo the Lesson 10-02 flashcards on TCP vs. UDP; tag each port TCP or UDP.
- **Preview:** Next lesson, **secure vs. insecure** protocol pairs — the safe version of each.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Which group is easiest for me — web, mail, remote, or files? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can recall the web ports (80, 443).
- [ ] I can recall the mail ports (25, 110, 143).
- [ ] I can recall the remote ports (22, 23, 3389).
- [ ] I can recall the file ports (20/21, 69, 445).
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: secure vs. insecure pairs.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M10-L03** — "The Must-Know Ports (Web, Mail, Remote, Files)" · Module 10 · Unit 7_
