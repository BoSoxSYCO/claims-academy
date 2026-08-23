# Teaching Notes — NA-M07-L06 "First Login: Console vs. Web Management"

> 🔒 Instructor materials. Pairs with the lesson and `wb-07-06-answers.md`.

## Objective in one line
Learners contrast **console (out-of-band)** vs. **web (in-band)** management, explain why the first login uses the console, and open a real console session to the Dell 3424.

## Where this sits
Sixth and final lesson of Module 07. It follows 07-05 (the switch's parts, where learners found the console port) and is **Lab B, part 2** — actually opening a terminal. It sets up Module 08 (IP addressing), since the web door needs an IP.
Time: ~30 min + ~45 min worksheets/lab.

## The anchor
**A new house lock:** the **physical key** (console) gets you in the first time and always works, even in a power cut; the **keypad** (web page) is the easy everyday way in — but only once it's set up.

## Common misconceptions (and the fix)
- "The web works out of the box." → Fix: a new switch has no IP, so a browser can't reach it — console first.
- "The console needs the network." → Fix: it's out-of-band; it works with the network down.
- "Baud rate doesn't matter." → Fix: a wrong baud rate is the #1 cause of a blank/garbled screen.
- "In-band and out-of-band are the same." → Fix: in-band rides the network (web/SSH); out-of-band does not (console).

## Pacing tips
- Budget time for the console-connect lab (7.6.E) — most stumbles are the COM port or baud rate, not the switch.
- Have learners say "out-of-band = works with no network" out loud; it sticks the exam point.

## Accuracy note (Prime Directive #7)
Default **username/password**, the exact **baud rate**, the **COM port**, and any **default IP** vary by unit and firmware. The lesson and lab mark all of these `[TO VERIFY ON HARDWARE]`. Do **not** present a specific login, prompt, or on-screen output as fact until it is confirmed on the learner's actual 3424 — never fabricate a session.

## How CompTIA tests it
Out-of-band vs. in-band management; console/serial settings (9600 8-N-1); why the first setup is done by console; management access methods.

## Support ideas
- If a learner has no serial port, walk through the USB-to-serial adapter and finding the COM number together.
- Let them just reach a prompt today; configuration comes later once undo is understood.

## Extension ideas
- SSH vs. Telnet (encrypted vs. plain text) and dedicated out-of-band management ports for fast learners.

## Materials checklist
- Lesson · `dgm-07-06-console-vs-web-01.svg` · worksheets `wb-07-06-*` (incl. open-a-console lab) · `quiz-07-06-knowledge-check.md`
- Answer key `wb-07-06-answers.md` · glossary updated (console cable, terminal emulator, baud rate, out-of-band management, in-band management, web management) · cheat sheet updated
- Photos to capture: console cable in the port; PuTTY serial settings; the web login page at the switch's IP.

---
_NetworkAcademy+ · Teaching Notes 07-06 · CompTIA Network+ N10-009_
