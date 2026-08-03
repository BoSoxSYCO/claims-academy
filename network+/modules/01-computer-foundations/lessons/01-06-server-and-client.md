---
id: NA-M01-L06
module: 01
lesson: 06
title: "What a Server and a Client Are"
unit: 1
objective_ids: ["on-ramp", "1.0"]
reading_level_target: 7
status: Published
est_minutes: 20
equipment_tier: E1
prerequisites: ["NA-M01-L01", "NA-M01-L04"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 01 · Lesson 06] What a Server and a Client Are

> **Unit:** Unit 1 — Computer & Digital Foundations · **Time:** ~20 min · **Equipment:** E1 (laptop; internet helps)
> **You'll need first:** Lessons 01-01 and 01-04 (what a computer is; the operating system).

This is the last lesson in Module 01 — and it's the bridge to networking. Two computers rarely talk as equals. Usually one **asks** and the other **answers**. The asker is the **client**. The answerer is the **server**.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what a **client** is (a computer that asks for something).
- [ ] Explain what a **server** is (a computer that provides something).
- [ ] Give real examples of the client–server relationship.
- [ ] Explain why a "server" is usually just a computer with a job.

---

## 2. Introduction — why this matters

Think about a restaurant one more time. You sit down and ask the waiter for a meal. The waiter brings it to you. You **asked**; the waiter **served**. Neither of you did the other's job — you had different roles.

Computers work the same way when they talk to each other. Most of the time, one computer **asks** for something (a web page, an email, a file), and another computer **provides** it. The one that asks is the **client**. The one that provides is the **server**.

Why is this the bridge to networking? Because almost everything on a network is a client asking a server. When you open a website, your laptop is a client asking a web server. When your laptop gets an address, it's asking a server. Once you see this pattern, networking starts to make sense everywhere.

🎯 **Exam tip:** Network+ is full of servers — web servers, DNS servers, DHCP servers, file servers. They're all the same idea: a computer that provides a specific service when asked.

---

## 3. Simple explanation

Let's define the two roles:

- A **client** is a computer (or program) that **asks for** something. Your laptop's web browser is a client. When you type a website name, the browser asks for that page.

- A **server** is a computer (or program) that **provides** something when asked. The computer that holds the website and sends it back is a server.

The back-and-forth has two parts:

1. **Request** — the client asks. ("Please send me this web page.")
2. **Response** — the server answers. ("Here is the web page.")

Now the part that surprises many beginners:

> **A "server" is usually just a normal computer that has been given a job.** It doesn't have to be a giant machine in a data center. Any computer that provides a service — sending files, web pages, or addresses — is acting as a server.

And roles can switch. Your laptop is a **client** when it browses the web. But if you shared a file from your laptop to another computer, your laptop would be acting as a **server** for that moment. The role depends on the job, not the machine.

Your home network is full of this. Your **router** provides addresses and a path to the internet — it acts as a server for those jobs. Your **laptop** is usually the client, asking for things.

💡 **Tip:** Remember the words by their meaning. A **client** is like a customer (asks). A **server** *serves* (provides). Just like a waiter.

---

## 4. Real-world analogy

> **"A client is the customer; a server is the waiter."**

| At the restaurant… | On the network… |
|--------------------|------------------|
| The **customer** who orders | The **client** (asks for something) |
| The **waiter** who brings the food | The **server** (provides it) |
| Saying "I'd like the soup, please" | The **request** |
| The waiter returning with the soup | The **response** |
| One waiter serving many tables | One server answering many clients |

The customer doesn't cook, and the waiter doesn't eat the meal — they have clear roles. On a network, the client asks and the server provides. Simple as that.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Client** | KLY-ent | A computer or program that asks for something. |
| **Server** | SUR-ver | A computer or program that provides something when asked. |
| **Request** | ree-KWEST | The client's ask ("please send me this"). |
| **Response** | ree-SPONSS | The server's answer ("here it is"). |
| **Service** | SUR-viss | A specific job a server provides, like web pages or files. |

---

## 6. ASCII diagram

```
        CLIENT                                        SERVER
   ┌──────────────┐     1. REQUEST  ("send the page")   ┌──────────────┐
   │  Your laptop │ ───────────────────────────────────▶│  Web server  │
   │  (asks)      │◀─────────────────────────────────── │  (provides)  │
   └──────────────┘     2. RESPONSE ("here is the page") └──────────────┘

   The client ASKS.  The server PROVIDES.  Roles depend on the job, not the machine.
```

