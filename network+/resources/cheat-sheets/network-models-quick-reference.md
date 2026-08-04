# Cheat Sheet — Network Models (OSI & TCP/IP)

> A printable quick reference for **Module 05**. Grows as the module's lessons are published.

---

## Why a model (Lesson 05-01)

- **Model** = a simplified plan of a complex thing (like a subway map). It hides detail on purpose.
- **Layer** = one job in the model. Layers **stack**, each doing one task and handing data on.
- **Direction:** data moves **down** the stack to **send**, **up** the stack to **receive**.
- **Protocol** = the agreed rules a layer follows so any maker's gear works together.

**Three reasons layers help:**
1. **Divide and conquer** — one huge job becomes several small ones.
2. **Troubleshoot by layer** — ask "which layer?" (cable vs. app) to find a fault fast.
3. **Mix and match** — swap one layer (e.g., Wi-Fi for cable) without breaking the others.

**The two models:**

| Model | Layers | Role |
|-------|--------|------|
| **OSI** | **7** | the detailed teaching / reference map |
| **TCP/IP** | **4** | the practical model the internet uses |

> Both describe the **same** networking — they just split it into a different number of layers. They do **not** compete.

```
One big task ("open a web page")  →  a stack of small jobs
   App (your browser)          top: closest to you
   Address (where to)
   Move (send it)
   Signal (cable / Wi-Fi)      bottom: the physical link
```

> **Remember:** a model turns one confusing process into a tidy stack — so you can divide the work and find problems by layer.

---

## The OSI 7 layers (Lesson 05-02)

Bottom (Layer 1) = the wire · Top (Layer 7) = your app. **Down = send, up = receive.**

| # | Layer | One job | Lives here |
|---|-------|---------|-----------|
| 7 | **Application** | your apps and their rules | browser, email |
| 6 | **Presentation** | format, encrypt, translate | encryption |
| 5 | **Session** | start, keep, end the talk | app connections |
| 4 | **Transport** | split, check, ports | reliable delivery |
| 3 | **Network** | address + route between networks | IP, **router** |
| 2 | **Data Link** | local delivery on one network | MAC, **switch** |
| 1 | **Physical** | raw bits on the medium | **cable / Wi-Fi** |

- **Mnemonic (1 → 7):** **P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way.
- **Fast facts:** cable = L1 · switch/MAC = L2 · router/IP = L3 · ports = L4 · encryption = L6 · browser = L7.
- Bottom 3 (1–3) **move** data around; top 4 (4–7) **prepare and use** it.

> **Remember:** know the 7 in order, their numbers, and one job each — it's the backbone of the whole exam.

---

## TCP/IP model & the OSI mapping (Lesson 05-03)

The internet's own model — **4 layers** (bottom → top): Network Access · Internet · Transport · Application.

| TCP/IP (4) | = OSI layer(s) | Holds |
|------------|----------------|-------|
| **Application** | 7 + 6 + 5 | your apps, format, encrypt |
| **Transport** | 4 | **TCP**, ports |
| **Internet** | 3 | **IP**, routers |
| **Network Access** | 2 + 1 | MAC, cable / Wi-Fi |

- **Anchor the mapping on the middle:** Internet = **OSI 3** (IP) · Transport = **OSI 4** (TCP).
- The **top and bottom** TCP/IP layers each **merge** several OSI layers; the middle two are **1-to-1**.
- **IP** = addressing/routing (Internet). **TCP** = reliable, in-order delivery (Transport).
- TCP/IP and OSI **do not compete** — same networking, fewer layers.

> **Remember:** "Layer 3 issue" = the Internet layer = IP/routing. Both models, one network.

---

## Encapsulation & the PDUs (Lesson 05-04)

- **Encapsulation** = each layer **adds a header** going **down** the stack. **De-encapsulation** = each layer **removes** it going **up**.
- **Header** = front label (control info). **Trailer** = end label for error-checking (Layer 2 only).
- The data rides **inside**, untouched — only wrappers change.

| Layer | Adds | PDU name |
|-------|------|----------|
| Application | the message | **Data** |
| Transport (L4) | port header (TCP) | **Segment** |
| Network (L3) | IP header | **Packet** |
| Data Link (L2) | MAC header + trailer | **Frame** |
| Physical (L1) | — (signals) | **Bits** |

- **Order down:** Data → Segment → Packet → Frame → Bits.
- **Address names the layer:** IP → **packet** (L3) · MAC → **frame** (L2).

> **Remember:** a "packet" is data wrapped with an IP header; a "frame" is data wrapped with a MAC header.

---

## One packet, end to end (Lesson 05-05)

- **Down** the sender (encapsulate) → **across** the network → **up** the receiver (de-encapsulate).
- **Switch** = Layer 2, reads **MAC** (local delivery). **Router** = Layer 3, reads **IP** (picks next hop, builds a new frame).
- **IP = end-to-end** — the destination IP never changes from sender to receiver.
- **MAC = hop-to-hop** — a fresh MAC pair for every link crossed.
- One link = a **hop**; request + reply = a **round trip**. See hops with **`tracert <site>`**.

```
[Laptop] → [Switch L2] → [Router L3] === internet === [Router L3] → [Server]
   IP:  SERVER-IP ......... same the whole way (end-to-end) .........
   MAC: changes at every hop (hop-to-hop)
```

> **Remember:** the destination IP is the house address (never changes); the MAC is the "next truck" label (changes each hop).

---
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 05_
