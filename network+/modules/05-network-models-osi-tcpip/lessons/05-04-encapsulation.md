---
id: NA-M05-L04
module: 05
lesson: 04
title: "Encapsulation: How Data Gets Wrapped and Unwrapped"
unit: 2
objective_ids: ["1.1"]
reading_level_target: 7
status: Published
est_minutes: 28
equipment_tier: E1
prerequisites: ["NA-M05-L02", "NA-M05-L03"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 05 · Lesson 04] Encapsulation: How Data Gets Wrapped and Unwrapped

> **Unit:** Unit 2 — Networking Foundations · **Time:** ~28 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lesson 05-02 (the OSI 7 layers) and Lesson 05-03 (TCP/IP).

You know the layers. Now watch what actually happens to your data as it rides **down** the stack: each layer **wraps** it with a little label. That wrapping is called **encapsulation**. On the other computer, each layer **unwraps** it. This lesson makes that clear, and gives each wrapped stage its proper name.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain **encapsulation** (wrapping data going down) and **de-encapsulation** (unwrapping going up).
- [ ] Name what a layer adds: a **header** (and a **trailer** at Layer 2).
- [ ] Name the data unit at each layer: **data, segment, packet, frame, bits**.
- [ ] Put the five names in the right order.

---

## 2. Introduction — why this matters

Think about **mailing a letter inside nested envelopes**. You write a note (the real message). You slide it into an envelope and write the person's **name** on it. You put that into a bigger envelope with their **street and city**. The post office puts many envelopes into a labeled **truck bin** for the next stop. At each step, the message gets **another wrapper with another label** — but the note inside never changes.

That is exactly what a network does. As your data goes **down** the layers, each layer wraps it with its own small label (a **header**) holding the info that layer needs — a port, an IP address, a MAC address. This wrapping is **encapsulation**. On the far computer, each layer peels off its wrapper on the way **up** — **de-encapsulation** — until the app reads the original note.

Why learn this? Because it explains what a "packet" or a "frame" really is, why each layer has its own address, and how a firewall or capture tool reads traffic. It ties the whole model together.

🎯 **Exam tip:** Network+ expects the data-unit names in order — **data, segment, packet, frame, bits** — and that encapsulation **adds** headers going down while de-encapsulation **removes** them going up.

---

## 3. Simple explanation

Let's define the wrapping, then name each wrapped stage.

### Encapsulation = wrapping on the way down
**Encapsulation** is the process where each layer, going **down** the stack, **adds its own header** to the data it gets from the layer above. A header is a small label with that layer's control info (like an address). The Data Link layer also adds a **trailer** — a small label at the *end* used to check for errors.

Each layer treats everything from above as one lump and wraps the whole thing. The original data rides inside, untouched.

### De-encapsulation = unwrapping on the way up
**De-encapsulation** is the reverse. On the receiving computer, each layer, going **up**, **removes its own header** (and trailer), reads the info, and passes the rest up. By the time it reaches the top, only the original data is left.

### The name changes at each layer — the PDU
The wrapped bundle has a special name at each layer, called the **PDU** (Protocol Data Unit). Going **down** the stack:

| Layer | What's added | Name of the unit (PDU) |
|-------|--------------|------------------------|
| Application (top) | the message itself | **Data** |
| Transport (L4) | a header with **ports** (TCP) | **Segment** |
| Network (L3) | a header with **IP addresses** | **Packet** |
| Data Link (L2) | a header **+ trailer** with **MAC addresses** | **Frame** |
| Physical (L1) | nothing added — sent as signals | **Bits** |

So the same message is called **data**, then a **segment**, then a **packet**, then a **frame**, then **bits** on the wire — depending on how far down it has traveled.

### Remember the order
Going **down** (encapsulation): **Data → Segment → Packet → Frame → Bits.**

> **The big idea:** As data goes **down** the stack, each layer **wraps** it with a header (Layer 2 adds a trailer too) — that's **encapsulation** — and its name changes: **data, segment, packet, frame, bits**. Going **up**, each layer **unwraps** its part — **de-encapsulation** — back to the original data.