_Notice the two arrows: a request goes out, a response comes back. That round trip is the heart of networking._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-01-06-client-server-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a client (laptop) on the left and a server (rack/computer) on the right, with a "Request" arrow going right and a "Response" arrow coming back left.
> **Key elements & labels:** client labeled "asks," server labeled "provides"; the two arrows labeled Request and Response; a small note "a server is just a computer with a job."
> **Color meaning:** Client = blue, Server = green — **and** each is labeled and shaped differently, so it reads in black and white.
> **Flow direction:** left (client) to right (server) and back.
> **Alt text (required):** "A client laptop on the left sends a request arrow to a server on the right, which sends a response arrow back; the client asks and the server provides."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-01-06-browser-request-01.jpg`
> A laptop showing a web page loading, labeled "your laptop = client." Alt text: "A laptop loading a web page, labeled as the client."
>
> **Photo 2** — `img-01-06-server-rack-01.jpg`
> A rack of server computers, labeled "servers (computers with a job)." Alt text: "A rack of server computers in a data center, labeled as servers."
>
> **Photo 3** — `img-01-06-home-router-as-server-01.jpg`
> A home router labeled "acts as a server for addresses and internet access." Alt text: "A home router labeled to show it acts as a server for addresses and internet access."

---

## 9. Hands-on lab

**Goal:** watch your own laptop act as a client asking a server.
**Why:** the client–server idea becomes real when you see your laptop make a request and get a response.

**You will need**
- Your Windows laptop (Equipment tier **E1**).
- An internet connection for this one.
- Estimated time: 8 min.

⚠️ **Before you start (safety):** You will only browse a normal website and run one simple command. Nothing here changes your settings.

### 9a. Step-by-step instructions

1. Open your web browser and go to any normal website you like.
2. As the page loads, say to yourself: "My laptop is the **client**. It just **asked** for this page. A **server** somewhere is **sending** it back."
3. Now open the Command Prompt (click **Start**, type `cmd`, press **Enter**).
4. Type this and press **Enter** (it asks a server to reply):
   ```text
   ping example.com
   ```
5. Read the replies. Each "Reply from ..." is a **response** from a server answering your **request**.

### 9b. Expected results

- The website loads — that's a server responding to your client.
- The `ping` shows replies, for example:
  ```text
  Reply from 93.184.216.34: bytes=32 time=24ms TTL=56
  ```
- ✅ **You did it if:** the page loaded and/or you saw "Reply from ..." lines. Your client asked; a server answered.

> **Note:** Some servers are set to ignore `ping`. If you get "Request timed out," that's okay — try loading the website instead, which still proves the client–server exchange.

### 9c. Verify it worked

1. Point at your laptop and say "client."
2. Point away (toward the internet) and say "server."
3. Explain the round trip in one sentence: "My laptop asked, and a server answered."

### 9d. Reset / roll back

Close the browser and the Command Prompt. Nothing was changed.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking a server is always a huge special machine | You miss servers all around you | A server is any computer doing a "provide" job — even your router |
| Believing a computer is *either* client *or* server forever | You misread how networks work | The role depends on the job; a computer can be both at different times |
| Mixing up request and response | You lose track of the flow | Client sends the **request**; server sends the **response** |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| `ping` says "Request timed out" | The server ignores ping | That's fine — load a website instead to see the exchange |
| The website won't load | No internet connection | Check your Wi-Fi; this lab needs the internet |
| "cmd" won't open | Typed in the wrong place | Click **Start** first, type `cmd`, then press Enter |

---

## 12. Lesson summary

- A **client** is a computer or program that **asks** for something.
- A **server** is a computer or program that **provides** something when asked.
- The exchange is a **request** (client asks) and a **response** (server answers).
- A **server is usually just a normal computer with a job** — even your router acts as one.

**One-sentence recap:** A client asks and a server provides, and the role depends on the job, not the machine.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-01-06-fill-in-the-blank.md`
2. **Matching** — `wb-01-06-matching.md`
3. **Label the diagram** — `wb-01-06-label-the-diagram.md` (label client, server, request, response)
4. **Short answer** — `wb-01-06-short-answer.md`
5. **Hands-on observation** — `wb-01-06-hands-on-observation.md` (record your client–server test)
6. **Vocabulary review** — `wb-01-06-vocabulary-review.md`
7. **Reflection** — `wb-01-06-reflection.md`

