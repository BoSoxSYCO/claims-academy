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
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 05_