💡 **Tip:** "Packet" and "frame" are not random words. A **packet** has an **IP** address (Layer 3); a **frame** has a **MAC** address (Layer 2). The address tells you the layer.

---

## 4. Real-world analogy

> **"Encapsulation is nested envelopes: each layer adds a wrapper with its own label; the receiver opens them in reverse."**

| Mailing a letter | Networking |
|------------------|------------|
| The note you wrote | **Data** (the message) |
| Envelope with the person's **name** | **Segment** (port — which app) |
| Bigger envelope with the **city address** | **Packet** (IP address) |
| Truck bin labeled for the **next stop** | **Frame** (MAC address) |
| The truck physically driving | **Bits** on the wire |
| Opening each envelope at the other end | **De-encapsulation** |

Each wrapper carries the label that step needs. The note inside never changes — it's just wrapped and unwrapped.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Encapsulation** | en-KAP-soo-LAY-shun | Wrapping data with a header at each layer, going down the stack. |
| **De-encapsulation** | DEE-en-kap... | Unwrapping the headers at each layer, going up the stack. |
| **Header** | HED-er | A small label a layer adds to the front, holding its control info. |
| **Trailer** | TRAY-ler | A small label the Data Link layer adds to the end (for error checking). |
| **PDU (Protocol Data Unit)** | P-D-U | The name for the wrapped data unit at a given layer. |
| **Segment** | SEG-ment | The Transport-layer PDU (data plus a port header). |
| **Packet** | PAK-et | The Network-layer PDU (data plus an IP header). |
| **Frame** | fraym | The Data Link-layer PDU (data plus a MAC header and trailer). |

---

## 6. ASCII diagram

```
   ENCAPSULATION — going DOWN, each layer adds a wrapper

   L7 App     [ DATA ]                                  name: Data
   L4 Trans   [P|  DATA ]         + port header         name: Segment
   L3 Net     [IP|P|  DATA ]      + IP header           name: Packet
   L2 Link    [MAC|IP|P| DATA |T] + MAC header & trailer name: Frame
   L1 Phys    101101010101...     sent as signals        name: Bits

   DE-ENCAPSULATION — going UP, each layer peels its own wrapper off,
   until only [ DATA ] is left for the app.

   Order down: Data → Segment → Packet → Frame → Bits
```

_Each layer adds a label (header); Layer 2 also adds a trailer (T). The receiver unwraps in reverse._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-05-04-encapsulation-01.svg` (created and stored in this module's `assets/`)
> **Shows:** five rows, top to bottom, with the same "DATA" block gaining one more wrapper (header box) each row: Data → +port = Segment → +IP = Packet → +MAC & trailer = Frame → bits. A down arrow labeled "encapsulation (add headers)" and an up arrow labeled "de-encapsulation (remove headers)."
> **Key elements & labels:** each row shows the layer, the header added, and the PDU name; the original DATA block stays visible inside every wrapper.
> **Color meaning:** each header a different shade **and** text-labeled (port, IP, MAC), and each row names its PDU, so it reads in black and white.
> **Flow direction:** top-to-bottom for encapsulation; an up arrow shows de-encapsulation.
> **Alt text (required):** "Five stacked rows showing the same data block gaining one more labeled wrapper each row: at the Transport layer a port header makes a segment, at the Network layer an IP header makes a packet, at the Data Link layer a MAC header and trailer make a frame, and at the Physical layer it becomes bits. A down arrow is labeled encapsulation, add headers; an up arrow is labeled de-encapsulation, remove headers."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-05-04-nested-envelopes-01.jpg`
> Envelopes nested inside each other. Alt text: "Envelopes nested inside one another, an analogy for encapsulation."
>
> **Photo 2** — `img-05-04-packet-capture-01.jpg`
> A packet-capture tool showing header layers. Alt text: "A packet capture showing stacked header layers, real encapsulation."
>
> **Photo 3** — `img-05-04-parcel-labels-01.jpg`
> A parcel with several stacked shipping labels. Alt text: "A parcel with several stacked labels, like headers added at each layer."