**Quick written warm-up (do this now):** When you watch a video online, which is your laptop — the client or the server?

____________________________________________________________________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-01-06-knowledge-check.md`.)

1. What is a client? *(Objective: define client)*
   - A) A computer that provides something
   - B) A computer that asks for something
   - C) A type of cable
   - D) The power port

2. What is a server? *(Objective: define server)*
   - A) A computer that asks for something
   - B) A computer that provides something when asked
   - C) A screen
   - D) A password

3. When your browser loads a web page, your laptop is the… *(Objective: examples)*
   - A) Server
   - B) Client
   - C) Cable
   - D) Firmware

4. The client's "ask" is called the… *(Objective: request/response)*
   - A) Response
   - B) Request
   - C) Service
   - D) Program

5. The server's "answer" is called the… *(Objective: request/response)*
   - A) Request
   - B) Response
   - C) Client
   - D) Port

6. **True or false —** A server must always be a giant special machine in a data center. Explain your answer in one sentence. *(Objective: a server is a computer with a job)*

7. In the restaurant analogy, the **waiter** stands for… *(Objective: analogy)*
   - A) The client
   - B) The server
   - C) The request
   - D) The cable

8. **Matching —** write the letter next to each term. *(Objective: vocabulary)*
   - ___ Client &nbsp;&nbsp; ___ Server &nbsp;&nbsp; ___ Request
   - A) provides something &nbsp; B) the client's ask &nbsp; C) asks for something

9. Fill in the blank: Your home router provides addresses and internet access, so it acts as a ____________. *(Objective: examples)*

10. **Scenario —** You share a file from your laptop so a friend's computer can download it. For that moment, which role is your laptop playing, and why? *(Objective: roles depend on the job)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-01-06-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-01-06-server-and-client.md`. In brief:

- **Objective in one line:** learners can explain client vs. server and that a server is a computer with a job.
- **Common misconceptions:** "servers are always huge machines"; "a computer is only ever one role." Correct with the waiter analogy and the file-sharing example.
- **Pacing:** ~20 min. This is the bridge into Unit 2 — end by pointing ahead to networks.
- **How CompTIA tests it:** every service (web, DNS, DHCP, file) is a server providing something to clients.
- **Support idea:** role-play the restaurant: one learner is client, one is server, pass a "request" and "response" note.
- **Extension idea:** list five servers the learner used today (web, video, email, app store, maps).

---

## 17. Cheat sheet

> **Quick reference — Client & Server**
>
> - **Client** = asks for something (your laptop's browser).
> - **Server** = provides something when asked (a web server, your router).
> - **Request** = the client's ask · **Response** = the server's answer.
> - A **server is usually just a computer with a job** — not always a big machine.
> - **Roles depend on the job**, not the machine; a computer can be both.
> - **Waiter analogy:** customer = client · waiter = server · order = request · food = response.
>
> _(Full version: `resources/cheat-sheets/computer-basics-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Client** — A computer or program that asks for something.
- **Server** — A computer or program that provides something when asked.
- **Request** — The client's ask ("please send me this").
- **Response** — The server's answer ("here it is").
- **Service** — A specific job a server provides, like web pages or files.

---

## 19. Homework

- **Practice:** List five online things you used today (a website, a video, an app). For each, write "my device = client, their computer = server."
- **Spaced review:** Redo the flashcards from Lessons 01-01 through 01-05 — this is the end of Module 01, so review the whole set.
- **Preview:** You now know what a computer is. Next, we ask the big question: *why connect computers together at all?* That starts Module 02 — real networking.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. What is still fuzzy for me? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain what a client is.
- [ ] I can explain what a server is.
- [ ] I can give a real example of a request and a response.
- [ ] I understand a server is usually just a computer with a job.
- [ ] I completed the hands-on lab and saw my laptop act as a client.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.

🎉 **That's the end of Module 01!** You now understand what a computer is, its parts, its ports, its operating system, hardware vs. software, and how clients and servers talk. Next stop: **Module 02 — real networking.**

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M01-L06** — "What a Server and a Client Are" · Module 01 · Unit 1_
