# Teaching Notes — NA-M05-L04 "Encapsulation: How Data Gets Wrapped and Unwrapped"

> 🔒 Instructor materials. Pairs with the lesson and `wb-05-04-answers.md`.

## Objective in one line
Learners explain encapsulation/de-encapsulation and name the PDUs (data, segment, packet, frame, bits) in order.

## Where this sits
Fourth lesson of Module 05. Builds on the OSI layers (05-02) and TCP/IP (05-03); finally gives "packet" and "frame" their real meaning. Sets up the end-to-end packet walk (05-05). Time: ~28 min + ~40 min worksheets/lab.

## The anchor
**Nested envelopes.** Each layer adds a wrapper with its own label; the receiver opens them in reverse. The inner note never changes.

## Common misconceptions (and the fix)
- "Layers edit the data." → Fix: the data rides inside untouched; layers only add/remove wrappers.
- "Packet = frame." → Fix: packet has an IP address (L3); frame has a MAC address (L2).
- "Encapsulation happens going up." → Fix: down = add headers; up = remove them.
- "Every layer adds a trailer." → Fix: only Layer 2 adds a trailer (for error checking).

## Pacing tips
- The wrap-and-unwrap lab (5.4.E) is the payoff — physically wrapping cements the order.
- Drill: address names the layer (IP → packet, MAC → frame).

## How CompTIA tests it
PDU order (data/segment/packet/frame/bits) and address→layer identification; direction of header add/remove.

## Support ideas
- Use real nested envelopes and write a label on each.

## Extension ideas
- Open a packet capture and point to the stacked headers (Ethernet/IP/TCP) for fast learners.

## Materials checklist
- Lesson · `dgm-05-04-encapsulation-01.svg` · worksheets `wb-05-04-*` (incl. wrap-and-unwrap lab) · `quiz-05-04-knowledge-check.md`
- Answer key `wb-05-04-answers.md` · glossary updated (encapsulation, de-encapsulation, header, trailer, PDU, segment, packet, frame) · cheat sheet updated
- Photos to capture: nested envelopes; a packet capture with stacked headers; a parcel with several labels.

---
_NetworkAcademy+ · Teaching Notes 05-04 · CompTIA Network+ N10-009_