---

## 9. Hands-on lab

**Goal:** act out encapsulation with paper "envelopes," then name each stage.
**Why:** physically wrapping and unwrapping makes the idea impossible to forget.

**You will need**
- Paper and pen (Equipment tier **E1**). Optional: a few real envelopes.
- Estimated time: 12 min.

⚠️ **Before you start (safety):** This is a hands-on paper task. Nothing on your computer changes.

### 9a. Step-by-step instructions

1. On a small paper, write a short message. Label it **"Data."**
2. Wrap it (fold another paper around it). On the wrapper, write **"port"** and label this bundle **"Segment."**
3. Wrap again. On this wrapper write **"IP address"** and label it **"Packet."**
4. Wrap once more. On this wrapper write **"MAC address"** at the front and **"error check"** at the back, and label it **"Frame."**
5. Say "now it travels as **Bits**" and slide it across the table.
6. **Unwrap in reverse:** remove Frame, then Packet, then Segment, until you reach **Data**. Say "de-encapsulation" as you unwrap.

### 9b. Expected results

- Four nested wrappers labeled Segment, Packet, Frame (and the inner Data).
- You unwrapped them in reverse order back to Data.
- ✅ **You did it if:** you can say the order down (Data, Segment, Packet, Frame, Bits) and that unwrapping reverses it.

### 9c. Verify it worked

1. Point to the "IP address" wrapper and name its PDU (Packet). Point to "MAC" and name its PDU (Frame).
2. Ask: "Going up, does each layer add or remove its wrapper?" (Remove.)

### 9d. Reset / roll back

Nothing to undo — it's paper. Keep the wrappers to review the names.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking layers change the data | You expect the message to be edited | The data rides inside untouched; layers only add/remove wrappers |
| Swapping packet and frame | You mislabel the PDU | Packet = IP (L3); Frame = MAC (L2) |
| Thinking encapsulation adds on the way up | You reverse the process | Down = add headers (encapsulate); up = remove them |
| Forgetting the Layer 2 trailer | You miss the error check | Only Layer 2 adds a trailer at the end |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Can't recall the PDU order | New names | Down: Data, Segment, Packet, Frame, Bits |
| Packet vs. frame confusion | Address clue missed | IP address → packet (L3); MAC address → frame (L2) |
| Unsure which way adds headers | Direction mixed up | Sending = down = add; receiving = up = remove |

---

## 12. Lesson summary

- **Encapsulation** wraps data with a **header** at each layer going **down**; Layer 2 also adds a **trailer**.
- **De-encapsulation** removes those wrappers going **up**, back to the original data.
- The data-unit name changes: **Data → Segment → Packet → Frame → Bits** (top to bottom).
- **Packet = IP (L3); Frame = MAC (L2).** The address names the layer.

**One-sentence recap:** Encapsulation wraps your data with a header at each layer on the way down — data becomes a segment, then a packet, then a frame, then bits — and de-encapsulation unwraps it on the way up.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-05-04-fill-in-the-blank.md`
2. **Matching** — `wb-05-04-matching.md`
3. **Label the diagram** — `wb-05-04-label-the-diagram.md` (the wrapping stack)
4. **Short answer** — `wb-05-04-short-answer.md`
5. **Hands-on observation** — `wb-05-04-hands-on-observation.md` (wrap-and-unwrap)
6. **Vocabulary review** — `wb-05-04-vocabulary-review.md`
7. **Reflection** — `wb-05-04-reflection.md`

**Quick written warm-up (do this now):** What is the Network-layer PDU called? Going down the stack, does each layer add or remove a header?

Network PDU: ____________  Down the stack: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-05-04-knowledge-check.md`.)

1. What is **encapsulation**? *(Objective: define)*
   - A) Removing headers going up
   - B) Wrapping data with a header at each layer going down
   - C) Deleting data
   - D) A type of cable

2. What does each layer **add** during encapsulation? *(Objective: header)*
   - A) A header (control info)
   - B) A new IP address for you
   - C) More bandwidth
   - D) A password

