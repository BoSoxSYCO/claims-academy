# Teaching Notes — NA-M05-L02 "The OSI 7 Layers — A Floor-by-Floor Tour"

> 🔒 Instructor materials. Pairs with the lesson and `wb-05-02-answers.md`.

## Objective in one line
Learners name the 7 OSI layers in order, give one job each, and place common devices/addresses on the right layer.

## Where this sits
Second lesson of Module 05 and the anchor for the whole exam. Builds on 05-01 (why a model). Uses MAC (03-04), IP (02-04), switch/router (light). Feeds TCP/IP (05-03) and encapsulation (05-04). The largest lesson so far (~30 min). Time: ~30 min + ~45 min worksheets/lab.

## The anchor
**A 7-floor building.** Mail rides down to leave, up to be delivered; one job per floor. Layer 1 = ground (wire), Layer 7 = top (app).

## Common misconceptions (and the fix)
- "Order is flipped (7 at bottom)." → Fix: Layer 1 = Physical (bottom); Layer 7 = Application (top).
- "Switch and router are the same." → Fix: switch = L2 (MAC, local); router = L3 (IP, between networks).
- "Layer 7 is the whole app." → Fix: L7 is the network access for apps, not every app feature.
- "Layers 5–6 are pointless." → Fix: Session starts/ends the talk; Presentation formats/encrypts.

## Pacing tips
- The build-the-ladder lab (5.2.E) is essential — everyone writes the ladder from memory.
- Drill the mnemonic aloud several times; it's the single most tested fact.

## How CompTIA tests it
Layer order and number; "which layer does X work at" (router = 3, switch = 2, cable = 1). Bits/frames/packets/segments data-name mapping shows up too (previewed for 05-04).

## Support ideas
- Physically model floors with a stack of sticky notes; move a "message" up and down.

## Extension ideas
- Add the data unit per layer (bits, frames, packets, segments, data) as a bridge to encapsulation (05-04).

## Materials checklist
- Lesson · `dgm-05-02-osi-stack-01.svg` · worksheets `wb-05-02-*` (incl. build-the-ladder lab) · `quiz-05-02-knowledge-check.md`
- Answer key `wb-05-02-answers.md` · glossary updated (7 layer names) · cheat sheet updated (OSI 7 layers)
- Photos to capture: Ethernet cable (L1); a switch (L2); a browser (L7).

---
_NetworkAcademy+ · Teaching Notes 05-02 · CompTIA Network+ N10-009_
