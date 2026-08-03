# Answer Key — Lesson NA-M05-L04 "Encapsulation: How Data Gets Wrapped and Unwrapped"

> 🔒 **Instructor / self-check only.** Covers Quiz 5.4.Q and Worksheets 5.4.A–5.4.G.

**PDU order (down):** Data → Segment → Packet → Frame → Bits. **Packet = IP (L3); Frame = MAC (L2).**

---

## Quiz 5.4.Q — Knowledge Check (10 pts)

1. **B** — Encapsulation wraps data with a header at each layer going down.
2. **A** — Each layer adds a header (its control info).
3. **C** — The Transport-layer PDU is a segment.
4. **B** — The Network-layer PDU (IP address) is a packet.
5. **C** — The Data Link-layer PDU (MAC address) is a frame.
6. **False.** Good answer: de-encapsulation *removes* headers as data goes up; encapsulation (going down) adds them.
7. **B** — Only the Data Link layer adds a trailer as well as a header.
8. Segment → **C**, Packet → **A**, Frame → **B**.
9. **Segment** (Data, Segment, Packet, Frame, Bits).
10. A **frame**; the **Data Link layer (L2)** added the MAC header and the trailer.

**Scoring:** 1 pt each. Pass = 8/10 (80%).

## Worksheet 5.4.A — Fill-in-the-blank (20 pts, 2 each)

1. encapsulation 2. de-encapsulation 3. header 4. trailer 5. segment 6. packet 7. frame 8. bits 9. down 10. up.
**Challenge (+2):** Data, Segment, Packet, Frame, Bits.

## Worksheet 5.4.B — Matching (20 pts)

1→B, 2→A, 3→D, 4→C, 5→F, 6→E, 7→G, 8→H.
**Explain (+2):** any correct reason.

## Worksheet 5.4.C — Label the diagram (20 pts, 4 each)

1. Data 2. Segment 3. Packet 4. Frame 5. Bits. **Q6:** DOWN (encapsulation) *(2)*.
**Why (+2):** the address on the label tells you — an IP address means it's a packet (L3); a MAC address means it's a frame (L2).

## Worksheet 5.4.D — Short answer (20 pts)

1. Encapsulation wraps data with a header at each layer; it happens going **down** the stack (sending). *(idea /3, why /2)*
2. A header is added to the front; a trailer to the end (for error checking); only the **Data Link** layer adds a trailer. *(idea /3, why /2)*
3. Data (message), Segment (+port), Packet (+IP), Frame (+MAC & trailer), Bits (signals). *(idea /3, order /2)*
4. A packet carries an **IP** address (L3); a frame carries a **MAC** address (L2). *(idea /3, why /2)*

## Worksheet 5.4.E — Hands-on observation (25 pts)

- Step 1: a message written and labeled Data *(5)*.
- Step 2: wrappers labeled → Segment, Packet, Frame *(10)*.
- Step 3: travels as **Bits** *(5)*.
- Step 4: unwrapped Frame → Packet → Segment → Data; each layer **removes** its wrapper going up *(5)*.

## Worksheet 5.4.F — Vocabulary review (20 pts)

- **Part A:** Encapsulation = wrapping data with a header at each layer (going down); Header = a front label with control info; PDU = the name for the wrapped unit at a layer; Frame = the L2 PDU (MAC header + trailer).
- **Part B:** 5. Packet 6. Segment 7. de-encapsulation.
- **Part C:** any correct sentences.
- **Part D:** the L2 PDU is a **frame**.

## Worksheet 5.4.G — Reflection (10 pts)

Completion credit — honest answers, no wrong response.

---
_NetworkAcademy+ · Answer Key 5.4 · CompTIA Network+ N10-009 · Instructor materials_
