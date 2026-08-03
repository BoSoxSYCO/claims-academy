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
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 05_