3. The Transport-layer PDU is called a… *(Objective: PDU names)*
   - A) packet
   - B) frame
   - C) segment
   - D) bit

4. The Network-layer PDU (with an IP address) is called a… *(Objective: PDU names)*
   - A) frame
   - B) packet
   - C) segment
   - D) signal

5. The Data Link-layer PDU (with a MAC address) is called a… *(Objective: PDU names)*
   - A) packet
   - B) segment
   - C) frame
   - D) data

6. **True or false —** De-encapsulation adds headers as data goes up the stack. Explain in one sentence. *(Objective: direction)*

7. Which layer adds a **trailer** as well as a header? *(Objective: trailer)*
   - A) Physical
   - B) Data Link
   - C) Network
   - D) Transport

8. **Matching —** write the letter next to each PDU. *(Objective: PDU names)*
   - ___ Segment &nbsp;&nbsp; ___ Packet &nbsp;&nbsp; ___ Frame
   - A) has an IP address (L3) &nbsp; B) has a MAC address (L2) &nbsp; C) has a port (L4)

9. Fill in the blank: Going down the stack, the order of names is Data, ____________, Packet, Frame, Bits. *(Objective: order)*

10. **Scenario —** A capture tool shows a unit with a MAC address at the front and an error-check at the end. What PDU is it, and which layer added those parts? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-05-04-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-05-04-encapsulation.md`. In brief:

- **Objective in one line:** learners explain encapsulation/de-encapsulation and name the PDUs in order.
- **Common misconceptions:** layers edit the data; packet vs. frame; direction of adding headers. Correct all three.
- **Pacing:** ~28 min. The wrap-and-unwrap lab is the payoff.
- **How CompTIA tests it:** PDU order (data/segment/packet/frame/bits) and address→layer (IP=packet, MAC=frame).
- **Support idea:** use real nested envelopes; write a label on each.
- **Extension idea:** open a packet capture and point out the stacked headers for fast learners.

---

## 17. Cheat sheet

> **Quick reference — Encapsulation**
>
> - **Encapsulation** = add a **header** at each layer going **down**; **de-encapsulation** = remove them going **up**.
> - **PDU names (down):** Data → Segment → Packet → Frame → Bits.
> - **Segment** = port (L4) · **Packet** = IP (L3) · **Frame** = MAC + trailer (L2) · **Bits** = signals (L1).
> - The data rides **inside** untouched; only wrappers are added/removed.
> - Address tells the layer: **IP → packet**, **MAC → frame**.
>
> _(Full version: `resources/cheat-sheets/network-models-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Encapsulation** — Wrapping data with a header at each layer, going down the stack.
- **De-encapsulation** — Unwrapping the headers at each layer, going up the stack.
- **Header** — A small label a layer adds to the front, holding its control info.
- **Trailer** — A small label the Data Link layer adds to the end (for error checking).
- **PDU (Protocol Data Unit)** — The name for the wrapped data unit at a given layer.
- **Segment** — The Transport-layer PDU (data plus a port header).
- **Packet** — The Network-layer PDU (data plus an IP header).
- **Frame** — The Data Link-layer PDU (data plus a MAC header and trailer).

---

## 19. Homework

- **Practice:** Draw the encapsulation stack from memory, adding the right header and PDU name at each layer.
- **Spaced review:** Redo the Lesson 05-03 flashcards for the TCP/IP ↔ OSI mapping.
- **Preview:** Now we put it all together — the next lesson follows **one packet** on its whole trip through every layer, end to end.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I name the PDU at each layer now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain encapsulation and de-encapsulation.
- [ ] I know a layer adds a header (and Layer 2 a trailer).
- [ ] I can name the PDUs in order: data, segment, packet, frame, bits.
- [ ] I know packet = IP (L3) and frame = MAC (L2).
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: following one packet through all the layers.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M05-L04** — "Encapsulation: How Data Gets Wrapped and Unwrapped" · Module 05 · Unit 2_
